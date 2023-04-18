import React from 'react';
import ActionLess from './index.less';
import Button from '@src/common/components/MyButton';
import { useNavigate } from 'react-router';
export default function ResumeAction() {
  const BtnStyle = {
    backgroundColor: '#27292d',
    color: '#fff',
  };
  const navigate = useNavigate();
  return (
    <div className={ActionLess.header}>
      <div
        className={ActionLess.header_left}
        onClick={() => {
          navigate(-1);
        }}
      >
        返回
      </div>
      <div className={ActionLess.header_righht}>
        <Button style={BtnStyle}>导出PDF</Button>
      </div>
    </div>
  );
}
