import React from 'react';
import NewsCard from '../../../../UI/NewsCard/NewsCard';

const BusinessNewsListItem = props => {
  return <NewsCard data={props.data} category="Business" />;
};

export default BusinessNewsListItem;
