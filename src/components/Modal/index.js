import React, { useState } from 'react'
import { Modal, Button, Input, DatePicker } from 'antd'
import { useDispatch } from 'react-redux'

const ModalComp = (props) => {
  const dispatch = useDispatch()
  const [date, setDate] = useState('')
  const [input, setInput] = useState(props.item.text)
  const handleOk = () => {
    props.setIsVisible(false)
    dispatch({
      type: 'EDIT_TODO',
      payload: {
        id: props.item.id,
        text: input,
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
        <Input onChange={handleChange} defaultValue={props.item.text}></Input>
        <DatePicker onChange={onChange}></DatePicker>
      </Modal>
    </>
  )
}
export default ModalComp
