const title = document.getElementById('title')
const author = document.getElementById('author')
const publish = document.getElementById('publisher')
const genr = document.getElementById('genre')

fetch('http://localhost:8000/api/publisher')
    .then(rsp => rsp.json())
    .then(publisherData => {
        publisherData.forEach(publisher => {
            const option = document.createElement('option')
            option.value = publisher.id
            option.text = publisher.name
            publish.appendChild(option)
        })
    })

fetch('http://localhost:8000/api/genre')
    .then(rsp => rsp.json())
    .then(genreData => {
        genreData.forEach(genre => {
            const option = document.createElement('option')
            option.value = genre.id
            option.text = genre.name
            genr.appendChild(option)
        })
    })

document.getElementById('save').addEventListener('click', () => {
    if (title.value == null || title.value == '') {
        alert('Ime knjige ne sme biti prazno')
        return
    }
    if (author.value == null || author.value == '') {
        alert('Autor ne sme biti prazan')
        return
    }

    fetch('http://localhost:8000/api/book', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title.value,
            author: author.value,
            publisherId: publish.value,
            genreId: genr.value
        })
    })
    .then(rsp => {
        if (rsp.ok) {
            window.location.href = './book.html'
            return
        }
        alert(`Dodavanje knjige nije uspelo (HTTP ${rsp.status})`)
    })
})





