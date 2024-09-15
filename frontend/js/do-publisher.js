const name = document.getElementById('name')
const address = document.getElementById('address')
const contact = document.getElementById('contact')

document.getElementById('save').addEventListener('click', ()=>{
    if (name.value == null || name.value == '') {
        alert('Naziv izdavača ne sme biti prazno')
        return
    }
    if (address.value == null || address.value == '') {
        alert('Adresa ne sme biti prazna')
        return
    }
    if (contact.value == null || contact.value == '') {
        alert('Kontakt ne sme biti prazan')
        return
    }


fetch('http://localhost:8000/api/publisher', {
        method: 'POST',
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
        if(rsp.ok){
           window.location.href = './publisher.html'
           return
        }
        alert(`Dodavanje izdavača nije uspelo (HTTP${rsp.status})`)
    })
  })
