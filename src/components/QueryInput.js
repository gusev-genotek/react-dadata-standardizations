import React from 'react';
import PropTypes from 'prop-types';

const QueryInput = (props) => {
    const {loading} = props;
    const className = `suggestions-input${loading ? ' loading' : '' }`;

    return (
      <input
        className={ className }
        placeholder = { props.placeholder }
        onChange={ props.onChange }
        value={ props.query }
        onMouseDown={ props.onMouseDown }
        onKeyPress={ props.onKeyPress }
        onKeyDown={ props.onKeyPress }
        onBlur={ props.onBlur }
        onFocus={ props.onFocus }
        autoComplete={props.autocomplete}
        name='ccname'
      />
    );
};

QueryInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onMouseDown: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  query: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  autocomplete: PropTypes.string
};

QueryInput.defaultProps = {
  loading: false,
  placeholder: '',
  autocomplete: 'off'
};

export default QueryInput;
