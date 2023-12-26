"use strict";(self.webpackChunkauthform=self.webpackChunkauthform||[]).push([[93],{93:(e,t,a)=>{a.r(t),a.d(t,{default:()=>z});var n=a(824),r=a(884),s=a(5212),o=a(8410),l=a(9589),i=a(2625);var c=a(5596),m=a(2791);var d=a(2552),u=a(6992);function h(e){var t,a;const n=(0,u.Kn)(e)?e:{fallback:null!=e?e:"base"},r=(0,d.F)().__breakpoints.details.map((e=>{let{minMaxQuery:t,breakpoint:a}=e;return{breakpoint:a,query:t.replace("@media screen and ","")}})),s=r.map((e=>e.breakpoint===n.fallback)),o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{ssr:a=!0,fallback:n}=t,{getWindow:r}=(0,c.O)(),s=Array.isArray(e)?e:[e];let o=Array.isArray(n)?n:[n];o=o.filter((e=>null!=e));const[l,i]=(0,m.useState)((()=>s.map(((e,t)=>({media:e,matches:a?!!o[t]:r().matchMedia(e).matches})))));return(0,m.useEffect)((()=>{const e=r();i(s.map((t=>({media:t,matches:e.matchMedia(t).matches}))));const t=s.map((t=>e.matchMedia(t))),a=e=>{i((t=>t.slice().map((t=>t.media===e.media?{...t,matches:e.matches}:t))))};return t.forEach((e=>{"function"===typeof e.addListener?e.addListener(a):e.addEventListener("change",a)})),()=>{t.forEach((e=>{"function"===typeof e.removeListener?e.removeListener(a):e.removeEventListener("change",a)}))}}),[r]),l.map((e=>e.matches))}(r.map((e=>e.query)),{fallback:s,ssr:n.ssr});return null!=(a=null==(t=r[o.findIndex((e=>1==e))])?void 0:t.breakpoint)?a:n.fallback}function f(e,t){var a;const n=h((0,u.Kn)(t)?t:{fallback:null!=t?t:"base"}),r=(0,d.F)();if(!n)return;const s=Array.from((null==(a=r.__breakpoints)?void 0:a.keys)||[]);return function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i.AV,n=Object.keys(e).indexOf(t);if(-1!==n)return e[t];let r=a.indexOf(t);for(;r>=0;){const t=a[r];if(e.hasOwnProperty(t)){n=r;break}r-=1}if(-1!==n)return e[a[n]]}(Array.isArray(e)?Object.fromEntries(Object.entries((0,i.Yq)(e,s)).map((e=>{let[t,a]=e;return[t,a]}))):e,n,s)}var x=a(184);function p(){return(0,x.jsxs)(o.W,{maxW:"5xl",py:12,px:{base:6,md:12},children:[(0,x.jsx)(l.X,{fontSize:{base:"3xl",md:"4xl",lg:"6xl"},textAlign:"center",children:(0,x.jsx)(r.x,{as:"span",position:"relative",_after:{content:"''",width:"full",height:f({base:"20%",md:"30%"}),position:"absolute",bottom:1,left:0,bg:"blue.400",zIndex:-1},children:"Contact Me"})}),(0,x.jsx)(r.x,{textAlign:"center",color:"gray.500",fontSize:"xl",p:2,fontWeight:"semibold",children:"If you have any queries feel free to contact me."})]})}var g=a(7689),b=a(5113),j=a(2746),v=a(5597),y=(0,v.G)(((e,t)=>(0,x.jsx)(j.K,{align:"center",...e,direction:"column",ref:t})));y.displayName="VStack";var k=a(5350),w=a(1692),S=a(7943),A=a(548),O=a(467),C=a(2481),I=a(2996);var q=["h","minH","height","minHeight"],E=(0,v.G)(((e,t)=>{const a=(0,C.mq)("Textarea",e),{className:n,rows:r,...s}=(0,I.Lr)(e),o=(0,O.Y)(s),l=r?function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const a=Object.assign({},e);for(const n of t)n in a&&delete a[n];return a}(a,q):a;return(0,x.jsx)(b.m.textarea,{ref:t,rows:r,...o,className:(0,u.cx)("chakra-textarea",n),__css:l})}));E.displayName="Textarea";var N=a(9055),L=a(6355),M=a(6856);const _=function(){const e=(0,g.s0)(),[t,a]=(0,m.useState)(""),[r,s]=(0,m.useState)(""),[o,l]=(0,m.useState)(""),i=(0,b.m)(L.q1E),c=(0,b.m)(M.ixJ);return(0,x.jsx)(n.xu,{w:{base:"full",md:"auto"},pb:4,px:4,children:(0,x.jsxs)("form",{name:"contact",method:"POST","data-netlify":"true",onSubmit:a=>{var n;a.preventDefault(),fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(n={"form-name":a.target.getAttribute("name"),name:t,email:r,message:o},console.log("data",n),Object.keys(n).map((e=>encodeURIComponent(e)+"="+encodeURIComponent(n[e]))).join("&"))}).then((()=>e.push("/success"))).catch((e=>alert(e)))},children:[(0,x.jsx)("input",{type:"hidden",name:"form-name",value:"contact"}),(0,x.jsxs)(y,{spacing:6,maxW:"lg",w:{md:"md"},mx:"auto",children:[(0,x.jsx)(k.NI,{id:"lastName",children:(0,x.jsxs)(w.B,{children:[(0,x.jsx)(S.Z,{pointerEvents:"none",children:(0,x.jsx)(i,{color:"gray.300"})}),(0,x.jsx)(A.I,{color:"gray.700",value:t,placeholder:"name",onChange:e=>a(e.target.value),onBlur:e=>a(e.target.value.trim()),required:!0})]})}),(0,x.jsx)(k.NI,{id:"email",children:(0,x.jsxs)(w.B,{children:[(0,x.jsx)(S.Z,{pointerEvents:"none",children:(0,x.jsx)(c,{color:"gray.300"})}),(0,x.jsx)(A.I,{value:r,type:"email",placeholder:"email address",onChange:e=>s(e.target.value),onBlur:e=>s(e.target.value.trim()),required:!0})]})}),(0,x.jsx)(k.NI,{id:"message",children:(0,x.jsx)(E,{name:"message",placeholder:"Message",mt:1,rows:6,shadow:"sm",focusBorderColor:"brand.400",fontSize:{sm:"sm"},value:o,onChange:e=>l(e.target.value),required:!0})}),(0,x.jsx)(N.z,{type:"submit",size:"lg",colorScheme:"blue",children:"Send Message"})]})]})})};function z(){return(0,x.jsx)(s.Z,{children:(0,x.jsxs)(n.xu,{bg:"white",children:[(0,x.jsx)(p,{}),(0,x.jsx)(_,{}),(0,x.jsxs)(r.x,{textAlign:"center",pb:6,color:"gray.600",children:["or email me at"," ",(0,x.jsx)(n.xu,{as:"a",href:"mailto:testenet@ukr.net",color:"blue.500",children:"testenet@ukr.net"})]})]})})}}}]);
//# sourceMappingURL=93.1711ceee.chunk.js.map