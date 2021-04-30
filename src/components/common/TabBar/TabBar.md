#导航栏
##必传props属性
属性名：options     
属性值：Object
##options配置项
###必选项
####list
#####list内部配置如下     
      list:[                //导航栏列表
        {
          pagePath:'/',     //页面跳转路径
          text:'首页',       //文本
          iconPath:"/img/tabbar/home.png",  //图标路径
          iconSelectedPath:'/img/tabbar/home_active.png'    //选中图标路径
        },
        ......
      ]
###可选项
####color
文本颜色
####selectedColor
选中文本颜色
####backgroundColor
背景颜色
