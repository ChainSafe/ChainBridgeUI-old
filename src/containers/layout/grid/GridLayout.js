import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import NavigationHeader from '../header/Header';
import SiderMenu from './SiderMenu';

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

class GridLayout extends Component {
  render() {
    return (
      <Layout>
        <NavigationHeader />
        <Layout>
          <SiderMenu />
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default GridLayout;
