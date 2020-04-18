import React,{Component} from'react'
import {Redirect,Route,Switch} from'react-router-dom'
import LeftNav from '../../components/left-nav/index.jsx'
import Header from '../../components/header/index.jsx'
import { Layout } from 'antd';
import memoryUtils from '../../utils/memoryUtils.jsx'

import Home from'../home/home.jsx'
import Category from'../category/category.jsx'
import Product from'../product/product.jsx'
import Role from'../role/role.jsx'
import User from'../user/user.jsx'
import Bar from'../charts/bar.jsx'
import Pie from'../charts/pie.jsx'
import Line from'../charts/line.jsx'



const { Footer, Sider, Content } = Layout;

export default class Admin extends Component{
		render(){
			const user=memoryUtils.user
			//如果内存没有user==>当前没有登陆
			if(!user||!user._id){
				//自动跳转到登陆(在render()中)
				return <Redirect to='/login'/>
			}
			return(
					<Layout style={{height:'100%'}}>
				      <Sider><LeftNav/></Sider>
				      <Layout >
				        <Header>Header</Header>
				        <Content style={{backgroundColor:'#fff'}} >
					      <Switch>
						      <Route path='/home' component={Home}/>
						      <Route path='/category' component={Category}/>
						      <Route path='/product' component={Product}/>
						      <Route path='/role' component={Role}/>
						      <Route path='/user' component={User}/>
						      <Route path='/charts/bar' component={Bar}/>
						      <Route path='/charts/line' component={Line}/>
						      <Route path='/charts/pie' component={Pie }/>
						      <Redirect to='/home'/>

					      </Switch>
				        </Content>
				        <Footer style={{textAlign:'center',color:'#cccccc'}}>推荐使用谷歌浏览器，推荐使用谷歌浏览器，推荐使用谷歌浏览器，</Footer>
				      </Layout>
				    </Layout>
				)

		}

}