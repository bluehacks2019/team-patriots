(function(t){function e(e){for(var i,r,o=e[0],l=e[1],c=e[2],p=0,d=[];p<o.length;p++)r=o[p],s[r]&&d.push(s[r][0]),s[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(i=!1)}i&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},s={app:0},n=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/patriots/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0076":function(t,e,a){"use strict";var i=a("3209"),s=a.n(i);s.a},"0cfb":function(t,e,a){},"2b13":function(t,e,a){"use strict";var i=a("ee8e"),s=a.n(i);s.a},"2f7c":function(t,e,a){},3209:function(t,e,a){},"466e":function(t,e,a){"use strict";var i=a("2f7c"),s=a.n(i);s.a},"56d7":function(t,e,a){"use strict";a.r(e);var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("transition",{attrs:{name:"fade",appear:"",mode:"out-in"}},[a("router-view")],1)],1)},n=[],r=(a("cf25"),a("2877")),o={},l=Object(r["a"])(o,s,n,!1,null,null,null),c=l.exports,u=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index",style:t.gradient},[a("div",{staticClass:"child-container"},[a("transition",{attrs:{name:"fade",appear:"",mode:"out-in"}},[a("router-view")],1)],1),a("transition",{attrs:{name:"slidev"}},["PLAYING"==t.$store.state.action_player.playing_status||"/play"==t.$route.path?a("player"):t._e()],1),a("nav",{staticClass:"index-nav"},[a("router-link",{class:{active:"/"==t.$route.path},attrs:{to:"/"}},[a("fa",{attrs:{icon:"home"}}),a("span",[t._v("Home")])],1),a("a",{staticClass:"play",on:{click:function(e){0==t.$store.getters.myPlaylists.length?t.$router.push("/playlist/add"):t.$router.push("/play"),0!=t.$store.getters.myPlaylists.length&&t.$store.commit("togglePlayingStatus")}}},[a("transition",{attrs:{name:"zoom",mode:"out-in"}},["PLAYING"==t.$store.state.action_player.playing_status?a("fa",{key:"1",attrs:{icon:"pause"}}):a("fa",{key:"2",attrs:{icon:"play"}})],1)],1),a("router-link",{class:{active:"/library"==t.$route.path},attrs:{to:"library"}},[a("fa",{attrs:{icon:"list"}}),a("span",[t._v("Library")])],1)],1)],1)},d=[],_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"player",on:{click:function(e){"/play"!=t.$route.path&&t.$router.push("/play")}}},[a("h4",{staticStyle:{"padding-top":"0.25rem",transform:"translateY(50%)","text-align":"center"}},[t._v("\n    "+t._s(t.$store.getters.myPlaylists[t.$store.state.action_player.current_playlist_index].actions[t.$store.state.action_player.current_playing_action_index].title)+" ")]),a("div",{staticClass:"seeker"},[a("span",{staticClass:"runningTime"},[t._v(t._s(t.progressmin))]),a("span",{staticClass:"track"},[a("span",{staticClass:"trackLine"},[a("span",{staticClass:"trackPoint",style:{width:t.progresssec/t.$store.getters.myPlaylists[t.$store.state.action_player.current_playlist_index].actions[t.$store.state.action_player.current_playing_action_index].duration*100+"%"}})])]),a("span",{staticClass:"endTime"},[t._v(t._s(t.convertToMinutes(t.$store.getters.myPlaylists[t.$store.state.action_player.current_playlist_index].actions[t.$store.state.action_player.current_playing_action_index].duration)))])])])},y=[],m={mounted(){setTimeout(()=>{var t=this.$store,e=this;window.setInterval(function(){if("STOPPED"==t.state.action_player.playing_status&&(this.progresssec=0),"PLAYING"==t.state.action_player.playing_status&&(e.progresssec=e.progresssec+1,e.progresssec==t.getters.myPlaylists[t.state.action_player.current_playlist_index].actions[t.state.action_player.current_playing_action_index].duration)){t.commit("setPlayingStatusStopped"),e.progresssec=0,navigator.vibrate([500,250,500,250,500,250]);var a=t.getters.myPlaylists[t.state.action_player.current_playlist_index].actions.length,i=t.state.action_player.current_playing_action_index;i>=a-1?t.commit("setCurrentPlayingAction",0):t.commit("setCurrentPlayingAction",i+1)}},1e3)},1e3)},methods:{convertToMinutes(t){var e=parseInt(t/60)+":";return e+parseInt(t%60)}},data(){return{progresssec:0}},computed:{progressmin(){var t=parseInt(this.progresssec/60)+":";return t+parseInt(this.progresssec%60)}}},f=m,h=(a("f106"),Object(r["a"])(f,_,y,!1,null,"4117758f",null)),v=h.exports,g={components:{player:v},computed:{gradient(){return"/"==this.$route.path?{background:"linear-gradient(to bottom left,#efbad3, #a254f2)"}:"/library"==this.$route.path?{background:"linear-gradient(to bottom left,#6acbe0, #6859ea)"}:"/play"==this.$route.path?{background:"linear-gradient(to bottom left,#ea1674,#672c8b)"}:void 0}}},b=g,P=(a("0076"),Object(r["a"])(b,p,d,!1,null,"66ceaaec",null)),$=P.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("h3",{staticStyle:{padding:"2rem","text-align":"center"}},[t._v("People to Follow")]),a("div",{staticClass:"people"},t._l(t.$store.state.people,function(e){return a("div",{staticClass:"person",on:{click:function(a){return t.$router.push("/people/"+e.id)}}},[a("div",{staticClass:"photo"},[a("img",{attrs:{src:e.photo_url}})]),a("div",{staticClass:"name"},[t._v(t._s(e.name))]),a("button",{staticClass:"followButton"},[t._v("Follow")])])}),0)])},x=[],S=(a("d3ce"),{}),w=Object(r["a"])(S,C,x,!1,null,"c6477de0",null),A=w.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"playlist"},[a("center",[a("div",{staticClass:"playlist_image"}),a("h3",{staticStyle:{padding:"2rem"}},[t._v(t._s(t.$store.getters.myPlaylists[t.$store.state.action_player.current_playlist_index].title))])]),a("div",{staticClass:"actions"},t._l(t.$store.getters.myPlaylists[t.$store.state.action_player.current_playlist_index].actions,function(e,i){return a("div",{staticClass:"action",class:{active:t.$store.state.action_player.current_playing_action_index==i},on:{click:function(e){return t.$store.commit("setCurrentPlayingAction",i)}}},[a("div",{staticClass:"desc"},[a("h3",[t._v(t._s(e.title))]),a("h6",[t._v(t._s(e.duration))])]),t.$store.state.action_player.current_playing_action_index==i?a("div",{staticClass:"buttons"},[a("span",{staticClass:"playButton"},["PLAYING"!=t.$store.state.action_player.playing_status?a("fa",{attrs:{icon:"play"},on:{click:function(e){return t.$store.commit("setPlayingStatusPlaying")}}}):a("fa",{attrs:{icon:"stop"},on:{click:function(e){return t.$store.commit("setPlayingStatusStopped")}}})],1)]):t._e()])}),0)],1)},I=[],T={mounted(){},data(){return{playStatus:"PLAYING"}}},D=T,O=(a("466e"),Object(r["a"])(D,k,I,!1,null,"62076a9c",null)),j=O.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list"},[a("h3",{staticStyle:{padding:"2rem","text-align":"center"}},[t._v("Playlists")]),a("span",{staticClass:"addButton",staticStyle:{position:"absolute",top:"2rem",right:"1rem",padding:"1rem",transform:"scale(1.25)"},on:{click:function(e){return t.$router.push("/playlist/add")}}},[a("fa",{attrs:{icon:"plus"}})],1),0==t.$store.getters.myPlaylists.length?a("div",{staticClass:"noPlaylist"},[a("h2",[t._v("No playlists here.")]),a("button",{on:{click:function(e){return t.$router.push("/playlist/add")}}},[t._v("Add your first playlist")])]):a("div",{staticClass:"playlists"},t._l(t.$store.getters.myPlaylists,function(e,i){return a("div",{staticClass:"playlist",on:{click:function(e){t.$store.commit("setCurrentPlaylistId",i),t.$router.push("/play")}}},[a("div",{staticClass:"title"},[a("fa",{attrs:{icon:"list"}}),t._v("   \n        "),a("span",[t._v(t._s(e.title))])],1),a("div",{staticClass:"subtitle"},[t._v(t._s(e.actions.length)+" Action"+t._s(e.actions.length>1?"s":""))]),a("hr")])}),0)])},E=[],L=(a("7825"),{}),M=Object(r["a"])(L,N,E,!1,null,"67973017",null),U=M.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"addTitle"},[a("h2",[t._v("\n        Name your Playlist\n    ")]),a("br"),a("br"),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{placeholder:"My Typical Night"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),a("br"),a("br"),a("span",{staticClass:"example"},[t._v("e.g. Daily Fitness Plan, Daily Prayer")]),a("br"),a("br"),a("br"),a("br"),a("button",{attrs:{required:""},on:{click:function(e){return t.addTitle()}}},[t._v("Next")])])},F=[],G={data:function(){return{title:""}},methods:{addTitle(){this.title&&(this.$store.commit("addPlaylistAddTitle",this.title),this.$router.push("/playlist/add/choose-actions"))}}},q=G,B=(a("5712"),Object(r["a"])(q,Y,F,!1,null,"16805c2c",null)),J=B.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chooseActions"},[a("h2",[t._v("Add an Action")]),a("div",[a("br"),a("br"),a("div",{staticStyle:{position:"relative"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.actionTitle,expression:"actionTitle"}],attrs:{type:"text",placeholder:"Name of action",required:""},domProps:{value:t.actionTitle},on:{input:function(e){e.target.composing||(t.actionTitle=e.target.value)}}})]),a("br"),a("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.actionDurationMinutes,expression:"actionDurationMinutes"}],staticStyle:{width:"48%"},attrs:{type:"number",placeholder:"# of minutes",required:""},domProps:{value:t.actionDurationMinutes},on:{input:function(e){e.target.composing||(t.actionDurationMinutes=e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.actionDurationSeconds,expression:"actionDurationSeconds"}],staticStyle:{width:"48%"},attrs:{type:"number",placeholder:"# of seconds",max:"59",required:""},domProps:{value:t.actionDurationSeconds},on:{input:function(e){e.target.composing||(t.actionDurationSeconds=e.target.value)}}})]),a("br"),a("br"),a("button",{on:{click:function(e){return t.addAction()}}},[a("fa",{attrs:{icon:"plus"}}),t._v(" \n\t\t\t\t"),a("span",[t._v("Add")])],1),a("br"),a("br"),a("br"),a("br"),a("button",{on:{click:function(e){return t.proceed()}}},[a("fa",{attrs:{icon:"check"}}),t._v(" \n\t\t\t\t"),a("span",[t._v("Done")])],1)]),a("div",{staticStyle:{"flex-grow":"1"}},t._l(t.actions,function(e){return a("div",{staticClass:"action"},[a("h3",[t._v(t._s(e.title))]),a("h4",[t._v(t._s(t.convertToMinutes(e.duration)))])])}),0)])},H=[],z={mounted:function(){this.actionsList=this.$store.state.actions},data:function(){return{actionsList:[],actions:[],actionTitle:"",actionDurationMinutes:"",actionDurationSeconds:""}},methods:{addAction(){this.actions.push({title:this.actionTitle,duration:parseInt(60*this.actionDurationMinutes)+parseInt(this.actionDurationSeconds)})},convertToMinutes(t){var e=parseInt(t/60)>0?parseInt(t/60)+"min ":"";return e+parseInt(t%60)+"sec"},proceed(){this.$store.commit("createPlaylistWithActions",{title:this.$store.state._tempPlaylistAdd.title,actions:this.actions}),this.$router.push("/library")}}},K=z,Q=(a("6690"),Object(r["a"])(K,W,H,!1,null,"682d5acd",null)),R=Q.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[a("div",{staticClass:"profPic"},[a("img",{attrs:{src:t.profPic}})]),a("br"),a("br"),a("h3",[t._v(t._s(""==t.name.length?"Hello, User!":t.name))]),a("br"),a("br"),a("h5",[t._v(t._s(""==t.email?"":t.email))]),a("br"),a("br"),a("facebookLogin",{staticClass:"button",attrs:{appId:"976527022737628"},on:{login:t.getUserData,logout:t.onLogout,"get-initial-status":t.getUserData}}),a("br"),a("br"),""!=t.$store.state.current_user.user_id?a("button",{on:{click:function(e){return t.$router.push("/")}}},[t._v("Continue to App")]):t._e()],1)},X=[],Z=a("6d09"),tt=a.n(Z),et={data(){return{profPic:"",name:"",email:"",userId:""}},components:{facebookLogin:tt.a},methods:{getUserData(t){console.log(t);var e=this.$store;FB.api("/me",{fields:["picture","name","email","id"]},t=>{this.profPic=t.picture.data.url,this.name=t.name,this.email=t.email,this.userId=t.id,e.commit("login_account",{userId:this.userId,profPic:this.profPic,name:this.name,email:this.email})})},onLogin(){this.isConnected=!0,this.getUserData()},onLogout(){this.$store.commit("clearUser"),FB.logout()(this.email="",this.name="",this.profPic="",this.userId="")}}},at=et,it=(a("2b13"),Object(r["a"])(at,V,X,!1,null,"398ebdfa",null)),st=it.exports,nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"playlist"},[a("center",[a("div",{staticClass:"playlist_image"}),a("h3",{staticStyle:{padding:"2rem"}},[t._v(" "+t._s(t.$store.state.people.find(function(e){return e.id==t.$route.params.id}).name)+" ")]),a("button",{on:{click:function(e){t.$store.commit("savePlaylist",t.$store.state.people.find(function(e){return e.id==t.$route.params.id}).playlist),t.$router.push("/library")}}},[t._v("Save Playlist")])]),a("div",{staticClass:"actions"},t._l(t.$store.state.people.find(function(e){return e.id==t.$route.params.id}).playlist.actions,function(e,i){return a("div",{staticClass:"action"},[a("div",{staticClass:"desc"},[a("h3",[t._v(t._s(e.title))]),a("h6",[t._v(t._s(e.duration))])])])}),0)],1)},rt=[],ot={mounted(){},data(){return{playStatus:"PLAYING"}}},lt=ot,ct=(a("637d"),Object(r["a"])(lt,nt,rt,!1,null,"45347f7a",null)),ut=ct.exports,pt=a("2f62");i["a"].use(pt["a"]);var dt=new pt["a"].Store({state:{current_user:{user_id:"",name:"",email:"",profPic:""},action_player:{playing_status:"PAUSED",current_playlist_index:"0",current_playing_action_index:"0"},_tempPlaylistAdd:{title:"",actions:[]},people:[{name:"John Paul II",photo_url:"...",id:1,playlist:{title:"Custom Playlist",actions:[{title:"Test 1",duration:"200"},{title:"Item 1",duration:"72"}]}}],users:[{user_id:"1",photo_url:"1",playlists:[{title:"Maundy Thursday",actions:[{title:"watch drama",duration:25},{title:"watch showtime",duration:30}]},{title:"Black Friday",actions:[{title:"watch showtime",duration:25},{title:"watch showtime",duration:25}]},{title:"Fitness",actions:[{title:"watch O-Shopping",duration:25}]}]}],playlists:[{id:1,title:"Walwal night",user_id:"",activities:[{id:1,duration:60}]}],actions:[{id:1,name:"Eat at Jollibee",user_id:"",image_url:""}]},getters:{myPlaylists(t){try{return t.users.find(e=>e.user_id==t.current_user.user_id).playlists}catch{return[]}}},mutations:{login_account(t,e){var a=e.userId;0==t.users.filter(t=>t.user_id==a).length&&t.users.push({user_id:e.userId,photo_url:e.profPic,name:e.name,email:e.email,playlists:[]}),t.current_user.user_id=e.userId,t.current_user.name=e.name,t.current_user.email=e.email,t.current_user.profPic=e.profPic},savePlaylist(t,e){t.users.find(e=>e.user_id==t.current_user.user_id).playlists.push(e)},createPlaylistWithActions(t,e){t.users.find(e=>e.user_id==t.current_user.user_id).playlists.push({title:e.title,actions:e.actions})},addPlaylistAddTitle(t,e){t._tempPlaylistAdd.title=e},setCurrentPlayingAction(t,e){t.action_player.current_playing_action_index=e,t.action_player.playing_status="STOPPED"},setCurrentPlaylistId(t,e){t.action_player.current_playlist_index=e,t.action_player.current_playing_action_index=0},togglePlayingStatus(t){"PLAYING"==t.action_player.playing_status?t.action_player.playing_status="PAUSED":t.action_player.playing_status="PLAYING"},setPlayingStatusPlaying(t){t.action_player.playing_status="PLAYING"},setPlayingStatusPaused(t){t.action_player.playing_status="PAUSED"},setPlayingStatusStopped(t){t.action_player.playing_status="STOPPED"},clearUser(t){t.current_user.user_id=""}},actions:{addActivity(t,e){t.state.actions.push({title:e,user_id:t.state.current_user.id})},addPlaylist(t,e){}}});i["a"].use(u["a"]);var _t=new u["a"]({mode:"history",base:"/patriots/",routes:[{path:"/",component:$,meta:{requiresAuth:!0},children:[{path:"/",component:A},{path:"/play",component:j},{path:"/library",component:U}]},{path:"/playlist/add",component:J},{path:"/people/:id",component:ut},{path:"/playlist/add/choose-actions",component:R},{path:"/login",component:st}]});_t.beforeEach((t,e,a)=>{t.matched.some(t=>t.meta.requiresAuth)&&""==dt.state.current_user.user_id?a({path:"/login",query:{redirect:t.fullPath}}):a()});var yt=_t,mt=a("9483");Object(mt["a"])("/patriots/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var ft=a("ecee"),ht=a("c074"),vt=a("ad3d");ft["c"].add(ht["e"],ht["b"],ht["g"],ht["c"],ht["i"],ht["d"],ht["h"],ht["f"],ht["a"]),i["a"].component("fa",vt["a"]),i["a"].config.productionTip=!1,new i["a"]({router:yt,store:dt,render:function(t){return t(c)}}).$mount("#app")},5712:function(t,e,a){"use strict";var i=a("96a4"),s=a.n(i);s.a},"5a6f":function(t,e,a){},"637d":function(t,e,a){"use strict";var i=a("5a6f"),s=a.n(i);s.a},6690:function(t,e,a){"use strict";var i=a("fdd3"),s=a.n(i);s.a},7353:function(t,e,a){},7825:function(t,e,a){"use strict";var i=a("7353"),s=a.n(i);s.a},"8a86":function(t,e,a){},"96a4":function(t,e,a){},cf25:function(t,e,a){"use strict";var i=a("0cfb"),s=a.n(i);s.a},d3ce:function(t,e,a){"use strict";var i=a("8a86"),s=a.n(i);s.a},d66c:function(t,e,a){},ee8e:function(t,e,a){},f106:function(t,e,a){"use strict";var i=a("d66c"),s=a.n(i);s.a},fdd3:function(t,e,a){}});
//# sourceMappingURL=app.54f56145.js.map