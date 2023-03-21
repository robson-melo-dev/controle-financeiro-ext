import React, { useState } from "react";
import logo from "../../logo.png";
import info from "../../assets/images/info.png";
import "./Header.css";
import Modal from "react-modal";

export const Header = () => {
  const customStyles = {
    content: {
      top: "0",
      left: "auto",
      right: "0",
      bottom: "auto",
      padding: "1rem",
      /*       marginRight: '-50%',
      transform: 'translate(-50%, -50%)', */
    },
  };

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="header">
      <img className="logo" alt="logo" src={logo} />
      <div className="help" onClick={openModal}>
        <h3 className="help-title">Sobre</h3>
        <img className="info" alt="info" src={info} />
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Sobre"
      >
        <div className="modal">
          <div className="modal-header">
            <h2
              className="modal-title"
            >
              Sobre a extensão
            </h2>
            <a onClick={closeModal} className="modal-close">
              <u>fechar</u>
            </a>
          </div>
        <div className="modal-content">
          <p>
            Esta extensão simples serve para você monitorar as suas despesas
            pessoais.
            Gostou da extensão? Considere fazer uma doação pelo PIX telefone 55981182976
          </p>
          <a href="https://robson-melo-dev.github.io/controle-financeiro-privacy/"> Política de Privacidade</a>
          <p>
            Criado por: <span className="name">Robson Melo de Souza</span>
          </p>
          <span className="links">
          <a className="link" href="https://www.linkedin.com/in/robsonthedev/" target="_blank">
            LinkedIn
          </a>
          <a className="link" href="https://www.youtube.com/channel/UCog_5fNwmJn2l9zs7f2RPfQ" target="_blank">
            Youtube
          </a>
          </span>
        </div>
        </div>
      </Modal>
    </div>
  );
};
