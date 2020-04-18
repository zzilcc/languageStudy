// pages/Japanese/component/fifty/fifty.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowNav: true,
    items: [
      {
        name: "五十音",
        id: "0001",
        data: [
          {
            id: "001",
            hiragana: "あ",
            katakana: "ア",
            roman: "a"
          },
          {
            id: "002",
            hiragana: "い",
            katakana: "イ",
            roman: "i"
          },
          {
            id: "003",
            hiragana: "う",
            katakana: "ウ",
            roman: "u"
          },
          {
            id: "004",
            hiragana: "え",
            katakana: "エ",
            roman: "e"
          },
          {
            id: "005",
            hiragana: "お",
            katakana: "オ",
            roman: "o"
          },
          {
            id: "006",
            hiragana: "か",
            katakana: "カ",
            roman: "ka"
          },
          {
            id: "007",
            hiragana: "き",
            katakana: "キ",
            roman: "ki"
          },
          {
            id: "008",
            hiragana: "く",
            katakana: "ク",
            roman: "ku"
          },
          {
            id: "009",
            hiragana: "け",
            katakana: "ケ",
            roman: "ke"
          },
          {
            id: "010",
            hiragana: "こ",
            katakana: "コ",
            roman: "ko"
          },
          {
            id: "011",
            hiragana: "さ",
            katakana: "サ",
            roman: "sa"
          },
          {
            id: "012",
            hiragana: "し",
            katakana: "シ",
            roman: "shi"
          },
          {
            id: "013",
            hiragana: "す",
            katakana: "ス",
            roman: "su"
          },
          {
            id: "014",
            hiragana: "せ",
            katakana: "セ",
            roman: "se"
          },
          {
            id: "015",
            hiragana: "そ",
            katakana: "ソ",
            roman: "so"
          },
          {
            id: "016",
            hiragana: "た",
            katakana: "タ",
            roman: "ta"
          },
          {
            id: "017",
            hiragana: "ち",
            katakana: "チ",
            roman: "chi"
          },
          {
            id: "018",
            hiragana: "つ",
            katakana: "ツ",
            roman: "tsu"
          },
          {
            id: "019",
            hiragana: "て",
            katakana: "テ",
            roman: "te"
          },
          {
            id: "020",
            hiragana: "と",
            katakana: "ト",
            roman: "to"
          },
          {
            id: "021",
            hiragana: "な",
            katakana: "ナ",
            roman: "na"
          },
          {
            id: "022",
            hiragana: "に",
            katakana: "ニ",
            roman: "ni"
          },
          {
            id: "023",
            hiragana: "ぬ",
            katakana: "ヌ",
            roman: "nu"
          },
          {
            id: "024",
            hiragana: "ね",
            katakana: "ネ",
            roman: "ne"
          },
          {
            id: "025",
            hiragana: "の",
            katakana: "ノ",
            roman: "no"
          },
          {
            id: "026",
            hiragana: "は",
            katakana: "ハ",
            roman: "ha"
          },
          {
            id: "027",
            hiragana: "ひ",
            katakana: "ヒ",
            roman: "hi"
          },
          {
            id: "028",
            hiragana: "ふ",
            katakana: "フ",
            roman: "hu"
          },
          {
            id: "029",
            hiragana: "へ",
            katakana: "ヘ",
            roman: "he"
          },
          {
            id: "030",
            hiragana: "ほ",
            katakana: "ホ",
            roman: "ho"
          },
          {
            id: "031",
            hiragana: "ま",
            katakana: "マ",
            roman: "ma"
          },
          {
            id: "032",
            hiragana: "み",
            katakana: "ミ",
            roman: "mi"
          },
          {
            id: "033",
            hiragana: "む",
            katakana: "ム",
            roman: "mu"
          },
          {
            id: "034",
            hiragana: "め",
            katakana: "メ",
            roman: "me"
          },
          {
            id: "035",
            hiragana: "も",
            katakana: "モ",
            roman: "mo"
          },
          {
            id: "036",
            hiragana: "や",
            katakana: "ヤ",
            roman: "ya"
          },
          {
            id: "037",
            hiragana: "(い)",
            katakana: "イ",
            roman: "i"
          },
          {
            id: "038",
            hiragana:　"ゆ",
            katakana: "ユ",
            roman: "yu"
          },
          {
            id: "039",
            hiragana: "(え)",
            katakana: "エ",
            roman: "e"
          },
          {
            id: "040",
            hiragana: "よ",
            katakana: "ヨ",
            roman: "yo"
          },
          {
            id: "041",
            hiragana: "ら",
            katakana: "ラ",
            roman: "ra"
          },
          {
            id: "042",
            hiragana: "り",
            katakana: "リ",
            roman: "ri"
          },
          {
            id: "043",
            hiragana: "る",
            katakana: "ル",
            roman: "ru"
          },
          {
            id: "044",
            hiragana: "れ",
            katakana: "レ",
            roman: "re"
          },
          {
            id: "045",
            hiragana: "ろ",
            katakana: "ロ",
            roman: "ro"
          },
          {
            id: "046",
            hiragana: "わ",
            katakana: "ワ",
            roman: "wa"
          },
          {
            id: "047",
            hiragana: "(い)",
            katakana: "イ",
            roman: "i"
          },
          {
            id: "048",
            hiragana: "(う)",
            katakana: "ウ",
            roman: "u"
          },
          {
            id: "049",
            hiragana: "(え)",
            katakana: "エ",
            roman: "e"
          },
          {
            id: "050",
            hiragana: "を",
            katakana: "ヲ",
            roman: "wo"
          },
          {
            id: "051",
            hiragana: "ん",
            katakana: "ン",
            roman: "n"
          }
        ]
      },
      { 
        name: "浊音", 
        id: "0002",
        data: [
          {
            id: "001",
            hiragana: "が",
            katakana: "ガ",
            roman: "ga"
          },
          {
            id: "002",
            hiragana: "ぎ",
            katakana: "ギ",
            roman: "gi"
          },
          {
            id: "003",
            hiragana: "ぐ",
            katakana: "グ",
            roman: "gu"
          },
          {
            id: "004",
            hiragana: "げ",
            katakana: "ゲ",
            roman: "ge"
          },
          {
            id: "005",
            hiragana: "ご",
            katakana: "ゴ",
            roman: "go"
          },
          {
            id: "006",
            hiragana: "ざ",
            katakana: "ザ",
            roman: "za"
          },
          {
            id: "007",
            hiragana: "じ",
            katakana: "ジ",
            roman: "ji"
          },
          {
            id: "008",
            hiragana: "ず",
            katakana: "ズ",
            roman: "zu"
          },
          {
            id: "009",
            hiragana: "ぜ",
            katakana: "ゼ",
            roman: "ze"
          },
          {
            id: "010",
            hiragana: "ぞ",
            katakana: "ゾ",
            roman: "zo"
          },
          {
            id: "011",
            hiragana: "だ",
            katakana: "ダ",
            roman: "da"
          },
          {
            id: "012",
            hiragana: "じ",
            katakana: "ジ",
            roman: "ji"
          },
          {
            id: "013",
            hiragana: "ず",
            katakana: "デ",
            roman: "zu"
          },
          {
            id: "014",
            hiragana: "で",
            katakana: "ド",
            roman: "de"
          },
          {
            id: "015",
            hiragana: "ど",
            katakana: "バ",
            roman: "do"
          },
          {
            id: "016",
            hiragana: "ば",
            katakana: "ビ",
            roman: "ba"
          },
          {
            id: "017",
            hiragana: "び",
            katakana: "シ",
            roman: "bi"
          },
          {
            id: "018",
            hiragana: "ぶ",
            katakana: "ブ",
            roman: "bu"
          },
          {
            id: "019",
            hiragana: "べ",
            katakana: "ベ",
            roman: "be"
          },
          {
            id: "020",
            hiragana: "ぼ",
            katakana: "ボ",
            roman: "bo"
          },
          {
            id: "021",
            hiragana: "ぱ",
            katakana: "パ",
            roman: "pa"
          },
          {
            id: "022",
            hiragana: "ぴ",
            katakana: "ピ",
            roman: "pi"
          },
          {
            id: "023",
            hiragana: "ぷ",
            katakana: "プ",
            roman: "pu"
          },
          {
            id: "024",
            hiragana: "ぺ",
            katakana: "ペ",
            roman: "pe"
          },
          {
            id: "025",
            hiragana: "ぽ",
            katakana: "ぽ",
            roman: "po"
          }
        ]
      },
      {
        name: "拗音",
        id: "0003",
        data: [
          {
            id: "001",
            hiragana: "きゃ",
            katakana: "キャ",
            roman: "kya"
          },
          {
            id: "002",
            hiragana: "きゅ",
            katakana: "キュ",
            roman: "kyu"
          },
          {
            id: "003",
            hiragana: "きょ",
            katakana: "キョ",
            roman: "kyo"
          },
          {
            id: "004",
            hiragana: "しゃ",
            katakana: "シャ",
            roman: "sha"
          },
          {
            id: "005",
            hiragana: "しゅ",
            katakana: "シャ",
            roman: "shu"
          },
          {
            id: "006",
            hiragana: "しょ",
            katakana: "ショ",
            roman: "sho"
          },
          {
            id: "007",
            hiragana: "ちゃ",
            katakana: "チャ",
            roman: "cha"
          },
          {
            id: "008",
            hiragana: "ちゅ",
            katakana: "チュ",
            roman: "chu"
          },
          {
            id: "009",
            hiragana: "ちょ",
            katakana: "チョ",
            roman: "cho"
          },
          {
            id: "010",
            hiragana: "にゃ",
            katakana: "ニャ",
            roman: "nya"
          },
          {
            id: "011",
            hiragana: "にゅ",
            katakana: "ニュ",
            roman: "nyu"
          },
          {
            id: "012",
            hiragana: "にょ",
            katakana: "ニョ",
            roman: "nyo"
          },
          {
            id: "013",
            hiragana: "ひゃ",
            katakana: "ヒャ",
            roman: "hya"
          },
          {
            id: "014",
            hiragana: "ひゅ",
            katakana: "ヒュ",
            roman: "hyu"
          },
          {
            id: "015",
            hiragana: "ひょ",
            katakana: "ヒョ",
            roman: "hyo"
          },
          {
            id: "016",
            hiragana: "みゃ",
            katakana: "ミャ",
            roman: "mya"
          },
          {
            id: "017",
            hiragana: "みゅ",
            katakana: "ミュ",
            roman: "myu"
          },
          {
            id: "018",
            hiragana: "みょ",
            katakana: "ミョ",
            roman: "myo"
          },
          {
            id: "019",
            hiragana: "りゃ",
            katakana: "リャ",
            roman: "rya"
          },
          {
            id: "020",
            hiragana: "りゅ",
            katakana: "リュ",
            roman: "ryu"
          },
          {
            id: "021",
            hiragana: "りょ",
            katakana: "リョ",
            roman: "ryo"
          },
          {
            id: "022",
            hiragana: "ぎゃ",
            katakana: "ギャ",
            roman: "gya"
          },
          {
            id: "023",
            hiragana: "ぎゅ",
            katakana: "ギュ",
            roman: "gyu"
          },
          {
            id: "024",
            hiragana: "ぎょ",
            katakana: "ギョ",
            roman: "gyo"
          },
          {
            id: "025",
            hiragana: "じゃ",
            katakana: "ジャ",
            roman: "ja"
          },
          {
            id: "026",
            hiragana: "じゅ",
            katakana: "ジュ",
            roman: "ju"
          },
          {
            id: "027",
            hiragana: "じょ",
            katakana: "ジョ",
            roman: "jo"
          },
          {
            id: "028",
            hiragana: "びゃ",
            katakana: "ビャ",
            roman: "bya"
          },
          {
            id: "028",
            hiragana: "びゅ",
            katakana: "ビュ",
            roman: "byu"
          },
          {
            id: "029",
            hiragana: "びょ",
            katakana: "ビョ",
            roman: "byo"
          },
          {
            id: "030",
            hiragana: "ぴゃ",
            katakana: "ピャ",
            roman: "pya"
          },
          {
            id: "031",
            hiragana: "ぴゅ",
            katakana: "ピュ",
            roman: "pyu"
          },
          {
            id: "032",
            hiragana: "ぴょ",
            katakana: "ピョ",
            roman: "pyo"
          },
        ]
      },
      {
        name: "汉字",
        id: "0003",
        data: [
          {
            id: "001",
            hiragana: "きゃ",
            katakana: "キャ",
            roman: "kya"
          },
          {
            id: "002",
            hiragana: "きゅ",
            katakana: "キュ",
            roman: "kyu"
          },
          {
            id: "003",
            hiragana: "きょ",
            katakana: "キョ",
            roman: "kyo"
          },
          {
            id: "004",
            hiragana: "しゃ",
            katakana: "シャ",
            roman: "sha"
          },
          {
            id: "005",
            hiragana: "しゅ",
            katakana: "シャ",
            roman: "shu"
          },
          {
            id: "006",
            hiragana: "しょ",
            katakana: "ショ",
            roman: "sho"
          },
          {
            id: "007",
            hiragana: "ちゃ",
            katakana: "チャ",
            roman: "cha"
          },
          {
            id: "008",
            hiragana: "ちゅ",
            katakana: "チュ",
            roman: "chu"
          },
          {
            id: "009",
            hiragana: "ちょ",
            katakana: "チョ",
            roman: "cho"
          },
          {
            id: "010",
            hiragana: "にゃ",
            katakana: "ニャ",
            roman: "nya"
          },
          {
            id: "011",
            hiragana: "にゅ",
            katakana: "ニュ",
            roman: "nyu"
          },
          {
            id: "012",
            hiragana: "にょ",
            katakana: "ニョ",
            roman: "nyo"
          },
          {
            id: "013",
            hiragana: "ひゃ",
            katakana: "ヒャ",
            roman: "hya"
          },
          {
            id: "014",
            hiragana: "ひゅ",
            katakana: "ヒュ",
            roman: "hyu"
          },
          {
            id: "015",
            hiragana: "ひょ",
            katakana: "ヒョ",
            roman: "hyo"
          },
          {
            id: "016",
            hiragana: "みゃ",
            katakana: "ミャ",
            roman: "mya"
          },
          {
            id: "017",
            hiragana: "みゅ",
            katakana: "ミュ",
            roman: "myu"
          },
          {
            id: "018",
            hiragana: "みょ",
            katakana: "ミョ",
            roman: "myo"
          },
          {
            id: "019",
            hiragana: "りゃ",
            katakana: "リャ",
            roman: "rya"
          },
          {
            id: "020",
            hiragana: "りゅ",
            katakana: "リュ",
            roman: "ryu"
          },
          {
            id: "021",
            hiragana: "りょ",
            katakana: "リョ",
            roman: "ryo"
          },
          {
            id: "022",
            hiragana: "ぎゃ",
            katakana: "ギャ",
            roman: "gya"
          },
          {
            id: "023",
            hiragana: "ぎゅ",
            katakana: "ギュ",
            roman: "gyu"
          },
          {
            id: "024",
            hiragana: "ぎょ",
            katakana: "ギョ",
            roman: "gyo"
          },
          {
            id: "025",
            hiragana: "じゃ",
            katakana: "ジャ",
            roman: "ja"
          },
          {
            id: "026",
            hiragana: "じゅ",
            katakana: "ジュ",
            roman: "ju"
          },
          {
            id: "027",
            hiragana: "じょ",
            katakana: "ジョ",
            roman: "jo"
          },
          {
            id: "028",
            hiragana: "びゃ",
            katakana: "ビャ",
            roman: "bya"
          },
          {
            id: "028",
            hiragana: "びゅ",
            katakana: "ビュ",
            roman: "byu"
          },
          {
            id: "029",
            hiragana: "びょ",
            katakana: "ビョ",
            roman: "byo"
          },
          {
            id: "030",
            hiragana: "ぴゃ",
            katakana: "ピャ",
            roman: "pya"
          },
          {
            id: "031",
            hiragana: "ぴゅ",
            katakana: "ピュ",
            roman: "pyu"
          },
          {
            id: "032",
            hiragana: "ぴょ",
            katakana: "ピョ",
            roman: "pyo"
          },
        ]
      },
    ],
    id: "",
    currentdata: null
  },
  onChangeTab(e) {
    this.setData({
      id: e.currentTarget.dataset.id,
      currentdata: e.currentTarget.dataset.currentdata,
      isShowNav: false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
