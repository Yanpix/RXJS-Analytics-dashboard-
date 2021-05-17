(this["webpackJsonptest-task"]=this["webpackJsonptest-task"]||[]).push([[0],{299:function(t,e,n){},596:function(t,e,n){},597:function(t,e,n){"use strict";n.r(e);var a=n(3),i=n(1),r=n.n(i),c=n(13),s=n.n(c),o=(n(299),n(24)),u=n(7),b=n(641),j=n(647),l=n(642),d=n(643),h=n(646),p=n(124),f=n(645),m=n(644),O=n(259),x=n.n(O),g=n(260),v=n.n(g),w=n(637),y=n(638),k=n(599),S=n(261),N=n(44),P=n(648),D=n(122),B=n(20),C=n(649),I="#0fcb12",T="#3cb7c7",A="#e4e041",E={data:0,timestamp:new Date,error:""},H=new function t(){var e=this;Object(N.a)(this,t),this.state=E,this.subject=new C.a(this.state),this.initialState=E,this.subscribe=function(t){return e.subject.subscribe(t)},this.sendTemperature=function(t){e.state=Object(B.a)(Object(B.a)({},e.state),{},{data:t,timestamp:new Date}),e.subject.next(e.state)},this.clearTemperature=function(){e.state=Object(B.a)(Object(B.a)({},e.state),{},{data:null}),e.subject.next(e.state)}},F=new function t(){var e=this;Object(N.a)(this,t),this.state=E,this.subject=new C.a(this.state),this.initialState=E,this.subscribe=function(t){return e.subject.subscribe(t)},this.sendAirPressure=function(t){e.state=Object(B.a)(Object(B.a)({},e.state),{},{data:t,timestamp:new Date}),e.subject.next(e.state)},this.clearAirPressure=function(){e.state=Object(B.a)(Object(B.a)({},e.state),{},{data:null}),e.subject.next(e.state)}},L=new function t(){var e=this;Object(N.a)(this,t),this.state=E,this.subject=new C.a(this.state),this.initialState=E,this.subscribe=function(t){return e.subject.subscribe(t)},this.sendHumidity=function(t){e.state=Object(B.a)(Object(B.a)({},e.state),{},{data:t,timestamp:new Date}),e.subject.next(e.state)},this.clearHumidity=function(){e.state=Object(B.a)(Object(B.a)({},e.state),{},{data:null}),e.subject.next(e.state)}},M=n(37),K=function(t,e,n){var a=t+Math.random()*(e-t);return Math.round(a/n)*n},W=function(t){return new M.a((function(e){var n=null;return function a(){n=setTimeout((function(){e.next(t),a()}),K(100,2e3,100))}(),function(){return clearTimeout(n)}}))},$=function(t,e,n){return a=t,new Date-a>e?"N/A":n;var a},z=function(t){switch(t){case"temperature":return"\xb0C";case"airPressure":return"Pa";case"humidity":return"\u03c6";default:return}},G=function(t){var e=Object(o.a)(t,3);return{temperature:e[0],airPressure:e[1],humidity:e[2]}},J=function(t){return t<=9?"0"+t:t},R=function(){var t=new Date,e=J(t.getHours()),n=J(t.getMinutes());return"".concat(e,":").concat(n)},U=function(t){return"string"===typeof t.data?0:t.data},X=function(t){var e=t.temperature,n=t.airPressure,a=t.humidity;return{temperature:U(e),airPressure:U(n),humidity:U(a),time:R()}},Z=new function t(){var e=this;Object(N.a)(this,t),this.getLatestInfo=function(){return P.a.apply(void 0,Object(S.a)(e.streams$)).pipe(Object(D.throttleTime)(100),Object(D.map)(e.checkForExpiration),Object(D.map)(e.toObject))},this.checkForExpiration=function(t){return t.map(e.validateData)},this.validateData=function(t){var e=t.data,n=t.timestamp;return{data:$(n,1e3,e),timestamp:n}},this.toObject=function(t){return G(t)},this.unsubscribe=function(){e.streams$.forEach((function(t){return t.unsubscribe()}))};for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];this.streams$=a}(H.subject,F.subject,L.subject),_=n(634),q=Object(_.a)((function(t){return{root:{position:"relative"},flex:{display:"flex",flexDirection:"column",alignItems:"flex-start",color:"#fff",paddingLeft:10},temperature:{color:I},airPressure:{color:T},humidity:{color:A}}}));function Q(t){return Object(a.jsx)(p.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0,children:t.children})}function V(){var t=q(),e=Object(i.useState)({}),n=Object(o.a)(e,2),r=n[0],c=n[1];return Object(i.useEffect)((function(){return Z.getLatestInfo().subscribe(c),function(){return Z.unsubscribe()}}),[]),Object(a.jsxs)("div",{className:t.root,children:[Object(a.jsx)(Q,{children:"General Information"}),Object(a.jsx)("div",{className:t.flex,children:Object.keys(r).map((function(e){var n,i;return Object(a.jsxs)(p.a,{component:"p",variant:"h5",children:[(i=e,function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(i.replace(/([A-Z])/g," $1"))),":",Object(a.jsx)("span",{className:t[e],children:" ".concat(null===(n=r[e])||void 0===n?void 0:n.data).concat(z(e))})]},e)}))})]})}var Y=Object(_.a)((function(t){return{root:{position:"relative"}}}));function tt(t){var e=t.title,n=t.value,i=t.color,r=Y();return Object(a.jsxs)("div",{className:r.root,children:[Object(a.jsx)(Q,{children:e}),Object(a.jsx)(p.a,{component:"p",variant:"h3",style:{color:i},children:n})]})}function et(){var t=Object(i.useState)(H.initialState),e=Object(o.a)(t,2),n=e[0],r=e[1];Object(i.useEffect)((function(){return H.subscribe(r),function(){H.clearTemperature()}}),[]);var c=Object(i.useCallback)((function(){H.sendTemperature(K(30,100,5))}),[]);return Object(i.useEffect)((function(){W(c).subscribe((function(t){return t()}))}),[c]),Object(a.jsx)(tt,{title:"Tempature",value:"".concat(n.data).concat(z("temperature")),color:I})}function nt(){var t=Object(i.useState)(F.initialState),e=Object(o.a)(t,2),n=e[0],r=e[1];Object(i.useState)((function(){return F.subscribe(r),function(){F.clearAirPressure()}}),[]);var c=Object(i.useCallback)((function(){F.sendAirPressure(K(0,4e3,100))}),[]);return Object(i.useEffect)((function(){W(c).subscribe((function(t){return t()}))}),[c]),Object(a.jsx)(tt,{title:"Air pressure",value:"".concat(n.data).concat(z("airPressure")),color:T})}function at(){var t=Object(i.useState)(L.initialState),e=Object(o.a)(t,2),n=e[0],r=e[1];Object(i.useState)((function(){return L.subscribe(r),function(){L.clearHumidity()}}),[]);var c=Object(i.useCallback)((function(){L.sendHumidity(K(100,1e3,10))}),[]);return Object(i.useEffect)((function(){W(c).subscribe((function(t){return t()}))}),[c]),Object(a.jsx)(tt,{title:"Humidity",value:"".concat(n.data).concat(z("humidity")),color:A})}var it=n(68),rt=n(40);function ct(){var t=Object(it.a)(),e=Object(i.useState)([]),n=Object(o.a)(e,2),c=n[0],s=n[1];return Object(i.useEffect)((function(){var t,e;return Z.getLatestInfo().subscribe((t=s,e=20,function(n){t((function(t){return t.length>e?t.slice(1).concat(X(n)):t.concat(X(n))}))})),function(){return Z.unsubscribe()}}),[]),Object(a.jsxs)(r.a.Fragment,{children:[Object(a.jsx)(Q,{children:"Today"}),Object(a.jsx)(rt.d,{children:Object(a.jsxs)(rt.c,{data:c,margin:{top:16,right:16,bottom:0,left:24},children:[Object(a.jsx)(rt.e,{dataKey:"time",stroke:t.palette.text.primary,tick:{stroke:"white",strokeWidth:1,fill:"white"}}),Object(a.jsx)(rt.f,{stroke:t.palette.text.secondary,tick:{stroke:"white",strokeWidth:1},children:Object(a.jsx)(rt.a,{angle:270,position:"left",style:{textAnchor:"middle",color:t.palette.text.primary},children:"Monitoring systems"})}),Object(a.jsx)(rt.b,{type:"monotone",dataKey:"temperature",stroke:I,dot:!1,animationDuration:!1}),Object(a.jsx)(rt.b,{type:"monotone",dataKey:"airPressure",stroke:T,dot:!1,animationDuration:!1}),Object(a.jsx)(rt.b,{type:"monotone",dataKey:"humidity",stroke:A,dot:!1,animationDuration:!1})]})})]})}var st=Object(_.a)((function(t){return{appBarSpacer:t.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:t.spacing(4),paddingBottom:t.spacing(4)},paper:{display:"flex",overflow:"auto",flexDirection:"column",border:"".concat(t.spacing(2),"px solid #fff"),background:"#000",position:"relative","&:before":{content:'""',top:0,left:0,right:0,bottom:0,display:"block",position:"absolute",background:"url('https://www.pixelscrapper.com/sites/default/files/styles/456_scale/public/s3fs-user-content/graphic-image/user-107713/node-244694/green-grid-graphic-paper-wizard-gray.jpg')",opacity:.3}},fixedHeight:{height:240}}}));function ot(){var t=st(),e=Object(u.a)(t.paper,t.fixedHeight);return Object(a.jsxs)("main",{className:t.content,children:[Object(a.jsx)("div",{className:t.appBarSpacer}),Object(a.jsx)(w.a,{maxWidth:"lg",className:t.container,children:Object(a.jsxs)(y.a,{container:!0,spacing:3,children:[Object(a.jsx)(y.a,{item:!0,xs:12,md:4,children:Object(a.jsx)(k.a,{className:e,children:Object(a.jsx)(V,{})})}),Object(a.jsx)(y.a,{item:!0,xs:12,md:8,children:Object(a.jsx)(k.a,{className:e,children:Object(a.jsx)(ct,{})})}),Object(a.jsx)(y.a,{item:!0,xs:12,md:4,children:Object(a.jsx)(k.a,{className:e,children:Object(a.jsx)(et,{})})}),Object(a.jsx)(y.a,{item:!0,xs:12,md:4,children:Object(a.jsx)(k.a,{className:e,children:Object(a.jsx)(nt,{})})}),Object(a.jsx)(y.a,{item:!0,xs:12,md:4,children:Object(a.jsx)(k.a,{className:e,children:Object(a.jsx)(at,{})})})]})})]})}var ut=n(650),bt=n(639),jt=n(640),lt=n(258),dt=n.n(lt),ht=Object(a.jsxs)(ut.a,{button:!0,children:[Object(a.jsx)(bt.a,{children:Object(a.jsx)(dt.a,{})}),Object(a.jsx)(jt.a,{primary:"Dashboard"})]}),pt=n(114),ft=Object(_.a)((function(t){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(B.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},t.mixins.toolbar),appBar:{zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})},drawerPaperClose:Object(pt.a)({overflowX:"hidden",transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),width:t.spacing(7)},t.breakpoints.up("sm"),{width:t.spacing(9)}),appBarSpacer:t.mixins.toolbar}}));function mt(){var t=ft(),e=r.a.useState(!1),n=Object(o.a)(e,2),i=n[0],c=n[1];return Object(a.jsxs)("div",{className:t.root,children:[Object(a.jsx)(b.a,{}),Object(a.jsx)(l.a,{position:"absolute",className:Object(u.a)(t.appBar,i&&t.appBarShift),children:Object(a.jsxs)(d.a,{className:t.toolbar,children:[Object(a.jsx)(m.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){c(!0)},className:Object(u.a)(t.menuButton,i&&t.menuButtonHidden),children:Object(a.jsx)(x.a,{})}),Object(a.jsx)(p.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:t.title,children:"Dashboard"})]})}),Object(a.jsxs)(j.a,{variant:"permanent",classes:{paper:Object(u.a)(t.drawerPaper,!i&&t.drawerPaperClose)},open:i,children:[Object(a.jsx)("div",{className:t.toolbarIcon,children:Object(a.jsx)(m.a,{onClick:function(){c(!1)},children:Object(a.jsx)(v.a,{})})}),Object(a.jsx)(f.a,{}),Object(a.jsx)(h.a,{children:ht})]}),Object(a.jsx)(ot,{})]})}n(596);var Ot=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(mt,{})})},xt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,651)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,r=e.getLCP,c=e.getTTFB;n(t),a(t),i(t),r(t),c(t)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(Ot,{})}),document.getElementById("root")),xt()}},[[597,1,2]]]);
//# sourceMappingURL=main.4d4387ee.chunk.js.map