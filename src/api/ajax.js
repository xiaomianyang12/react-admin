import axios from 'axios'
import {message}from 'antd'

export default function ajax(url,data={},type='GET'){
	return new Promise((resolve,reject)=>{
		let promise
		if(type==='GET'){
		promise = axios.get(url, {params:data})
		}
		else{
		promise = axios.post(url,data)
		}
		promise.then(response=>{
			resolve(response.data)
		}).catch(error=>{
			message.error('请求出错了'+message.error)
		})
	})
	
}
//ajax(/login,{username:'TOM',password:'12345'},'POST').then()
//ajax(/manage/user/add,{username:'TOM',password:'12345',phone:'17702570601'},'POST').then()