const id = params.get('id')

if (id == null || id == '')
    window.location.href = './book.html'

const breadcrumb = document.getElementById('breadcrumb')
const bid = document.getElementById('id')
const title = document.getElementById('title')
const genre = document.getElementById('genre')
const isbn = document.getElementById('isbn')
const created = document.getElementById('created')
const updated = document.getElementById('updated')

fetch('http://localhost:8000/api/book/' + id)
    .then(rsp => {
        if (rsp.status == 200) {
            return rsp.json()
        } else {
            alert('Knjiga nije pronađena!');
            window.location.href = './book.html'
        }
    })
    .then(data => {
        breadcrumb.innerText = `${data.title}`
        bid.value = data.id
        title.value = data.title
        genre.value = data.genre
        isbn.value = data.isbn
        created.value = formatDate(data.createdAt)
        updated.value = formatDate(data.updatedAt)

        document.getElementById('save').addEventListener('click', () => {
            fetch(`http://localhost:8000/api/book/${data.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: title.value,
                    genre: genre.value,
                    isbn: isbn.value,
                    
                })
                })
                .then(rsp => {
                    if (rsp.ok) {
                        window.location.href = './book.html'
                        return
                    }
                        alert(`Izmena knjige nije uspela (HTTP ${rsp.status})`)
                })
        })
    })






