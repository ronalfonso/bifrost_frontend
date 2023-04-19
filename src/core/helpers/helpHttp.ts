import axios from 'axios';

export const helpHttp = () => {
    const customFetch = (url: string, options: any) => {
        const defaultHeader = {
            accept: "application/json",
           "Content-Type": "application/json"
        };

        const controller = new AbortController();
        options.signal = controller.signal;

        options.method = options.method || 'GET';
        options.headers = options.headers ? {...options, ...defaultHeader} : defaultHeader;

        options.body = JSON.stringify(options.body) || false;
        if (!options.body) delete options.body;

        let request: any = {};
        if (options.data) {
            request = {
                method: options.method,
                url: url,
                data: options.data
            }
            delete request.data.signal;
            delete request.data.method;
            delete request.data.headers;
            delete request.data.url;
        } else {
            request = {
                method: options.method,
                url: url,
            }
        }


        return axios(request)
            .then(resp => {
                return resp.status >= 200 && resp.status < 300 ? resp : Promise.reject({
                    error: true,
                    status: resp.status || '00',
                    statusText: resp.statusText || 'DICTIONARY.ERROR_OCCURRED'
                })
            })
            .catch((err) => err);
    }
    const get = (url: string, options = {}) => customFetch(url, options);
    const post = (url: string, options: any = {}) => {
        options.method = 'POST'
        return customFetch(url, options)
    }
    const put = (url: string, options: any = {}) => {
        options.method = 'PUT'
        return customFetch(url, options)
    }
    const del = (url: string, options: any = {}) => {
        options.method = 'DELETE'
        return customFetch(url, options)
    }

    return {
        get, post, put, del,
    };
}