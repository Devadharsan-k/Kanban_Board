import React, { useContext } from "react";
import { AppContent } from "../../../AppProvider/AppProvider";
import { Avatar, Empty, Progress } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import "./ListView.css";
import { Typography } from "antd";
const { Text } = Typography;

const ListView = () => {
  const { users, setUsers, searchValue } = useContext(AppContent);

  const handleDelete = (user) => {
    const updatedUsers = users.filter((u) => u.id !== user.id);
    setUsers(updatedUsers);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="list_body">
      {filteredUsers.length === 0 ? (
        <Empty description="Add users" style={{ marginTop: "175px" }} />
      ) : (
        filteredUsers.map((user) => (
          <div key={user.id} className="list_content">
            <div className="list_left">
              <Avatar size={"large"}>{user.name.charAt(0)}</Avatar>
              <div className="list_left_user">
                <Text className="list_name" type="strong">
                  {user.name}
                </Text>
                <Text className="list_city" type="secondary">
                  {user.city}
                </Text>
              </div>
            </div>
            <div>
              <p className="list_date">{new Date().toLocaleDateString()}</p>
            </div>
            <div className="list_right">
              <Progress percent={60} />
            </div>
            <DeleteOutlined
              onClick={() => handleDelete(user)}
              className="dlt_icon"
            />
          </div>
        ))
      )}
    </div>
  );
};

export default ListView;
