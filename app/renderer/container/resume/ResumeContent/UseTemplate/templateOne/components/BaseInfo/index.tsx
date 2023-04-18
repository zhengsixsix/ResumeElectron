import React from 'react';
import BaseInfoLess from '../../../styles/template-one.less';
function BaseInfo() {
  return (
    <div className={BaseInfoLess.container}>
      <p className={BaseInfoLess.title}>基本信息</p>
      <ul className={BaseInfoLess.content}>
        <li className={BaseInfoLess.item}>院校：湖南瞎说大学</li>
        <li className={BaseInfoLess.item}>专业：软件工程</li>
        <li className={BaseInfoLess.item}>学历：本科</li>
        <li className={BaseInfoLess.item}>学年: 2015.09 - 2019.06</li>
        <li className={BaseInfoLess.item}>籍贯：海南·海口</li>
      </ul>
    </div>
  );
}
export default BaseInfo;
