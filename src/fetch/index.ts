import axios, { AxiosResponse } from 'axios'

function Requester(baseURL: string) {
    const requester = axios.create({
        baseURL: baseURL
    });
    requester.interceptors.request.use(config => {
        config.withCredentials = false
        const token = localStorage.getItem('jsonTokenInfo') || ""
        if (!config.headers) {
            config.headers = {}
        }
        config.headers["szjson-auth"] = token
        return config
    }, error => {
    });
    requester.interceptors.response.use(response => {
        return response;
    }, error => {
        return Promise.reject(error);
    });
    return requester;
}

const extraTask = async (url: string, method: any, dataOrConfig: any[]): Promise<AxiosResponse> => {
    return new Promise(async (resolve, reject) => {
        if (dataOrConfig[2]) {
            url = url + dataOrConfig[2]
        }
        // get时修改调用省略params
        if (method.prototype.get && dataOrConfig[0] && !dataOrConfig[0].params) {
            dataOrConfig[0] = {
                params: dataOrConfig[0]
            }
        }
        method(url, ...dataOrConfig).then((res: any) => {
            resolve(res)
        })
    })
}

const createHttp = (methods: Function) => (url: string) => (...dataOrConfig: any[]) => extraTask(url, methods, dataOrConfig)

// Passport/Login
// console.log(task(login.get))

export const post = createHttp(Requester('http://192.168.1.243:2003/api/').post)
export const get = createHttp(Requester('http://192.168.1.243:2003/api/').get)
export const local = createHttp(Requester('/public').get)
// export const api = createHttp(Requester('/api').get)
// export const local = Requester(login);
