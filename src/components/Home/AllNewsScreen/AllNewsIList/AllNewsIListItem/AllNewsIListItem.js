import React from 'react';
import NewsCard from '../../../../UI/NewsCard/NewsCard';

const AllNewsIListItem = props => {
  return <NewsCard data={props.data} category="All" />;
};

export default AllNewsIListItem;
