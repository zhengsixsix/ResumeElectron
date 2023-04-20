import React from 'react';
import DialogLess from './index.less';
import Button from '../../MyButton';
import classNames from 'classnames';
import { IDialogModal } from '../types';
import CloseImg from '@assets/icon/cancel.png';
function Dialog({
  title,
  width,
  className,
  showFooter,
  renderFooter,
  config = {},
  eleRef,
  children,
  childStyle,
}: IDialogModal) {
  const { cancelBtn = { isShow: true }, submitBtn = { isShow: true } } = config;
  return (
    <div className={DialogLess['vis-mask']}>
      <div className={DialogLess['center']}>
        <div
          className={classNames(DialogLess[`${className}`], DialogLess['vis-dialog-box'])}
          style={{ width: width || 760 }}
          ref={eleRef}
        >
          <div className={DialogLess['vis-dialog-header']}>{title || 'VisResumeMook 提示您'}</div>
          <img
            src={CloseImg}
            alt=""
            className={DialogLess['vis-dialog-close']}
            onClick={() => {
              cancelBtn?.callback && cancelBtn.callback();
            }}
          />
          <div className={DialogLess['vis-dialog-content']} style={childStyle}>
            {children}
          </div>
          {showFooter &&
            (renderFooter || (
              <div className={DialogLess['vis-dialog-footer']}>
                {cancelBtn?.isShow && (
                  <Button
                    size="middle"
                    className={classNames(
                      DialogLess['vis-dialog-footer-btn'],
                      DialogLess['vis-dialog-footer-cancel-btn']
                    )}
                    onClick={() => {
                      cancelBtn?.callback && cancelBtn.callback();
                    }}
                  >
                    {cancelBtn?.text || '取消'}
                  </Button>
                )}
                {submitBtn?.isShow && (
                  <Button
                    size="middle"
                    className={classNames(
                      DialogLess['vis-dialog-footer-btn'],
                      DialogLess['vis-dialog-footer-cancel-btn']
                    )}
                    onClick={() => {
                      submitBtn?.callback && submitBtn.callback();
                    }}
                  >
                    {submitBtn?.text || '确定'}
                  </Button>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
export default Dialog;
