import React from 'react';
import loading from '../loading.gif';


const Loading = () => {
  return (
    <div className="loading">
      <h4>loading...</h4>
      <img src={loading} alt="Loading..."/>
    </div>
  );
};

export default Loading;
