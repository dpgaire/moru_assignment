import useLocalStorage from 'use-local-storage';
import Card from '../ui/Card';
import {
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  HeartOutlined,
  DeleteOutlined,
  EditOutlined,
  HeartFilled,
} from '@ant-design/icons';
import Icon from '@ant-design/icons';
import classes from './UserItem.module.css';
import { Fragment, useEffect, useRef, useState } from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import EditUserForm from './EditUserForm';
import Avatar from '../ui/Avatar';

const UserItem = (props) => {
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);
  const [showConfirmEditModal, setShowConfirmEditModal] = useState(false);
  const [inputFormData, setInputFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
  });

  useEffect(() => {
    if (props.filterdUser) {
      setInputFormData({
        name: props.filterdUser.name,
        email: props.filterdUser.email,
        phone: props.filterdUser.phone,
        website: props.filterdUser.website,
      });
    }
  }, [props.filterdUser]);

  const [storageItem, setStorageItem] = useLocalStorage(
    'DFX-favourites',
    JSON.stringify([])
  );

  const storagedArray = useRef(JSON.parse(storageItem));
  const isFavourited = storagedArray.current.includes(props.id);

  const handleAddToFavroutes = () => {
    if (!isFavourited) {
      storagedArray.current.push(props.id);
      setStorageItem(JSON.stringify(storagedArray.current));
    } else {
      const indexFavouritedId = storagedArray.current.indexOf(props.id);
      storagedArray.current.splice(indexFavouritedId, 1);
      setStorageItem(JSON.stringify(storagedArray.current));
    }
  };

  const showDeleteHandler = () => {
    setShowConfirmDeleteModal((prev) => !prev);
  };

  const cancelDeleteHandler = () => {
    setShowConfirmDeleteModal(false);
  };

  const showEditHandler = (id) => {
    props.setEditId(id);
    setShowConfirmEditModal((prev) => !prev);
  };

  const cancelEditHandler = () => {
    setShowConfirmEditModal(false);
  };

  const onDeleteHandler = (id) => {
    setShowConfirmDeleteModal((prev) => !prev);
    alert('User deleted with id ' + id);
  };

  return (
    <Fragment>
      {showConfirmEditModal && (
        <Modal
          show={showConfirmEditModal}
          onCancel={cancelEditHandler}
          header='Edit User'
          footer={
            <div className='end'>
              <Button inverse type={'button'} onClick={cancelEditHandler}>
                {' '}
                CANCEL
              </Button>
              <Button type={'submit'} onClick={showEditHandler}>
                {' '}
                SAVE
              </Button>
            </div>
          }
        >
          <EditUserForm inputFormData={inputFormData} />
        </Modal>
      )}
      {showConfirmDeleteModal && (
        <Modal
          show={showConfirmDeleteModal}
          onCancel={cancelDeleteHandler}
          header='Are you sure?'
          footer={
            <div className='end'>
              <Button inverse type={'button'} onClick={cancelDeleteHandler}>
                {' '}
                CANCEL
              </Button>
              <Button type={'submit'} onClick={() => onDeleteHandler(props.id)}>
                {' '}
                DELETE
              </Button>
            </div>
          }
        >
          <p>
            Do you want to proceed and delete this user? Please note that it
            can't be undone thereafter!
          </p>
        </Modal>
      )}

      <li className={classes.userItem}>
        <Card>
          <div className={classes.userImage}>
            <Avatar src='/dummy-user.png' alt='user-image' />
          </div>
          <div className={classes.listItem}>
            <h3>{props.name}</h3>
            <p>
              <Icon className={classes.icons} component={MailOutlined} />
              {props.email}
            </p>
            <p>
              <Icon className={classes.icons} component={PhoneOutlined} />
              {props.phone}
            </p>
            <p>
              <Icon className={classes.icons} component={GlobalOutlined} />
              {props.website}
            </p>
          </div>
          <div className={classes.actionsIcon}>
            <Icon
              style={{ color: 'red' }}
              onClick={handleAddToFavroutes}
              component={isFavourited ? HeartFilled : HeartOutlined}
            />
            <Icon
              onClick={() => showEditHandler(props.id)}
              component={EditOutlined}
            />
            <Icon onClick={showDeleteHandler} component={DeleteOutlined} />
          </div>
        </Card>
      </li>
    </Fragment>
  );
};

export default UserItem;
