import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import Link from 'next/link';
import Layout from "@layout";

import UserInfo from '@components/UserInfo';
import UserRepositories from '@components/UserRepositories';

import { Container, Header, Title,  Button, Profile } from './styles';

import api from '@services/github';
import IUserInfo from '@interfaces/UserInfo';

const User: React.FC = () => {
  const [userInfo, setUI] = useState<IUserInfo>();
  const [userRepositories, setUR] = useState([]);
  
  const router = useRouter();
  
  useEffect(() => {
    async function getUR() {
      return await api.get(`/users/${router.query.name}/repos`).then(response => {
        setUR(response.data);
      });
    }
    
    async function getUI()  {            
      return await api.get<IUserInfo>(`/users/${router.query.name}`).then(response => {
        if (response) {
          setUI(response.data);
          getUR();
        }
      });            
    }    
    
    getUI();
  }, [router.query.name]);  
  
  return (
    <Layout>      
      <Container>
        <Header>          
          <Title>Busca<span>Dev</span></Title>
          <Link href="/"><a><Button>Início</Button></a></Link>          
        </Header>                    
        
        {userInfo ? (
          <Profile>            
            <UserInfo key={String(userInfo.id)}/>
            <UserRepositories/>
          </Profile>
        ) : (
          <h1>Não tem nada aqui</h1>
        )}
      </Container>
    </Layout>
  )
}

export default User;
