(this.webpackJsonpvsm=this.webpackJsonpvsm||[]).push([[0],{60:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(10),o=n.n(a),i=(n(60),n(38)),s=n(27),l=n(110),j=n(109),u=n(102),f=n(48),b=n.n(f),h=n(49),d=n.n(h),p=n(106),O=n(107),g=n(108),x=(n(61),n(9)),y=n(63);var v=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)("NaN"),o=Object(s.a)(a,2),f=o[0],h=o[1],v=Object(c.useState)([]),m=Object(s.a)(v,2),C=m[0],S=m[1],k=Object(c.useState)([]),w=Object(s.a)(k,2),T=w[0],I=w[1],A=Object(c.useState)([]),E=Object(s.a)(A,2),F=E[0],$=E[1];function L(e){var t,n=0;for(t=0;t<e.length;t++)n+=e[t]*e[t];return n=Math.sqrt(n)}function M(e){var t=F[e];return Object.keys(t).map((function(e){return t[e]}))}function P(){var e,t,c,r={},a=n.toLowerCase().split(" ");for(e in a=a.filter((function(e){return!C.words.includes(e)})))a[e]=a[e].replace(/[.,'\u2014\u2019\u2018\xaa\xe3\xa9\xaf\/#!@?$%\^&\*;:(){}=\-_`~]/g,""),a[e]=a[e].replace(/\s{2,}/g," "),a[e]=y.singular(a[e]),a[e]=a[e].replace(/ly$/g,""),a[e]=a[e].replace(/ed$/g,""),a[e]=a[e].replace(/ness$/g,"");a=a.filter((function(e){return""!=e}));var o,s=Object(i.a)(a);try{for(s.s();!(o=s.n()).done;)r[c=o.value]=0}catch(S){s.e(S)}finally{s.f()}var l,j=Object(i.a)(a);try{for(j.s();!(l=j.n()).done;)r[c=l.value]+=1}catch(S){j.e(S)}finally{j.f()}var u,b={},d=Object(i.a)(a);try{for(d.s();!(u=d.n()).done;)c=u.value,b[c]=r[c]*T[c]}catch(S){d.e(S)}finally{d.f()}var p=L(Object.keys(b).map((function(e){return b[e]}))),O={};for(t=1;t<51;t++){var g=F[t],x=L(M(t)),v=0;for(c in b)console.log(c,b[c]),console.log(c,g[c]),v+=b[c]*g[c];O[t]=v/(p*x)}var m=[];for(e=1;e<51;e++)O[e]>=.005&&m.push(e);f=m.join(" , "),h(f)}return Object(c.useEffect)((function(){fetch("vsm.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){$(e)})),fetch("idfs.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){I(e)})),fetch("stopwords.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){S(e)}))}),[]),Object(x.jsx)("div",{children:Object(x.jsxs)(u.a,{container:!0,spacing:3,alignItems:"center",justify:"center",style:{margin:"auto"},children:[Object(x.jsx)(p.a,{variant:"h3",style:{textAlign:"center",color:"#3f51b5",marginTop:"20%"},children:"Vector Space Model"}),Object(x.jsx)("div",{style:{marginTop:10,height:"1px",width:"100%",backgroundColor:"gray"}}),Object(x.jsx)(u.a,{item:!0,xs:12}),Object(x.jsx)(u.a,{item:!0,xs:12}),Object(x.jsx)(u.a,{item:!0,children:Object(x.jsx)(b.a,{})}),Object(x.jsx)(u.a,{item:!0,alignItems:"center",justify:"center",xs:8,children:Object(x.jsx)(j.a,{id:"search-field",label:"Enter Query",fullWidth:"true",onChange:function(e){r(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&P()}})}),Object(x.jsx)(u.a,{item:!0,xs:12}),Object(x.jsx)(l.a,{onClick:P,variant:"contained",color:"primary",size:"medium",startIcon:Object(x.jsx)(d.a,{}),children:"Search"}),Object(x.jsx)("div",{style:{marginTop:20,height:"1px",width:"100%",backgroundColor:"gray"}}),Object(x.jsxs)(u.a,{item:!0,xs:11,style:{marginTop:15},children:[Object(x.jsx)(p.a,{variant:"button",style:{color:"#3f51b5",fontWeight:"bold"},children:"Result Set:"}),Object(x.jsx)(O.a,{variant:"outlined",style:{backgroundColor:"#e0e0e6"},children:Object(x.jsx)(g.a,{style:{overflowWrap:"break-word"},children:Object(x.jsx)(p.a,{variant:"button",style:{fontSize:"18px"},children:f})})})]})]})})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,112)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(v,{})}),document.getElementById("root")),m()}},[[69,1,2]]]);
//# sourceMappingURL=main.a5b92aee.chunk.js.map