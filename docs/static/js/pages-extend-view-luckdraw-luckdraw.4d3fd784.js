(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extend-view-luckdraw-luckdraw"],{"264c":function(t,a,i){"use strict";var f=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"container"},[t._l(t.circleList,(function(t,a){return i("v-uni-view",{key:a,staticClass:"tui-dot",class:["tui-dot-"+(a+1)]})})),i("v-uni-view",{staticClass:"tui-container-in"},[t._l(t.awardList,(function(a,f){return i("v-uni-view",{key:f,staticClass:"tui-content-out",class:["tui-award-"+(f+1),f==t.indexSelect?"tui-awardSelect":""]},[i("v-uni-image",{staticClass:"tui-award-image",attrs:{src:"../../../static/images/luck/"+a.img}})],1)})),i("v-uni-view",{staticClass:"tui-btn-start",class:[t.isRunning?"tui-ative":""],on:{click:function(a){a=t.$handleEvent(a),t.startDrawing(a)}}},[t._v("立即抽奖")])],2)],2)},o=[];i.d(a,"a",(function(){return f})),i.d(a,"b",(function(){return o}))},2786:function(t,a,i){"use strict";var f=i("73b7"),o=i.n(f);o.a},"5e7b":function(t,a,i){"use strict";i.r(a);var f=i("f092"),o=i.n(f);for(var n in f)"default"!==n&&function(t){i.d(a,t,(function(){return f[t]}))}(n);a["default"]=o.a},"73b7":function(t,a,i){var f=i("78fe");"string"===typeof f&&(f=[[t.i,f,""]]),f.locals&&(t.exports=f.locals);var o=i("4f06").default;o("2e94c4d6",f,!0,{sourceMap:!1,shadowMode:!1})},"78fe":function(t,a,i){a=t.exports=i("24fb")(!1),a.push([t.i,".container[data-v-0c5f1f0a]{height:%?600?%;width:%?650?%;background-color:#fc4034;margin:%?100?% auto;border-radius:%?40?%;box-shadow:0 10px 0 #d80014;position:relative}.tui-container-in[data-v-0c5f1f0a]{width:%?580?%;height:%?530?%;background-color:#d80014;border-radius:%?40?%;position:absolute;left:0;right:0;top:0;bottom:0;margin:auto}\n\n/**小圆点 start*/.tui-dot[data-v-0c5f1f0a]{position:absolute;display:block;border-radius:50%;height:%?20?%;width:%?20?%}.tui-dot[data-v-0c5f1f0a]:nth-child(odd){background:#fff;-webkit-animation:.5s odd-data-v-0c5f1f0a linear infinite;animation:.5s odd-data-v-0c5f1f0a linear infinite}.tui-dot[data-v-0c5f1f0a]:nth-child(2n){background:#fcf400;-webkit-animation:.5s even-data-v-0c5f1f0a linear infinite;animation:.5s even-data-v-0c5f1f0a linear infinite}.tui-dot-1[data-v-0c5f1f0a]{left:%?15?%;top:%?15?%}.tui-dot-2[data-v-0c5f1f0a]{left:%?117.5?%;top:%?7.5?%}.tui-dot-3[data-v-0c5f1f0a]{left:%?220?%;top:%?7.5?%}.tui-dot-4[data-v-0c5f1f0a]{left:%?322.5?%;top:%?7.5?%}.tui-dot-5[data-v-0c5f1f0a]{left:%?425?%;top:%?7.5?%}.tui-dot-6[data-v-0c5f1f0a]{left:%?527.5?%;top:%?7.5?%}.tui-dot-7[data-v-0c5f1f0a]{left:%?620?%;top:%?15?%}.tui-dot-8[data-v-0c5f1f0a]{left:%?622?%;top:%?109?%}.tui-dot-9[data-v-0c5f1f0a]{left:%?622?%;top:%?203?%}.tui-dot-10[data-v-0c5f1f0a]{left:%?622?%;top:%?297?%}.tui-dot-11[data-v-0c5f1f0a]{left:%?622?%;top:%?391?%}.tui-dot-12[data-v-0c5f1f0a]{left:%?622?%;top:%?485?%}.tui-dot-13[data-v-0c5f1f0a]{left:%?620?%;top:%?565?%}.tui-dot-14[data-v-0c5f1f0a]{left:%?517.5?%;top:%?572?%}.tui-dot-15[data-v-0c5f1f0a]{left:%?415?%;top:%?572?%}.tui-dot-16[data-v-0c5f1f0a]{left:%?312.5?%;top:%?572?%}.tui-dot-17[data-v-0c5f1f0a]{left:%?210?%;top:%?572?%}.tui-dot-18[data-v-0c5f1f0a]{left:%?107.5?%;top:%?572?%}.tui-dot-19[data-v-0c5f1f0a]{left:%?15?%;top:%?565?%}.tui-dot-20[data-v-0c5f1f0a]{left:%?7.5?%;top:%?471?%}.tui-dot-21[data-v-0c5f1f0a]{left:%?7.5?%;top:%?377?%}.tui-dot-22[data-v-0c5f1f0a]{left:%?7.5?%;top:%?283?%}.tui-dot-23[data-v-0c5f1f0a]{left:%?7.5?%;top:%?189?%}.tui-dot-24[data-v-0c5f1f0a]{left:%?7.5?%;top:%?95?%}@-webkit-keyframes odd-data-v-0c5f1f0a{0%{background:#fff}to{background:#fcf400}}@keyframes odd-data-v-0c5f1f0a{0%{background:#fff}to{background:#fcf400}}@-webkit-keyframes even-data-v-0c5f1f0a{0%{background:#fcf400}to{background:#fff}}@keyframes even-data-v-0c5f1f0a{0%{background:#fcf400}to{background:#fff}}\n\n/**小圆点 end*/.tui-content-out[data-v-0c5f1f0a]{position:absolute;height:%?150?%;width:%?168?%;background-color:#fcecec;border-radius:%?15?%;box-shadow:0 4px 0 #fcc8d0}\n\n/* 580 530  */.tui-award-1[data-v-0c5f1f0a]{left:%?24?%;top:%?24?%}.tui-award-2[data-v-0c5f1f0a]{left:%?206?%;top:%?24?%}.tui-award-3[data-v-0c5f1f0a]{left:%?388?%;top:%?24?%}.tui-award-4[data-v-0c5f1f0a]{left:%?388?%;top:%?188?%}.tui-award-5[data-v-0c5f1f0a]{left:%?388?%;top:%?352?%}.tui-award-6[data-v-0c5f1f0a]{left:%?206?%;top:%?352?%}.tui-award-7[data-v-0c5f1f0a]{left:%?24?%;top:%?352?%}.tui-award-8[data-v-0c5f1f0a]{left:%?24?%;top:%?188?%}\n\n/**居中 加粗*/.tui-btn-start[data-v-0c5f1f0a]{position:absolute;top:%?188?%;left:%?206?%;border-radius:%?15?%;height:%?150?%;width:%?168?%;background-color:#fc4034;box-shadow:0 4px 0 #fcc8d0;color:#fcf400;text-align:center;font-size:%?32?%;font-weight:700;line-height:%?150?%}.tui-ative[data-v-0c5f1f0a]{opacity:.6!important}.tui-award-image[data-v-0c5f1f0a]{position:absolute;margin:auto;top:0;left:0;bottom:0;right:0;height:%?134?%;width:%?134?%}.tui-awardSelect[data-v-0c5f1f0a]{background-color:#fcf400!important;box-shadow:0 4px 0 #f0d00c!important}",""])},e140:function(t,a,i){"use strict";i.r(a);var f=i("264c"),o=i("5e7b");for(var n in o)"default"!==n&&function(t){i.d(a,t,(function(){return o[t]}))}(n);i("2786");var e=i("2877"),d=Object(e["a"])(o["default"],f["a"],f["b"],!1,null,"0c5f1f0a",null);a["default"]=d.exports},f092:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,i("c5f6");var f={data:function(){return{circleList:24,awardList:[{img:"luck-1.png",name:".top域名 1元/年"},{img:"luck-2.png",name:"VPS 1元/30天"},{img:"luck-3.png",name:"免费主机1年"},{img:"luck-4.png",name:"虚拟主机1元/年"},{img:"luck-1.png",name:".top域名 1元/年"},{img:"luck-2.png",name:"VPS 1元/30天"},{img:"luck-3.png",name:"免费主机1年"},{img:"luck-4.png",name:"虚拟主机1元/年"}],indexSelect:0,isRunning:!1}},methods:{getRandom:function(t){var a=Math.random()>.5?"2":"1";t=t||3;for(var i=0;i<t;i++)a+=Math.floor(10*Math.random());return Number(a)},startDrawing:function(){var t=this;if(!this.isRunning){this.isRunning=!0;var a=0,i=0,f=this.getRandom(3),o=setInterval((function(){++a,a%=8,t.indexSelect=a,i+=40,i>f&&(clearInterval(o),o=null,uni.showModal({title:"恭喜您",content:"获得了奖品【"+t.awardList[a].name+"】",confirmColor:"#5677FC",showCancel:!1,success:function(a){a.confirm&&(t.isRunning=!1)}}))}),70+i)}}}};a.default=f}}]);