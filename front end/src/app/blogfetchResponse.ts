import { Url } from 'url';

export interface BlogFetchResponse {
    _id:string,
    title: string,
    body: string,
    imgurl: Url,
    date: string,
    email: string,
    name: string,
}