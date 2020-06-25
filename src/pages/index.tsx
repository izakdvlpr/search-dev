import React from "react";
import Layout from "../layout";

import { Container, Title, Form, Input, Button } from '../styles/pages';

const Index: React.FC = () => {  
  return (
    <Layout>      
      <Container>
        <Title>Busca<strong>Dev</strong></Title>
        <Form>
          <Input
            type="text"
            placeholder="Usuário do Github"
          />
          <Button type="submit">Buscar</Button>               
        </Form>
      </Container>
    </Layout>
  )
}

export default Index;
