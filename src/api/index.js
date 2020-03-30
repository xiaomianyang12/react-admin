import ajax from './ajax.js'

const BASE=''
/*export function reqLogin(){
	return ajax('/login',{username,password},'POST')

}
*/
export const reqLogin=(username,password)=>ajax(BASE+'/login',{username,password},'POST')

export const reqAddUser=(user)=>ajax('/manage/user/add',user,'POST')