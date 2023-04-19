/**
 * @desc 联系方式
 * @author pengdaokuan
 */
import React from 'react';
import ContactLess from '../../../styles/template-one.less';

function Contact() {
  return (
    <div className={ContactLess.container}>
      <p className={ContactLess.title}>联系方式 Contact</p>
      <ul className={ContactLess.content}>
        <li>电话：176****2612</li>
        <li>邮箱：1063137960@qq.com</li>
      </ul>
    </div>
  );
}

export default Contact;
