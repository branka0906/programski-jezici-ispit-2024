const id = params.get('id')

if (id == null || id == '')
    window.location.href = './book.html'

const breadcrumb = document.getElementById('breadcrumb')
const bid = document.getElementById('id')
const title = document.getElementById('title')
const publish = document.getElementById('publisher')
const genre = document.getElementById('genre')
const created = document.getElementById('created')
const updated = document.getElementById('updated')


fetch('http://localhost:8000/api/publisher')
.then(rsp => rsp.json())
.then(data => {
    publish.innerHTML = '';
    data.forEach(publisher => {
        const option = document.createElement('option')
        option.value = publisher.id
        option.text = publisher.name
        publish.appendChild(option)
    })
})


fetch('http://localhost:8000/api/genre')
.then(rsp => rsp.json())
.then(data => {
    genre.innerHTML = '';
    data.forEach(genreData => {
        const option = document.createElement('option')
        option.value = genreData.id
        option.text = genreData.name
        genre.appendChild(option)
    })
})


fetch('http://localhost:8000/api/book/' + id)
    .then(rsp => {
        if (rsp.status == 200) {
            return rsp.json()
        } else {
            alert('Knjiga nije pronađena!')
            window.location.href = './book.html'
        }
    })
    .then(data => {
        breadcrumb.innerText = `${data.title}`
        bid.value = data.id
        title.value = data.title
        author.value = data.author

         publish.value = data.publisher.id
         genre.value = data.genre.id

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
                    author: author.value,
                    publisherId: publish.value,
                    genreId: genre.value
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