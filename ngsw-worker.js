(()=>{var t,e,s=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,__defNormalProp=(t,e,a)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,__spreadValues=(t,e)=>{for(var s in e||(e={}))r.call(e,s)&&__defNormalProp(t,s,e[s]);if(n)for(var s of n(e))h.call(e,s)&&__defNormalProp(t,s,e[s]);return t},__spreadProps=(t,e)=>a(t,i(e)),o=class{constructor(t,e){this.original=t,this.cacheNamePrefix=e}delete(t){return this.original.delete(`${this.cacheNamePrefix}:${t}`)}has(t){return this.original.has(`${this.cacheNamePrefix}:${t}`)}async keys(){const t=`${this.cacheNamePrefix}:`;return(await this.original.keys()).filter((e=>e.startsWith(t))).map((e=>e.slice(t.length)))}match(t,e){return this.original.match(t,e)}async open(t){const e=await this.original.open(`${this.cacheNamePrefix}:${t}`);return Object.assign(e,{name:t})}},c=class{constructor(t,e){this.table=t,this.key=e}},l=class{constructor(t,e,s,a){this.name=t,this.cache=e,this.adapter=s,this.cacheQueryOptions=a,this.cacheName=this.cache.name}request(t){return this.adapter.newRequest("/"+t)}delete(t){return this.cache.delete(this.request(t),this.cacheQueryOptions)}keys(){return this.cache.keys().then((t=>t.map((t=>t.url.slice(1)))))}read(t){return this.cache.match(this.request(t),this.cacheQueryOptions).then((e=>void 0===e?Promise.reject(new c(this.name,t)):e.json()))}write(t,e){return this.cache.put(this.request(t),this.adapter.newResponse(JSON.stringify(e)))}};(e=t||(t={}))[e.NOT_CACHED=0]="NOT_CACHED",e[e.CACHED_BUT_UNUSED=1]="CACHED_BUT_UNUSED",e[e.CACHED=2]="CACHED";var u=class extends Error{constructor(){super(...arguments),this.isCritical=!0}};function errorToString(t){return t instanceof Error?`${t.message}\n${t.stack}`:`${t}`}var d,p,g=class extends u{constructor(){super(...arguments),this.isUnrecoverableState=!0}};function sha1(t){const e=t,s=function stringToWords32(t,e){const s=t.length+3>>>2,a=[];for(let i=0;i<s;i++)a[i]=wordAt(t,4*i,e);return a}(e,d.Big);return _sha1(s,8*e.length)}function sha1Binary(t){const e=function arrayBufferToWords32(t,e){const s=t.byteLength+3>>>2,a=[],i=new Uint8Array(t);for(let t=0;t<s;t++)a[t]=wordAt(i,4*t,e);return a}(t,d.Big);return _sha1(e,8*t.byteLength)}function _sha1(t,e){const s=[];let[a,i,n,r,h]=[1732584193,4023233417,2562383102,271733878,3285377520];t[e>>5]|=128<<24-e%32,t[15+(e+64>>9<<4)]=e;for(let e=0;e<t.length;e+=16){const[o,c,l,u,d]=[a,i,n,r,h];for(let o=0;o<80;o++){s[o]=o<16?t[e+o]:rol32(s[o-3]^s[o-8]^s[o-14]^s[o-16],1);const[c,l]=fk(o,i,n,r),u=[rol32(a,5),c,h,l,s[o]].reduce(add32);[h,r,n,i,a]=[r,n,rol32(i,30),a,u]}[a,i,n,r,h]=[add32(a,o),add32(i,c),add32(n,l),add32(r,u),add32(h,d)]}return function byteStringToHexString(t){let e="";for(let s=0;s<t.length;s++){const a=byteAt(t,s);e+=(a>>>4).toString(16)+(15&a).toString(16)}return e.toLowerCase()}(function words32ToByteString(t){return t.reduce(((t,e)=>t+function word32ToByteString(t){let e="";for(let s=0;s<4;s++)e+=String.fromCharCode(t>>>8*(3-s)&255);return e}(e)),"")}([a,i,n,r,h]))}function add32(t,e){return function add32to64(t,e){const s=(65535&t)+(65535&e),a=(t>>>16)+(e>>>16)+(s>>>16);return[a>>>16,a<<16|65535&s]}(t,e)[1]}function rol32(t,e){return t<<e|t>>>32-e}function fk(t,e,s,a){return t<20?[e&s|~e&a,1518500249]:t<40?[e^s^a,1859775393]:t<60?[e&s|e&a|s&a,2400959708]:[e^s^a,3395469782]}function byteAt(t,e){return"string"==typeof t?e>=t.length?0:255&t.charCodeAt(e):e>=t.byteLength?0:255&t[e]}function wordAt(t,e,s){let a=0;if(s===d.Big)for(let s=0;s<4;s++)a+=byteAt(t,e+s)<<24-8*s;else for(let s=0;s<4;s++)a+=byteAt(t,e+s)<<8*s;return a}(p=d||(d={}))[p.Little=0]="Little",p[p.Big=1]="Big";var w=class{constructor(t,e,s,a,i,n,r){this.scope=t,this.adapter=e,this.idle=s,this.config=a,this.hashes=i,this.db=n,this.inFlightRequests=new Map,this.urls=[],this.patterns=[],this.name=a.name,this.urls=a.urls.map((t=>e.normalizeUrl(t))),this.patterns=a.patterns.map((t=>new RegExp(t))),this.cache=e.caches.open(`${r}:${a.name}:cache`),this.metadata=this.db.open(`${r}:${a.name}:meta`,a.cacheQueryOptions)}async cacheStatus(e){const s=await this.cache,a=await this.metadata,i=this.adapter.newRequest(e);if(void 0===await s.match(i,this.config.cacheQueryOptions))return t.NOT_CACHED;try{if(!(await a.read(i.url)).used)return t.CACHED_BUT_UNUSED}catch(t){}return t.CACHED}async getCacheNames(){const[t,e]=await Promise.all([this.cache,this.metadata]);return[t.name,e.cacheName]}async handleFetch(t,e){const s=this.adapter.normalizeUrl(t.url);if(-1!==this.urls.indexOf(s)||this.patterns.some((t=>t.test(s)))){const e=await this.cache,a=await e.match(t,this.config.cacheQueryOptions);if(void 0!==a)return this.hashes.has(s)||await this.needToRevalidate(t,a)&&this.idle.schedule(`revalidate(${e.name}): ${t.url}`,(async()=>{await this.fetchAndCacheOnce(t)})),a;return(await this.fetchAndCacheOnce(this.newRequestWithMetadata(t.url,t))).clone()}return null}async needToRevalidate(t,e){if(e.headers.has("Cache-Control")){const s=e.headers.get("Cache-Control").split(",").map((t=>t.trim())).map((t=>t.split("=")));s.forEach((t=>t[0]=t[0].toLowerCase()));const a=s.find((t=>"max-age"===t[0])),i=a?a[1]:void 0;if(!i)return!0;try{const s=1e3*parseInt(i);let a;try{const e=await this.metadata;a=(await e.read(t.url)).ts}catch(t){const s=e.headers.get("Date");if(null===s)return!0;a=Date.parse(s)}const n=this.adapter.time-a;return n<0||n>s}catch(t){return!0}}else{if(!e.headers.has("Expires"))return!0;{const t=e.headers.get("Expires");try{return this.adapter.time>Date.parse(t)}catch(t){return!0}}}}async fetchFromCacheOnly(t){const e=await this.cache,s=await this.metadata,a=this.adapter.newRequest(t),i=await e.match(a,this.config.cacheQueryOptions);if(void 0===i)return null;let n;try{n=await s.read(a.url)}catch(t){}return{response:i,metadata:n}}async unhashedResources(){const t=await this.cache;return(await t.keys()).map((t=>this.adapter.normalizeUrl(t.url))).filter((t=>!this.hashes.has(t)))}async fetchAndCacheOnce(t,e=!0){if(this.inFlightRequests.has(t.url))return this.inFlightRequests.get(t.url);const s=this.fetchFromNetwork(t);this.inFlightRequests.set(t.url,s);try{const a=await s;if(!a.ok)throw new Error(`Response not Ok (fetchAndCacheOnce): request for ${t.url} returned response ${a.status} ${a.statusText}`);try{const s=await this.cache;if(await s.put(t,a.clone()),!this.hashes.has(this.adapter.normalizeUrl(t.url))){const s={ts:this.adapter.time,used:e},a=await this.metadata;await a.write(t.url,s)}return a}catch(e){throw new u(`Failed to update the caches for request to '${t.url}' (fetchAndCacheOnce): ${errorToString(e)}`)}}finally{this.inFlightRequests.delete(t.url)}}async fetchFromNetwork(t,e=3){const s=await this.cacheBustedFetchFromNetwork(t);if(s.redirected&&s.url){if(0===e)throw new u(`Response hit redirect limit (fetchFromNetwork): request redirected too many times, next is ${s.url}`);return this.fetchFromNetwork(this.newRequestWithMetadata(s.url,t),e-1)}return s}async cacheBustedFetchFromNetwork(t){const e=this.adapter.normalizeUrl(t.url);if(this.hashes.has(e)){const s=this.hashes.get(e);let a=await this.safeFetch(t),i=a.ok;if(i){i=sha1Binary(await a.clone().arrayBuffer())!==s}if(i){const e=this.newRequestWithMetadata(this.cacheBust(t.url),t);if(a=await this.safeFetch(e),a.ok){const e=sha1Binary(await a.clone().arrayBuffer());if(s!==e)throw new u(`Hash mismatch (cacheBustedFetchFromNetwork): ${t.url}: expected ${s}, got ${e} (after cache busting)`)}}if(!a.ok&&404===a.status)throw new g(`Failed to retrieve hashed resource from the server. (AssetGroup: ${this.config.name} | URL: ${e})`);return a}return this.safeFetch(t)}async maybeUpdate(t,e,s){const a=this.adapter.normalizeUrl(e.url);if(this.hashes.has(a)){const i=this.hashes.get(a),n=await t.lookupResourceWithHash(a,i);if(null!==n)return await s.put(e,n),!0}return!1}newRequestWithMetadata(t,e){return this.adapter.newRequest(t,{headers:e.headers})}cacheBust(t){return t+(-1===t.indexOf("?")?"?":"&")+"ngsw-cache-bust="+Math.random()}async safeFetch(t){try{return await this.scope.fetch(t)}catch(t){return this.adapter.newResponse("",{status:504,statusText:"Gateway Timeout"})}}},f=class extends w{async initializeFully(t){const e=await this.cache;if(await this.urls.reduce((async(s,a)=>{await s;const i=this.adapter.newRequest(a);void 0!==await e.match(i,this.config.cacheQueryOptions)||void 0!==t&&await this.maybeUpdate(t,i,e)||await this.fetchAndCacheOnce(i,!1)}),Promise.resolve()),void 0!==t){const s=await this.metadata;await(await t.previouslyCachedResources()).filter((t=>-1!==this.urls.indexOf(t)||this.patterns.some((e=>e.test(t))))).reduce((async(a,i)=>{await a;const n=this.adapter.newRequest(i);if(void 0!==await e.match(n,this.config.cacheQueryOptions))return;const r=await t.lookupResourceWithoutHash(i);null!==r&&void 0!==r.metadata&&(await e.put(n,r.response),await s.write(n.url,__spreadProps(__spreadValues({},r.metadata),{used:!1})))}),Promise.resolve())}}},m=class extends w{async initializeFully(e){if(void 0===e)return;const s=await this.cache;await this.urls.reduce((async(a,i)=>{await a;const n=this.adapter.newRequest(i);if(void 0!==await s.match(n,this.config.cacheQueryOptions))return;const r=await this.maybeUpdate(e,n,s);if("prefetch"===this.config.updateMode&&!r){if(await e.recentCacheStatus(i)!==t.CACHED)return;await this.fetchAndCacheOnce(n,!1)}}),Promise.resolve())}},y=class{constructor(t){void 0===t&&(t={head:null,tail:null,map:{},count:0}),this.state=t}get size(){return this.state.count}pop(){if(null===this.state.tail)return null;const t=this.state.tail;return this.remove(t),t}remove(t){const e=this.state.map[t];if(void 0===e)return!1;if(this.state.head===t){if(null===e.next)return this.state.head=null,this.state.tail=null,this.state.map={},this.state.count=0,!0;const s=this.state.map[e.next];return s.previous=null,this.state.head=s.url,e.next=null,delete this.state.map[t],this.state.count--,!0}return this.state.map[e.previous].next=e.next,null!==e.next?this.state.map[e.next].previous=e.previous:this.state.tail=e.previous,e.next=null,e.previous=null,delete this.state.map[t],this.state.count--,!0}accessed(t){if(this.state.head===t)return;const e=this.state.map[t]||{url:t,next:null,previous:null};void 0!==this.state.map[t]&&this.remove(t),null!==this.state.head&&(this.state.map[this.state.head].previous=t),e.next=this.state.head,this.state.head=t,null===this.state.tail&&(this.state.tail=t),this.state.map[t]=e,this.state.count++}},v=class{constructor(t,e,s,a,i,n){this.scope=t,this.adapter=e,this.config=s,this.db=a,this.debugHandler=i,this._lru=null,this.patterns=s.patterns.map((t=>new RegExp(t))),this.cache=e.caches.open(`${n}:${s.name}:cache`),this.lruTable=this.db.open(`${n}:${s.name}:lru`,s.cacheQueryOptions),this.ageTable=this.db.open(`${n}:${s.name}:age`,s.cacheQueryOptions)}async lru(){if(null===this._lru){const t=await this.lruTable;try{this._lru=new y(await t.read("lru"))}catch(t){this._lru=new y}}return this._lru}async syncLru(){if(null===this._lru)return;const t=await this.lruTable;try{return t.write("lru",this._lru.state)}catch(t){this.debugHandler.log(t,`DataGroup(${this.config.name}@${this.config.version}).syncLru()`)}}async handleFetch(t,e){if(!this.patterns.some((e=>e.test(t.url))))return null;const s=await this.lru();switch(t.method){case"OPTIONS":return null;case"GET":case"HEAD":switch(this.config.strategy){case"freshness":return this.handleFetchWithFreshness(t,e,s);case"performance":return this.handleFetchWithPerformance(t,e,s);default:throw new Error(`Unknown strategy: ${this.config.strategy}`)}default:return s.remove(t.url)&&await this.clearCacheForUrl(t.url),await this.syncLru(),this.safeFetch(t)}}async handleFetchWithPerformance(t,e,s){var a;const i=null!=(a=this.config.cacheOpaqueResponses)&&a;let n=null;const r=await this.loadFromCache(t,s);if(null!==r&&(n=r.res,void 0!==this.config.refreshAheadMs&&r.age>=this.config.refreshAheadMs&&e.waitUntil(this.safeCacheResponse(t,this.safeFetch(t),s,i))),null!==n)return n;const[h,o]=this.networkFetchWithTimeout(t);return n=await h,void 0===n?(n=this.adapter.newResponse(null,{status:504,statusText:"Gateway Timeout"}),e.waitUntil(this.safeCacheResponse(t,o,s,i))):await this.safeCacheResponse(t,n,s,i),n}async handleFetchWithFreshness(t,e,s){var a;const i=null==(a=this.config.cacheOpaqueResponses)||a,[n,r]=this.networkFetchWithTimeout(t);let h;try{h=await n}catch(t){h=void 0}if(void 0===h){e.waitUntil(this.safeCacheResponse(t,r,s,i));const a=await this.loadFromCache(t,s);h=null!==a?a.res:null}else await this.safeCacheResponse(t,h,s,i);return null!==h?h:r}networkFetchWithTimeout(t){if(void 0!==this.config.timeoutMs){const e=this.scope.fetch(t),s=(async()=>{try{return await e}catch(t){return this.adapter.newResponse(null,{status:504,statusText:"Gateway Timeout"})}})(),a=(async()=>{try{return await e}catch(t){return}})(),i=this.adapter.timeout(this.config.timeoutMs);return[Promise.race([a,i]),s]}{const e=this.safeFetch(t);return[e,e]}}async safeCacheResponse(t,e,s,a){try{const i=await e;try{await this.cacheResponse(t,i,s,a)}catch(e){this.debugHandler.log(e,`DataGroup(${this.config.name}@${this.config.version}).safeCacheResponse(${t.url}, status: ${i.status})`)}}catch(t){}}async loadFromCache(t,e){const s=await this.cache;let a=await s.match(t,this.config.cacheQueryOptions);if(void 0!==a){try{const s=await this.ageTable,i=this.adapter.time-(await s.read(t.url)).age;if(i<=this.config.maxAge)return e.accessed(t.url),{res:a,age:i}}catch(t){}e.remove(t.url),await this.clearCacheForUrl(t.url),await this.syncLru()}return null}async cacheResponse(t,e,s,a=!1){if(!(e.ok||a&&"opaque"===e.type))return;if(s.size>=this.config.maxSize){const t=s.pop();null!==t&&await this.clearCacheForUrl(t)}s.accessed(t.url),await(await this.cache).put(t,e.clone());const i=await this.ageTable;await i.write(t.url,{age:this.adapter.time}),await this.syncLru()}async cleanup(){await Promise.all([this.cache.then((t=>this.adapter.caches.delete(t.name))),this.ageTable.then((t=>this.db.delete(t.name))),this.lruTable.then((t=>this.db.delete(t.name)))])}async getCacheNames(){const[t,e,s]=await Promise.all([this.cache,this.ageTable,this.lruTable]);return[t.name,e.cacheName,s.cacheName]}async clearCacheForUrl(t){const[e,s]=await Promise.all([this.cache,this.ageTable]);await Promise.all([e.delete(this.adapter.newRequest(t,{method:"GET"}),this.config.cacheQueryOptions),e.delete(this.adapter.newRequest(t,{method:"HEAD"}),this.config.cacheQueryOptions),s.delete(t)])}async safeFetch(t){try{return this.scope.fetch(t)}catch(t){return this.adapter.newResponse(null,{status:504,statusText:"Gateway Timeout"})}}},C=[{positive:!0,regex:"^/.*$"},{positive:!1,regex:"^/.*\\.[^/]*$"},{positive:!1,regex:"^/.*__"}],b=class{get okay(){return this._okay}constructor(t,e,s,a,i,n,r){this.scope=t,this.adapter=e,this.database=s,this.debugHandler=i,this.manifest=n,this.manifestHash=r,this.hashTable=new Map,this._okay=!0,this.indexUrl=this.adapter.normalizeUrl(this.manifest.index),Object.keys(n.hashTable).forEach((t=>{this.hashTable.set(e.normalizeUrl(t),n.hashTable[t])}));const h=`${r}:assets`;this.assetGroups=(n.assetGroups||[]).map((i=>{switch(i.installMode){case"prefetch":return new f(t,e,a,i,this.hashTable,s,h);case"lazy":return new m(t,e,a,i,this.hashTable,s,h)}})),this.dataGroups=(n.dataGroups||[]).map((a=>new v(t,e,a,s,i,`${a.version}:data`))),n.navigationUrls=n.navigationUrls||C;const o=n.navigationUrls.filter((t=>t.positive)),c=n.navigationUrls.filter((t=>!t.positive));this.navigationUrls={include:o.map((t=>new RegExp(t.regex))),exclude:c.map((t=>new RegExp(t.regex)))}}async initializeFully(t){try{await this.assetGroups.reduce((async(e,s)=>(await e,s.initializeFully(t))),Promise.resolve())}catch(t){throw this._okay=!1,t}}async handleFetch(t,e){const s=await this.assetGroups.reduce((async(s,a)=>{const i=await s;return null!==i?i:a.handleFetch(t,e)}),Promise.resolve(null));if(null!==s)return s;const a=await this.dataGroups.reduce((async(s,a)=>{const i=await s;return null!==i?i:a.handleFetch(t,e)}),Promise.resolve(null));if(null!==a)return a;if(this.adapter.normalizeUrl(t.url)!==this.indexUrl&&this.isNavigationRequest(t)){if("freshness"===this.manifest.navigationRequestStrategy)try{return await this.scope.fetch(t)}catch(t){}return this.handleFetch(this.adapter.newRequest(this.indexUrl),e)}return null}isNavigationRequest(t){if("GET"!==t.method||"navigate"!==t.mode)return!1;if(!this.acceptsTextHtml(t))return!1;const e=this.scope.registration.scope.replace(/\/$/,""),s=(t.url.startsWith(e)?t.url.slice(e.length):t.url).replace(/[?#].*$/,"");return this.navigationUrls.include.some((t=>t.test(s)))&&!this.navigationUrls.exclude.some((t=>t.test(s)))}async lookupResourceWithHash(t,e){if(!this.hashTable.has(t))return null;if(this.hashTable.get(t)!==e)return null;const s=await this.lookupResourceWithoutHash(t);return s&&s.response}lookupResourceWithoutHash(t){return this.assetGroups.reduce((async(e,s)=>{const a=await e;return null!==a?a:s.fetchFromCacheOnly(t)}),Promise.resolve(null))}previouslyCachedResources(){return this.assetGroups.reduce((async(t,e)=>(await t).concat(await e.unhashedResources())),Promise.resolve([]))}async recentCacheStatus(e){return this.assetGroups.reduce((async(s,a)=>{const i=await s;if(i===t.CACHED)return i;const n=await a.cacheStatus(e);return n===t.NOT_CACHED?i:n}),Promise.resolve(t.NOT_CACHED))}async getCacheNames(){const t=await Promise.all([...this.assetGroups.map((t=>t.getCacheNames())),...this.dataGroups.map((t=>t.getCacheNames()))]);return[].concat(...t)}get appData(){return this.manifest.appData||null}acceptsTextHtml(t){const e=t.headers.get("Accept");if(null===e)return!1;return e.split(",").some((t=>"text/html"===t.trim().toLowerCase()))}},A=class{constructor(t,e){this.driver=t,this.adapter=e,this.debugLogA=[],this.debugLogB=[]}async handleFetch(t){const[e,s,a]=await Promise.all([this.driver.debugState(),this.driver.debugVersions(),this.driver.debugIdleState()]),i=`NGSW Debug Info:\n\nDriver version: 16.2.4\nDriver state: ${e.state} (${e.why})\nLatest manifest hash: ${e.latestHash||"none"}\nLast update check: ${this.since(e.lastUpdateCheck)}`,n=s.map((t=>`=== Version ${t.hash} ===\n\nClients: ${t.clients.join(", ")}`)).join("\n\n"),r=`=== Idle Task Queue ===\nLast update tick: ${this.since(a.lastTrigger)}\nLast update run: ${this.since(a.lastRun)}\nTask queue:\n${a.queue.map((t=>" * "+t)).join("\n")}\n\nDebug log:\n${this.formatDebugLog(this.debugLogB)}\n${this.formatDebugLog(this.debugLogA)}\n`;return this.adapter.newResponse(`${i}\n\n${n}\n\n${r}`,{headers:this.adapter.newHeaders({"Content-Type":"text/plain"})})}since(t){if(null===t)return"never";let e=this.adapter.time-t;const s=Math.floor(e/864e5);e%=864e5;const a=Math.floor(e/36e5);e%=36e5;const i=Math.floor(e/6e4);e%=6e4;const n=Math.floor(e/1e3),r=e%1e3;return(s>0?`${s}d`:"")+(a>0?`${a}h`:"")+(i>0?`${i}m`:"")+(n>0?`${n}s`:"")+(r>0?`${r}u`:"")}log(t,e=""){100===this.debugLogA.length&&(this.debugLogB=this.debugLogA,this.debugLogA=[]),"string"!=typeof t&&(t=this.errorToString(t)),this.debugLogA.push({value:t,time:this.adapter.time,context:e})}errorToString(t){return`${t.name}(${t.message}, ${t.stack})`}formatDebugLog(t){return t.map((t=>`[${this.since(t.time)}] ${t.value} ${t.context}`)).join("\n")}},E=class{constructor(t,e,s,a){this.adapter=t,this.delay=e,this.maxDelay=s,this.debug=a,this.queue=[],this.scheduled=null,this.empty=Promise.resolve(),this.emptyResolve=null,this.lastTrigger=null,this.lastRun=null,this.oldestScheduledAt=null}async trigger(){var t;if(this.lastTrigger=this.adapter.time,0===this.queue.length)return;null!==this.scheduled&&(this.scheduled.cancel=!0);const e={cancel:!1};this.scheduled=e;const s=this.adapter.time,a=Math.max(0,(null!=(t=this.oldestScheduledAt)?t:s)+this.maxDelay-s),i=Math.min(a,this.delay);await this.adapter.timeout(i),e.cancel||(this.scheduled=null,await this.execute())}async execute(){for(this.lastRun=this.adapter.time;this.queue.length>0;){const t=this.queue;this.queue=[],await t.reduce((async(t,e)=>{await t;try{await e.run()}catch(t){this.debug.log(t,`while running idle task ${e.desc}`)}}),Promise.resolve())}null!==this.emptyResolve&&(this.emptyResolve(),this.emptyResolve=null),this.empty=Promise.resolve(),this.oldestScheduledAt=null}schedule(t,e){this.queue.push({desc:t,run:e}),null===this.emptyResolve&&(this.empty=new Promise((t=>{this.emptyResolve=t}))),null===this.oldestScheduledAt&&(this.oldestScheduledAt=this.adapter.time)}get size(){return this.queue.length}get taskDescriptions(){return this.queue.map((t=>t.desc))}};function hashManifest(t){return sha1(JSON.stringify(t))}var T,R,$=["actions","badge","body","data","dir","icon","image","lang","renotify","requireInteraction","silent","tag","timestamp","title","vibrate"];(R=T||(T={}))[R.NORMAL=0]="NORMAL",R[R.EXISTING_CLIENTS_ONLY=1]="EXISTING_CLIENTS_ONLY",R[R.SAFE_MODE=2]="SAFE_MODE";var O=self,k=new class{constructor(t,e){this.scopeUrl=t;const s=this.parseUrl(this.scopeUrl);this.origin=s.origin,this.caches=new o(e,`ngsw:${s.path}`)}newRequest(t,e){return new Request(t,e)}newResponse(t,e){return new Response(t,e)}newHeaders(t){return new Headers(t)}isClient(t){return t instanceof Client}get time(){return Date.now()}normalizeUrl(t){const e=this.parseUrl(t,this.scopeUrl);return e.origin===this.origin?e.path:t}parseUrl(t,e){const s=e?new URL(t,e):new URL(t);return{origin:s.origin,path:s.pathname,search:s.search}}timeout(t){return new Promise((e=>{setTimeout((()=>e()),t)}))}}(O.registration.scope,self.caches);new class{constructor(t,e,s){this.scope=t,this.adapter=e,this.db=s,this.state=T.NORMAL,this.stateMessage="(nominal)",this.initialized=null,this.clientVersionMap=new Map,this.versions=new Map,this.latestHash=null,this.lastUpdateCheck=null,this.scheduledNavUpdateCheck=!1,this.loggedInvalidOnlyIfCachedRequest=!1,this.controlTable=this.db.open("control"),this.ngswStatePath=this.adapter.parseUrl("ngsw/state",this.scope.registration.scope).path,this.scope.addEventListener("install",(t=>{t.waitUntil(this.scope.skipWaiting())})),this.scope.addEventListener("activate",(t=>{t.waitUntil((async()=>{await this.scope.clients.claim(),this.idle.schedule("activate: cleanup-old-sw-caches",(async()=>{try{await this.cleanupOldSwCaches()}catch(t){this.debugger.log(t,"cleanupOldSwCaches @ activate: cleanup-old-sw-caches")}}))})()),null!==this.scope.registration.active&&this.scope.registration.active.postMessage({action:"INITIALIZE"})})),this.scope.addEventListener("fetch",(t=>this.onFetch(t))),this.scope.addEventListener("message",(t=>this.onMessage(t))),this.scope.addEventListener("push",(t=>this.onPush(t))),this.scope.addEventListener("notificationclick",(t=>this.onClick(t))),this.debugger=new A(this,this.adapter),this.idle=new E(this.adapter,5e3,3e4,this.debugger)}onFetch(t){const e=t.request,s=this.scope.registration.scope,a=this.adapter.parseUrl(e.url,s);e.headers.has("ngsw-bypass")||/[?&]ngsw-bypass(?:[=&]|$)/i.test(a.search)||(a.path!==this.ngswStatePath?this.state!==T.SAFE_MODE?a.origin.startsWith("http:")&&s.startsWith("https:")?this.debugger.log(`Ignoring passive mixed content request: Driver.fetch(${e.url})`):"only-if-cached"!==e.cache||"same-origin"===e.mode?t.respondWith(this.handleFetch(t)):this.loggedInvalidOnlyIfCachedRequest||(this.loggedInvalidOnlyIfCachedRequest=!0,this.debugger.log("Ignoring invalid request: 'only-if-cached' can be set only with 'same-origin' mode",`Driver.fetch(${e.url}, cache: ${e.cache}, mode: ${e.mode})`)):t.waitUntil(this.idle.trigger()):t.respondWith(this.debugger.handleFetch(e)))}onMessage(t){if(this.state===T.SAFE_MODE)return;const e=t.data;e&&e.action&&t.waitUntil((async()=>{if("INITIALIZE"===e.action)return this.ensureInitialized(t);this.adapter.isClient(t.source)&&(await this.ensureInitialized(t),await this.handleMessage(e,t.source))})())}onPush(t){t.data&&t.waitUntil(this.handlePush(t.data.json()))}onClick(t){t.waitUntil(this.handleClick(t.notification,t.action))}async ensureInitialized(t){if(null!==this.initialized)return this.initialized;try{this.initialized=this.initialize(),await this.initialized}catch(t){throw this.state=T.SAFE_MODE,this.stateMessage=`Initialization failed due to error: ${errorToString(t)}`,t}finally{t.waitUntil(this.idle.trigger())}}async handleMessage(t,e){if(function isMsgCheckForUpdates(t){return"CHECK_FOR_UPDATES"===t.action}(t)){const s=this.checkForUpdate();await this.completeOperation(e,s,t.nonce)}else if(function isMsgActivateUpdate(t){return"ACTIVATE_UPDATE"===t.action}(t)){const s=this.updateClient(e);await this.completeOperation(e,s,t.nonce)}}async handlePush(t){if(await this.broadcast({type:"PUSH",data:t}),!t.notification||!t.notification.title)return;const e=t.notification;let s={};$.filter((t=>e.hasOwnProperty(t))).forEach((t=>s[t]=e[t])),await this.scope.registration.showNotification(e.title,s)}async handleClick(t,e){var s,a,i;t.close();const n={};$.filter((e=>e in t)).forEach((e=>n[e]=t[e]));const r=""===e||void 0===e?"default":e,h=null==(a=null==(s=null==t?void 0:t.data)?void 0:s.onActionClick)?void 0:a[r],o=new URL(null!=(i=null==h?void 0:h.url)?i:"",this.scope.registration.scope).href;switch(null==h?void 0:h.operation){case"openWindow":await this.scope.clients.openWindow(o);break;case"focusLastFocusedOrOpen":{let t=await this.getLastFocusedMatchingClient(this.scope);t?await(null==t?void 0:t.focus()):await this.scope.clients.openWindow(o);break}case"navigateLastFocusedOrOpen":{let t=await this.getLastFocusedMatchingClient(this.scope);t?(t=await t.navigate(o),await(null==t?void 0:t.focus())):await this.scope.clients.openWindow(o);break}case"sendRequest":await this.scope.fetch(o)}await this.broadcast({type:"NOTIFICATION_CLICK",data:{action:e,notification:n}})}async getLastFocusedMatchingClient(t){return(await t.clients.matchAll({type:"window"}))[0]}async completeOperation(t,e,s){const a={type:"OPERATION_COMPLETED",nonce:s};try{t.postMessage(__spreadProps(__spreadValues({},a),{result:await e}))}catch(e){t.postMessage(__spreadProps(__spreadValues({},a),{error:e.toString()}))}}async updateClient(t){const e=this.clientVersionMap.get(t.id);if(e===this.latestHash)return!1;let s;if(void 0!==e){const t=this.versions.get(e);s=this.mergeHashWithAppData(t.manifest,e)}this.clientVersionMap.set(t.id,this.latestHash),await this.sync();const a=this.versions.get(this.latestHash),i={type:"UPDATE_ACTIVATED",previous:s,current:this.mergeHashWithAppData(a.manifest,this.latestHash)};return t.postMessage(i),!0}async handleFetch(t){try{await this.ensureInitialized(t)}catch(e){return this.safeFetch(t.request)}"navigate"!==t.request.mode||this.scheduledNavUpdateCheck||(this.scheduledNavUpdateCheck=!0,this.idle.schedule("check-updates-on-navigation",(async()=>{this.scheduledNavUpdateCheck=!1,await this.checkForUpdate()})));const e=await this.assignVersion(t);let s=null;try{if(null!==e)try{s=await e.handleFetch(t.request,t)}catch(s){if(s.isUnrecoverableState&&await this.notifyClientsAboutUnrecoverableState(e,s.message),s.isCritical)return this.debugger.log(s,`Driver.handleFetch(version: ${e.manifestHash})`),await this.versionFailed(e,s),this.safeFetch(t.request);throw s}return null===s?this.safeFetch(t.request):s}finally{t.waitUntil(this.idle.trigger())}}async initialize(){const t=await this.controlTable;let e,s,a;try{if([e,s,a]=await Promise.all([t.read("manifests"),t.read("assignments"),t.read("latest")]),!this.versions.has(a.latest)&&!e.hasOwnProperty(a.latest))throw this.debugger.log(`Missing manifest for latest version hash ${a.latest}`,"initialize: read from DB"),new Error(`Missing manifest for latest hash ${a.latest}`);this.idle.schedule("init post-load (update)",(async()=>{await this.checkForUpdate()}))}catch(i){const n=await this.fetchLatestManifest(),r=hashManifest(n);e={[r]:n},s={},a={latest:r},await Promise.all([t.write("manifests",e),t.write("assignments",s),t.write("latest",a)])}if(this.idle.schedule("init post-load (cleanup)",(async()=>{await this.cleanupCaches()})),Object.keys(e).forEach((t=>{const s=e[t];this.versions.has(t)||this.versions.set(t,new b(this.scope,this.adapter,this.db,this.idle,this.debugger,s,t))})),Object.keys(s).forEach((t=>{const e=s[t];this.versions.has(e)?this.clientVersionMap.set(t,e):(this.clientVersionMap.set(t,a.latest),this.debugger.log(`Unknown version ${e} mapped for client ${t}, using latest instead`,"initialize: map assignments"))})),this.latestHash=a.latest,!this.versions.has(a.latest))throw new Error(`Invariant violated (initialize): latest hash ${a.latest} has no known manifest`);await Promise.all(Object.keys(e).map((async t=>{try{await this.scheduleInitialization(this.versions.get(t))}catch(e){return this.debugger.log(e,`initialize: schedule init of ${t}`),!1}})))}lookupVersionByHash(t,e="lookupVersionByHash"){if(!this.versions.has(t))throw new Error(`Invariant violated (${e}): want AppVersion for ${t} but not loaded`);return this.versions.get(t)}async assignVersion(t){const e=t.resultingClientId||t.clientId;if(e){if(this.clientVersionMap.has(e)){const s=this.clientVersionMap.get(e);let a=this.lookupVersionByHash(s,"assignVersion");if(this.state===T.NORMAL&&s!==this.latestHash&&a.isNavigationRequest(t.request)){if(null===this.latestHash)throw new Error("Invariant violated (assignVersion): latestHash was null");const t=await this.scope.clients.get(e);t&&await this.updateClient(t),a=this.lookupVersionByHash(this.latestHash,"assignVersion")}return a}if(this.state!==T.NORMAL)return null;if(null===this.latestHash)throw new Error("Invariant violated (assignVersion): latestHash was null");return this.clientVersionMap.set(e,this.latestHash),await this.sync(),this.lookupVersionByHash(this.latestHash,"assignVersion")}if(this.state!==T.NORMAL)return null;if(null===this.latestHash)throw new Error("Invariant violated (assignVersion): latestHash was null");return this.lookupVersionByHash(this.latestHash,"assignVersion")}async fetchLatestManifest(t=!1){const e=await this.safeFetch(this.adapter.newRequest("ngsw.json?ngsw-cache-bust="+Math.random()));if(!e.ok){if(404===e.status)await this.deleteAllCaches(),await this.scope.registration.unregister();else if((503===e.status||504===e.status)&&t)return null;throw new Error(`Manifest fetch failed! (status: ${e.status})`)}return this.lastUpdateCheck=this.adapter.time,e.json()}async deleteAllCaches(){const t=await this.adapter.caches.keys();await Promise.all(t.map((t=>this.adapter.caches.delete(t))))}async scheduleInitialization(t){const initialize=async()=>{try{await t.initializeFully()}catch(e){this.debugger.log(e,`initializeFully for ${t.manifestHash}`),await this.versionFailed(t,e)}};if(this.scope.registration.scope.indexOf("://localhost")>-1)return initialize();this.idle.schedule(`initialization(${t.manifestHash})`,initialize)}async versionFailed(t,e){const s=Array.from(this.versions.entries()).find((([e,s])=>s===t));if(void 0===s)return;const a=s[0];this.latestHash===a&&(this.state=T.EXISTING_CLIENTS_ONLY,this.stateMessage=`Degraded due to: ${errorToString(e)}`)}async setupUpdate(t,e){try{const s=new b(this.scope,this.adapter,this.db,this.idle,this.debugger,t,e);if(1!==t.configVersion)throw await this.deleteAllCaches(),await this.scope.registration.unregister(),new Error(`Invalid config version: expected 1, got ${t.configVersion}.`);await s.initializeFully(this),this.versions.set(e,s),this.latestHash=e,this.state===T.EXISTING_CLIENTS_ONLY&&(this.state=T.NORMAL,this.stateMessage="(nominal)"),await this.sync(),await this.notifyClientsAboutVersionReady(t,e)}catch(s){throw await this.notifyClientsAboutVersionInstallationFailed(t,e,s),s}}async checkForUpdate(){let t="(unknown)";try{const e=await this.fetchLatestManifest(!0);return null===e?(this.debugger.log("Check for update aborted. (Client or server offline.)"),!1):(t=hashManifest(e),this.versions.has(t)?(await this.notifyClientsAboutNoNewVersionDetected(e,t),!1):(await this.notifyClientsAboutVersionDetected(e,t),await this.setupUpdate(e,t),!0))}catch(e){return this.debugger.log(e,`Error occurred while updating to manifest ${t}`),this.state=T.EXISTING_CLIENTS_ONLY,this.stateMessage=`Degraded due to failed initialization: ${errorToString(e)}`,!1}}async sync(){const t=await this.controlTable,e={};this.versions.forEach(((t,s)=>{e[s]=t.manifest}));const s={};this.clientVersionMap.forEach(((t,e)=>{s[e]=t}));const a={latest:this.latestHash};await Promise.all([t.write("manifests",e),t.write("assignments",s),t.write("latest",a)])}async cleanupCaches(){try{const t=new Set((await this.scope.clients.matchAll()).map((t=>t.id))),e=Array.from(this.clientVersionMap.keys());e.filter((e=>!t.has(e))).forEach((t=>this.clientVersionMap.delete(t)));const s=new Set(this.clientVersionMap.values());Array.from(this.versions.keys()).filter((t=>!s.has(t)&&t!==this.latestHash)).forEach((t=>this.versions.delete(t))),await this.sync();const a=await this.adapter.caches.keys(),i=new Set(await this.getCacheNames()),n=a.filter((t=>!i.has(t)));await Promise.all(n.map((t=>this.adapter.caches.delete(t))))}catch(t){this.debugger.log(t,"cleanupCaches")}}async cleanupOldSwCaches(){const t=this.adapter.caches.original,e=(await t.keys()).filter((t=>/^ngsw:(?!\/)/.test(t)));await Promise.all(e.map((e=>t.delete(e))))}lookupResourceWithHash(t,e){return Array.from(this.versions.values()).reduce((async(s,a)=>null!==await s?s:a.lookupResourceWithHash(t,e)),Promise.resolve(null))}async lookupResourceWithoutHash(t){await this.initialized;const e=this.versions.get(this.latestHash);return e?e.lookupResourceWithoutHash(t):null}async previouslyCachedResources(){await this.initialized;const t=this.versions.get(this.latestHash);return t?t.previouslyCachedResources():[]}async recentCacheStatus(e){const s=this.versions.get(this.latestHash);return s?s.recentCacheStatus(e):t.NOT_CACHED}mergeHashWithAppData(t,e){return{hash:e,appData:t.appData}}async notifyClientsAboutUnrecoverableState(t,e){const s=Array.from(this.versions.entries()).find((([e,s])=>s===t));if(void 0===s)return;const a=s[0],i=Array.from(this.clientVersionMap.entries()).filter((([t,e])=>e===a)).map((([t])=>t));await Promise.all(i.map((async t=>{const s=await this.scope.clients.get(t);s&&s.postMessage({type:"UNRECOVERABLE_STATE",reason:e})})))}async notifyClientsAboutVersionInstallationFailed(t,e,s){await this.initialized;const a=await this.scope.clients.matchAll();await Promise.all(a.map((async a=>{a.postMessage({type:"VERSION_INSTALLATION_FAILED",version:this.mergeHashWithAppData(t,e),error:errorToString(s)})})))}async notifyClientsAboutNoNewVersionDetected(t,e){await this.initialized;const s=await this.scope.clients.matchAll();await Promise.all(s.map((async s=>{s.postMessage({type:"NO_NEW_VERSION_DETECTED",version:this.mergeHashWithAppData(t,e)})})))}async notifyClientsAboutVersionDetected(t,e){await this.initialized;const s=await this.scope.clients.matchAll();await Promise.all(s.map((async s=>{void 0!==this.clientVersionMap.get(s.id)&&s.postMessage({type:"VERSION_DETECTED",version:this.mergeHashWithAppData(t,e)})})))}async notifyClientsAboutVersionReady(t,e){await this.initialized;const s=await this.scope.clients.matchAll();await Promise.all(s.map((async s=>{const a=this.clientVersionMap.get(s.id);if(void 0===a)return;if(a===this.latestHash)return;const i=this.versions.get(a),n={type:"VERSION_READY",currentVersion:this.mergeHashWithAppData(i.manifest,a),latestVersion:this.mergeHashWithAppData(t,e)};s.postMessage(n)})))}async broadcast(t){(await this.scope.clients.matchAll()).forEach((e=>{e.postMessage(t)}))}async debugState(){return{state:T[this.state],why:this.stateMessage,latestHash:this.latestHash,lastUpdateCheck:this.lastUpdateCheck}}async debugVersions(){return Array.from(this.versions.keys()).map((t=>{const e=this.versions.get(t),s=Array.from(this.clientVersionMap.entries()).filter((([e,s])=>s===t)).map((([t,e])=>t));return{hash:t,manifest:e.manifest,clients:s,status:""}}))}async debugIdleState(){return{queue:this.idle.taskDescriptions,lastTrigger:this.idle.lastTrigger,lastRun:this.idle.lastRun}}async safeFetch(t){try{return await this.scope.fetch(t)}catch(e){return this.debugger.log(e,`Driver.fetch(${t.url})`),this.adapter.newResponse(null,{status:504,statusText:"Gateway Timeout"})}}async getCacheNames(){const t=await this.controlTable,e=Array.from(this.versions.values()),s=await Promise.all(e.map((t=>t.getCacheNames())));return[t.cacheName].concat(...s)}}(O,k,new class{constructor(t){this.adapter=t,this.cacheNamePrefix="db",this.tables=new Map}delete(t){return this.tables.has(t)&&this.tables.delete(t),this.adapter.caches.delete(`${this.cacheNamePrefix}:${t}`)}async list(){const t=`${this.cacheNamePrefix}:`;return(await this.adapter.caches.keys()).filter((e=>e.startsWith(t))).map((e=>e.slice(t.length)))}async open(t,e){if(!this.tables.has(t)){const s=await this.adapter.caches.open(`${this.cacheNamePrefix}:${t}`),a=new l(t,s,this.adapter,e);this.tables.set(t,a)}return this.tables.get(t)}}(k))})();