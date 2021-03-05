import React, { useState } from 'react'
import { Modal, Input, DatePicker } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

const ModalComp = (props) => {
  const dispatch = useDispatch()
  const [date, setDate] = useState('')
  const todo = useSelector((state) => state.todo)
  const activeTodo = todo.find((element) => element.active) || todo[0]
  const [input, setInput] = useState(activeTodo.text)

  const handleOk = () => {
    props.setIsVisible(false)

    dispatch({
      type: 'EDIT_TODO',
      payload: {
        id: activeTodo.id,
        text: input,
        topic: activeTodo.topic,
        date,
      },
    })
  }
  const handleCancel = () => {
    props.setIsVisible(false)
  }
  const handleChange = (e) => {
    setInput(e.target.value)
  }
  const onChange = (date, dateString) => {
    setDate(dateString)
  }
  return (
    <>
      <Modal
        title='Edit'
        visible={props.visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input onChange={handleChange} defaultValue={activeTodo.text}></Input>
        <DatePicker onChange={onChange}></DatePicker>
      </Modal>
    </>
  )
}
export default ModalComp
