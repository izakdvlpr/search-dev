import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 2em;
  
  @media (max-width: 885px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    text-align: center;
  }
`;

export const Avatar = styled.img`
  height: 15em;
  width: 15em;    
  
  border-radius: 2em;    
`;

export const Name = styled.h1`
  margin-top: 10px;
  
  color: var(--primary);
`;

export const Login = styled.h2`  
  color: var(--secondary);
`;

export const Bio = styled.div`  
  margin-top: 20px;
  width: 20em;
  
  color: var(--input);
`;

export const Statistics = styled.div`
  margin-top: 25px;

  display: flex;
  flex-direction: row;
  
  text-align: center;
`;

export const Following = styled.div`
  margin-right: 15px;
  
  > p {
    color: var(--secondary);
  }
  
  > p strong {
    color: var(--primary);
  }
`;

export const Followers = styled.div`
  > p {
    color: var(--secondary);
  }
  
  > p strong {
    color: var(--primary);
  }
`;
