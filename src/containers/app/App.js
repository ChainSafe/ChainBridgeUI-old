import React, { Component } from 'react';
import 'antd/dist/antd.css'
import './App.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import NavigationHeader from '../layout/header/Header';
import GridLayout from '../layout/grid/GridLayout';
// import ContractForm from '../forms/ContractForm';
// import TxSummary from './TxSummary';
// import Error from './Error';
// import getNetwork from '../../../../scripts/network';
const Web3 = require('web3');

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

class App extends Component {
  state= {
    amount: 0,
    network: null,
    dataProcessed: false,
    web3: null,
    error: null,
  };

  async componentDidMount() {
    // const selectedNetwork = await getNetwork();
    // this.setState({ network: selectedNetwork })
    // if (window.ethereum) {
    //   window.web3 = new Web3(window.ethereum);
    //   try {
    //       const acc = await window.ethereum.enable();
    //       const f = await window.web3.eth.currentProvider
    //   } catch (error) {
    //       console.log("oops we caught an error", error)
    //   }
    // }
    // else if (window.web3) {
    //     window.web3 = new Web3(window.web3.currentProvider);
    // }
    // else {
    //     console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    // }
  }

  // checkProvider = () => {
  //   if(window.web3 !== 'undefined') {
  //     return true;
  //   }
  //   return false;    
  // }

  // processRequest = ({amount, network}) => {
  //   this.setState({ amount, network, dataProcessed: true }, function () {
  //     console.log(this.state);
  //   });
  // }

  render() {
    const { dataProcessed, error, network } = this.state;
    return (
      <GridLayout />
    //   <Layout>
    //     <NavigationHeader />
    //   <Layout>
    //     <Sider width={200} style={{ background: '#fff' }}>
    //       <Menu
    //         mode="inline"
    //         defaultSelectedKeys={['1']}
    //         defaultOpenKeys={['sub1']}
    //         style={{ height: '100%', borderRight: 0 }}
    //       >
    //         <SubMenu key="sub1" title={<span><Icon type="laptop" />Network</span>}>
    //           <Menu.Item key="1">Network Stats</Menu.Item>
    //           <Menu.Item key="2">Block Explorer</Menu.Item>
    //           <Menu.Item key="3">Crypto Faucet</Menu.Item>
    //         </SubMenu>
    //         <SubMenu key="sub2" title={<span><Icon type="user" />Information</span>}>
    //           <Menu.Item key="5">About Goerli</Menu.Item>
    //           <Menu.Item key="6">Wiki</Menu.Item>              
    //         </SubMenu>
    //       </Menu>
    //     </Sider>
    //     <Layout style={{ padding: '0 24px 24px' }}>
    //       <Breadcrumb style={{ margin: '16px 0' }}>
    //         <Breadcrumb.Item>Home</Breadcrumb.Item>
    //         <Breadcrumb.Item>List</Breadcrumb.Item>
    //         <Breadcrumb.Item>App</Breadcrumb.Item>
    //       </Breadcrumb>
    //       <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
    //         {/* {
    //         error !== null 
    //         ? <div className="errorContainer"> 
    //             <Error  errorMessage={error} /> 
    //           </div> 
    //         : null
    //       }
    //       <div className="formDivContainer">
    //         <ContractForm activeNetwork={network} extractData={this.processRequest}/>
    //       </div>
    //       <div>
    //         {
    //           dataProcessed === true ? <TxSummary /> : null
    //         }
    //       </div> */}
    //       </Content>
    //     </Layout>
    //   </Layout>
    // </Layout>
      // <Layout className="layoutContainer">
      //   <NavigationHeader />
      //   <Layout>
      //     <Sider width={200} style={{ background: '#fff' }}>
      //       <Menu
      //         mode="inline"
      //         defaultSelectedKeys={['1']}
      //         defaultOpenKeys={['sub1']}
      //         style={{ height: '100%', borderRight: 0 }}
      //       >
      //         <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
      //           <Menu.Item key="1">option1</Menu.Item>
      //           <Menu.Item key="2">option2</Menu.Item>
      //           <Menu.Item key="3">option3</Menu.Item>
      //           <Menu.Item key="4">option4</Menu.Item>
      //         </SubMenu>
      //         <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
      //           <Menu.Item key="5">option5</Menu.Item>
      //           <Menu.Item key="6">option6</Menu.Item>
      //           <Menu.Item key="7">option7</Menu.Item>
      //           <Menu.Item key="8">option8</Menu.Item>
      //         </SubMenu>
      //         <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
      //           <Menu.Item key="9">option9</Menu.Item>
      //           <Menu.Item key="10">option10</Menu.Item>
      //           <Menu.Item key="11">option11</Menu.Item>
      //           <Menu.Item key="12">option12</Menu.Item>
      //         </SubMenu>
      //       </Menu>
      //     </Sider>
      //   </Layout>

      //   <Layout style={{ padding: '0 24px 24px' }}>
      //     <Breadcrumb style={{ margin: '16px 0' }}>
      //       <Breadcrumb.Item>Home</Breadcrumb.Item>
      //       <Breadcrumb.Item>List</Breadcrumb.Item>
      //       <Breadcrumb.Item>App</Breadcrumb.Item>
      //     </Breadcrumb>
      //     <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>

      //     {
      //       error !== null 
      //       ? <div className="errorContainer"> 
      //           <Error  errorMessage={error} /> 
      //         </div> 
      //       : null
      //     }
      //     <div className="formDivContainer">
      //       <ContractForm activeNetwork={network} extractData={this.processRequest}/>
      //     </div>
      //     <div>
      //       {
      //         dataProcessed === true ? <TxSummary /> : null
      //       }
      //     </div>
 
      //     </Content>
      //   </Layout>

   
      //   <Footer className="footer"> ChainSafe Systems </Footer>
      // </Layout>
    );
  }
}

export default App;
