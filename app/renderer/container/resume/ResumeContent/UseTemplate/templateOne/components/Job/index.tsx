/**
 * @desc 求职意向
 * @author pengdaokuan
 */
import React from 'react';
import JobLess from '../../../styles/template-one.less';
import './index.less';

function Job() {
  return (
    <div className={JobLess.container}>
      <p className={JobLess.title}>求职意向 Work</p>
      <ul className={JobLess.content}>
        <li>职位：前端工程师</li>
        <li>城市：广州｜成都｜海口</li>
      </ul>
    </div>
  );
}

export default Job;
