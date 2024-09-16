const id = params.get('id')

if (id === null || id ==='')
    window.location.href = './genre.html'

const breadcrumb = document.getElementById('breadcrumb')
const gid = document.getElementById('id')
const name = document.getElementById('name')
const created = document.getElementById('created')
const updated = document.getElementById('updated')

fetch('http://localhost:8000/api/genre/' + id)
    .then(rsp => {
        if (rsp.status === 200) {
            return rsp.json()
        } else {
            alert('Žanr nije pronađen!');
            window.location.href = './genre.html'
        }
    })
    .then(data => {
        breadcrumb.innerText = `${data.name}`
        gid.value = data.id
        name.value = data.name
        created.value = formatDate(data.createdAt)
        updated.value = formatDate(data.updatedAt)

        document.getElementById('save').addEventListener('click', () => {
            fetch(`http://localhost:8000/api/genre/${data.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name.value,


                })
                })
                .then(rsp => {
                    if (rsp.ok) {
                        window.location.href = './genre.html'
                        return
                    }
                        alert(`Izmena žanra nije uspela (HTTP ${rsp.status})`)
                })
        })
    })