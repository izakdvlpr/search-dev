import styled from 'styled-components';

export const Container = styled.div`    
  margin: 14rem auto;
  
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 3.6em;
  color: var(--primary);
  
  margin-bottom: 30px;
  
  > span {
    color: var(--secondary);
  }
`;

export const Form = styled.form`  
  display: flex;
  flex-direction: column;  
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`  
  height: 20px;
  width: 300px;
  
  margin-bottom: 20px;
  padding: 20px;  
    
  border-radius: 10px;
  
  color: var(--white);  
    
  background-color: var(--input);    
`;

export const Button = styled.input`
  height: 60px;
  width: 340px;
  
  text-align: center;
  padding: 20px;  
  
  border-radius: 10px;
      
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
    
  background-color: var(--primary);    
  
  &:hover {
    opacity: 0.9;
    transition: opacity .1s;
  }
`;