import React, { useState } from "react";
import { useRouter } from 'next/router'
import Layout from "@layout";

import { Container, Title, Form, Input, Button } from '../styles/pages';

import api from '../services/github';
import IUserInfo from '../interfaces/UserInfo'

const Index: React.FC = () => {    
  const [username, setUsername] = useState('');
  
  const router = useRouter();
  
  const handleSubmit = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    
    const response = await api.get<IUserInfo>(`/users/${username}`);
    const { login } = response.data;
    
    return router.push(`/user/${login}`);    
  }
  
  return (
    <Layout>      
      <Container>
        <Title>Busca<span>Dev</span></Title>
        <Form onSubmit={handleSubmit}>
          <Input            
            placeholder="Usuário do Github"
            value={username}
            onChange={(e: any) => setUsername(e.target.value)}
          />
          <Button
            type="submit"
            value="Buscar"
          />
        </Form>
      </Container>
    </Layout>
  )
}

export default Index;
