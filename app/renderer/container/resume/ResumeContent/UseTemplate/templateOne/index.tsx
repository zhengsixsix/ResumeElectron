import React from 'react';
import indexLess from './index.less';
import classNames from 'classnames';
import Avatar from './components/Avatar';
import BaseInfo from './components/BaseInfo';
function TemplateOne() {
  return (
    <div className={indexLess['a4-box']}>
      <div className={classNames(indexLess['flex'], indexLess['container'])}>
        <div className={indexLess.left}>
          <div className={indexLess.avatar}>
            <Avatar />
          </div>
          <div className={indexLess.fillColor}></div>
          <div className={indexLess.baseData}>
            <BaseInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
export default TemplateOne;
