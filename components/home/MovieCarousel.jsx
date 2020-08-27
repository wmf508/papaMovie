import React from 'react';
import { Carousel } from 'antd-mobile';
import '../../styles/pages/home/MovieCarousel.scss';

export default function MovieCarousel (props) {
  const carouselData = props.carouselData
  return (
    <div className="carousel">
      <Carousel autoplay infinite dotStyle={{backgroundColor:'white'}} dotActiveStyle={{backgrounColor:'red'}}>
        {carouselData.map(movie => {
          return (
            <div className="movie-item" key={movie.id}>
              <img src={movie.poster} />
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}