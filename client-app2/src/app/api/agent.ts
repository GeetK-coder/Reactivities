import axios, { AxiosResponse } from 'axios';
import { Activity } from '../models/activity';
import { User, UserFormValues } from '../models/user';


const sleep=(delay:number)=>{
    return new Promise((resolve)=>{
        setTimeout(resolve,delay)
    })
}

axios.defaults.baseURL='http://localhost:5000/api';

axios.interceptors.response.use(async response=>{
    return sleep(1000).then(()=>{
        return response;

    }).catch((error)=>{
        console.log(error);
        return Promise.reject(error);
    })
})



const responseBody=<T>(response:AxiosResponse<T>)=>response.data;

const requests={
    get:<T>(url:string)=>axios.get<T>(url).then(responseBody),
    post:<T>(url:string,body:{})=>axios.post<T>(url).then(responseBody),
    put:<T>(url:string,body:{})=>axios.put<T>(url).then(responseBody),
    delete:<T>(url:string)=>axios.delete<T>(url).then(responseBody),

}

const Activities=
{
    list:()=>requests.get<Activity[]>('/activities'),
    details:(id:String)=>requests.get<Activity>('/activities/'+id),
    create:(activity:Activity)=>requests.post<void>('/activities',activity),
    update:(activity:Activity)=>requests.put<void>('/activities/'+activity.id,activity),
    delete:(id:String)=>requests.delete<void>('/activities/'+id),


}

const Account = {
    current: (): Promise<User> => requests.get<User>('/user'),
    login: (user: UserFormValues): Promise<User> => requests.post<User>(`/user/login`, user),
    register: (user: UserFormValues): Promise<User> => requests.post<User>(`/user/register`, user),
}

const agent={
    Activities,
    Account
}

export default agent;