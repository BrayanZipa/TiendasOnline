import axios from 'axios';

const URL = 'http://localhost:5000';

export function searchUsers(callback){
    axios.get(URL+'/users')
    .then((res)=>{
        callback(res.data);
    })
    .catch((err)=>{
        callback(err);
    })
}

export function addUser(user, callback){
    axios.post(URL+'/users', user)
    .then((res)=>{
        callback(res.data);
    })
    .catch((err)=>{
        callback(err);
    })
}
