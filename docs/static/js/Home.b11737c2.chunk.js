"use strict";(self.webpackChunkbifrost_frontend=self.webpackChunkbifrost_frontend||[]).push([[268],{3651:function(e,n,t){t.d(n,{r:function(){return o}});var i=t(1413),r=t(5987),c=t(8530),s=t(184),a=["children","value","index","height"],o=function(e){var n=e.children,t=e.value,o=e.index,l=e.height,u=(0,r.Z)(e,a);return(0,s.jsx)("div",(0,i.Z)((0,i.Z)({role:"tabpanel",hidden:t!==o,id:"full-width-tabpanel-".concat(o),"aria-labelledby":"full-width-tab-".concat(o)},u),{},{children:t===o&&(0,s.jsx)(c.Z,{sx:{margin:"0 auto",height:l},children:n})}))}},474:function(e,n,t){t.r(n),t.d(n,{BifrostPage:function(){return X},default:function(){return ee}});var i=t(9439),r=t(2791),c=t(8493),s=t(1413),a=t(3433),o=t(4165),l=t(5861),u=t(3967),d=t(4395),h=t(8264),f=t(3896),v=t(7541),x=t(3292),m=t(1065),p=t(3651),N=t(5357),Z=t(8530),j=t(24),E=t(3577),I=t(9230),S=t(9135),C=t(3056),g=t(7050),_=t(7689),b=t(1962),A=t(240),O=t(184),R=function(e){var n=e.home,t=(0,r.useContext)(b.o).setHomeSelected,c=(0,_.s0)(),s=(0,E.CG)((function(e){return e.auth.user})).role,o=(0,E.CG)((function(e){return e.invitation})).actives,l=(0,E.CG)((function(e){return e.condo})).infoCondo,u=(0,I.$G)().t,d=(0,r.useState)([]),h=(0,i.Z)(d,2),f=h[0],v=h[1],x=(0,r.useState)(""),m=(0,i.Z)(x,2),p=m[0],N=m[1],Z=(0,r.useState)(""),j=(0,i.Z)(Z,2),S=j[0],C=j[1],R=n.condo;return(0,r.useEffect)((function(){o.length>0&&v((0,a.Z)(o))}),[o]),(0,r.useEffect)((function(){s.name===g.g.CONDO?(R=l,N(l.name),C(l.type.description)):(N(n.condo.name),C(R.type.description))}),[s]),(0,O.jsx)(O.Fragment,{children:(0,O.jsxs)("div",{className:"content_card",onClick:function(){return function(e){t(e),c("../list-invitation")}(n)},children:[(0,O.jsx)("div",{className:"header_card",children:(0,O.jsx)("div",{className:"home_number",children:f.length})}),(0,O.jsx)("div",{className:"body_card",children:(0,O.jsx)("div",{className:"number_house",children:(0,O.jsx)("div",{className:"background_number",children:(0,O.jsxs)("span",{children:[u("DICTIONARY.".concat(S))," ",n.numberHouse]})})})}),(0,O.jsxs)("div",{className:"footer_card",children:[(0,O.jsx)("span",{className:"condo",children:(0,A.j)(n.description)}),(0,O.jsx)("span",{className:"condo",children:(0,A.j)(p)})]})]})})},T=function(){var e=(0,r.useContext)(j.f),n=e.isLoading,t=e.setIsLoading,c=(0,E.CG)((function(e){return e.auth})).user,_=(0,E.CG)((function(e){return e.resident})).homes,b=(0,E.CG)((function(e){return e.condo})).homesCondo,A=(0,E.TL)(),T=(0,u.Z)(),w=(0,r.useState)([]),L=(0,i.Z)(w,2),y=L[0],D=L[1],M=(0,r.useState)(0),V=(0,i.Z)(M,2),k=V[0],H=V[1],G=(0,I.$G)().t,P=function(){var e=(0,l.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(!0),A((0,S.wd)()).then((function(){t(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=(0,l.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(!0),A((0,C.kd)()).then((function(){t(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function U(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}return(0,r.useEffect)((function(){null!==c&&c.role.name===g.g.RESIDENT?P():null!==c&&c.role.name===g.g.CONDO&&z()}),[c]),(0,r.useEffect)((function(){null!==c&&c.role.name===g.g.CONDO&&D((0,a.Z)(b)),null!==c&&c.role.name===g.g.RESIDENT&&0!==_[0].id&&D((0,a.Z)(_))}),[_,b]),(0,O.jsx)(O.Fragment,{children:(0,O.jsxs)(Z.Z,{sx:{width:"100%"},children:[(0,O.jsx)(d.Z,{position:"static",children:(0,O.jsxs)(h.Z,{sx:{height:"3rem",fontSize:"10px"},value:k,onChange:function(e,n){H(n)},indicatorColor:"secondary",textColor:"inherit",variant:"fullWidth",scrollButtons:"auto","aria-label":"full width tabs example",centered:!0,children:[(0,O.jsx)(f.Z,(0,s.Z)({sx:{marginTop:"-10px",height:"3rem",fontSize:"10px"},icon:(0,O.jsx)(v.Z,{fontSize:"small"}),label:G("IN.SECTIONS.HOME.TAB.HOMES")},U(0))),(0,O.jsx)(f.Z,(0,s.Z)({sx:{marginTop:"-10px",height:"3rem",fontSize:"10px"},icon:(0,O.jsx)(x.Z,{fontSize:"small"}),label:G("IN.SECTIONS.HOME.TAB.SOCIAL")},U(1)))]})}),(0,O.jsxs)(m.ZP,{style:{height:"80%"},axis:"rtl"===T.direction?"x-reverse":"x",index:Number(k),onChangeIndex:function(e){H(e)},children:[(0,O.jsx)(p.r,{value:k,index:0,dir:T.direction,height:"calc(100vh - 124px)",children:n?(0,O.jsx)(N.N,{}):(0,O.jsx)("div",{className:"panel-home",children:y.length>0?y.map((function(e){return(0,O.jsx)(R,{home:e},e.numberHouse)})):(0,O.jsx)("span",{children:G("WARNING.RECORD.NO_HOUSEHOLDS_REGISTERED")})})}),(0,O.jsx)(p.r,{value:k,index:1,dir:T.direction,height:"calc(100vh - 124px)",children:"Item Two"})]})]})})},w=t(7762),L=t(7621),y=t(9585),D=t(890),M=t(9504),V=t(3239),k=t(3006),H=t(2363),G=t(6151),P=t(6398),z=t.n(P),U=t(2426),F=t.n(U),B=t(8444),W=t(8792),Y=t(7496),K=t(5380),$=t.p+"static/media/403-forbidden-1.255e1a094a99e56f4edc.jpg",q=t.p+"static/media/confirm.0b14dabdb71412f308e3.jpg",J=t(978),Q=function(){var e=(0,r.useContext)(j.f),n=e.setToast,t=e.toast,c=(0,I.$G)().t,a=(0,E.TL)(),u=(0,r.useState)(!1),d=(0,i.Z)(u,2),h=d[0],f=d[1],v=(0,r.useState)(!1),x=(0,i.Z)(v,2),m=x[0],p=x[1],N=(0,r.useState)(""),S=(0,i.Z)(N,2),C=S[0],g=S[1],_=(0,r.useRef)(),b=(0,r.useState)(F()().format("DD/MM/YYYY")),A=(0,i.Z)(b,1)[0],R=(0,r.useState)(K.Z.colorPrimary),T=(0,i.Z)(R,2),P=T[0],U=T[1],Q=(0,r.useState)(""),X=(0,i.Z)(Q,2),ee=X[0],ne=X[1],te=(0,r.useState)(!1),ie=(0,i.Z)(te,2),re=ie[0],ce=ie[1],se=(0,r.useState)({houseNumber:null,id:null,isActive:null,toDate:null,vehicleColor:null,vehicleId:null,vehicleModel:null}),ae=(0,i.Z)(se,2),oe=ae[0],le=ae[1],ue=function(){var e=F()(),n=e.hours(),t=e.minutes(),i=e.seconds();return"".concat(n,":").concat(t,":").concat(i)},de=function(){var e=(0,l.Z)((0,o.Z)().mark((function e(n){var t;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p(!0),n&&""!==n&&(t=JSON.parse(n),g(t),f(!1),p(!1),he(t.id));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),he=function(e){a((0,B.O3)(e)).then((function(e){if(200===e.status){var n=e.data;F()().isAfter(e.data.toDate)&&console.error("Invitacion vencida"),p(!1),le({houseNumber:n.houseNumber,id:n.id,isActive:n.isActive,toDate:n.toDate,vehicleColor:null===n.vehicleColor?"Sin informacion":n.vehicleColor,vehicleId:null===n.vehicleId?"Sin informacion":n.vehicleId,vehicleModel:null===n.vehicleModel?"Sin informacion":n.vehicleModel})}else le((0,s.Z)((0,s.Z)({},oe),{},{isActive:!1})),p(!1)}))},fe=function(){le({houseNumber:null,id:null,isActive:null,toDate:null,vehicleColor:null,vehicleId:null,vehicleModel:null}),U(K.Z.colorPrimary),g(""),f(!1),p(!1),ce(!1)};return(0,r.useEffect)((function(){var e=setInterval((function(){_.current.innerHTML="".concat(ue())}),1e3);return function(){clearInterval(e)}}),[]),(0,r.useEffect)((function(){if(null!==oe.isActive){var e=oe.isActive?K.Z.colorSuccess:K.Z.colorDanger;U(e)}else U(K.Z.colorPrimary)}),[oe]),(0,O.jsx)(O.Fragment,{children:(0,O.jsxs)(L.Z,{sx:{width:"100%",backgroundColor:"white",height:"calc(100vh - 160px)"},children:[(0,O.jsx)(y.Z,{className:"header_surveillance",title:(0,O.jsx)(D.Z,{sx:{fontSize:22},ref:_,children:ue()}),subheader:A}),(0,O.jsx)(M.Z,{sx:{height:"70%"},children:(0,O.jsxs)("div",{className:"card_qr",children:[h&&(0,O.jsx)(z(),{facingMode:"environment",delay:1e3,onError:function(e){console.error(e)},onScan:de,style:{width:"100%"}}),C&&(0,O.jsxs)("div",{className:"content_info",children:[(0,O.jsxs)("div",{className:"state animate__animated animate__fadeInRight animate__faster",children:[(0,O.jsxs)("div",{className:"icon",style:{color:"white",backgroundColor:"".concat(P)},children:[m&&(0,O.jsx)(V.Z,{sx:{color:"white",width:"25px",height:"25px"}}),!m&&oe&&!0===oe.isActive&&(0,O.jsx)(W.Z,{sx:{fontSize:25}}),!m&&oe&&!1===oe.isActive&&(0,O.jsx)(Y.Z,{sx:{fontSize:25}})]}),(0,O.jsxs)("div",{className:"message",children:[(0,O.jsxs)("div",{className:"title",children:[m&&(0,O.jsx)(D.Z,{children:c("GENERAL.LOADING")}),!m&&oe&&!0===oe.isActive&&!re&&(0,O.jsx)(D.Z,{children:c("SURVEILLANCE.APPROVED")}),!m&&oe&&!1===oe.isActive&&!re&&(0,O.jsx)(D.Z,{children:c("SURVEILLANCE.REJECTED")}),!m&&oe&&!0===oe.isActive&&re&&(0,O.jsx)(D.Z,{children:c("GENERAL.CONFIRM")})]}),(0,O.jsxs)("div",{className:"subtitle",children:[!m&&oe&&!0===oe.isActive&&(0,O.jsx)(D.Z,{sx:{fontSize:12,color:"#919191",lineHeight:1},children:c("SURVEILLANCE.VALID_INVITATION")}),!m&&oe&&!1===oe.isActive&&(0,O.jsx)(D.Z,{sx:{fontSize:12,color:"#919191",lineHeight:1},children:c("SURVEILLANCE.INVALID_INVITATION")})]})]})]}),(0,O.jsxs)("div",{style:{border:"2px solid ".concat(P)},className:"data_invitation animate__animated animate__fadeIn animate__faster",children:[!m&&oe&&!1===oe.isActive&&!re&&(0,O.jsx)("div",{children:(0,O.jsx)("img",{src:$,alt:""})}),re&&(0,O.jsx)("div",{children:(0,O.jsx)("img",{src:q,alt:"",width:"65%"})}),!m&&oe&&!0===oe.isActive&&!re&&(0,O.jsxs)("div",{className:"content",children:[(0,O.jsxs)("div",{className:"info",children:[(0,O.jsxs)(L.Z,{className:"card_info",children:[(0,O.jsx)("div",{className:"title",children:c("INVITATIONS_FORM.HOUSE_NUMBER")}),(0,O.jsx)("div",{className:"subtitle",children:oe.houseNumber})]}),(0,O.jsxs)(L.Z,{className:"card_info",children:[(0,O.jsx)("div",{className:"title",children:c("INVITATIONS_FORM.VEHICLE_MODEL")}),(0,O.jsx)("div",{className:"subtitle",children:oe.vehicleModel})]}),(0,O.jsxs)(L.Z,{className:"card_info",children:[(0,O.jsx)("div",{className:"title",children:c("INVITATIONS_FORM.VEHICLE_COLOR")}),(0,O.jsx)("div",{className:"subtitle",children:oe.vehicleColor})]}),(0,O.jsxs)(L.Z,{className:"card_info",children:[(0,O.jsx)("div",{className:"title",children:c("INVITATIONS_FORM.VEHICLE_ID")}),(0,O.jsx)("div",{className:"subtitle",children:oe.vehicleId})]})]}),(0,O.jsx)(Z.Z,{sx:{width:"100%",marginTop:"1rem"},children:(0,O.jsx)(k.Z,{sx:{width:"100%"},id:"outlined-textarea",label:"Observaciones",placeholder:"Observaciones",onChange:function(e){ne(e.target.value)},rows:3,multiline:!0})})]})]})]})]})}),(0,O.jsxs)(H.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,O.jsx)("div",{}),(t.typeof===J.R.ERROR||oe&&!1===oe.isActive)&&(0,O.jsx)(G.Z,{disabled:re,color:"info",onClick:fe,children:c("SURVEILLANCE.CLEAN")}),!(!m&&oe&&!0===oe.isActive)&&(0,O.jsx)(G.Z,{disabled:re,color:"primary",onClick:function(){f(!h)},children:c(h?"SURVEILLANCE.SCAN_STOP":"SURVEILLANCE.SCAN_QR")}),!m&&oe&&!0===oe.isActive&&(0,O.jsx)(G.Z,{disabled:null==oe.vehicleId&&null==oe.vehicleModel&&null==oe.vehicleColor&&ee.length<10||!!re||void 0,color:"primary",onClick:function(){!function(){var e={invitationId:oe.id,observation:ee};a((0,B.zO)(e)).then((function(e){if(void 0===e.response&&200===e.status)ce(!0),setTimeout((function(){ce(!1),fe()}),3e3);else{var t,i=e.response,r=(0,w.Z)(i.data.message);try{for(r.s();!(t=r.n()).done;){var c=t.value;n({message:c,type:J.R.ERROR,subMessage:"",time:3e3})}}catch(s){r.e(s)}finally{r.f()}}}))}()},children:c("GENERAL.CONFIRM")})]})]})})},X=function(){var e=(0,r.useContext)(j.f).isLoading,n=(0,E.CG)((function(e){return e.auth})).user,t=(0,r.useState)(""),s=(0,i.Z)(t,2),a=s[0],o=s[1];return(0,r.useEffect)((function(){null!==n&&o(n.role.name)}),[n]),(0,O.jsx)(O.Fragment,{children:(0,O.jsxs)(c.Z,{title:"Home",children:[a!==g.g.VIGILANT&&(0,O.jsx)(T,{}),a===g.g.VIGILANT&&(0,O.jsx)(Q,{}),e&&(0,O.jsx)(N.N,{})]})})},ee=X},8493:function(e,n,t){var i=t(2791),r=t(1694),c=t.n(r),s=t(184),a=(0,i.forwardRef)((function(e,n){e.isProtected;var t=e.title,r=e.description,a=e.className,o=e.children;return(0,i.useLayoutEffect)((function(){var e;document.getElementsByTagName("TITLE")[0].text="".concat(t?"".concat(t," | "):""," Bifrost"),null===(e=document)||void 0===e||e.querySelector('meta[name="description"]').setAttribute("content",r||{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_META_DESC||"")})),(0,s.jsx)("div",{ref:n,className:c()("page-wrapper","container-fluid","animate__animated","animate__fadeInRight","animate__faster",a),style:{display:"flex",flex:"1 0 auto",flexDirection:"column"},children:o})}));a.displayName="PageWrapper",a.defaultProps={isProtected:!0,title:void 0,description:void 0,className:void 0},n.Z=a},8444:function(e,n,t){t.d(n,{zO:function(){return v},Wn:function(){return h},O3:function(){return f}});var i=t(4165),r=t(5861),c=t(8018),s=t(9537),a=c.N.BASE_URL,o="".concat(a,"/invitations"),l=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(n){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(o),e.abrupt("return",(0,s.z)().post(t,{data:n}).then((function(e){return e})).catch((function(e){return console.log(e)})));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(n){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(o,"/validate/").concat(n),e.abrupt("return",(0,s.z)().get(t).then((function(e){return e})).catch((function(e){return console.log(e)})));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(n){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(o,"/confirm-invitation"),e.abrupt("return",(0,s.z)().put(t,{data:n}).then((function(e){return e})));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(e){return function(){var n=(0,r.Z)((0,i.Z)().mark((function n(t){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l(e).then((function(e){return e}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},f=function(e){return function(){var n=(0,r.Z)((0,i.Z)().mark((function n(t){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u(e).then((function(e){return e}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},v=function(e){return function(){var n=(0,r.Z)((0,i.Z)().mark((function n(t){return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d(e).then((function(e){return e}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=Home.b11737c2.chunk.js.map