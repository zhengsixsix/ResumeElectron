import React from 'react';
import RootLess from './index.less';
import Logo from '@assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { ROUTER_ENTRY } from '@common/constants/router';
import { isHttpOrHttpsUrl } from '@common/utils/router';
const { ipcRenderer } = window.require('electron');
import Item from '@common/types/routerItm';

function Root() {
  const Navigate = useNavigate();
  function onRouterToLink(route: Item) {
    if (isHttpOrHttpsUrl(route.url)) {
      ipcRenderer.invoke('jumpFun', route.url);
    } else {
      Navigate(route.url);
    }
  }

  return (
    <React.StrictMode>
      <div className={RootLess.root}>
        <div className={RootLess.container}>
          <img src={Logo} alt="" />
          <div className={RootLess.title}>阿尔法狗弟</div>
          <div className={RootLess.tips}>一个模板简历制作平台，让你的简历更加出众 ~</div>
          <div className={RootLess.action}>
            {ROUTER_ENTRY.map((router: Item) => {
              return (
                <div
                  className={RootLess.item}
                  key={router.key}
                  onClick={() => {
                    onRouterToLink(router);
                  }}
                >
                  {router.text}
                </div>
              );
            })}
          </div>
        </div>
        <div className={RootLess.copyright}>
          <div className={RootLess.footer}>
            <p className={RootLess.copyright}>
              Copyright © 2018-{new Date().getFullYear()} All Rights Reserved. Copyright By pengdaokuan
            </p>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
}
export default Root;
