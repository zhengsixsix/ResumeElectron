/**
 * @desc 工作经历
 * @author pengdaokuan
 */
import WorkLess from './index.less';
import React from 'react';

function Work() {
  return (
    <div className={WorkLess.content}>
      <p className={WorkLess.label}>工作经历 Post</p>
      <ul className={WorkLess.list}>
        <li className={WorkLess.flex}>
          <div className={WorkLess.left}>
            <p>2019.07-至今</p>
            <p>前端工程师</p>
          </div>
          <div className={WorkLess.right}>
            <p>CVTE</p>
            <p>就职于CVTE，部门人送广州彭于晏，其他的没啥介绍了</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Work;
