import{I as g,J as $,K as R,d as F,L as ne,M as Pe,O as d,P as he,Q as K,R as H,S as De,T as Le,U as Se,V as Z,W as Ve,X as Be,b as E,Y as Ee,Z as Oe,$ as je,a0 as Fe,a1 as Te,r as f,a2 as me,a3 as pe,v as Ue,h as I,o as w,c as q,a as C,F as G,q as le,k as o,j as t,g as V,a4 as He,z as ye,N,l as B,s as j,_ as Ce,u as Ge,w as ve,e as We,i as r,m as M,C as X,p as S,a5 as Ke,D as fe,a6 as te,x as Xe,A as Qe,t as Ze}from"./index.js";import{P as Je}from"./PencilOutline.js";import{C as Ye,N as oe,D as et}from"./DynamicConfigForm.js";import{N as se}from"./Empty.js";import{S as tt}from"./SearchOutline.js";import{A as be}from"./AddOutline.js";import{R as ot}from"./RefreshOutline.js";import{N as re}from"./Input.js";import{N as ge,a as Q}from"./FormItem.js";import{N as rt}from"./Select.js";import{N as at}from"./Switch.js";import{N as lt}from"./Spin.js";import{N as st}from"./Thing.js";import"./cryptojs.js";import"./use-locale.js";import"./en-US.js";import"./Checkmark.js";const nt=g("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[$(">",[g("input",[$("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),$("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),g("button",[$("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[R("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),$("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[R("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),$("*",[$("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[$(">",[g("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),g("base-selection",[g("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),g("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),R("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),$("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[$(">",[g("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),g("base-selection",[g("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),g("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),R("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),it={},dt=F({name:"InputGroup",props:it,setup(l){const{mergedClsPrefixRef:a}=ne(l);return Pe("-input-group",nt,a),{mergedClsPrefix:a}},render(){const{mergedClsPrefix:l}=this;return d("div",{class:`${l}-input-group`},this.$slots)}});function ut(l){const{textColor2:a,cardColor:c,modalColor:m,popoverColor:h,dividerColor:_,borderRadius:v,fontSize:x,hoverColor:z}=l;return{textColor:a,color:c,colorHover:z,colorModal:m,colorHoverModal:K(m,z),colorPopover:h,colorHoverPopover:K(h,z),borderColor:_,borderColorModal:K(m,_),borderColorPopover:K(h,_),borderRadius:v,fontSize:x}}const ct={name:"List",common:he,self:ut},mt=ct,pt=$([g("list",`
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 --n-merged-color-hover: var(--n-color-hover);
 margin: 0;
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `,[H("show-divider",[g("list-item",[$("&:not(:last-child)",[R("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),H("clickable",[g("list-item",`
 cursor: pointer;
 `)]),H("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),H("hoverable",[g("list-item",`
 border-radius: var(--n-border-radius);
 `,[$("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[R("divider",`
 background-color: transparent;
 `)])])]),H("bordered, hoverable",[g("list-item",`
 padding: 12px 20px;
 `),R("header, footer",`
 padding: 12px 20px;
 `)]),R("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[$("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),g("list-item",`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[R("prefix",`
 margin-right: 20px;
 flex: 0;
 `),R("suffix",`
 margin-left: 20px;
 flex: 0;
 `),R("main",`
 flex: 1;
 `),R("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),De(g("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),Le(g("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),vt=Object.assign(Object.assign({},Z.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),_e=Oe("n-list"),ft=F({name:"List",props:vt,slots:Object,setup(l){const{mergedClsPrefixRef:a,inlineThemeDisabled:c,mergedRtlRef:m}=ne(l),h=Se("List",m,a),_=Z("List","-list",pt,mt,l,a);Ve(_e,{showDividerRef:Be(l,"showDivider"),mergedClsPrefixRef:a});const v=E(()=>{const{common:{cubicBezierEaseInOut:z},self:{fontSize:u,textColor:b,color:k,colorModal:y,colorPopover:p,borderColor:L,borderColorModal:A,borderColorPopover:W,borderRadius:J,colorHover:i,colorHoverModal:P,colorHoverPopover:T}}=_.value;return{"--n-font-size":u,"--n-bezier":z,"--n-text-color":b,"--n-color":k,"--n-border-radius":J,"--n-border-color":L,"--n-border-color-modal":A,"--n-border-color-popover":W,"--n-color-modal":y,"--n-color-popover":p,"--n-color-hover":i,"--n-color-hover-modal":P,"--n-color-hover-popover":T}}),x=c?Ee("list",void 0,v,l):void 0;return{mergedClsPrefix:a,rtlEnabled:h,cssVars:c?void 0:v,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender}},render(){var l;const{$slots:a,mergedClsPrefix:c,onRender:m}=this;return m==null||m(),d("ul",{class:[`${c}-list`,this.rtlEnabled&&`${c}-list--rtl`,this.bordered&&`${c}-list--bordered`,this.showDivider&&`${c}-list--show-divider`,this.hoverable&&`${c}-list--hoverable`,this.clickable&&`${c}-list--clickable`,this.themeClass],style:this.cssVars},a.header?d("div",{class:`${c}-list__header`},a.header()):null,(l=a.default)===null||l===void 0?void 0:l.call(a),a.footer?d("div",{class:`${c}-list__footer`},a.footer()):null)}}),ae=F({name:"ListItem",slots:Object,setup(){const l=je(_e,null);return l||Fe("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:l.showDividerRef,mergedClsPrefix:l.mergedClsPrefixRef}},render(){const{$slots:l,mergedClsPrefix:a}=this;return d("li",{class:`${a}-list-item`},l.prefix?d("div",{class:`${a}-list-item__prefix`},l.prefix()):null,l.default?d("div",{class:`${a}-list-item__main`},l):null,l.suffix?d("div",{class:`${a}-list-item__suffix`},l.suffix()):null,this.showDivider&&d("div",{class:`${a}-list-item__divider`}))}});function bt(){return{}}const gt={name:"Marquee",common:he,self:bt},ht=gt,yt=Object.assign(Object.assign({},Z.props),{autoFill:Boolean,speed:{type:Number,default:48}}),Ct=$([g("marquee",`
 overflow: hidden;
 display: flex;
 `,[R("group",`
 flex: 0 0 auto;
 min-width: var(--n-min-width);
 z-index: 1;
 display: flex;
 flex-direction: row;
 align-items: center;
 animation: n-marquee var(--n-duration) linear var(--n-delay) var(--n-iteration-count);
 animation-play-state: var(--n-play);
 animation-delay: var(--n-delay);
 animation-direction: var(--n-direction);
 `),Te("auto-fill",[R("group","min-width: 100%;"),R("item","min-width: 100%;")])]),$("@keyframes n-marquee",{from:{transform:"translateX(0)"},to:{transform:"translateX(-100%)"}})]),_t=F({name:"Marquee",props:yt,setup(l){const{mergedClsPrefixRef:a}=ne(l);Z("Marquee","-marquee",Ct,ht,l,a);const c=f(null),m=f(-1),h=f(-1),_=f("running"),v=E(()=>{if(!l.autoFill)return 1;const{value:p}=m,{value:L}=h;return p===-1||L===-1?1:Math.ceil(h.value/p)}),x=E(()=>{const{value:p}=m;return p===-1?0:p*v.value/l.speed}),z=E(()=>({"--n-play":_.value,"--n-direction":"normal","--n-duration":`${x.value}s`,"--n-delay":"0s","--n-iteration-count":"infinite","--n-min-width":"auto"}));function u(){_.value="paused",Ue().then(()=>{var p;(p=c.value)===null||p===void 0||p.offsetTop,_.value="running"})}function b(p){h.value=p.contentRect.width}function k(p){m.value=p.contentRect.width}function y(){u()}return{mergedClsPrefix:a,animationCssVars:z,containerElRef:c,repeatCountInOneGroup:v,handleContainerResize:b,handleContentResize:k,handleAnimationIteration:y}},render(){const{$slots:l,mergedClsPrefix:a,animationCssVars:c,repeatCountInOneGroup:m,handleAnimationIteration:h}=this,_=d(me,{onResize:this.handleContentResize},d("div",{class:`${a}-marquee__item ${a}-marquee__original-item`},l)),v=d("div",{class:`${a}-marquee__item`},l);return this.autoFill?d(me,{onResize:this.handleContainerResize},d("div",{class:`${a}-marquee ${a}-marquee--auto-fill`,ref:"containerElRef",style:c},d("div",{class:`${a}-marquee__group`,onAnimationiteration:h},_,pe(m-1,v)),d("div",{class:`${a}-marquee__group`},pe(m,v)))):d("div",{class:[`${a}-marquee`],ref:"containerElRef",style:c},d("div",{class:`${a}-marquee__group`,onAnimationiteration:h},_),d("div",{class:`${a}-marquee__group`},v))}}),D={getAdapterTypes(){return I.get("/llm/types")},getBackends(){return I.get("/llm/backends")},createBackend(l){return I.post("/llm/backends",l)},updateBackend(l,a){return I.put(`/llm/backends/${l}`,a)},deleteBackend(l){return I.delete(`/llm/backends/${l}`)},toggleBackend(l,a){return I.post(`/llm/backends/${l}/${a?"enable":"disable"}`)},getAdapterConfigSchema(l){return I.get(`/llm/types/${l}/config-schema`)},getAdapterSupportsAutoDetectModels(l){return I.get(`/llm/types/${l}/supports-auto-detect-models`)},getBackendModels(l){return I.get(`/llm/backends/${l}/auto-detect-models`)}},wt={class:"model-list-container"},xt={class:"model-list"},kt={key:1,class:"empty-list"},$t=F({__name:"ModelListForm",props:{value:{}},emits:["update:value","edit"],setup(l,{emit:a}){const c=l,m=a,h=u=>{m("update:value",u)},_=u=>{m("edit",u,c.value[u])},v=u=>{if(!u)return"M";const b=u.replace(/[^a-zA-Z]/g,"");if(!b.length)return"M";const k=Math.floor(Math.random()*b.length);return b.charAt(k).toUpperCase()},x=(u,b)=>{const k=()=>{const y=[...c.value];y.splice(b,1),h(y)};return d(j,{class:"model-card",bordered:!0,size:"small",hoverable:!0},{default:()=>d("div",{class:"model-card-content"},[d("div",{class:"model-card-header"},[d(ye,{round:!0,size:"small",color:z(u),class:"model-avatar"},{default:()=>v(u)||"M"}),d("div",{class:"model-card-title"},[d("div",{class:"model-name"},u||"未命名模型"),d("div",{class:"model-id"},u||"无ID")])]),d("div",{class:"model-card-footer"},[d("div",{class:"model-card-actions"},[d(N,{quaternary:!0,circle:!0,size:"small",class:"edit-button",onClick:()=>_(b)},{icon:()=>d(B,null,{default:()=>d(Je)})}),d(N,{type:"error",size:"small",quaternary:!0,circle:!0,onClick:k,disabled:c.value.length===1,class:"delete-button"},{icon:()=>d(B,null,{default:()=>d(Ye)})})])])])})},z=u=>{if(!u)return"#5c6ac4";let b=0;for(let p=0;p<u.length;p++)b=u.charCodeAt(p)+((b<<5)-b);const k=["#5c6ac4","#1f93ff","#18a058","#f0883a","#d03050","#8a2be2","#0eb57d","#f58220","#8f4cd7","#13c2c2"],y=Math.abs(b)%k.length;return k[y]};return(u,b)=>(w(),q("div",wt,[C("div",xt,[u.value&&u.value.length>0?(w(!0),q(G,{key:0},le(u.value,(k,y)=>(w(),V(He(x(k,y)),{key:k||y}))),128)):(w(),q("div",kt,[o(t(se),{description:"请在这里添加要使用的模型"})]))])]))}});const Mt=Ce($t,[["__scopeId","data-v-d94ad7af"]]),Rt={class:"llm-container"},zt={class:"sidebar"},Nt={class:"search-bar"},At={class:"content-area bg"},qt={class:"content-header"},It={class:"content-body"},Pt={key:0},Dt={key:1},Lt={key:1,class:"empty-state bg"},St={class:"empty-icon"},Vt={class:"adapter-marquee-container"},Bt=["src"],Et=F({__name:"LLMView",setup(l){const a=Ge(),c=f(!1),m=f(!1),h=f(!1),_=f(""),v=f([]),x=f([]),z=f(""),u=f(null),b=f(!1),k=f(null),y=f(!1),p=f("add"),L=f(-1),A=f({id:""}),W=f(null),J={name:[{required:!0,message:"请输入配置名称",trigger:"blur"},{required:!0,validator:(s,e)=>e!==P.value&&v.value.some(n=>n.name===e)?Promise.reject(new Error("配置名称已存在")):Promise.resolve(),trigger:"blur"}],adapter:{required:!0,message:"请选择接口类型",trigger:"blur"}},i=f(null),P=f(""),T=async()=>{try{const s=await D.getAdapterTypes();x.value=Array.isArray(s)?s:s.types;const e=await D.getBackends();v.value=Array.isArray(e)?e:e.data.backends}catch(s){a.error(`加载适配器失败: ${s.message||s}`)}},ie=E(()=>{if(!z.value)return v.value;const s=z.value.toLowerCase();return v.value.filter(e=>e.name.toLowerCase().includes(s)||e.adapter.toLowerCase().includes(s))}),we=async(s,e=!1)=>{try{b.value=!0;const{configSchema:n}=await D.getAdapterConfigSchema(s);i.value&&e&&(i.value.config={}),u.value=n}catch(n){a.error(`获取适配器配置模式失败: ${n.message||n}`),u.value=null}finally{b.value=!1}},xe=async s=>{_.value=s.name,i.value={name:"",adapter:"",config:{},enable:!0,models:[]},i.value={...s},P.value=s.name},de=async(s=null)=>{i.value={name:"",adapter:s??"",config:{},enable:!0,models:[]},P.value=""},ue=E(()=>!v.value.find(e=>e.name===P.value)),Y=async()=>{var s,e,n,O;try{await((s=k.value)==null?void 0:s.validate())}catch{return a.error("保存失败: 请检查配置信息填写是否正确"),!1}try{if(!((e=i.value)!=null&&e.name)||!((n=i.value)!=null&&n.adapter))throw new Error("请输入完整的配置信息");return await((O=W.value)==null?void 0:O.validateForm())?(ue.value?(await D.createBackend(i.value),a.success("创建成功")):(await D.updateBackend(P.value,i.value),a.success("保存成功")),await T(),P.value=i.value.name,!0):!1}catch(ee){return a.error(`保存失败: ${ee.message||"未知错误"}`),!1}},ke=async()=>{m.value=!0},$e=async()=>{h.value=!0;try{await Y()&&(i.value.models=(await D.getBackendModels(i.value.name)).models,await Y())}catch(s){a.error(`自动检测模型失败: ${s.message||s}`)}finally{h.value=!1,m.value=!1}},Me=()=>{m.value=!1};ve(()=>{var s;return(s=i.value)==null?void 0:s.adapter},async s=>{s&&await we(s)}),ve(()=>i.value,async s=>{s!=null&&s.adapter&&(s!=null&&s.name)?c.value=(await D.getAdapterSupportsAutoDetectModels(s.adapter)).supportsAutoDetectModels:c.value=!0},{deep:!0});const Re=()=>{p.value="add",L.value=-1,A.value={id:""},y.value=!0},ze=(s,e)=>{p.value="edit",L.value=s,A.value={id:e},y.value=!0},Ne=()=>{var s;if(!A.value.id){a.error("请填写模型ID");return}(s=i.value)!=null&&s.models||(i.value.models=[]),p.value==="add"?i.value.models.push(A.value.id):i.value.models[L.value]=A.value.id,y.value=!1,a.success(`${p.value==="add"?"添加":"编辑"}模型成功`)},U=f(!1),Ae=()=>{U.value=!0},qe=async()=>{var s;try{if(!((s=i.value)!=null&&s.name))throw new Error("当前配置为空");await D.deleteBackend(i.value.name),a.success("删除成功"),i.value=null}catch(e){a.error(`删除失败: ${e.message||"未知错误"}`)}finally{await T(),U.value=!1}},Ie=()=>{U.value=!1};E(()=>v.value.length===0);const ce=s=>`/assets/icons/llm/${s.toLowerCase()}.webp`;return We(()=>{T()}),(s,e)=>(w(),q(G,null,[C("div",Rt,[C("div",zt,[C("div",Nt,[o(t(dt),null,{default:r(()=>[o(t(re),{value:z.value,"onUpdate:value":e[0]||(e[0]=n=>z.value=n),placeholder:"搜索...",clearable:""},{prefix:r(()=>[o(t(B),null,{default:r(()=>[o(t(tt))]),_:1})]),_:1},8,["value"]),o(t(N),{type:"primary",onClick:e[1]||(e[1]=n=>de())},{icon:r(()=>[o(t(B),null,{default:r(()=>[o(t(be))]),_:1})]),default:r(()=>[e[12]||(e[12]=M(" 添加 "))]),_:1})]),_:1})]),o(t(ft),{hoverable:"",clickable:"",class:"adapter-list-scroll"},{default:r(()=>[o(t(oe),null,{default:r(()=>[(w(!0),q(G,null,le(ie.value,n=>(w(),V(t(ae),{key:n.name,onClick:O=>xe(n),class:Xe({active:_.value===n.name,"adapter-item":!0})},{prefix:r(()=>[o(t(ye),{width:"32",round:"",src:ce(n.adapter),color:"var(--n-color)"},null,8,["src"])]),suffix:r(()=>[o(t(Qe),{type:n.enable?"success":"warning",size:"small",class:"status-tag"},{default:r(()=>[M(Ze(n.enable?"已启用":"已禁用"),1)]),_:2},1032,["type"])]),default:r(()=>[o(t(st),{title:n.adapter,description:n.name,"description-style":"width: 100px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;"},null,8,["title","description"])]),_:2},1032,["onClick","class"]))),128)),ie.value.length===0&&v.value.length>0?(w(),V(t(ae),{key:0},{default:r(()=>[o(t(se),{description:"没有找到匹配的配置"})]),_:1})):X("",!0),v.value.length===0?(w(),V(t(ae),{key:1},{default:r(()=>[o(t(se),{description:"暂无模型配置"})]),_:1})):X("",!0)]),_:1})]),_:1})]),C("div",At,[i.value?(w(),q(G,{key:0},[C("div",qt,[e[15]||(e[15]=C("h2",null,"模型管理",-1)),o(t(S),null,{default:r(()=>[ue.value?X("",!0):(w(),V(t(N),{key:0,onClick:Ae,type:"error"},{default:r(()=>e[13]||(e[13]=[M(" 删除配置 ")])),_:1})),o(t(N),{onClick:Y,type:"primary"},{default:r(()=>e[14]||(e[14]=[M(" 保存配置 ")])),_:1})]),_:1})]),o(t(oe),{style:{height:"var(--n-window-height)"}},{default:r(()=>[C("div",It,[o(t(j),{class:"config-section",title:"基本信息"},{default:r(()=>[o(t(ge),{model:i.value,"label-placement":"left","label-width":"120",class:"form",rules:J,ref_key:"formRef",ref:k},{default:r(()=>[o(t(Q),{label:"配置名称",path:"name",feedback:"用于区分不同的配置，必须保持唯一",required:""},{default:r(()=>[o(t(re),{value:i.value.name,"onUpdate:value":e[2]||(e[2]=n=>i.value.name=n),placeholder:"请输入配置名称"},null,8,["value"])]),_:1}),o(t(Q),{label:"接口类型",path:"adapter",feedback:"指定模型供应商，使用与模型供应商一致的 API 接口请求模型",required:""},{default:r(()=>[o(t(rt),{value:i.value.adapter,"onUpdate:value":e[3]||(e[3]=n=>i.value.adapter=n),options:x.value.map(n=>({label:n,value:n})),placeholder:"请选择接口类型"},null,8,["value","options"])]),_:1}),o(t(Q),{label:"启用",path:"enable"},{default:r(()=>[o(t(at),{value:i.value.enable,"onUpdate:value":e[4]||(e[4]=n=>i.value.enable=n)},null,8,["value"])]),_:1}),o(t(lt),{show:b.value},{default:r(()=>{var n;return[u.value&&((n=i.value)!=null&&n.adapter)?(w(),V(et,{key:0,schema:u.value,modelValue:i.value.config,"onUpdate:modelValue":e[5]||(e[5]=O=>i.value.config=O),ref_key:"dynamicConfigForm",ref:W},null,8,["schema","modelValue"])):X("",!0)]}),_:1},8,["show"])]),_:1},8,["model"])]),_:1}),o(t(j),{class:"config-section",title:"模型列表"},{"header-extra":r(()=>[o(t(S),null,{default:r(()=>[o(t(Ke),{trigger:"hover"},{trigger:r(()=>[o(t(N),{type:"primary",onClick:ke,disabled:!c.value,loading:h.value,size:"small",class:"action-button"},{icon:r(()=>[o(t(B),null,{default:r(()=>[o(t(ot))]),_:1})]),default:r(()=>[e[16]||(e[16]=M(" 自动检测 "))]),_:1},8,["disabled","loading"])]),default:r(()=>[c.value?(w(),q("div",Dt,e[18]||(e[18]=[C("p",null,"当前 API 支持自动检测模型列表，请确保 API 信息正确填写，然后点击这里。",-1)]))):(w(),q("div",Pt,e[17]||(e[17]=[C("p",null,"当前 API 不支持自动检测模型列表，请手动添加模型。",-1)])))]),_:1}),o(t(N),{type:"primary",onClick:Re,size:"small",class:"action-button"},{icon:r(()=>[o(t(B),null,{default:r(()=>[o(t(be))]),_:1})]),default:r(()=>[e[19]||(e[19]=M(" 添加模型 "))]),_:1})]),_:1})]),default:r(()=>[o(t(oe),{style:{height:"360px"}},{default:r(()=>[o(Mt,{value:i.value.models,"onUpdate:value":e[6]||(e[6]=n=>i.value.models=n),onEdit:ze},null,8,["value"])]),_:1})]),_:1})])]),_:1})],64)):(w(),q("div",Lt,[o(t(S),{vertical:"",align:"center",style:{width:"100%"}},{default:r(()=>[C("div",St,[o(t(B),{size:"64",color:"var(--primary-color)"},{default:r(()=>e[20]||(e[20]=[C("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",viewBox:"0 0 24 24"},[C("path",{fill:"currentColor",d:"M21 10.975V8a2 2 0 0 0-2-2h-6V4.688c.305-.274.5-.668.5-1.11a1.5 1.5 0 0 0-3 0c0 .442.195.836.5 1.11V6H5a2 2 0 0 0-2 2v2.975A3.5 3.5 0 0 0 2 14.5a3.5 3.5 0 0 0 1.974 3.15c.284.876 1.092 1.5 2.053 1.5h12c.961 0 1.769-.624 2.053-1.5A3.5 3.5 0 0 0 22 14.5a3.5 3.5 0 0 0-1-2.525M8 9h8a1 1 0 0 1 1 1v1H7v-1a1 1 0 0 1 1-1m2 9.5a2.5 2.5 0 0 1-2.5-2.5a2.5 2.5 0 0 1 2.5-2.5a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5m8.5-2.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5a2.5 2.5 0 0 1 2.5-2.5a2.5 2.5 0 0 1 2.5 2.5z"})],-1)])),_:1})]),o(t(fe),{strong:"",style:{"font-size":"24px"},class:"empty-title"},{default:r(()=>e[21]||(e[21]=[M("海量模型，一网打尽")])),_:1}),o(t(fe),{style:{"font-size":"16px"},class:"empty-description"},{default:r(()=>e[22]||(e[22]=[M("选择一个模型供应商，然后添加模型，即可开始使用，"),C("a",{href:"https://kirara-docs.app.lss233.com/guide/configuration/llm.html",target:"_blank"},"查看文档",-1),M("。")])),_:1}),C("div",Vt,[o(t(_t),{"auto-fill":"",speed:40},{default:r(()=>[o(t(S),{class:"adapter-list-marquee"},{default:r(()=>[(w(!0),q(G,null,le(x.value,n=>(w(),V(t(j),{hoverable:"",onClick:O=>de(n),style:{width:"120px",height:"120px",position:"relative",overflow:"hidden"}},{default:r(()=>[C("img",{src:ce(n),style:{width:"100%",height:"100%","object-fit":"contain"}},null,8,Bt)]),_:2},1032,["onClick"]))),256))]),_:1})]),_:1})])]),_:1})]))])]),o(t(te),{show:m.value,"onUpdate:show":e[7]||(e[7]=n=>m.value=n),class:"custom-modal"},{default:r(()=>[o(t(j),{style:{width:"400px"},title:"确认",bordered:!1,size:"huge",role:"dialog","aria-modal":"true"},{default:r(()=>[e[25]||(e[25]=C("div",null,"自动检测前会自动保存当前配置，请确保 API 信息正确填写，然后点击继续。",-1)),o(t(S),{justify:"end",style:{"margin-top":"24px"}},{default:r(()=>[o(t(N),{onClick:Me,class:"cancel-button"},{default:r(()=>e[23]||(e[23]=[M("取消")])),_:1}),o(t(N),{type:"primary",onClick:$e,loading:h.value,class:"confirm-button"},{default:r(()=>e[24]||(e[24]=[M(" 继续 ")])),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["show"]),o(t(te),{show:U.value,"onUpdate:show":e[8]||(e[8]=n=>U.value=n),class:"custom-modal"},{default:r(()=>[o(t(j),{style:{width:"400px"},title:"确认删除",bordered:!1,size:"huge",role:"dialog","aria-modal":"true"},{default:r(()=>[e[28]||(e[28]=C("div",null,"确定要删除此配置吗？删除后将无法恢复。",-1)),o(t(S),{justify:"end",style:{"margin-top":"24px"}},{default:r(()=>[o(t(N),{onClick:Ie,class:"cancel-button"},{default:r(()=>e[26]||(e[26]=[M("取消")])),_:1}),o(t(N),{onClick:qe,type:"error",class:"confirm-button"},{default:r(()=>e[27]||(e[27]=[M(" 删除 ")])),_:1})]),_:1})]),_:1})]),_:1},8,["show"]),o(t(te),{show:y.value,"onUpdate:show":e[11]||(e[11]=n=>y.value=n),preset:"card",style:{width:"600px"},class:"custom-modal",title:p.value==="add"?"添加模型":"编辑模型"},{footer:r(()=>[o(t(S),{justify:"end"},{default:r(()=>[o(t(N),{onClick:e[10]||(e[10]=n=>y.value=!1),class:"cancel-button"},{default:r(()=>e[29]||(e[29]=[M("取消")])),_:1}),o(t(N),{type:"primary",onClick:Ne,class:"confirm-button"},{default:r(()=>e[30]||(e[30]=[M("保存")])),_:1})]),_:1})]),default:r(()=>[o(t(ge),{model:A.value,"label-placement":"left","label-width":"120"},{default:r(()=>[o(t(Q),{label:"模型ID",path:"id",required:""},{default:r(()=>[o(t(re),{value:A.value.id,"onUpdate:value":e[9]||(e[9]=n=>A.value.id=n),placeholder:"请输入模型ID"},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["show","title"])],64))}});const ro=Ce(Et,[["__scopeId","data-v-bd48be2e"]]);export{ro as default};
