import React,{Component} from 'react'
import {Link,withRouter} from'react-router-dom'
import { Menu, Icon, Button } from 'antd';
import './index.less'
import logo from '../../assets/images/logo.png'
import menuList from'../../config/menuConfig.js' //也可以写成 import menuConfig from'../../config/menuConfig.js

const SubMenu = Menu.SubMenu;

class LeftNav extends Component{
/* 根据menu的数据数组生成对应的标签数组

 使用map() +递归调用

*/

getMenuNodes_map=(menuList)=>{
	return menuList.map(item=>{
		//  {
		// 	title:'首页',
		// 	key:'/home',
		// 	icon:'pie-chart',
		// 	children:[],//可能有也可能没有
		// }
	   
	   if(!item.children){
	   	return (<Menu.Item key={item.key}>
		          <Link to={item.key}>
		            <Icon type={item.icon} />
		            <span>{item.title}</span>
		            </Link>
		          </Menu.Item>
		          )
	   }else{
	   	 return( <SubMenu key={item.key} title={<span><Icon type={item.icon} /><span>{item.title}</span></span>}>
			            
		           {
		           	this.getMenuNodes(item.children)
		           } 
		          </SubMenu>
		          )
	   }
	  
	})

}
/*
根据menu的数据数组生成对应的标签数组
使用reduce() +递归调用
*/
getMenuNodes = (menuList)=>{
const path = this.props.location.pathname

return menuList.reduce((pre,item)=>{
	// 向pre中添加 <Menu.Item>
	if(!item.children){
		pre.push((<Menu.Item key={item.key}>
		          <Link to={item.key}>
		            <Icon type={item.icon} />
		            <span>{item.title}</span>
		            </Link>
		          </Menu.Item>))
	}else {
        //查找一个与当前请求路径匹配的子Item
        const  cItem =item.children.find(cItem=>cItem.key===path)
        //如果存在，说明当前item的子列表需要打开
        if(cItem){
        	 this.openKey = item.key
        }
       



			// 向pre中添加 <SubMenu>
			pre.push((<SubMenu key={item.key} title={<span><Icon type={item.icon} /><span>{item.title}</span></span>}>
			            
		           {
		           	this.getMenuNodes(item.children)
		           } 
		          </SubMenu>))
	}


	return pre
},[])
}
 // 在第一次render()之前执行一次，为第一个render()准备数据，必须是同步的

componentWillMount(){
	this.menuNodes = this.getMenuNodes(menuList)
}




	render(){
		//debugger
         const  menuNodes= this.getMenuNodes(menuList)
		 const path = this.props.location.pathname
		 console.log('render()',path)
		 // 得到需要打开菜单项的key
		 const openKey= this.openKey
		return(
			
			<div className='left-nav'>
				<Link to='/' className='left-nav-header'>
					<img src={logo} alt='logo'/>
					<h1>硅谷后台</h1>
				</Link >
				<Menu mode="inline" theme="dark"  selectedKeys={[path]} defaultOpenKeys={[openKey]}>
		        {/* 
		        	<Menu.Item key="/home">
		          <Link to='/home'>
		            <Icon type="pie-chart" />
		            <span>首页</span>
		            </Link>
		          </Menu.Item>
		         

		          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>商品</span></span>}>
			            <Menu.Item key="/category"> 
						<Link to='/category'>
				            <Icon type="pie-chart" />
				            <span>品类管理</span>
				          </Link>
			            </Menu.Item>
			            <Menu.Item key="/product">
			              <Link to='/product'>
				            <Icon type="pie-chart" />
				            <span>商品管理</span>
				          </Link>
			          </Menu.Item>
		            
		          </SubMenu>
		      */}
        {
        	this.menuNodes 
        }
		         
		          

        </Menu>	
			</div>
			)
			
			
	}
}
export default withRouter(LeftNav)