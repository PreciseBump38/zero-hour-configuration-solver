(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,r,o){},16:function(e,r,o){"use strict";o.r(r);var n=o(0),l=o.n(n),t=o(7),c=o.n(t),u=o(8),a=o(3),m=o(4),b=o(2),i=function(e,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e},l=Object(n.useState)(function(){var n=localStorage.getItem(e);try{if(null!=n)return o(JSON.parse(n))}catch(l){console.warn(l)}return"function"===typeof r?r():r}),t=Object(a.a)(l,2),c=t[0],u=t[1];return Object(n.useEffect)(function(){localStorage.setItem(e,JSON.stringify(c))},[c,e]),[c,u]},s=function(e,r,o){var l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(e){return e},t=Object(n.useReducer)(r,null,function(){var r=localStorage.getItem(e);try{if(null!=r)return l(JSON.parse(r))}catch(n){console.warn(n)}return l(o)}),c=Object(a.a)(t,2),u=c[0],m=c[1];return Object(n.useEffect)(function(){localStorage.setItem(e,JSON.stringify(u))},[u,e]),[u,m]},d=o(1),y=o.n(d),p={void:{label:"Void",color:"purple"},arc:{label:"Arc",color:"lightblue"},solar:{label:"Solar",color:"orange"}},f=function(e){var r=e.direction,o=e.selected,t=e.onSelect,c=Object(n.useMemo)(function(){var e=y.a.name2rgb(p[o].color);return y.a.rgb2hex(Math.max(0,e.R-50),Math.max(0,e.G-50),Math.max(0,e.B-50))},[o]);return l.a.createElement("div",{style:{display:"flex",flexDirection:r||"row"}},Object.entries(p).map(function(e){var r=Object(a.a)(e,2),n=r[0],u=r[1],m=(u.label,u.color);return l.a.createElement("div",{key:n,style:{display:"flex",justifyContent:"center",alignItems:"center",width:50,height:50,borderRadius:"100%",backgroundColor:o===n?c:m,cursor:o!==n&&"pointer",marginRight:8},onClick:function(e){e.preventDefault(),o!==n&&t(n)}},l.a.createElement("div",{style:{width:25,height:25,borderRadius:"100%",backgroundColor:m}}))}))},h=function(e,r){return[e*Math.cos(r),e*Math.sin(r)]},g=function(e){var r=e.style,o=e.enabled,t=e.selected,c=e.onSelect,u=Object(n.useMemo)(function(){return Array.isArray(o)?Array.from(new Set(o)):[1,2,3,4,5,6,7,8,9,10,11,12]},[o]);return Object(n.useEffect)(function(){u.includes(t)||(1!==u.length?c(0):c(u[0]))},[u,t,c]),l.a.createElement("svg",{xmlns:"https://www.w3.org/2000/svg",viewBox:"-50 -50 100 100",style:Object(b.a)({minWidth:100,padding:4},r)},function(e,r,o){for(var n=[],l=e;l<r;l++)n.push(o(l));return n}(1,13,function(e){var r=(e-1)*(Math.PI/6)+.02-Math.PI/2,o=r+Math.PI/6-.04,n=h(40,o-(o-r)/2);return l.a.createElement("g",{key:e,style:{cursor:t!==e&&u.includes(e)?"pointer":"default"},onClick:function(r){r.preventDefault(),u.includes(e)&&c(e)}},l.a.createElement("path",{fill:u.includes(e)?t===e?"lightgreen":"cyan":"grey",d:"\n\t\t\t\t\t\t\t\tM ".concat(h(50,r).join(" "),"\n\t\t\t\t\t\t\t\tA 50 50 0 0 1 ").concat(h(50,o).join(" "),"\n\t\t\t\t\t\t\t\tL ").concat(h(30,o-.01).join(" "),"\n\t\t\t\t\t\t\t\tA 30 30 0 0 0 ").concat(h(30,r+.01).join(" "),"\n\t\t\t\t\t\t\t\tZ\n\t\t\t\t\t\t\t")}),l.a.createElement("text",{style:{fontSize:12,textAnchor:"middle",dominantBaseline:"central"},x:n[0],y:n[1]},e))}))},w=function(e){var r=(e.R+e.G+e.B)/3>128?0:255;return y.a.rgb2hex(r,r,r)},v=[{justify:"space-between",terminals:[6,1]},{justify:"space-around",terminals:[5,3]},{justify:"space-around",terminals:[4]},{justify:"space-between",terminals:[7,2]}],x=function(e){var r=e.color,o=e.number,t=e.right,c=e.locked,u=Object(n.useMemo)(function(){if("black"===r)return"#000000";var e=y.a.name2rgb(r);return w(e)},[r]),a=Object(n.useMemo)(function(){return y.a.hex2hsv(u).V>50?"black":"white"},[u]);return l.a.createElement("div",{style:{display:"flex",flexDirection:t?"row-reverse":"row",justifyContent:"space-between",width:100,height:100,backgroundColor:r,border:"solid 2px",transform:"translate(".concat(t?"":"-","2px, 0px)"),cursor:"default"}},l.a.createElement("div",null),v.map(function(e,n){return l.a.createElement("div",{key:n,style:{display:"flex",flexDirection:t?"column":"column-reverse",justifyContent:e.justify}},e.terminals.map(function(e){return l.a.createElement("div",{key:e,style:{display:"flex",justifyContent:"center",alignItems:"center",width:20,height:20,color:null!=c["".concat(r,"-").concat(e)]?r:o===e?a:u,backgroundColor:null==c["".concat(r,"-").concat(e)]&&o===e?u:null}},e)}))}),l.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"}},l.a.createElement("div",{style:{backgroundColor:"black"!==r?"white":"black",width:2,height:30,transform:"translate(".concat(t?"-":"","2px, 0px)")}})))},j=[["green","black"],["white","purple"],["yellow","blue"],["red","cyan"]],E=function(e){var r=e.style,o=void 0===r?{}:r,n=e.color,t=e.number,c=e.locked;return l.a.createElement("div",{style:Object(b.a)({},o,{display:"flex",flexDirection:"column",justifyContent:"space-between",height:100*(j.length+1),border:"solid 2px"})},l.a.createElement("div",null),j.map(function(e,r){return l.a.createElement("div",{key:r,style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},e.map(function(e,r){return l.a.createElement(x,{key:e,color:e,number:n===e&&t,right:r>0,locked:c})}))}),l.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"}},l.a.createElement("div",{style:{width:100,height:2,transform:"translate(0px, 2px)",backgroundColor:"white"}})))},k=function(e){var r=e.style,o=e.barStyle,t=e.value,c=e.max,u=Object(n.useMemo)(function(){return null!=r.height?r.height:32},[r]),a=Object(n.useMemo)(function(){return null!=o&&void 0!==o.backgroundColor?o.backgroundColor:"blue"},[o]),m=Object(n.useMemo)(function(){var e=y.a.name2hex(a);return"#"!==e[0]&&(e=a),y.a.complement(e)},[a]);return l.a.createElement("div",{style:Object(b.a)({padding:0,height:u,border:"2px solid ".concat(a),cursor:"default"},r)},l.a.createElement("div",{style:Object(b.a)({width:"".concat(100*t/c,"%"),height:"100%",margin:0,backgroundColor:a,transition:"all .5s"},o)}),l.a.createElement("div",{style:{padding:0,margin:0,textAlign:"center",fontSize:u-8,fontWeight:"bold",mixBlendMode:"difference",color:m,transform:"translate(0, -".concat(u-2,"px)")}},t," / ",c))},O=function(e){var r=e.open,o=e.onClose,n=e.children;return r?l.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"fixed",top:0,bottom:0,left:0,right:0,backgroundColor:"rgba(100, 100, 100, .5)",overflow:"auto"}},l.a.createElement("div",{style:{display:"flex",flexDirection:"column",backgroundColor:"white",padding:16,margin:16,borderRadius:16}},n,l.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"flex-end"}},l.a.createElement("button",{onClick:function(){return o()}},"Close")))):null},C={void:{2:{"1-1-2-12":{color:"white",number:1},"1-1-4-5":{color:"red",number:2},"1-2-1-4":{color:"red",number:1},"1-7-12-3":{color:"yellow",number:3},"1-10-7-11":{color:"red",number:6},"1-12-1-1":{color:"cyan",number:3},"2-4-1-6":{color:"green",number:2},"2-5-11-2":{color:"yellow",number:2},"2-6-5-4":{color:"cyan",number:1},"2-7-2-11":{color:"yellow",number:6},"2-9-12-3":{color:"purple",number:5},"3-3-1-3":{color:"green",number:7},"4-3-2-4":{color:"green",number:1},"4-3-2-11":{color:"purple",number:6},"4-6-5-6":{color:"blue",number:4},"4-8-12-8":{color:"white",number:5},"4-9-9-4":{color:"yellow",number:1},"5-6-7-3":{color:"red",number:5},"5-9-11-7":{color:"purple",number:7},"6-5-6-10":{color:"purple",number:1},"6-9-12-10":{color:"white",number:7},"6-11-11-4":{color:"cyan",number:4},"7-2-8-3":{color:"white",number:6},"7-4-2-7":{color:"green",number:5},"7-9-6-5":{color:"yellow",number:4},"7-12-1-2":{color:"blue",number:5},"8-4-5-8":{color:"cyan",number:2},"8-5-11-8":{color:"cyan",number:7},"8-6-2-9":{color:"white",number:3},"8-6-9-2":{color:"yellow",number:5},"8-10-5-6":{color:"red",number:3},"8-12-5-9":{color:"cyan",number:6},"9-3-12-7":{color:"green",number:3},"9-7-7-8":{color:"purple",number:4},"9-9-8-10":{color:"purple",number:2},"10-2-3-8":{color:"white",number:2},"10-3-2-3":{color:"green",number:4},"10-5-6-2":{color:"blue",number:2},"10-12-11-5":{color:"green",number:6},"11-1-5-7":{color:"blue",number:6},"11-4-2-8":{color:"blue",number:7},"11-4-4-11":{color:"yellow",number:7},"11-4-5-4":{color:"red",number:4},"11-6-12-8":{color:"red",number:7},"11-7-6-3":{color:"purple",number:3},"11-11-7-3":{color:"blue",number:3},"12-2-11-4":{color:"cyan",number:5},"12-5-7-1":{color:"white",number:4},"12-5-12-11":{color:"Blue",number:1}},3:{"1-1-8-10":{color:"white",number:1},"1-1-6-5":{color:"red",number:2},"1-2-11-4":{color:"red",number:1},"1-7-8-4":{color:"yellow",number:3},"1-10-3-12":{color:"red",number:6},"1-12-5-4":{color:"cyan",number:3},"2-4-3-10":{color:"green",number:2},"2-5-3-5":{color:"yellow",number:2},"2-6-10-3":{color:"cyan",number:1},"2-7-9-10":{color:"yellow",number:6},"2-9-10-2":{color:"purple",number:5},"3-3-6-8":{color:"green",number:7},"4-3-2-9":{color:"green",number:1},"4-3-4-7":{color:"purple",number:6},"4-6-5-12":{color:"blue",number:4},"4-8-9-3":{color:"white",number:5},"4-9-5-5":{color:"yellow",number:1},"5-6-7-10":{color:"red",number:5},"5-9-12-10":{color:"purple",number:7},"6-5-1-1":{color:"purple",number:1},"6-9-8-5":{color:"white",number:7},"6-11-12-4":{color:"cyan",number:4},"7-2-3-12":{color:"white",number:6},"7-4-7-9":{color:"green",number:5},"7-9-5-12":{color:"yellow",number:4},"7-12-5-4":{color:"blue",number:5},"8-4-9-4":{color:"cyan",number:2},"8-5-11-11":{color:"cyan",number:7},"8-6-2-10":{color:"white",number:3},"8-6-12-12":{color:"yellow",number:5},"8-10-11-11":{color:"red",number:3},"8-12-9-4":{color:"cyan",number:6},"9-3-12-12":{color:"green",number:3},"9-7-12-7":{color:"purple",number:4},"9-9-8-6":{color:"purple",number:2},"10-2-9-3":{color:"white",number:2},"10-3-7-11":{color:"green",number:4},"10-5-3-9":{color:"blue",number:2},"10-12-8-12":{color:"green",number:6},"11-1-10-2":{color:"blue",number:6},"11-4-4-8":{color:"blue",number:7},"11-4-12-3":{color:"yellow",number:7},"11-4-7-6":{color:"red",number:4},"11-6-11-11":{color:"red",number:7},"11-7-12-5":{color:"purple",number:3},"11-11-8-11":{color:"blue",number:3},"12-2-2-11":{color:"cyan",number:5},"12-5-5-7":{color:"white",number:4},"12-5-4-4":{color:"Blue",number:1}}},arc:{2:{"1-4-5-7":{color:"red",number:6},"1-6-11-3":{color:"yellow",number:7},"2-4-12-10":{color:"green",number:3},"2-9-4-3":{color:"green",number:2},"2-9-5-9":{color:"purple",number:6},"3-5-7-6":{color:"cyan",number:2},"3-8-1-8":{color:"yellow",number:4},"4-4-10-3":{color:"cyan",number:1},"4-5-9-7":{color:"white",number:4},"4-6-6-12":{color:"purple",number:2},"4-7-3-5":{color:"blue",number:5},"4-8-8-7":{color:"white",number:5},"4-9-1-1":{color:"cyan",number:5},"4-12-2-7":{color:"green",number:6},"4-12-5-6":{color:"yellow",number:1},"5-4-5-2":{color:"red",number:5},"5-4-11-8":{color:"cyan",number:7},"5-8-3-2":{color:"red",number:7},"5-9-1-1":{color:"red",number:1},"5-9-6-8":{color:"red",number:4},"6-2-12-5":{color:"blue",number:3},"6-2-1-7":{color:"purple",number:5},"6-3-10-3":{color:"white",number:1},"6-5-2-12":{color:"blue",number:1},"7-3-2-9":{color:"cyan",number:3},"7-9-5-12":{color:"yellow",number:5},"8-1-11-2":{color:"red",number:2},"8-3-4-9":{color:"purple",number:7},"8-9-9-12":{color:"green",number:7},"8-11-7-9":{color:"cyan",number:4},"8-12-6-4":{color:"white",number:7},"9-1-12-4":{color:"yellow",number:3},"9-6-5-3":{color:"purple",number:4},"9-10-11-4":{color:"yellow",number:2},"9-11-12-6":{color:"blue",number:4},"9-11-1-3":{color:"blue",number:7},"9-12-7-6":{color:"purple",number:1},"10-8-11-6":{color:"red",number:3},"10-9-3-7":{color:"blue",number:6},"10-11-3-2":{color:"green",number:1},"10-11-9-3":{color:"yellow",number:6},"10-12-8-4":{color:"green",number:5},"10-12-9-6":{color:"white",number:3},"11-1-2-10":{color:"white",number:2},"11-11-9-11":{color:"white",number:6},"12-7-1-8":{color:"purple",number:3},"12-8-1-8":{color:"blue",number:2},"12-5-11-4":{color:"cyan",number:6},"12-12-1-6":{color:"green",number:4}},3:{"1-4-6-7":{color:"red",number:6},"1-6-5-1":{color:"yellow",number:7},"2-4-8-6":{color:"green",number:3},"2-9-2-11":{color:"green",number:2},"2-9-1-8":{color:"purple",number:6},"3-5-4-12":{color:"cyan",number:2},"3-8-3-7":{color:"yellow",number:4},"4-4-4-1":{color:"cyan",number:1},"4-5-1-6":{color:"white",number:4},"4-6-9-8":{color:"purple",number:2},"4-7-5-1":{color:"blue",number:5},"4-8-4-8":{color:"white",number:5},"4-9-11-5":{color:"cyan",number:5},"4-12-2-10":{color:"green",number:6},"4-12-4-4":{color:"yellow",number:1},"5-4-8-5":{color:"red",number:5},"5-4-9-8":{color:"cyan",number:7},"5-8-2-11":{color:"red",number:7},"5-9-5-11":{color:"red",number:1},"5-9-2-2":{color:"red",number:4},"6-2-9-3":{color:"blue",number:3},"6-2-7-5":{color:"purple",number:5},"6-3-7-3":{color:"white",number:1},"6-5-7-3":{color:"blue",number:1},"7-3-9-5":{color:"cyan",number:3},"7-9-10-4":{color:"yellow",number:5},"8-1-7-4":{color:"red",number:2},"8-3-5-9":{color:"purple",number:7},"8-9-11-1":{color:"green",number:7},"8-11-9-5":{color:"cyan",number:4},"8-12-12-6":{color:"white",number:7},"9-1-11-4":{color:"yellow",number:3},"9-6-8-7":{color:"purple",number:4},"9-10-7-11":{color:"yellow",number:2},"9-11-3-7":{color:"blue",number:4},"9-11-7-11":{color:"blue",number:7},"9-12-4-9":{color:"purple",number:1},"10-8-4-2":{color:"red",number:3},"10-9-7-12":{color:"blue",number:6},"10-11-8-7":{color:"green",number:1},"10-11-4-9":{color:"yellow",number:6},"10-12-12-4":{color:"green",number:5},"10-12-5-7":{color:"white",number:3},"11-1-7-1":{color:"white",number:2},"11-11-3-6":{color:"white",number:6},"12-7-5-7":{color:"purple",number:3},"12-8-8-3":{color:"blue",number:2},"12-5-5-1":{color:"cyan",number:6},"12-12-4-1":{color:"green",number:4}}},solar:{2:{"1-2-6-10":{color:"green",number:4},"1-3-7-7":{color:"cyan",number:4},"1-7-2-8":{color:"white",number:6},"1-7-9-5":{color:"green",number:6},"1-10-5-2":{color:"yellow",number:2},"1-11-6-4":{color:"yellow",number:6},"2-6-8-9":{color:"purple",number:2},"2-10-7-1":{color:"purple",number:5},"2-11-1-6":{color:"blue",number:4},"2-11-12-8":{color:"blue",number:6},"3-5-2-4":{color:"white",number:7},"4-6-9-2":{color:"white",number:5},"4-8-2-6":{color:"red",number:2},"5-6-1-7":{color:"purple",number:6},"5-10-10-1":{color:"purple",number:4},"5-11-3-12":{color:"cyan",number:6},"5-11-7-2":{color:"yellow",number:5},"6-7-4-1":{color:"green",number:7},"6-8-10-7":{color:"purple",number:7},"6-11-12-8":{color:"purple",number:1},"7-4-3-7":{color:"red",number:7},"7-8-1-9":{color:"white",number:3},"7-8-3-4":{color:"green",number:3},"7-11-1-9":{color:"red",number:1},"7-12-6-5":{color:"red",number:4},"8-5-4-10":{color:"green",number:1},"8-7-4-8":{color:"blue",number:3},"8-10-7-9":{color:"white",number:1},"8-11-4-12":{color:"red",number:5},"8-12-11-7":{color:"blue",number:5},"9-4-10-9":{color:"cyan",number:7},"9-6-1-6":{color:"cyan",number:3},"9-7-3-5":{color:"yellow",number:1},"9-10-3-3":{color:"purple",number:3},"9-10-10-3":{color:"green",number:2},"9-10-11-11":{color:"blue",number:1},"9-11-2-7":{color:"white",number:2},"9-11-3-10":{color:"blue",number:2},"10-3-8-4":{color:"yellow",number:3},"10-5-6-12":{color:"cyan",number:1},"10-6-5-2":{color:"cyan",number:2},"10-10-2-6":{color:"cyan",number:5},"11-2-8-2":{color:"white",number:4},"11-4-4-6":{color:"blue",number:7},"11-9-11-4":{color:"yellow",number:7},"11-11-8-7":{color:"red",number:3},"12-1-3-10":{color:"red",number:6},"12-7-11-7":{color:"yellow",number:4},"12-10-6-5":{color:"green",number:5}},3:{"1-2-12-11":{color:"green",number:4},"1-3-4-12":{color:"cyan",number:4},"1-7-5-6":{color:"white",number:6},"1-7-10-6":{color:"green",number:6},"1-10-2-4":{color:"yellow",number:2},"1-11-6-10":{color:"yellow",number:6},"2-6-6-8":{color:"purple",number:2},"2-10-1-7":{color:"purple",number:5},"2-11-6-10":{color:"blue",number:4},"2-11-9-1":{color:"blue",number:6},"3-5-9-12":{color:"white",number:7},"4-6-10-8":{color:"white",number:5},"4-8-5-5":{color:"red",number:2},"5-6-8-9":{color:"purple",number:6},"5-10-4-8":{color:"purple",number:4},"5-11-1-8":{color:"cyan",number:6},"5-11-7-6":{color:"yellow",number:5},"6-7-1-11":{color:"green",number:7},"6-8-11-9":{color:"purple",number:7},"6-11-5-11":{color:"purple",number:1},"7-4-3-8":{color:"red",number:7},"7-8-6-5":{color:"white",number:3},"7-8-9-12":{color:"green",number:3},"7-11-7-9":{color:"red",number:1},"7-12-2-2":{color:"red",number:4},"8-5-4-5":{color:"green",number:1},"8-7-8-10":{color:"blue",number:3},"8-10-4-8":{color:"white",number:1},"8-11-10-10":{color:"red",number:5},"8-12-3-1":{color:"blue",number:5},"9-4-7-2":{color:"cyan",number:7},"9-6-9-8":{color:"cyan",number:3},"9-7-2-8":{color:"yellow",number:1},"9-10-11-6":{color:"purple",number:3},"9-10-8-3":{color:"green",number:2},"9-10-8-7":{color:"blue",number:1},"9-11-8-9":{color:"white",number:2},"9-11-9-5":{color:"blue",number:2},"10-3-9-12":{color:"yellow",number:3},"10-5-3-12":{color:"cyan",number:1},"10-6-5-7":{color:"cyan",number:2},"10-10-12-8":{color:"cyan",number:5},"11-2-9-2":{color:"white",number:4},"11-4-12-5":{color:"blue",number:7},"11-9-9-3":{color:"yellow",number:7},"11-11-1-12":{color:"red",number:3},"12-1-12-10":{color:"red",number:6},"12-7-1-12":{color:"yellow",number:4},"12-10-1-1":{color:"green",number:5}}}},S=Object.values(C.void[3]).reduce(function(e,r){var o=r.color;return Object(b.a)({},e,Object(m.a)({},o,w(y.a.name2rgb(o))))},{}),D=function(){var e=Object(n.useState)(!1),r=Object(a.a)(e,2),o=r[0],t=r[1],c=Object(n.useReducer)(function(e,r){return Object.values(Object(b.a)({},e,r))},4,function(e){return new Array(e).fill(0)}),d=Object(a.a)(c,2),y=d[0],p=d[1],h=i("config","void"),w=Object(a.a)(h,2),v=w[0],x=w[1],j=i("consoleNumber","3"),D=Object(a.a)(j,2),M=D[0],I=D[1],A=s("locked",function(e,r){switch(r.type){case"add":return Object(b.a)({},e,Object(m.a)({},"".concat(r.solution.color,"-").concat(r.solution.number),!0));case"remove":var o="".concat(r.solution.color,"-").concat(r.solution.number);return Object.keys(e).reduce(function(e,r){return r!==o?Object(b.a)({},e,Object(m.a)({},r,!0)):e},{});case"clear":return{};default:throw new Error("Unknown action type: ".concat(r.type))}},{}),R=Object(a.a)(A,2),W=R[0],B=R[1],z=s("lastLocked",function(e,r){switch(r.type){case"push":return[].concat(Object(u.a)(e),[r.solution]);case"pop":return e.slice(0,e.length-1);case"clear":return[];default:throw new Error("Unknown action type: ".concat(r.type))}},[]),J=Object(a.a)(z,2),N=J[0],q=J[1],_=Object(n.useCallback)(function(e){return null!=e&&null!=W["".concat(e.color,"-").concat(e.number)]},[W]),L=Object(n.useMemo)(function(){return new Array(4).fill(null).map(function(e,r){return Object.keys(C[v][M]).filter(function(e){return!_(C[v][M][e])}).map(function(e){return e.split("-").map(function(e){return parseInt(e,10)})}).filter(function(e){return e.slice(0,r).every(function(e,r){return e===y[r]})}).map(function(e){return e[r]})})},[v,M,y,_]),P=Object(n.useMemo)(function(){return C[v][M][y.join("-")]||{color:"grey",number:0}},[y,M,v]);return l.a.createElement("div",{style:{display:"flex",flexDirection:"column",padding:"0px 8px"}},l.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around",flexWrap:"wrap"}},l.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},l.a.createElement("h3",null,"Configuration"),l.a.createElement(f,{selected:v,onSelect:function(e){x(e),0!==Object.keys(W).length&&window.confirm("Would you like to reset the puzzle state?")&&B({type:"clear"})}}),l.a.createElement("h3",null,"Console 1"),l.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"start",minWidth:300,maxWidth:500}},l.a.createElement(g,{style:{flex:"0 1 100%"},enabled:L[0],selected:y[0],onSelect:function(e){return p({0:e})}}),l.a.createElement(g,{style:{flex:"0 .8 100%"},enabled:L[1],selected:y[1],onSelect:function(e){return p({1:e})}})),l.a.createElement("h3",null,"Console"," ",l.a.createElement("select",{value:M,onChange:function(e){return I(e.target.value)}},l.a.createElement("option",{value:2},"2"),l.a.createElement("option",{value:3},"3"))),l.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"start",minWidth:300,maxWidth:500}},l.a.createElement(g,{style:{flex:"0 1 100%"},enabled:L[2],selected:y[2],onSelect:function(e){return p({2:e})}}),l.a.createElement(g,{style:{flex:"0 .8 100%"},enabled:L[3],selected:y[3],onSelect:function(e){return p({3:e})}}))),l.a.createElement("div",{style:{display:"flex",flexDirection:"column",flex:"0 1 400px"}},l.a.createElement("h3",null,"Solution"," ",P.number>0?null==W["".concat(P.color,"-").concat(P.number)]?l.a.createElement("span",{style:{color:P.color,backgroundColor:S[P.color],padding:8,borderRadius:8}},"".concat(P.color[0].toUpperCase()).concat(P.color.substring(1))," ",P.number):l.a.createElement("span",{style:{color:"blue",padding:8}},"Previously Found"):l.a.createElement("span",{style:{color:"red",padding:8}},"Not Found")),l.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around"}},l.a.createElement("button",{style:{color:"white",backgroundColor:P.number>0?"blue":"lightblue"},disabled:0===P.number,onClick:function(){B({type:"add",solution:P}),q({type:"push",solution:P})}},"Lock Sequence"),l.a.createElement("button",{disabled:0===N.length,onClick:function(){B({type:"remove",solution:N[N.length-1]}),q({type:"pop"})}},"Undo"),l.a.createElement("button",{disabled:0===Object.keys(W).length,onClick:function(){window.confirm("Are you sure that you want to reset the puzzle state?")&&(B({type:"clear"}),q({type:"clear"}))}},"Reset")),l.a.createElement(k,{style:{backgroundColor:"lightgrey",marginTop:16},value:Object.keys(W).length,max:49}),l.a.createElement(E,{style:{marginTop:16},color:P.color,number:P.number,locked:W}))),l.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",flexWrap:"wrap",marginTop:16}},l.a.createElement("button",{style:{marginRight:"1em"},onClick:function(){return t(!0)}},"Show Instructions"),l.a.createElement("div",{style:{margin:"1em 0px"}},"Created by DeedleFake. Inspired by"," ",l.a.createElement("a",{href:"https://dm.reddit.com/r/raidsecrets/comments/bmi7fv/void_configuration_solution_solver_mobile_support/emwtklf/"},"this comment"),".")),l.a.createElement(O,{open:o,onClose:function(){return t(!1)}},l.a.createElement("h4",null,"Instructions"),l.a.createElement("p",{style:{maxWidth:600}},"To use, simply click the numbers on the corresponding consoles that are highlighted in game. Once enough numbers have been entered to determine a solution, a terminal in one of the colored rooms will be highlighted in the solution diagram. Simply go to the corresponding terminal in game and lock the sequence."),l.a.createElement("p",{style:{maxWidth:600}},"As an extra convienence, clicking the ",l.a.createElement("code",null,"Lock Sequence")," ","button below the solution will mark the current terminal as having been locked, removing it from the map and removing the terminal sequences for that solution from the possibilities.")))};o(15);c.a.render(l.a.createElement(D,null),document.querySelector("#root"))},9:function(e,r,o){e.exports=o(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.e595173f.chunk.js.map