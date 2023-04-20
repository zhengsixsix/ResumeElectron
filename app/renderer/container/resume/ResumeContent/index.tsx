import React, { useEffect, useState } from 'react';
import Messager, { MESSAGE_EVENT_NAME_MAPS } from '@common/messager';
import ContentLess from './index.less';
import Scroll from '@src/common/components/MyScroll';
import Personal from './UseForm/Personal';
import { RESUME_TOOLBAR_MAPS } from '@src/common/constants/resume';
// 👇 引入简历模版
import * as UseTemplateList from './UseTemplate';
export default function ResumeContent() {
  const [formName, setFormName] = useState('');
  const [showFormModal, setShowFromModal] = useState(false);
  useEffect(() => {
    document.addEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, onReceive);
    return () => {
      document.removeEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, onReceive);
    };
  }, []);
  /**
   * @description 接收订阅事件的传参
   */
  const onReceive = (e: any) => {
    Messager.receive(e, (data: any) => {
      setShowFromModal(true);
      setFormName(data?.form_name);
    });
  };
  const onClose = () => {
    setShowFromModal(false);
    setFormName('');
  };
  return (
    <Scroll maxHeight={650}>
      <UseTemplateList.TemplateOne />
      {showFormModal && <>{formName === RESUME_TOOLBAR_MAPS.workPrefer && <Personal onClose={onClose} />}</>}
    </Scroll>
  );
}
