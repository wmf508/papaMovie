import React from 'react';
import { Icon } from 'antd-mobile';
import '../../styles/pages/home/HeaderNav.scss';

export default function HeaderNav(props) {
  return (
    <nav className="container header-item">
      <div className="row header-items-container">
        <div className="col titles">
          {props.titles.map((title, index) => <span className={`title ${index == 0 && "active"}`} key={index}>{title}</span>)}
        </div>
        <div className="col">
          <Icon type="search" size="xs" />
        </div>
      </div>
    </nav>
  )
}