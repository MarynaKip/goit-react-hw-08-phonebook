(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[1],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(52);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(l){a=!0,i=l}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},119:function(e,t,n){"use strict";n.r(t);var r=n(116),a=n(0),i=n(51),o=n(15),c=n(33),l=n(114),s=n(3),u=Object(i.a)({login:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},form:{display:"flex",flexDirection:"column"},label:{display:"flex",justifyContent:"space-between"},button:{height:"25px"}});t.default=function(){var e=u(),t=Object(o.b)(),n=Object(a.useState)("test.user.two@mail.com"),i=Object(r.a)(n,2),b=i[0],j=i[1],f=Object(a.useState)("12345678"),p=Object(r.a)(f,2),d=p[0],h=p[1],m=Object(o.c)((function(e){return e.user.isLoading}));return Object(s.jsx)("div",{className:e.login,children:m?Object(s.jsx)("p",{children:"Loading..."}):Object(s.jsxs)("form",{className:e.form,onSubmit:function(e){e.preventDefault();var n={email:b,password:d};t(Object(c.b)(n))},children:[Object(s.jsxs)("label",{className:e.label,children:[Object(s.jsx)("span",{children:"email: "}),Object(s.jsx)("input",{type:"email",value:b,onChange:function(e){return j(e.target.value)}})]}),Object(s.jsxs)("label",{className:e.label,children:[Object(s.jsx)("span",{children:"password: "}),Object(s.jsx)("input",{type:"password",value:d,onChange:function(e){return h(e.target.value)}})]}),Object(s.jsx)(l.a,{type:"submit",className:e.button,variant:"contained",color:"primary",children:"Login"})]})})}}}]);
//# sourceMappingURL=login-page.fc048b39.chunk.js.map