"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[324],{2324:(g,m,l)=>{l.r(m),l.d(m,{DevListModule:()=>h});var r=l(2787),i=l(9207),t=l(5879),y=l(8750),u=l(6814);let a=(()=>{class o{constructor(n){this.route=n,this.first=(0,i.Z)(new Date,"yyyy-MM-dd HH:mm:ss"),this.now=(0,i.Z)(new Date,"yyyy-MM-dd HH:mm:ss")}ngOnInit(){console.log("LAYOUT LIST: ngOnInit")}_onReuseInit(){this.now=(0,i.Z)(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("LAYOUT LIST: by _onReuseInit",this.route.snapshot.url.toString())}ngOnDestroy(){console.log("LAYOUT LIST: ngOnDestroy")}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(r.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["dev-list-layout"]],decls:10,vars:6,consts:[[1,"px-lg"]],template:function(n,e){1&n&&(t._UZ(0,"page-header"),t.TgZ(1,"h1"),t._uU(2,"Layout"),t.qZA(),t.TgZ(3,"p"),t._uU(4),t.ALo(5,"json"),t.ALo(6,"json"),t.qZA(),t._UZ(7,"hr"),t.TgZ(8,"div",0),t._UZ(9,"router-outlet"),t.qZA()),2&n&&(t.xp6(4),t.AsE("first: ",t.lcZ(5,2,e.first),"\uff0cnow: ",t.lcZ(6,4,e.now),""))},dependencies:[r.lC,y.q,u.Ts],encapsulation:2}),o})(),c=(()=>{class o{constructor(n){this.route=n,this.first=(0,i.Z)(new Date,"yyyy-MM-dd HH:mm:ss"),this.now=(0,i.Z)(new Date,"yyyy-MM-dd HH:mm:ss"),this.id=0}ngOnInit(){console.log("LIST ITEM: ngOnInit"),this.route.params.subscribe(n=>this.id=+n.id)}_onReuseInit(){this.now=(0,i.Z)(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("LIST ITEM: by _onReuseInit",this.route.snapshot.url.toString())}ngOnDestroy(){console.log("LIST ITEM: ngOnDestroy")}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(r.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["dev-list-item"]],decls:11,vars:12,template:function(n,e){1&n&&(t.TgZ(0,"h2"),t._uU(1,"List Item"),t.qZA(),t.TgZ(2,"p"),t._uU(3),t.ALo(4,"json"),t.ALo(5,"json"),t.qZA(),t.TgZ(6,"p"),t._uU(7),t.ALo(8,"json"),t.qZA(),t._uU(9),t.ALo(10,"json")),2&n&&(t.xp6(3),t.AsE("first: ",t.lcZ(4,4,e.first),"\uff0cnow: ",t.lcZ(5,6,e.now),""),t.xp6(4),t.hij("id: ",t.lcZ(8,8,e.id),""),t.xp6(2),t.hij(" page: ",t.lcZ(10,10,e.route.url)," "))},dependencies:[u.Ts],encapsulation:2}),o})(),p=(()=>{class o{constructor(n){this.route=n,this.first=(0,i.Z)(new Date,"yyyy-MM-dd HH:mm:ss"),this.now=(0,i.Z)(new Date,"yyyy-MM-dd HH:mm:ss"),this.id=0}ngOnInit(){console.log("LIST: ngOnInit"),this.route.params.subscribe(n=>this.id=+n.id)}_onReuseInit(){this.now=(0,i.Z)(new Date,"yyyy-MM-dd HH:mm:ss"),console.log("LIST: by _onReuseInit",this.route.snapshot.url.toString())}ngOnDestroy(){console.log("LIST: ngOnDestroy")}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(r.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["dev-list"]],decls:11,vars:12,template:function(n,e){1&n&&(t.TgZ(0,"h2"),t._uU(1,"List"),t.qZA(),t.TgZ(2,"p"),t._uU(3),t.ALo(4,"json"),t.ALo(5,"json"),t.qZA(),t.TgZ(6,"p"),t._uU(7),t.ALo(8,"json"),t.qZA(),t._uU(9),t.ALo(10,"json")),2&n&&(t.xp6(3),t.AsE("first: ",t.lcZ(4,4,e.first),"\uff0cnow: ",t.lcZ(5,6,e.now),""),t.xp6(4),t.hij("id: ",t.lcZ(8,8,e.id),""),t.xp6(2),t.hij(" page: ",t.lcZ(10,10,e.route.url)," "))},dependencies:[u.Ts],encapsulation:2}),o})();var d=l(9359);const L=[{path:"",component:a,children:[{path:"",component:p},{path:"item",component:c}]}];let h=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.m,r.Bz.forChild(L)]}),o})()}}]);