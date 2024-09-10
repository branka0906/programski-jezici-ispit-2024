const title = document.getElementById('title')
const genre = document.getElementById('genre')
const isbn = document.getElementById('isbn')

document.getElementById('save').addEventListener('click', ()=>{
    if (title.value == null || title.value == '') {
        alert('Ime knjige ne sme biti prazno')
        return
    }
    if (genre.value == null || genre.value == '') {
        alert('Zanr ne sme biti prazan')
        return
    }
    if (isbn.value == null || isbn.value == '') {
        alert('ISBN knjige ne sme biti prazan')
        return
    }


fetch('http://localhost:8000/api/book', {
        method: 'POST',
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
        if(rsp.ok){
           window.location.href = './book.html' 
           return
        }
        alert(`Dodavanje knjige nije uspelo (HTTP${rsp.status})`)
    })
  })
