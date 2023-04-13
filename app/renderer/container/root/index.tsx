import React from 'react';
import RootLess from './index.less';
import Logo from '../../../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
function Root() {
  const Navigate = useNavigate();
  const HomeList: string[] = ['介绍', '简历', '源码'];
  const linkRouterMap: Record<string, () => void> = {
    简历: () => Navigate('/resume'),
    介绍: () => Navigate('/'),
    源码: () => window.open('https://github.com/zhengsixsix/ResumeElectron'),
  };
  function onRouterToLink(text: string) {
    const linkRouter = linkRouterMap[text];
    if (linkRouter) {
      linkRouter();
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
            {HomeList.map((text, index) => {
              return (
                <div
                  className={RootLess.item}
                  key={index}
                  onClick={() => {
                    onRouterToLink(text);
                  }}
                >
                  {text}
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
