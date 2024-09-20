import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./IAPage.css";
import iaImage from "../../assets/iaImage.jpg";
import Background from "../../components/Background/Background";

const IApage: React.FC = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { speaker: "IA", message: "Como posso ajudar ?" },
  ]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const sendMessage = async () => {
    if (userInput.trim() === "") return;

    // Adiciona a mensagem do usuário ao histórico
    const newChatHistory = [
      ...chatHistory,
      { speaker: "user", message: userInput },
    ];
    setChatHistory(newChatHistory);
    setUserInput("");

    // Configura a mensagem no formato adequado
    const messages = newChatHistory.map((chat) => ({
      role: chat.speaker === "IA" ? "assistant" : "user",
      content: chat.message,
    }));

    // Debug: Verificar se as mensagens estão sendo corretamente formatadas
    console.log("Mensagens enviadas:", messages);

    try {
      // Envia a mensagem para o servidor da IA no LM Studio
      const response = await fetch("/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "lmstudio-community/gemma-2-2b-it-GGUF/gemma-2-2b-it-Q4_K_M.gguf",
          messages: messages,
        }),
      });
      

      const data = await response.json();

      // Debug: Verificar a resposta recebida do servidor
      console.log("Resposta do servidor:", data);

      // Adiciona a resposta da IA ao histórico de chat
      if (data.choices && data.choices.length > 0) {
        const iaMessage = data.choices[0].message.content;
        setChatHistory([...newChatHistory, { speaker: "IA", message: iaMessage }]);
      }
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
    }
  };

  return (
    <div className="IA-page">
      <Background />
      <div className="header">
        <div className="menu" onClick={toggleMenu}>
          <span className="menu-icon">≡</span>
          <span className="menu-text">menu</span>
          {menuOpen && (
            <div className="dropdown-menu">
              <button onClick={() => navigate("/")}>Sair</button>
              <button onClick={() => navigate("/trainings")}>Perfil</button>
              <button onClick={() => navigate("/journey")}>Jornada</button>
            </div>
          )}
        </div>
      </div>
      <img src={iaImage} alt="IA foto" className="ia-image" />
      <h1 className="username">GALLI-IA</h1>
      <div className="chat-box">
        <div className="chats">
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              className={chat.speaker === "IA" ? "IaChat" : "user-chat"}
            >
              {chat.message}
            </div>
          ))}
        </div>
        <input
          className="text-bar"
          type="text"
          value={userInput}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
      </div>
    </div>
  );
};

export default IApage;
