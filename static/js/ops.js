document.querySelector('.save').addEventListener('click', (event) => {
    event.preventDefault();
    const formData = new FormData(document.getElementById('animalForm'));

    formData.append('id', animalId);

    fetch(`/animal/${animalId}`, {
        method: 'PUT',
        body: formData,
    })
    .then(response => {
        console.log(response); 
        if (response.ok) {
            alert('Animal updated successfully!');
            window.location.href = "/view";
        } else {
            alert('Error updating the animal.');
        }
    })
    .catch(error => console.error('Erro:', error));
});

document.querySelector('.delete').addEventListener('click', () => {
    fetch(`/animal/${animalId}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (response.ok) {
            alert('Animal successfully deleted!');
            window.location.href = '/view';
        } else {
            alert('Error deleting the animal.');
        }
    })
    .catch(error => console.error('Erro:', error));
});