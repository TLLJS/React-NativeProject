import React from 'react'
import{ ScrollView, Text, TouchableOpacity, Image, View, StyleSheet } from 'react-native'
export default class Login extends React.Component{
    static navigationOptions={
        title:'主菜单',
        headerRight:(
            <TouchableOpacity>
                <Image source={require('../assets/user.png')} style={{width:36,height:36,borderRadius:18}}></Image>
            </TouchableOpacity>
        )
    }
    // static navigationOptions=((navigation)=>{
    //     return{
    //         title:'主菜单',
    //         headerRight:(
    //             <TouchableOpacity onPress={()=>{navigation.navigate('login')}}>
    //                 <Image source={require('../assets/user.png')} style={{width:35,height:35,borderRadius:17.5}}></Image>
    //             </TouchableOpacity>
    //         )
    //     }
    // })
    constructor(){
        super()
        this.checked=this.checked.bind(this)
    }
    checked(){
        this.props.navigation.navigate('list')
    }
    render(){
        return(
            <ScrollView>
                <View>
                    <View style={ss.row}>
                        <View style={ss.col}>
                            <Text style={{color:'#888',fontSize:20}}>上架商品总数</Text>
                            <Text style={{color:'green',fontSize:16}}>24380</Text>
                            <Text>+128%较上月</Text>
                        </View>
                        <View style={ss.col}>
                            <Text style={{color:'#888' ,fontSize:20}}>上架商品总数</Text>
                            <Text style={{color:'green' ,fontSize:16}}>24380</Text>
                            <Text>+128%较上月</Text>
                        </View>
                    </View>
                    <View style={ss.row}>
                        <View style={ss.col}>
                            <Text style={{color:'#888',fontSize:20}}>上架商品总数</Text>
                            <Text style={{color:'green',fontSize:16}}>24380</Text>
                            <Text>+128%较上月</Text>
                        </View>
                        <View style={ss.col}>
                            <Text style={{color:'#888',fontSize:20}}>上架商品总数</Text>
                            <Text style={{color:'green',fontSize:16}}>24380</Text>
                            <Text>+128%较上月</Text>
                        </View>
                    </View>
                    <View style={ss.row}>
                        <View style={ss.col}>
                            <Text style={{color:'#888',fontSize:20}}>上架商品总数</Text>
                            <Text style={{color:'green',fontSize:16}}>24380</Text>
                            <Text>+128%较上月</Text>
                        </View>
                        <View style={ss.col}>
                            <Text style={{color:'#888',fontSize:20}}>上架商品总数</Text>
                            <Text style={{color:'green',fontSize:16}}>24380</Text>
                            <Text>+128%较上月</Text>
                        </View>
                    </View>
                </View>
                <View style={ss.rows}>
                    <TouchableOpacity onPress={this.checked}>
                        <View style={ss.cols}>
                            <Image source={require('../assets/menu_user.jpg')}></Image>
                            <Text>商品管理</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={ss.cols}>
                            <Image source={require('../assets/menu_refresh.jpg')}></Image>
                            <Text>用户管理</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={ss.rows}>
                    <TouchableOpacity>
                        <View style={ss.cols}>
                            <Image source={require('../assets/menu_cloud.jpg')}></Image>
                            <Text>用户管理</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={ss.cols}>
                            <Image source={require('../assets/menu_order.jpg')}></Image>
                            <Text>用户管理</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
        
    }
}
let ss=StyleSheet.create({
    rows:{
        flexDirection:'row',
        padding:30,
        justifyContent:'space-around'
    },
    row:{
        flexDirection:'row',
    },
    cols:{
        alignItems:'center'
    },
    col:{
        flex:1,
        padding:20,
        alignItems:'center',
        borderLeftColor:'#73879c',
        borderLeftWidth:1,
        borderBottomWidth:1,
        borderBottomColor:'#73879c'
    }
})