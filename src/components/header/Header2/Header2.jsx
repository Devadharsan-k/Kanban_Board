import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  AppstoreOutlined,
  BarsOutlined,
  DiffOutlined,
  SearchOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Modal, Segmented, message } from "antd";
import { AppContent } from "../../../AppProvider/AppProvider";
import "./Header2.css";
import { v4 as uuidv4 } from "uuid";

const Header2 = () => {
  const { cards, setCards } = useContext(AppContent);
  const [cardOpen, setCardOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [userForm] = Form.useForm();
  const [cardForm] = Form.useForm();

  const handleRoute = (selectedValue) => {
    if (selectedValue === "list") {
      navigate("/list");
    } else if (selectedValue === "kanban") {
      navigate("/kanban");
    }
  };

  const AddedUser = (values) => {
    const appliedCardIndex = cards.findIndex((card) => card.name === "Applied");

    if (appliedCardIndex !== -1) {
      setCards((prevCards) => {
        return prevCards.map((card, index) => {
          if (index === appliedCardIndex) {
            return {
              ...card,
              items: [
                ...card.items,
                {
                  id: uuidv4(),
                  name: values.username,
                  city: values.city,
                },
              ],
            };
          } else {
            return card;
          }
        });
      });

      setUserOpen(false);
      userForm.resetFields();
      message.success("User added successfully!");
    }
  };

  const AddedCard = (values) => {
    setCards((prevCards) => [
      ...prevCards,
      {
        id: Date.now(),
        name: values.card_name,
        items: [],
      },
    ]);
    setCardOpen(false);
    message.success("Card added successfully!");
    cardForm.resetFields();
  };

  useEffect(() => {
    const defaultValue = location.pathname === "/list" ? "list" : "kanban";

    setDefaultValue(defaultValue);
  }, [location.pathname]);

  const [defaultValue, setDefaultValue] = useState(
    location.pathname === "/list" ? "list" : "kanban"
  );

  return (
    <div className="header2_left">
      <Input
        placeholder="Search Candidate..."
        prefix={<SearchOutlined />}
        className="input"
      />
      <div className="header2_right">
        <Button
          type="primary"
          className="btn_add_candidate"
          onClick={() => setUserOpen(true)}
        >
          <UserAddOutlined /> Add Candidates
        </Button>
        <Modal
          title="User Details"
          open={userOpen}
          onCancel={() => setUserOpen(false)}
          footer={null}
        >
          <Form onFinish={AddedUser} form={userForm} layout="vertical">
            <Form.Item
              label="UserName"
              name="username"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input autoComplete="off" />
            </Form.Item>
            <Form.Item
              label="City"
              name="city"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input autoComplete="off" />
            </Form.Item>
            <Button type="primary" htmlType="submit" block>
              Add User
            </Button>
          </Form>
        </Modal>
        <Button
          type="dashed"
          className="btn_add_candidate"
          onClick={() => setCardOpen(true)}
        >
          <DiffOutlined /> Add Card
        </Button>
        <Modal
          title="Add card"
          open={cardOpen}
          onCancel={() => setCardOpen(false)}
          footer={null}
        >
          <Form onFinish={AddedCard} form={cardForm} layout="vertical">
            <Form.Item
              label="CardName"
              name="card_name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input autoComplete="off" />
            </Form.Item>
            <Button type="primary" htmlType="submit" block>
              Add Card
            </Button>
          </Form>
        </Modal>
        <Segmented
          options={[
            { value: "kanban", icon: <AppstoreOutlined /> },
            { value: "list", icon: <BarsOutlined /> },
          ]}
          onChange={handleRoute}
          defaultValue={defaultValue}
        />
      </div>
    </div>
  );
};

export default Header2;
