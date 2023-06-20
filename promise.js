const waiting = time => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Готово')
        }, time);
    })
}

const waitingFail = time => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Не получилось')
        }, time);
    })
}

// Promise.all([waiting(2000), waiting(3000)])
//     .then(() => {
//         console.log('все промисы выполнены')
//     })

// race возвращает первый самый быстро выполнившийся промис,
// вне зависимости выполнился он успешно или с ошибкой
// Promise.race([waiting(2000), waiting(10000)])
//     .then(() => {
//         console.log('самый быстрый выполнился')
//     }) 


// выбирает самый быстрый как race, но возвращает тот, который выполнился успешно
// если ни один промис не выполнился успешно вернет ошибку (AggregateError: All promises were rejected)
Promise.any([waiting(2000), waitingFail(4000)])
    .then((value) => {
        console.log('самый быстрый выполнился, успешно выполнившийся промис', value)
    }) 

// также как all принимает массив промисов и выполняет их как единое целое,
// но возвращает не новый промис, а объект со статусом и результатом промиса
Promise.allSettled([waiting(2000), waitingFail(3000)])
    .then(values => {
        const [result1, result2] = values
        console.log('result1', result1) // {status: 'fulfilled', value: 'Готово'}
        console.log('result2', result2) // {status: 'rejected', reason: 'Не получилось'}
    }) 


// цепочка промисов
// let testPromise = new Promise(function(resolve, reject) {

//     setTimeout(() => {
//         const data = {
//             id: '12',
//             name: 'тестовые данные'
//         }

//         resolve(data)
//     }, 2000);

// })

// testPromise.then(data => {
//     console.log('data', data)

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.name = 'тестовые данные upd'
    
//             resolve(data)
//         }, 2000);
//     })

// }).then(dataUpd => {
//     console.log('update data', dataUpd)
// })
// .catch(error => {
//     console.log('error', error)
// })
// .finally(() => console.log('finally'))