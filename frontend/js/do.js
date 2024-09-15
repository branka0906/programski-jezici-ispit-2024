const title = document.getElementById('title')
const genre = document.getElementById('genre')
const isbn = document.getElementById('isbn')
const publish = document.getElementById('publisher')

 fetch('http://localhost:8000/api/publisher')
        .then(rsp=> rsp.json())
        .then(publisherData => {
            publisherData.forEach(publisher => {
             const option = document.createElement('option')
                option.value = publisher.id
                option.text = publisher.name
                publish.appendChild(option)
            })
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
                        publisherId: publisher.value

                    })
                })
                .then(rsp => {
                    if(rsp.ok){
                       window.location.href = './book.html'
                       return
                    }
                      alert(`Izmena izdavača nije uspela (HTTP ${rsp.status})`)
                })
              })

        })


