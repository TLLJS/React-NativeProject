import Reaact from 'react'
import {View,Text} from 'react-native'
// import{ createStackNavigator,createAppContainer} from 'react-navigation'
// import Loginscreen from './src/components/Loginscreen'
// import Mainscreen from './src/components/MainScreen'
// import Productilist from './src/components/ProductListScreen'
// import Productdetail from './src/components/ProductDetailScreen'
// 创建路由词典
// var routes=createStackNavigator({
    // login:Loginscreen,//第一个即是首页内容
//     main:{screen:Mainscreen},
//     list:{screen:Productilist},
//     detail:{screen:Productdetail}
// })
// 注册路由词典
// export default createAppContainer(routes)
import{ createStackNavigator, createAppContainer } from 'react-navigation'
import Login from './src/components/Login.js'
import Main from './src/components/Main'
import List from './src/components/List'
import Detail from './src/components/Detail'
// 创建路由器
var routes=createStackNavigator({
    login:Login,
    main:Main,
    list:List,
    detail:Detail
})
// 导出路由器对象
export default createAppContainer(routes)
