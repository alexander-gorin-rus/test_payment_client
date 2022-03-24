import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

const Header = () => {

  const [current, setCurrent] = useState('')

  const handleClick = e => {
    console.log('click ', e);
    setCurrent({ current: e.key });
  };

    return (
      <Menu onClick={handleClick} selectedKeys={[]} mode="horizontal">
        <Menu.Item key="money">
            <Link to='/get-payments'>Отобразить платежи</Link>
        </Menu.Item>
        <Menu.Item key="alipay">
        <Link to='/create-payment'>Создать платеж</Link>
        </Menu.Item>
      </Menu>
    );
}

export default Header;