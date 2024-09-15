const table = document.getElementById('publisher-table')
const template = document.getElementById('publisher')


fetch('http://localhost:8000/api/publisher')
.then(rsp => rsp.json())
.then(data => {


             data.forEach(publisher => {
                const copy = template.content.cloneNode(true);
                copy.querySelector('.id').innerText = publisher.id;
                copy.querySelector('.name').innerText = publisher.name;
                copy.querySelector('.address').innerText = publisher.address;
                copy.querySelector('.contact').innerText = publisher.contact;
                copy.querySelector('.created').innerText = formatDate(publisher.createdAt)
                copy.querySelector('.updated').innerText = formatDate(publisher.updatedAt)
                 copy.querySelector('.edit').href = `./update-publisher.html?id=${publisher.id}`
                 copy.querySelector('.remove').addEventListener('click', () => {
                                    if (confirm(`Želite obrisati izdavača ${publisher.name}?`)) {
                                        fetch(`http://localhost:8000/api/publisher/${publisher.id}`, {
                                            method: 'DELETE',
                                        })
                                        .then(rsp => {
                                            if (rsp.status == 204) {
                                                window.location.href = './publisher.html'
                                                return
                                            }
                                            alert(`Brisanje izdavača nije uspelo (HTTP ${rsp.status})`)
                                        })
                                    }
                                })

                table.appendChild(copy);
            })
        })

