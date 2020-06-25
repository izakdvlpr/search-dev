import React, { memo } from 'react';
 
import { Repository, Stars, Information, ArrowIcon } from './styles';

const UserRepositories: React.FC = () => {
  return (
    <Repository>
      <Stars>
        <strong>19</strong>
        <p>stars</p>
      </Stars>
      <Information>
        <h2>coronApp</h2>
        <p>App feito em React Native (Expo) para obter informações sobre o coronavírus.</p>
      </Information>
      <a href="https://github.com/zevdvlpr/coronApp" target="_blank" rel="noopener noreferrer"><ArrowIcon /></a>
    </Repository>
  )
}

export default memo(UserRepositories);
