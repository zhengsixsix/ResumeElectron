import React from 'react';
import FileEvent from '../FileEvent';
import { TSUploadInput, TSUploadFile } from '@src/common/types/upload';
import classnames from 'classnames';
import UploadLess from './index.less';
function Upload({ style, accept, multiple = false, visible = true, onAfterClick, onAfterChange }: TSUploadInput) {
  function onChange(e: any) {
    const fileList: any = e?.target?.files || [];
    if (e.target.value === '') return;
    let instance: TSUploadFile[] = [];
    for (let file of fileList) {
      instance.push(new FileEvent(file));
    }
    onAfterChange && onAfterChange(instance);
  }
  return (
    <input
      className={classnames(UploadLess['my-input-upload'], UploadLess['my_input_selector_visible'])}
      type="file"
      style={style}
      accept={accept}
      multiple={multiple}
      onClick={onAfterClick}
      onChange={onChange}
    />
  );
}
export default Upload;
