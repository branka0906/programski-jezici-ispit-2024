const id = params.get('id')

if (id == null || id == '')
    window.location.href = './book.html'

    fetch('http://localhost:8000/api/book/' + id)
        .then(rsp => {
            if (rsp.status === 200) {
                return rsp.json()
            } else {
                alert('Knjiga nije pronađena!');
                window.location.href = './book.html'
            }
        })
        .then(data => {
            const knjigaBreadcrumb = document.getElementById('knjiga')
            knjigaBreadcrumb.href = `./update.html?id=${data.id}`
            knjigaBreadcrumb.innerText =`${data.title}`
        })



