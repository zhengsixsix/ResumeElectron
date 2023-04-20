import React from 'react';
import PersonalLess from './index.less';
import Modal from '@src/common/components/MyModal';
import Input from '@src/common/components/MyInput';
interface IProps {
  onClose: () => void;
}
function Personal({ onClose }: IProps) {
  return (
    <Modal.Dialog
      title="个人信息"
      config={{
        cancelBtn: {
          callback: onClose,
        },
      }}
    >
      <div className={PersonalLess.form}>
        <div className={PersonalLess.flex}>
          <div className={PersonalLess.left}>
            <span className={PersonalLess.require}>*</span>姓 名:
          </div>
          <div className={PersonalLess.right}>
            <Input placeholder="请输入姓名"></Input>
          </div>
        </div>
      </div>
    </Modal.Dialog>
  );
}
export default Personal;
