import{a as $t,b as Gt,c as $e}from"./chunk-53WZVWSD.js";import{a as Kt,b as Yt}from"./chunk-HQNBXND5.js";import{a as Ht,e as Ft}from"./chunk-PLUYYUV3.js";import{a as Lt,b as Vt}from"./chunk-MJWBK4BK.js";import{$a as p,Aa as We,Ab as P,Ag as Ot,Ba as G,Bh as Pt,Cb as Oe,D as rt,Da as ut,Db as te,Dh as Ut,Eb as Xe,Eh as Ve,F as ot,Fa as mt,Fb as De,Fe as kt,Ga as Be,Ge as Bt,H as k,Ja as l,Jc as Ct,Ka as u,Kc as xt,Kd as Mt,L as st,La as K,Lc as oe,Ma as pt,Na as j,Pb as ht,Pg as Dt,Qb as Ce,Qc as se,Qg as At,Ra as Y,Rb as xe,Sa as m,Sc as bt,Ta as dt,Tb as be,Tc as I,Tg as x,Ua as _e,Ub as ie,Uc as vt,Vg as ve,W as at,Y as Qe,Yc as Ae,a as de,ab as g,ag as Le,bb as Q,bg as le,ca as ze,cc as ft,da as V,db as W,dd as Tt,de as A,ea as fe,eb as X,ed as Ne,ee as Et,fa as O,fb as d,ga as lt,gb as h,gc as _t,h as Ee,ha as v,hb as we,hc as gt,ia as $,ib as q,ic as qe,id as je,ja as ct,jb as J,jd as Pe,k as he,l as it,lb as E,lf as He,ma as Ie,md as yt,me as zt,mf as Fe,na as R,nc as ne,oa as M,od as ae,pb as C,q as f,qd as St,rb as c,s as nt,sb as Z,se as Je,tb as ee,uc as re,ue as It,wa as ke,wd as Rt,wh as Nt,xb as D,xe as Ue,yb as z,zb as ge,zg as wt,zh as jt}from"./chunk-JIFQ6OJY.js";function Zt(r,t){if(r&1){let n=E();d(0,"li",5),C("click",function(i){R(n);let o=c();return M(o.click(i,"refresh"))}),h()}if(r&2){let n=c();m("innerHTML",n.i18n.refresh,G)}}function ei(r,t){if(r&1){let n=E();d(0,"li",7),C("click",function(i){let s=R(n).$implicit,a=c(2);return M(a.click(i,"custom",s))}),h()}if(r&2){let n=t.$implicit,e=c(2);m("nzDisabled",e.isDisabled(n))("innerHTML",n.title,G),Y("data-type",n.id)}}function ti(r,t){if(r&1&&(we(0,"li",6),W(1,ei,1,3,"li",8,Q)),r&2){let n=c();X(1,n.customContextMenu)}}var Te=(()=>{let t=class t{set i18n(e){this._i18n=de(de({},this.i18nSrv.getData("reuseTab")),e)}get i18n(){return this._i18n}get includeNonCloseable(){return this.event.ctrlKey}constructor(e){this.i18nSrv=e,this.close=new j}notify(e){this.close.next({type:e,item:this.item,includeNonCloseable:this.includeNonCloseable})}ngOnInit(){this.includeNonCloseable&&(this.item.closable=!0)}click(e,i,o){if(e.preventDefault(),e.stopPropagation(),!(i==="close"&&!this.item.closable)&&!(i==="closeRight"&&this.item.last)){if(o){if(this.isDisabled(o))return;o.fn(this.item,o)}this.notify(i)}}isDisabled(e){return e.disabled?e.disabled(this.item):!1}closeMenu(e){e.type==="click"&&e.button===2||this.notify(null)}};t.\u0275fac=function(i){return new(i||t)(u(wt))},t.\u0275cmp=v({type:t,selectors:[["reuse-tab-context-menu"]],hostBindings:function(i,o){i&1&&C("click",function(a){return o.closeMenu(a)},!1,We)("contextmenu",function(a){return o.closeMenu(a)},!1,We)},inputs:{i18n:"i18n",item:"item",event:"event",customContextMenu:"customContextMenu"},outputs:{close:"close"},standalone:!0,features:[te],decls:6,vars:7,consts:[["nz-menu",""],["nz-menu-item","","data-type","refresh",3,"innerHTML"],["nz-menu-item","","data-type","close",3,"nzDisabled","innerHTML","click"],["nz-menu-item","","data-type","closeOther",3,"innerHTML","click"],["nz-menu-item","","data-type","closeRight",3,"nzDisabled","innerHTML","click"],["nz-menu-item","","data-type","refresh",3,"innerHTML","click"],["nz-menu-divider",""],["nz-menu-item","",3,"nzDisabled","innerHTML","click"],["nz-menu-item","",3,"nzDisabled","innerHTML"]],template:function(i,o){i&1&&(d(0,"ul",0),p(1,Zt,1,1,"li",1),d(2,"li",2),C("click",function(a){return o.click(a,"close")}),h(),d(3,"li",3),C("click",function(a){return o.click(a,"closeOther")}),h(),d(4,"li",4),C("click",function(a){return o.click(a,"closeRight")}),h(),p(5,ti,3,0),h()),i&2&&(l(1),g(1,o.item.active?1:-1),l(1),m("nzDisabled",!o.item.closable)("innerHTML",o.i18n.close,G),l(1),m("innerHTML",o.i18n.closeOther,G),l(1),m("nzDisabled",o.item.last)("innerHTML",o.i18n.closeRight,G),l(1),g(5,o.customContextMenu.length>0?5:-1))},dependencies:[Ve,Pt,jt,Ut],encapsulation:2,changeDetection:0});let r=t;return r})();var U=(()=>{let t=class t{constructor(e){this.overlay=e,this.ref=null,this.show=new he,this.close=new he}remove(){this.ref&&(this.ref.detach(),this.ref.dispose(),this.ref=null)}open(e){this.remove();let{event:i,item:o,customContextMenu:s}=e,{x:a,y:b}=i,_=[new Je({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"top"}),new Je({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"})],N=this.overlay.position().flexibleConnectedTo({x:a,y:b}).withPositions(_);this.ref=this.overlay.create({positionStrategy:N,panelClass:"reuse-tab__cm",scrollStrategy:this.overlay.scrollStrategies.close()});let Me=this.ref.attach(new zt(Te)),S=Me.instance;S.i18n=this.i18n,S.item=de({},o),S.customContextMenu=s,S.event=i;let tt=new Ee;tt.add(S.close.subscribe(Jt=>{this.close.next(Jt),this.remove()})),Me.onDestroy(()=>tt.unsubscribe())}};t.\u0275fac=function(i){return new(i||t)(O(It))},t.\u0275prov=ze({token:t,factory:t.\u0275fac});let r=t;return r})();var Ge=(()=>{let t=class t{set i18n(e){this.srv.i18n=e}constructor(e){this.srv=e,this.sub$=new Ee,this.change=new j,this.sub$.add(e.show.subscribe(i=>this.srv.open(i))),this.sub$.add(e.close.subscribe(i=>this.change.emit(i)))}ngOnDestroy(){this.sub$.unsubscribe()}};t.\u0275fac=function(i){return new(i||t)(u(U))},t.\u0275cmp=v({type:t,selectors:[["reuse-tab-context"]],inputs:{i18n:"i18n"},outputs:{change:"change"},standalone:!0,features:[te],decls:0,vars:0,template:function(i,o){},encapsulation:2});let r=t;return r})();var Ke=(()=>{let t=class t{constructor(e){this.srv=e}_onContextMenu(e){this.srv.show.next({event:e,item:this.item,customContextMenu:this.customContextMenu}),e.preventDefault(),e.stopPropagation()}};t.\u0275fac=function(i){return new(i||t)(u(U))},t.\u0275dir=ct({type:t,selectors:[["","reuse-tab-context-menu",""]],hostBindings:function(i,o){i&1&&C("contextmenu",function(a){return o._onContextMenu(a)})},inputs:{item:["reuse-tab-context-menu","item"],customContextMenu:"customContextMenu"},exportAs:["reuseTabContextMenu"],standalone:!0});let r=t;return r})();var w=function(r){return r[r.Menu=0]="Menu",r[r.MenuForce=1]="MenuForce",r[r.URL=2]="URL",r}(w||{});var H=new fe("REUSE_TAB_STORAGE_KEY"),F=new fe("REUSE_TAB_STORAGE_STATE"),ye=class{get(t){return JSON.parse(localStorage.getItem(t)||"[]")||[]}update(t,n){return localStorage.setItem(t,JSON.stringify(n)),!0}remove(t){localStorage.removeItem(t)}};var ce=new fe("REUSE_TAB_CACHED_MANAGER"),Se=class{constructor(){this.list=[],this.title={},this.closable={}}};var ue=(()=>{let t=class t{get snapshot(){return this.injector.get(se).snapshot}get inited(){return this._inited}get curUrl(){return this.getUrl(this.snapshot)}set max(e){this._max=Math.min(Math.max(e,2),100);for(let i=this.cached.list.length;i>this._max;i--)this.cached.list.pop()}set keepingScroll(e){this._keepingScroll=e,this.initScroll()}get keepingScroll(){return this._keepingScroll}get items(){return this.cached.list}get count(){return this.cached.list.length}get change(){return this._cachedChange.asObservable()}set title(e){let i=this.curUrl;typeof e=="string"&&(e={text:e}),this.cached.title[i]=e,this.di("update current tag title: ",e),this._cachedChange.next({active:"title",url:i,title:e,list:this.cached.list})}index(e){return this.cached.list.findIndex(i=>i.url===e)}exists(e){return this.index(e)!==-1}get(e){return e&&this.cached.list.find(i=>i.url===e)||null}remove(e,i){let o=typeof e=="string"?this.index(e):e,s=o!==-1?this.cached.list[o]:null;return!s||!i&&!s.closable?!1:(this.destroy(s._handle),this.cached.list.splice(o,1),delete this.cached.title[e],!0)}close(e,i=!1){return this.removeUrlBuffer=e,this.remove(e,i),this._cachedChange.next({active:"close",url:e,list:this.cached.list}),this.di("close tag",e),!0}closeRight(e,i=!1){let o=this.index(e);for(let s=this.count-1;s>o;s--)this.remove(s,i);return this.removeUrlBuffer=null,this._cachedChange.next({active:"closeRight",url:e,list:this.cached.list}),this.di("close right tages",e),!0}clear(e=!1){this.cached.list.forEach(i=>{!e&&i.closable&&this.destroy(i._handle)}),this.cached.list=this.cached.list.filter(i=>!e&&!i.closable),this.removeUrlBuffer=null,this._cachedChange.next({active:"clear",list:this.cached.list}),this.di("clear all catch")}move(e,i){let o=this.cached.list.findIndex(a=>a.url===e);if(o===-1)return;let s=this.cached.list.slice();s.splice(i<0?s.length+i:i,0,s.splice(o,1)[0]),this.cached.list=s,this._cachedChange.next({active:"move",url:e,position:i,list:this.cached.list})}replace(e){let i=this.curUrl;this.exists(i)?this.close(i,!0):this.removeUrlBuffer=i,this.injector.get(I).navigateByUrl(e)}getTitle(e,i){if(this.cached.title[e])return this.cached.title[e];if(i&&i.data&&(i.data.titleI18n||i.data.title))return{text:i.data.title,i18n:i.data.titleI18n};let o=this.getMenu(e);return o?{text:o.text,i18n:o.i18n}:{text:e}}clearTitleCached(){this.cached.title={}}set closable(e){let i=this.curUrl;this.cached.closable[i]=e,this.di("update current tag closable: ",e),this._cachedChange.next({active:"closable",closable:e,list:this.cached.list})}getClosable(e,i){if(typeof this.cached.closable[e]<"u")return this.cached.closable[e];if(i&&i.data&&typeof i.data.reuseClosable=="boolean")return i.data.reuseClosable;let o=this.mode!==w.URL?this.getMenu(e):null;return o&&typeof o.reuseClosable=="boolean"?o.reuseClosable:!0}clearClosableCached(){this.cached.closable={}}getTruthRoute(e){let i=e;for(;i.firstChild;)i=i.firstChild;return i}getUrl(e){let i=this.getTruthRoute(e),o=[];for(;i;)o.push(i.url.join("/")),i=i.parent;return`/${o.filter(a=>a).reverse().join("/")}`}can(e){let i=this.getUrl(e);if(i===this.removeUrlBuffer)return!1;if(e.data&&typeof e.data.reuse=="boolean")return e.data.reuse;if(this.mode!==w.URL){let o=this.getMenu(i);if(!o)return!1;if(this.mode===w.Menu){if(o.reuse===!1)return!1}else if(!o.reuse||o.reuse!==!0)return!1;return!0}return!this.isExclude(i)}isExclude(e){return this.excludes.findIndex(i=>i.test(e))!==-1}refresh(e){this._cachedChange.next({active:"refresh",data:e})}destroy(e){e&&e.componentRef&&e.componentRef.destroy&&e.componentRef.destroy()}di(...e){}constructor(e,i,o,s,a){this.injector=e,this.menuService=i,this.cached=o,this.stateKey=s,this.stateSrv=a,this._inited=!1,this._max=10,this._keepingScroll=!1,this._cachedChange=new it(null),this.removeUrlBuffer=null,this.positionBuffer={},this.debug=!1,this.routeParamMatchMode="strict",this.mode=w.Menu,this.excludes=[],this.storageState=!1,this.cached==null&&(this.cached={list:[],title:{},closable:{}})}init(){this.initScroll(),this._inited=!0,this.loadState()}loadState(){this.storageState&&(this.cached.list=this.stateSrv.get(this.stateKey).map(e=>({title:{text:e.title},url:e.url,position:e.position})),this._cachedChange.next({active:"loadState"}))}getMenu(e){let i=this.menuService.getPathByUrl(e);return!i||i.length===0?null:i.pop()}runHook(e,i,o="init"){if(typeof i=="number"&&(i=this.cached.list[i]._handle?.componentRef),i==null||!i.instance)return;let s=i.instance,a=s[e];typeof a=="function"&&(e==="_onReuseInit"?a.call(s,o):a.call(s))}hasInValidRoute(e){return!e.routeConfig||!!e.routeConfig.loadChildren||!!e.routeConfig.children}shouldDetach(e){return this.hasInValidRoute(e)?!1:(this.di("#shouldDetach",this.can(e),this.getUrl(e)),this.can(e))}store(e,i){let o=this.getUrl(e),s=this.index(o),a=s===-1,b={title:this.getTitle(o,e),closable:this.getClosable(o,e),position:this.getKeepingScroll(o,e)?this.positionBuffer[o]:null,url:o,_snapshot:e,_handle:i};if(a){if(this.count>=this._max){let _=this.cached.list.findIndex(N=>N.closable);_!==-1&&this.remove(_,!1)}this.cached.list.push(b)}else{let _=this.cached.list[s]._handle?.componentRef;i==null&&_!=null&&rt(100).subscribe(()=>this.runHook("_onReuseInit",_)),this.cached.list[s]=b}this.removeUrlBuffer=null,this.di("#store",a?"[new]":"[override]",o),i&&i.componentRef&&this.runHook("_onReuseDestroy",i.componentRef),a||this._cachedChange.next({active:"override",item:b,list:this.cached.list})}shouldAttach(e){if(this.hasInValidRoute(e))return!1;let i=this.getUrl(e),o=this.get(i),s=!!(o&&o._handle);return this.di("#shouldAttach",s,i),s||this._cachedChange.next({active:"add",url:i,list:this.cached.list}),s}retrieve(e){if(this.hasInValidRoute(e))return null;let i=this.getUrl(e),o=this.get(i),s=o&&o._handle||null;return this.di("#retrieve",i,s),s}shouldReuseRoute(e,i){let o=e.routeConfig===i.routeConfig;if(!o)return!1;let s=e.routeConfig&&e.routeConfig.path||"";return s.length>0&&~s.indexOf(":")&&(this.routeParamMatchMode==="strict"?o=this.getUrl(e)===this.getUrl(i):o=s===(i.routeConfig&&i.routeConfig.path||"")),this.di("====================="),this.di("#shouldReuseRoute",o,`${this.getUrl(i)}=>${this.getUrl(e)}`,e,i),o}getKeepingScroll(e,i){if(i&&i.data&&typeof i.data.keepingScroll=="boolean")return i.data.keepingScroll;let o=this.mode!==w.URL?this.getMenu(e):null;return o&&typeof o.keepingScroll=="boolean"?o.keepingScroll:this.keepingScroll}get isDisabledInRouter(){return this.injector.get(bt,{}).scrollPositionRestoration==="disabled"}get ss(){return this.injector.get(At)}initScroll(){this._router$&&this._router$.unsubscribe(),this._router$=this.injector.get(I).events.subscribe(e=>{if(e instanceof xt){let i=this.curUrl;this.getKeepingScroll(i,this.getTruthRoute(this.snapshot))?this.positionBuffer[i]=this.ss.getScrollPosition(this.keepingScrollContainer):delete this.positionBuffer[i]}else if(e instanceof oe){let i=this.curUrl,o=this.get(i);o&&o.position&&this.getKeepingScroll(i,this.getTruthRoute(this.snapshot))&&(this.isDisabledInRouter?this.ss.scrollToPosition(this.keepingScrollContainer,o.position):setTimeout(()=>this.ss.scrollToPosition(this.keepingScrollContainer,o.position),1))}})}ngOnDestroy(){let{_cachedChange:e,_router$:i}=this;this.clear(),this.cached.list=[],e.complete(),i&&i.unsubscribe()}};t.\u0275fac=function(i){return new(i||t)(O(ke),O(je),O(ce,8),O(H,8),O(F,8))},t.\u0275prov=ze({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();var si=["tabset"];function ai(r,t){}var li=r=>({$implicit:r});function ci(r,t){if(r&1&&p(0,ai,0,0,"ng-template",6),r&2){let n=c(2).$implicit,e=c();m("ngTemplateOutlet",e.titleRender)("ngTemplateOutletContext",De(2,li,n))}}function ui(r,t){if(r&1&&z(0),r&2){let n=c(2).$implicit;P(" ",n.title," ")}}function mi(r,t){if(r&1){let n=E();d(0,"i",8),C("click",function(i){R(n);let o=c(2).$index,s=c();return M(s._close(i,o,!1))}),h()}}function pi(r,t){if(r&1&&(d(0,"div",5)(1,"span"),p(2,ci,1,4,null,6)(3,ui,1,1),h()(),p(4,mi,1,0,"i",7)),r&2){let n=c().$implicit,e=c();m("reuse-tab-context-menu",n)("customContextMenu",e.customContextMenu),Y("title",n.title),l(1),dt("max-width",e.tabMaxWidth,"px"),_e("reuse-tab__name-width",e.tabMaxWidth),l(1),g(2,e.titleRender?2:3),l(2),g(4,n.closable?4:-1)}}function di(r,t){if(r&1){let n=E();d(0,"nz-tab",3),C("nzClick",function(){let o=R(n).$index,s=c();return M(s._to(o))}),p(1,pi,5,9,"ng-template",null,4,ie),h()}if(r&2){let n=D(2);m("nzTitle",n)}}var me=class me{set keepingScrollContainer(t){this._keepingScrollContainer=typeof t=="string"?this.doc.querySelector(t):t}constructor(t,n,e,i,o,s,a,b,_,N){this.srv=t,this.cdr=n,this.router=e,this.route=i,this.i18nSrv=o,this.doc=s,this.platform=a,this.directionality=b,this.stateKey=_,this.stateSrv=N,this.destroy$=lt(pt),this.list=[],this.pos=0,this.dir="ltr",this.mode=w.Menu,this.debug=!1,this.allowClose=!0,this.keepingScroll=!1,this.storageState=!1,this.customContextMenu=[],this.tabBarStyle=null,this.tabType="line",this.routeParamMatchMode="strict",this.disabled=!1,this.change=new j,this.close=new j}genTit(t){return t.i18n&&this.i18nSrv?this.i18nSrv.fanyi(t.i18n):t.text}get curUrl(){return this.srv.getUrl(this.route.snapshot)}genCurItem(){let t=this.curUrl,n=this.srv.getTruthRoute(this.route.snapshot);return{url:t,title:this.genTit(this.srv.getTitle(t,n)),closable:this.allowClose&&this.srv.count>0&&this.srv.getClosable(t,n),active:!1,last:!1,index:0}}genList(t){let n=this.srv.items.map((o,s)=>({url:o.url,title:this.genTit(o.title),closable:this.allowClose&&o.closable&&this.srv.count>0,position:o.position,index:s,active:!1,last:!1})),e=this.curUrl,i=n.findIndex(o=>o.url===e)===-1;if(t&&t.active==="close"&&t.url===e){i=!1;let o=0,s=this.list.find(a=>a.url===e);s.index===n.length?o=n.length-1:s.index<n.length&&(o=Math.max(0,s.index)),this.router.navigateByUrl(n[o].url)}i&&n.splice(this.pos+1,0,this.genCurItem()),n.forEach((o,s)=>o.index=s),n.length===1&&(n[0].closable=!1),this.list=n,this.cdr.detectChanges(),this.updatePos()}updateTitle(t){let n=this.list.find(e=>e.url===t.url);n&&(n.title=this.genTit(t.title),this.cdr.detectChanges())}refresh(t){this.srv.runHook("_onReuseInit",this.pos===t.index?this.srv.componentRef:t.index,"refresh")}saveState(){!this.srv.inited||!this.storageState||this.stateSrv.update(this.stateKey,this.list)}contextMenuChange(t){let n=null;switch(t.type){case"refresh":this.refresh(t.item);break;case"close":this._close(null,t.item.index,t.includeNonCloseable);break;case"closeRight":n=()=>{this.srv.closeRight(t.item.url,t.includeNonCloseable),this.close.emit(null)};break;case"closeOther":n=()=>{this.srv.clear(t.includeNonCloseable),this.close.emit(null)};break}n&&(!t.item.active&&t.item.index<=this.list.find(e=>e.active).index?this._to(t.item.index,n):n())}_to(t,n){t=Math.max(0,Math.min(t,this.list.length-1));let e=this.list[t];this.router.navigateByUrl(e.url).then(i=>{i&&(this.item=e,this.change.emit(e),n&&n())})}_close(t,n,e){t!=null&&(t.preventDefault(),t.stopPropagation());let i=this.list[n];return(this.canClose?this.canClose({item:i,includeNonCloseable:e}):nt(!0)).pipe(k(o=>o)).subscribe(()=>{this.srv.close(i.url,e),this.close.emit(i),this.cdr.detectChanges()}),!1}activate(t){this.srv.componentRef={instance:t}}updatePos(){let t=this.srv.getUrl(this.route.snapshot),n=this.list.filter(s=>s.url===t||!this.srv.isExclude(s.url));if(n.length===0)return;let e=n[n.length-1],i=n.find(s=>s.url===t);e.last=!0;let o=i==null?e.index:i.index;n.forEach((s,a)=>s.active=o===a),this.pos=o,this.tabset.nzSelectedIndex=o,this.list=n,this.cdr.detectChanges(),this.saveState()}ngOnInit(){this.dir=this.directionality.value,this.directionality.change?.pipe(A(this.destroy$)).subscribe(t=>{this.dir=t,this.cdr.detectChanges()}),this.platform.isBrowser&&(this.srv.change.pipe(A(this.destroy$)).subscribe(t=>{switch(t?.active){case"title":this.updateTitle(t);return;case"override":if(t?.list?.length===this.list.length){this.updatePos();return}break}this.genList(t)}),this.i18nSrv.change.pipe(k(()=>this.srv.inited),A(this.destroy$),st(100)).subscribe(()=>this.genList({active:"title"})),this.srv.init())}ngOnChanges(t){this.platform.isBrowser&&(t.max&&(this.srv.max=this.max),t.excludes&&(this.srv.excludes=this.excludes),t.mode&&(this.srv.mode=this.mode),t.routeParamMatchMode&&(this.srv.routeParamMatchMode=this.routeParamMatchMode),t.keepingScroll&&(this.srv.keepingScroll=this.keepingScroll,this.srv.keepingScrollContainer=this._keepingScrollContainer),t.storageState&&(this.srv.storageState=this.storageState),this.srv.debug=this.debug,this.cdr.detectChanges())}};me.\u0275fac=function(n){return new(n||me)(u(ue),u(K),u(I),u(se),u(Ne,8),u(ft),u(Pe),u(ae,8),u(H,8),u(F,8))},me.\u0275cmp=v({type:me,selectors:[["reuse-tab"],["","reuse-tab",""]],viewQuery:function(n,e){if(n&1&&xe(si,5),n&2){let i;Ce(i=be())&&(e.tabset=i.first)}},hostVars:10,hostBindings:function(n,e){n&2&&_e("reuse-tab",!0)("reuse-tab__line",e.tabType==="line")("reuse-tab__card",e.tabType==="card")("reuse-tab__disabled",e.disabled)("reuse-tab-rtl",e.dir==="rtl")},inputs:{mode:"mode",i18n:"i18n",debug:"debug",max:"max",tabMaxWidth:"tabMaxWidth",excludes:"excludes",allowClose:"allowClose",keepingScroll:"keepingScroll",storageState:"storageState",keepingScrollContainer:"keepingScrollContainer",customContextMenu:"customContextMenu",tabBarExtraContent:"tabBarExtraContent",tabBarGutter:"tabBarGutter",tabBarStyle:"tabBarStyle",tabType:"tabType",routeParamMatchMode:"routeParamMatchMode",disabled:"disabled",titleRender:"titleRender",canClose:"canClose"},outputs:{change:"change",close:"close"},exportAs:["reuseTab"],standalone:!0,features:[Oe([U]),Ie,te],decls:5,vars:7,consts:[[3,"nzSelectedIndex","nzAnimated","nzType","nzTabBarExtraContent","nzTabBarGutter","nzTabBarStyle"],["tabset",""],[3,"i18n","change"],[3,"nzTitle","nzClick"],["titleTemplate",""],[1,"reuse-tab__name",3,"reuse-tab-context-menu","customContextMenu"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],["nz-icon","","nzType","close","class","reuse-tab__op"],["nz-icon","","nzType","close",1,"reuse-tab__op",3,"click"],[3,"nzTitle"]],template:function(n,e){n&1&&(d(0,"nz-tabset",0,1),W(2,di,3,1,"nz-tab",9,Q),h(),d(4,"reuse-tab-context",2),C("change",function(o){return e.contextMenuChange(o)}),h()),n&2&&(m("nzSelectedIndex",e.pos)("nzAnimated",!1)("nzType",e.tabType)("nzTabBarExtraContent",e.tabBarExtraContent)("nzTabBarGutter",e.tabBarGutter)("nzTabBarStyle",e.tabBarStyle),X(2,e.list),l(4),m("i18n",e.i18n))},dependencies:[ne,$e,Gt,$t,Ke,Ge,le,Le],encapsulation:2,changeDetection:0});var T=me;f([x()],T.prototype,"debug",void 0);f([ve()],T.prototype,"max",void 0);f([ve()],T.prototype,"tabMaxWidth",void 0);f([x()],T.prototype,"allowClose",void 0);f([x()],T.prototype,"keepingScroll",void 0);f([x()],T.prototype,"storageState",void 0);f([x()],T.prototype,"disabled",void 0);var hi=[T];var fi=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=$({type:t}),t.\u0275inj=V({providers:[{provide:H,useValue:"_reuse-tab-state"},{provide:F,useFactory:()=>new ye},{provide:ce,useFactory:()=>new Se}],imports:[re,Ae,Ot,Ve,$e,le,Ue,hi,Te]});let r=t;return r})();var Ze=["*"];function xi(r,t){}function bi(r,t){if(r&1&&(q(0),d(1,"span",3),p(2,xi,0,0,"ng-template",4),we(3,"span",5),h(),J()),r&2){let n=c(),e=D(2);l(1),m("nzDropdownMenu",n.nzOverlay),l(1),m("ngTemplateOutlet",e)}}function vi(r,t){r&1&&(d(0,"span",6),ee(1),h())}function Ti(r,t){if(r&1&&(q(0),z(1),J()),r&2){let n=c(2);l(1),P(" ",n.nzBreadCrumbComponent.nzSeparator," ")}}function yi(r,t){if(r&1&&(d(0,"nz-breadcrumb-separator"),p(1,Ti,2,1,"ng-container",7),h()),r&2){let n=c();l(1),m("nzStringTemplateOutlet",n.nzBreadCrumbComponent.nzSeparator)}}function Si(r,t){if(r&1){let n=E();d(0,"nz-breadcrumb-item")(1,"a",2),C("click",function(i){let s=R(n).$implicit,a=c(2);return M(a.navigate(s.url,i))}),z(2),h()()}if(r&2){let n=t.$implicit;l(1),Y("href",n.url,ut),l(1),ge(n.label)}}function Ri(r,t){if(r&1&&(q(0),p(1,Si,3,2,"nz-breadcrumb-item",1),J()),r&2){let n=c();l(1),m("ngForOf",n.breadcrumbs)}}var Ye=class{},Mi=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=v({type:t,selectors:[["nz-breadcrumb-separator"]],hostAttrs:[1,"ant-breadcrumb-separator"],exportAs:["nzBreadcrumbSeparator"],ngContentSelectors:Ze,decls:1,vars:0,template:function(i,o){i&1&&(Z(),ee(0))},encapsulation:2});let r=t;return r})(),et=(()=>{let t=class t{constructor(e){this.nzBreadCrumbComponent=e}};t.\u0275fac=function(i){return new(i||t)(u(Ye))},t.\u0275cmp=v({type:t,selectors:[["nz-breadcrumb-item"]],inputs:{nzOverlay:"nzOverlay"},exportAs:["nzBreadcrumbItem"],ngContentSelectors:Ze,decls:4,vars:3,consts:[[4,"ngIf","ngIfElse"],["noMenuTpl",""],[4,"ngIf"],["nz-dropdown","",1,"ant-breadcrumb-overlay-link",3,"nzDropdownMenu"],[3,"ngTemplateOutlet"],["nz-icon","","nzType","down"],[1,"ant-breadcrumb-link"],[4,"nzStringTemplateOutlet"]],template:function(i,o){if(i&1&&(Z(),p(0,bi,4,2,"ng-container",0)(1,vi,2,0,"ng-template",null,1,ie)(3,yi,2,1,"nz-breadcrumb-separator",2)),i&2){let s=D(2);m("ngIf",!!o.nzOverlay)("ngIfElse",s),l(3),m("ngIf",o.nzBreadCrumbComponent.nzSeparator)}},dependencies:[qe,ne,He,Ht,Le,Mi],encapsulation:2,changeDetection:0});let r=t;return r})(),L=class L{constructor(t,n,e,i,o){this.injector=t,this.cdr=n,this.elementRef=e,this.renderer=i,this.directionality=o,this.nzAutoGenerate=!1,this.nzSeparator="/",this.nzRouteLabel="breadcrumb",this.nzRouteLabelFn=s=>s,this.breadcrumbs=[],this.dir="ltr",this.destroy$=new he}ngOnInit(){this.nzAutoGenerate&&this.registerRouterChange(),this.directionality.change?.pipe(Qe(this.destroy$)).subscribe(t=>{this.dir=t,this.prepareComponentForRtl(),this.cdr.detectChanges()}),this.dir=this.directionality.value,this.prepareComponentForRtl()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}navigate(t,n){n.preventDefault(),this.injector.get(I).navigateByUrl(t)}registerRouterChange(){try{let t=this.injector.get(I),n=this.injector.get(se);t.events.pipe(k(e=>e instanceof oe),Qe(this.destroy$),at(!0)).subscribe(()=>{this.breadcrumbs=this.getBreadcrumbs(n.root),this.cdr.markForCheck()})}catch{throw new Error(`${Rt} You should import RouterModule if you want to use 'NzAutoGenerate'.`)}}getBreadcrumbs(t,n="",e=[]){let i=t.children;if(i.length===0)return e;for(let o of i)if(o.outlet===Ct){let s=o.snapshot.url.map(_=>_.path).filter(_=>_).join("/"),a=s?`${n}/${s}`:n,b=this.nzRouteLabelFn(o.snapshot.data[this.nzRouteLabel]);if(s&&b){let _={label:b,params:o.snapshot.params,url:a};e.push(_)}return this.getBreadcrumbs(o,a,e)}return e}prepareComponentForRtl(){this.dir==="rtl"?this.renderer.addClass(this.elementRef.nativeElement,"ant-breadcrumb-rtl"):this.renderer.removeClass(this.elementRef.nativeElement,"ant-breadcrumb-rtl")}};L.\u0275fac=function(n){return new(n||L)(u(ke),u(K),u(mt),u(Be),u(ae,8))},L.\u0275cmp=v({type:L,selectors:[["nz-breadcrumb"]],hostAttrs:[1,"ant-breadcrumb"],inputs:{nzAutoGenerate:"nzAutoGenerate",nzSeparator:"nzSeparator",nzRouteLabel:"nzRouteLabel",nzRouteLabelFn:"nzRouteLabelFn"},exportAs:["nzBreadcrumb"],features:[Oe([{provide:Ye,useExisting:L}])],ngContentSelectors:Ze,decls:2,vars:1,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"click"]],template:function(n,e){n&1&&(Z(),ee(0),p(1,Ri,2,1,"ng-container",0)),n&2&&(l(1),m("ngIf",e.nzAutoGenerate&&e.breadcrumbs.length))},dependencies:[gt,qe,et],encapsulation:2,changeDetection:0});var Re=L;f([Mt()],Re.prototype,"nzAutoGenerate",void 0);var qt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=$({type:t}),t.\u0275inj=V({imports:[re,Fe,Ue,Nt,Ft,le,St]});let r=t;return r})();var zi=["conTpl"],Ii=["affix"];function ki(r,t){}function Bi(r,t){if(r&1&&(d(0,"nz-affix",0,2),p(2,ki,0,0,"ng-template",3),h()),r&2){let n=c(),e=D(3);m("nzOffsetTop",n.fixedOffsetTop),l(2),m("ngTemplateOutlet",e)}}function wi(r,t){}function Oi(r,t){if(r&1&&p(0,wi,0,0,"ng-template",3),r&2){c();let n=D(3);m("ngTemplateOutlet",n)}}function Di(r,t){}function Ai(r,t){if(r&1&&p(0,Di,0,0,"ng-template",3),r&2){let n=c(2);m("ngTemplateOutlet",n.breadcrumb)}}function Ni(r,t){if(r&1&&(d(0,"a",16),z(1),h()),r&2){let n=c().$implicit;m("routerLink",n.link),l(1),ge(n.title)}}function ji(r,t){if(r&1&&z(0),r&2){let n=c().$implicit;P(" ",n.title," ")}}function Pi(r,t){if(r&1&&(d(0,"nz-breadcrumb-item"),p(1,Ni,2,2,"a",16)(2,ji,1,1),h()),r&2){let n=t.$implicit;l(1),g(1,n.link?1:2)}}function Ui(r,t){if(r&1&&(d(0,"nz-breadcrumb"),W(1,Pi,3,1,"nz-breadcrumb-item",null,Q),h()),r&2){let n=c(3);X(1,n.paths)}}function Hi(r,t){if(r&1&&p(0,Ui,3,0,"nz-breadcrumb"),r&2){let n=c(2);g(0,n.paths&&n.paths.length>0?0:-1)}}function Fi(r,t){}function Li(r,t){if(r&1&&(d(0,"div",17),p(1,Fi,0,0,"ng-template",3),h()),r&2){let n=c(2);l(1),m("ngTemplateOutlet",n.logo)}}function Vi(r,t){}function $i(r,t){if(r&1&&p(0,Vi,0,0,"ng-template",3),r&2){let n=c(3);m("ngTemplateOutlet",n._titleTpl)}}function Gi(r,t){if(r&1&&(q(0),z(1),J()),r&2){let n=c(5);l(1),ge(n.titleSub)}}function Ki(r,t){if(r&1&&(d(0,"small"),p(1,Gi,2,1,"ng-container",19),h()),r&2){let n=c(4);l(1),m("nzStringTemplateOutlet",n.titleSub)}}function Yi(r,t){if(r&1&&(z(0),p(1,Ki,2,1,"small")),r&2){let n=c(3);P(" ",n._titleVal," "),l(1),g(1,n.titleSub?1:-1)}}function Qi(r,t){if(r&1&&(d(0,"h1",18),p(1,$i,1,1,null,3)(2,Yi,2,2),h()),r&2){let n=c(2);l(1),g(1,n._titleTpl?1:2)}}function Wi(r,t){}function Xi(r,t){if(r&1&&(d(0,"div",20),p(1,Wi,0,0,"ng-template",3),h()),r&2){let n=c(2);l(1),m("ngTemplateOutlet",n.action)}}function qi(r,t){}function Ji(r,t){}function Zi(r,t){if(r&1&&(d(0,"div",21),p(1,Ji,0,0,"ng-template",3),h()),r&2){let n=c(2);l(1),m("ngTemplateOutlet",n.extra)}}function en(r,t){}var tn=r=>({"page-header__wide":r}),nn=()=>({rows:3}),rn=()=>({size:"large",shape:"circle"});function on(r,t){if(r&1){let n=E();d(0,"div",4)(1,"div",5)(2,"nz-skeleton",6),p(3,Ai,1,1,null,3)(4,Hi,1,1),d(5,"div",7),p(6,Li,2,1,"div",8),d(7,"div",9)(8,"div",10),p(9,Qi,3,1,"h1",11)(10,Xi,2,1,"div",12),h(),d(11,"div",10)(12,"div",13,14),C("cdkObserveContent",function(){R(n);let i=c();return M(i.checkContent())}),ee(14),p(15,qi,0,0,"ng-template",3),h(),p(16,Zi,2,1,"div",15),h()()(),p(17,en,0,0,"ng-template",3),h()()()}if(r&2){let n=c();_e("page-header-rtl",n.dir==="rtl"),l(1),m("ngClass",De(15,tn,n.wide)),l(1),m("nzLoading",n.loading)("nzTitle",!1)("nzActive",!0)("nzParagraph",Xe(17,nn))("nzAvatar",Xe(18,rn)),l(1),g(3,n.breadcrumb?3:4),l(3),g(6,n.logo?6:-1),l(3),g(9,n._titleVal||n._titleTpl?9:-1),l(1),g(10,n.action?10:-1),l(5),m("ngTemplateOutlet",n.content),l(1),g(16,n.extra?16:-1),l(1),m("ngTemplateOutlet",n.tab)}}var sn=["*"],pe=class pe{get menus(){return this.menuSrv.getPathByUrl(this.router.url,this.recursiveBreadcrumb)}set title(t){t instanceof ht?(this._title=null,this._titleTpl=t,this._titleVal=""):(this._title=t,this._titleVal=this._title)}constructor(t,n,e,i,o,s,a,b,_,N,Me){this.renderer=n,this.router=e,this.menuSrv=i,this.i18nSrv=o,this.titleSrv=s,this.reuseSrv=a,this.cdr=b,this.directionality=Me,this.dir$=this.directionality.change?.pipe(A()),this.inited=!1,this.isBrowser=!0,this.dir="ltr",this._titleVal="",this.paths=[],this._title=null,this._titleTpl=null,this.loading=!1,this.wide=!1,this.breadcrumb=null,this.logo=null,this.action=null,this.content=null,this.extra=null,this.tab=null,this.isBrowser=N.isBrowser,_.attach(this,"pageHeader",{home:"\u9996\u9875",homeLink:"/",autoBreadcrumb:!0,recursiveBreadcrumb:!1,autoTitle:!0,syncTitle:!0,fixed:!1,fixedOffsetTop:64}),t.notify.pipe(A(),k(S=>this.affix&&S.type==="layout"&&S.name==="collapsed")).subscribe(()=>this.affix.updatePosition({})),ot(i.change,e.events.pipe(k(S=>S instanceof oe)),o.change).pipe(A(),k(()=>this.inited)).subscribe(()=>this.refresh())}refresh(){this.setTitle().genBreadcrumb(),this.cdr.detectChanges()}genBreadcrumb(){if(this.breadcrumb||!this.autoBreadcrumb||this.menus.length<=0){this.paths=[];return}let t=[];this.menus.forEach(n=>{if(typeof n.hideInBreadcrumb<"u"&&n.hideInBreadcrumb)return;let e=n.text;n.i18n&&this.i18nSrv&&(e=this.i18nSrv.fanyi(n.i18n)),t.push({title:e,link:n.link&&[n.link]})}),this.home&&t.splice(0,0,{title:this.homeI18n&&this.i18nSrv&&this.i18nSrv.fanyi(this.homeI18n)||this.home,link:[this.homeLink]}),this.paths=t}setTitle(){if(this._title==null&&this._titleTpl==null&&this.autoTitle&&this.menus.length>0){let t=this.menus[this.menus.length-1],n=t.text;t.i18n&&this.i18nSrv&&(n=this.i18nSrv.fanyi(t.i18n)),this._titleVal=n}return this._titleVal&&this.syncTitle&&(this.titleSrv&&this.titleSrv.setTitle(this._titleVal),!this.inited&&this.reuseSrv&&(this.reuseSrv.title=this._titleVal)),this}checkContent(){Dt(this.conTpl.nativeElement)?this.renderer.setAttribute(this.conTpl.nativeElement,"hidden",""):this.renderer.removeAttribute(this.conTpl.nativeElement,"hidden")}ngOnInit(){this.dir=this.directionality.value,this.dir$.subscribe(t=>{this.dir=t,this.cdr.detectChanges()}),this.refresh(),this.inited=!0}ngAfterViewInit(){this.checkContent()}ngOnChanges(){this.inited&&this.refresh()}};pe.\u0275fac=function(n){return new(n||pe)(u(yt),u(Be),u(I),u(je),u(Ne,8),u(Et,8),u(ue,8),u(K),u(Tt),u(Pe),u(ae,8))},pe.\u0275cmp=v({type:pe,selectors:[["page-header"]],viewQuery:function(n,e){if(n&1&&(xe(zi,5),xe(Ii,5)),n&2){let i;Ce(i=be())&&(e.conTpl=i.first),Ce(i=be())&&(e.affix=i.first)}},inputs:{title:"title",titleSub:"titleSub",loading:"loading",wide:"wide",home:"home",homeLink:"homeLink",homeI18n:"homeI18n",autoBreadcrumb:"autoBreadcrumb",autoTitle:"autoTitle",syncTitle:"syncTitle",fixed:"fixed",fixedOffsetTop:"fixedOffsetTop",breadcrumb:"breadcrumb",recursiveBreadcrumb:"recursiveBreadcrumb",logo:"logo",action:"action",content:"content",extra:"extra",tab:"tab"},exportAs:["pageHeader"],features:[Ie],ngContentSelectors:sn,decls:4,vars:1,consts:[[3,"nzOffsetTop"],["phTpl",""],["affix",""],[3,"ngTemplateOutlet"],[1,"page-header"],[3,"ngClass"],[1,"d-block",3,"nzLoading","nzTitle","nzActive","nzParagraph","nzAvatar"],[1,"page-header__detail"],["class","page-header__logo"],[1,"page-header__main"],[1,"page-header__row"],["class","page-header__title"],["class","page-header__action"],[1,"page-header__desc",3,"cdkObserveContent"],["conTpl",""],["class","page-header__extra"],[3,"routerLink"],[1,"page-header__logo"],[1,"page-header__title"],[4,"nzStringTemplateOutlet"],[1,"page-header__action"],[1,"page-header__extra"]],template:function(n,e){n&1&&(Z(),p(0,Bi,3,2,"nz-affix",0)(1,Oi,1,1)(2,on,18,19,"ng-template",null,1,ie)),n&2&&g(0,e.isBrowser&&e.fixed?0:1)},dependencies:[_t,ne,vt,kt,Lt,Kt,Re,et,He],encapsulation:2,changeDetection:0});var y=pe;f([x()],y.prototype,"loading",void 0);f([x()],y.prototype,"wide",void 0);f([x()],y.prototype,"autoBreadcrumb",void 0);f([x()],y.prototype,"autoTitle",void 0);f([x()],y.prototype,"syncTitle",void 0);f([x()],y.prototype,"fixed",void 0);f([ve()],y.prototype,"fixedOffsetTop",void 0);f([x()],y.prototype,"recursiveBreadcrumb",void 0);var an=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=$({type:t}),t.\u0275inj=V({imports:[re,Ae,Bt,Vt,Yt,qt,Fe]});let r=t;return r})();export{T as a,fi as b,et as c,Re as d,qt as e,y as f,an as g};
