import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Link } from "react-router-dom";
// import './App.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import NavigationHeader from '../header/Header';
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

class SiderMenu extends Component {
  render() {
    return (
       

        // <Route exact path="/" component={Stats} />
        // <Route path="/stats" component={Stats} />
        // <Route path="/explorer" component={Explorer} />
        // <Route path="/faucet" component={Faucet} />
        // <Route path="/bridge" component={Bridge} />
        // <Route path="/about" component={About} />
        // <Route path="/wiki" component={Wiki} />
        // <Route path="/blog" component={Blog} />


    <Sider width={200} style={{ background: '#fff' }}>
        <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
        >
        <SubMenu key="sub1" title={<span><Icon type="laptop" />Network</span>}>
            <Menu.Item key="1">
                <Link to="/stats">Network Stats</Link> 
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="/explorer">Block Explorer</Link> 
            </Menu.Item>
            <Menu.Item key="3">
                <Link to="/faucet"> Crypto Faucet</Link> 
           </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="user" />Information</span>}>
            <Menu.Item key="5">
                <Link to="/about">About</Link> 
            </Menu.Item>
            <Menu.Item key="6">
                <Link to="wiki"> Wiki </Link> 
            </Menu.Item>    
            <Menu.Item key="7">
                <Link to="blog"> Blog </Link> 
            </Menu.Item>              
        </SubMenu>
        </Menu>
    </Sider>
    );
  }
}

export default SiderMenu;
