// Função chamada ao enviar o formulário
const handleSubmit = async (event) => {
    // Impede o comportamento padrão do formulário (recarregamento da página)
    event.preventDefault();

    // Obtém os valores dos campos do formulário
    const name = document.querySelector('input[name=name]').value;
    const email = document.querySelector('input[name=email]').value;
    const mensagem = document.querySelector('textarea[name=mensagem]').value;

    try {
        // Envia os dados para a API usando o método POST
        const response = await fetch('https://api.sheetmonkey.io/form/kWe4nacwCMyjcNbq9aENaf', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, mensagem }),
        });

        // Verifica se a resposta foi bem-sucedida (código de status 2xx)
        if (response.ok) {
            console.log('Envio bem-sucedido!');

            // Limpa os campos do formulário após um envio bem-sucedido
            document.querySelector('input[name=name]').value = '';
            document.querySelector('input[name=email]').value = '';
            document.querySelector('textarea[name=mensagem]').value = '';
        } else {
            // Se a resposta não for bem-sucedida, loga o código de status
            console.error('Erro no envio. Código de status:', response.status);
        }
    } catch (error) {
        // Captura e loga erros durante o envio da solicitação
        console.error('Erro na solicitação:', error);
    }
}

// Adiciona um ouvinte de evento para o evento de envio do formulário
document.querySelector("form").addEventListener('submit', handleSubmit);
