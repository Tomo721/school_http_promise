const url = "https://jsonplaceholder.typicode.com/users"

async function fetchGetTest() {
    try {
        const response = await fetch(url)
        const data = await response.json()

        console.log(data)
    } 
    catch(e) {
        console.log('error', r)
    }
    finally {
        console.log('выполнится все равно')
    }
}

fetchGetTest()

// fetch(url)
//     .then(response => response.json())
//     .then(json => console.log('json', json))