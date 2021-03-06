import React, { useState } from 'react';

import ModalComp from '../Modal';
import { useSelector, useDispatch } from 'react-redux';
import { List, Button, Popconfirm, message, Row, Col } from 'antd';

const ListComp = (props) => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo);
  const [isVisible, setIsVisible] = useState(false);
  const currentTopic = useSelector((state) => state.currentTopic);

  const handleDelete = (id) => {
    dispatch({
      type: 'DELETE_TODO',
      payload: id,
    });
    message.success('Click on Yes');
  };

  const handleEdit = (item) => {
    message.success('Succeed'); //*
    dispatch({
      type: 'ACTIVATE_TODO',
      payload: item.id,
    });
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  };

  function cancel(e) {
    console.log(e);
    message.error('Canceled'); //*
  }

  let newTodo = todo;

  if (currentTopic !== 'all') {
    newTodo = todo.filter((t) => {
      return t.topic === currentTopic;
    });
  }

  return (
    <>
      <ModalComp visible={isVisible} setIsVisible={setIsVisible} />
      <Row>
        <Col flex={2}>
          <List
            bordered
            dataSource={newTodo}
            renderItem={(item) => (
              <List.Item>
                {item.text}
                &nbsp;
                {item.date}
                &nbsp;
                <Popconfirm
                  title="Are you sure to edit this task?"
                  onConfirm={() => {
                    handleEdit(item);
                  }}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button type="link">Edit</Button>
                </Popconfirm>
                &nbsp;
                <Popconfirm
                  title="Are you sure to delete this task?"
                  onConfirm={() => {
                    handleDelete(item.id);
                  }}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button type="link">Delete</Button>
                </Popconfirm>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};

export default ListComp;
