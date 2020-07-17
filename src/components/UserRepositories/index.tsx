import React, { memo } from "react";

import { Repository, Stars, Information, ArrowIcon } from "./styles";

import IUserRepositories from "@interfaces/UserRepositories";

const UserRepositories: React.FC<IUserRepositories> = ({
  stargazers_count,
  name,
  description,
  html_url,
}) => (
  <Repository>
    <Stars>
      <strong>{Number(stargazers_count).toLocaleString()}</strong>
      <p>stars</p>
    </Stars>
    <Information>
      <h2>{name}</h2>
      <p>{description}</p>
    </Information>
    <a href={html_url} target="_blank" rel="noopener noreferrer">
      <ArrowIcon />
    </a>
  </Repository>
);

export default memo(UserRepositories);
