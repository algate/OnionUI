(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extend-view-actionsheet-actionsheet"],{"0c1c":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"tuiButton",props:{type:{type:String,default:"gradual"},size:{type:String,default:"block"},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},openType:{type:String,default:""},formType:{type:String,default:""},hidden:{type:Boolean,default:!1},bottom:{type:Boolean,default:!1}},methods:{handleClick:function(){if(this.disabled)return!1;this.$emit("click",{})},bindgetuserinfo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.detail,a=void 0===e?{}:e;this.$emit("getuserinfo",a)},getDisabledClass:function(t,e){var a="";return t&&"white"!=e&&"gray"!=e&&(a="gradual"==e?"btn-gradual-disabled":"tui-dark-disabled"),a},getShapeClass:function(t,e){var a="";return"circle"==t?a=e?"tui-outline-fillet":"tui-fillet":"rightAngle"==t&&(a=e?"tui-outline-rightAngle":"tui-rightAngle"),a},getHoverClass:function(t,e,a){var n="";return t||(n=a?"tui-outline-hover":"tui-"+(e||"gradual")+"-hover"),n}}};e.default=n},"1ec6":function(t,e,a){"use strict";a.r(e);var n=a("f368"),i=a("5c76");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("971c");var r=a("2877"),c=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,"8f02906e",null);e["default"]=c.exports},3054:function(t,e,a){"use strict";a.r(e);var n=a("dba3"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"39fe":function(t,e,a){var n=a("d352");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("8c8b4de6",n,!0,{sourceMap:!1,shadowMode:!1})},4123:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"tui-actionsheet-class tui-actionsheet",class:[t.show?"tui-actionsheet-show":""]},[t.tips?a("v-uni-view",{staticClass:"tui-tips",style:{fontSize:t.size+"rpx",color:t.color}},[t._v(t._s(t.tips))]):t._e(),a("v-uni-view",{class:[t.isCancel?"tui-operate-box":""]},[t._l(t.itemList,(function(e,n){return[a("v-uni-view",{key:n+"_0",staticClass:"tui-actionsheet-btn tui-actionsheet-divider",class:[t.isCancel||n!=t.itemList.length-1?"":"tui-btn-last"],style:{color:e.color||"#1a1a1a"},attrs:{"hover-class":"tui-actionsheet-hover","hover-stay-time":150,"data-index":n},on:{click:function(e){e=t.$handleEvent(e),t.handleClickItem(e)}}},[t._v(t._s(e.text))])]}))],2),t.isCancel?a("v-uni-view",{staticClass:"tui-actionsheet-btn tui-actionsheet-cancel",attrs:{"hover-class":"tui-actionsheet-hover","hover-stay-time":150},on:{click:function(e){e=t.$handleEvent(e),t.handleClickCancel(e)}}},[t._v("取消")]):t._e()],1),a("v-uni-view",{staticClass:"tui-actionsheet-mask",class:[t.show?"tui-mask-show":""],on:{click:function(e){e=t.$handleEvent(e),t.handleClickMask(e)}}})],1)},i=[];a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}))},"4ee5":function(t,e,a){"use strict";var n=a("a594"),i=a.n(n);i.a},"5c76":function(t,e,a){"use strict";a.r(e);var n=a("0c1c"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"5e05":function(t,e,a){e=t.exports=a("24fb")(!1),e.push([t.i,'.tui-actionsheet[data-v-5ca679dc]{width:100%;position:fixed;left:0;right:0;bottom:0;z-index:9999;visibility:hidden;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);-webkit-transform-origin:center;transform-origin:center;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;background:#eaeaec;min-height:%?100?%}.tui-actionsheet-show[data-v-5ca679dc]{-webkit-transform:translateZ(0);transform:translateZ(0);visibility:visible}.tui-tips[data-v-5ca679dc]{width:100%;padding:%?30?% %?60?%;box-sizing:border-box;text-align:center;background:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.tui-operate-box[data-v-5ca679dc]{padding-bottom:%?12?%}.tui-actionsheet-btn[data-v-5ca679dc]{width:100%;height:%?100?%;background:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;text-align:center;font-size:%?36?%;position:relative}.tui-btn-last[data-v-5ca679dc]{padding-bottom:env(safe-area-inset-bottom)}.tui-actionsheet-divider[data-v-5ca679dc]:before{content:"";width:100%;border-top:%?1?% solid #d9d9d9;position:absolute;top:0;left:0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.tui-actionsheet-cancel[data-v-5ca679dc]{color:#1a1a1a;padding-bottom:env(safe-area-inset-bottom)}.tui-actionsheet-hover[data-v-5ca679dc]{background:#f7f7f9}.tui-actionsheet-mask[data-v-5ca679dc]{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.6);z-index:9996;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;opacity:0;visibility:hidden}.tui-mask-show[data-v-5ca679dc]{opacity:1;visibility:visible}',""])},"971c":function(t,e,a){"use strict";var n=a("39fe"),i=a.n(n);i.a},a594:function(t,e,a){var n=a("5e05");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("969abfd8",n,!0,{sourceMap:!1,shadowMode:!1})},ab4d:function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("1ec6")),o=n(a("fd0e")),r={components:{tuiButton:i.default,tuiActionsheet:o.default},data:function(){return{showActionSheet:!1,maskClosable:!0,tips:"确认清空搜索历史吗？",itemList:[],color:"#9a9a9a",size:26,isCancel:!0}},methods:{closeActionSheet:function(){this.showActionSheet=!1},openActionSheet:function(t){var e=this,a=[{text:"确定",color:"#1a1a1a"}],n=!0,i="确认清空搜索历史吗？",o="#9a9a9a",r=26,c=!0;switch(t){case 1:break;case 2:i="退出登录会清除您的登录信息，确认退出吗？",a=[{text:"退出登录",color:"#e53a37"}];break;case 3:o="#e53a37",r=28;break;case 4:i="",a=[{text:"点赞",color:"#1a1a1a"},{text:"评论",color:"#1a1a1a"},{text:"收藏",color:"#1a1a1a"},{text:"分享",color:"#1a1a1a"}];break;case 5:c=!1,i="选择您的性别",a=[{text:"男",color:"#1a1a1a"},{text:"女",color:"#1a1a1a"},{text:"不公开",color:"#1a1a1a"}];break;case 6:n=!1;break;default:break}setTimeout((function(){e.showActionSheet=!0,e.itemList=a,e.maskClosable=n,e.tips=i,e.color=o,e.size=r,e.isCancel=c}),0)},itemClick:function(t){var e=t.index;this.closeActionSheet(),this.tui.toast("您点击的按钮索引为：".concat(e))}}};e.default=r},c325:function(t,e,a){"use strict";var n=a("f5a4"),i=a.n(n);i.a},c50a:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"header"},[a("v-uni-view",{staticClass:"title"},[t._v("ActionSheet")]),a("v-uni-view",{staticClass:"sub-title"},[t._v("操作菜单")])],1),a("v-uni-view",{staticClass:"tui-btn-box"},[a("tui-button",{attrs:{type:"white",shape:"circle"},on:{click:function(e){e=t.$handleEvent(e),t.openActionSheet(1)}}},[t._v("默认操作")]),a("tui-button",{attrs:{type:"white",shape:"circle"},on:{click:function(e){e=t.$handleEvent(e),t.openActionSheet(2)}}},[t._v("退出登录")]),a("tui-button",{attrs:{type:"white",shape:"circle"},on:{click:function(e){e=t.$handleEvent(e),t.openActionSheet(3)}}},[t._v("提示文本样式")]),a("tui-button",{attrs:{type:"white",shape:"circle"},on:{click:function(e){e=t.$handleEvent(e),t.openActionSheet(4)}}},[t._v("无提示操作")]),a("tui-button",{attrs:{type:"white",shape:"circle"},on:{click:function(e){e=t.$handleEvent(e),t.openActionSheet(5)}}},[t._v("无取消按钮")]),a("tui-button",{attrs:{type:"white",shape:"circle"},on:{click:function(e){e=t.$handleEvent(e),t.openActionSheet(6)}}},[t._v("Mask不可点击")])],1),a("tui-actionsheet",{attrs:{show:t.showActionSheet,tips:t.tips,"item-list":t.itemList,"mask-closable":t.maskClosable,color:t.color,size:t.size,"is-cancel":t.isCancel},on:{click:function(e){e=t.$handleEvent(e),t.itemClick(e)},cancel:function(e){e=t.$handleEvent(e),t.closeActionSheet(e)}}})],1)},i=[];a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}))},c7a0:function(t,e,a){"use strict";a.r(e);var n=a("ab4d"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},d352:function(t,e,a){e=t.exports=a("24fb")(!1),e.push([t.i,'\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* color start*/.tui-primary[data-v-8f02906e]{background:#5677fc!important;color:#fff}.tui-danger[data-v-8f02906e]{background:#eb0909!important;color:#fff}.tui-red[data-v-8f02906e]{background:#e41f19!important;color:#fff}.tui-warning[data-v-8f02906e]{background:#ff7900!important;color:#fff}.tui-green[data-v-8f02906e]{background:#19be6b!important;color:#fff}.tui-white[data-v-8f02906e]{background:#fff!important;color:#333!important}.tui-gray[data-v-8f02906e]{background:#ededed!important;color:#999!important}.tui-hover-gray[data-v-8f02906e]{background:#f7f7f9!important}\n\n/* color end*/\n\n/* button start*/.tui-btn[data-v-8f02906e]{width:100%;position:relative;border:0!important;border-radius:%?10?%;display:inline-block}.tui-btn[data-v-8f02906e]:after{content:"";position:absolute;width:200%;height:200%;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5);transform:scale(.5);-webkit-box-sizing:border-box;box-sizing:border-box;left:0;top:0;border-radius:%?20?%}.tui-btn-block[data-v-8f02906e]{font-size:%?36?%;height:%?90?%;line-height:%?90?%}.tui-white[data-v-8f02906e]:after{border:1px solid #eaeef1}.tui-white-hover[data-v-8f02906e]{background:#e5e5e5!important;color:#2e2e2e!important}.tui-dark-disabled[data-v-8f02906e]{opacity:.6!important;color:#fafbfc!important}.tui-outline-hover[data-v-8f02906e]{opacity:.5}.tui-primary-hover[data-v-8f02906e]{background:#4a67d6!important;color:#e5e5e5!important}.tui-primary-outline[data-v-8f02906e]:after{border:1px solid #5677fc!important}.tui-primary-outline[data-v-8f02906e]{color:#5677fc!important;background:none}.tui-danger-hover[data-v-8f02906e]{background:#c80808!important;color:#e5e5e5!important}.tui-danger-outline[data-v-8f02906e]{color:#eb0909!important;background:none}.tui-danger-outline[data-v-8f02906e]:after{border:1px solid #eb0909!important}.tui-red-hover[data-v-8f02906e]{background:#c51a15!important;color:#e5e5e5!important}.tui-red-outline[data-v-8f02906e]{color:#e41f19!important;background:none}.tui-red-outline[data-v-8f02906e]:after{border:1px solid #e41f19!important}.tui-warning-hover[data-v-8f02906e]{background:#e56d00!important;color:#e5e5e5!important}.tui-warning-outline[data-v-8f02906e]{color:#ff7900!important;background:none}.tui-warning-outline[data-v-8f02906e]:after{border:1px solid #ff7900!important}.tui-green-hover[data-v-8f02906e]{background:#16ab60!important;color:#e5e5e5!important}.tui-green-outline[data-v-8f02906e]{color:#44cf85!important;background:none}.tui-green-outline[data-v-8f02906e]:after{border:1px solid #44cf85!important}.tui-gray-hover[data-v-8f02906e]{background:#d5d5d5!important;color:#898989}.tui-gray-outline[data-v-8f02906e]{color:#999!important;background:none!important}.tui-white-outline[data-v-8f02906e]{color:#fff!important;background:none!important}.tui-gray-outline[data-v-8f02906e]:after{border:1px solid #ccc!important}.tui-white-outline[data-v-8f02906e]:after{border:1px solid #fff!important}\n\n/*圆角 */.tui-fillet[data-v-8f02906e]{border-radius:%?45?%}.tui-white.tui-fillet[data-v-8f02906e]:after{border-radius:%?90?%}.tui-outline-fillet[data-v-8f02906e]:after{border-radius:%?90?%}\n\n/*平角*/.tui-rightAngle[data-v-8f02906e]{border-radius:0}.tui-white.tui-rightAngle[data-v-8f02906e]:after{border-radius:0}.tui-outline-rightAngle[data-v-8f02906e]:after{border-radius:0}\n\n/*渐变 */.tui-gradual[data-v-8f02906e]{background:-webkit-linear-gradient(right,#5677fc,#5c8dff);background:linear-gradient(-90deg,#5677fc,#5c8dff);border-radius:%?45?%;color:#fff}.tui-gradual-hover[data-v-8f02906e]{color:#d5d4d9!important;background:-webkit-linear-gradient(right,#4a67d6,#4e77d9);background:linear-gradient(-90deg,#4a67d6,#4e77d9)}.btn-gradual-disabled[data-v-8f02906e]{color:#fafbfc!important;border-radius:%?45?%;background:-webkit-linear-gradient(right,#cad8fb,#c9d3fb);background:linear-gradient(-90deg,#cad8fb,#c9d3fb)}\n\n/*不同尺寸 */.tui-btn-mini[data-v-8f02906e]{width:auto;font-size:%?30?%;height:%?70?%;line-height:%?70?%}.tui-btn-small[data-v-8f02906e]{width:auto;font-size:%?30?%;height:%?60?%;line-height:%?60?%}\n\n/* button end*/',""])},d79e:function(t,e,a){"use strict";a.r(e);var n=a("c50a"),i=a("c7a0");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("c325");var r=a("2877"),c=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,"7ac3d820",null);e["default"]=c.exports},dba3:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("c5f6");var n={name:"tuiActionsheet",props:{maskClosable:{type:Boolean,default:!0},show:{type:Boolean,default:!1},itemList:{type:Array,default:function(){return[{text:"确定",color:"#1a1a1a"}]}},tips:{type:String,default:""},color:{type:String,default:"#9a9a9a"},size:{type:Number,default:26},isCancel:{type:Boolean,default:!0}},methods:{handleClickMask:function(){this.maskClosable&&this.handleClickCancel()},handleClickItem:function(t){if(this.show){var e=t.currentTarget.dataset;this.$emit("click",{index:e.index})}},handleClickCancel:function(){this.$emit("cancel")}}};e.default=n},dc9c:function(t,e,a){e=t.exports=a("24fb")(!1),e.push([t.i,".container[data-v-7ac3d820]{padding:%?20?% 0 %?120?% 0;box-sizing:border-box}.header[data-v-7ac3d820]{padding:%?80?% %?90?% %?60?% %?90?%;box-sizing:border-box}.title[data-v-7ac3d820]{font-size:%?34?%;color:#333;font-weight:500}.sub-title[data-v-7ac3d820]{font-size:%?24?%;color:#7a7a7a;padding-top:%?18?%}.tui-btn-box[data-v-7ac3d820]{padding:%?10?% %?40?%;box-sizing:border-box}.tui-btn-class[data-v-7ac3d820]{margin-top:%?36?%}.tui-keyboard-tips[data-v-7ac3d820]{width:100%;height:%?120?%;line-height:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?30?%;background:#fff;position:relative;color:#333;border:0}.tui-digital-box[data-v-7ac3d820]{background:#fff;padding-bottom:%?50?%;border:0}",""])},f368:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.hidden?t._e():a("v-uni-button",{staticClass:"tui-btn-class tui-btn",class:["tui-btn-"+t.size,t.plain?"tui-"+t.type+"-outline":"tui-"+(t.type||"gradual"),t.getDisabledClass(t.disabled,t.type),t.getShapeClass(t.shape,t.plain)],attrs:{"hover-class":t.getHoverClass(t.disabled,t.type,t.plain),loading:t.loading,disabled:t.disabled,"open-type":t.openType,"form-type":t.formType},on:{getuserinfo:function(e){e=t.$handleEvent(e),t.bindgetuserinfo(e)},click:function(e){e=t.$handleEvent(e),t.handleClick(e)}}},[t._t("default")],2)},i=[];a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}))},f5a4:function(t,e,a){var n=a("dc9c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("5de73e9f",n,!0,{sourceMap:!1,shadowMode:!1})},fd0e:function(t,e,a){"use strict";a.r(e);var n=a("4123"),i=a("3054");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("4ee5");var r=a("2877"),c=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,"5ca679dc",null);e["default"]=c.exports}}]);