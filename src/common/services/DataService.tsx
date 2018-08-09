

export default class DataService {
    private URL = `https://deliver.kenticocloud.com/6dea43b2-30ae-4f99-8da8-c29d0caa3870/items?`;
    private url: string = '';

    constructor(url: string) {

        this.url = `${this.URL}${url}`;
    }

    query(): Promise<any> {
        return new Promise((resolve, reject) => {
            fetch(this.url)
                .then(res => res.json())
                .then(res => resolve(res))
                .catch(err => reject(err))
        })
    }

    select(id: string): Promise<any> {
        return new Promise((resolve, reject) => {
            fetch(`${this.url}&system.id=${id}`)
                .then(res => res.json())
                .then(res => resolve(res))
                .catch(err => reject(err))
        })
    }

}


