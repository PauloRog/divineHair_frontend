import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-purple.svg';
import { Container, Content, Profile } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Divine Hair" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Paulo Rogerio</strong>
              <Link to="/profile">My Profile</Link>
            </div>
            <img
              src="https://avatars.dicebear.com/api/bottts/pasdasd.svg?w=50&h=50"
              alt="Paulo Rogerio"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;