import {environment} from '../../environment';


export abstract class BaseService {
    static readonly URL_API = environment.BASE_URL + '';
    static URL_BASE = '';

    getBaseUrl(): string {
        return BaseService.URL_API;
    }

    abstract getClassUrl(): string;

    getUrl(): string {
        return `${this.getBaseUrl()}${this.getClassUrl()}`
    }
}