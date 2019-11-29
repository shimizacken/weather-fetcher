import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import List from './list';
import style from './style.scss';

export const SearchHistoryContainer = () => {
  const searchHistory = useSelector(state => state.searchHistory);

  if (!searchHistory) {
    return null;
  }

  return (
    <div className={style.searchHistoryPanel}>
      <h4>History ({searchHistory.length})</h4>
      <List list={searchHistory.reverse()} />
    </div>
  );
};

SearchHistoryContainer.propTypes = {
  searchHistory: PropTypes.array
};
