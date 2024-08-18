var vt=Object.defineProperty;var Y=n=>{throw TypeError(n)};var wt=(n,t,e)=>t in n?vt(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var I=(n,t,e)=>wt(n,typeof t!="symbol"?t+"":t,e),Q=(n,t,e)=>t.has(n)||Y("Cannot "+e);var i=(n,t,e)=>(Q(n,t,"read from private field"),e?e.call(n):t.get(n)),f=(n,t,e)=>t.has(n)?Y("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,e),l=(n,t,e,r)=>(Q(n,t,"write to private field"),r?r.call(n,e):t.set(n,e),e),d=(n,t,e)=>(Q(n,t,"access private method"),e);import{bO as Et,ad as q,bx as Lt,af as At,bK as z,aH as J,ag as Dt,bq as C,bI as O,bH as xt,bC as P,bP as Mt,bQ as bt,bc as Ct,bL as Nt,bD as Z,bM as Rt,bN as Ft,ax as Pt,aq as qt}from"./app-BrwDqZ3V.js";import{VideoProvider as _t}from"./vidstack-video-DD0n5kCI.js";import{R as $t}from"./vidstack-DSYpsFWk-BWdXZo2c.js";import"./vidstack-CSv7rfHP-X-4AU2fJ.js";function W(n){try{return new Intl.DisplayNames(navigator.languages,{type:"language"}).of(n)??null}catch{return null}}const Ht=n=>`dash-${qt(n)}`;var L,h,o,N,R,s,x,k,tt,it,w,F,et,st,nt,rt,ot,at,dt,ht,A,ut,j,G,ct,V,pt,lt,K;class It{constructor(t,e){f(this,s);f(this,L);f(this,h);f(this,o,null);f(this,N,new Set);f(this,R,null);I(this,"config",{});f(this,w,null);f(this,F,{});f(this,A,-1);l(this,L,t),l(this,h,e)}get instance(){return i(this,o)}setup(t){l(this,o,t().create());const e=d(this,s,it).bind(this);for(const r of Object.values(t.events))i(this,o).on(r,e);i(this,o).on(t.events.ERROR,d(this,s,at).bind(this));for(const r of i(this,N))r(i(this,o));i(this,h).player.dispatch("dash-instance",{detail:i(this,o)}),i(this,o).initialize(i(this,L),void 0,!1),i(this,o).updateSettings({streaming:{text:{defaultEnabled:!1,dispatchForManualRendering:!0},buffer:{fastSwitchEnabled:!0}},...this.config}),i(this,o).on(t.events.FRAGMENT_LOADING_STARTED,d(this,s,dt).bind(this)),i(this,o).on(t.events.FRAGMENT_LOADING_COMPLETED,d(this,s,ht).bind(this)),i(this,o).on(t.events.MANIFEST_LOADED,d(this,s,ot).bind(this)),i(this,o).on(t.events.QUALITY_CHANGE_RENDERED,d(this,s,rt).bind(this)),i(this,o).on(t.events.TEXT_TRACKS_ADDED,d(this,s,st).bind(this)),i(this,o).on(t.events.TRACK_CHANGE_RENDERED,d(this,s,nt).bind(this)),i(this,h).qualities[z.enableAuto]=d(this,s,ct).bind(this),J(i(this,h).qualities,"change",d(this,s,pt).bind(this)),J(i(this,h).audioTracks,"change",d(this,s,lt).bind(this)),l(this,R,Dt(d(this,s,k).bind(this)))}onInstance(t){return i(this,N).add(t),()=>i(this,N).delete(t)}loadSource(t){var e;d(this,s,K).call(this),q(t.src)&&((e=i(this,o))==null||e.attachSource(t.src))}destroy(){var t,e;d(this,s,K).call(this),(t=i(this,o))==null||t.destroy(),l(this,o,null),(e=i(this,R))==null||e.call(this),l(this,R,null)}}L=new WeakMap,h=new WeakMap,o=new WeakMap,N=new WeakMap,R=new WeakMap,s=new WeakSet,x=function(t){return new C(Ht(t.type),{detail:t})},k=function(){if(!i(this,h).$state.live())return;const t=new $t(d(this,s,tt).bind(this));return t.start(),t.stop.bind(t)},tt=function(){if(!i(this,o))return;const t=i(this,o).duration()-i(this,o).time();i(this,h).$state.liveSyncPosition.set(isNaN(t)?1/0:t)},it=function(t){var e;(e=i(this,h).player)==null||e.dispatch(d(this,s,x).call(this,t))},w=new WeakMap,F=new WeakMap,et=function(t){var u;const e=(u=i(this,w))==null?void 0:u[O.native],r=(e==null?void 0:e.track).cues;if(!e||!r)return;const p=i(this,w).id,g=i(this,F)[p]??0,y=d(this,s,x).call(this,t);for(let m=g;m<r.length;m++){const c=r[m];c.positionAlign||(c.positionAlign="auto"),i(this,w).addCue(c,y)}i(this,F)[p]=r.length},st=function(t){var g;if(!i(this,o))return;const e=t.tracks,r=[...i(this,L).textTracks].filter(y=>"manualMode"in y),p=d(this,s,x).call(this,t);for(let y=0;y<r.length;y++){const u=e[y],m=r[y],c=`dash-${u.kind}-${y}`,E=new xt({id:c,label:(u==null?void 0:u.label)??((g=u.labels.find(a=>a.text))==null?void 0:g.text)??((u==null?void 0:u.lang)&&W(u.lang))??(u==null?void 0:u.lang)??void 0,language:u.lang??void 0,kind:u.kind,default:u.defaultTrack});E[O.native]={managed:!0,track:m},E[O.readyState]=2,E[O.onModeChange]=()=>{i(this,o)&&(E.mode==="showing"?(i(this,o).setTextTrack(y),l(this,w,E)):(i(this,o).setTextTrack(-1),l(this,w,null)))},i(this,h).textTracks.add(E,p)}},nt=function(t){const{mediaType:e,newMediaInfo:r}=t;if(e==="audio"){const p=i(this,h).audioTracks.getById(`dash-audio-${r.index}`);if(p){const g=d(this,s,x).call(this,t);i(this,h).audioTracks[P.select](p,!0,g)}}},rt=function(t){if(t.mediaType!=="video")return;const e=i(this,h).qualities[t.newQuality];if(e){const r=d(this,s,x).call(this,t);i(this,h).qualities[P.select](e,!0,r)}},ot=function(t){if(i(this,h).$state.canPlay()||!i(this,o))return;const{type:e,mediaPresentationDuration:r}=t.data,p=d(this,s,x).call(this,t);i(this,h).notify("stream-type-change",e!=="static"?"live":"on-demand",p),i(this,h).notify("duration-change",r,p),i(this,h).qualities[z.setAuto](!0,p);const g=i(this,o).getVideoElement(),y=i(this,o).getTracksForTypeFromManifest("video",t.data),u=[...new Set(y.map(a=>a.mimeType))].find(a=>a&&Mt(g,a)),m=y.filter(a=>u===a.mimeType)[0];let c=i(this,o).getTracksForTypeFromManifest("audio",t.data);const E=[...new Set(c.map(a=>a.mimeType))].find(a=>a&&bt(g,a));if(c=c.filter(a=>E===a.mimeType),m.bitrateList.forEach((a,H)=>{var b;const U={id:((b=a.id)==null?void 0:b.toString())??`dash-bitrate-${H}`,width:a.width??0,height:a.height??0,bitrate:a.bandwidth??0,codec:m.codec,index:H};i(this,h).qualities[P.add](U,p)}),Ct(m.index)){const a=i(this,h).qualities[m.index];a&&i(this,h).qualities[P.select](a,!0,p)}c.forEach((a,H)=>{const b=a.labels.find(B=>navigator.languages.some(St=>B.lang&&St.toLowerCase().startsWith(B.lang.toLowerCase())))||a.labels[0],Tt={id:`dash-audio-${a==null?void 0:a.index}`,label:(b==null?void 0:b.text)??(a.lang&&W(a.lang))??a.lang??"",language:a.lang??"",kind:"main",mimeType:a.mimeType,codec:a.codec,index:H};i(this,h).audioTracks[P.add](Tt,p)}),g.dispatchEvent(new C("canplay",{trigger:p}))},at=function(t){const{type:e,error:r}=t;switch(r.code){case 27:d(this,s,ut).call(this,r);break;default:d(this,s,G).call(this,r);break}},dt=function(){i(this,A)>=0&&d(this,s,j).call(this)},ht=function(t){t.mediaType==="text"&&requestAnimationFrame(d(this,s,et).bind(this,t))},A=new WeakMap,ut=function(t){var e;d(this,s,j).call(this),(e=i(this,o))==null||e.play(),l(this,A,window.setTimeout(()=>{l(this,A,-1),d(this,s,G).call(this,t)},5e3))},j=function(){clearTimeout(i(this,A)),l(this,A,-1)},G=function(t){i(this,h).notify("error",{message:t.message??"",code:1,error:t})},ct=function(){var e;d(this,s,V).call(this,"video",!0);const{qualities:t}=i(this,h);(e=i(this,o))==null||e.setQualityFor("video",t.selectedIndex,!0)},V=function(t,e){var r;(r=i(this,o))==null||r.updateSettings({streaming:{abr:{autoSwitchBitrate:{[t]:e}}}})},pt=function(){const{qualities:t}=i(this,h);!i(this,o)||t.auto||!t.selected||(d(this,s,V).call(this,"video",!1),i(this,o).setQualityFor("video",t.selectedIndex,t.switch==="current"),Nt&&(i(this,L).currentTime=i(this,L).currentTime))},lt=function(){if(!i(this,o))return;const{audioTracks:t}=i(this,h),e=i(this,o).getTracksFor("audio").find(r=>t.selected&&t.selected.id===`dash-audio-${r.index}`);e&&i(this,o).setCurrentTrack(e)},K=function(){d(this,s,j).call(this),l(this,w,null),l(this,F,{})};var M,S,_,v,gt,ft,yt,mt;class Ot{constructor(t,e,r){f(this,v);f(this,M);f(this,S);f(this,_);l(this,M,t),l(this,S,e),l(this,_,r),d(this,v,gt).call(this)}}M=new WeakMap,S=new WeakMap,_=new WeakMap,v=new WeakSet,gt=async function(){const t={onLoadStart:d(this,v,ft).bind(this),onLoaded:d(this,v,yt).bind(this),onLoadError:d(this,v,mt).bind(this)};let e=await Qt(i(this,M),t);if(Z(e)&&!q(i(this,M))&&(e=await jt(i(this,M),t)),!e)return null;if(!window.dashjs.supportsMediaSource()){const r="[vidstack] `dash.js` is not supported in this environment";return i(this,S).player.dispatch(new C("dash-unsupported")),i(this,S).notify("error",{message:r,code:4}),null}return e},ft=function(){i(this,S).player.dispatch(new C("dash-lib-load-start"))},yt=function(t){i(this,S).player.dispatch(new C("dash-lib-loaded",{detail:t})),i(this,_).call(this,t)},mt=function(t){const e=Rt(t);i(this,S).player.dispatch(new C("dash-lib-load-error",{detail:e})),i(this,S).notify("error",{message:e.message,code:4,error:e})};async function jt(n,t={}){var e,r,p,g,y,u,m;if(!Z(n)){if((e=t.onLoadStart)==null||e.call(t),Gt(n))return(r=t.onLoaded)==null||r.call(t,n),n;if(X(n)){const c=n.MediaPlayer;return(p=t.onLoaded)==null||p.call(t,c),c}try{const c=(g=await n())==null?void 0:g.default;if(X(c))return(y=t.onLoaded)==null||y.call(t,c.MediaPlayer),c.MediaPlayer;if(c)(u=t.onLoaded)==null||u.call(t,c);else throw Error("");return c}catch(c){(m=t.onLoadError)==null||m.call(t,c)}}}async function Qt(n,t={}){var e,r,p;if(q(n)){(e=t.onLoadStart)==null||e.call(t);try{if(await Ft(n),!Pt(window.dashjs.MediaPlayer))throw Error("");const g=window.dashjs.MediaPlayer;return(r=t.onLoaded)==null||r.call(t,g),g}catch(g){(p=t.onLoadError)==null||p.call(t,g)}}}function Gt(n){return n&&n.prototype&&n.prototype!==Function}function X(n){return n&&"MediaPlayer"in n}const Vt="https://cdn.jsdelivr.net";var $,T,D;class Kt extends _t{constructor(){super(...arguments);I(this,"$$PROVIDER_TYPE","DASH");f(this,$,null);f(this,T,new It(this.video,this.ctx));f(this,D,`${Vt}/npm/dashjs@4.7.4/dist/dash.all.min.js`)}get ctor(){return i(this,$)}get instance(){return i(this,T).instance}get type(){return"dash"}get canLiveSync(){return!0}get config(){return i(this,T).config}set config(e){i(this,T).config=e}get library(){return i(this,D)}set library(e){l(this,D,e)}preconnect(){q(i(this,D))&&Lt(i(this,D))}setup(){super.setup(),new Ot(i(this,D),this.ctx,e=>{l(this,$,e),i(this,T).setup(e),this.ctx.notify("provider-setup",this);const r=At(this.ctx.$state.source);r&&this.loadSource(r)})}async loadSource(e,r){if(!q(e.src)){this.removeSource();return}this.media.preload=r||"",this.appendSource(e,"application/x-mpegurl"),i(this,T).loadSource(e),this.currentSrc=e}onInstance(e){const r=i(this,T).instance;return r&&e(r),i(this,T).onInstance(e)}destroy(){i(this,T).destroy()}}$=new WeakMap,T=new WeakMap,D=new WeakMap,I(Kt,"supported",Et());export{Kt as DASHProvider};