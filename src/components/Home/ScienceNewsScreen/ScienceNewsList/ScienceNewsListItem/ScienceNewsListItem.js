import React from 'react';
import NewsCard from '../../../../UI/NewsCard/NewsCard';

const ScienceNewsListItem = props => {
  return <NewsCard data={props.data} category="Science" />;
};

export default ScienceNewsListItem;
