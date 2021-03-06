import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/styles.less';

import SuggestionsList from './components/SuggestionsList';
import QueryInput from './components/QueryInput';

import { handleKeyPress } from './handlers';

import Api from './api/FetchApi';
import { buildRequestBody } from "./api/helpers";
import { SHORT_TYPES } from "./constants/index";

class DadataStandardizations extends Component {

  static propTypes = {
    apiUrl:PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    //deferRequestBy: PropTypes.number.isRequired, // doesn't work with fetch Api
    hint: PropTypes.string.isRequired,
    minChars: PropTypes.number.isRequired,
    geolocation: PropTypes.bool.isRequired,
    query: PropTypes.string.isRequired,
    service: PropTypes.string.isRequired,
    highlighting: PropTypes.bool.isRequired,
    specialRequestOptions: PropTypes.object,
    placeholder: PropTypes.string,
    autocomplete: PropTypes.string,

		validate: PropTypes.func,
		errorMessage: PropTypes.string,

    //handlers:
    onSelect: PropTypes.func.isRequired,
    onChange: PropTypes.func,
    onError: PropTypes.func,
    onBlur: PropTypes.func,
    suggestionsFormatter: PropTypes.func,
    selectedSuggestionFormatter: PropTypes.func,
  };

  static defaultProps = {
		onChange: () => {},
		onBlur: () => {},
    token: '',
    count: 10,
    //deferRequestBy: 300,
    minChars: 3,
    geolocation: true,
    hint: 'Выберите вариант ниже или продолжите ввод',
    query: '',
    service: 'address',
    highlighting: true,
    autocomplete: 'off'
  };

  constructor(props) {
    super(props);
    const {apiUrl, token, service, geolocation, autocomplete} = props;
    this.api = new Api(apiUrl, token, service, geolocation);
    this.handleKeyPress = handleKeyPress.bind(this);

    this.state = {
			_startValidation: false,
			_isValid: false,
			_value: this.props.value,
			query: '',
			standardizations: [],
			selected: -1,
			loading: false,
			success: false,
			error: false,
			showSuggestions: false
    }
  }

	componentDidMount() {
		if(this.props.value) {
			this.setValue(this.props.value);
		}
	}

  componentWillMount() {
    this.setState({ query: this.props.query });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      query: nextProps.query,
      standardizations: [],
      showSuggestions: false,
      success: false,
    });
  }

  fetchData = (query) => {
    this.setState({
      loading: true,
      success: false,
    });

    const requestBody = buildRequestBody(query, this.props);

    this.api.standardizations(requestBody)
      .then(standardizations => {
        this.setState({
          standardizations,
          loading: false,
          error: false,
          success: true,
          showSuggestions: true,
        });
      })
      .catch(e => this.handleError(e));
  };

  searchWords = () => {
    const { query } = this.state;
    const searchWords = query.split(/[^-А-Яа-яЁё\d\w]+/);
    const { service } = this.props;
    if (service === Api.ADDRESS) {
      return searchWords.filter(word => !SHORT_TYPES.includes(word));
    }
    return searchWords;
  };

  handleChange = (e) => {
    const query = e.target.value;
    this.setState({
      query,
      selected: -1
    });

    const { minChars } = this.props;
    if (query.length >= minChars) {
      this.fetchData(query);
    } else {
      this.setState({
        standardizations: [],
        showSuggestions: false,
        success: false,
      });
    }

    const { onChange } = this.props;
    if (onChange) {
      onChange(query);
    }

		this.changeValue(e);
    this.validateInput();
  };

  handleBlur = (e) => {
    this.makeListInvisible();
    const { onBlur } = this.props;
    if (onBlur) {
      onBlur();
    }

		this.changedValue(e);
  };

  handleError = (e) => {
    this.setState({
      error: true,
      loading: false,
      success: false,
    });
    const { onError } = this.props;
    if (onError) {
      onError(e);
    }
  };

  selectSuggestion = (index) => {
    this.setState(({standardizations}) => {
      const selectedSuggestion = standardizations[index];
      const query = this.selectedSuggestionFormatter(selectedSuggestion);
      return {
        selected: index,
        query
      }
    });
  };

  handleSelect = (index) => () => {
    const { selected } = this.state;
    if (index !== selected) {
      this.selectSuggestion(index);
    }
    const selectedSuggestion = this.state.standardizations[index];
    const { onSelect } = this.props;
    onSelect(selectedSuggestion)
  };

  formatter = (suggestion, name) => {
    return suggestion.result;
  };

  suggestionsFormatter = (suggestion) => {
    return this.formatter(suggestion, 'suggestionsFormatter')
  };

  selectedSuggestionFormatter = (suggestion) => {
    return this.formatter(suggestion, 'selectedSuggestionFormatter')
  };

  subtextFormatter = (suggestion) => {
    const { service } = this.props;
    if (service === 'party') {
      return `ИНН ${suggestion.data.inn}`;
    }
    return null;
  };

  makeListVisible = () => {
    const { showSuggestions, standardizations } = this.state;
    if (showSuggestions) {
      return
    }
    this.setState({showSuggestions: !!standardizations.length});
  };

  handleFocus = () => {
    const { query, success, standardizations, selected, error } = this.state;
    const { minChars } = this.props;

    if (!!standardizations.length && selected === -1) {
      this.makeListVisible();
    } else if (query.length >= minChars && !success && !error) {
      this.fetchData(query);
    }
  };

  makeListInvisible = () => {
    const { showSuggestions } = this.state;
    if (!showSuggestions) {
      return;
    }
    this.setState({showSuggestions: false});
  };

	setValue(value) {
		this.setState({
			_value: value,
		}, () => {
      //this is not called by some obscure reason
      //https://github.com/facebook/react/issues/6320
      //therefore we validate input outside asynchronously
			this.validateInput();
		});
	}

	getValue() {
		return this.state._value;
	}

	validateInput() {
		const value = this.getValue();
		const validates = [];

		this.setState({
			_isValid: _.every(validates, Boolean),
		}, () => {
			this.props.validate();
		});
	}

	changeValue(event) {
		this.setValue(event.currentTarget.value);
		this.props.onChange(event);
	}
	changedValue(event) {
		if (!this.state._startValidation) {
			this.setState({
				_startValidation: true,
			});
		}
		this.props.onBlur();
	}

  render() {
    const {loading, query, showSuggestions, standardizations, selected} = this.state;
		const errorClass = this.state._startValidation ? (this.state._isValid ? '' : ' error') : '';
		const errorMessage = this.state._isValid ? '' : this.props.errorMessage;
		const inputValue = this.getValue() ? this.getValue() : this.props.value;
    const autocomplete = this.props.autocomplete;

    return (
      <div className={'suggestions-wrapper' + errorClass}>
        <div className="suggestions-container">
          <QueryInput
            onChange={ this.handleChange }
            placeholder={ this.props.placeholder }
            loading={ loading }
            query={ query }
            onMouseDown={ this.makeListVisible }
            onKeyPress={ this.handleKeyPress }
            onBlur={ this.handleBlur }
            onFocus={ this.handleFocus }
            autocomplete={ autocomplete }
          />
          <SuggestionsList
            standardizations={ standardizations }
            hint={ this.props.hint }
            visible={ showSuggestions }
            onSelect={this.handleSelect}
            selected={selected}
            suggestionsFormatter={this.suggestionsFormatter}
            searchWords={ this.searchWords }
            highlighting = { this.props.highlighting }
            subtextFormatter = { this.subtextFormatter }
          />
        </div>
        <div className="errorMessage">{errorMessage}</div>
      </div>
    );
  }
}

export default DadataStandardizations;
