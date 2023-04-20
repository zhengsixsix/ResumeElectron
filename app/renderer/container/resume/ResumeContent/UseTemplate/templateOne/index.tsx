import React from 'react';
import { useSelector } from 'react-redux';
import indexLess from './index.less';
import { RESUME_TOOLBAR_MAPS } from '@src/common/constants/resume';
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
  // 获取简历信息
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  // 获取工具条模块
  const resumeToolbarKeys: string[] = useSelector((state: any) => state.templateModel.resumeToolbarKeys);
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
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.contact) && <Contact />}
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.workPrefer) && <Job />}
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.certificate) && <Certificate />}
          </div>
        </div>
        <div className={indexLess.center}>
          {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.evaluation) || (base?.username && <Synopsis />)}
          <div className={indexLess.listData}>
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.skill) && <Skill />}
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.schoolExperience) && <Post />}
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.projectExperience) && <Project />}
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.workExperience) && <Work />}
          </div>
        </div>
      </div>
    </div>
  );
}
export default TemplateOne;
