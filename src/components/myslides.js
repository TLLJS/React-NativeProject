import React from 'react'
import {Image,Dimensions,StyleSheet} from 'react-native'
export default class Myslides extends React.Component{
    time=null
    constructor(){
        super()
        this.state={
            index:0
        }
    }
    componentWillUnmount(){
        if(this.time){
            clearInterval(this.time)
        }
    }
    render(){
        if(this.props.plc){
            if(this.time===null){
                this.time=setInterval(()=>{
                    let index=this.state.index;
                    index++;
                    if(index>=this.props.plc.length){
                        index=0;
                    }
                    this.setState({index})
                },1000)
            }
            return(
                <Image style={ss.full} source={this.props.plc[this.state.index]}></Image>
            )
        }else{
            return(
                <Image style={ss.full} source={require('../assets/loading.jpg')}></Image>
            )
        }
    }
}
// export default class Myslides extends React.Component{
//     time=null
//     constructor(){
//         super()
//         this.state={
//             curIndex:0//当前显示的图片的索引值
//         }
//     }
//     componentWillUnmount(){
//         // 组件销毁时定时器不能自动删除，因此要手动清除定时器
//         if(this.time){
//             clearInterval(this.time)
//         }
//     }
//     // render方法只要数据有变化就会重新执行，所以要保证定时器只启动一次
//     render(){
//         if(this.props.plc){
//             // 保证定时器只启动一次
//             if(this.time===null){
//                this.time= setInterval(()=>{
//                     let i=this.state.curIndex;
//                     i++;
//                     if(i>=this.props.plc.length){
//                         i=0;
//                     }
//                     this.setState({
//                         curIndex:i
//                     })
//                 },1000)
//             }
          
//             return(
//                 <Image style={ss.full} source={this.props.plc[this.state.curIndex]}></Image>
//             )
//         }else{
//             return(
//                 <Image style={ss.full} source={require('../assets/loading.jpg')}></Image>
//             )
//         }
        
//     }
// }
let ss=StyleSheet.create({
    full:{
        // 使图片占满屏幕，
        width:Dimensions.get('window').width,//获得当前屏幕的宽度
        height:Dimensions.get('window').width
    }
})