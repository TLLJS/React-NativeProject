import React from 'react'
import{ View, Text, TextInput, Button, Image, StyleSheet } from 'react-native'
export default class Login extends React.Component{
    static navigationOptions={
        title:'管理员登录'
    }
    constructor(){
        super()
        this.textvalues=this.textvalues.bind(this)
        this.textpassword=this.textpassword.bind(this)
        this.changes=this.changes.bind(this)
        this.state={
            name:'',
            password:''
        }
    }
    changes(){
        // alert(this.state.name,this.state.password)
        // let url='http://www.baidu.com';
        // fetch(url,{
        //     method:'POST',
        //     body:'uname='+this.state.name+'&upwd='+this.state.password,
        //     headers:{
        //         'Content-Type':'application/x-www-form-urlencoded'
        //     }
        // }).then(res=>res.json())
        // .then(res=>{
            // 登陆成功
        //     this.props.navigation.navigate('main')
        // }).catch(err=>{
            // 登陆失败
        //     console.log(err)
        // })
        this.props.navigation.navigate('main',{pid:'999',unmae:'哈哈'})
    }
    textvalues(value){
        this.setState({
            name:value
        })
    }
    textpassword(value){
        this.setState({
            password:value
        })
    }
    render(){
        return(
            <View style={ss.container}>
                <TextInput onChangeText={this.textvalues} value={this.state.name} style={ss.input} placeholder="请输入管理员用户名"></TextInput>
                <TextInput onChangeText={this.textpassword} value={this.state.password} style={ss.input} placeholder="请输入密码" secureTextEntry={true}></TextInput>
                <Button title='登录' onPress={this.changes}></Button>
                <View style={ss.box}>
                    <Image source={require('../assets/logo.png')}></Image>
                    <Text style={ss.title}>后台管理系统</Text>
                </View>
                <Text style={{textAlign:'center',color:'#73879c'}}>©2020 版权所有</Text>
            </View>
        )
        
    }
}
let ss=StyleSheet.create({
    container:{
        padding:30
    },
    input:{
        borderBottomWidth:2,
        borderBottomColor:'#aaa',
        marginBottom:20
    },
    box:{
        flexDirection:"row",
        justifyContent:'space-evenly',
        alignItems:'center',
        marginVertical:40,
    },
    title:{
        fontSize:25,
        color:'#73879c'
    }
})