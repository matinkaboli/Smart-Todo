import React, { useState } from 'react'
import { List, Button, Input, DatePicker, Popconfirm, message } from 'antd'
import { useSelector, useDispatch } from 'react-redux'

import ModalComp from '../Modal'

const ListComp = (props) => {
  const dispatch = useDispatch()
  const [item, setItem] = useState({})
  const todo = useSelector((state) => state.todo)
  const [isVisible, setIsVisible] = useState(false)
  const handleDelete = (id) => {
    dispatch({
      type: 'DELETE_TODO',
      payload: id,
    })
    message.success('Click on Yes')
  }
  const handleEdit = (item) => {
    setItem(item)
    setIsVisible(true)
    message.success('Click on Yes') //*
  }
  function cancel(e) {
    console.log(e)
    message.error('Click on No') //*
  }

  return (
    <>
      <ModalComp visible={isVisible} setIsVisible={setIsVisible} item={item} />
      <List
        bordered
        dataSource={todo}
        renderItem={(item) => (
          <List.Item>
            {item.text}
            &nbsp;
            {item.date}
            &nbsp;
            <Popconfirm
              title='Are you sure to edit this task?'
              onConfirm={() => {
                handleEdit(item)
              }}
              onCancel={cancel}
              okText='Yes'
              cancelText='No'
            >
              <Button type='link'>Edit</Button>
            </Popconfirm>
            &nbsp;
            <Popconfirm
              title='Are you sure to delete this task?'
              onConfirm={() => {
                handleDelete(item.id)
              }}
              onCancel={cancel}
              okText='Yes'
              cancelText='No'
            >
              <Button type='link'>Delete</Button>
            </Popconfirm>
          </List.Item>
        )}
      />
    </>
  )
}

export default ListComp
