import React from 'react'
import{ View, Text, FlatList, Image, Button, StyleSheet, ActivityIndicator } from 'react-native'
export default class Login extends React.Component{
    static navigationOptions={
        title:'商品列表'
    }
    constructor(){
        super()
        this.state={
            list:[
                {pic:require('../assets/1.png'),title:'联想小新全新9代处理器，大内存，大容量固态硬盘,显存8G,rtx2080ti,高清屏幕2020',lid:1,price:'99990'},
                {pic:require('../assets/2.png'),title:'联想小新全新9代处理器，大内存，大容量固态硬盘，联想小新全新9代处理器，大内存，大容量固态硬盘,显存8G,rtx2080ti,高清屏幕2020',lid:3,price:'99999'},
                {pic:require('../assets/3.png'),title:'联想小新全新9代处理器，大内存，大容量固态硬盘,联想小新全新9代处理器，大内存，大容量固态硬盘,显存8G,rtx2080ti,高清屏幕2020',lid:2,price:'99994'},
                {pic:require('../assets/4.png'),title:'联想小新全新9代处理器，大内存，大容量固态硬盘,联想小新全新9代处理器，大内存，大容量固态硬盘,显存8G,rtx2080ti,高清屏幕2020',lid:4,price:'99995'},
                {pic:require('../assets/1.png'),title:'联想小新全新9代处理器，大内存，大容量固态硬盘,联想小新全新9代处理器，大内存，大容量固态硬盘,显存8G,rtx2080ti,高清屏幕2020',lid:5,price:'99996'},
                {pic:require('../assets/1.png'),title:'联想小新全新9代处理器，大内存，大容量固态硬盘,联想小新全新9代处理器，大内存，大容量固态硬盘,显存8G,rtx2080ti,高清屏幕2020',lid:6,price:'99997'},
                {pic:require('../assets/1.png'),title:'联想小新全新9代处理器，大内存，大容量固态硬盘,显存8G,rtx2080ti,高清屏幕2020',lid:1,price:'99990'},
                {pic:require('../assets/2.png'),title:'联想小新全新9代处理器，大内存，大容量固态硬盘，联想小新全新9代处理器，大内存，大容量固态硬盘,显存8G,rtx2080ti,高清屏幕2020',lid:3,price:'99999'},
                {pic:require('../assets/3.png'),title:'联想小新全新9代处理器，大内存，大容量固态硬盘,联想小新全新9代处理器，大内存，大容量固态硬盘,显存8G,rtx2080ti,高清屏幕2020',lid:2,price:'99994'},
            ]
        }
    }
    items=(datas)=>{
        return(
            <View style={ss.col}>
                <Image source={datas.item.pic} style={{width:80,height:80}}></Image>
                <View style={{flex:1,marginLeft:10}}>
                    <Text  numberOfLines={1} ellipsizeMode='tail'>{datas.item.title}</Text>
                    <Text style={{paddingTop:10,color:'red'}}>价格：{datas.item.price}</Text>
                </View>
                <Button title='查看详情' onPress={()=>{this.props.navigation.navigate('detail',{id:datas.item.lid})}}></Button>
            </View>
        )
    }
    loadmore=()=>{
        if(this.state.list.length>=60){
            return
        }else{
           let list= this.state.list.concat(this.state.list)
           this.setState({list})
        }
    }
    footers=()=>{
        if(this.state.list.length>=60){
            return(
                <Button title='没有更多数据了....' disabled></Button>
            )
        }else{
            return(
                <View>
                    <ActivityIndicator size='large' color='blue'></ActivityIndicator>
                    <Text style={{textAlign:'center'}}>正在加载...</Text>
                </View>
            )
        }
    }
    render(){
        return(
            <FlatList ListFooterComponent={this.footers} onEndReachedThreshold={0.3} onEndReached={this.loadmore} data={this.state.list} renderItem={this.items} keyExtractor={(item,index)=>index.toString()}></FlatList>
        ) 
    }
}
let ss=StyleSheet.create({
    col:{
        flexDirection:'row',
        alignItems:'center',
        padding:10
    }
})