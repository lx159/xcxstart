Page({
    data:{
        nodes:[{
            name:'div',
            attrs:{
                class:'div_class',
                style:'color:green；line-height:50px;'
            },
            children:[{
                type:'text',
                text:"这是个&nbsp;测试"
            }]
        }]

        // nodes1:[{
        //     name:"h3",
        //     attrs:{
        //         style:"color:red"
        //     },
        //     children:[{
        //         type:'text',
        //         text:"小程序&nbsp;测试！！！"
        //     }]
        // }]
    },

    tap() {
       console.log('tap')
    },

    touchstart(){
        console.log('touchstart')
    },

    touchmove(){
        console.log('touchmove')
    },

    touchcancel(){
        console.log('touchcancel')
    },

    touchend(){
        console.log('touchend')
    },

    longtap(){
        console.log('longtap')
    }

/*
rich-tap 事件流
 */

})
