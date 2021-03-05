import React from 'react'
import { Layout, Menu } from 'antd'
import { connect } from 'react-redux'
import extracter from '../../helper/extractTopics'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  UploadOutlined,
} from '@ant-design/icons'
import './style.css'
import shortId from 'shortid'
const { Header, Sider, Content } = Layout

class SiderDemo extends React.Component {
  state = {
    collapsed: true,
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  handleMenu = (topic) => {
    this.props.dispatch({
      type: 'CHANGE_TOPIC',
      payload: topic,
    })
  }

  render() {
    const items = extracter(this.props.todo)

    return (
      <Layout>
        <Sider
          className='sider'
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className='logo' />
          <Menu className='menu' mode='inline' defaultSelectedKeys={['1']}>
            <Menu.Item
              key={shortId.generate()}
              icon={<UserOutlined />}
              onClick={() => {
                this.handleMenu('all')
              }}
              className='menuItem'
            >
              All
            </Menu.Item>
            {items.map((topic) => (
              <Menu.Item
                key={shortId.generate()}
                onClick={() => {
                  this.handleMenu(topic)
                }}
                icon={<UploadOutlined />}
                className='menuItem'
              >
                {topic}
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout className='site-layout'>
          <Header className='site-layout-background' style={{ padding: 0 }}>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: this.toggle,
              }
            )}
            <span className='span-header'>Simple Todo-list</span>
          </Header>
          <Content
            className='site-layout-background'
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default connect((store) => {
  return { todo: store.todo }
})(SiderDemo)
