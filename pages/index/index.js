//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    items: [
      { name: "日语", id: "0001", url: "../Japanese/Japanese" },
      { name: "韩语", id: "0002", url: "../Korean/Korean" },
      { name: "英语", id: "0003", url: "../English/English" },
    ]
  },
  //事件处理函数
  onNavigate: function(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.url
    })
  },
  onLoad: function () {
  }
})
