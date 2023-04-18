import React from 'react';
import ContentLess from './index.less';
import Scroll from '@src/common/components/MyScroll';
// 👇 引入简历模版
import * as UseTemplateList from './UseTemplate';
export default function ResumeContent() {
  return (
    <Scroll maxHeight={650}>
      <UseTemplateList.TemplateOne />
    </Scroll>
  );
}
