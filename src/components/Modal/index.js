import React, { useState, useEffect } from 'react';
import { Modal, Input, DatePicker } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

const ModalComp = (props) => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo);
  const activeTodo = todo.find((element) => element.active);

  const [date, setDate] = useState('');
  const defaultValue = activeTodo ? activeTodo.text : '';
  const [input, setInput] = useState(defaultValue);

  useEffect(() => {
    setInput(defaultValue);
  }, [defaultValue]);

  const handleOk = () => {
    props.setIsVisible(false);

    dispatch({
      type: 'EDIT_TODO',
      payload: {
        id: activeTodo.id,
        text: input,
        topic: activeTodo.topic,
        date,
      },
    });
  };

  const handleCancel = () => {
    props.setIsVisible(false);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const onChange = (date, dateString) => {
    setDate(dateString);
  };

  return (
    <>
      <Modal title="Edit" visible={props.visible} onOk={handleOk} onCancel={handleCancel}>
        <Input onChange={handleChange} value={input}></Input>
        <DatePicker onChange={onChange}></DatePicker>
      </Modal>
    </>
  );
};

export default ModalComp;
