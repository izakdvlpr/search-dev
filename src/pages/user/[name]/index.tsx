import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import Link from 'next/link';
import Layout from "@layout";

import UserInfo from '@components/UserInfo';
import UserRepositories from '@components/UserRepositories';

import { Container, Header, Title,  Button, Profile } from './styles';

import api from '@services/github';
import IUserInfo from '@interfaces/UserInfo';
import IUserRepositories from '@interfaces/UserRepositories';

const User: React.FC = () => {
  const [userInfo, setUI] = useState<IUserInfo>();
  const [userRepositories, setUR] = useState<IUserRepositories[]>();
  
  const router = useRouter();
  
  useEffect(() => {
    async function getUR() {
      return await api.get<IUserRepositories[]>(`/users/${router.query.name}/repos`).then(response => {
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
            <UserInfo
              key={userInfo.id}
              avatar_url={userInfo.avatar_url}
              name={userInfo.name}
              login={userInfo.login}
              bio={userInfo.bio}
              following={userInfo.following}
              followers={userInfo.followers}
            />
            {userRepositories?.length > 0 ? (
              <div>
                {userRepositories?.map(repo => (                  
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
              <div style={{
                width: "35em",
                height: "7em",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                textAlign: "center"
              }}>Sem repositórios por aqui ;c</div>
            )}
          </Profile>
        ) : (
          <h1>user n enconrdao</h1>
        )}
      </Container>
    </Layout>
  )
}

export default User;
