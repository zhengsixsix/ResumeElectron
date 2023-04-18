import React from 'react';
import ScorllLess from './index.less';
interface IProps {
  children: React.ReactNode;
  maxHeight?: number;
  style?: React.CSSProperties;
  innerStyle?: React.CSSProperties;
  onScrollTop?: (scrollTop: number) => void;
}
export default function Scroll({ children, maxHeight = 200, style = {}, innerStyle = {}, onScrollTop }: IProps) {
  function onScroll(e: any) {
    const _event = e.target || e.currentTarget;
    onScrollTop && onScrollTop(_event);
  }
  let _style = { ...style };
  if (maxHeight) {
    _style = { ..._style, maxHeight: `${maxHeight}px` };
  }
  return (
    <div className={ScorllLess['scroll-box-outer']} style={_style} onScroll={onScroll}>
      <div className={ScorllLess['scroll-box-hidden']} style={{ maxHeight: `${maxHeight}px` }}>
        <div className={ScorllLess['scroll-box-inter']} style={innerStyle}>
          {children}
        </div>
      </div>
    </div>
  );
}
