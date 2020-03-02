// pages/event/event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articles:[
      {
        'id':1,
        'title':'钢铁是怎么样炼成的'
      },
      {
        'id':2,
        "title":'互联网的生意'
      }
    ]
  },
  /**
   * view点击的事件
   */
  onViewClick: function(event){
    console.log('hello');
  },

  /**
   * 文章被点击的事件
   */
  onArtClick: function(event){
    console.log(event);
    var dataset = event.currentTarget.dataset;
    var id = dataset.id;
    wx.navigateTo({
      url: '/pages/weibo/weibo?id=' + id,
    })
  },

  onOutterViewClick:function(event){
    console.log(event);
  },

  onInnerViewClick:function(event){
    console.log(event);
  }
 
})