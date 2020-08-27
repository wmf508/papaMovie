import React from 'react';
import Head from 'next/head';
import { title, homeHeaderNavTitles, footerNavItems } from '../config.js';
import HeaderNav from '../components/home/HeaderNav';
import FooterNav from '../components/common/FooterNav';
import MovieCarousel from '../components/home/MovieCarousel';
import TrendingItem from '../components/home/TrendingItem';
import { movieList, carouselData } from '../mock/mockData';
import '../styles/pages/home/home.scss';

export default function Home() {
  return (
    <div>
      {/* 页面标题 */}
      <Head>
        <title>{title}</title>
      </Head>
      {/* 首页顶部导航 */}
      <header className="home-header-nav">
        <HeaderNav titles={homeHeaderNavTitles} />
      </header>
      {/* 视频列表 */}
      <section className="video-list">
        <div className="carousel">
          <MovieCarousel carouselData={carouselData} />
        </div>
        <div className="trending-items">
          {movieList.map(movie => (
            <TrendingItem movie={movie} key={movie.id} />
          ))}
        </div>
      </section>
      <footer>
        <FooterNav items={footerNavItems}/>
      </footer>
    </div>
  )
}