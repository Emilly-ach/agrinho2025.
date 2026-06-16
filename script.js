// Função para registrar a opinião do usuário
function registrarOpiniao() {
    // Captura os elementos do formulário
    const nome = document.getElementById('nomeOpiniao').value.trim();
    const tipo = document.getElementById('tipoOpiniao').value;
    const comentario = document.getElementById('comentarioOpiniao').value.trim();
    const gostouRadio = document.querySelector('input[name="gostouSite"]:checked');

    // Validação simples para garantir que os campos não estão vazios
    if (!nome || tipo === "Selecione um tipo" || !comentario || !gostouRadio) {
        alert("Por favor, preencha todos os campos do formulário antes de enviar!");
        return;
    }

    // Exibe uma mensagem de sucesso para o usuário
    alert(`Obrigado pelo feedback, ${nome}! Sua opinião foi registrada com sucesso.`);
    
    // Recarrega a página simulando o envio dos dados
    location.reload();
}
