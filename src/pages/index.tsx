import React from "react";
import Layout from "@layout";

import { Container, Title, Form, Input, Button } from '../styles/pages';

const Index: React.FC = () => {  
  return (
    <Layout>      
      <Container>
        <Title>Busca<span>Dev</span></Title>
        <Form>
          <Input type="text" placeholder="Usuário do Github" />
          <Button type="submit" value="Buscar"/>
        </Form>
      </Container>
    </Layout>
  )
}

export default Index;
