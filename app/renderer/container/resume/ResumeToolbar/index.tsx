import React, { useEffect, useState } from 'react';
import ToolbartLess from './index.less';
import { RESUME_TOOLBAR_LIST } from '@common/constants/resume';
import Scroll from '@common/components/MyScroll';
export default function ResumeToolbar() {
  const height = document.body.clientHeight;
  // 👇 定义已添加模块与未添加模块
  const [addToobarList, setAddToobarList] = useState<TSResume.SliderItem[]>([]);
  const [unToobarList, setUnToobarList] = useState<TSResume.SliderItem[]>([]);
  useEffect(() => {
    if (RESUME_TOOLBAR_LIST.length > 0) {
      let _addToobarList: TSResume.SliderItem[] = [];
      let _unToobarList: TSResume.SliderItem[] = [];
      RESUME_TOOLBAR_LIST.forEach((item: TSResume.SliderItem) => {
        if (item.require) {
          _addToobarList.push(item);
        } else {
          _unToobarList.push(item);
        }
        setAddToobarList(_addToobarList);
        setUnToobarList(_unToobarList);
      });
    }
  }, []);
  const onAddSliderAction = (moduleToolbar: TSResume.SliderItem) => {
    // 1. 获取已添加模块的所有 key 值
    const addKeysList = addToobarList.map((item: TSResume.SliderItem) => item.key);
    let nextAddToolbarList = [...Array.from(addToobarList)];
    // 2. 如果未包含当前要添加的模块key，则加入
    if (!addKeysList.includes(moduleToolbar.key)) {
      nextAddToolbarList = nextAddToolbarList.concat(moduleToolbar);
    }

    setAddToobarList(nextAddToolbarList);
    const nextUnAddToolbarList = [...Array.from(unToobarList)];
    const findIndex = nextUnAddToolbarList.findIndex((item) => item.key === moduleToolbar.key);
    if (findIndex > -1) {
      nextUnAddToolbarList.splice(findIndex, 1);
    }
    setUnToobarList(nextUnAddToolbarList);
  };
  return (
    <div className={ToolbartLess.slider}>
      <Scroll maxHeight={height - 180}>
        <div className={ToolbartLess.module}>
          <div className={ToolbartLess.title}>
            已添加模块
            <div className={ToolbartLess.line} />
          </div>
          <div className={ToolbartLess.content}>
            {addToobarList.map((ITEM: TSResume.SliderItem) => {
              return (
                <div className={ToolbartLess.box} key={ITEM.key}>
                  <div className={ToolbartLess.info}>
                    <i className={ToolbartLess.info} />
                    <div className={ToolbartLess.text}>
                      <div className={ToolbartLess.name}>{ITEM.name}</div>
                      <div className={ToolbartLess.summary}>{ITEM.summary}</div>
                    </div>
                    {ITEM.require && <div className={ToolbartLess.tips}>必选项</div>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={ToolbartLess.module}>
          <div className={ToolbartLess.title}>
            未添加模块
            <div className={ToolbartLess.line} />
          </div>
          <div className={ToolbartLess.content}>
            {unToobarList.map((ITEM: TSResume.SliderItem) => {
              return (
                <div
                  className={ToolbartLess.box}
                  key={ITEM.key}
                  onClick={() => {
                    onAddSliderAction(ITEM);
                  }}
                >
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
