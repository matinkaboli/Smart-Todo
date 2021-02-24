import React from 'react'
import { Layout } from 'antd'

import List from '../List'
import FormComp from '../Form'

const Task = () => {
  const { Header, Footer, Sider, Content } = Layout
  return (
    <>
      <FormComp />
      <List />
    </>
  )
}

export default Task
