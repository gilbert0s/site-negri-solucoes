// script.js

document.getElementById('form-login').addEventListener('submit', function (e) {
    e.preventDefault();

    const login = document.getElementById('login').value.trim();
    const senha = document.getElementById('senha').value.trim();

    if (login === 'admin' && senha === '@@125') {
        const url = `dados-protegidos.html?login=${encodeURIComponent(login)}&senha=${encodeURIComponent(senha)}`;
        window.location.href = url;
    } else {
        alert('Login ou senha incorretos. Tente novamente.');
    }
});

document.getElementById('form-contato').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    const mensagemSucessoDiv = document.getElementById('mensagem-sucesso-contato');

    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos obrigatórios (Nome, Email, Mensagem).');
        mensagemSucessoDiv.style.display = 'none';
        return;
    }

    const novoCliente = {
        nome: nome,
        telefone: telefone,
        email: email,
        mensagem: mensagem,
        dataEnvio: new Date().toLocaleString()
    };

    let clientes = JSON.parse(localStorage.getItem('clientesCadastrados')) || [];

    clientes.push(novoCliente);

    localStorage.setItem('clientesCadastrados', JSON.stringify(clientes));

    this.reset();

    mensagemSucessoDiv.style.display = 'block';
    mensagemSucessoDiv.textContent = 'Sua mensagem foi enviada com sucesso! Em breve entraremos em contato.';

    setTimeout(() => {
        mensagemSucessoDiv.style.display = 'none';
        mensagemSucessoDiv.textContent = '';
    }, 5000);
});