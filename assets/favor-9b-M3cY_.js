import{a8 as H,d as C,aa as N,a3 as e,a4 as a,H as p,ad as g,ac as d,a7 as s,ab as r,af as b,ah as S,a5 as P,a6 as F,a9 as I,q as V,a as v,ai as m,aj as T,ak as j}from"./index-B0I1bdp_.js";import{m as $}from"./index-3_AUMBwn.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{N as R}from"./navBar-BIMs70Fz.js";import{T as q,a as z}from"./index-T1g7HeHL.js";function O(){return $.get({url:"favor/list"})}function U(){return $.get({url:"favor/history"})}const w=H("favor",{state:()=>({favorlist:{},historylist:{},index:0}),actions:{async fetchFavorList(){const o=await O();this.favorlist=o.data.data},async fetchHistoryList(){const o=await U();console.log(o.data),this.historylist=o.data.data}}}),k=o=>(P("data-v-9bd0b26f"),o=o(),F(),o),D={class:"list_house"},E={class:"recomm_land_img"},Y={class:"img"},A=["src"],G={class:"logo"},J=["src"],K=k(()=>s("div",{class:"favor"},null,-1)),M=k(()=>s("div",{class:"comment"},null,-1)),Q={class:"rec"},W={class:"score"},X={class:"text"},Z={class:"info"},ss={class:"add_summery"},ts={class:"address"},os={class:"summeries"},es={key:0},as={class:"title"},is={class:"houseTags"},rs={class:"price_badge"},cs={class:"finalPrice"},ls=k(()=>s("div",{class:"CNY"},"￥",-1)),ns={class:"price"},ds={class:"productPrice"},_s=C({__name:"list-house",props:{favorlist:{type:Object},historylist:{type:Object}},setup(o){const u=w(),{index:y}=N(u);return(x,c)=>(e(),a("div",D,[(e(!0),a(p,null,g((d(y)==0?o.favorlist:o.historylist).items,(t,h)=>{var _,i,f;return e(),a("div",{key:h,class:"house"},[s("div",E,[s("div",Y,[s("img",{src:t.defaultPicture,alt:""},null,8,A)]),s("div",G,[s("img",{src:t.logoUrl,alt:""},null,8,J)]),K,M,s("div",Q,[s("div",W,r(t.commentBrief.overall)+"分",1),s("div",X,r(t.commentBrief.scoreTitle),1)])]),s("div",Z,[s("div",ss,[s("div",ts,r(t.address),1),s("div",os,[(e(!0),a(p,null,g(t.unitSummeries,(l,n)=>(e(),a(p,{key:n},[s("span",null,r(l.text),1),n<t.unitSummeries.length-1?(e(),a("span",es," · ")):b("",!0)],64))),128))])]),s("div",as,r(t.unitName),1),s("div",is,[(e(!0),a(p,null,g(t.houseTags,(l,n)=>(e(),a("span",{class:"item",style:S({color:l.color,backgroundColor:l.background.color})},r(l.text),5))),256))]),s("div",rs,[s("div",cs,[ls,s("div",ns,r(t.finalPrice),1)]),s("div",ds,"￥"+r(t.productPrice),1),s("div",{class:"tipBadge",style:S({color:(_=t.priceTipBadge)==null?void 0:_.color,backgroundColor:(i=t.priceTipBadge)==null?void 0:i.gradient.startColor})},r((f=t.priceTipBadge)==null?void 0:f.text),5)])])])}),128))]))}}),B=L(_s,[["__scopeId","data-v-9bd0b26f"]]),vs={class:"favor"},us={class:"item_tw"},fs={key:0,class:"favorlist"},hs={key:1,class:"historylist"},ps=C({__name:"favor",setup(o){I();const u=w();u.fetchFavorList(),u.fetchHistoryList();const{favorlist:y,historylist:x,index:c}=N(u),t=V(0),h=_=>{c!=_&&(c.value=_)};return console.log(c.value),(_,i)=>{const f=q,l=z;return e(),a("div",vs,[v(R,null,{default:m(()=>[s("div",us,[s("div",{class:T(["favor item",d(c)==0?"active":""]),onClick:i[0]||(i[0]=n=>h(0))},"我的收藏",2),s("div",{class:T(["history item",d(c)==1?"active":""]),onClick:i[1]||(i[1]=n=>h(1))},"浏览历史",2)])]),_:1}),d(c)==0?(e(),a("div",fs,[v(l,{active:t.value,"onUpdate:active":i[2]||(i[2]=n=>t.value=n)},{default:m(()=>[v(f,{title:"房屋"},{default:m(()=>[v(B,{favorlist:d(y)},null,8,["favorlist"])]),_:1}),v(f,{title:"房东"},{default:m(()=>[j("内容 2 ")]),_:1})]),_:1},8,["active"])])):b("",!0),d(c)==1?(e(),a("div",hs,[v(B,{historylist:d(x)},null,8,["historylist"])])):b("",!0)])}}}),xs=L(ps,[["__scopeId","data-v-02216346"]]);export{xs as default};
