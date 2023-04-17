import React from 'react';
import ResumeLess from './index.less';
import fileAction from '@src/common/utils/file';
import { getAppPath } from '@src/common/utils/appPath';
import Button from '@src/common/components/MyButton';
import Input from '@src/common/components/MyInput';
const getPath = async () => {
  const rootPath = await getAppPath();
  fileAction.read(`${rootPath}app/renderer/container/resume/index.tsx`).then((data) => {
    console.log(data);
  });
};
function Resume() {
  getPath();
  return (
    <div>
      <Button>设置</Button>
      <Input />
      <Input type="textarea" placeholder="你有什么特长爱好呢"></Input>
      这是简历页面
    </div>
  );
}
export default Resume;
