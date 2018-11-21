import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css'
import NavigationHeader from '../layout/header/Header';
import SiderMenu from '../layout/grid/SiderMenu';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

const AboutPage = () => (
  <Layout style={layoutStyle}>
  <NavigationHeader />
  <Layout>
    <SiderMenu />
    <Layout style={{ padding: '0 24px 24px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Network</Breadcrumb.Item>
          <Breadcrumb.Item>About</Breadcrumb.Item>
      </Breadcrumb>
      <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
      </Content>
    </Layout>
  </Layout>
</Layout>
);

const layoutStyle = {
  flex: 1, 
  height: '100vh'
};

export default AboutPage;
