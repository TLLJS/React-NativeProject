import React from 'react'
import {View,Text,Button, TouchableOpacity, Image, ScrollView, StyleSheet} from 'react-native'
export default class Mainscreen extends React.Component{
    static navigationOptions={
        title:'主菜单',
        headerRight:(
            <TouchableOpacity onPress={()=>{}}>
                <Image source={require('../assets/user.png')} style={{width:35,height:35,borderRadius:17.5}}></Image>
            </TouchableOpacity>
        )
    }
    
    constructor(){
        super()
        this.state={}
    }
    componentDidMount(){
        // 获取路由参数
     let pid=this.props.navigation.getParam('pid')
    let uname=this.props.navigation.getParam('uname')
    // 默认参数
     let age=this.props.navigation.getParam('age',20)
        console.log(pid,uname,age)
    }
    render(){
        return(
            <ScrollView>
                <View>
                    <View style={ss.row}>
                        <View style={ss.col}>
                            <Text style={{color:'#888',fontSize:20}}>上架商品总数</Text>
                            <Text style={{color:'green',fontSize:16}}>24,380</Text>
                            <Text>+128%较上月</Text>
                        </View>
                        <View style={ss.col}>
                            <Text style={{color:'#888',fontSize:20}}>注册用户总数</Text>
                            <Text style={{color:'red',fontSize:16}}>1,965</Text>
                            <Text>-50%较上月</Text>
                        </View>
                    </View>
                    <View style={ss.row}>
                        <View style={ss.col}>
                            <Text style={{color:'#888',fontSize:20}}>注册用户总数</Text>
                            <Text style={{color:'red',fontSize:16}}>1,965</Text>
                            <Text>-50%较上月</Text>
                        </View>
                        <View style={ss.col}>
                            <Text style={{color:'#888',fontSize:20}}>当日PC端PV量</Text>
                            <Text style={{color:'red',fontSize:16}}>14,281</Text>
                            <Text >-50%较上月</Text>
                        </View>
                    </View>
                    <View style={ss.row}>
                        <View style={ss.col}>
                            <Text style={{color:'#888',fontSize:20}}>移动端PV量</Text>
                            <Text style={{color:'red',fontSize:16}}>2,965</Text>
                            <Text >-54%较上月</Text>
                        </View>
                        <View style={ss.col}>
                            <Text style={{color:'#888',fontSize:20}}>注册用户总数</Text>
                            <Text style={{color:'red',fontSize:16}}>1,965</Text>
                            <Text >-50%较上月</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={ss.row}>
                        
                        <View style={ss.cols}>
                            <TouchableOpacity onPress={()=>{this.props. navigation.navigate('list')}}>
                                <Image source={require('../assets/menu_user.jpg')}></Image>
                                <Text style={{textAlign:'center'}}>商品管理</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={ss.cols}>
                            <TouchableOpacity>
                                <Image source={require('../assets/menu_user.jpg')}></Image>
                                <Text style={{textAlign:'center'}}>商品管理</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={ss.row}>
                        <View style={ss.cols}>
                            <TouchableOpacity>
                                <Image source={require('../assets/menu_user.jpg')}></Image>
                                <Text style={{textAlign:'center'}}>商品管理</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={ss.cols}>
                            <TouchableOpacity>
                                <Image source={require('../assets/menu_user.jpg')}></Image>
                                <Text style={{textAlign:'center'}}>商品管理</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>

                    </View>
                </View>
            </ScrollView>
        )
    }
}
var ss=StyleSheet.create({
    row:{
        flexDirection:'row',
    },
    col:{
        flex:1,
        padding:20,
        borderColor:'#888',
        borderWidth:1,
        alignItems:'center'
    },
    cols:{
        flex:1,
        padding:25,
        alignItems:'center'
    }
})