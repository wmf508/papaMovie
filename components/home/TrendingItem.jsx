import React from 'react';
import '../../styles/pages/home/TrendingItem.scss';

export default function TrendingItem(props){
  const movie = props.movie;
  return (
    <div className="trending-container">
      <img src={movie.poster} alt={movie.name}/>
      <div className="name">{movie.name}</div>
      <div className="actors">主演: {movie.actors.join(' ')}</div>
    </div>
  )
}