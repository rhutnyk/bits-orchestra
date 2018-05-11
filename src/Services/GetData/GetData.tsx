import axios from 'axios'


export const GET_DATA = (urls: any): Promise<any> => {
    const promiseArray: any = [];
    urls.forEach((el: any) => {
        promiseArray.push(axios.get(`https://${el}`))
    })
    return new Promise((resolve, reject) => {
        Promise.all(promiseArray)
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
}