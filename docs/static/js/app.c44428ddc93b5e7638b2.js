webpackJsonp([1],{"4CRW":function(e,t){},"9rLS":function(e,t){},NHnr:function(e,t,n){"use strict";function o(e){n("9rLS")}function r(e){n("4CRW")}Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),s={name:"app"},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},u=[],l={render:i,staticRenderFns:u},c=l,p=n("VU/8"),d=o,m=p(s,c,!1,d,null,null),v=m.exports,h=n("/ocq"),g=n("mtWM"),f=n.n(g),_={name:"KeywordSearch",data:function(){return{results:null,errors:[],query:"",mustLogin:!0,loggedIn:!1}},methods:{login:function(){function e(e){for(var t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=0;o<e;o++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}var t="spotify_auth_state",n=(document.getElementById("user-profile-template").innerHTML,document.getElementById("user-profile")),o=(document.getElementById("oauth-template").innerHTML,document.getElementById("oauth"),function(){for(var e,t={},n=/([^&;=]+)=?([^&;]*)/g,o=window.location.hash.substring(1);e=n.exec(o);)t[e[1]]=decodeURIComponent(e[2]);return t}()),r=o.access_token,a=o.state,s=localStorage.getItem(t);if(!r||null!=a&&a===s){localStorage.removeItem(t),r?f.a.get({url:"https://api.spotify.com/v1/me",headers:{Authorization:"Bearer "+r},success:function(e){n.innerHTML=userProfileTemplate(e),this.mustLogin=!1,this.loggedIn=!0}}):(this.mustLogin=!0,this.loggedIn=!1);var i=function(){var n=e(16);localStorage.setItem(t,n);var o="https://accounts.spotify.com/authorize";o+="?response_type=token",o+="&client_id="+encodeURIComponent("2acb1bf4bb054c3a9d24c0256833c1a7"),o+="&scope="+encodeURIComponent("user-read-private user-read-email"),o+="&redirect_uri="+encodeURIComponent("http://reevedesigns.com/spotify-weather-app/authorize"),o+="&state="+encodeURIComponent(n),window.location=o}}else alert("There was an error during the authentication");i()},getPlaylist:function(){var e=this;f.a.get("https://api.spotify.com/v1/search",{params:{q:this.query,type:"playlist"}}).then(function(t){e.results=t.data}).catch(function(t){e.errors.push(t)})}}},y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.mustLogin,expression:"mustLogin"}],attrs:{id:"login"}},[n("p",[e._v("You must log in to Spotify to use this app.")]),e._v(" "),n("p",[n("button",{attrs:{id:"login-button"},on:{click:e.login}},[e._v("Log In")])]),e._v(" "),n("div",{attrs:{id:"user-profile-template"}}),e._v(" "),n("div",{attrs:{id:"user-profile"}}),e._v(" "),n("div",{attrs:{id:"oauth-template"}}),e._v(" "),n("div",{attrs:{id:"oauth"}})]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.loggedIn,expression:"loggedIn"}],attrs:{id:"loggedIn"}},[n("p",[e._v("Music for your Mood")]),e._v(" "),n("p",[e._v("This is a playlist based on "+e._s(e.query))]),e._v(" "),n("form",{on:{submit:function(t){t.preventDefault(),e.getPlaylist(t)}}},[n("p",[e._v("I'm feeling like..."),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.query,expression:"query",modifiers:{lazy:!0}}],attrs:{type:"text",placeholder:"something"},domProps:{value:e.query},on:{change:function(t){e.query=t.target.value}}}),n("button",{attrs:{type:"submit"}},[e._v("Go")])])]),e._v(" "),e.results&&e.results.length>0?n("ul",e._l(e.results,function(t){return n("li",[n("p",[e._v(e._s(e.playlists.items.name))]),e._v(" "),n("p",[e._v(e._s(e.playlists.items.tracks))])])})):e._e()])])},w=[],I={render:y,staticRenderFns:w},b=I,L=n("VU/8"),R=r,q=L(_,b,!1,R,"data-v-6c7b7370",null),x=q.exports,z={name:"Authorize",methods:{}},C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("Congrats, you have been authorized.")]),e._v(" "),n("p",[e._v("Logged in as "+e._s(e.display_name))]),e._v(" "),n("router-link",{attrs:{to:"/"}},[e._v("Return Home")])],1)},M=[],S={render:C,staticRenderFns:M},U=S,k=n("VU/8"),A=k(z,U,!1,null,null,null),E=A.exports;a.a.use(h.a);var T=new h.a({routes:[{path:"/",name:"KeywordSearch",component:x},{path:"/authorize",name:"Authorize",component:E}]}),H=n("9CA4"),B=n.n(H),N=n("5Vcx"),P=n.n(N);a.a.config.productionTip=!1,new a.a({el:"#app",router:T,template:"<App/>",components:{App:v}}),a.a.use(P.a,new B.a)}},["NHnr"]);
//# sourceMappingURL=app.c44428ddc93b5e7638b2.js.map