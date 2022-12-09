import { useEffect, useState } from 'react';
import UserItem from './UserItem';
import classes from './UserList.module.css';

const UserList = (props) => {
  const [editId, setEditId] = useState();
  const [filterdUser, setFilteredUser] = useState();

  useEffect(() => {
    if (editId) {
      const filterdUsers = props.users?.find((user) => user.id === editId);
      setFilteredUser(filterdUsers);
    }
  }, [editId]);

  return (
    <ul className={classes.userList}>
      {props.users.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          phone={user.phone}
          website={user.website}
          setEditId={setEditId}
          filterdUser={filterdUser}
        />
      ))}
    </ul>
  );
};

export default UserList;
