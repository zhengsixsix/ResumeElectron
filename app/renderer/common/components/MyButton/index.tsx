import React from 'react';
import ButtonLess from './index.less';
import classnames from 'classnames';
export interface Button {
  size?: 'middle' | 'big' | 'small';
  width?: number;
  style?: React.CSSProperties;
  children?: React.ReactNode | any;
  disabled?: boolean;
  className?: string;
  onClick?: Function;
  border?: boolean;
}
function Button({ size = 'small', style, width, children, disabled, className, onClick, border = true }: Button) {
  return (
    <button
      disabled={disabled}
      style={{
        ...style,
        width: width,
      }}
      className={classnames(`${ButtonLess.Button}`, ButtonLess[`Button-${size}`])}
      onClick={() => {
        onClick && onClick();
      }}
    >
      {children}
    </button>
  );
}
export default Button;
