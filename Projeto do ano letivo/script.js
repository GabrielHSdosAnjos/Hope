const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value;
  // Execute a ação de pesquisa com o termo de pesquisa
  // ...
});
// Função para validar o formulário
function validateForm() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    if (emailInput.value === '') {
        alert('Preencha o campo de email');
        emailInput.focus();
        return false;
    }

    if (passwordInput.value === '') {
        alert('Preencha o campo de senha');
        passwordInput.focus();
        return false;
    }

    // Opcional: Validação de formato de email
    // if (!/^[a-z0-9]+@[a-z]+\.[a-z]{2,}$/i.test(emailInput.value)) {
    //     alert('Formato de email inválido');
    //     emailInput.focus();
    //     return false;
    // }

    // Opcional: Validação de senha (tamanho mínimo, caracteres especiais, etc.)

    return true;
}

// Adiciona evento de submit ao formulário
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita o envio padrão do formulário

    if (!validateForm()) {
        return;
    }

    // Simulação de envio de dados para o servidor (substitua por sua lógica real)
    console.log('Dados do formulário enviados:', {
        email: emailInput.value,
        password: passwordInput.value
    });

    // Exibe mensagem de sucesso ou erro (de acordo com a resposta do servidor)
    alert('Login efetuado com sucesso!'); // Exemplo de mensagem de sucesso
});
