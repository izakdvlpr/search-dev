import styled from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";

export const Repository = styled.div`
  width: 35em;
  height: 7em;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;

  padding: 2px;
  margin-bottom: 25px;

  border-radius: 15px;

  background-color: #3d3d3d;
  
  @media (max-width: 589px) {
    width: 20em;
    height: 14em;
    flex-direction: column;
  }
`;

export const Stars = styled.div`
  > strong {
    font-size: 2em;
    color: var(--primary);
  }

  > p {
    font-weight: bold;
    color: var(--secondary);
  }
`;

export const Information = styled.div`
  text-align: left;
  width: 250px;

  > h2 {
    color: var(--primary);
  }

  > p {
    margin-top: 5px;

    font-size: 14px;
    color: var(--secondary);
  }
`;

export const ArrowIcon = styled(MdKeyboardArrowRight)`
  height: 60px;
  width: 30px;
  color: var(--primary);
`;
