function getAnimalIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

const animalId = getAnimalIdFromUrl();

fetch(`/animal/${animalId}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(animal => {
        console.log(animal);
        
        document.getElementById('name').value = animal.name;
        document.getElementById('age').value = animal.age;
        document.getElementById('sex').value = animal.sex;
        document.getElementById('types').value = animal.types;
        document.getElementById('race').value = animal.race;
        document.getElementById('owner').value = animal.owner;
        document.getElementById('phone').value = animal.phone;
        document.getElementById('city').value = animal.city;
        document.getElementById('address').value = animal.address;
        document.getElementById('description').value = animal.description;

        document.getElementById('preview').src = `/static/uploads/${animal.photo}`;

        document.querySelector('.temp').innerText = animal.latest_update;
    })
    .catch(error => {
        console.error('Erro ao buscar os detalhes do animal:', error);
    });