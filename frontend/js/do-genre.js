const name = document.getElementById('name')

document.getElementById('save').addEventListener('click', ()=>{
    if (name.value == null || name.value == '') {
        alert('Naziv žanra ne sme biti prazno')
        return
    }

fetch('http://localhost:8000/api/genre', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name.value,
           })
    })
    .then(rsp => {
        if(rsp.ok){
           window.location.href = './genre.html'
           return
        }
        alert(`Dodavanje žanra nije uspelo (HTTP${rsp.status})`)
    })
  })