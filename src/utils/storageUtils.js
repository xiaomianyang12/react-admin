/*local数据存储管理的工具模块 */
import store from 'store'   //store库的好处，兼容各种浏览器，且语法编码简洁

const USER_KEY='user_key'
export default{
//保存
saveUser(user){
	// localStorage.setItem(USER_KEY,JSON.stringify(user));
    	store.set(USER_KEY, user)
},
getUser(){
	// return JSON.parse(localStorage.getItem(USER_KEY)||'{}')
	return store.get(USER_KEY)||{}
},
removeUser(){
	// localStorage.removeItem(USER_KEY)
	store.remove(USER_KEY)
}

}