import React from 'react';
import PropTypes from 'prop-types';

import Suggestion from './Suggestion';

const SuggestionsList = (props) => {
  const { standardizations, visible, selected } = props;

  if (!!standardizations.length && visible) {
    return (
      <div className="suggestions-wrapper">
        <div className="suggestions-suggestions">
          <div className="suggestions-hint">{props.hint}</div>
          {standardizations.map((standardization, index) =>
            <Suggestion
              key={ index }  /* @todo our planet needs something better than this */
              index={ index }
              selected={ index === selected }
              onSelect={ props.onSelect(index) }
              searchWords = { props.highlighting ? props.searchWords() : [] }
              highlighting = { props.highlighting }
              value = { props.suggestionsFormatter(standardization) }
              subtext = { props.subtextFormatter(standardization) }
            />)
          }
        </div>
      </div>
    );
  }
  return null;
};

SuggestionsList.propTypes = {
  standardizations: PropTypes.array.isRequired,
  hint: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  suggestionsFormatter: PropTypes.func.isRequired,
  subtextFormatter: PropTypes.func.isRequired,
  searchWords: PropTypes.func.isRequired,
  highlighting: PropTypes.bool.isRequired,
};
SuggestionsList.defaultProps = {
};

export default SuggestionsList;
