import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
import './Home.css';

const { SubMenu } = Menu;
const { Content, Footer, Header, Sider } = Layout;

export default class Home extends Component {
  render() {
    return (
      <Layout>
        <Header className='header'>
          <div className='logo' />
          <Menu style={{float: 'left'}} theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
            <Menu.Item key='1'>HOME</Menu.Item>
            <Menu.Item key='2'>CONTACT</Menu.Item>
            <Menu.Item key='3'>ABOUT</Menu.Item>
          </Menu>
        </Header>

        <Layout>
          <Sider>
            <Menu mode='inline'>
              <SubMenu key='sub1' icon={<UserOutlined />} title='Sub nav 1'>
                <Menu.Item key='1'>option1</Menu.Item>
                <Menu.Item key='2'>option2</Menu.Item>
                <Menu.Item key='3'>option3</Menu.Item>
                <Menu.Item key='4'>option4</Menu.Item>
              </SubMenu>
              <SubMenu key='sub2' icon={<LaptopOutlined />} title='subnav 2'>
                <Menu.Item key='5'>option5</Menu.Item>
                <Menu.Item key='6'>option6</Menu.Item>
                <Menu.Item key='7'>option7</Menu.Item>
                <Menu.Item key='8'>option8</Menu.Item>
              </SubMenu>
              <SubMenu
                key='sub3'
                icon={<NotificationOutlined />}
                title='subnav 3'
              >
                <Menu.Item key='9'>option9</Menu.Item>
                <Menu.Item key='10'>option10</Menu.Item>
                <Menu.Item key='11'>option11</Menu.Item>
                <Menu.Item key='12'>option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>

          <Layout>
            <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
