_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{"5QeG":function(t,s,e){"use strict";e.r(s),e.d(s,"default",(function(){return b}));var a=e("o0o1"),n=e.n(a),r=e("HaE+"),o=e("1OyB"),c=e("vuIU"),i=e("JX7q"),l=e("Ji7U"),u=e("md7G"),p=e("foSv"),m=e("MX0m"),h=e.n(m),x=e("q1tI"),g=e.n(x),f=e("3M1/"),j=e("nsYN"),d=g.a.createElement;function N(t){var s=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,a=Object(p.a)(t);if(s){var n=Object(p.a)(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return Object(u.a)(this,e)}}var b=function(t){Object(l.a)(e,t);var s=N(e);function e(t){var a;return Object(o.a)(this,e),(a=s.call(this,t)).state={errorMsg:null},a.submitButton=a.submitButton.bind(Object(i.a)(a)),a}return Object(c.a)(e,[{key:"submitButton",value:function(){var t=this,s=document.getElementById("emailInput"),e=document.getElementById("passwordInput");fetch("/api/login",{method:"post",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({email:s.value,password:e.value})}).then((function(s){200==s.status?window.location.href="/":s.text().then((function(s){t.setState({errorMsg:s})}))}))}},{key:"render",value:function(){return d("div",{className:"jsx-2532877314"},d(f.a,null,d(j.a,{user:this.props.user}),d("div",{id:"cont",className:"jsx-2532877314"},d("h1",{className:"jsx-2532877314"},"Login"),this.props.user&&d("div",{className:"jsx-2532877314"},"Looks like you're already logged in.  ",d("a",{href:"/logoug",className:"jsx-2532877314"},"Click here")," to logout."),this.state.errorMsg&&d("div",{className:"jsx-2532877314 errorContainer"},this.state.errorMsg),!this.props.user&&d("div",{className:"jsx-2532877314"},d("label",{className:"jsx-2532877314"},"Email"),d("input",{type:"text",id:"emailInput",className:"jsx-2532877314"}),d("label",{className:"jsx-2532877314"},"Password"),d("input",{type:"password",id:"passwordInput",className:"jsx-2532877314"}),d("button",{onClick:this.submitButton,className:"jsx-2532877314"},"Login"),d("br",{className:"jsx-2532877314"}),d("br",{className:"jsx-2532877314"}),"Don't have an account?  ",d("a",{href:"/createaccount",className:"jsx-2532877314"},"Go here")," to create one."))),d(h.a,{id:"2532877314"},["#cont.jsx-2532877314{padding:30px;background-color:hsl(209,10%,25%);max-width:400px;margin-left:auto;margin-right:auto;margin-top:20px;}","h1.jsx-2532877314{text-align:center;}","label.jsx-2532877314{display:block;margin-bottom:5px;margin-top:20px;}","input.jsx-2532877314{width:100%;}","button.jsx-2532877314{display:block;margin-top:30px;}"]))}}],[{key:"getInitialProps",value:function(){var t=Object(r.a)(n.a.mark((function t(s){var e,a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=s.req,s.query,a=e&&e.session&&e.session.user?e.session.user:null,t.abrupt("return",{user:a});case 3:case"end":return t.stop()}}),t)})));return function(s){return t.apply(this,arguments)}}()}]),e}(g.a.Component)},jRKa:function(t,s,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return e("5QeG")}])},nsYN:function(t,s,e){"use strict";e.d(s,"a",(function(){return x}));var a=e("1OyB"),n=e("vuIU"),r=e("Ji7U"),o=e("md7G"),c=e("foSv"),i=e("MX0m"),l=e.n(i),u=e("q1tI"),p=e.n(u),m=p.a.createElement;function h(t){var s=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,a=Object(c.a)(t);if(s){var n=Object(c.a)(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return Object(o.a)(this,e)}}var x=function(t){Object(r.a)(e,t);var s=h(e);function e(){return Object(a.a)(this,e),s.apply(this,arguments)}return Object(n.a)(e,[{key:"render",value:function(){return m("div",{id:"topContainer",className:"jsx-3421337869"},m("div",{className:"jsx-3421337869"},m("a",{href:"/",className:"jsx-3421337869"},"Nimp ",m("span",{style:{color:"hsl(0, 0%, 60%)"},className:"jsx-3421337869"}," \xa0 (Node Based Image Manipulation Program)"))),m("div",{style:{textAlign:"right"},className:"jsx-3421337869"},m("a",{href:"https://www.patreon.com/dan335",className:"jsx-3421337869 topLink"},m("img",{src:"/static/patreonIcon.png",srcSet:"/static/patreonIcon.png 1x, /static/patreonIcon_highres.png 2x",className:"jsx-3421337869"})),m("a",{href:"https://github.com/dan335/nimp",className:"jsx-3421337869 topLink"},m("img",{src:"/static/githubLogo.png",srcSet:"/static/githubLogo.png 1x, /static/githubLogo_highres.png 2x",className:"jsx-3421337869"})),m("a",{href:"https://trello.com/b/s5yHz4z5/nimp",className:"jsx-3421337869 topLink"},m("img",{src:"/static/trelloIcon.png",srcSet:"/static/trelloIcon.png 1x, /static/trelloIcon_highres.png 2x",className:"jsx-3421337869"})),m("a",{href:"https://discord.gg/vgwW6WX",className:"jsx-3421337869 topLink"},m("img",{src:"/static/discordIcon.png",srcSet:"/static/discordIcon.png 1x, /static/discordIcon_highres.png 2x",className:"jsx-3421337869"})),m("a",{href:"https://twitter.com/dan335",className:"jsx-3421337869 topLink"},m("img",{src:"/static/twitterIcon.png",srcSet:"/static/twitterIcon.png 1x, /static/twitterIcon_highres.png 2x",className:"jsx-3421337869"})),m("a",{href:"mailto:dan@nimp.app",className:"jsx-3421337869 topLink"},m("img",{src:"/static/emailIcon.png",srcSet:"/static/emailIcon.png 1x, /static/emailIcon_highres.png 2x",className:"jsx-3421337869"})),m("a",{href:"/graphs",className:"jsx-3421337869 topButton"},m("button",{className:"jsx-3421337869"},"Public Graphs")),this.props.user&&m("span",{className:"jsx-3421337869"},m("a",{href:"/u/"+this.props.user._id,className:"jsx-3421337869 topButton"},m("button",{className:"jsx-3421337869"},this.props.user.username)),m("a",{href:"/logout",className:"jsx-3421337869"},m("button",{className:"jsx-3421337869"},"Logout"))),!this.props.user&&m("span",{className:"jsx-3421337869"},m("a",{href:"/login",className:"jsx-3421337869 topButton"},m("button",{className:"jsx-3421337869"},"Login")),m("a",{href:"/createaccount",className:"jsx-3421337869"},m("button",{className:"jsx-3421337869"},"Create Account")))),m(l.a,{id:"3421337869"},["#topContainer.jsx-3421337869{line-height:36px;padding:0 10px;background-color:hsl(209,10%,25%);display:grid;grid-template-columns:1fr 1fr;}","#topContainer.jsx-3421337869 a.jsx-3421337869{color:#fff;}","#topContainer.jsx-3421337869 img.jsx-3421337869{vertical-align:text-bottom;height:20px;}","#topContainer.jsx-3421337869 img.jsx-3421337869:hover{-webkit-filter:opacity(50%);filter:opacity(50%);}",".topLink.jsx-3421337869{margin-right:15px;}",".topButton.jsx-3421337869{margin-right:2px;}"]))}}]),e}(p.a.Component)}},[["jRKa",0,2,1,3]]]);