(this.webpackJsonpmemo_game=this.webpackJsonpmemo_game||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e){e.exports=JSON.parse('{"cards":[{"id":0,"name":"suzie"},{"id":1,"name":"cat"},{"id":2,"name":"daddy"},{"id":3,"name":"danny"},{"id":4,"name":"emily"},{"id":5,"name":"freddy"},{"id":6,"name":"george"},{"id":7,"name":"gerald"},{"id":8,"name":"grampy"},{"id":9,"name":"grandpa"},{"id":10,"name":"granny"},{"id":11,"name":"mummy"},{"id":12,"name":"peppa"},{"id":13,"name":"potato"},{"id":14,"name":"rabbit"}]}')},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(7),c=n.n(r),s=(n(13),n(14),n(6)),u=n(2),d=(n(15),n(0)),m=function(e){var t=e.createNewTileBox,n=e.gameStarted,a=e.children;return Object(d.jsx)("div",{className:"StartGame",onClick:function(){t(),n(!0)},children:a})},o=(n(17),function(){return Object(d.jsx)("div",{className:"Victory",children:"Victory!"})}),f=(n(18),n(19),n.p+"static/media/cat.e7393913.png"),p=n.p+"static/media/daddy.fa54e717.png",g=n.p+"static/media/danny.93e5998f.png",l=n.p+"static/media/emily.e1b1d521.png",b=n.p+"static/media/freddy.3e8ded9b.png",j=n.p+"static/media/george.18943e8b.png",h=n.p+"static/media/gerald.a096c903.png",y=n.p+"static/media/grampy.04bcfa0d.png",O=n.p+"static/media/grandpa.2e26f64a.png",v=n.p+"static/media/granny.3e2e2762.png",x=n.p+"static/media/mummy.039cd6ea.png",w=n.p+"static/media/peppa.4ef2be07.png",S=n.p+"static/media/potato.92e5b66d.png",k=n.p+"static/media/rabbit.9ff2c1f1.png",N=n.p+"static/media/suzie.63018b43.png",I=n.p+"static/media/sun2.e3e5b76e.png",T=function(e){switch(e){case"cat":return f;case"daddy":return p;case"emily":return l;case"george":return j;case"danny":return g;case"freddy":return b;case"gerald":return h;case"grampy":return y;case"grandpa":return O;case"granny":return v;case"mummy":return x;case"peppa":return w;case"potato":return S;case"rabbit":return k;case"suzie":return N;default:return I}},E=function(e){var t=e.tileKey,n=e.tileInfo,a=e.pushTile,r=e.showImage,c=i.a.useState(I),s=Object(u.a)(c,2),m=s[0],o=s[1];return i.a.useEffect((function(){return r({name:n.name,key:t})?o(T(n.name)):o(I)}),[r,n.name,t]),Object(d.jsx)("div",{className:"Tile",onClick:function(){a({name:n.name,key:t})},children:Object(d.jsx)("img",{className:"tileImage",src:m,alt:n.name})})},M=function(e){var t=e.tileArray,n=e.pushTileAbove,a=e.showImage,i=function(e,t){return e+"-".concat(t.id)},r=function(e){n(e)};return Object(d.jsx)("div",{className:"TilesBox",children:t.map((function(e,t){return Object(d.jsx)(E,{tileKey:i(t,e),tileInfo:e,pushTile:r,showImage:a},i(t,e))}))})},z=n(20).cards,A=function(e){for(var t=[],n=0;t.length<e;n++){var a=Math.floor(15*Math.random());t.includes(a)||(t.push(a),t.push(a))}var i=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}return e}(t);return i.map((function(e){return function(e){return z.find((function(t){return t.id===e}))}(e)}))},B=n(8),C=n.n(B);function J(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var K=function(){var e=function(){var e=Object(a.useState)(J()),t=Object(u.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){function e(){i(J())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}(),t=e.width,n=e.height;return Object(d.jsx)(C.a,{width:t,height:n})},L=(n(21),function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),f=Object(u.a)(c,2),p=f[0],g=f[1],l=Object(a.useState)([]),b=Object(u.a)(l,2),j=b[0],h=b[1],y=Object(a.useState)(!1),O=Object(u.a)(y,2),v=O[0],x=O[1],w=Object(a.useState)(!1),S=Object(u.a)(w,2),k=S[0],N=S[1],I=function(){return j[0].name===j[1].name&&g([].concat(Object(s.a)(p),[j[1].name]))};return i.a.useEffect((function(){7===p.length&&2===j.length&&x(!0)})),Object(d.jsx)("div",{className:"mainContainer",children:Object(d.jsxs)("div",{className:"subContainer",children:[Object(d.jsx)(M,{tileArray:n,pushTileAbove:function(e){if(!v)if(j.length<2){if(1===j.length&&e.key===j[0].key)return;h([].concat(Object(s.a)(j),[e]))}else 2===j.length&&(I(),h([e]))},showImage:function(e){return!!(p.includes(e.name)||j[0]&&e.key===j[0].key||j[1]&&e.key===j[1].key)}}),Object(d.jsxs)("div",{className:"subMenu",children:[Object(d.jsx)(m,{createNewTileBox:function(){var e=A(16);r(e),g([]),h([]),x(!1)},gameStarted:N,children:k?"Restart":"Start!"}),v&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(o,{}),Object(d.jsx)(K,{})]})]})]})})}),V=function(){return Object(d.jsx)(L,{})};c.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(V,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.42f1d2c3.chunk.js.map