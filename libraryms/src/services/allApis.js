import { common } from "@mui/material/colors"
import { BASEURL } from "./baseUrl"
import { commonRequest } from "./coomonRequest"

export const addUser=async(body,header)=>{
    return await commonRequest("POST",`${BASEURL}/reg`,body,header)
}

export const logUser=async(body)=>{
    return await commonRequest("POST",`${BASEURL}/login`,body,'')
}

export const bookAdd=async(body,header)=>{
    return await commonRequest("POST",`${BASEURL}/add`,body,header)
}

export const bookVieww=async()=>{
    return await commonRequest("GET",`${BASEURL}/view`,'','')
}