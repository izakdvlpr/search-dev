import React, { memo } from 'react';
 
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

const UserInfo: React.FC<IUserInfo> = ({ avatar_url, name, login, bio, following, followers }) => (
  <Container>
    <Avatar src={avatar_url} alt="Avatar"/>
    <Name>{name}</Name>
    <Login>@{login}</Login>
    <Bio>{bio}</Bio>
    <Statistics>
      <Following>          
        <p><strong>{Number(following).toLocaleString()}</strong> seguindo</p>
      </Following>
      <Followers>          
        <p><strong>{Number(followers).toLocaleString()}</strong> seguidores</p>
      </Followers>
    </Statistics>
  </Container>
);

export default memo(UserInfo);
