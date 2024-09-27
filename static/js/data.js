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
            window.location.href = "/view";
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('error in saving the animal: ' + error);
    }
});