(this["webpackJsonpcolor-257"]=this["webpackJsonpcolor-257"]||[]).push([[0],{32:function(e,a,t){e.exports=t(65)},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},46:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(16),o=t.n(r),c=(t(37),t(6)),s=t(13),i=t(2),m=t(3),u=(t(38),t(39),t(40),n.a.createContext({isAuthenticated:!1,username:"",signOut:function(){}})),d=function(){return n.a.createElement(u.Consumer,null,(function(e){var a=e.isAuthenticated,t=e.username,l=e.signOut;return n.a.createElement("header",{className:"header"},n.a.createElement(i.b,{to:"/"},"Color 257"),a?n.a.createElement("div",null,n.a.createElement(i.b,{to:"/user/".concat(t)},t),n.a.createElement("button",{className:"sign-out",onClick:l},n.a.createElement("i",{className:"fas fa-sign-out-alt"}))):n.a.createElement(i.b,{to:"/login"},"Sign In"))}))},E=function(){var e=function(){var e=function(e){return n.a.createElement("div",{class:"color-name"},n.a.createElement(i.b,{to:e.to},e.name))},a=function(e){return n.a.createElement("div",{class:"color-username"},n.a.createElement(i.b,{to:e.to},e.username))};return n.a.createElement("div",{class:"color-container"},n.a.createElement("div",{class:"color"}),n.a.createElement("div",{class:"color-text"},n.a.createElement(e,{to:"/color/1",name:"Color name"}),n.a.createElement(a,{to:"/user/santiago",username:"Username"})))};return n.a.createElement("div",{class:"color-list"},n.a.createElement(e,null),n.a.createElement(e,null),n.a.createElement(e,null),n.a.createElement(e,null),n.a.createElement(e,null),n.a.createElement(e,null),n.a.createElement(e,null),n.a.createElement(e,null))},p=function(){var e=function(){return n.a.createElement("div",{class:"banner"},n.a.createElement("p",null,"Some message."),n.a.createElement(i.b,{to:"/color/create"},"Create Color"))};return n.a.createElement(n.a.Fragment,null,n.a.createElement(d,null),n.a.createElement(e,null),n.a.createElement(E,null))},g=(t(46),function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("header",{class:"register-header"},n.a.createElement(i.b,{to:"/",class:"register-h1"},"Color 257"),n.a.createElement("p",{class:"register-p"},"Register to start sharing colors!")),n.a.createElement("main",{class:"register-main"},n.a.createElement("button",{class:"register-google"},"Google"),n.a.createElement("button",{class:"register-facebook"},"Facebook"),n.a.createElement(i.b,{to:"/register/form"},"By email"),n.a.createElement("hr",{class:"register-hr"}),n.a.createElement(i.b,{to:"/login"},"Log In")))}),b=t(14),f=t(15),v=t.n(f),h=function(){var e=Object(l.useState)({username:"",email:"",password:""}),a=Object(s.a)(e,2),t=a[0],r=a[1],o=function(e){r(Object(c.a)(Object(c.a)({},t),{},Object(b.a)({},e.target.name,e.target.value)))};return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.b,{to:"/"},"Color 257"),n.a.createElement("main",{className:"registration-form-main"},n.a.createElement("form",{onSubmit:function(e){v.a.post("".concat("https://color-257.herokuapp.com/api","/users"),Object(c.a)({},t)).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),e.preventDefault()}},n.a.createElement("div",{className:"registration-form-input-set"},n.a.createElement("div",{className:"regristration-form-input-group"},n.a.createElement("label",{className:"registration-form-label"},"Username"),n.a.createElement("br",null),n.a.createElement("input",{type:"text",name:"username",className:"registration-form-text-input",value:t.username,onChange:o})),n.a.createElement("div",{className:"regristration-form-input-group"},n.a.createElement("label",{className:"registration-form-label"},"Email"),n.a.createElement("br",null),n.a.createElement("input",{type:"email",name:"email",className:"registration-form-text-input",value:t.email,onChange:o})),n.a.createElement("div",{className:"regristration-form-input-group"},n.a.createElement("label",{className:"registration-form-label"},"Password"),n.a.createElement("br",null),n.a.createElement("input",{type:"password",name:"password",className:"registration-form-text-input",value:t.password,onChange:o}))),n.a.createElement("p",null,"By signing up you agree to both our Terms and Conditions, and our Privacy Policy."),n.a.createElement("input",{type:"submit",value:"Register"}))))},x=function(e){var a=Object(l.useState)({email:"",password:""}),t=Object(s.a)(a,2),r=t[0],o=t[1],m=function(e){o(Object(c.a)(Object(c.a)({},r),{},Object(b.a)({},e.target.name,e.target.value)))};return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.b,{to:"/"},"Color 257"),n.a.createElement("main",null,n.a.createElement("form",{onSubmit:function(a){a.preventDefault(),v.a.post("".concat("https://color-257.herokuapp.com/api","/sessions"),Object(c.a)({},r)).then((function(a){var t=new Date(a.data.expiration).toUTCString();document.cookie="sessionId=".concat(a.data._id,"; expires=").concat(t),e.setAuth({isAuthenticated:!0,username:a.data.user})})).catch((function(e){console.log(e.response.data)}))}},n.a.createElement("div",{class:"registration-form-input-set"},n.a.createElement("div",{class:"regristration-form-input-group"},n.a.createElement("label",{class:"registration-form-label"},"Email"),n.a.createElement("br",null),n.a.createElement("input",{type:"email",name:"email",class:"registration-form-text-input",value:r.email,onChange:m})),n.a.createElement("div",{class:"regristration-form-input-group"},n.a.createElement("label",{class:"registration-form-label"},"Password"),n.a.createElement("br",null),n.a.createElement("input",{type:"password",name:"password",class:"registration-form-text-input",value:r.password,onChange:m}))),n.a.createElement("input",{type:"submit",value:"Log In"})),n.a.createElement("hr",null),n.a.createElement(i.b,{to:"/register"},"Register"),n.a.createElement("p",null,"Forgot password")))},N=t(76),y=function(){var e=function(){return n.a.createElement("div",{className:"color-control"},n.a.createElement("div",{className:"color"}),n.a.createElement("button",{className:"color-control-reroll"},"Reroll"))},a=function(){return n.a.createElement("form",null,n.a.createElement("div",null,n.a.createElement("label",null,"Color Name"),n.a.createElement("br",null),n.a.createElement("input",{type:"text",name:"name"})),n.a.createElement("div",null,n.a.createElement("label",null,"Description"),n.a.createElement("textarea",{name:"description"})))},t=function(){var e=function(){return n.a.createElement(N.a,{min:0,max:359,value:[20,339]})},a=function(){return n.a.createElement(N.a,{min:0,max:765,value:[255,510]})},t=function(){return n.a.createElement(N.a,{min:0,max:100,value:[25,75]})};return n.a.createElement("div",{className:"color-settings"},n.a.createElement("h2",{className:"color-settings-h2"},"Settings"),n.a.createElement("div",{className:"color-settings-input-group"},n.a.createElement("label",{className:"color-settings-label"},"Amount of colors:"),n.a.createElement("select",{name:"colorsAmount",className:"color-settings-select",defaultValue:"1"},n.a.createElement("option",{value:"1",className:"color-settings-option"},"1"),n.a.createElement("option",{value:"2"},"2"))),n.a.createElement("div",{className:"color-settings-input-group"},n.a.createElement("label",{className:"color-settings-label"},"Hue"),n.a.createElement(e,null)),n.a.createElement("div",{className:"color-settings-input-group"},n.a.createElement("label",{className:"color-settings-label"},"Lightness"),n.a.createElement(a,null)),n.a.createElement("div",{className:"color-settings-input-group"},n.a.createElement("label",{className:"color-settings-label"},"Gradient Separation"),n.a.createElement(t,null)))};return n.a.createElement(n.a.Fragment,null,n.a.createElement(d,null),n.a.createElement(e,null),n.a.createElement(a,null),n.a.createElement(t,null))},w=(t(64),function(){return n.a.createElement("div",{className:"color-detail-color"})}),O=function(){return n.a.createElement("div",{className:"color-detail-color-info"},n.a.createElement(j,null),n.a.createElement(C,null))},j=function(){return n.a.createElement("div",{className:"color-detail-color-text-info"},n.a.createElement(i.b,{to:"/user/santiago",className:"color-detail-color-text-info-username"},"Username"),n.a.createElement("div",{className:"color-detail-color-text-info-name"},"Color Name"),n.a.createElement("div",{className:"color-detail-color-text-info-description"},"Description"))},C=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"color-detail-color-data-group"},n.a.createElement("label",{className:"color-data-color-data-label"},"Colors"),n.a.createElement("div",{className:"color-detail-color-data-color-list"},n.a.createElement("div",{className:"color-detail-color-data-color"},n.a.createElement("span",{className:"color-detail-color-data-color-square"}),n.a.createElement("span",{className:"color-detail-color-data-color-hex"},"#000000")),n.a.createElement("div",{className:"color-detail-color-data-color"},n.a.createElement("span",{className:"color-detail-color-data-color-square"}),n.a.createElement("span",{className:"color-detail-color-data-color-hex"},"#000000")))),n.a.createElement("div",{className:"color-detail-color-data-group"},n.a.createElement("label",{className:"color-data-color-data-label"},"Angle"),n.a.createElement("div",{className:"color-detail-color-data-color-number"},"135deg")),n.a.createElement("div",{className:"color-detail-color-data-group"},n.a.createElement("label",{className:"color-data-color-data-label"},"Hue"),n.a.createElement("div",{className:"color-detail-color-data-color-number"},"180")),n.a.createElement("div",{className:"color-detail-color-data-group"},n.a.createElement("label",{className:"color-data-color-data-label"},"Lightness"),n.a.createElement("div",{className:"color-detail-color-data-color-number"},"400")),n.a.createElement("div",{className:"color-detail-color-data-group"},n.a.createElement("label",{className:"color-data-color-data-label"},"Gradient Separation"),n.a.createElement("div",{className:"color-detail-color-data-color-number"},"50")),n.a.createElement("button",null,"Share"))},k=function(){return n.a.createElement("div",{className:"color-detail"},n.a.createElement(d,null),n.a.createElement(w,null),n.a.createElement(O,null))},S=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(d,null),n.a.createElement("h1",null,"Username"),n.a.createElement("div",{style:{display:"flex",flexFlow:"row wrap",justifyContent:"space-between"}},n.a.createElement("div",{style:{width:"100%",border:"1px solid #000",boxSizing:"border-box",margin:"8px 0",padding:"8px"}},n.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},n.a.createElement("div",{style:{width:"75px",height:"75px",background:"#000",borderRadius:"50%"}}),n.a.createElement("div",{style:{width:"75px",height:"75px",background:"#000",borderRadius:"50%"}})),n.a.createElement(i.b,{to:"/group/1"},"Group Name")),n.a.createElement("div",{style:{width:"100%",border:"1px solid #000",boxSizing:"border-box",margin:"8px 0",padding:"8px"}},n.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},n.a.createElement("div",{style:{width:"75px",height:"75px",background:"#000",borderRadius:"50%"}}),n.a.createElement("div",{style:{width:"75px",height:"75px",background:"#000",borderRadius:"50%"}})),n.a.createElement(i.b,{to:"/group/1"},"Group Name")),n.a.createElement("div",{style:{width:"100%",border:"1px solid #000",boxSizing:"border-box",margin:"8px 0",padding:"8px"}},n.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},n.a.createElement("div",{style:{width:"75px",height:"75px",background:"#000",borderRadius:"50%"}}),n.a.createElement("div",{style:{width:"75px",height:"75px",background:"#000",borderRadius:"50%"}})),n.a.createElement(i.b,{to:"/group/1"},"Group Name")),n.a.createElement("div",{style:{width:"100%",border:"1px solid #000",boxSizing:"border-box",margin:"8px 0",padding:"8px"}},n.a.createElement("div",{style:{display:"flex",justifyContent:"space-around"}},n.a.createElement("div",{style:{width:"75px",height:"75px",background:"#000",borderRadius:"50%"}}),n.a.createElement("div",{style:{width:"75px",height:"75px",background:"#000",borderRadius:"50%"}})),n.a.createElement(i.b,{to:"/group/1"},"Group Name"))))},R=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(d,null),n.a.createElement(i.b,{to:"/user/santiago"},"Username"),n.a.createElement("div",null,"Nombre de Grupo"),n.a.createElement("div",null,"Descripci\xf3n"),n.a.createElement(E,null))};var A=function(){var e=Object(l.useState)({isAuthenticated:!1,username:"",signOut:function(){}}),a=Object(s.a)(e,2),t=a[0],r=a[1],o=Object(l.useState)(""),d=Object(s.a)(o,2),E=d[0],b=d[1];Object(l.useEffect)((function(){b(function(e){for(var a=e+"=",t=decodeURIComponent(document.cookie).split(";"),l=0;l<t.length;l++){for(var n=t[l];" "===n.charAt(0);)n=n.substring(1);if(0===n.indexOf(a))return n.substring(a.length,n.length)}return""}("sessionId"))}),[t,E]);var f=function(){var e;e="sessionId",document.cookie=e+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;",b("")};return Object(l.useEffect)((function(){""!==E?v.a.get("".concat("https://color-257.herokuapp.com/api","/sessions/").concat(E,"/user")).then((function(e){r((function(a){return Object(c.a)(Object(c.a)({},a),{},{isAuthenticated:!0,username:e.data.username,signOut:f})}))})).catch((function(e){console.log(e)})):r((function(e){return Object(c.a)(Object(c.a)({},e),{},{isAuthenticated:!1,username:"",signOut:f})}))}),[E]),n.a.createElement(u.Provider,{value:t},n.a.createElement(i.a,null,n.a.createElement(m.c,null,n.a.createElement(m.a,{path:"/register/form"},n.a.createElement(h,null)),n.a.createElement(m.a,{path:"/register"},n.a.createElement(g,null)),n.a.createElement(m.a,{path:"/login"},n.a.createElement(x,{setAuth:r})),n.a.createElement(m.a,{path:"/user/:username"},n.a.createElement(S,null)),n.a.createElement(m.a,{path:"/color/create"},n.a.createElement(y,null)),n.a.createElement(m.a,{path:"/color/:id"},n.a.createElement(k,null)),n.a.createElement(m.a,{path:"/group/:id"},n.a.createElement(R,null)),n.a.createElement(m.a,{path:"/"},n.a.createElement(p,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.4cfa0818.chunk.js.map