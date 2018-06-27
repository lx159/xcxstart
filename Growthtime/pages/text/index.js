var initData = 'this is first line\nthis is second line';
var selectData = '选择测试';
var extraLine = [];
Page({
    data: {
        text: initData,
        selectdata: selectData
    },
    add: function(e) {
        extraLine.push('other line')
        this.setData({
            text: initData + '\n' + extraLine.join('\n')
        })
    },
    remove: function(e) {
        if (extraLine.length > 0) {
            extraLine.pop()
            this.setData({
                text: initData + '\n' + extraLine.join('\n')
            })
        }
    }
})