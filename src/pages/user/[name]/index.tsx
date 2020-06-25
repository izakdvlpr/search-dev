import React from "react";
import Link from 'next/link';
import Layout from "@layout";

import UserInfo from '../../../components/UserInfo';
import UserRepositories from '../../../components/UserRepositories';

import {
  Container,
  Header,
  Title, 
  Button,
  Profile
} from './styles';

const User: React.FC = () => {  
  return (
    <Layout>      
      <Container>
        <Header>
          <Title>Busca<span>Dev</span></Title>
          <Link href="/"><a><Button>Início</Button></a></Link>          
        </Header>                    
        
        <Profile>
          <UserInfo />
          <UserRepositories />
        </Profile>           
      </Container>
    </Layout>
  )
}

export default User;
