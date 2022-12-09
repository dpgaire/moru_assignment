import { Fragment } from 'react';

import Input from '../ui/Input';
import classes from './EditUserForm.module.css';

const EditUserForm = (props) => {
  console.log('props?.inputFormData', props?.inputFormData);
  return (
    <Fragment>
      {props?.inputFormData?.name ? (
        <div className={classes.userForm}>
          <Input
            id='fullname'
            type='text'
            label='Full Name'
            placeholder='Enter fullname'
            value={props.inputFormData.name}
          />
          <Input
            id='Email'
            type='email'
            label='Email'
            placeholder='Enter email address'
            value={props.inputFormData.email}
          />
          <Input
            id='phone'
            type='phone'
            label='Phone'
            placeholder='Enter phone'
            value={props.inputFormData.phone}
          />
          <Input
            id='website'
            type='text'
            label='Website'
            placeholder='Enter website link'
            value={props.inputFormData.website}
          />
        </div>
      ) : null}
    </Fragment>
  );
};

export default EditUserForm;
