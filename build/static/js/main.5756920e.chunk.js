(this.webpackJsonpstrangers_things_react=this.webpackJsonpstrangers_things_react||[]).push([[0],{20:function(e,t,a){e.exports=a(31)},31:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(18),l=a.n(s),c=a(4),o=a(3),i=a.n(o),u=a(6),m=a(2),p=a(1),d=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],s=t[1],l=Object(n.useState)(""),o=Object(m.a)(l,2),d=o[0],E=o[1],h=Object(n.useState)(!1),y=Object(m.a)(h,2),x=y[0],S=y[1],P=Object(n.useState)([]),C=Object(m.a)(P,2),D=C[0],T=C[1],L=Object(n.useState)([]),_=Object(m.a)(L,2),I=_[0],W=_[1],F=Object(n.useState)(""),A=Object(m.a)(F,2),R=A[0],U=A[1],M=Object(n.useState)({}),Y=Object(m.a)(M,2),H=Y[0],J=Y[1],G=Object(p.e)(),B=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT","/posts"));case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,(n=a.data.posts)&&W(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V={active:a,setActive:s,currentPostId:d,setCurrentPostId:E,loggedIn:x,setLoggedIn:S,messages:D,setMessages:T,token:R,setToken:U,posts:I,setPosts:W,userData:H,setUserData:J,fetchPosts:B};return Object(n.useEffect)((function(){try{B()}catch(e){console.error(e)}}),[R]),r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{className:"site-header"},r.a.createElement(c.b,{to:"/home",className:"logo"},r.a.createElement("h1",null,"Stranger's Things")),r.a.createElement("div",{className:"link-bar"},r.a.createElement(c.b,{to:"/posts",className:"nav-link"},"Posts"),r.a.createElement(c.b,{to:"/home",className:"nav-link"},"Home"),R?r.a.createElement("button",{onClick:function(){U(""),S(!1),G.push("./")},className:"nav-link logout set-right"},"Log out"):r.a.createElement(c.b,{to:"/account/login",className:"nav-link set-right"},"Login/Register"))),r.a.createElement("main",{id:"content"},r.a.createElement(p.a,{exact:!0,path:"/account/:method"},r.a.createElement(v,V)),r.a.createElement(p.a,{exact:!0,path:"/"},r.a.createElement(b,V)),r.a.createElement(p.a,{exact:!0,path:"/home"},r.a.createElement(b,V)),r.a.createElement(p.a,{exact:!0,path:"/posts"},r.a.createElement(N,V)),r.a.createElement(p.a,{exact:!0,path:"/search"},r.a.createElement(j,V)),r.a.createElement(p.a,{exact:!0,path:"/posts/:postId"},r.a.createElement(O,V)),r.a.createElement(p.a,{exact:!0,path:"/posts/edit/:postId"},r.a.createElement(g,V)),r.a.createElement(p.a,{exact:!0,path:"/write"},r.a.createElement(k,V)),r.a.createElement(p.a,{exact:!0,path:"/message"},r.a.createElement(w,V))),r.a.createElement(f,null))},E=function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n,r,s,l,c,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.url,n=t.method,r=t.token,s=t.body,e.prev=1,l={method:n?n.toUpperCase():"GET",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)},r&&(l.headers.Authorization="Bearer ".concat(r)),e.next=6,fetch("".concat("https://strangers-things.herokuapp.com/api/2105-SJS-RM-WEB-PT").concat(a),l);case 6:return c=e.sent,e.next=9,c.json();case 9:if(!(o=e.sent).error){e.next=12;break}throw o.error;case 12:return e.abrupt("return",o);case 15:e.prev=15,e.t0=e.catch(1),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t=e.children,a=e.post;return a?r.a.createElement("div",{className:"post-listing"},r.a.createElement("span",{className:"single-post-title"},r.a.createElement("h3",{className:"post-title"},a.title),r.a.createElement("span",{className:"author"},"by ",r.a.createElement("span",{className:"post-author"},a.author.username))),r.a.createElement("span",{className:"description"},a.description),r.a.createElement("br",null),r.a.createElement("span",{className:"post-bottom"},r.a.createElement("span",{className:"post-bottom-elem"},r.a.createElement("h3",{className:"post-elem-header"},"Price:")," ",a.price),r.a.createElement("span",{className:"post-bottom-elem"},r.a.createElement("h3",{className:"post-elem-header"},"Location:")," ",a.location),r.a.createElement("span",{className:"post-bottom-elem"},r.a.createElement("h3",{className:"post-elem-header"},"Will Deliver:")," ",a.willDeliver?"Yes":"No"),t)):"Loading..."},g=function(e){var t=e.setPosts,a=e.posts,s=e.token,l=Object(n.useState)(""),c=Object(m.a)(l,2),o=c[0],d=c[1],g=Object(n.useState)(""),f=Object(m.a)(g,2),b=f[0],v=f[1],N=Object(n.useState)(""),w=Object(m.a)(N,2),O=w[0],j=w[1],k=Object(n.useState)(""),y=Object(m.a)(k,2),x=y[0],S=y[1],P=Object(n.useState)(!1),C=Object(m.a)(P,2),D=C[0],T=C[1],L=Object(p.f)().postId,_=Object(p.e)(),I=a.find((function(e){return e._id===L})),W=function(){var e=Object(u.a)(i.a.mark((function e(a){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,E({url:"/posts/".concat(L),method:"PATCH",token:s,body:{post:{location:o,title:b,description:O,price:"$".concat(x),willDeliver:D}}});case 3:return e.next=5,E({url:"/posts",token:s});case 5:n=e.sent,t(n.data.posts),_.push("/posts");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h3",null,"Edit Post"),r.a.createElement(h,{post:I}),r.a.createElement("form",{onSubmit:W},r.a.createElement("fieldset",null,r.a.createElement("label",null,"Title"),r.a.createElement("input",{className:"input-field",type:"text",name:"title",value:b,placeholder:"".concat(I.title),onChange:function(e){return v(e.target.value)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Description"),r.a.createElement("input",{className:"input-field",type:"text",name:"description",value:O,placeholder:"".concat(I.description),style:{height:100},onChange:function(e){return j(e.target.value)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Price"),r.a.createElement("input",{className:"input-field",type:"number",name:"price",min:"1",step:"any",value:x,placeholder:"".concat(I.price),onChange:function(e){return S(e.target.value)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Location"),r.a.createElement("input",{className:"input-field",type:"text",name:"title",value:o,placeholder:"".concat(I.location),onChange:function(e){return d(e.target.value)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Will deliver item"),r.a.createElement("select",{name:"willDeliver",placeholder:"".concat(I.willDeliver),value:D,onChange:function(e){return T(e.target.value)}},r.a.createElement("option",{value:"false"},"No"),r.a.createElement("option",{value:"true"},"Yes"))),r.a.createElement("button",{type:"submit",disabled:!b||!O||!x,className:"edit-post-button"},"Post")))},f=function(){return r.a.createElement("footer",null,r.a.createElement("span",{className:"footer-stuff"},"This site was created by ",r.a.createElement("a",{href:"mailto:jason.lammers@outlook.com"},"Jason Lammers")," using the Stranger's Things API"),r.a.createElement("span",{className:"footer-stuff"},r.a.createElement("img",{src:"./img/GitHub-Mark-32px.png",alt:"GitHub",height:"24",width:"24"}),r.a.createElement("a",{href:"https://github.com/darrian77"}," view my GitHub!")),r.a.createElement("span",{className:"footer-stuff"},"icons by ",r.a.createElement("a",{href:"https://www.iconfinder.com/iconsets/basic-ui-2-line"},"DailyYouth")))},b=function(e){var t=e.loggedIn,a=e.messages,n=e.userData,s=n.posts;return t?r.a.createElement("div",{className:"content"},n?r.a.createElement("h2",{className:"page-header"},"Welcome ","".concat(n.username)," "):"",r.a.createElement(c.b,{to:"/write",className:"post-button"},r.a.createElement("img",{src:"./img/write.png",height:"18",width:"18",alt:"write"})," Write A New Post"),r.a.createElement("div",{className:"prev-msgs"},r.a.createElement("h3",{className:"prev-msgs-head"},"Messages Received"),a.map((function(e){return r.a.createElement(r.a.Fragment,null,n._id!==e.fromUser._id?r.a.createElement("div",{className:"prev-msg"},r.a.createElement("div",{className:"prev-msg-title"},e.fromUser.username,' comented on "',e.post.title,'":'),r.a.createElement("div",null,e.content)):"")})),r.a.createElement("h3",{className:"prev-msgs-head"},"Messages Sent"),a.map((function(e){return r.a.createElement(r.a.Fragment,null,n._id===e.fromUser._id?r.a.createElement("div",{className:"prev-msg"},r.a.createElement("div",{className:"prev-usrmsg-title"},'You comented on "',e.post.title,'":'),r.a.createElement("div",null,e.content)):"")}))),r.a.createElement("div",{className:"prev-posts"},s?r.a.createElement("h3",{className:"prev-posts-head"},"Your previous posts"):"",s?s.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"prev-post",key:"post._id"},r.a.createElement("div",{className:"prev-post-title",post:e},e.title,!e.active&&" (DELETED)",":"),r.a.createElement("div",null,e.description)))})):"")):r.a.createElement("div",{className:"content welcome"},r.a.createElement("h2",{className:"page-header"},"Welcome Guest!"),r.a.createElement("br",null),r.a.createElement("div",{className:"guest"},"You can find all sorts of knick-knacks here from people all around the world! Please create an account or log in in order to create a new listing or comment on an existing post."),r.a.createElement("div",{className:"guest"},r.a.createElement(c.b,{to:"/account/login",className:"link-to-reg-login"},"Click here")," to log in or register!"),r.a.createElement("div",{className:"guest"},r.a.createElement(c.b,{to:"/posts",className:"link-to-reg-login"},"Click here")," to view the posts!"))},v=function(e){var t=e.setLoggedIn,a=e.setMessages,s=e.setUserData,l=e.setToken,o=Object(n.useState)(""),d=Object(m.a)(o,2),h=d[0],g=d[1],f=Object(n.useState)(""),b=Object(m.a)(f,2),v=b[0],N=b[1],w=Object(n.useState)(""),O=Object(m.a)(w,2),j=O[0],k=O[1],y=Object(p.f)(),x=Object(p.e)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",{className:"form-container"},r.a.createElement("div",{className:"login-header"},"register"===y.method?r.a.createElement("h3",{className:"header"},"Register a new account"):r.a.createElement("h3",{className:"header"},"Login to your account")),r.a.createElement("form",{className:"log-reg",onSubmit:function(){var e=Object(u.a)(i.a.mark((function e(n){var r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,E({url:"/users/".concat(y.method),method:"POST",body:{user:{username:h,password:v}}});case 4:if(!(r=e.sent).data){e.next=14;break}return e.next=8,E({url:"/users/me",token:r.data.token});case 8:c=e.sent,l(r.data.token),s(c.data),t(!0),a(c.data.messages),r.data.token&&x.push("/");case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),console.error(e.t0);case 19:case 20:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t){return e.apply(this,arguments)}}()},r.a.createElement("fieldset",{className:"input-fieldset"},r.a.createElement("label",null,"User name"),r.a.createElement("input",{className:"input-field",type:"text",name:"Login Name",placeholder:"enter your user name",onChange:function(e){return g(e.target.value)}})),r.a.createElement("fieldset",{className:"input-fieldset"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{className:"input-field",type:"password",name:"Password",placeholder:"password (min length 6 chars)",onChange:function(e){return N(e.target.value)}})),"register"===y.method?r.a.createElement("fieldset",{className:"input-fieldset"},r.a.createElement("label",null,"Verify Password"),r.a.createElement("input",{className:"input-field",type:"password",name:"Verify Password",placeholder:"re-enter your password",onChange:function(e){return k(e.target.value)}})):"","register"===y.method?r.a.createElement("button",{className:"login-button",type:"submit",disabled:!v||!h||v.length<6||v!==j},"Register"):r.a.createElement("button",{className:"login-button",type:"submit",disabled:!v||!h||v.length<6},"Login"),"register"===y.method?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"Already have an account yet? "),r.a.createElement(c.b,{to:"/account/login",className:"link-to-reg-login"},"Click here to log in!")):r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"Already have an account yet? "),r.a.createElement(c.b,{to:"/account/register",className:"link-to-reg-login"},"Click here to register!"))))))},N=function(e){var t=e.setPosts,a=e.fetchPosts,n=e.loggedIn,s=e.posts,l=e.token,o=e.userData,m=function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E({method:"DELETE",url:"/posts/".concat(t),token:l});case 2:return e.next=4,a();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",{className:"posts-header"},r.a.createElement("h2",{className:"page-header"},"Posts"),l?r.a.createElement(c.b,{to:"/write",className:"post-button"},r.a.createElement("img",{src:"./img/write.png",height:"18",width:"18",alt:"write"})," Write A New Post"):r.a.createElement(c.b,{to:"/write",className:"post-button-disabled"},r.a.createElement("img",{src:"./img/write.png",height:"18",width:"18",alt:"write"})," Write A New Post"),r.a.createElement(j,{posts:s,setPosts:t,fetchPosts:a})),s.map((function(e){return r.a.createElement(h,{key:e._id,post:e,loggedIn:n},e&&r.a.createElement(c.b,{to:"/posts/".concat(e._id),className:"view-post-button"},"VIEW"),e.author._id===o._id&&r.a.createElement(c.b,{to:"/posts/edit/".concat(e._id),className:"edit-post-button"},"EDIT"),e.author._id===o._id&&r.a.createElement("button",{className:"delete-post",onClick:function(){return m(e._id)}},r.a.createElement("img",{src:"../img/trash.png",width:"13",height:"13",alt:"delete"}),"DELETE"))}))))},w=function(e){var t=e.post,a=e.token,s=Object(n.useState)(""),l=Object(m.a)(s,2),c=l[0],o=l[1],d=Object(p.e)(),h=function(){var e=Object(u.a)(i.a.mark((function e(n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,r="/posts/".concat(t._id,"/messages"),e.next=5,E({method:"POST",url:r,token:a,body:{message:{content:c}}});case 5:d.push("./"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:h,className:"search-form"},r.a.createElement("input",{className:"message-input",value:c,placeholder:"Write a reply",onChange:function(e){return o(e.target.value)}}),r.a.createElement("button",{className:"send-message-button",type:"submit",disabled:!c},"Send")))},O=function(e){var t=e.posts,a=e.loggedIn,n=e.userData,s=e.token,l=Object(p.f)().postId,c=t.find((function(e){return e._id===l}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{post:c},a&&n._id!==c.author._id&&r.a.createElement(w,{post:c,token:s})))},j=function(e){var t=e.fetchPosts,a=e.posts,s=e.setPosts,l=Object(n.useState)(""),c=Object(m.a)(l,2),o=c[0],p=c[1],d=Object(n.useState)("title"),E=Object(m.a)(d,2),h=E[0],g=E[1],f=function(){var e=Object(u.a)(i.a.mark((function e(n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),console.log(a),"title"===h&&(r=a.filter((function(e){return e.title.toLowerCase().includes(o.toLowerCase())}))),"desc"===h&&(r=a.filter((function(e){return e.description.toLowerCase().includes(o.toLowerCase())}))),"author"===h&&(r=a.filter((function(e){return e.author.username.toLowerCase().includes(o.toLowerCase())}))),s(r),e.t0=""===o,!e.t0){e.next=10;break}return e.next=10,t();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{className:"search-form",onChange:f},r.a.createElement("input",{name:"search",type:"text",placeholder:"FILTER POSTS",className:"search-input",value:o,onChange:function(e){return p(e.target.value)}}),r.a.createElement("select",{value:h,onChange:function(e){return g(e.target.value)}},r.a.createElement("option",{value:"title"},"TITLE"),r.a.createElement("option",{value:"desc"},"DESCRIPTION"),r.a.createElement("option",{value:"author"},"AUTHOR")),r.a.createElement("button",{type:"submit",className:"search-button"},"reset"),r.a.createElement("div",null))},k=function(e){var t=e.setPosts,a=e.token,s=Object(n.useState)(""),l=Object(m.a)(s,2),c=l[0],o=l[1],d=Object(n.useState)(""),h=Object(m.a)(d,2),g=h[0],f=h[1],b=Object(n.useState)(""),v=Object(m.a)(b,2),N=v[0],w=v[1],O=Object(n.useState)(""),j=Object(m.a)(O,2),k=j[0],y=j[1],x=Object(n.useState)(!1),S=Object(m.a)(x,2),P=S[0],C=S[1],D=Object(p.e)(),T=function(){var e=Object(u.a)(i.a.mark((function e(n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,E({url:"/posts",method:"POST",token:a,body:{post:{location:c,title:g,description:N,price:"$".concat(k),willDeliver:P}}});case 3:return e.next=5,E({url:"/posts",token:a});case 5:r=e.sent,t(r.data.posts),D.push("/posts");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h3",null,"Post a new listing!"),r.a.createElement("form",{onSubmit:T},r.a.createElement("fieldset",null,r.a.createElement("label",null,"Title"),r.a.createElement("input",{className:"input-field",type:"text",name:"title",value:g,placeholder:"Title",onChange:function(e){return f(e.target.value)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Description"),r.a.createElement("input",{className:"input-field",type:"text",name:"description",value:N,placeholder:"Description",style:{height:100},onChange:function(e){return w(e.target.value)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Price"),r.a.createElement("input",{className:"input-field",type:"number",name:"price",min:"1",step:"any",value:k,placeholder:"$0.00",onChange:function(e){return y(e.target.value)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Location"),r.a.createElement("input",{className:"input-field",type:"text",name:"title",value:c,placeholder:"Location",onChange:function(e){return o(e.target.value)}})),r.a.createElement("fieldset",null,r.a.createElement("label",null,"Will deliver item"),r.a.createElement("select",{name:"willDeliver",placeholder:"No",value:P,onChange:function(e){return C(e.target.value)}},r.a.createElement("option",{value:"false"},"No"),r.a.createElement("option",{value:"true"},"Yes"))),r.a.createElement("button",{type:"submit",disabled:!g||!N||!k,className:"edit-post-button"},"Post")))};l.a.render(r.a.createElement(c.a,null,r.a.createElement(d,null)),document.querySelector("#app"))}},[[20,1,2]]]);
//# sourceMappingURL=main.5756920e.chunk.js.map