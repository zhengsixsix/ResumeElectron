import React from 'react';
import indexLess from './index.less';
import classNames from 'classnames';
import Avatar from './components/Avatar';
import BaseInfo from './components/BaseInfo';
import Contact from './components/Contact';
import Job from './components/Job';
import Certificate from './components/Certificate';
import Synopsis from './components/Synopsis';
import Skill from './components/Skill';
import Post from './components/Post';
import Project from './components/Project';
import Work from './components/Work';
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
            <Contact />
            <Job />
            <Certificate />
          </div>
        </div>
        <div className={indexLess.center}>
          <Synopsis />
          <div className={indexLess.listData}>
            <Skill />
            <Post />
            <Project />
            <Work />
          </div>
        </div>
      </div>
    </div>
  );
}
export default TemplateOne;
