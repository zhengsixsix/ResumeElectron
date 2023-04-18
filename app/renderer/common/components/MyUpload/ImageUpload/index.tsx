import React from 'react';
import ImageUploadLess from './index.less';
import Upload from '../Upload';
import { TSUploadInput } from '@src/common/types/upload';
import Icon from '@assets/icon/upload.png';
interface IProps extends TSUploadInput {
  icon?: any;
  text?: any;
  /**
   * @description 是否阻止input点击之后显示文件管理器
   */
  preventInputManager?: boolean;
}
const ImageUpload: React.FC<IProps> = ({
  icon = Icon,
  text = '上传头像',
  preventInputManager = false,
  onAfterClick = () => {},
  ...otherProps
}) => {
  return (
    <div className={ImageUploadLess['my_input_image_upload_wrapper']}>
      {!preventInputManager && (
        <div className={ImageUploadLess['my_input_image_upload_input']}>
          <Upload {...otherProps} onAfterClick={() => {}} style={{ width: '112px', height: '152px' }} />
        </div>
      )}
      <div className={ImageUploadLess['my_input_image_upload_box']}>
        <img src={icon} alt="" className={ImageUploadLess['my_input_image_upload__icon']} />
        <p>{text}</p>
      </div>
    </div>
  );
};
export default ImageUpload;
