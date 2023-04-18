import React from 'react';
import AvatarLess from './index.less';
import AvatarImage from '@assets/avatar.jpg';
function Avatar() {
  return (
    <div className={AvatarLess.box}>
      <div className={AvatarLess.avatar}>
        <img src={AvatarImage} alt="" />
      </div>
    </div>
  );
}
export default Avatar;
