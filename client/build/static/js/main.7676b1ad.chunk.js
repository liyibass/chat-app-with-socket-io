(this.webpackJsonpgrid=this.webpackJsonpgrid||[]).push([[0],{101:function(e,a,t){},102:function(e,a,t){},107:function(e,a,t){},143:function(e,a){},146:function(e,a,t){},147:function(e,a,t){},148:function(e,a,t){},193:function(e,a,t){},195:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(8),o=t.n(r),s=(t(101),t(7)),m=t(40),l=t(33),i=(t(102),t(49)),u=t(226),f=t(232),E=t(229),v=t(231),g=Object(u.a)((function(e){return{formControl:{minWidth:"100%",textAlign:"left"},selectEmpty:{marginTop:e.spacing(2),background:"white"}}}));var p=function(){var e=Object(n.useState)({name:"",room:"A"}),a=Object(l.a)(e,2),t=a[0],r=a[1],o=g();return c.a.createElement("div",{className:"Join"},c.a.createElement("div",{className:"joinInnerContainer"},c.a.createElement("h1",{className:"heading"},"Chat"),c.a.createElement("div",null,c.a.createElement("input",{type:"text",placeholder:"Name",className:"joinInput",onChange:function(e){r(Object(m.a)(Object(m.a)({},t),{},{name:e.target.value}))}})),c.a.createElement("div",null,c.a.createElement(E.a,{className:o.formControl},c.a.createElement(v.a,{value:t.room,onChange:function(e){r(Object(m.a)(Object(m.a)({},t),{},{room:e.target.value}))},displayEmpty:!0,className:o.selectEmpty,inputProps:{"aria-label":"Without label"}},c.a.createElement(f.a,{value:"A"},"Room A"),c.a.createElement(f.a,{value:"B"},"Room B"),c.a.createElement(f.a,{value:"C"},"Room C")))),c.a.createElement(i.b,{to:"chat?name=".concat(t.name,"&room=").concat(t.room),onClick:function(e){return t.name&&t.room?null:e.preventDefault()}},c.a.createElement("button",{className:"button mt-20",type:"submit"},"Sign in"))))},d=t(92),h=(t(107),t(89)),b=t.n(h),N=t(90),j=t.n(N);t(146);var C=function(e){var a=e.room;return c.a.createElement("div",{className:"InfoBar"},c.a.createElement("div",{className:"leftInnerContainer"},c.a.createElement("h3",null,a)),c.a.createElement("div",{className:"rightInnerContainer"},c.a.createElement("a",{href:"/"},c.a.createElement("i",{className:"far fa-times-circle"}))))};t(147);var y=function(e){var a=e.message,t=e.setMessage,n=e.sendMessage;return c.a.createElement("form",{className:"Input"},c.a.createElement("input",{type:"text",className:"input",placeholder:"Type a message...",value:a,onChange:function(e){return t(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?n(e):null}}),c.a.createElement("button",{className:"sendButton",onClick:function(e){return n(e)}},"Send"))},O=(t(148),t(91)),k=t.n(O),x=(t(193),t(63)),w=t.n(x);var B=function(e){var a=e.message,t=a.user,n=a.text,r=!1,o=e.name.trim().toLowerCase();return t===o&&(r=!0),r?c.a.createElement("div",{className:"Message justifyEnd"},c.a.createElement("p",{className:"sentText pr-10"},o),c.a.createElement("div",{className:"messageBox backgroundBlue"},c.a.createElement("p",{className:"messageText colorWhite"},w.a.emojify(n)))):c.a.createElement("div",{className:"Message justifyStart"},c.a.createElement("div",{className:"messageBox backgroundLight"},c.a.createElement("p",{className:"messageText colorDark"},w.a.emojify(n))),c.a.createElement("p",{className:"sentText pl-10"},t))};var M,I=function(e){var a=e.messages,t=e.name;return c.a.createElement(k.a,{className:"MessagesContainer"},a.map((function(e,a){return c.a.createElement("div",{key:a},c.a.createElement(B,{message:e,name:t}))})))};var S=function(e){var a=e.location,t=Object(n.useState)({name:"",room:""}),r=Object(l.a)(t,2),o=r[0],s=r[1],m=Object(n.useState)(""),i=Object(l.a)(m,2),u=i[0],f=i[1],E=Object(n.useState)([]),v=Object(l.a)(E,2),g=v[0],p=v[1];return Object(n.useEffect)((function(){var e=b.a.parse(a.search),t=e.name,n=e.room;return s({name:t,room:n}),(M=j()("localhost:5000")).emit("join",{name:t,room:n},(function(e){e&&alert(e)})),function(){M.emit("disconnect"),M.off()}}),["localhost:5000",a.search]),Object(n.useEffect)((function(){M.on("message",(function(e){p([].concat(Object(d.a)(g),[e]))}))}),[g]),c.a.createElement("div",{className:"Chat"},c.a.createElement("div",{className:"ChatContainer"},c.a.createElement(C,{room:o.room}),c.a.createElement(I,{messages:g,name:o.name}),c.a.createElement(y,{message:u,setMessage:f,sendMessage:function(e){e.preventDefault(),u&&M.emit("sendMessage",u,(function(){return f("")}))}})))};var T=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(s.c,null,c.a.createElement(s.a,{exact:!0,path:"/",component:p}),c.a.createElement(s.a,{path:"/chat",component:S})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(194);o.a.render(c.a.createElement(i.a,null,c.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},96:function(e,a,t){e.exports=t(195)}},[[96,1,2]]]);
//# sourceMappingURL=main.7676b1ad.chunk.js.map