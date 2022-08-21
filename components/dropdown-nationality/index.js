import { DownOutlined } from '@ant-design/icons';
import React from 'react';

export default function DropdownNationality(props) {
  const { btn_content, content_dropdown, class_name } = props;
  return (
    <div className={`dropdown-language ${class_name}`}>
      <a className='btn-dropdown-language'>{btn_content}</a>
      <div className='dropdown-language-content'>{content_dropdown}</div>
    </div>
  );
}
