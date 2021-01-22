import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { signOut } from '../../store/modules/auth/actions';
import { updateProfileRequest } from '../../store/modules/user/actions';
import AvatarInput from './AvatarInput';
import { Container } from './styles';

function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
        <Input name="name" placeholder="Your name" />
        <Input name="email" type="email" placeholder="Your email" />
        <hr />
        <Input
          type="password"
          name="oldPassword"
          placeholder="Your current password"
        />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirm your password"
        />

        <button type="submit">Update profile</button>
      </Form>

      <button type="submit" onClick={handleSignOut}>
        Exit Divine Hair
      </button>
    </Container>
  );
}

export default Profile;
