document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    function Entrar(event) {
        event.preventDefault();

        const login = document.getElementById('login').value.trim();
        const senha = document.getElementById('senha').value.trim();

        if (login === "" || senha === "") {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        fetch('http://127.0.0.1:5000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ login, senha })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na resposta do servidor');
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                localStorage.setItem('isAdmin', data.admin);

                if (data.admin) {
                    alert("Login de administrador bem-sucedido!");
                    window.location.href = 'admin_dashboard.html';
                } else {
                    window.location.href = '../tela_de_dashboard/dash.html';
                }
            } else {
                alert("Login ou senha incorretos.");
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert("Erro ao tentar fazer login. Tente novamente.");
        });
    }

    loginForm.addEventListener('submit', Entrar);
});