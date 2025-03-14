
const API_URL = "http://127.0.0.1:5000"; // Definir a URL da API

// Função para carregar Funcionários
function loadFuncionarios() {
    const tableBody = document.getElementById('funcionarioTableBody');

    fetch(`${API_URL}/funcionarios`)
        .then(response => response.json())
        .then(data => {
            tableBody.innerHTML = '';
            let ativos = 0, inativos = 0;
            data.forEach(funcionario => {
                if (funcionario.ativo) ativos++; else inativos++;
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${funcionario.id}</td>
                    <td>${funcionario.nome}</td>
                    <td>${funcionario.login}</td>
                    <td>${funcionario.ativo ? 'Ativo' : 'Inativo'}</td>
                `;
                tableBody.appendChild(row);
            });
            updateFuncionarioChart(ativos, inativos);
        })
        .catch(error => console.error('Erro ao carregar funcionários:', error));
}

// Função para adicionar Funcionário
function adicionarFuncionario() {
    const nome = prompt("Nome do funcionário:");
    const login = prompt("Login:");
    const senha = prompt("Senha:");
    const ativo = confirm("Ativo?") ? 1 : 0;
    const atuacao = prompt("Atuação:");
    const administrador = confirm("Administrador?") ? 1 : 0;

    fetch(`${API_URL}/funcionarios`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, login, senha, ativo, atuacao, administrador })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        loadFuncionarios();
    })
    .catch(error => console.error("Erro ao adicionar funcionário:", error));
}

// Função para excluir Funcionário
function excluirFuncionario(id) {
    if (!confirm("Tem certeza que deseja excluir este funcionário?")) return;
    fetch(`${API_URL}/funcionarios/${id}`, { method: "DELETE" })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            loadFuncionarios();
        })
        .catch(error => console.error("Erro ao excluir funcionário:", error));
}

// Função para carregar Equipamentos
function loadEquipamentos() {
    const tableBodyEquip = document.getElementById('equipamentoTableBody');

    fetch(`${API_URL}/equipamentos`)
        .then(response => response.json())
        .then(data => {
            tableBodyEquip.innerHTML = '';
            let disponiveis = 0, indisponiveis = 0;
            data.forEach(equipamento => {
                if (equipamento.status === 1) disponiveis++; else indisponiveis++;
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${equipamento.id}</td>
                    <td>${equipamento.nome}</td>
                    <td>${equipamento.categoria}</td>
                    <td>${equipamento.status === 1 ? 'Disponível' : 'Indisponível'}</td>
                `;
                tableBodyEquip.appendChild(row);
            });
            updateEquipamentoChart(disponiveis, indisponiveis);
        })
        .catch(error => console.error('Erro ao carregar equipamentos:', error));
}

// Função para atualizar o gráfico de Funcionários
function updateFuncionarioChart(ativos, inativos) {
    funcionarioStatusChart.data.datasets[0].data = [ativos, inativos];
    funcionarioStatusChart.update();
}

// Função para atualizar o gráfico de Equipamentos
function updateEquipamentoChart(disponiveis, indisponiveis) {
    equipamentoStatusChart.data.datasets[0].data = [disponiveis, indisponiveis, 0]; // 0 Manutenção (placeholder)
    equipamentoStatusChart.update();
}

// Gráficos
const ctx1 = document.getElementById('equipamentoStatusChart').getContext('2d');
const equipamentoStatusChart = new Chart(ctx1, {
    type: 'pie',
    data: {
        labels: ['Disponível', 'Indisponível', 'Em Manutenção'],
        datasets: [{
            label: 'Equipamentos',
            data: [0, 0, 0],
            backgroundColor: ['#00FF00', '#FF0000', '#FFA500']
        }]
    }
});

const ctx2 = document.getElementById('funcionarioStatusChart').getContext('2d');
const funcionarioStatusChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Ativos', 'Inativos'],
        datasets: [{
            label: 'Funcionários',
            data: [0, 0],
            backgroundColor: ['#4CAF50', '#FF0000']
        }]
    }
});

// Inicializar dados ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    loadFuncionarios();
    loadEquipamentos();
});
