import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Notifications from '../Notifications';
import logo from '../../assets/logo-purple.svg';
import { Container, Content, Profile } from './styles';

function Header() {
  const profile = useSelector((state) => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Divine Hair" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">My Profile</Link>
            </div>
            <img
              src={
                profile.avatar ||
                'https://avatars.dicebear.com/api/bottts/pasdasd.svg?w=50&h=50'
              }
              alt="Paulo Rogerio"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
