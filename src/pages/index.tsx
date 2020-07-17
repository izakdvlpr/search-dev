import React, { useState } from "react";
import { useRouter } from "next/router";
import Layout from "@layout";

import { Container, Title, Form, Input, Button } from "../styles/pages";

const Index: React.FC = () => {
  const [username, setUsername] = useState("");

  const router = useRouter();

  const handleSubmit = async (event: React.BaseSyntheticEvent) => {
    event.preventDefault();

    router.push(`/user/${username}`);
  };

  return (
    <Layout>
      <Container>
        <Title>
          Busca<span>Dev</span>
        </Title>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="Usuário do Github"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <Button type="submit" value="Buscar" />
        </Form>
      </Container>
    </Layout>
  );
};

export default Index;
