(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extend-view-carousel-carousel"],{"13e1":function(t,e,i){"use strict";i.r(e);var n=i("16e4"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"16e4":function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("61e6")),o=n(i("ef2ed")),s={components:{tuiIcon:a.default,tuiCountdown:o.default},data:function(){return{banner:["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"],classify:[{img:"kongtiao",name:"空调"},{img:"Icewash",name:"冰洗"},{img:"heater",name:"热水器"},{img:"bed",name:"床"},{img:"boutique",name:"精品"}],current:0,headlines:["苹果XR对比华为Mate20你会选择谁","格兰仕暗示拜访拼多多后遭天猫打压，拼多多高层赞其有勇气","耐克没进前十，今年Q1全球受欢迎品牌榜"],productList:[{img:1,name:"欧莱雅（LOREAL）奇焕光彩粉嫩透亮修颜霜 30ml（欧莱雅彩妆 BB霜 粉BB 遮瑕疵 隔离）",sale:599,factory:899,time:2e3},{img:2,name:"德国DMK进口牛奶  欧德堡（Oldenburger）超高温处理全脂纯牛奶1L*12盒",sale:29,factory:69,time:1500},{img:3,name:"【第2支1元】柔色尽情丝柔口红唇膏女士不易掉色保湿滋润防水 珊瑚红",sale:299,factory:699,time:1800},{img:4,name:"百雀羚套装女补水保湿护肤品",sale:1599,factory:2899,time:1e3},{img:5,name:"百草味 肉干肉脯 休闲零食 靖江精制猪肉脯200g/袋",sale:599,factory:899,time:3e3},{img:6,name:"短袖睡衣女夏季薄款休闲家居服短裤套装女可爱韩版清新学生两件套 短袖粉色长颈鹿 M码75-95斤",sale:599,factory:899,time:2400},{img:1,name:"欧莱雅（LOREAL）奇焕光彩粉嫩透亮修颜霜",sale:599,factory:899,time:1600},{img:2,name:"德国DMK进口牛奶",sale:29,factory:69,time:1200},{img:3,name:"【第2支1元】柔色尽情丝柔口红唇膏女士不易掉色保湿滋润防水 珊瑚红",sale:299,factory:699,time:1800},{img:4,name:"百雀羚套装女补水保湿护肤品",sale:1599,factory:2899,time:2600}]}},methods:{change:function(t){this.current=t.detail.current},detail:function(){uni.navigateTo({url:"../productDetail/productDetail"})},more:function(t){var e=t.currentTarget.dataset.key||"";uni.navigateTo({url:"../productList/productList?searchKey="+e})}}};e.default=s},2126:function(t,e,i){"use strict";i.r(e);var n=i("d627"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"29c7":function(t,e,i){"use strict";var n=i("6d49"),a=i.n(n);a.a},"2cc2":function(t,e,i){var n=i("38c5");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("1698aafa",n,!0,{sourceMap:!1,shadowMode:!1})},"38c5":function(t,e,i){e=t.exports=i("24fb")(!1),e.push([t.i,".tui-countdown-box[data-v-9a204988]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.tui-countdown-box[data-v-9a204988]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.tui-countdown-item[data-v-9a204988]{border:%?1?% solid;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:%?1?%;border-radius:%?6?%;white-space:nowrap;-webkit-transform:translateZ(0);transform:translateZ(0)}.tui-countdown-time[data-v-9a204988]{margin:0;padding:0}.tui-countdown-colon[data-v-9a204988]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0 %?5?%}.tui-colon-pad[data-v-9a204988]{padding:0!important}.tui-countdown-scale[data-v-9a204988]{-webkit-transform:scale(.9);transform:scale(.9);-webkit-transform-origin:center center;transform-origin:center center}",""])},4492:function(t,e,i){e=t.exports=i("24fb")(!1),e.push([t.i,'.container[data-v-62a240b0]{padding-bottom:%?100?%;box-sizing:border-box}\n\n/*banner*/.tui-banner-box[data-v-62a240b0]{width:100%;padding-top:%?20?%;box-sizing:border-box;background:#fff}.tui-banner-swiper[data-v-62a240b0]{width:100%;height:%?240?%}.tui-banner-item[data-v-62a240b0]{padding:0 %?16?%;box-sizing:border-box}.tui-slide-image[data-v-62a240b0]{width:100%;height:%?240?%;display:block;border-radius:%?12?%\n\t/* transition: all 0.1s linear; */}.tui-banner-scale[data-v-62a240b0]{-webkit-transform:scaleY(.9);transform:scaleY(.9);-webkit-transform-origin:center center;transform-origin:center center}\n\n\n\n[data-v-62a240b0] .tui-banner-swiper .uni-swiper-dot{width:%?8?%;height:%?8?%;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;background:none;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}[data-v-62a240b0] .tui-banner-swiper .uni-swiper-dot:before{content:"";-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1;background:hsla(0,0%,100%,.8);border-radius:%?16?%;overflow:hidden}[data-v-62a240b0] .tui-banner-swiper .uni-swiper-dot-active:before{background:#fff}[data-v-62a240b0] .tui-banner-swiper .uni-swiper-dot.uni-swiper-dot-active{width:%?16?%}\n\n\n\n/*banner*/\n\n/*headlines*/.tui-rolling-news[data-v-62a240b0]{width:100%;padding:0 %?30?%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;background:#fff}.tui-rolling-news[data-v-62a240b0]:after{left:0}.tui-swiper[data-v-62a240b0]{margin-left:%?8?%;font-size:%?28?%;height:%?80?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.tui-swiper-item[data-v-62a240b0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.tui-news-item[data-v-62a240b0]{line-height:%?28?%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#555}\n\n/*headlines*/\n\n/*classify*/.tui-classify-box[data-v-62a240b0]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:%?28?% 0;background-color:#fff}.tui-classify-item[data-v-62a240b0]{width:20%;text-align:center}.tui-classify-img[data-v-62a240b0]{width:%?88?%;height:%?88?%}.tui-classify-name[data-v-62a240b0]{font-size:%?26?%;line-height:%?26?%;padding-top:%?8?%;color:#555;white-space:nowrap}\n\n/*classify*/\n\n/*spike*/.tui-spike-box[data-v-62a240b0]{background:#fff;margin-top:%?20?%}.tui-spike-title[data-v-62a240b0]{padding:%?20?% %?30?%;box-sizing:border-box;font-size:%?30?%;color:#333;font-weight:700}.tui-spike-title[data-v-62a240b0]:after{left:0}.tui-spike-swiper[data-v-62a240b0]{min-height:%?440?%}.tui-pro-item[data-v-62a240b0]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;background:#fff;box-sizing:border-box;border-radius:%?12?%;position:relative}.tui-pro-item[data-v-62a240b0]:after{left:%?240?%}.tui-pro-img[data-v-62a240b0]{width:%?220?%;height:%?220?%;display:block;-webkit-flex-shrink:0;flex-shrink:0;border-radius:%?12?%}.tui-pro-content[data-v-62a240b0]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;box-sizing:border-box;padding:%?20?%}.tui-pro-tit[data-v-62a240b0]{color:#2e2e2e;font-size:%?26?%;word-break:break-all;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.tui-pro-btmbox[data-v-62a240b0]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.tui-sale-price[data-v-62a240b0]{font-size:%?34?%;font-weight:500;color:#e41f19}.tui-factory-price[data-v-62a240b0]{font-size:%?24?%;color:#a0a0a0;text-decoration:line-through;padding-left:%?12?%}.tui-countdown[data-v-62a240b0]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.tui-countdown-text[data-v-62a240b0]{padding:0 %?8?%;font-size:%?24?%;line-height:%?24?%;color:#555}\n\n/*spike*/',""])},5941:function(t,e,i){"use strict";var n=i("2cc2"),a=i.n(n);a.a},"666f":function(t,e,i){"use strict";i.r(e);var n=i("ed67"),a=i("13e1");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("29c7");var s=i("2877"),r=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"62a240b0",null);e["default"]=r.exports},"6d49":function(t,e,i){var n=i("4492");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("160ee35a",n,!0,{sourceMap:!1,shadowMode:!1})},d36d:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"tui-countdown-box"},[t.days?i("v-uni-view",{staticClass:"tui-countdown-item",style:{background:t.bgcolor,borderColor:t.bcolor,width:t.width+"rpx",height:t.height+"rpx"}},[i("v-uni-view",{staticClass:"tui-countdown-time",class:[t.scale?"tui-countdown-scale":""],style:{fontSize:t.size+"rpx",color:t.color,lineHeight:t.size+"rpx"}},[t._v(t._s(t.d))])],1):t._e(),t.days?i("v-uni-view",{staticClass:"tui-countdown-colon",class:{"tui-colon-pad":"transparent"==t.bcolor},style:{lineHeight:t.colonSize+"rpx",fontSize:t.colonSize+"rpx",color:t.colonColor}},[t._v(t._s(t.isColon?":":"天"))]):t._e(),t.hours?i("v-uni-view",{staticClass:"tui-countdown-item",style:{background:t.bgcolor,borderColor:t.bcolor,width:t.width+"rpx",height:t.height+"rpx"}},[i("v-uni-view",{staticClass:"tui-countdown-time",class:[t.scale?"tui-countdown-scale":""],style:{fontSize:t.size+"rpx",color:t.color,lineHeight:t.size+"rpx"}},[t._v(t._s(t.h))])],1):t._e(),t.hours?i("v-uni-view",{staticClass:"tui-countdown-colon",class:{"tui-colon-pad":"transparent"==t.bcolor},style:{lineHeight:t.colonSize+"rpx",fontSize:t.colonSize+"rpx",color:t.colonColor}},[t._v(t._s(t.isColon?":":"时"))]):t._e(),t.minutes?i("v-uni-view",{staticClass:"tui-countdown-item",style:{background:t.bgcolor,borderColor:t.bcolor,width:t.width+"rpx",height:t.height+"rpx"}},[i("v-uni-view",{staticClass:"tui-countdown-time",class:[t.scale?"tui-countdown-scale":""],style:{fontSize:t.size+"rpx",color:t.color,lineHeight:t.size+"rpx"}},[t._v(t._s(t.i))])],1):t._e(),t.minutes?i("v-uni-view",{staticClass:"tui-countdown-colon",class:{"tui-colon-pad":"transparent"==t.bcolor},style:{lineHeight:t.colonSize+"rpx",fontSize:t.colonSize+"rpx",color:t.colonColor}},[t._v(t._s(t.isColon?":":"分"))]):t._e(),t.seconds&&t.minutes?i("v-uni-view",{staticClass:"tui-countdown-item",style:{background:t.bgcolor,borderColor:t.bcolor,width:t.width+"rpx",height:t.height+"rpx"}},[i("v-uni-view",{staticClass:"tui-countdown-time",class:[t.scale?"tui-countdown-scale":""],style:{fontSize:t.size+"rpx",color:t.color,lineHeight:t.size+"rpx"}},[t._v(t._s(t.s))])],1):t._e(),t.seconds&&!t.isColon&&t.minutes?i("v-uni-view",{staticClass:"tui-countdown-colon",class:{"tui-colon-pad":"transparent"==t.bcolor},style:{lineHeight:t.colonSize+"rpx",fontSize:t.colonSize+"rpx",color:t.colonColor}},[t._v("秒")]):t._e()],1)},a=[];i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return a}))},d627:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,o=n(i("bd86"));i("c5f6");var s=(a={name:"tuiCountdown",props:{width:{type:Number,default:24},height:{type:Number,default:24},bcolor:{type:String,default:"#333"},bgcolor:{type:String,default:"#fff"},size:{type:Number,default:24},color:{type:String,default:"#333"},scale:{type:Boolean,default:!1},colonSize:{type:Number,default:28},colonColor:{type:String,default:"#333"},time:{type:Number,default:0},days:{type:Boolean,default:!1},hours:{type:Boolean,default:!0},minutes:{type:Boolean,default:!0},seconds:{type:Boolean,default:!0},isColon:{type:Boolean,default:!0}},data:function(){return{countdown:null,h:"00",i:"00",s:"00"}},watch:{time:function(t){clearInterval(this.countdown),this.doLoop()}}},(0,o.default)(a,"data",(function(){return{countdown:null,d:"0",h:"00",i:"00",s:"00"}})),(0,o.default)(a,"created",(function(){this.doLoop()})),(0,o.default)(a,"beforeDestroy",(function(){clearInterval(this.countdown),this.countdown=null})),(0,o.default)(a,"methods",{endOfTime:function(){clearInterval(this.countdown),this.countdown=null,this.$emit("end",{})},doLoop:function(){var t=this,e=this.time||0;this.countDown(e),this.countdown=setInterval((function(){e--,e<0?t.endOfTime():t.countDown(e)}),1e3)},countDown:function(t){var e=0,i=0,n=0,a=0;t>0?(e=this.days?Math.floor(t/86400):0,i=Math.floor(t/3600)-24*e,n=Math.floor(t/60)-60*i-24*e*60,a=Math.floor(t)-24*e*60*60-60*i*60-60*n):this.endOfTime(),i=i<10?"0"+i:i,n=n<10?"0"+n:n,a=a<10?"0"+a:a,this.d=e,this.h=i,this.i=n,this.s=a}}),a);e.default=s},ed67:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"tui-banner-box"},[i("v-uni-swiper",{staticClass:"tui-banner-swiper",attrs:{"indicator-dots":!0,autoplay:!0,interval:5e3,duration:150,circular:!0,"previous-margin":"60rpx","next-margin":"60rpx"},on:{change:function(e){e=t.$handleEvent(e),t.change(e)}}},t._l(t.banner,(function(e,n){return i("v-uni-swiper-item",{key:n,staticClass:"tui-banner-item"},[i("v-uni-image",{staticClass:"tui-slide-image",class:[t.current!=n?"tui-banner-scale":""],attrs:{src:"../../../static/images/mall/banner/"+e,mode:"scaleToFill"},on:{click:function(e){e=t.$handleEvent(e),t.detail(e)}}})],1)})),1)],1),i("v-uni-view",{staticClass:"tui-rolling-news list-item"},[i("tui-icon",{attrs:{name:"news",size:22,color:"#555"}}),i("v-uni-swiper",{staticClass:"tui-swiper",attrs:{vertical:!0,autoplay:!0,circular:!0,interval:4e3}},t._l(t.headlines,(function(e,n){return i("v-uni-swiper-item",{key:n,staticClass:"tui-swiper-item"},[i("v-uni-view",{staticClass:"tui-news-item"},[t._v(t._s(e))])],1)})),1)],1),i("v-uni-view",{staticClass:"tui-classify-box"},t._l(t.classify,(function(e,n){return i("v-uni-view",{key:n,staticClass:"tui-classify-item",attrs:{"data-key":e.name},on:{click:function(e){e=t.$handleEvent(e),t.more(e)}}},[i("v-uni-image",{staticClass:"tui-classify-img",attrs:{src:"../../../static/images/classify/"+e.img+".png"}}),i("v-uni-view",{staticClass:"tui-classify-name"},[t._v(t._s(e.name))])],1)})),1),i("v-uni-view",{staticClass:"tui-spike-box"},[i("v-uni-view",{staticClass:"tui-spike-title list-item"},[t._v("限时秒杀")]),i("v-uni-swiper",{staticClass:"tui-spike-swiper",attrs:{"indicator-dots":!1,autoplay:!0,interval:5e3,duration:400,circular:!0,"display-multiple-items":2,vertical:!0}},t._l(t.productList,(function(e,n){return i("v-uni-swiper-item",{key:n},[i("v-uni-view",{staticClass:"tui-pro-item list-item",attrs:{"hover-class":"hover","hover-start-time":150},on:{click:function(e){e=t.$handleEvent(e),t.detail(e)}}},[i("v-uni-image",{staticClass:"tui-pro-img",attrs:{src:"../../../static/images/mall/product/"+e.img+".jpg",mode:"widthFix"}}),i("v-uni-view",{staticClass:"tui-pro-content"},[i("v-uni-view",{staticClass:"tui-pro-tit"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"tui-pro-btmbox"},[i("v-uni-view",{staticClass:"tui-pro-price"},[i("v-uni-text",{staticClass:"tui-sale-price"},[t._v("￥"+t._s(e.sale))]),i("v-uni-text",{staticClass:"tui-factory-price"},[t._v("￥"+t._s(e.factory))])],1),i("v-uni-view",{staticClass:"tui-countdown"},[i("v-uni-view",{staticClass:"tui-countdown-text"},[t._v("剩余")]),i("tui-countdown",{attrs:{time:e.time,color:"#e41f19",bcolor:"#e41f19",colonColor:"#e41f19",scale:!0}}),i("v-uni-view",{staticClass:"tui-countdown-text"},[t._v("结束")])],1)],1)],1)],1)],1)})),1)],1)],1)},a=[];i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return a}))},ef2ed:function(t,e,i){"use strict";i.r(e);var n=i("d36d"),a=i("2126");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("5941");var s=i("2877"),r=Object(s["a"])(a["default"],n["a"],n["b"],!1,null,"9a204988",null);e["default"]=r.exports}}]);