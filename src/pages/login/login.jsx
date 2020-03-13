import React,{Component} from 'react'
import login from '../../assets/images/logo.png'
import './login.less'
import { Form, Icon, Input, Button, message } from 'antd';



class Login extends Component{
    constructor(props){
        super(props);
    }

        handleSubmit=(e)=>{
            e.preventDefault()
            this.props.form.validateFields((err, values) => {
             if (!err) {
              console.log('提交ajax的登陆请求 ', values);
            }
            else{
                console.log('校验失败')
            }
        })
          //  const form=this.props.form
           // const values=form.getFieldsValue();
           // console.log('handleSubmit()',values)
          }

validatePwd=(rule, value, callback)=>{
    console.log('validatePwd()',rule,value)
    if(!value){
        callback('密码必须填写')
    }
    else if(value.length<4){
        callback('密码必须大于4位')
    }
    else if(value.length>12){
        callback('密码必须小于12位')
    }
    else if(!/^[a-zA-Z0-9_]+$/.test(value)){
          callback('密码必须是英文，数字或者下划线组成')
 }else{
    callback()
 }
    
    //callback('xxxx')
}
    render(){
       
    const  form = this.props.form
    const { getFieldDecorator } = form
        
        return(
           <div className='login'>

               <header className='login-header'>
                   <img src={login} />
                   <h1>深蓝后台管理系统</h1>
               </header>

               <section className='login-content'>
                    <h2>用户登录</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                           {
                            getFieldDecorator('username',{rules:[
                                { required: true, message: '用户名必须输入' },
                                { min: 4, message: '用户名至少4位' },
                                { max: 12, message: '用户名最多12位!'},
                                { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文，数字或者下划线组成'}]})(
                            <Input  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                    type="text"
                                    placeholder="账户名" />)
          
      }
                        </Form.Item>
                        <Form.Item>
                        { getFieldDecorator ('password',{rules:[{validator:this.validatePwd}]})( <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="密码"
                                    />)}
                            
                               
                            
                            
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
               </section>

           </div> 
        )
    }
}
const WrapLogin = Form.create()(Login);

export default WrapLogin
