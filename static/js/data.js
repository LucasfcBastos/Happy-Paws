document.getElementById("animalForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    try {
        const response = await fetch('/api/save-animal', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        if (data.error) {
            console.error('Erro:', data.error);
            alert('Erro: ' + data.error);
        } else {
            alert('Animal cadastrado com sucesso!');
            document.getElementById('animalForm').reset();
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao enviar os dados: ' + error);
    }
});