import{$ as ie,b as R,bO as ce,P as ue,J as E,I as de,R as K,K as he,d as O,L as fe,r as A,e as oe,w as q,X as U,V as se,Y as me,O as X,o as j,c as H,H as le,f as pe,k as o,i as n,j as e,B as _e,p as W,N as M,l as T,m as d,g as S,F as ke,a as $,s as z,D as Y,t as m,A as F,C as ge,x as G,_ as we}from"./index.js";import{u as be}from"./llm-tracing.vm.js";import{A as ve}from"./ArrowBackOutline.js";import{R as je}from"./RefreshOutline.js";import{C as Q}from"./CopyOutline.js";import{N as Ce}from"./Spin.js";import{N as $e}from"./Result.js";import{N as Z,a as g}from"./DescriptionsItem.js";import"./cryptojs.js";import"./composables.js";import"./format.js";import"./en-US.js";function xe(s,t){const c=ie(ce,null);return R(()=>s.hljs||(c==null?void 0:c.mergedHljsRef.value))}function ye(s){const{textColor2:t,fontSize:c,fontWeightStrong:r,textColor3:w}=s;return{textColor:t,fontSize:c,fontWeightStrong:r,"mono-3":"#a0a1a7","hue-1":"#0184bb","hue-2":"#4078f2","hue-3":"#a626a4","hue-4":"#50a14f","hue-5":"#e45649","hue-5-2":"#c91243","hue-6":"#986801","hue-6-2":"#c18401",lineNumberTextColor:w}}const Ne={name:"Code",common:ue,self:ye},Le=Ne,Me=E([de("code",`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[K("show-line-numbers",`
 display: flex;
 `),he("line-numbers",`
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `),K("word-wrap",[E("pre",`
 white-space: pre-wrap;
 word-break: break-all;
 `)]),E("pre",`
 margin: 0;
 line-height: inherit;
 font-size: inherit;
 font-family: inherit;
 `),E("[class^=hljs]",`
 color: var(--n-text-color);
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),({props:s})=>{const t=`${s.bPrefix}code`;return[`${t} .hljs-comment,
 ${t} .hljs-quote {
 color: var(--n-mono-3);
 font-style: italic;
 }`,`${t} .hljs-doctag,
 ${t} .hljs-keyword,
 ${t} .hljs-formula {
 color: var(--n-hue-3);
 }`,`${t} .hljs-section,
 ${t} .hljs-name,
 ${t} .hljs-selector-tag,
 ${t} .hljs-deletion,
 ${t} .hljs-subst {
 color: var(--n-hue-5);
 }`,`${t} .hljs-literal {
 color: var(--n-hue-1);
 }`,`${t} .hljs-string,
 ${t} .hljs-regexp,
 ${t} .hljs-addition,
 ${t} .hljs-attribute,
 ${t} .hljs-meta-string {
 color: var(--n-hue-4);
 }`,`${t} .hljs-built_in,
 ${t} .hljs-class .hljs-title {
 color: var(--n-hue-6-2);
 }`,`${t} .hljs-attr,
 ${t} .hljs-variable,
 ${t} .hljs-template-variable,
 ${t} .hljs-type,
 ${t} .hljs-selector-class,
 ${t} .hljs-selector-attr,
 ${t} .hljs-selector-pseudo,
 ${t} .hljs-number {
 color: var(--n-hue-6);
 }`,`${t} .hljs-symbol,
 ${t} .hljs-bullet,
 ${t} .hljs-link,
 ${t} .hljs-meta,
 ${t} .hljs-selector-id,
 ${t} .hljs-title {
 color: var(--n-hue-2);
 }`,`${t} .hljs-emphasis {
 font-style: italic;
 }`,`${t} .hljs-strong {
 font-weight: var(--n-font-weight-strong);
 }`,`${t} .hljs-link {
 text-decoration: underline;
 }`]}]),Te=Object.assign(Object.assign({},se.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),ee=O({name:"Code",props:Te,setup(s,{slots:t}){const{internalNoHighlight:c}=s,{mergedClsPrefixRef:r,inlineThemeDisabled:w}=fe(),C=A(null),B=c?{value:void 0}:xe(s),D=(a,p,h)=>{const{value:_}=B;return!_||!(a&&_.getLanguage(a))?null:_.highlight(h?p.trim():p,{language:a}).value},V=R(()=>s.inline||s.wordWrap?!1:s.showLineNumbers),x=()=>{if(t.default)return;const{value:a}=C;if(!a)return;const{language:p}=s,h=s.uri?window.decodeURIComponent(s.code):s.code;if(p){const f=D(p,h,s.trim);if(f!==null){if(s.inline)a.innerHTML=f;else{const L=a.querySelector(".__code__");L&&a.removeChild(L);const N=document.createElement("pre");N.className="__code__",N.innerHTML=f,a.appendChild(N)}return}}if(s.inline){a.textContent=h;return}const _=a.querySelector(".__code__");if(_)_.textContent=h;else{const f=document.createElement("pre");f.className="__code__",f.textContent=h,a.innerHTML="",a.appendChild(f)}};oe(x),q(U(s,"language"),x),q(U(s,"code"),x),c||q(B,x);const I=se("Code","-code",Me,Le,s,r),y=R(()=>{const{common:{cubicBezierEaseInOut:a,fontFamilyMono:p},self:{textColor:h,fontSize:_,fontWeightStrong:f,lineNumberTextColor:L,"mono-3":N,"hue-1":P,"hue-2":b,"hue-3":i,"hue-4":l,"hue-5":u,"hue-5-2":v,"hue-6":re,"hue-6-2":ae}}=I.value,{internalFontSize:J}=s;return{"--n-font-size":J?`${J}px`:_,"--n-font-family":p,"--n-font-weight-strong":f,"--n-bezier":a,"--n-text-color":h,"--n-mono-3":N,"--n-hue-1":P,"--n-hue-2":b,"--n-hue-3":i,"--n-hue-4":l,"--n-hue-5":u,"--n-hue-5-2":v,"--n-hue-6":re,"--n-hue-6-2":ae,"--n-line-number-text-color":L}}),k=w?me("code",R(()=>`${s.internalFontSize||"a"}`),y,s):void 0;return{mergedClsPrefix:r,codeRef:C,mergedShowLineNumbers:V,lineNumbers:R(()=>{let a=1;const p=[];let h=!1;for(const _ of s.code)_===`
`?(h=!0,p.push(a++)):h=!1;return h||p.push(a++),p.join(`
`)}),cssVars:w?void 0:y,themeClass:k==null?void 0:k.themeClass,onRender:k==null?void 0:k.onRender}},render(){var s,t;const{mergedClsPrefix:c,wordWrap:r,mergedShowLineNumbers:w,onRender:C}=this;return C==null||C(),X("code",{class:[`${c}-code`,this.themeClass,r&&`${c}-code--word-wrap`,w&&`${c}-code--show-line-numbers`],style:this.cssVars,ref:"codeRef"},w?X("pre",{class:`${c}-code__line-numbers`},this.lineNumbers):null,(t=(s=this.$slots).default)===null||t===void 0?void 0:t.call(s))}}),Se={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ze=le('<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M304 416V304h112"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M314.2 314.23L432 432"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M208 96v112H96"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M197.8 197.77L80 80"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M416 208H304V96"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M314.23 197.8L432 80"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M96 304h112v112"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M197.77 314.2L80 432"></path>',8),Re=[ze],te=O({name:"ContractOutline",render:function(t,c){return j(),H("svg",Se,Re)}}),Be={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Ee=le('<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M432 320v112H320"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M421.8 421.77L304 304"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M80 192V80h112"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M90.2 90.23L208 208"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 80h112v112"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M421.77 90.2L304 208"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M192 432H80V320"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M90.23 421.8L208 304"></path>',8),He=[Ee],ne=O({name:"ExpandOutline",render:function(t,c){return j(),H("svg",Be,He)}}),Oe={class:"trace-detail"},De={class:"section"},Ve={class:"section"},Ie={class:"section"},Pe={class:"content-actions"},qe={class:"section"},We={class:"content-actions"},Fe=O({__name:"LLMTraceDetail",setup(s){const c=_e().params.traceId,{traceDetail:r,isLoading:w,getTraceDetail:C,connectWebSocket:B,disconnectWebSocket:D,goBackToList:V,formatDate:x,formatDuration:I,formatTokens:y}=be(),k=A(!1),a=A(!1),p=()=>{k.value=!k.value},h=()=>{a.value=!a.value},_=b=>{navigator.clipboard.writeText(b).then(()=>{console.log("内容已复制到剪贴板")}).catch(i=>{console.error("复制失败:",i)})},f=b=>{try{return JSON.stringify(b,null,2)}catch{return String(b)}},L=b=>({pending:"warning",success:"success",failed:"error"})[b||"pending"]||"warning",N=b=>({pending:"请求中",success:"成功",failed:"失败"})[b||"pending"]||"请求中",P=async()=>{await C(c)};return oe(async()=>{await C(c),B()}),pe(()=>{D()}),(b,i)=>(j(),H("div",Oe,[o(e(z),{title:"LLM 请求详情",class:"detail-card"},{"header-extra":n(()=>[o(e(W),{align:"center",size:12},{default:n(()=>[o(e(M),{type:"default",onClick:e(V),class:"action-button"},{icon:n(()=>[o(e(T),null,{default:n(()=>[o(e(ve))]),_:1})]),default:n(()=>[i[2]||(i[2]=d(" 返回列表 "))]),_:1},8,["onClick"]),o(e(M),{type:"primary",onClick:P,loading:e(w),class:"action-button"},{icon:n(()=>[o(e(T),null,{default:n(()=>[o(e(je))]),_:1})]),default:n(()=>[i[3]||(i[3]=d(" 刷新 "))]),_:1},8,["loading"])]),_:1})]),default:n(()=>[o(e(Ce),{show:e(w)},{default:n(()=>[!e(r)&&!e(w)?(j(),S(e($e),{key:0,status:"404",title:"未找到记录",description:"请求的记录不存在或已被删除",class:"not-found"})):(j(),H(ke,{key:1},[$("div",De,[o(e(z),{title:"基本信息",class:"info-card"},{default:n(()=>[o(e(Z),{column:3,bordered:""},{default:n(()=>{var l;return[o(e(g),{label:"追踪ID"},{default:n(()=>[o(e(Y),{code:"",class:"trace-id"},{default:n(()=>{var u;return[d(m((u=e(r))==null?void 0:u.trace_id),1)]}),_:1})]),_:1}),o(e(g),{label:"请求时间"},{default:n(()=>{var u;return[d(m(e(x)((u=e(r))==null?void 0:u.request_time)),1)]}),_:1}),o(e(g),{label:"响应时间"},{default:n(()=>{var u;return[d(m(e(x)((u=e(r))==null?void 0:u.response_time)),1)]}),_:1}),o(e(g),{label:"耗时"},{default:n(()=>{var u;return[d(m(e(I)((u=e(r))==null?void 0:u.duration)),1)]}),_:1}),o(e(g),{label:"状态"},{default:n(()=>{var u;return[o(e(F),{type:L((u=e(r))==null?void 0:u.status),size:"small",class:"status-tag"},{default:n(()=>{var v;return[d(m(N((v=e(r))==null?void 0:v.status)),1)]}),_:1},8,["type"])]}),_:1}),(l=e(r))!=null&&l.error?(j(),S(e(g),{key:0,label:"错误信息"},{default:n(()=>[o(e(Y),{type:"error",class:"error-text"},{default:n(()=>[d(m(e(r).error),1)]),_:1})]),_:1})):ge("",!0)]}),_:1})]),_:1})]),$("div",Ve,[o(e(z),{title:"LLM信息",class:"info-card"},{default:n(()=>[o(e(Z),{column:3,bordered:""},{default:n(()=>[o(e(g),{label:"模型"},{default:n(()=>[o(e(F),{type:"primary",size:"small",class:"model-tag"},{default:n(()=>{var l;return[d(m((l=e(r))==null?void 0:l.model_id),1)]}),_:1})]),_:1}),o(e(g),{label:"后端"},{default:n(()=>[o(e(F),{type:"info",size:"small",class:"backend-tag"},{default:n(()=>{var l;return[d(m((l=e(r))==null?void 0:l.backend_name),1)]}),_:1})]),_:1}),o(e(g),{label:"总Token"},{default:n(()=>{var l;return[d(m(e(y)((l=e(r))==null?void 0:l.total_tokens)),1)]}),_:1}),o(e(g),{label:"提示Token"},{default:n(()=>{var l;return[d(m(e(y)((l=e(r))==null?void 0:l.prompt_tokens)),1)]}),_:1}),o(e(g),{label:"补全Token"},{default:n(()=>{var l;return[d(m(e(y)((l=e(r))==null?void 0:l.completion_tokens)),1)]}),_:1}),o(e(g),{label:"缓存Token"},{default:n(()=>{var l;return[d(m(e(y)((l=e(r))==null?void 0:l.cached_tokens)),1)]}),_:1})]),_:1})]),_:1})]),$("div",Ie,[o(e(z),{title:"请求内容",class:"content-card"},{default:n(()=>{var l;return[$("div",Pe,[o(e(W),null,{default:n(()=>[o(e(M),{size:"small",onClick:i[0]||(i[0]=u=>{var v;return _(f((v=e(r))==null?void 0:v.request))}),class:"copy-button"},{icon:n(()=>[o(e(T),null,{default:n(()=>[o(e(Q))]),_:1})]),default:n(()=>[i[4]||(i[4]=d(" 复制 "))]),_:1}),o(e(M),{size:"small",onClick:p,class:"expand-button"},{icon:n(()=>[o(e(T),null,{default:n(()=>[k.value?(j(),S(e(te),{key:0})):(j(),S(e(ne),{key:1}))]),_:1})]),default:n(()=>[d(" "+m(k.value?"收起":"展开"),1)]),_:1})]),_:1})]),$("div",{class:G(["code-container",{expanded:k.value}])},[o(e(ee),{code:f((l=e(r))==null?void 0:l.request),language:"json","word-wrap":!0,"show-line-numbers":!0,"highlight-current-line":!0,class:"code-block"},null,8,["code"])],2)]}),_:1})]),$("div",qe,[o(e(z),{title:"响应内容",class:"content-card"},{default:n(()=>{var l;return[$("div",We,[o(e(W),null,{default:n(()=>[o(e(M),{size:"small",onClick:i[1]||(i[1]=u=>{var v;return _(f((v=e(r))==null?void 0:v.response))}),class:"copy-button"},{icon:n(()=>[o(e(T),null,{default:n(()=>[o(e(Q))]),_:1})]),default:n(()=>[i[5]||(i[5]=d(" 复制 "))]),_:1}),o(e(M),{size:"small",onClick:h,class:"expand-button"},{icon:n(()=>[o(e(T),null,{default:n(()=>[a.value?(j(),S(e(te),{key:0})):(j(),S(e(ne),{key:1}))]),_:1})]),default:n(()=>[d(" "+m(a.value?"收起":"展开"),1)]),_:1})]),_:1})]),$("div",{class:G(["code-container",{expanded:a.value}])},[o(e(ee),{code:f((l=e(r))==null?void 0:l.response),language:"json","word-wrap":!0,"show-line-numbers":!0,"highlight-current-line":!0,class:"code-block"},null,8,["code"])],2)]}),_:1})])],64))]),_:1},8,["show"])]),_:1})]))}});const ot=we(Fe,[["__scopeId","data-v-33a0c620"]]);export{ot as default};
