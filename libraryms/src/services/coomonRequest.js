import axios from 'axios';

export const commonRequest=async(method,url,body,header)=>{
    let axiosConfig={
        method,
        url,
        data:body,
        header:header?header:{'Content-Type':'application/json'}
    }
return await axios(axiosConfig).then((res)=>{return res}).catch((rej)=>{return rej})
}

