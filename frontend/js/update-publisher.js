const id = params.get('id')

if (id === null || id ==='')
    window.location.href = './publisher.html'

const breadcrumb = document.getElementById('breadcrumb')
const pid = document.getElementById('id')
const name = document.getElementById('name')
const address = document.getElementById('address')
const contact = document.getElementById('contact')
const created = document.getElementById('created')
const updated = document.getElementById('updated')

fetch('http://localhost:8000/api/publisher/' + id)
    .then(rsp => {
        if (rsp.status === 200) {
            return rsp.json()
        } else {
            alert('Izdavač nije pronađen!');
            window.location.href = './publisher.html'
        }
    })
    .then(data => {
        breadcrumb.innerText = `${data.name}`
        pid.value = data.id
        name.value = data.name
        address.value = data.address
        contact.value = data.contact
        created.value = formatDate(data.createdAt)
        updated.value = formatDate(data.updatedAt)

        document.getElementById('save').addEventListener('click', () => {
            fetch(`http://localhost:8000/api/publisher/${data.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name.value,
                    address: address.value,
                    contact: contact.value,

                })
                })
                .then(rsp => {
                    if (rsp.ok) {
                        window.location.href = './publisher.html'
                        return
                    }
                        alert(`Izmena izdavača nije uspela (HTTP ${rsp.status})`)
                })
        })
    })






