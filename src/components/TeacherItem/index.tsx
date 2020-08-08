import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/39963861?s=60&v=4" />
        <div>
          <strong>Lucão</strong>
          <span>TI</span>
        </div>
      </header>
      <p>
        aaaaaaaaaaaaaaa
        <br />
        <br />
        bbbbbbbbbbbbbbb
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>10 conto</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
