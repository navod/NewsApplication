import React from 'react';
import NewsCard from '../../../../UI/NewsCard/NewsCard';

const SportsNewsIListItem = props => {
  return <NewsCard data={props.data} category="Sports" />;
};

export default SportsNewsIListItem;
