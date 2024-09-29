fetch('/animais')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(animais => {
        console.log('Dados recebidos:', animais);
        const container = document.getElementById('animais-container');
        container.innerHTML = '';
        
        if (!Array.isArray(animais) || animais.length === 0) {
            container.innerHTML = "<p>No animals registered.</p>";
        } else {
            animais.forEach(animal => {
                const animalDiv = document.createElement('div');
                animalDiv.classList.add('animal');
                
                const id = animal.ID_animal;
                const name = animal.name;
                const owner = animal.owner;
                const photo = `/static/uploads/${animal.photo}`;
                const sex = animal.sex;
                const types = animal.types;

                let sexIcon;
                if (sex === 'Male') {
                    sexIcon = '/static/svg/sex_m.svg';
                } else if (sex === 'Female') {
                    sexIcon = '/static/svg/sex_f.svg';
                } else {
                    sexIcon = '/static/svg/sex_u.svg';
                }

                animalDiv.innerHTML = `
                    <div class="name">
                        <h1>${name}</h1>
                    </div>
                    <img src="${photo}" class="photo">
                    <p class="dono">${owner}</p>
                    <div class="dados">
                        <div><img src="${sexIcon}" class="sex"></div>
                        <div class="type"><p>${types}</p></div>
                    </div>
                `;

                animalDiv.addEventListener('click', () => {
                    window.location.href = `details?id=${id}`;
                });

                container.appendChild(animalDiv);
            });
        }
    });
