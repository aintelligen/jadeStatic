webpackJsonp([17],{572:function(e,t,s){function n(e){s(683)}var r=s(41)(s(627),s(711),n,null,null);e.exports=r.exports},597:function(e,t,s){e.exports={default:s(598),__esModule:!0}},598:function(e,t,s){var n=s(29),r=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return r.stringify.apply(r,arguments)}},603:function(e,t,s){"use strict";s.d(t,"h",function(){return l}),s.d(t,"i",function(){return u}),s.d(t,"n",function(){return c}),s.d(t,"k",function(){return d}),s.d(t,"l",function(){return m}),s.d(t,"m",function(){return p}),s.d(t,"j",function(){return g}),s.d(t,"s",function(){return f}),s.d(t,"p",function(){return h}),s.d(t,"b",function(){return b}),s.d(t,"g",function(){return v}),s.d(t,"d",function(){return F}),s.d(t,"a",function(){return A}),s.d(t,"e",function(){return U}),s.d(t,"c",function(){return y}),s.d(t,"f",function(){return w}),s.d(t,"o",function(){return _}),s.d(t,"q",function(){return x}),s.d(t,"r",function(){return C});var n=s(76),r=s.n(n),a=s(233),o=s.n(a),i=s(232),l=function(){return o.a.post(i.a+"/jade/agent/selectAgent.action",{},{withCredentials:!0,headers:{"Content-Type":"application/json"}}).then(function(e){return r.a.resolve(e.data)},function(e){console.log(e)})},u=function(e){return o.a.post(i.a+"/jade/agent/getAgentBySid.action",e,{withCredentials:!0,headers:{"Content-Type":"application/json"}}).then(function(e){return r.a.resolve(e.data)},function(e){console.log(e)})},c=function(e){return o.a.post(i.a+"/jade/agent/setUserNumber.action",e,{withCredentials:!0,headers:{"Content-Type":"application/json"}}).then(function(e){return r.a.resolve(e.data)},function(e){console.log(e)})},d=function(e){return o.a.post(i.a+"/jade/agent/cancelAgent.action",e,{withCredentials:!0,headers:{"Content-Type":"application/json"}}).then(function(e){return r.a.resolve(e.data)},function(e){console.log(e)})},m=function(e){return o.a.post(i.a+"/jade/agent/activationAgent.action",e,{withCredentials:!0,headers:{"Content-Type":"application/json"}}).then(function(e){return r.a.resolve(e.data)},function(e){console.log(e)})},p=function(e){return o.a.post(i.a+"/jade/agent/delAgent.action",e,{withCredentials:!0,headers:{"Content-Type":"application/json"}}).then(function(e){return r.a.resolve(e.data)},function(e){console.log(e)})},g=function(e){return o.a.post(i.a+"/jade/agent/getUserMessage.action",e,{withCredentials:!0,headers:{"Content-Type":"application/json"}}).then(function(e){return r.a.resolve(e.data)},function(e){console.log(e)})},f=function(e){return o.a.post(i.a+"/jade/agent/addAgent.action",e,{withCredentials:!0,headers:{"Content-Type":"application/json"}}).then(function(e){return r.a.resolve(e.data)},function(e){console.log(e)})},h=function(e){return o.a.post(i.a+"/jade/agent/updateAgent.action",e,{withCredentials:!0,headers:{"Content-Type":"application/json"}}).then(function(e){return r.a.resolve(e.data)},function(e){console.log(e)})},b=function(e){return o.a.post(i.a+"/jade/authority/getAllAuthority.action",e,{withCredentials:!0,headers:{"Content-Type":"application/json"}}).then(function(e){return r.a.resolve(e.data)},function(e){console.log(e)})},v=function(e){return o.a.post(i.a+"/jade/authority/addRole.action",e,{withCredentials:!0,headers:{"Content-Type":"application/json"}}).then(function(e){return r.a.resolve(e.data)},function(e){console.log(e)})},F=function(e){return o.a.post(i.a+"/jade/authority/updateRole.action",e,{withCredentials:!0,headers:{"Content-Type":"application/json"}}).then(function(e){return r.a.resolve(e.data)},function(e){console.log(e)})},A=function(e){return o.a.post(i.a+"/jade/authority/getRoleList.action",e,{withCredentials:!0,headers:{"Content-Type":"application/json"}}).then(function(e){return r.a.resolve(e.data)},function(e){console.log(e)})},U=function(e){return o.a.post(i.a+"/jade/authority/delRole.action",e,{withCredentials:!0,headers:{"Content-Type":"application/json"}}).then(function(e){return r.a.resolve(e.data)},function(e){console.log(e)})},y=function(e){return o.a.post(i.a+"/jade/authority/getRoleAuthority.action",e,{withCredentials:!0,headers:{"Content-Type":"application/json"}}).then(function(e){return r.a.resolve(e.data)},function(e){console.log(e)})},w=function(e){return o.a.post(i.a+"/jade/authority/authorityOfDistribution.action",e,{withCredentials:!0,headers:{"Content-Type":"application/json"}}).then(function(e){return r.a.resolve(e.data)},function(e){console.log(e)})},_=function(e){return o.a.post(i.a+"/jade/agent/addAgentAccount.action",e,{withCredentials:!0,headers:{"Content-Type":"application/json"}}).then(function(e){return r.a.resolve(e.data)},function(e){console.log(e)})},x=function(e){return o.a.post(i.a+"/jade/authority/DelUser.action",e,{withCredentials:!0,headers:{"Content-Type":"application/json"}}).then(function(e){return r.a.resolve(e.data)},function(e){console.log(e)})},C=function(e){return o.a.post(i.a+"/jade/authority/addUser.action",e,{withCredentials:!0,headers:{"Content-Type":"application/json"}}).then(function(e){return r.a.resolve(e.data)},function(e){console.log(e)})}},627:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(149),r=s.n(n),a=s(597),o=s.n(a),i=s(603);t.default={data:function(){return{filters:{name:""},totalData:[],agents:[],roles:sessionStorage.getItem("rules"),topics:[],total:0,page:1,pageSize:5,agentsTotalData:[],agentsSubUser:[],agentTotal:0,agentPage:1,agentPageSize:5,options:[{value:"0",label:"管理员"},{value:"1",label:"代理账号"},{value:"3",label:"普通用户"}],listLoading:!1,showFormVisible:!1,showLoading:!1,userNumber:0,haveNumber:0,showForm:{cColor:"",rAddress:"",cName:"",rName:"",rTelephone:"",cPrice:"",rCity:"",cSize:"",cImg:""},editFormVisible:!1,editLoading:!1,editRuleForm:{sname:"",principal:"",telephone:"",ID_number:""},editRules:{sname:[{required:!0,message:"请输入负责人",trigger:"blur"}],principal:[{required:!0,message:"请输入代理商",trigger:"blur"}],telephone:[{required:!0,message:"请输入手机号码",trigger:"blur"}],ID_number:[{required:!0,message:"请输入身份证",trigger:"blur"}]},setFormVisible:!1,setRuleForm:{userNumber:""},setRules:{userNumber:[{required:!0,message:"请输入用户数",trigger:"blur"}]},userVisible:!1,userData:[],addAgentUserFormVisible:!1,addAgentUserForm:{userAccount:"",userPass:""},addAgentUserRules:{userAccount:[{required:!0,message:"请输入账号",trigger:"blur"}],userPass:[{required:!0,message:"请输入密码",trigger:"blur"}]},editAgentUserFormVisible:!1,editAgentUserForm:{account:"",password:""},editAgentUserRules:{account:[{required:!0,message:"请输入账号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},addUserFormVisible:!1,addUserForm:{userAccount:"",userName:"",userPass:""},addUserFormRules:{userAccount:[{required:!0,message:"请输入账号",trigger:"blur"}],userName:[{required:!0,message:"请输入姓名",trigger:"blur"}],userPass:[{required:!0,message:"请输入密码",trigger:"blur"}]},editUserFormVisible:!1,editUserForm:{userAccount:"",userName:"",userPass:""},editUserFormRules:{userAccount:[{required:!0,message:"请输入账号",trigger:"blur"}],userName:[{required:!0,message:"请输入姓名",trigger:"blur"}],userPass:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{getTopics:function(){var e=this;this.listLoading=!0,s.i(i.h)().then(function(t){t.success?e.setTopics(t.result.data):e.$confirm(t.result.error,"提示",{type:"warning"}).then(function(){}),e.listLoading=!1})},setTopics:function(e){this.totalData=e,this.total=Math.ceil(this.totalData.length/10),this.topics=e.slice(this.page-1,10)},setAgentTopics:function(e){this.agentsTotalData=e,this.agentTotal=Math.ceil(this.agentsTotalData.length/this.agentPageSize),this.agentsSubUser=e.slice(0,this.agentPageSize)},filterData:function(){var e=this,t=[];s.i(i.h)().then(function(s){if(s.success){if(e.setTopics(s.result.data),!e.filters.name)return;e.totalData.map(function(s,n){for(var r in s)if(t.indexOf(r)<0){var a=s[r]+"";if(a.indexOf(e.filters.name)>=0){t.push(s);break}}}),e.setTopics(t)}})},handleCurrentChange:function(e){this.page=e;for(var t=[],s=10*(e-1);s<10*e;s++)this.totalData[s]&&t.push(this.totalData[s]);this.topics=t},agentHandleCurrentChange:function(e){this.agentPage=e;for(var t=[],s=(e-1)*this.agentPageSize;s<this.agentPageSize*e;s++)this.agentsTotalData[s]&&t.push(this.agentsTotalData[s]);this.agentsSubUser=t},handleEdit:function(e){var t=this;sessionStorage.setItem("sub_sid",e.sid);var n=o()({sid:e.sid});s.i(i.i)(n).then(function(s){s.success?t.agentsTotalData=s.result.data.slice(1):t.agentsTotalData=[],t.setAgentTopics(t.agentsTotalData),r()(t.editRuleForm,e),t.addAgentUserForm={userAccount:"",userPass:""},t.editFormVisible=!0})},handleUser:function(e){var t=this;sessionStorage.setItem("sub_sid",e.sid),this.listLoading=!0;var n=o()({sid:e.sid});this.userNumber=e.userNumber,this.haveNumber=e.haveNumber,s.i(i.j)(n).then(function(e){t.userData=e.result.data,t.userVisible=!0,t.listLoading=!1})},handleCancel:function(e){var t=this;this.$confirm("确认注销吗?","提示",{type:"warning"}).then(function(){t.listLoading=!0;var n={sid:e};s.i(i.k)(n).then(function(e){t.listLoading=!1,e.success?t.$message({message:e.result.Agent,type:"success"}):t.$message.error("注销失败"),t.getTopics()})}).catch(function(){})},handleActive:function(e){var t=this;this.listLoading=!0;var n={sid:e};s.i(i.l)(n).then(function(e){t.listLoading=!1,e.success?t.$message({message:e.result.Agent,type:"success"}):t.$message.error("激活失败"),t.getTopics()})},handleDel:function(e){var t=this;this.$confirm("确认删除吗?","提示",{type:"warning"}).then(function(){t.listLoading=!0;var n={sid:e};s.i(i.m)(n).then(function(e){t.listLoading=!1,e.success?t.$message({message:e.result.Agent,type:"success"}):t.$message.error("注销失败"),t.getTopics()})}).catch(function(){})},handelShow:function(e){sessionStorage.setItem("sub_sid",e),this.setFormVisible=!0},addUserNumAction:function(){var e=this,t={sid:sessionStorage.getItem("sub_sid"),userNumber:this.setRuleForm.userNumber};s.i(i.n)(t).then(function(t){e.setRuleForm.userNumber="",t.success?(e.$message({message:t.result.Agent,type:"success"}),e.getTopics()):e.$message.error("修改失败")}),this.setFormVisible=!1},addAgentUserAction:function(){var e=this,t={sid:sessionStorage.getItem("sub_sid"),account:this.addAgentUserForm.userAccount,password:this.addAgentUserForm.userPass};s.i(i.o)(t).then(function(t){e.setRuleForm.userNumber="",t.success?(e.$message({message:t.result.data,type:"success"}),e.addAgentUserFormVisible=!1,e.editFormVisible=!1):e.$message.error("添加失败")}),this.setFormVisible=!1},handleUpdate:function(){var e=this;this.$confirm("确认修改吗?","提示",{type:"warning"}).then(function(){e.listLoading=!0;var t=e.editRuleForm;s.i(i.p)(t).then(function(t){e.listLoading=!1,t.success?e.$message({message:t.result.Agent,type:"success"}):e.$message.error("修改失败"),e.editFormVisible=!1,e.getTopics()})}).catch(function(){})},handlePermance:function(e){sessionStorage.setItem("sub_sid",e),this.$router.push("/agent/"+e)},addAgentUser:function(){this.addAgentUserFormVisible=!0},editAgentUser:function(e){r()(this.editAgentUserForm,e),this.editAgentUserFormVisible=!0},editAgentUserAction:function(){var e=this,t=r()({sid:sessionStorage.getItem("sub_sid")},this.editAgentUserForm);s.i(i.n)(t).then(function(t){e.setRuleForm.userNumber="",t.success?e.$message({message:t.result.Agent,type:"success"}):e.$message.error("修改失败")}),this.editAgentUserFormVisible=!1,this.editFormVisible=!1},delAgentUserAction:function(e){var t=this;this.$confirm("确定删除吗","提示",{type:"warning"}).then(function(){var n=r()({account:e.account});n=o()(n),s.i(i.q)(n).then(function(e){t.setRuleForm.userNumber="",e.success?(t.$message({message:"删除成功",type:"success"}),t.editAgentUserFormVisible=!1,t.editFormVisible=!1):t.$message.error("删除失败")})})},handleAddSecond:function(){this.addUserFormVisible=!0},addUserAction:function(){var e=this;this.$refs.addUserForm.validate(function(t){if(t){e.listLoading=!0;var n=o()({account:e.addUserForm.userAccount,name:e.addUserForm.userName,roleId:sessionStorage.getItem("sub_sid"),password:e.addUserForm.userPass});console.log(n),s.i(i.r)(n).then(function(t){e.listLoading=!1,t.success?(e.$message({message:"添加成功",type:"success"}),e.addUserFormVisible=!1):e.$message.error(t.result.error),e.userVisible=!1,e.addUserForm={userAccount:"",userPass:""},e.getTopics()})}})},handleEditSecond:function(){this.addUserFormVisible=!0},editUserAction:function(){var e=this;this.$refs.addUserForm.validate(function(t){if(t){e.listLoading=!0;var n=o()({account:e.addUserForm.userAccount,name:e.addUserForm.userName,roleId:sessionStorage.getItem("sub_sid"),password:e.addUserForm.userPass});s.i(i.r)(n).then(function(t){e.listLoading=!1,t.success?e.$message({message:"添加成功",type:"success"}):e.$message.error("添加失败"),e.userVisible=!1,e.addUserForm={userAccount:"",userPass:""},e.getTopics()})}})},handleDelSecond:function(e){var t=this;this.$confirm("确认注销吗?","提示",{type:"warning"}).then(function(){t.listLoading=!0;var n={sid:e};s.i(i.k)(n).then(function(e){t.listLoading=!1,e.success?t.$message({message:e.result.Agent,type:"success"}):t.$message.error("注销失败"),t.getTopics()})}).catch(function(){})}},mounted:function(){this.getTopics()}}},658:function(e,t,s){t=e.exports=s(566)(!0),t.push([e.i,".line{border-bottom:1px solid #ccc;margin-bottom:12px}","",{version:3,sources:["D:/github/jadeStatic/src/components/agent/list.vue"],names:[],mappings:"AACA,MACE,6BAA8B,AAC9B,kBAAoB,CACrB",file:"list.vue",sourcesContent:["\n.line {\n  border-bottom: 1px solid #ccc;\n  margin-bottom: 12px;\n}"],sourceRoot:""}])},683:function(e,t,s){var n=s(658);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);s(567)("676675db",n,!0,{})},711:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[s("el-form",{attrs:{inline:!0,model:e.filters}},[s("el-form-item",[s("el-input",{attrs:{placeholder:"搜索"},model:{value:e.filters.name,callback:function(t){e.$set(e.filters,"name",t)},expression:"filters.name"}})],1),e._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:e.filterData}},[e._v("查询")])],1)],1)],1),e._v(" "),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.topics,"highlight-current-row":""}},[s("el-table-column",{attrs:{prop:"sid",label:"ID",align:"center",width:"230"}}),e._v(" "),s("el-table-column",{attrs:{prop:"principal",label:"代理商名称",align:"center",width:"230"}}),e._v(" "),s("el-table-column",{attrs:{prop:"sname",label:"负责人",align:"center",width:"140"}}),e._v(" "),s("el-table-column",{attrs:{prop:"telephone",label:"电话",align:"center",width:"140"}}),e._v(" "),s("el-table-column",{attrs:{prop:"ID_number",label:"身份证",align:"center",width:"200"}}),e._v(" "),s("el-table-column",{attrs:{label:"可分配用户数量",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("a",{directives:[{name:"show",rawName:"v-show",value:e.roles.indexOf("01070101")>=0,expression:"roles.indexOf('01070101') >=0"}],attrs:{href:"javascript:void(0)"},on:{click:function(s){e.handelShow(t.row.sid)}}},[e._v("设置")])]}}])}),e._v(" "),s("el-table-column",{attrs:{label:"操作",align:"center","min-width":"280"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{directives:[{name:"show",rawName:"v-show",value:e.roles.indexOf("01070102")>=0,expression:"roles.indexOf('01070102') >=0"}],attrs:{type:"info",size:"small"},on:{click:function(s){e.handleUser(t.row)}}},[e._v("\n          用户\n        ")]),e._v(" "),s("el-button",{directives:[{name:"show",rawName:"v-show",value:e.roles.indexOf("01070103")>=0,expression:"roles.indexOf('01070103') >=0"}],attrs:{type:"success",size:"small"},on:{click:function(s){e.handleEdit(t.row)}}},[e._v("\n          修改\n        ")]),e._v(" "),s("el-button",{directives:[{name:"show",rawName:"v-show",value:e.roles.indexOf("01070104")>=0&&0==t.row.aCancel,expression:"roles.indexOf('01070104') >=0 && scope.row.aCancel == 0"}],attrs:{type:"warning",size:"small"},on:{click:function(s){e.handleActive(t.row.sid)}}},[e._v("激活\n        ")]),e._v(" "),s("el-button",{directives:[{name:"show",rawName:"v-show",value:e.roles.indexOf("01070104")>=0&&1==t.row.aCancel,expression:"roles.indexOf('01070104') >=0 && scope.row.aCancel == 1"}],attrs:{type:"warning",size:"small"},on:{click:function(s){e.handleCancel(t.row.sid)}}},[e._v("注销\n        ")]),e._v(" "),s("el-button",{directives:[{name:"show",rawName:"v-show",value:e.roles.indexOf("01070104")>=0&&0==t.row.aCancel,expression:"roles.indexOf('01070104') >=0 && scope.row.aCancel == 0"}],attrs:{type:"warning",size:"small"},on:{click:function(s){e.handleDel(t.row.sid)}}},[e._v("删除\n        ")]),e._v(" "),s("el-button",{directives:[{name:"show",rawName:"v-show",value:e.roles.indexOf("01070105")>=0,expression:"roles.indexOf('01070105') >=0"}],attrs:{type:"danger",size:"small"},on:{click:function(s){e.handlePermance(t.row.sid)}}},[e._v("业绩\n        ")])]}}])})],1),e._v(" "),s("el-col",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],staticClass:"toolbar",attrs:{span:24}},[s("el-pagination",{staticStyle:{float:"right"},attrs:{layout:"prev, pager, next","page-size":e.pageSize,total:e.total*e.pageSize},on:{"current-change":e.handleCurrentChange}})],1),e._v(" "),s("el-dialog",{attrs:{title:"修改","close-on-click-modal":!1},model:{value:e.editFormVisible,callback:function(t){e.editFormVisible=t},expression:"editFormVisible"}},[s("el-form",{ref:"editRuleForm",attrs:{model:e.editRuleForm,inline:!0,"label-width":"120px",rules:e.editRules}},[s("el-form-item",{attrs:{label:"代理商名称：",prop:"principal"}},[s("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editRuleForm.principal,callback:function(t){e.$set(e.editRuleForm,"principal",t)},expression:"editRuleForm.principal"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"负责人：",prop:"sname"}},[s("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editRuleForm.sname,callback:function(t){e.$set(e.editRuleForm,"sname",t)},expression:"editRuleForm.sname"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"负责人电话：",prop:"telephone"}},[s("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editRuleForm.telephone,callback:function(t){e.$set(e.editRuleForm,"telephone",t)},expression:"editRuleForm.telephone"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"身份证号码：",prop:"ID_number"}},[s("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editRuleForm.ID_number,callback:function(t){e.$set(e.editRuleForm,"ID_number",t)},expression:"editRuleForm.ID_number"}})],1),e._v(" "),s("div",{staticClass:"line"}),e._v(" "),s("el-row",{staticStyle:{"padding-bottom":"0px"},attrs:{gutter:24}},[s("el-col",{attrs:{span:6}},[s("h3",{staticStyle:{"font-size":"16px","margin-bottom":"20px"}},[e._v("代理商管理账号\n            "),s("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){return t.stopPropagation(),e.addAgentUser(t)}}},[e._v("添加")])],1)]),e._v(" "),s("el-col",{attrs:{span:24}},[s("el-table",{staticClass:"editTable",staticStyle:{width:"100%"},attrs:{data:e.agentsSubUser}},[s("el-table-column",{attrs:{prop:"account",label:"账号",width:"180",align:"center"}}),e._v(" "),s("el-table-column",{attrs:{prop:"password",label:"密码",width:"180",align:"center"}}),e._v(" "),s("el-table-column",{attrs:{prop:"createTime",label:"添加时间",align:"center"}}),e._v(" "),s("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{attrs:{size:"small"},on:{click:function(s){e.editAgentUser(t.row)}}},[e._v("编辑\n                ")]),e._v(" "),s("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(s){e.delAgentUserAction(t.row)}}},[e._v("删除\n                ")])]}}])})],1)],1),e._v(" "),s("el-col",{staticClass:"toolbar",attrs:{span:24}},[s("el-pagination",{staticStyle:{float:"right"},attrs:{layout:"prev, pager, next","page-size":e.agentPageSize,total:e.agentTotal*e.agentPageSize},on:{"current-change":e.agentHandleCurrentChange}})],1),e._v(" "),s("el-col",{staticStyle:{padding:"10px"},attrs:{span:24,align:"center"}},[s("el-button",{attrs:{type:"success"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.handleUpdate(t)}}},[e._v("提交")])],1)],1)],1)],1),e._v(" "),s("el-dialog",{attrs:{title:"设置",size:"tiny","close-on-click-modal":!1},model:{value:e.setFormVisible,callback:function(t){e.setFormVisible=t},expression:"setFormVisible"}},[s("el-form",{ref:"setRules",attrs:{model:e.setRuleForm,inline:!0,"label-width":"120px",rules:e.setRules}},[s("el-form-item",{attrs:{label:"用户数：",prop:"userNumber"}},[s("el-input",{attrs:{type:"number","auto-complete":"off"},model:{value:e.setRuleForm.userNumber,callback:function(t){e.$set(e.setRuleForm,"userNumber",t)},expression:"setRuleForm.userNumber"}})],1)],1),e._v(" "),s("div",{staticStyle:{"text-align":"center"}},[s("el-button",{attrs:{type:"primary"},nativeOn:{click:function(t){return e.addUserNumAction(t)}}},[e._v("提交")])],1)],1),e._v(" "),s("el-dialog",{attrs:{title:"用户 可分配数量"+e.userNumber+" 已经分配数量"+e.haveNumber,visible:e.userVisible},on:{"update:visible":function(t){e.userVisible=t}}},[s("el-table",{attrs:{data:e.userData}},[s("el-table-column",{attrs:{property:"account",label:"账号"}}),e._v(" "),s("el-table-column",{attrs:{property:"password",label:"密码"}}),e._v(" "),s("el-table-column",{attrs:{property:"createTime",label:"添加时间"}}),e._v(" "),s("el-table-column",{attrs:{property:"telephone",label:"电话"}}),e._v(" "),s("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(s){e.handleEditSecond(t.row.sid)}}},[e._v("修改")]),e._v(" "),s("el-button",{attrs:{size:"small",type:"warning"},on:{click:function(s){e.handleDelSecond(t.row.sid)}}},[e._v("注销")])]}}])})],1)],1),e._v(" "),s("el-dialog",{attrs:{title:"新增用户",size:"tiny","close-on-click-modal":!1},model:{value:e.addUserFormVisible,callback:function(t){e.addUserFormVisible=t},expression:"addUserFormVisible"}},[s("el-form",{ref:"addUserForm",attrs:{model:e.addUserForm,rules:e.addUserFormRules}},[s("el-form-item",{attrs:{label:"账号：",prop:"userAccount"}},[s("el-input",{attrs:{"auto-complete":"off"},model:{value:e.addUserForm.userAccount,callback:function(t){e.$set(e.addUserForm,"userAccount",t)},expression:"addUserForm.userAccount"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"姓名：",prop:"userName"}},[s("el-input",{attrs:{"auto-complete":"off"},model:{value:e.addUserForm.userName,callback:function(t){e.$set(e.addUserForm,"userName",t)},expression:"addUserForm.userName"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"密码：",prop:"userPass"}},[s("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.addUserForm.userPass,callback:function(t){e.$set(e.addUserForm,"userPass",t)},expression:"addUserForm.userPass"}})],1)],1),e._v(" "),s("div",{staticStyle:{"text-align":"center"}},[s("el-button",{attrs:{type:"primary"},nativeOn:{click:function(t){return e.addUserAction(t)}}},[e._v("提交")])],1)],1),e._v(" "),s("el-dialog",{attrs:{title:"修改用户",size:"tiny","close-on-click-modal":!1},model:{value:e.editUserFormVisible,callback:function(t){e.editUserFormVisible=t},expression:"editUserFormVisible"}},[s("el-form",{ref:"editUserForm",attrs:{model:e.editUserForm,rules:e.editUserFormRules}},[s("el-form-item",{attrs:{label:"账号：",prop:"userAccount"}},[s("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editUserForm.userAccount,callback:function(t){e.$set(e.editUserForm,"userAccount",t)},expression:"editUserForm.userAccount"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"姓名：",prop:"userName"}},[s("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editUserForm.userName,callback:function(t){e.$set(e.editUserForm,"userName",t)},expression:"editUserForm.userName"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"密码：",prop:"userPass"}},[s("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.editUserForm.userPass,callback:function(t){e.$set(e.editUserForm,"userPass",t)},expression:"editUserForm.userPass"}})],1)],1),e._v(" "),s("div",{staticStyle:{"text-align":"center"}},[s("el-button",{attrs:{type:"primary"},nativeOn:{click:function(t){return e.editUserAction(t)}}},[e._v("提交")])],1)],1),e._v(" "),s("el-dialog",{attrs:{title:"添加",size:"tiny","close-on-click-modal":!1},model:{value:e.addAgentUserFormVisible,callback:function(t){e.addAgentUserFormVisible=t},expression:"addAgentUserFormVisible"}},[s("el-form",{ref:"addAgentUserForm",attrs:{model:e.addAgentUserForm,inline:!0,"label-width":"120px",rules:e.addAgentUserRules}},[s("el-form-item",{attrs:{label:"账号：",prop:"userAccount"}},[s("el-input",{attrs:{"auto-complete":"off"},model:{value:e.addAgentUserForm.userAccount,callback:function(t){e.$set(e.addAgentUserForm,"userAccount",t)},expression:"addAgentUserForm.userAccount"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"密码：",prop:"userPass"}},[s("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.addAgentUserForm.userPass,callback:function(t){e.$set(e.addAgentUserForm,"userPass",t)},expression:"addAgentUserForm.userPass"}})],1)],1),e._v(" "),s("div",{staticStyle:{"text-align":"center"}},[s("el-button",{attrs:{type:"primary"},nativeOn:{click:function(t){return e.addAgentUserAction(t)}}},[e._v("提交")])],1)],1),e._v(" "),s("el-dialog",{attrs:{title:"修改",size:"tiny","close-on-click-modal":!1},model:{value:e.editAgentUserFormVisible,callback:function(t){e.editAgentUserFormVisible=t},expression:"editAgentUserFormVisible"}},[s("el-form",{ref:"addAgentUserForm",attrs:{model:e.editAgentUserForm,inline:!0,"label-width":"120px",rules:e.editAgentUserRules}},[s("el-form-item",{attrs:{label:"账号：",prop:"account"}},[s("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editAgentUserForm.account,callback:function(t){e.$set(e.editAgentUserForm,"account",t)},expression:"editAgentUserForm.account"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"密码：",prop:"password"}},[s("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.editAgentUserForm.password,callback:function(t){e.$set(e.editAgentUserForm,"password",t)},expression:"editAgentUserForm.password"}})],1)],1),e._v(" "),s("div",{staticStyle:{"text-align":"center"}},[s("el-button",{attrs:{type:"primary"},nativeOn:{click:function(t){return e.editAgentUserAction(t)}}},[e._v("提交")])],1)],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=17.391d4c60b173a0e29a8c.js.map