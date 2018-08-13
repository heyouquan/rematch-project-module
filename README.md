此项目是搭建react的空项目的框架
使用的技术栈是：react、react-redux、rematch、react-router、history等
都已经配置好状态管理和路由
这里使用rematch替代redux，可以更好的使用，rematch比redux更加简单，并且处理起来也更加方便

使用rematch只需要简单几步：
1、使用init包装models
2、建立models，models中包含state、reducers和effects(异步action)
3、dispatch可以触发models中的actions
4、同样也可以使用react-redux包装rematch，在view层可以mapStateToProps和mapDispatchToProps，并且触发Action
#########
npm run start // 启动项目
npm run build // 编译项目
npm run test // 测试

###############
rematch的官方文档说明：https://github.com/rematch/rematch