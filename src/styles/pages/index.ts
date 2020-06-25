import styled from 'styled-components';

export const Container = styled.div`    
  margin: 14rem auto;
  
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 40px;
  color: var(--primary);
  
  > strong {
    color: var(--secondary);
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 300px;
  
  display: flex;
  flex-direction: column;  
`;

export const Input = styled.input`  
  height: 45px;  
  margin-top: 25px;
  
  border: 1px solid var(--input);
  border-radius: 10px;
  
  color: var(--white);
  text-align: left;
  padding-left: 15px;
    
  background-color: var(--input);
    
`;

export const Button = styled.button`
  height: 45px;
  margin-top: 20px;
  
  border: 1px solid var(--primary);
  border-radius: 10px;
  
  font-weight: bold;
  cursor: pointer;
  
  background-color: var(--primary);
  
  &:hover {
    opacity: 0.9;
    transition: opacity .1s;
  }
`;