import React, { Component } from 'react';
import 'antd/dist/antd.css'
// import './App.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import NavigationHeader from '../header/Header';
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

class SiderMenu extends Component {
  render() {
    return (
       
    <Sider width={200} style={{ background: '#fff' }}>
        <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
        >
        <SubMenu key="sub1" title={<span><Icon type="laptop" />Network</span>}>
            <Menu.Item key="1">Network Stats</Menu.Item>
            <Menu.Item key="2">Block Explorer</Menu.Item>
            <Menu.Item key="3">Crypto Faucet</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="user" />Information</span>}>
            <Menu.Item key="5">About Goerli</Menu.Item>
            <Menu.Item key="6">Wiki</Menu.Item>              
        </SubMenu>
        </Menu>
    </Sider>
    );
  }
}

export default SiderMenu;
