import React from 'react';

import { useHistory} from "react-router-dom";

import { FiPlusSquare } from 'react-icons/fi';
import { Container } from './styles';

interface IHeaderProps {
  openModal: () => void;
}

const Header: React.FC<IHeaderProps> = ({ openModal }) => {

  const history = useHistory();
  const handleClick = () => {
    history.push('/teste')
  }


  return ( <Container>
    <header>
      <nav>
        <div >
          <button type="button" onClick={openModal}>
            <div className="text">Novo Prato</div>
            <div className="icon">
              <FiPlusSquare size={24} />
            </div>
          </button>
        </div>
      </nav>
      <nav>
        <div>
          <button type="button" onClick={handleClick}>
            <div className="text">Proxima</div>
            <div className="icon">
              <FiPlusSquare size={24} />
            </div>
          </button>
        </div>
      </nav>
    </header>
  </Container>
)
};

export default Header;
