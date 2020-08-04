import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/56881358?s=460&u=f30072756599356ab3f14fd20c00daa66cbb8eec&v=4"
          alt="Paulo Henrique"
        />
        <div>
          <strong>Paulo Henrique</strong>
          <span>Astronomia</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        <br />
        <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 50,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
