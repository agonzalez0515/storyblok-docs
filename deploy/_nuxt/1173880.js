(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{254:function(e,t,n){"use strict";n.r(t);var o=n(9),r=n(4),c=(n(38),n(39),n(15),n(40),n(185)),l=n.n(c),m=n(206),d=n(208),h=n(207),w={name:"page",head:function(){return{htmlAttrs:{lang:"en"},link:[{rel:"canonical",href:"https://www.storyblok.com".concat(this.$route.path)}]}},components:{Methods:m.a,SidebarNavigation:d.a,TopHeader:h.a},fetch:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,c,m,d,menu,h,base,w,f,v,S;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.store,r=e.params,c=e.payload,m=r.origin,d=r.lang||"v1",menu=null,h=null,!c){t.next=10;break}menu=c.menu,h=c.sections,t.next=19;break;case 10:return base=window.location.origin,t.next=13,Promise.all([l.a.get(base+"/".concat(m,".menu.").concat(d,".json")),l.a.get(base+"/".concat(m,".methods.").concat(d,".json"))]);case 13:w=t.sent,f=Object(o.a)(w,2),v=f[0],S=f[1],menu=v.data,h=S.data;case 19:n.commit("SET_LANG",d),n.commit("SET_ORIGIN",m),n.commit("SET_SECTIONS",h),n.commit("SET_MENU",menu);case 23:case"end":return t.stop()}}),t)})))()}},f=n(12),component=Object(f.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("TopHeader"),e._v(" "),n("SidebarNavigation"),e._v(" "),n("main",{staticClass:"main"},[n("Methods")],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);