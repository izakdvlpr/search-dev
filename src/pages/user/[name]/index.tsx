import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from "@layout";

import UserInfo from '@components/UserInfo';
import UserRepositories from '@components/UserRepositories';

import { Container, Header, Title,  Button, Profile } from './styles';

import api from '@services/github';

import IUserInfo from '@interfaces/UserInfo';
import IUserRepositories from '@interfaces/UserRepositories';

const User: React.FC = () => {           
  const [user, setUser] = useState<IUserInfo>();
  const [repositories, setRepositories] = useState<IUserRepositories[]>();            
  
  const router = useRouter();  
  
  async function getRpositories() {
    const response = await api.get<IUserRepositories[]>(`/users/${router.query.name}/repos`);
    
    setRepositories(response.data);    
  }
  
  async function getUser() {
    await api.get<IUserInfo>(`/users/${router.query.name}`).then(response => {
      setUser(response.data);          
      getRpositories(); 
    }).catch(err => console.error(err));        
  }
  
  console.log(user)
  
  useEffect(() => {    
    getUser();
  }, [router.query.name]);  
  
  return (
    <Layout>      
      <Container>
        <Header>          
          <Title>Busca<span>Dev</span></Title>
          <Link href="/"><a><Button>Início</Button></a></Link>          
        </Header>
        
        {user ? (
          <Profile>            
            <UserInfo
              key={user.id}
              avatar_url={user.avatar_url}
              name={user.name}
              login={user.login}
              bio={user.bio}
              following={user.following}
              followers={user.followers}
            />
            {/* @ts-ignore */}
            {repositories?.length > 0 ? (
              <div>                
                {repositories?.map(repo => (                  
                  <UserRepositories
                    key={repo.id}
                    stargazers_count={repo.stargazers_count}
                    name={repo.name}
                    description={repo.description}
                    html_url={repo.html_url}                    
                  />
                ))}
              </div>
            ) : (
              <div style={{ width: "35em", height: "7em", textAlign: "center" }}><h3 style={{ color: "var(--secondary)" }}>Sem repositórios por aqui ;c</h3></div>
            )}
          </Profile>
        ) : (
          <div style={{ width: "35em", height: "7em", textAlign: "center" }}>Nehum Dev encontrado :c</div>
        )}                                
      </Container>
    </Layout>
  )
}

export default User;
