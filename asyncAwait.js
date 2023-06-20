
async function test() {
    let testPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Готово')
        }, 2000);
    })

    let result = await testPromise
    console.log('result', result)
}

test()