import React from 'react';
import ResumeLess from './index.less';
import fileAction from '@src/common/utils/file';
import { getAppPath } from '@src/common/utils/appPath';
import ResumeAction from './ResumeAction';
import ResumeContent from './ResumeContent';
import ResumeToolbar from './ResumeToolbar';
const getPath = async () => {
  const rootPath = await getAppPath();
  fileAction.read(`${rootPath}app/renderer/container/resume/index.tsx`).then((data) => {
    console.log(data);
  });
};
function Resume() {
  getPath();
  return (
    <div className={ResumeLess.container}>
      <header className={ResumeLess.header}>
        <ResumeAction />
      </header>
      <main className={ResumeLess.main}>
        <ResumeContent />
      </main>
      <aside className={ResumeLess.aside}>
        <ResumeToolbar />
      </aside>
    </div>
  );
}
export default Resume;
