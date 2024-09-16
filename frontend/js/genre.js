const table = document.getElementById('genre-table')
const template = document.getElementById('genre')


fetch('http://localhost:8000/api/genre')
.then(rsp => rsp.json())
.then(data => {


             data.forEach(genre => {
                 const copy = template.content.cloneNode(true);
                 copy.querySelector('.id').innerText = genre.id;
                 copy.querySelector('.name').innerText = genre.name;
                 copy.querySelector('.created').innerText = formatDate(genre.createdAt)
                 copy.querySelector('.updated').innerText = formatDate(genre.updatedAt)
                 copy.querySelector('.edit').href = `./update-genre.html?id=${genre.id}`
                 copy.querySelector('.remove').addEventListener('click', () => {
                                    if (confirm(`Želite obrisati žanr ${genre.name}?`)) {
                                        fetch(`http://localhost:8000/api/genre/${genre.id}`, {
                                            method: 'DELETE',
                                        })
                                        .then(rsp => {
                                            if (rsp.status == 204) {
                                                window.location.href = './genre.html'
                                                return
                                            }
                                            alert(`Brisanje žanra nije uspelo (HTTP ${rsp.status})`)
                                        })
                                    }
                                })

                table.appendChild(copy);
            })
        })