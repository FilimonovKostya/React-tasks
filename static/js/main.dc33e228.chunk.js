(this["webpackJsonpreact-kabzda-prosto"]=this["webpackJsonpreact-kabzda-prosto"]||[]).push([[0],[,function(e,t,a){e.exports={clock:"CleverClock_clock__3jXFE",hour:"CleverClock_hour__2NbUU",min:"CleverClock_min__ruO-R",sec:"CleverClock_sec__3Iggj",hr:"CleverClock_hr__3oIh1",mn:"CleverClock_mn__2OaaU",sc:"CleverClock_sc__1BLG0"}},,,,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),o=a.n(r),s=(a(10),a(11),a(2)),l=a(1),i=a.n(l);var m=function(){var e=new Date,t=c.a.useState(30*e.getHours()),a=Object(s.a)(t,2),r=a[0],o=a[1],l=c.a.useState(6*e.getMinutes()),m=Object(s.a)(l,2),u=m[0],v=m[1],d=c.a.useState(6*e.getSeconds()),_=Object(s.a)(d,2),h=_[0],f=_[1];Object(n.useEffect)((function(){var e=setInterval((function(){return f(6*(new Date).getSeconds()),v(6*(new Date).getMinutes()),o(30*(new Date).getHours()),function(){clearInterval(e)}}),1e3)}));var g={transform:"rotateZ(".concat(r+u/12,"deg)")},k={transform:"rotateZ(".concat(u,"deg)")},C={transform:"rotateZ(".concat(h,"deg)")};return c.a.createElement("div",{className:i.a.clock},c.a.createElement("div",{className:i.a.hour},c.a.createElement("div",{className:i.a.hr,id:"hr",style:g})),c.a.createElement("div",{className:i.a.min},c.a.createElement("div",{className:i.a.mn,id:"mn",style:k})),c.a.createElement("div",{className:i.a.sec},c.a.createElement("div",{className:i.a.sc,id:"sc",style:C})))};var u=function(){return c.a.createElement("div",null,c.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.dc33e228.chunk.js.map