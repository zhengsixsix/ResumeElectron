import React from 'react';
import BaseInfoLess from '@src/container/templates/styles/template-one.less';
function BaseInfo() {
  return (
    <div className={BaseInfoLess.container}>
      <p className={BaseInfoLess.title}>基本信息</p>
      <ul className={BaseInfoLess.content}>
        <li>院校：湖南瞎说大学</li>
        <li>专业：软件工程</li>
        <li>学历：本科</li>
        <li>学年：2015.09 - 2019.06</li>
        <li>籍贯：海南·海口</li>
      </ul>
    </div>
  );
}
export default BaseInfo;
