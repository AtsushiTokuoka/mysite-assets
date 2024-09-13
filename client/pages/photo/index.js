!function(){"use strict";var e,t={1759:function(e,t,n){function o(){return"undefined"!=typeof navigator&&"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:{}}n.d(t,{$q:function(){return l}});const i="function"==typeof Proxy,r="devtools-plugin:setup";let s,a;class u{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const t in e.settings){const o=e.settings[t];n[t]=o.defaultValue}const o=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},n);try{const e=localStorage.getItem(o),t=JSON.parse(e);Object.assign(i,t)}catch(e){}this.fallbacks={getSettings(){return i},setSettings(e){try{localStorage.setItem(o,JSON.stringify(e))}catch(e){}i=e},now(){return void 0!==s||("undefined"!=typeof window&&window.performance?(s=!0,a=window.performance):"undefined"!=typeof globalThis&&(null===(e=globalThis.perf_hooks)||void 0===e?void 0:e.performance)?(s=!0,a=globalThis.perf_hooks.performance):s=!1),s?a.now():Date.now();var e}},t&&t.on("plugin:settings:set",((e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)})),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise((n=>{this.targetQueue.push({method:t,args:e,resolve:n})}))})}async setRealTarget(e){this.target=e;for(const e of this.onQueue)this.target.on[e.method](...e.args);for(const e of this.targetQueue)e.resolve(await this.target[e.method](...e.args))}}function l(e,t){const n=e,s=o(),a=o().__VUE_DEVTOOLS_GLOBAL_HOOK__,l=i&&n.enableEarlyProxy;if(!a||!s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&l){const e=l?new u(n,a):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else a.emit(r,e,t)}},9658:function(e,t,n){var o,i,r=n(6365),s=n(834);const a=Symbol(),u={isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),menuOpen:!1,headerHeight:0,footerHeight:0,eleventyGlobalData:JSON.parse((null===(o=document.getElementById("eleventy-global-data"))||void 0===o?void 0:o.textContent)||"{}"),eleventyLocalData:JSON.parse((null===(i=document.getElementById("eleventy-local-data"))||void 0===i?void 0:i.textContent)||"{}"),currentPage:window.location.pathname},l=(0,s.y$)({state:u,getters:{touchOrClick:e=>e.isMobile?"touchstart":"click"},mutations:{toggleMenuOpen(e){e.menuOpen=!e.menuOpen},setHeaderHeight(e,t){e.headerHeight=t.height},setFooterHeight(e,t){e.footerHeight=t.height}},actions:{toggleMenuOpen(e){e.commit("toggleMenuOpen")},setHeaderHeight(e,t){e.commit("setHeaderHeight",t)},setFooterHeight(e,t){e.commit("setFooterHeight",t)}}});var c;c=(0,r.pM)({name:"VContents",setup(){const e=function(){const e=(0,s.Pj)(a),t=(0,r.EW)((()=>e.state.eleventyGlobalData)),n=(0,r.EW)((()=>e.state.headerHeight)),o=(0,r.EW)((()=>e.state.footerHeight)),i=(0,r.KR)(0),u=()=>{i.value=window.innerHeight-(n.value+o.value)};(0,r.wB)([n,o],u);const l=()=>{const e=document.querySelector("#bottom-icons");e&&(e.style.bottom=`${o.value}px`)};return(0,r.wB)([o],l),(0,r.sV)((()=>{window.addEventListener("resize",u),window.addEventListener("resize",l)})),(0,r.hi)((()=>{window.removeEventListener("resize",u),window.removeEventListener("resize",l)})),{headerHeight:n,footerHeight:o,contentsMinHeight:i,eleventyGlobalData:t}}();return Object.assign({},e)}}),(0,r.Ef)(c).use(l,a).mount("#contents")}},n={};function o(e){var i=n[e];if(void 0!==i)return i.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,o),r.exports}o.m=t,e=[],o.O=function(t,n,i,r){if(!n){var s=1/0;for(c=0;c<e.length;c++){n=e[c][0],i=e[c][1],r=e[c][2];for(var a=!0,u=0;u<n.length;u++)(!1&r||s>=r)&&Object.keys(o.O).every((function(e){return o.O[e](n[u])}))?n.splice(u--,1):(a=!1,r<s&&(s=r));if(a){e.splice(c--,1);var l=i();void 0!==l&&(t=l)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[n,i,r]},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={556:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,r,s=n[0],a=n[1],u=n[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(i in a)o.o(a,i)&&(o.m[i]=a[i]);if(u)var c=u(o)}for(t&&t(n);l<s.length;l++)r=s[l],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(c)},n=self.webpackChunkmysite_assets=self.webpackChunkmysite_assets||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var i=o.O(void 0,[235,293],(function(){return o(9658)}));i=o.O(i)}();