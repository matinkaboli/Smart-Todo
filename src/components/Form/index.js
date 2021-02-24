import React, { useState } from 'react'
import { Input, Form, Button, DatePicker } from 'antd'
import shortId from 'shortid'
import { useDispatch } from 'react-redux'

const FormComp = () => {
  const dispatch = useDispatch((store) => {
    return store.todo
  })
  const [date, setDate] = useState('')
  const [form] = Form.useForm()
  const inputRef = React.useRef(null)

  function onChange(date, dateString) {
    setDate(dateString)
  }

  let handleSubmit = (e) => {
    let todo = {
      id: shortId.generate(),
      text: e.todo,
    }
    if (date) {
      todo.date = date
    }
    dispatch({
      type: 'ADD_TODO',
      payload: todo,
    })
    form.resetFields()
  }

  return (
    <Form onFinish={handleSubmit} name='basic' form={form}>
      <Form.Item
        label='Todo'
        name='todo'
        rules={[
          {
            required: true,
            message: 'Please fill input.',
          },
        ]}
      >
        <Input placeholder='Enter your task' ref={inputRef} />
      </Form.Item>

      <Form.Item>
        <DatePicker onChange={onChange} />
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default FormComp
