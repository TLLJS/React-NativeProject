import React from 'react'
import {View,Text, Button, TextInput, Image} from 'react-native'
export default class Loginscreen extends React.Component{
    static navigationOptions={
        title:'管理员登录'
    }
    constructor(){
        super()
        this.login=this.login.bind(this)
        this.dopwd=this.dopwd.bind(this)
        this.changevalue=this.changevalue.bind(this)
        this.state={
            uname:'',
            pwd:''
        }
    }
   login(){
    let uname=this.state.uname;
    let pwd=this.state.pwd;
    let url='http://www.baidu.com'
    // 向服务器发送请求进行登录验证
    fetch(url,{
        method:'post',
        headers:{"Content-Type":'application/x-www-form-urlencoded'},
        body:`uname=${uname}&upwd=${pwd}`,
    }).then((res)=>res.json())
      .then((res)=>{
          if(res.code===200){
            // 无参数路由跳转
            this.props.navigation.navigate('main')
          }
      })
      .catch(err=>{
          alert('用户名或密码错误')
      })
      // 无参数路由跳转
      this.props.navigation.navigate('main')
    //    路由跳转有参数
    //this.props.navigation.navigate('main',{pid:99,uname:'dingding'})
   }
   changevalue(e){
       console.log(e)
       this.setState({
           uname:e
       })
   }
   dopwd(e){
       console.log(e)
       this.setState({
           pwd:e
       })
   }
    render(){
        return(
            <View style={{padding:40}}>
                <TextInput onChangeText={this.changevalue} value={this.state.uname} placeholder='请输入用户名' style={{borderBottomColor:'#aaa',marginBottom:20,borderBottomWidth:1}}></TextInput>
                <TextInput onChangeText={this.dopwd} value={this.state.pwd} secureTextEntry={true} placeholder="请输入密码" style={{borderBottomColor:'#aaa',marginBottom:20,borderBottomWidth:1}}></TextInput>
                <Button title='登录' onPress={this.login}></Button>
                <View style={{marginVertical:50, flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
                    <Image source={require('../assets/logo.png')}></Image>
                    <Text style={{fontSize:25,color:'#73879c'}}> 后台管理系统</Text>
                </View>
                <Text style={{textAlign:'center',color:'#73879c'}}>©2017 版权所有</Text>
            </View>
        )
    }
}