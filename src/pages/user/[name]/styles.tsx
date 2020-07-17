import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin-top: 40px;
  justify-content: space-around;

  @media (max-width: 474px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: 3em;
  color: var(--primary);

  margin-bottom: 30px;

  > span {
    color: var(--secondary);
  }
`;

export const Button = styled.button`
  width: 15em;
  height: 3.4em;

  border-radius: 0.5em;

  font-size: 16px;
  font-weight: 700;
  color: #000;

  cursor: pointer;

  background-color: var(--primary);

  &:hover {
    opacity: 0.9;
    transition: opacity 0.3s;
  }
`;

export const Profile = styled.div`
  margin-top: 2em;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
