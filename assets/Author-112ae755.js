import{f as oe,p as F,a as ce,b as ue,B as de}from"./empty-b0006653.js";import{b as ne,g as re,e as q,a as H,c as fe,p as pe,d as he}from"./price-501e284c.js";import{g as Z,s as x,C as ie,a as N,_ as Y,r as v,b as J,o as k,c as A,w as m,d as M,e as T,f as u,F as D,h as X,i as L,j as E,k as P,t as ae,l as $,m as me,n as ee,p as Q,q as U,u as ye,v as ge,x as ve,W as se,y as te,A as be,z as ke,B as _e}from"./index-e26bbf42.js";import{i as we}from"./db-96a23545.js";function Se(t){return F(t)}const Ce={data(){return{form:{homepage:"",bchPayee:"",seriesPaymentPeriod:"",holdings:[],payments:[],seriesInfos:[],filePriceScaling:""}}},mounted(){this.addHolding(),this.addPayment()},methods:{addHolding(t="",e=""){this.form.holdings.length,this.form.holdings.push({key:this.form.holdings.length,holdingToken:t,holdingScoreCoefficient:e})},removeHolding(t){const e=this.form.holdings.indexOf(t);e!==-1&&this.form.holdings.splice(e,1)},addPayment(t="",e=""){this.form.payments.push({key:this.form.payments.length,paymentToken:t,paymentScoreCoefficient:e})},removePayment(t){const e=this.form.payments.indexOf(t);e!==-1&&this.form.payments.splice(e,1)},async showTokenName(t){console.log("showTokenName:",t);const e=this.form.holdings[t].holdingToken;console.log("tokenAddr:",e);try{const c=await Z(e,x.chainId);console.log("tokenName:",c),this.form.holdings[t].name=c}catch(c){console.log(c)}},async onSubmit(){try{const t=this.form.bchPayee,e=this.form.homepage,c=this.form.holdings.map(a=>a.holdingToken),g=this.form.holdings.map(a=>Se(a.holdingScoreCoefficient)),n=0,r=[],f=[];console.log("_homepage:",e),console.log("_bchAddr:",t),console.log("_seriesPaymentPeriod:",n),console.log("_holdingTokens:",c),console.log("_holdingScoreCoefficients:",g),console.log("_paymentTokens:",r),console.log("_paymentScoreCoefficients:",f);const o=ne(t);console.log("bchEvmAddr:",o);const s=await re(x.chainId,!0);console.log("factory:",s);const d=await(await q.Sesstion.startSession(ie.coordinatorUrl)).coordinator.getProxy("bchrelayer"),h=await fetch(`${d}/evm-address`).then(a=>a.json()).then(a=>a.result),y=await s.create(oe(e),o,h,n,c,g,r,f);console.log("tx:",y),await y.wait()}catch(t){console.log("failed to create proxy:",t),N(t.message)}}}},xe={style:{"text-align":"center"}},Te=E("br",null,null,-1);function Pe(t,e,c,g,n,r){const f=v("van-nav-bar"),o=v("van-field"),s=v("van-cell-group"),p=v("van-icon"),d=v("van-button"),h=v("van-popup"),y=J("responsive-popup");return k(),A(h,{show:!0,position:"left",style:{width:"100%",height:"100%"}},{default:m(()=>[M((k(),T("div",null,[u(f,{title:"Create Contract","left-text":"Back","left-arrow":"",onClickLeft:e[0]||(e[0]=a=>t.$emit("back"))}),u(s,{inset:"",title:"Basic Information"},{default:m(()=>[u(o,{modelValue:n.form.homepage,"onUpdate:modelValue":e[1]||(e[1]=a=>n.form.homepage=a),center:"",clearable:"",label:"Homepage",placeholder:"Your homepage's URL"},null,8,["modelValue"]),u(o,{modelValue:n.form.bchPayee,"onUpdate:modelValue":e[2]||(e[2]=a=>n.form.bchPayee=a),center:"",clearable:"",label:"CashAddr",placeholder:"Address for receiving BCH"},null,8,["modelValue"])]),_:1}),u(s,{inset:"",title:"Token Score Settings:"},{default:m(()=>[(k(!0),T(D,null,X(n.form.holdings,(a,b)=>(k(),A(s,{inset:"",key:a.key},{default:m(()=>[u(o,{modelValue:a.holdingToken,"onUpdate:modelValue":_=>a.holdingToken=_,center:"",clearable:"",label:a.name||"Token #"+(b+1),placeholder:"Token",onChange:_=>r.showTokenName(b)},null,8,["modelValue","onUpdate:modelValue","label","onChange"]),u(o,{modelValue:a.holdingScoreCoefficient,"onUpdate:modelValue":_=>a.holdingScoreCoefficient=_,center:"",clearable:"",placeholder:"Score",label:"Score"},{button:m(()=>[u(d,{size:"small",onClick:L(_=>r.removeHolding(a),["prevent"]),round:"",type:"primary"},{default:m(()=>[u(p,{name:"delete",size:"18"})]),_:2},1032,["onClick"])]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024))),128)),E("p",xe,[u(d,{size:"small",onClick:e[3]||(e[3]=L(a=>r.addHolding(),["prevent"])),round:"",type:"primary"},{default:m(()=>[u(p,{name:"plus"})]),_:1})])]),_:1}),Te,u(d,{type:"primary",style:{float:"right",margin:"10px"},plain:"",onClick:e[4]||(e[4]=a=>r.onSubmit())},{default:m(()=>[P("Create Contract")]),_:1})])),[[y]])]),_:1})}const Ae=Y(Ce,[["render",Pe]]);function G(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?G=function(e){return typeof e}:G=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},G(t)}var Ee=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ze(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Ve(t,e){return e={exports:{}},t(e,e.exports),e.exports}var le=Ve(function(t,e){/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 * 
 * Licensed MIT © Zeno Rocha
 */(function(c,g){t.exports=g()})(Ee,function(){return n={},c.m=g=[function(r,f){r.exports=function(o){var s;if(o.nodeName==="SELECT")o.focus(),s=o.value;else if(o.nodeName==="INPUT"||o.nodeName==="TEXTAREA"){var p=o.hasAttribute("readonly");p||o.setAttribute("readonly",""),o.select(),o.setSelectionRange(0,o.value.length),p||o.removeAttribute("readonly"),s=o.value}else{o.hasAttribute("contenteditable")&&o.focus();var d=window.getSelection(),h=document.createRange();h.selectNodeContents(o),d.removeAllRanges(),d.addRange(h),s=d.toString()}return s}},function(r,f){function o(){}o.prototype={on:function(s,p,d){var h=this.e||(this.e={});return(h[s]||(h[s]=[])).push({fn:p,ctx:d}),this},once:function(s,p,d){var h=this;function y(){h.off(s,y),p.apply(d,arguments)}return y._=p,this.on(s,y,d)},emit:function(s){for(var p=[].slice.call(arguments,1),d=((this.e||(this.e={}))[s]||[]).slice(),h=0,y=d.length;h<y;h++)d[h].fn.apply(d[h].ctx,p);return this},off:function(s,p){var d=this.e||(this.e={}),h=d[s],y=[];if(h&&p)for(var a=0,b=h.length;a<b;a++)h[a].fn!==p&&h[a].fn._!==p&&y.push(h[a]);return y.length?d[s]=y:delete d[s],this}},r.exports=o,r.exports.TinyEmitter=o},function(r,f,o){var s=o(3),p=o(4);r.exports=function(d,h,y){if(!d&&!h&&!y)throw new Error("Missing required arguments");if(!s.string(h))throw new TypeError("Second argument must be a String");if(!s.fn(y))throw new TypeError("Third argument must be a Function");if(s.node(d))return z=h,j=y,(R=d).addEventListener(z,j),{destroy:function(){R.removeEventListener(z,j)}};if(s.nodeList(d))return B=d,V=h,C=y,Array.prototype.forEach.call(B,function(I){I.addEventListener(V,C)}),{destroy:function(){Array.prototype.forEach.call(B,function(I){I.removeEventListener(V,C)})}};if(s.string(d))return a=d,b=h,_=y,p(document.body,a,b,_);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var a,b,_,B,V,C,R,z,j}},function(r,f){f.node=function(o){return o!==void 0&&o instanceof HTMLElement&&o.nodeType===1},f.nodeList=function(o){var s=Object.prototype.toString.call(o);return o!==void 0&&(s==="[object NodeList]"||s==="[object HTMLCollection]")&&"length"in o&&(o.length===0||f.node(o[0]))},f.string=function(o){return typeof o=="string"||o instanceof String},f.fn=function(o){return Object.prototype.toString.call(o)==="[object Function]"}},function(r,f,o){var s=o(5);function p(d,h,y,a,b){var _=function(B,V,C,R){return function(z){z.delegateTarget=s(z.target,V),z.delegateTarget&&R.call(B,z)}}.apply(this,arguments);return d.addEventListener(y,_,b),{destroy:function(){d.removeEventListener(y,_,b)}}}r.exports=function(d,h,y,a,b){return typeof d.addEventListener=="function"?p.apply(null,arguments):typeof y=="function"?p.bind(null,document).apply(null,arguments):(typeof d=="string"&&(d=document.querySelectorAll(d)),Array.prototype.map.call(d,function(_){return p(_,h,y,a,b)}))}},function(r,f){if(typeof Element<"u"&&!Element.prototype.matches){var o=Element.prototype;o.matches=o.matchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector||o.webkitMatchesSelector}r.exports=function(s,p){for(;s&&s.nodeType!==9;){if(typeof s.matches=="function"&&s.matches(p))return s;s=s.parentNode}}},function(r,f,o){o.r(f);var s=o(0),p=o.n(s),d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i};function h(i,l){for(var w=0;w<l.length;w++){var S=l[w];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(i,S.key,S)}}function y(i){(function(l,w){if(!(l instanceof w))throw new TypeError("Cannot call a class as a function")})(this,y),this.resolveOptions(i),this.initSelection()}var a=(function(i,l,w){return l&&h(i.prototype,l),w&&h(i,w),i}(y,[{key:"resolveOptions",value:function(i){var l=0<arguments.length&&i!==void 0?i:{};this.action=l.action,this.container=l.container,this.emitter=l.emitter,this.target=l.target,this.text=l.text,this.trigger=l.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var i=this,l=document.documentElement.getAttribute("dir")=="rtl";this.removeFake(),this.fakeHandlerCallback=function(){return i.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[l?"right":"left"]="-9999px";var w=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=w+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=p()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=p()(this.target),this.copyText()}},{key:"copyText",value:function(){var i=void 0;try{i=document.execCommand(this.action)}catch{i=!1}this.handleResult(i)}},{key:"handleResult",value:function(i){this.emitter.emit(i?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(i){var l=0<arguments.length&&i!==void 0?i:"copy";if(this._action=l,this._action!=="copy"&&this._action!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(i){if(i!==void 0){if(!i||(i===void 0?"undefined":d(i))!=="object"||i.nodeType!==1)throw new Error('Invalid "target" value, use a valid Element');if(this.action==="copy"&&i.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(this.action==="cut"&&(i.hasAttribute("readonly")||i.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);this._target=i}},get:function(){return this._target}}]),y),b=o(1),_=o.n(b),B=o(2),V=o.n(B),C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},R=function(i,l,w){return l&&z(i.prototype,l),w&&z(i,w),i};function z(i,l){for(var w=0;w<l.length;w++){var S=l[w];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(i,S.key,S)}}var j=(function(i,l){if(typeof l!="function"&&l!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof l);i.prototype=Object.create(l&&l.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),l&&(Object.setPrototypeOf?Object.setPrototypeOf(i,l):i.__proto__=l)}(I,_.a),R(I,[{key:"resolveOptions",value:function(i){var l=0<arguments.length&&i!==void 0?i:{};this.action=typeof l.action=="function"?l.action:this.defaultAction,this.target=typeof l.target=="function"?l.target:this.defaultTarget,this.text=typeof l.text=="function"?l.text:this.defaultText,this.container=C(l.container)==="object"?l.container:document.body}},{key:"listenClick",value:function(i){var l=this;this.listener=V()(i,"click",function(w){return l.onClick(w)})}},{key:"onClick",value:function(i){var l=i.delegateTarget||i.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new a({action:this.action(l),target:this.target(l),text:this.text(l),container:this.container,trigger:l,emitter:this})}},{key:"defaultAction",value:function(i){return W("action",i)}},{key:"defaultTarget",value:function(i){var l=W("target",i);if(l)return document.querySelector(l)}},{key:"defaultText",value:function(i){return W("text",i)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(i){var l=0<arguments.length&&i!==void 0?i:["copy","cut"],w=typeof l=="string"?[l]:l,S=!!document.queryCommandSupported;return w.forEach(function(O){S=S&&!!document.queryCommandSupported(O)}),S}}]),I);function I(i,l){(function(S,O){if(!(S instanceof O))throw new TypeError("Cannot call a class as a function")})(this,I);var w=function(S,O){if(!S)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!O||typeof O!="object"&&typeof O!="function"?S:O}(this,(I.__proto__||Object.getPrototypeOf(I)).call(this));return w.resolveOptions(l),w.listenClick(i),w}function W(i,l){var w="data-clipboard-"+i;if(l.hasAttribute(w))return l.getAttribute(w)}f.default=j}],c.c=n,c.d=function(r,f,o){c.o(r,f)||Object.defineProperty(r,f,{enumerable:!0,get:o})},c.r=function(r){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},c.t=function(r,f){if(1&f&&(r=c(r)),8&f||4&f&&typeof r=="object"&&r&&r.__esModule)return r;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:r}),2&f&&typeof r!="string")for(var s in r)c.d(o,s,function(p){return r[p]}.bind(null,s));return o},c.n=function(r){var f=r&&r.__esModule?function(){return r.default}:function(){return r};return c.d(f,"a",f),f},c.o=function(r,f){return Object.prototype.hasOwnProperty.call(r,f)},c.p="",c(c.s=6).default;function c(r){if(n[r])return n[r].exports;var f=n[r]={i:r,l:!1,exports:{}};return g[r].call(f.exports,f,f.exports,c),f.l=!0,f.exports}var g,n})}),Ie=ze(le);le.ClipboardJS;function Ue(t,e,c){var g=document.createElement("button"),n=new Ie(g,{text:function(){return t},action:function(){return"copy"},container:G(e)==="object"?e:document.body});n.on("success",function(r){n.destroy(),c(void 0,r)}),n.on("error",function(r){n.destroy(),c(r,void 0)}),document.body.appendChild(g),g.click(),document.body.removeChild(g)}const He={props:["authorizerAddr"],data(){return{form:{fileValue:[],price:"",series:{value:-1,text:""},introduction:"",stochasticEnabled:!1},showPicker:!1,seriesInfos:[],bchUSDPrice:0,cid:"",progress:-1,currentRate:0}},async mounted(){try{const t=await H(this.authorizerAddr,x.chainId,!1),e=(await t.getSeriesLength()).toNumber(),c=await Promise.all(new Array(e).fill(0).map((g,n)=>t.getSeriesInfo(n)));this.seriesInfos=c.map((g,n)=>({...g,value:n,text:ae(g.description)})),this.bchUSDPrice=await fe()}catch(t){console.error(t),N(t.message)}},methods:{onConfirm({selectedOptions:t}){this.form.series.value=t[0].value,this.form.series.text=t[0].text,this.showPicker=!1},copy(t){console.log(t),Ue(`${window.location.origin}/${this.cid}`,void 0,(e,c)=>{e?alert("Can not copy"):ee("copy success")})},async onSubmit(t){try{if(this.form.price&&F(this.form.price).lte(F("0.00001")))return $("Price must greater than 0.00001");if(this.form.price&&F(this.form.price).gt(F("4")))return $("Price must below 4");const e=this.form.fileValue[0].file,c=await q.Sesstion.startSession(ie.coordinatorUrl),g=await q.calcFileHash(e),n=pe(g,F(this.form.price||"0").toString(),this.form.series.value,this.form.stochasticEnabled);e.fileId=n;const r=ce(["uint"],[n]),f=(await H(this.authorizerAddr,x.chainId,!1)).interface.functions["authorize(address,uint256,uint8,bytes)"].format(),o=x.chainId===1e4?"smartbch":"bsc",s=new q.Authorizer(await c.coordinator.getProxy(o)).getUrl(),p={outdata:r,contract:this.authorizerAddr,function_:f,threshold:1,chainId:x.chainId,authorizerlist:[s]},d=await me();this.cid=await c.upload([e],p,JSON.stringify({author:d,introduction:this.form.introduction}),h=>this.progress=h),this.progress=-1,ee("upload success"),await we(d,this.cid,Date.now(),this.form.introduction)}catch(e){this.progress=-1,N(e.message)}}}},Be={style:{margin:"16px 60px"}},Ne={style:{"text-align":"center","margin-top":"20px"}};function Oe(t,e,c,g,n,r){const f=v("van-nav-bar"),o=v("van-uploader"),s=v("van-field"),p=v("van-picker"),d=v("van-popup"),h=v("van-cell-group"),y=v("van-checkbox"),a=v("van-button"),b=v("van-form"),_=v("van-circle"),B=v("van-dialog"),V=J("responsive-popup");return k(),A(d,{show:!0,position:"left",style:{width:"100%",height:"100%"}},{default:m(()=>[M((k(),T("div",null,[u(f,{title:"Upload File to IPFS","left-text":"Back","left-arrow":"",onClickLeft:e[0]||(e[0]=C=>t.$emit("back"))}),u(b,{onSubmit:r.onSubmit},{default:m(()=>[u(h,{inset:""},{default:m(()=>[u(s,{rules:[{required:!0,message:"file"}],name:"uploader",label:"File"},{input:m(()=>[u(o,{"max-count":"1",modelValue:n.form.fileValue,"onUpdate:modelValue":e[1]||(e[1]=C=>n.form.fileValue=C),accept:"*"},null,8,["modelValue"])]),_:1}),u(s,{modelValue:n.form.introduction,"onUpdate:modelValue":e[2]||(e[2]=C=>n.form.introduction=C),rows:"3",autosize:"",label:"Introduction",type:"textarea",placeholder:"Introduce this file"},null,8,["modelValue"]),u(s,{rules:[{required:!0,message:"series"}],modelValue:n.form.series.text,"onUpdate:modelValue":e[3]||(e[3]=C=>n.form.series.text=C),"is-link":"",readonly:"",name:"picker",label:"Series",placeholder:"Series",onClick:e[4]||(e[4]=C=>n.showPicker=!0)},null,8,["modelValue"]),u(d,{show:n.showPicker,"onUpdate:show":e[6]||(e[6]=C=>n.showPicker=C),position:"bottom"},{default:m(()=>[M((k(),T("div",null,[u(p,{columns:n.seriesInfos,onConfirm:r.onConfirm,onCancel:e[5]||(e[5]=C=>n.showPicker=!1),"confirm-button-text":"OK","cancel-button-text":"Cancel"},null,8,["columns","onConfirm"])])),[[V]])]),_:1},8,["show"]),u(s,{modelValue:n.form.price,"onUpdate:modelValue":e[7]||(e[7]=C=>n.form.price=C),name:"price",label:"Price",placeholder:"Price",type:"number"},{extra:m(()=>[P(" ≈ "+Q((parseFloat(n.form.price)*1e5||0)*n.bchUSDPrice/1e5)+" USD ",1)]),_:1},8,["modelValue"])]),_:1}),u(y,{style:{"margin-left":"26px"},modelValue:n.form.stochasticEnabled,"onUpdate:modelValue":e[8]||(e[8]=C=>n.form.stochasticEnabled=C)},{default:m(()=>[P("Use stochastic payment for one-time view")]),_:1},8,["modelValue"]),E("div",Be,[n.cid?U("",!0):(k(),A(a,{key:0,plain:"",block:"",type:"primary","native-type":"submit"},{default:m(()=>[P(" Upload ")]),_:1})),n.cid?(k(),A(a,{key:1,plain:"",block:"",type:"primary",onClick:r.copy},{default:m(()=>[P(" Copy the link for sharing ")]),_:1},8,["onClick"])):U("",!0)])]),_:1},8,["onSubmit"]),u(B,{show:n.progress!==-1,title:"Uploading...",style:{width:"200px",height:"200px"},"show-confirm-button":!1},{default:m(()=>[E("div",Ne,[u(_,{"current-rate":n.currentRate,"onUpdate:currentRate":e[9]||(e[9]=C=>n.currentRate=C),rate:n.progress,speed:100,text:n.currentRate+"%"},null,8,["current-rate","rate","text"])])]),_:1},8,["show"])])),[[V]])]),_:1})}const Fe=Y(He,[["render",Oe]]);function K(t){return de(t).div(se.toString()).toString()}function Le(t){return se.mul(t)}const Re={props:["authorizerAddr"],data(){return{form:{homepage:"",bchPayee:"",seriesPaymentPeriod:"",bchTxRelayer:"",holdings:[],payments:[],seriesInfos:[],filePriceScaling:""}}},async mounted(){this.init()},methods:{async init(){const t=await H(this.authorizerAddr,x.chainId,!0),{_holdingScoreCoefficients:e,_holdingTokens:c,_paymentScoreCoefficients:g,_paymentTokens:n}=await t.getScoreCoefficients();this.form.holdings=[];for(let o=0;o<c.length;o++)this.addHolding(c[o],K(e[o].toString()));this.form.payments=[];for(let o=0;o<n.length;o++)this.addPayment(n[o],K(g[o].toString()));this.form.seriesPaymentPeriod=(await t.seriesPaymentPeriod()).toString(),this.form.bchPayee=he(await t.bchPayee()),this.form.bchTxRelayer=await t.bchTxRelayer();const r=(await t.getSeriesLength()).toNumber(),f=await Promise.all(new Array(r).fill(0).map((o,s)=>t.getSeriesInfo(s)));this.form.seriesInfos=[],f.forEach(({requiredScore:o,description:s})=>this.addSeriesInfo(K(o.toString()),ae(s))),this.form.homepage=await t.homepage().then(o=>ue(o)),this.form.filePriceScaling=await t.filePriceScaling()},async addHolding(t="",e=""){const c=await Z(t,x.chainId).catch(g=>null);this.form.holdings.push({key:this.form.holdings.length,holdingToken:t,holdingScoreCoefficient:e,name:c})},async showTokenName(t){console.log("showTokenName:",t);const e=this.form.holdings[t].holdingToken;console.log("tokenAddr:",e);try{const c=await Z(e,x.chainId);console.log("tokenName:",c),this.form.holdings[t].name=c}catch(c){this.form.holdings[t].name=null,console.log(c)}},removeHolding(t){const e=this.form.holdings.indexOf(t);e!==-1&&this.form.holdings.splice(e,1)},UpdateHolding(t){},addPayment(t="",e=""){this.form.payments.push({key:this.form.payments.length,paymentToken:t,paymentScoreCoefficient:e})},removePayment(t){const e=this.form.payments.indexOf(t);e!==-1&&this.form.payments.splice(e,1)},updatePayment(t){},addSeriesInfo(t="",e=""){this.form.seriesInfos.push({index:this.form.seriesInfos.length,requiredScore:t,description:e,isNew:!t})},async removeSeriesInfo(t){const e=this.form.seriesInfos.indexOf(t);e!==-1&&this.form.seriesInfos.splice(e,1)},async updateSeriesInfo(t){console.log("updateSeriesInfo ...");try{const e=await H(this.authorizerAddr,x.chainId,!0),c=t.description.replaceAll("\0",""),g=ye(c),n=ge(g),r=ve(n,16),f=Le(t.requiredScore);let o;t.isNew?(console.log("add"),o=await e.addSeries(f,r)):(console.log("update"),o=await e.updateSeries(t.index,f,r)),await o.wait(),await this.init()}catch(e){N(e.message)}},async updateFilePriceScaling(){await(await(await H(this.authorizerAddr,x.chainId,!0)).updateFilePriceScaling(this.form.filePriceScaling)).wait()},async updateHP(){try{console.log("update hp...",this.form.homepage);const t=await H(this.authorizerAddr,x.chainId,!0);console.log("auth:",t);const e=await t.updateHomepage(oe(this.form.homepage));console.log(e)}catch(t){console.log("failed to update HP:",t),N(t.message)}},async updateBchAddr(){try{console.log("update bch addr...",this.form.bchPayee);const t=ne(this.form.bchPayee);console.log("evmAddr:",t);const e=await H(this.authorizerAddr,x.chainId,!0);console.log("auth:",e);const c=await e.updateBchPayee(t);console.log(c)}catch(t){console.log("failed to update bch addr:",t),N(t.message)}},async updateBchTxRelayer(){try{const e=await(await H(this.authorizerAddr,x.chainId,!0)).updateBchTxRelayer(this.form.bchTxRelayer);console.log(e)}catch(t){console.log("failed to update bch addr:",t),N(t.message)}},async updateHoldingScoreCoefficients(){try{console.log("updateHoldingScoreCoefficients...");const t=[],e=[];this.form.holdings.forEach(r=>{t.push(r.holdingToken),e.push(F(r.holdingScoreCoefficient))}),console.log("newHoldingTokens:",t,e);const c=await H(this.authorizerAddr,x.chainId,!0),[g]=await c.getScoreCoefficients();console.log("oldHoldingTokens:",g);for(let r of g)t.indexOf(r)<0&&(t.push(r),e.push(0));console.log("newHoldingTokens:",t,e);const n=await c.updateScoreCoefficients(t,e,[],[]);console.log("tx:",n)}catch(t){console.log("failed to update HoldingScoreCoefficients:",t),N(t.message)}}}},je={style:{"text-align":"center","margin-bottom":"6px"}},Me={style:{"text-align":"right","padding-right":"12px"}},qe={style:{"text-align":"right"}},De={style:{"text-align":"center"}};function Ge(t,e,c,g,n,r){const f=v("van-nav-bar"),o=v("van-button"),s=v("van-field"),p=v("van-cell-group"),d=v("van-icon"),h=v("van-popup"),y=J("responsive-popup");return k(),A(h,{show:!0,position:"left",style:{width:"100%",height:"100%"}},{default:m(()=>[M((k(),T("div",null,[u(f,{title:"Configuration","left-text":"Back","left-arrow":"",onClickLeft:e[0]||(e[0]=a=>t.$emit("back"))}),E("div",null,[u(p,{inset:"",title:"Basic Information"},{default:m(()=>[u(s,{modelValue:n.form.homepage,"onUpdate:modelValue":e[2]||(e[2]=a=>n.form.homepage=a),center:"",clearable:"",label:"Homepage",placeholder:"Your homepage's URL"},{button:m(()=>[u(o,{size:"small",onClick:e[1]||(e[1]=a=>r.updateHP()),plain:"",type:"primary"},{default:m(()=>[P("Update")]),_:1})]),_:1},8,["modelValue"]),u(s,{modelValue:n.form.bchTxRelayer,"onUpdate:modelValue":e[4]||(e[4]=a=>n.form.bchTxRelayer=a),center:"",clearable:"",label:"JudgerAddr",placeholder:"For Stochastic Payment"},{button:m(()=>[u(o,{size:"small",onClick:e[3]||(e[3]=a=>r.updateBchTxRelayer()),plain:"",type:"primary"},{default:m(()=>[P("Update")]),_:1})]),_:1},8,["modelValue"]),u(s,{modelValue:n.form.bchPayee,"onUpdate:modelValue":e[6]||(e[6]=a=>n.form.bchPayee=a),center:"",clearable:"",label:"CashAddr",placeholder:"For receiving BCH"},{button:m(()=>[u(o,{size:"small",onClick:e[5]||(e[5]=a=>r.updateBchAddr()),plain:"",type:"primary"},{default:m(()=>[P("Update")]),_:1})]),_:1},8,["modelValue"]),u(s,{modelValue:n.form.filePriceScaling,"onUpdate:modelValue":e[8]||(e[8]=a=>n.form.filePriceScaling=a),center:"",clearable:"",label:"Price Scaling",placeholder:"Scaling factor for all files"},{button:m(()=>[u(o,{size:"small",onClick:e[7]||(e[7]=a=>r.updateFilePriceScaling()),plain:"",type:"primary"},{default:m(()=>[P("Update")]),_:1})]),_:1},8,["modelValue"])]),_:1}),u(p,{inset:"",title:"Token Score Settings:"},{default:m(()=>[(k(!0),T(D,null,X(n.form.holdings,(a,b)=>(k(),A(p,{inset:"",key:a.key},{default:m(()=>[u(s,{modelValue:a.holdingToken,"onUpdate:modelValue":_=>a.holdingToken=_,center:"",clearable:"",label:a.name||"Token #"+(b+1),onChange:_=>r.showTokenName(b)},null,8,["modelValue","onUpdate:modelValue","label","onChange"]),u(s,{modelValue:a.holdingScoreCoefficient,"onUpdate:modelValue":_=>a.holdingScoreCoefficient=_,center:"",clearable:"",label:"score"},{button:m(()=>[u(o,{size:"small",onClick:L(_=>r.removeHolding(a),["prevent"]),round:"",type:"primary"},{default:m(()=>[u(d,{name:"delete-o",size:"18"})]),_:2},1032,["onClick"])]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024))),128))]),_:1}),E("p",je,[u(o,{size:"small",onClick:e[9]||(e[9]=L(a=>r.addHolding(),["prevent"])),round:"",type:"primary"},{default:m(()=>[u(d,{name:"plus"})]),_:1})]),E("p",Me,[u(o,{size:"small",plain:"",type:"primary",onClick:e[10]||(e[10]=L(a=>r.updateHoldingScoreCoefficients(),["prevent"]))},{default:m(()=>[P(" Update Token Score Settings")]),_:1})]),u(p,{inset:"",title:"Series"},{default:m(()=>[(k(!0),T(D,null,X(n.form.seriesInfos,(a,b)=>(k(),T(D,{key:a.key},[u(p,null,{default:m(()=>[u(s,{modelValue:a.description,"onUpdate:modelValue":_=>a.description=_,clearable:"",label:"Series#"+(b+1),placeholder:"Series Name"},null,8,["modelValue","onUpdate:modelValue","label"]),u(s,{modelValue:a.requiredScore,"onUpdate:modelValue":_=>a.requiredScore=_,clearable:"",label:"Score",placeholder:"Required Score"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),E("p",qe,[u(o,{size:"small",type:"primary",onClick:L(_=>r.updateSeriesInfo(a),["prevent"]),plain:""},{default:m(()=>[P(Q((a.isNew?"Create":"Update")+" Series #"+(b+1)),1)]),_:2},1032,["onClick"])])],64))),128))]),_:1}),E("p",De,[u(o,{size:"small",onClick:e[11]||(e[11]=L(a=>r.addSeriesInfo(),["prevent"])),round:"",type:"primary"},{default:m(()=>[u(d,{name:"plus"})]),_:1})])])])),[[y]])]),_:1})}const Ye=Y(Re,[["render",Ge]]),Je={components:{CreateContract:Ae,UploadFile:Fe,Configuration:Ye},data(){return{mmInstalled:!1,showPicker:!1,supportedChains:te.map(t=>({text:t.chainName,value:t.chainId})),store:x,authorizerAddr:"-1",showType:"",seriesCount:0}},watch:{"store.account"(t,e){t&&e&&window.location.reload(),this.init()},"store.chainId"(t,e){t&&e&&window.location.reload(),this.init()}},async mounted(){this.init()},methods:{async init(){if(console.log("eth:",window.ethereum),this.mmInstalled=!!window.ethereum,!x.account||!x.chainId)return;console.log("account:",x.account);const t=await(await re(x.chainId,!1)).authorToProxy(x.account);if(console.log("authorizerAddr:",t),t!==be){this.authorizerAddr=t;const c=await(await H(this.authorizerAddr,x.chainId,!1)).getSeriesLength();console.log("seriesCount:",c),this.seriesCount=c.toNumber()}else this.authorizerAddr=""},async onBack(){this.showType="",await this.init()},async connectToChain({selectedOptions:t}){try{this.showPicker=!1;const e=t[0].value;console.log("selectedChainId:",e);const c=te.find(g=>g.chainId===e);await ke(),await _e(c),window.location.reload()}catch(e){console.error(e),N(e.message)}}}},We={style:{padding:"8px"}},Ke={key:0},Ze={key:1},Xe={key:0},Qe={key:1},$e={key:2,style:{"margin-top":"20px"}},et=E("p",null,"You have not created an authorizing contract. Please create one to authorize your audience.",-1),tt={key:3,style:{"margin-top":"20px"}},ot=E("p",null,"The authorizing contract is ready. The uploaded files will use it to authorize audience.",-1),nt={key:4,style:{"margin-top":"20px"}},rt=E("p",null,"You can further configure the authorizing contract to meet your needs.",-1);function it(t,e,c,g,n,r){const f=v("van-field"),o=v("van-picker"),s=v("van-popup"),p=v("van-button"),d=v("CreateContract"),h=v("UploadFile"),y=v("Configuration"),a=J("responsive-popup");return k(),T("div",We,[n.mmInstalled?(k(),T("div",Ze,[![1e4,56].includes(n.store.chainId)||!n.store.account?(k(),T("div",Xe,[P(" ElfinGuard Gateway only supports smartBCH and BSC for deploying authorizing contracts. Please make your wallet connet to one of them: "),u(f,{"is-link":"",readonly:"",label:"Connect To",placeholder:"supported chains",onClick:e[0]||(e[0]=b=>n.showPicker=!0)}),u(s,{show:n.showPicker,"onUpdate:show":e[2]||(e[2]=b=>n.showPicker=b),round:"",position:"bottom"},{default:m(()=>[M((k(),T("div",null,[u(o,{columns:n.supportedChains,onCancel:e[1]||(e[1]=b=>n.showPicker=!1),onConfirm:r.connectToChain,"confirm-button-text":"OK","cancel-button-text":"Cancel"},null,8,["columns","onConfirm"])])),[[a]])]),_:1},8,["show"])])):(k(),T("div",Qe," Connected Chain: "+Q(n.store.chainId==1e4?"smartBCH":"BSC"),1)),n.authorizerAddr!=="-1"&&!n.authorizerAddr?(k(),T("div",$e,[et,u(p,{size:"small",onClick:e[3]||(e[3]=b=>n.showType="CreateContract"),plain:"",type:"primary"},{default:m(()=>[P("Create Authorizing Contract")]),_:1})])):U("",!0),n.authorizerAddr!=="-1"&&n.authorizerAddr?(k(),T("div",tt,[ot,n.authorizerAddr&&n.seriesCount>0?(k(),A(p,{key:0,size:"small",plain:"",type:"primary",onClick:e[4]||(e[4]=b=>n.showType="UploadFile")},{default:m(()=>[P("Upload File to IPFS")]),_:1})):U("",!0)])):U("",!0),n.authorizerAddr!=="-1"&&n.authorizerAddr?(k(),T("div",nt,[rt,n.authorizerAddr?(k(),A(p,{key:0,size:"small",plain:"",type:"primary",onClick:e[5]||(e[5]=b=>n.showType="Configuration")},{default:m(()=>[P("Configure Contract")]),_:1})):U("",!0)])):U("",!0),n.showType==="CreateContract"?(k(),A(d,{key:5,onBack:r.onBack},null,8,["onBack"])):U("",!0),n.showType==="UploadFile"?(k(),A(h,{key:6,authorizerAddr:n.authorizerAddr,onBack:r.onBack},null,8,["authorizerAddr","onBack"])):U("",!0),n.showType==="Configuration"?(k(),A(y,{key:7,authorizerAddr:n.authorizerAddr,onBack:r.onBack},null,8,["authorizerAddr","onBack"])):U("",!0)])):(k(),T("div",Ke," EflinGuard Gateway must work with a Web3 wallet. Please install a wallet plugin such as MetaMask to your browser, or use a mobile wallet App. "))])}const ut=Y(Je,[["render",it]]);export{ut as default};