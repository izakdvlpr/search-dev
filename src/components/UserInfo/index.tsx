import React from 'react';
 
import {
  Container,
  Avatar,
  Login,
  Name,
  Bio,
  Statistics,
  Following,
  Followers
} from './styles';

import IUserInfo from '@interfaces/UserInfo';

const UserInfo = () => {    
  return (
    <Container>
      <Avatar src="https://avatars2.githubusercontent.com/u/44278486?v=4" alt="Avatar"/>
      <Login>Zev</Login>
      <Name>@zevdvlpr</Name>
      <Bio>Programador Full Stack | Apaixonado por Javascript, Tecnologia e Pizza | 17y</Bio>
      <Statistics>
        <Following>          
          <p><strong>0</strong> seguindo</p>
        </Following>
        <Followers>          
          <p><strong>0</strong> seguidores</p>
        </Followers>
      </Statistics>
    </Container>
  )
}

export default UserInfo;
