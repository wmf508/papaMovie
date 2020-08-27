import React from 'react';
import '../../styles/components/common/FooterNav.scss';

export default function FooterNav(props) {
  const items = props.items;
  return (
    <div className="footer-nav">
      {items.map(item => (
        <div className="footer-item">
          <span>icon</span>
          <div className="item-name">{item}</div>
        </div>
      ))}
    </div>
  )
}