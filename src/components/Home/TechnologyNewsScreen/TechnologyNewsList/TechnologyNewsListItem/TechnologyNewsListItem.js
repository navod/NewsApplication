import React from 'react';
import NewsCard from '../../../../UI/NewsCard/NewsCard';

const TechnologyNewsListItem = props => {
  return <NewsCard data={props.data} category="Technology" />;
};

export default TechnologyNewsListItem;
