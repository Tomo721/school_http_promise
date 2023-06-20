const url = "https://jsonplaceholder.typicode.com/posts"

fetch(url, {
    method: "POST",
    body: JSON.stringify({
        title: 'Заголовок',
        body: 'Контент'
    })
})
    .then(response => {
        return response.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log('er', error))