webpackJsonp([19],{586:function(e,t,o){function r(e){o(684)}var n=o(41)(o(641),o(712),r,null,null);e.exports=n.exports},616:function(e,t,o){"use strict";o.d(t,"a",function(){return s}),o.d(t,"d",function(){return c}),o.d(t,"b",function(){return u}),o.d(t,"c",function(){return d}),o.d(t,"e",function(){return m});var r=o(76),n=o.n(r),a=o(233),i=o.n(a),l=o(232),s=function(){return i.a.post(l.a+"/jade/notice/getNoticeList.action",{},{withCredentials:!0,headers:{"Content-Type":"application/json"}}).then(function(e){return n.a.resolve(e.data)},function(e){console.log(e)})},c=function(e){return i.a.post(l.a+"/jade/notice/browse.action",e,{withCredentials:!0,headers:{"Content-Type":"application/json"}}).then(function(e){return n.a.resolve(e.data)},function(e){console.log(e)})},u=function(e){return i.a.post(l.a+"/jade/notice/isONLine.action",e,{withCredentials:!0,headers:{"Content-Type":"application/json"}}).then(function(e){return n.a.resolve(e.data)},function(e){console.log(e)})},d=function(e){return i.a.post(l.a+"/jade/notice/delNotice.action",e,{withCredentials:!0,headers:{"Content-Type":"application/json"}}).then(function(e){return n.a.resolve(e.data)},function(e){console.log(e)})},m=function(e){return i.a.post(l.a+"/jade/notice/addNotice.action",e,{withCredentials:!0,headers:{"Content-Type":"application/json"}}).then(function(e){return n.a.resolve(e.data)},function(e){console.log(e)})}},641:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(76),n=o.n(r),a=o(616),i=o(232);t.default={data:function(){return{total:0,page:1,pageSize:10,fileList:[],uploadServer:i.b,options:[{value:"1",label:"首页轮播图"},{value:"2",label:"最新宝贝banner图"},{value:"3",label:"最热宝贝banner图"},{value:"4",label:"库管头条"}],ruleForm:{name:"",noticeCategoryId:"1",img:"",cid:"",firstNotice:"",secondNoice:""},uploadDate:{}}},methods:{handleCurrentChange:function(e){},handleRemove:function(e,t){this.ruleForm.img=""},handlePreview:function(e){},handleSuccess:function(e,t,o){this.ruleForm.img=e.result.key},addAction:function(){var e=this;this.listLoading=!0,this.valiDate().then(function(t){0===t&&o.i(a.e)(e.uploadDate).then(function(t){e.listLoading=!1,t.success?(e.$message({message:"添加成功",type:"success"}),e.$router.push("/notice/list")):(e.$message.error("添加失败"),e.$router.push("/notice/add"))})})},valiDate:function(){if("4"===this.ruleForm.noticeCategoryId)this.uploadDate={name:this.ruleForm.name,noticeCategoryId:this.ruleForm.noticeCategoryId,firstNotice:this.ruleForm.firstNotice,secondNoice:this.ruleForm.secondNoice};else{if(!this.ruleForm.img)return this.$message.error("先上传图片好不好"),!1;this.uploadDate={name:this.ruleForm.name,noticeCategoryId:this.ruleForm.noticeCategoryId,cid:this.ruleForm.cid,img:this.ruleForm.img}}return n.a.resolve(0)}}}},659:function(e,t,o){t=e.exports=o(566)(!0),t.push([e.i,".add{width:800px}.add .footer{text-align:center}","",{version:3,sources:["D:/github/jadeStatic/src/components/notice/add.vue"],names:[],mappings:"AACA,KACE,WAAa,CACd,AACD,aACE,iBAAmB,CACpB",file:"add.vue",sourcesContent:["\n.add {\n  width: 800px;\n}\n.add .footer {\n  text-align: center;\n}"],sourceRoot:""}])},684:function(e,t,o){var r=o(659);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);o(567)("3fa55214",r,!0,{})},712:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"add"},[o("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,"label-width":"120px"}},[o("el-form-item",{attrs:{label:"名称",prop:"name"}},[o("el-input",{attrs:{placeholder:"请输入公告名称","auto-complete":"off"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"类别"}},[o("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.noticeCategoryId,callback:function(t){e.$set(e.ruleForm,"noticeCategoryId",t)},expression:"ruleForm.noticeCategoryId"}},e._l(e.options,function(e){return o("el-option",{key:e.label,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),o("el-form-item",{directives:[{name:"show",rawName:"v-show",value:4!=e.ruleForm.noticeCategoryId,expression:"ruleForm.noticeCategoryId != 4"}],attrs:{label:"上传图片"}},[o("el-upload",{staticClass:"upload-demo",attrs:{action:e.uploadServer+"/jade/image/uploadImage.action","on-preview":e.handlePreview,"on-remove":e.handleRemove,"on-success":e.handleSuccess,"file-list":e.fileList,name:"image","list-type":"picture"}},[o("el-button",{directives:[{name:"show",rawName:"v-show",value:!this.ruleForm.img,expression:"!this.ruleForm.img"}],attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:!this.ruleForm.img,expression:"!this.ruleForm.img"}],staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])],1)],1),e._v(" "),o("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"4"===e.ruleForm.noticeCategoryId,expression:"ruleForm.noticeCategoryId === '4'"}],attrs:{label:"第一条公告",prop:"firstNotice"}},[o("el-input",{attrs:{placeholder:"请输入公告，限制字数100","auto-complete":"off"},model:{value:e.ruleForm.firstNotice,callback:function(t){e.$set(e.ruleForm,"firstNotice",t)},expression:"ruleForm.firstNotice"}})],1),e._v(" "),o("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"4"===e.ruleForm.noticeCategoryId,expression:"ruleForm.noticeCategoryId === '4'"}],attrs:{label:"第二条公告",prop:"secondNoice"}},[o("el-input",{attrs:{placeholder:"请输入公告，限制字数100","auto-complete":"off"},model:{value:e.ruleForm.secondNoice,callback:function(t){e.$set(e.ruleForm,"secondNoice",t)},expression:"ruleForm.secondNoice"}})],1),e._v(" "),o("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"4"!==e.ruleForm.noticeCategoryId,expression:"ruleForm.noticeCategoryId !== '4'"}],attrs:{label:"链接宝贝",prop:"cid"}},[o("el-input",{attrs:{placeholder:"请输入宝贝货号","auto-complete":"off"},model:{value:e.ruleForm.cid,callback:function(t){e.$set(e.ruleForm,"cid",t)},expression:"ruleForm.cid"}})],1)],1),e._v(" "),o("div",{staticClass:"footer"},[o("el-button",{attrs:{type:"primary"},nativeOn:{click:function(t){return e.addAction(t)}}},[e._v("提交")])],1),e._v(" "),o("el-row",{staticStyle:{"padding-bottom":"0px"},attrs:{gutter:24}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=19.eb724320fb2492f5234e.js.map