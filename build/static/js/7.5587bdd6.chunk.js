(this["webpackJsonpauth-reload"]=this["webpackJsonpauth-reload"]||[]).push([[7],{178:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var r=n(78),a=n(64),c=n(90),i=n(4);function o(){return Object(i.jsxs)(r.b,{maxW:"5xl",py:12,px:{base:6,md:12},children:[Object(i.jsx)(r.d,{fontSize:{base:"3xl",md:"4xl",lg:"6xl"},textAlign:"center",children:Object(i.jsx)(r.f,{as:"span",position:"relative",_after:{content:"''",width:"full",height:Object(c.a)({base:"20%",md:"30%"}),position:"absolute",bottom:1,left:0,bg:"blue.400",zIndex:-1},children:"Contact Me"})}),Object(i.jsx)(r.f,{textAlign:"center",color:"gray.500",fontSize:"xl",p:2,fontWeight:"semibold",children:"If you have any queries feel free to contact me."})]})}var u=n(35),s=n(0),l=n(7),b=n(3),f=n(88),d=n(91),j=n(92),m=n(80),h=n(157),O=n(159);var p=function(){var e=Object(l.f)(),t=Object(s.useState)(""),n=Object(u.a)(t,2),a=n[0],c=n[1],o=Object(s.useState)(""),p=Object(u.a)(o,2),v=p[0],x=p[1],g=Object(s.useState)(""),y=Object(u.a)(g,2),w=y[0],k=y[1],S=Object(b.d)(h.b),E=Object(b.d)(O.a);return Object(i.jsx)(r.a,{w:{base:"full",md:"auto"},pb:4,px:4,children:Object(i.jsxs)("form",{name:"contact",method:"POST","data-netlify":"true",onSubmit:function(t){var n;t.preventDefault(),fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(n={"form-name":t.target.getAttribute("name"),name:a,email:v,message:w},console.log("data",n),Object.keys(n).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(n[e])})).join("&"))}).then((function(){return e.push("/success")})).catch((function(e){return alert(e)}))},children:[Object(i.jsx)("input",{type:"hidden",name:"form-name",value:"contact"}),Object(i.jsxs)(r.g,{spacing:6,maxW:"lg",w:{md:"md"},mx:"auto",children:[Object(i.jsx)(f.a,{id:"lastName",children:Object(i.jsxs)(d.b,{children:[Object(i.jsx)(d.c,{pointerEvents:"none",children:Object(i.jsx)(S,{color:"gray.300"})}),Object(i.jsx)(d.a,{color:"gray.700",value:a,placeholder:"name",onChange:function(e){return c(e.target.value)},onBlur:function(e){return c(e.target.value.trim())},required:!0})]})}),Object(i.jsx)(f.a,{id:"email",children:Object(i.jsxs)(d.b,{children:[Object(i.jsx)(d.c,{pointerEvents:"none",children:Object(i.jsx)(E,{color:"gray.300"})}),Object(i.jsx)(d.a,{value:v,type:"email",placeholder:"email address",onChange:function(e){return x(e.target.value)},onBlur:function(e){return x(e.target.value.trim())},required:!0})]})}),Object(i.jsx)(f.a,{id:"message",children:Object(i.jsx)(j.a,{name:"message",placeholder:"Message",mt:1,rows:6,shadow:"sm",focusBorderColor:"brand.400",fontSize:{sm:"sm"},value:w,onChange:function(e){return k(e.target.value)},required:!0})}),Object(i.jsx)(m.a,{type:"submit",size:"lg",colorScheme:"blue",children:"Send Message"})]})]})})};function v(){return Object(i.jsx)(a.a,{children:Object(i.jsxs)(r.a,{bg:"white",children:[Object(i.jsx)(o,{}),Object(i.jsx)(p,{}),Object(i.jsxs)(r.f,{textAlign:"center",pb:6,color:"gray.600",children:["or email me at"," ",Object(i.jsx)(r.a,{as:"a",href:"mailto:testenet@ukr.net",color:"blue.500",children:"testenet@ukr.net"})]})]})})}},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(3),a=n(1),c=n(0),i=n.n(c),o=n(52);a.z?c.useLayoutEffect:c.useEffect;a.b;a.b;function u(e,t){var n,c=function(e){void 0===e&&(e="base");var t=Object(r.k)().__breakpoints,n=Object(o.b)(),a=i.a.useMemo((function(){var e;return null!=(e=null==t?void 0:t.details.map((function(e){var t=e.minMaxQuery;return{breakpoint:e.breakpoint,query:t.replace("@media screen and ","")}})))?e:[]}),[t]),c=i.a.useState((function(){if(e){var t=a.find((function(t){return t.breakpoint===e}));if(t)return t.breakpoint}if(n.window.matchMedia){var r=a.find((function(e){var t=e.query;return n.window.matchMedia(t).matches}));if(r)return r.breakpoint}})),u=c[0],s=c[1];return i.a.useEffect((function(){var e=a.map((function(e){var t=e.breakpoint,r=e.query,a=n.window.matchMedia(r);a.matches&&s(t);var c=function(e){e.matches&&s(t)};return"function"===typeof a.addEventListener?a.addEventListener("change",c):a.addListener(c),function(){"function"===typeof a.removeEventListener?a.removeEventListener("change",c):a.removeListener(c)}}));return function(){e.forEach((function(e){return e()}))}}),[a,t,n.window]),u}(t),u=Object(r.k)();if(c){var s=Array.from((null==(n=u.__breakpoints)?void 0:n.keys)||[]);return function(e,t,n){void 0===n&&(n=a.g);var r=Object.keys(e).indexOf(t);if(-1!==r)return e[t];for(var c=n.indexOf(t);c>=0;){if(null!=e[n[c]]){r=c;break}c-=1}return-1!==r?e[n[r]]:void 0}(Object(a.y)(e)?Object(a.q)(Object.entries(Object(a.f)(e,s)).map((function(e){return[e[0],e[1]]}))):e,c,s)}}},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(88),a=n(3),c=n(1),i=n(0);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var u=["className","rows"],s=Object(a.e)((function(e,t){var n=Object(a.i)("Textarea",e),s=Object(a.f)(e),l=s.className,b=s.rows,f=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(s,u),d=Object(r.d)(f),j=b?Object(c.P)(n,["h","minH","height","minHeight"]):n;return i.createElement(a.d.textarea,o({ref:t,rows:b},d,{className:Object(c.k)("chakra-textarea",l),__css:j}))}));c.b&&(s.displayName="Textarea")}}]);
//# sourceMappingURL=7.5587bdd6.chunk.js.map