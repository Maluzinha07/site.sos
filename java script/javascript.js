function selectOption(opcao) {
    const chatBox = document.querySelector('.chat-box');

    // Cria um novo elemento para a mensagem do usuário
    const userMessage = document.createElement('div');
    userMessage.classList.add('user-message');
    userMessage.textContent = `Você: ${opcao}`;
    chatBox.appendChild(userMessage);

    // Simula uma resposta do bot com base na opção escolhida
    let botMessage;
    if (opcao === 'Estou com Fome') {
        botMessage = "Enfermeiro: Estou a caminho";
    } else if (opcao === 'Preciso ir ao banheiro') {
        botMessage = "Enfermeiro: Estou finalizando um atendimento";
    } else {
        botMessage = "Opção inválida.";
    }

    const botMessageElement = document.createElement('div');
    botMessageElement.classList.add('bot-message');
    botMessageElement.textContent  = botMessage;
       chatBox.appendChild(botMessageElement);
   
       // Rola a conversa para baixo
       chatBox.scrollTop = chatBox.scrollHeight;
   }
