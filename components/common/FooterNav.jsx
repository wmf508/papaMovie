import React from 'react';
import { Icon } from 'antd-mobile';
import '../../styles/components/common/FooterNav.scss';

export default function FooterNav(props) {
  const items = props.items;
  return (
    <div className="footer-nav">
      {items.map((item, index) => (
        <div className={`footer-nav-item ${index === 0 && 'footer-nav-active'}`} key={item.title}>
          <i className="iconfont footer-nav-icon" dangerouslySetInnerHTML={{ __html:item.icon}}></i>
        <div className="item-name">{item.title}</div>
        </div>
  ))
}
    </div >
  )
}