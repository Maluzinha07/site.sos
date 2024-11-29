function selectOption(opcao) {
    const chatBox = document.querySelector('.chat-box');

    
    const userMessage = document.createElement('div');
    userMessage.classList.add('user-message');
    userMessage.textContent = `Você: ${opcao}`;
    chatBox.appendChild(userMessage);

  
    let botMessage;
    if (opcao === 'Dor ou desconforto') {
        botMessage = "Enfermeiro: Estou a caminho!";
    } else if (opcao === 'Medicamento') {
        botMessage = "Enfermeiro: Estou finalizando um atendimento,já vou atendelo(a).";
    }  else   if (opcao === 'Rouparia') {
        botMessage = "Enfermeiro: Estou a caminho!";
    } else if (opcao === 'Ambiente') {
        botMessage = "Enfermeiro: Estou finalizando um atendimento,já vou atendelo(a).";
    } 
    else {
        botMessage = "Opção inválida.";
    }
    


    const botMessageElement = document.createElement('div');
    botMessageElement.classList.add('bot-message');
    botMessageElement.textContent  = botMessage;
       chatBox.appendChild(botMessageElement);
   
       
       chatBox.scrollTop = chatBox.scrollHeight;
   }

   const balloons = document.querySelectorAll('.balloon');
  const chatBox = document.getElementById('chat-box');


const respostas = {
  'Pergunta 1': 'Esta é a resposta para a pergunta 1.',
  'Pergunta 2': 'A resposta para a pergunta 2 é esta.',

};

balloons.forEach(balloon => {
  balloon.addEventListener('click', () => {
    const pergunta = balloon.textContent;
    const resposta = respostas[pergunta];

    if (resposta) {
      chatBox.textContent = resposta;
    } else {
      chatBox.textContent = 'Desculpe, não encontrei a resposta para essa pergunta.';
    }
  });
});