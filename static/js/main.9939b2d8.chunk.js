(this.webpackJsonpvsm=this.webpackJsonpvsm||[]).push([[0],{60:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(10),i=n.n(r),o=(n(60),n(38)),s=n(27),l=n(110),j=n(109),u=n(102),f=n(48),b=n.n(f),h=n(49),d=n.n(h),p=n(106),O=n(107),g=n(108),y=(n(61),n(9)),v=n(63);var x=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)("NaN"),i=Object(s.a)(r,2),f=i[0],h=i[1],x=Object(c.useState)([]),m=Object(s.a)(x,2),C=m[0],S=m[1],k=Object(c.useState)([]),w=Object(s.a)(k,2),T=w[0],A=w[1],I=Object(c.useState)([]),E=Object(s.a)(I,2),F=E[0],P=E[1];function $(e){var t,n=0;for(t=0;t<e.length;t++)n+=e[t]*e[t];return n=Math.sqrt(n)}function L(e){var t=F[e];return Object.keys(t).map((function(e){return t[e]}))}function M(){var e,t,c,a={},r=n.toLowerCase().split(" ");for(e in r=r.filter((function(e){return!C.words.includes(e)})))r[e]=r[e].replace(/[.,'\u2014\u2019\u2018\xaa\xe3\xa9\xaf\/#!@?$%\^&\*;:(){}=\-_`~]/g,""),r[e]=r[e].replace(/\s{2,}/g," "),r[e]=v.singular(r[e]),r[e]=r[e].replace(/ly$/g,""),r[e]=r[e].replace(/ed$/g,""),r[e]=r[e].replace(/ness$/g,"");r=r.filter((function(e){return""!=e}));var i,s=Object(o.a)(r);try{for(s.s();!(i=s.n()).done;)a[c=i.value]=0}catch(S){s.e(S)}finally{s.f()}var l,j=Object(o.a)(r);try{for(j.s();!(l=j.n()).done;)a[c=l.value]+=1}catch(S){j.e(S)}finally{j.f()}var u,b={},d=Object(o.a)(r);try{for(d.s();!(u=d.n()).done;)c=u.value,b[c]=a[c]*T[c]}catch(S){d.e(S)}finally{d.f()}var p=$(Object.keys(b).map((function(e){return b[e]}))),O={};for(t=1;t<51;t++){var g=F[t],y=$(L(t)),x=0;for(c in b)x+=b[c]*g[c];O[t]=x/(p*y)}var m=[];for(e=1;e<51;e++)O[e]>=.001&&m.push(e);0==m.length?h("No Documents Available, Please Rephrase Query"):(f=m.join(" , "),h(f))}return Object(c.useEffect)((function(){fetch("vsm.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){P(e)})),fetch("idfs.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){A(e)})),fetch("stopwords.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){S(e)}))}),[]),Object(y.jsx)("div",{children:Object(y.jsxs)(u.a,{container:!0,spacing:3,alignItems:"center",justify:"center",style:{margin:"auto"},children:[Object(y.jsx)(p.a,{variant:"h3",style:{textAlign:"center",color:"#3f51b5",marginTop:"20%"},children:"Vector Space Model"}),Object(y.jsx)("div",{style:{marginTop:10,height:"1px",width:"100%",backgroundColor:"gray"}}),Object(y.jsx)(u.a,{item:!0,xs:12}),Object(y.jsx)(u.a,{item:!0,xs:12}),Object(y.jsx)(u.a,{item:!0,children:Object(y.jsx)(b.a,{})}),Object(y.jsx)(u.a,{item:!0,alignItems:"center",justify:"center",xs:8,children:Object(y.jsx)(j.a,{id:"search-field",label:"Enter Query",fullWidth:"true",onChange:function(e){a(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&M()}})}),Object(y.jsx)(u.a,{item:!0,xs:12}),Object(y.jsx)(l.a,{onClick:M,variant:"contained",color:"primary",size:"medium",startIcon:Object(y.jsx)(d.a,{}),children:"Search"}),Object(y.jsx)("div",{style:{marginTop:20,height:"1px",width:"100%",backgroundColor:"gray"}}),Object(y.jsxs)(u.a,{item:!0,xs:11,style:{marginTop:15},children:[Object(y.jsx)(p.a,{variant:"button",style:{color:"#3f51b5",fontWeight:"bold"},children:"Result Set:"}),Object(y.jsx)(O.a,{variant:"outlined",style:{backgroundColor:"#e0e0e6"},children:Object(y.jsx)(g.a,{style:{overflowWrap:"break-word"},children:Object(y.jsx)(p.a,{variant:"button",style:{fontSize:"18px"},children:f})})})]})]})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,112)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(x,{})}),document.getElementById("root")),m()}},[[69,1,2]]]);
//# sourceMappingURL=main.9939b2d8.chunk.js.map