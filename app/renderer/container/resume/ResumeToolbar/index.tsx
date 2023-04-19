import React from 'react';
import ToolbartLess from './index.less';
import { RESUME_TOOLBAR_LIST } from '@common/constants/resume';
import Scroll from '@common/components/MyScroll';
export default function ResumeToolbar() {
  const height = document.body.clientHeight;
  return (
    <div className={ToolbartLess.slider}>
      <Scroll maxHeight={height - 180}>
        <div className={ToolbartLess.module}>
          全部模块
          <div className={ToolbartLess.content}>
            {RESUME_TOOLBAR_LIST.map((ITEM: TSResume.SliderItem) => {
              return (
                <div className={ToolbartLess.box} key={ITEM.key}>
                  <div className={ToolbartLess.info}>
                    <i className={ToolbartLess.info} />
                    <div className={ToolbartLess.text}>
                      <div className={ToolbartLess.name}>{ITEM.name}</div>
                      <div className={ToolbartLess.summary}>{ITEM.summary}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Scroll>
    </div>
  );
}
