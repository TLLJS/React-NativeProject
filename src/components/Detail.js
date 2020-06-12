import React from 'react'
import{ View, Text,ScrollView,Button,StyleSheet } from 'react-native'
import Myslides from './myslides'
export default class Login extends React.Component{
    static navigationOptions={
        title:'详情'
    }
    constructor(){
        super()
        this.state={
            id:'',
            details:{lname:'联想拯救者',arr:['4.png','3.png','6.png','5.png'],title:'戴尔（DELL）轻薄本成就5590 15.6窄边框酷睿十代i5手提电脑商务办公学生电脑笔记本电脑 8G内存 512G固态PCIe 标配 背光键盘MX250独显2G银色I5-10210U',
            subtitle:'手提学生游戏本 i5-10210U【MX130 2G独显】高清屏 配置三：8G/512G固态【标配】',price:'99999',cpu:'全新酷睿9代处理器',
          disk:"8G大内存",ram:'512G固态硬盘',show:'RTX2080Ti',shows:'11G Gddr6显存'},
          pic:[require('../assets/1.png'), require('../assets/2.png'),require('../assets/3.png'),require('../assets/4.png')]
        }
    }
    componentDidMount(){
        // 获取路由参数
    //    const id=this.props.navigation.getParam('id');
    //    let url=`请求地址${id}`;
    //    fetch(url).then(res=>res.json()).then(res=>{
    //        this.setState({
    //            detail:res
    //        })
    //    }).catch(err=>{alert(err)})
    //     this.setState({id})
    }
    render(){
        return(
            <View style={{flex:1,padding:15}}>
                <ScrollView>
                    <Text style={{fontSize:18}}>商品型号：{this.state.details.lname}</Text>
                    <View style={ss.hr}></View>
                    <Myslides plc={this.state.pic}></Myslides>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>{this.state.details.title}</Text>
                    <Text style={{fontSize:18,color:'#888'}}>{this.state.details.subtitle}</Text>
                    <Text style={{color:'red',fontSize:20}}>单价：{this.state.details.price}</Text>
                    <View style={ss.hr}></View>
                    <Myslides plc={this.state.pic}></Myslides>
                </ScrollView>
                <Button title='删除商品'></Button> 
            </View>
        )
        
    }
}
let ss=StyleSheet.create({
    hr:{
        height:1,
        backgroundColor:'#888',
        marginVertical:10
    }
})