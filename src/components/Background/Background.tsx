import React, { useEffect } from "react";
import "./Background.css"; // Mova os estilos de fundo para este arquivo CSS

const Background: React.FC = () => {
  useEffect(() => {
    const mainContainer = document.createElement("div");
    mainContainer.className = "main-container";

    const subContainer = document.createElement("div");
    subContainer.className = "sub-container";

    const sky = document.createElement("div");
    sky.className = "sky";

    const stars = document.createElement("div");
    stars.className = "stars";

    const stars2 = document.createElement("div");
    stars2.className = "stars2";

    const stars3 = document.createElement("div");
    stars3.className = "stars3";

    const comet = document.createElement("div");
    comet.className = "comet";

    sky.appendChild(stars);
    sky.appendChild(stars2);
    sky.appendChild(stars3);
    sky.appendChild(comet);

    subContainer.appendChild(sky);
    mainContainer.appendChild(subContainer);

    // Adicionando o background no corpo
    document.body.appendChild(mainContainer);

    return () => {
      // Remover o background ao desmontar o componente para evitar duplicação
      document.body.removeChild(mainContainer);
    };
  }, []);

  return null; // Este componente não renderiza nada diretamente
};

export default Background;
