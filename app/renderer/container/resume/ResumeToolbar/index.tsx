import React, { useEffect, useState } from 'react';
import ToolbartLess from './index.less';
import { RESUME_TOOLBAR_LIST } from '@common/constants/resume';
import { onAddToolbar, onDeleteToolbar } from './utils';
import { useDispatch } from 'react-redux';
import { increment } from '@src/store/features/templateModel';
import Messager, { MESSAGE_EVENT_NAME_MAPS } from '@common/messager';
import Scroll from '@common/components/MyScroll';
import workPng from '@assets/icon/work.png';
import addPng from '@assets/icon/add.png';
import editPng from '@assets/icon/edit.png';
import deletePng from '@assets/icon/delete.png';
export default function ResumeToolbar() {
  const dispatch = useDispatch();
  const height = document.body.clientHeight;
  // 👇 定义已添加模块与未添加模块
  const [addToobarList, setAddToobarList] = useState<TSResume.SliderItem[]>([]);
  const [unToobarList, setUnToobarList] = useState<TSResume.SliderItem[]>([]);
  useEffect(() => {
    if (RESUME_TOOLBAR_LIST.length > 0) {
      setAddToobarList(RESUME_TOOLBAR_LIST.filter((v) => v.require));
      setUnToobarList(RESUME_TOOLBAR_LIST.filter((v) => !v.require));
    }
  }, []);
  const changeResumeToolbarKeys = (moduleKeys: string[]): void => {
    if (moduleKeys.length > 0) {
      dispatch(increment(moduleKeys));
    }
  };
  const onAddSliderAction = (moduleToolbar: TSResume.SliderItem) => {
    let nextAddToolbarList = onAddToolbar(addToobarList, moduleToolbar);
    setAddToobarList(nextAddToolbarList);
    let nextUnAddToolbarList = onDeleteToolbar(unToobarList, moduleToolbar);
    setUnToobarList(nextUnAddToolbarList);
    changeResumeToolbarKeys(nextAddToolbarList.map((item: TSResume.SliderItem) => item.key));
  };
  const onUnAddSliderAction = (moduleToolbar: TSResume.SliderItem) => {
    let nextUnAddToolbarList = onDeleteToolbar(addToobarList, moduleToolbar);
    setAddToobarList(nextUnAddToolbarList);
    let nextAddToolbarList = onAddToolbar(unToobarList, moduleToolbar);
    setUnToobarList(nextAddToolbarList);
    changeResumeToolbarKeys(nextUnAddToolbarList.map((item: TSResume.SliderItem) => item.key));
  };
  const onEditSliderAction = (addSlider: TSResume.SliderItem) => {
    Messager.send(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, {
      form_name: addSlider.key,
    });
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
                    <img src={workPng} alt="" className={ToolbartLess.icon} />
                    <div className={ToolbartLess.text}>
                      <div className={ToolbartLess.name}>{ITEM.name}</div>
                      <div className={ToolbartLess.summary}>{ITEM.summary}</div>
                    </div>
                    {ITEM.require && <div className={ToolbartLess.tips}>必选项</div>}
                    {!ITEM.require && (
                      <div className={ToolbartLess.action}>
                        <img
                          src={editPng}
                          alt=""
                          className={ToolbartLess.edit}
                          onClick={() => {
                            onEditSliderAction(ITEM);
                          }}
                        />
                        <img
                          src={deletePng}
                          alt=""
                          className={ToolbartLess.delete}
                          onClick={(e: React.MouseEvent) => {
                            // 阻止冒泡
                            e.stopPropagation && e.stopPropagation();
                            onUnAddSliderAction(ITEM);
                          }}
                        />
                      </div>
                    )}
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
                <div className={ToolbartLess.box} key={ITEM.key}>
                  <div className={ToolbartLess.info}>
                    <img src={workPng} alt="" className={ToolbartLess.icon} />
                    <div className={ToolbartLess.text}>
                      <div className={ToolbartLess.name}>{ITEM.name}</div>
                      <div className={ToolbartLess.summary}>{ITEM.summary}</div>
                    </div>
                    <div className={ToolbartLess.action}>
                      <img
                        src={addPng}
                        alt=""
                        className={ToolbartLess.add}
                        onClick={() => {
                          onAddSliderAction(ITEM);
                        }}
                      />
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
