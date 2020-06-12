import React from 'react'
import {View,Text, FlatList,Image, Button, ActivityIndicator} from 'react-native'
export default class Productlistscreen extends React.Component{
    static navigationOptions={
        title:'商品列表'
    }
    static url='http://www.baidu.com'
    constructor(){
        super()
        this.state={
            plist:[
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
    componentDidMount(){
        //组件挂载完成后，异步请求服务器商品列表
        //  fetch(Productlistscreen.url).then(res=>res.json())
        //  .then(res=>{
        //      console.log(res)
        // 把请求到的数据存到plist中
        //      this.setState({
        //          plist:res
        //      })
        // }).catch(err=>{console.log(err)})
     }
     dochanges(pid){
         this.props.navigation.navigate('detail',{pid:pid})
     }
    _renderitem=(data)=>{
        console.log(data.item)
        return(
            <View style={{flexDirection:'row',alignItems:'center',padding:10}}>
                <Image source={data.item.pic} style={{width:80,height:80}} resizeMode='center'></Image>
                <View style={{flex:1}}>
                    <Text numberOfLines={2} ellipsizeMode='tail'>{data.item.title}</Text>
                    <Text style={{color:'red'}}>价格：{data.item.price}</Text>
                </View>
                <Button title="查看详情" onPress={()=>{this.dochanges(data.item.lid)}}></Button>
            </View>
        )
    }
    add=()=>{
        if(this.state.plist.length>=30){
            return;
        }
        let plist=this.state.plist;
        plist=plist.concat(plist);
        this.setState({plist})
    }
    comfoot=()=>{
        if(this.state.plist.length>=30){
            return(<Button title='没有更多数据了' disabled></Button>);
        }else{
            return(
            <View>
                <Text>加载中...</Text>
                <ActivityIndicator size='large' color='blue'></ActivityIndicator>
            </View>
            )
        }
    }
    render(){
        return( 
                <View>
                    <FlatList ListFooterComponent={this.comfoot} onEndReached={this.add} onEndReachedThreshold={0.3} keyExtractor={(item,index)=>{return index.toString()}} data={this.state.plist} renderItem={this._renderitem}></FlatList>
                </View>
                
        )
    }
}