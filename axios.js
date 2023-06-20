const url = "https://jsonplaceholder.typicode.com/posts/1"

// PUT
    const dto = {
        id: 1,
        title: 'какой-то текст',
        body: 'какой-то контент',
        userId: 1
    }
    axios
        .put(url, dto)
            .then(response => console.log('res', response.data))

// POST
    // axios
    //     .post(url, {
    //         name: 'тест имя'
    //     })
    //     .then(response => console.log('response.data', response.data))
    //     .catch(error => console.log(error))


// GET
// axios
//     .get(url)
//         .then(response => console.log('res', response.data))
//         .catch(error => console.log(error))