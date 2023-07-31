import{t as C}from"./index-45fda17a.js";import{d as F}from"./db-96a23545.js";import{_ as w,s as k,m as V,r as s,b as B,o as a,c as d,w as c,d as D,e as _,f as i,F as T,h as U,j as f,p as L,k as P,q as g}from"./index-e26bbf42.js";const A={data(){return{list:[],loading:!1,finished:!1,store:k}},watch:{"store.account"(t,e){this.list=[],this.loading=!1,this.finished=!1}},methods:{changeTimestampToDataFormat(t){const e=new Date(t);return e.getDate()+"/"+(e.getMonth()+1)+"/"+e.getFullYear()+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()},goToView(t){return t},buildCidUrl(t){return"https://elfinguard.io/"+t},async onLoad(){const t=await V();console.log("current account:",t),this.list=await F.viewedFiles.where({account:t}).limit(100).toArray(),this.loading=!1,this.finished=!0},copyText(t){let e=document.createElement("input");e.setAttribute("readonly","readonly"),e.value=t,document.body.appendChild(e),e.select(),document.execCommand("Copy"),e.style.display="none",e.remove(),C.showSuccessToast("Copy successfully")}}},M=["href"],S=["onClick"];function N(t,e,b,x,l,o){const r=s("van-nav-bar"),h=s("van-col"),u=s("van-cell"),y=s("van-row"),p=s("van-list"),m=s("van-popup"),v=B("responsive-popup");return a(),d(m,{show:!0,position:"left",style:{width:"100%",height:"100%"}},{default:c(()=>[D((a(),_("div",null,[i(r,{title:"ViewedFiles","left-text":"Back","left-arrow":"",onClickLeft:e[0]||(e[0]=n=>t.$emit("back"))}),i(p,{loading:l.loading,"onUpdate:loading":e[1]||(e[1]=n=>l.loading=n),finished:l.finished,"finished-text":"no more",onLoad:o.onLoad},{default:c(()=>[(a(!0),_(T,null,U(l.list,n=>(a(),d(y,{key:n.id,style:{color:"black"}},{default:c(()=>[i(h,{span:"12",style:{"margin-left":"10px"}},{default:c(()=>[f("a",{href:o.goToView(n.cid),target:"_blank"},L(n.cid),9,M),f("i",{class:"iconfont icon-copy iconFont",onClick:H=>o.copyText(o.buildCidUrl(n.cid))},null,8,S)]),_:2},1024),i(u,{title:n.introduction,value:o.changeTimestampToDataFormat(n.timestamp)},null,8,["title","value"])]),_:2},1024))),128))]),_:1},8,["loading","finished","onLoad"])])),[[v]])]),_:1})}const E=w(A,[["render",N]]);const I={data(){return{list:[],loading:!1,finished:!1,store:k}},watch:{"store.account"(t,e){this.list=[],this.loading=!1,this.finished=!1}},methods:{buildPayInfo(t){return t=Number(t)/10**18,"Paid "+t+" BCH"},changeTimestampToDataFormat(t){const e=new Date(t);return e.getDate()+"/"+(e.getMonth()+1)+"/"+e.getFullYear()+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()},goToView(t){return t},goToTxExplore(t,e){return t==="SMART_CHAIN"?"https://www.smartscan.cash/transaction/"+e:"https://blockchair.com/bitcoin-cash/transaction/"+e},buildCidUrl(t){return"https://elfinguard.io/"+t},async onLoad(){const t=await V();console.log("current account:",t),this.list=await F.payments.where({account:t}).limit(100).toArray(),this.loading=!1,this.finished=!0},copyText(t){let e=document.createElement("input");e.setAttribute("readonly","readonly"),e.value=t,document.body.appendChild(e),e.select(),document.execCommand("Copy"),e.style.display="none",e.remove(),C.showSuccessToast("Copy successfully")}}},Y=["href"],j=["onClick"],q=["href"],R=f("span",null,"No tx",-1);function X(t,e,b,x,l,o){const r=s("van-nav-bar"),h=s("van-col"),u=s("van-cell"),y=s("van-row"),p=s("van-list"),m=s("van-popup"),v=B("responsive-popup");return a(),d(m,{show:!0,position:"left",style:{width:"100%",height:"100%"}},{default:c(()=>[D((a(),_("div",null,[i(r,{title:"PaymentHistory","left-text":"Back","left-arrow":"",onClickLeft:e[0]||(e[0]=n=>t.$emit("back"))}),i(p,{loading:l.loading,"onUpdate:loading":e[1]||(e[1]=n=>l.loading=n),finished:l.finished,"finished-text":"no more",onLoad:o.onLoad},{default:c(()=>[(a(!0),_(T,null,U(l.list,n=>(a(),d(y,{key:n.id,style:{color:"black"}},{default:c(()=>[i(h,{span:"",style:{"margin-left":"10px"}},{default:c(()=>[f("a",{href:o.goToView(n.cid),target:"_blank"},L(n.cid),9,Y),f("i",{class:"iconfont icon-copy iconFont",onClick:H=>o.copyText(o.buildCidUrl(n.cid))},null,8,j)]),_:2},1024),i(u,{title:n.introduction,value:o.changeTimestampToDataFormat(n.timestamp)},null,8,["title","value"]),i(u,{value:o.buildPayInfo(n.amount)},{extra:c(()=>[P("    "),n.txId?(a(),_("a",{key:0,href:o.goToTxExplore(n.type,n.txId),target:"_blank"}," View TX ",8,q)):g("",!0),R]),_:2},1032,["value"])]),_:2},1024))),128))]),_:1},8,["loading","finished","onLoad"])])),[[v]])]),_:1})}const z=w(I,[["render",X]]);const G={data(){return{list:[],loading:!1,finished:!1,store:k}},watch:{"store.account"(t,e){this.list=[],this.loading=!1,this.finished=!1}},methods:{changeTimestampToDataFormat(t){const e=new Date(t);return e.getDate()+"/"+(e.getMonth()+1)+"/"+e.getFullYear()+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()},goToView(t){return t},buildCidUrl(t){return"https://elfinguard.io/"+t},async onLoad(){const t=await V();console.log("current account:",t),this.list=await F.uploadedFiles.where({account:t}).limit(100).toArray(),this.loading=!1,this.finished=!0},copyText(t){let e=document.createElement("input");e.setAttribute("readonly","readonly"),e.value=t,document.body.appendChild(e),e.select(),document.execCommand("Copy"),e.style.display="none",e.remove(),C.showSuccessToast("Copy successfully")}}},J=["href"],K=["onClick"];function O(t,e,b,x,l,o){const r=s("van-nav-bar"),h=s("van-col"),u=s("van-cell"),y=s("van-row"),p=s("van-list"),m=s("van-popup"),v=B("responsive-popup");return a(),d(m,{show:!0,position:"left",style:{width:"100%",height:"100%"}},{default:c(()=>[D((a(),_("div",null,[i(r,{title:"UploadedFiles","left-text":"Back","left-arrow":"",onClickLeft:e[0]||(e[0]=n=>t.$emit("back"))}),i(p,{loading:l.loading,"onUpdate:loading":e[1]||(e[1]=n=>l.loading=n),finished:l.finished,"finished-text":"no more",onLoad:o.onLoad},{default:c(()=>[(a(!0),_(T,null,U(l.list,n=>(a(),d(y,{key:n.id,style:{color:"black"}},{default:c(()=>[i(h,{span:"12",style:{"margin-left":"10px"}},{default:c(()=>[f("a",{href:o.goToView(n.cid),target:"_blank"},L(n.cid),9,J),f("i",{class:"iconfont icon-copy iconFont",onClick:H=>o.copyText(o.buildCidUrl(n.cid))},null,8,K)]),_:2},1024),i(u,{title:n.introduction,value:o.changeTimestampToDataFormat(n.timestamp)},null,8,["title","value"])]),_:2},1024))),128))]),_:1},8,["loading","finished","onLoad"])])),[[v]])]),_:1})}const Q=w(G,[["render",O]]),W={components:{ViewedFiles:E,PaymentHistory:z,UploadedFiles:Q},data(){return{showType:"",store:k}},methods:{async onBack(){this.showType=""}}};function Z(t,e,b,x,l,o){const r=s("van-cell"),h=s("ViewedFiles"),u=s("PaymentHistory"),y=s("UploadedFiles");return a(),_(T,null,[i(r,{onClick:e[0]||(e[0]=p=>l.showType="UploadedFiles"),title:"Uploaded Files","is-link":""}),i(r,{onClick:e[1]||(e[1]=p=>l.showType="ViewedFiles"),title:"Viewed Files","is-link":""}),i(r,{onClick:e[2]||(e[2]=p=>l.showType="PaymentHistory"),title:"Payment History","is-link":""}),f("div",null,[l.showType==="ViewedFiles"?(a(),d(h,{key:0,onBack:o.onBack},null,8,["onBack"])):g("",!0),l.showType==="PaymentHistory"?(a(),d(u,{key:1,onBack:o.onBack},null,8,["onBack"])):g("",!0),l.showType==="UploadedFiles"?(a(),d(y,{key:2,onBack:o.onBack},null,8,["onBack"])):g("",!0)])],64)}const ne=w(W,[["render",Z]]);export{ne as default};