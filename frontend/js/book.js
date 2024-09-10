const table = document.getElementById('table')
const template = document.getElementById('book')
const searchTitle = document.getElementById('search-title')

if (searchParam !=null && searchParam != ''){
    searchTitle.innerText = 'Pretraga knjige'
    fetchBook('/title/' + searchParam)
} else {
        searchTitle.innerText = 'Lista knjiga'
        fetchBook()
}

function fetchBook(url = ''){
fetch(`http://localhost:8000/api/book${url}`)
.then(rsp => rsp.json())
.then(data => {
    if (data.length == 0) {
        alert('Knjiga nije pronadjena')
        fetchStudents()
        return
    }

           data.forEach(book => {
                const copy = template.content.cloneNode(true);
                copy.querySelector('.id').innerText = book.id;
                copy.querySelector('.title').innerText = book.title;
                copy.querySelector('.genre').innerText = book.genre;
                copy.querySelector('.isbn').innerText = book.isbn;
                copy.querySelector('.created').innerText = formatDate(book.createdAt)
                copy.querySelector('.updated').innerText = formatDate(book.updatedAt)
                copy.querySelector('.edit').href = `./update.html?id=${book.id}`
                copy.querySelector('.remove').addEventListener('click', () => {
                    if (confirm(`Želite obrisati knjigu ${book.title}?`)) {
                        fetch(`http://localhost:8000/api/book/${book.id}`, {
                            method: 'DELETE',
                        })
                        .then(rsp => {
                            if (rsp.status == 204) {
                                window.location.href = './book.html'
                                return
                            }
                            alert(`Brisanje knjige nije uspelo (HTTP ${rsp.status})`)
                        })
                    }
                })
                table.appendChild(copy);
            })
        })

        }
    
