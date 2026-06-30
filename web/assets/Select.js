import{r as F,b as B,b7 as we,W as ot,d as ve,$ as at,aL as sn,aM as dn,e as Ue,bT as un,bK as cn,X as J,aU as lt,O as c,a2 as ht,aN as Je,bA as fn,au as _e,as as hn,bU as Qe,w as xe,al as Rt,a7 as st,P as dt,bf as vn,aP as Fe,bV as ut,ac as gn,bl as Tt,I as $,K as j,R as ie,J as ue,a1 as it,bo as Ft,V as Oe,L as ct,U as Ot,Y as ft,ab as vt,bc as bn,ak as pn,aa as mn,bW as wn,v as Mt,at as me,aV as Ee,bs as Ae,bX as xn,a9 as yn,b0 as Te,ay as Sn,A as Ze,bY as gt,ah as Cn,F as Rn,bZ as bt,b_ as Tn,aS as pt,aR as Fn,b6 as On,bp as Mn,bq as rt,bi as zn,bj as Pn,bk as In,aW as kn,aX as $n,bm as mt,bQ as Bn,bn as _n,br as En,aj as de}from"./index.js";import{u as An}from"./use-locale.js";import{a as Ln}from"./Input.js";import{F as Nn}from"./Checkmark.js";import{e as Dn,N as Wn}from"./Empty.js";function wt(e){return e&-e}class zt{constructor(n,o){this.l=n,this.min=o;const l=new Array(n+1);for(let i=0;i<n+1;++i)l[i]=0;this.ft=l}add(n,o){if(o===0)return;const{l,ft:i}=this;for(n+=1;n<=l;)i[n]+=o,n+=wt(n)}get(n){return this.sum(n+1)-this.sum(n)}sum(n){if(n===void 0&&(n=this.l),n<=0)return 0;const{ft:o,min:l,l:i}=this;if(n>i)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let u=n*l;for(;n>0;)u+=o[n],n-=wt(n);return u}getBound(n){let o=0,l=this.l;for(;l>o;){const i=Math.floor((o+l)/2),u=this.sum(i);if(u>n){l=i;continue}else if(u<n){if(o===i)return this.sum(o+1)<=n?o+1:i;o=i}else return i}return o}}let je;function Hn(){return typeof document>"u"?!1:(je===void 0&&("matchMedia"in window?je=window.matchMedia("(pointer:coarse)").matches:je=!1),je)}let et;function xt(){return typeof document>"u"?1:(et===void 0&&(et="chrome"in window?window.devicePixelRatio:1),et)}const Pt="VVirtualListXScroll";function Vn({columnsRef:e,renderColRef:n,renderItemWithColsRef:o}){const l=F(0),i=F(0),u=B(()=>{const w=e.value;if(w.length===0)return null;const m=new zt(w.length,0);return w.forEach((M,C)=>{m.add(C,M.width)}),m}),h=we(()=>{const w=u.value;return w!==null?Math.max(w.getBound(i.value)-1,0):0}),a=w=>{const m=u.value;return m!==null?m.sum(w):0},b=we(()=>{const w=u.value;return w!==null?Math.min(w.getBound(i.value+l.value)+1,e.value.length-1):0});return ot(Pt,{startIndexRef:h,endIndexRef:b,columnsRef:e,renderColRef:n,renderItemWithColsRef:o,getLeft:a}),{listWidthRef:l,scrollLeftRef:i}}const yt=ve({name:"VirtualListRow",props:{index:{type:Number,required:!0},item:{type:Object,required:!0}},setup(){const{startIndexRef:e,endIndexRef:n,columnsRef:o,getLeft:l,renderColRef:i,renderItemWithColsRef:u}=at(Pt);return{startIndex:e,endIndex:n,columns:o,renderCol:i,renderItemWithCols:u,getLeft:l}},render(){const{startIndex:e,endIndex:n,columns:o,renderCol:l,renderItemWithCols:i,getLeft:u,item:h}=this;if(i!=null)return i({itemIndex:this.index,startColIndex:e,endColIndex:n,allColumns:o,item:h,getLeft:u});if(l!=null){const a=[];for(let b=e;b<=n;++b){const w=o[b];a.push(l({column:w,left:u(b),item:h}))}return a}return null}}),jn=Je(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[Je("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[Je("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),Kn=ve({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},columns:{type:Array,default:()=>[]},renderCol:Function,renderItemWithCols:Function,items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const n=sn();jn.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:dn,ssr:n}),Ue(()=>{const{defaultScrollIndex:s,defaultScrollKey:p}=e;s!=null?K({index:s}):p!=null&&K({key:p})});let o=!1,l=!1;un(()=>{if(o=!1,!l){l=!0;return}K({top:x.value,left:h.value})}),cn(()=>{o=!0,l||(l=!0)});const i=we(()=>{if(e.renderCol==null&&e.renderItemWithCols==null||e.columns.length===0)return;let s=0;return e.columns.forEach(p=>{s+=p.width}),s}),u=B(()=>{const s=new Map,{keyField:p}=e;return e.items.forEach((I,D)=>{s.set(I[p],D)}),s}),{scrollLeftRef:h,listWidthRef:a}=Vn({columnsRef:J(e,"columns"),renderColRef:J(e,"renderCol"),renderItemWithColsRef:J(e,"renderItemWithCols")}),b=F(null),w=F(void 0),m=new Map,M=B(()=>{const{items:s,itemSize:p,keyField:I}=e,D=new zt(s.length,p);return s.forEach((U,H)=>{const V=U[I],E=m.get(V);E!==void 0&&D.add(H,E)}),D}),C=F(0),x=F(0),y=we(()=>Math.max(M.value.getBound(x.value-lt(e.paddingTop))-1,0)),N=B(()=>{const{value:s}=w;if(s===void 0)return[];const{items:p,itemSize:I}=e,D=y.value,U=Math.min(D+Math.ceil(s/I+1),p.length-1),H=[];for(let V=D;V<=U;++V)H.push(p[V]);return H}),K=(s,p)=>{if(typeof s=="number"){L(s,p,"auto");return}const{left:I,top:D,index:U,key:H,position:V,behavior:E,debounce:G=!0}=s;if(I!==void 0||D!==void 0)L(I,D,E);else if(U!==void 0)_(U,E,G);else if(H!==void 0){const d=u.value.get(H);d!==void 0&&_(d,E,G)}else V==="bottom"?L(0,Number.MAX_SAFE_INTEGER,E):V==="top"&&L(0,0,E)};let T,R=null;function _(s,p,I){const{value:D}=M,U=D.sum(s)+lt(e.paddingTop);if(!I)b.value.scrollTo({left:0,top:U,behavior:p});else{T=s,R!==null&&window.clearTimeout(R),R=window.setTimeout(()=>{T=void 0,R=null},16);const{scrollTop:H,offsetHeight:V}=b.value;if(U>H){const E=D.get(s);U+E<=H+V||b.value.scrollTo({left:0,top:U+E-V,behavior:p})}else b.value.scrollTo({left:0,top:U,behavior:p})}}function L(s,p,I){b.value.scrollTo({left:s,top:p,behavior:I})}function W(s,p){var I,D,U;if(o||e.ignoreItemResize||ne(p.target))return;const{value:H}=M,V=u.value.get(s),E=H.get(V),G=(U=(D=(I=p.borderBoxSize)===null||I===void 0?void 0:I[0])===null||D===void 0?void 0:D.blockSize)!==null&&U!==void 0?U:p.contentRect.height;if(G===E)return;G-e.itemSize===0?m.delete(s):m.set(s,G-e.itemSize);const v=G-E;if(v===0)return;H.add(V,v);const A=b.value;if(A!=null){if(T===void 0){const oe=H.sum(V);A.scrollTop>oe&&A.scrollBy(0,v)}else if(V<T)A.scrollBy(0,v);else if(V===T){const oe=H.sum(V);G+oe>A.scrollTop+A.offsetHeight&&A.scrollBy(0,v)}Z()}C.value++}const Q=!Hn();let Y=!1;function re(s){var p;(p=e.onScroll)===null||p===void 0||p.call(e,s),(!Q||!Y)&&Z()}function ae(s){var p;if((p=e.onWheel)===null||p===void 0||p.call(e,s),Q){const I=b.value;if(I!=null){if(s.deltaX===0&&(I.scrollTop===0&&s.deltaY<=0||I.scrollTop+I.offsetHeight>=I.scrollHeight&&s.deltaY>=0))return;s.preventDefault(),I.scrollTop+=s.deltaY/xt(),I.scrollLeft+=s.deltaX/xt(),Z(),Y=!0,fn(()=>{Y=!1})}}}function te(s){if(o||ne(s.target))return;if(e.renderCol==null&&e.renderItemWithCols==null){if(s.contentRect.height===w.value)return}else if(s.contentRect.height===w.value&&s.contentRect.width===a.value)return;w.value=s.contentRect.height,a.value=s.contentRect.width;const{onResize:p}=e;p!==void 0&&p(s)}function Z(){const{value:s}=b;s!=null&&(x.value=s.scrollTop,h.value=s.scrollLeft)}function ne(s){let p=s;for(;p!==null;){if(p.style.display==="none")return!0;p=p.parentElement}return!1}return{listHeight:w,listStyle:{overflow:"auto"},keyToIndex:u,itemsStyle:B(()=>{const{itemResizable:s}=e,p=_e(M.value.sum());return C.value,[e.itemsStyle,{boxSizing:"content-box",width:_e(i.value),height:s?"":p,minHeight:s?p:"",paddingTop:_e(e.paddingTop),paddingBottom:_e(e.paddingBottom)}]}),visibleItemsStyle:B(()=>(C.value,{transform:`translateY(${_e(M.value.sum(y.value))})`})),viewportItems:N,listElRef:b,itemsElRef:F(null),scrollTo:K,handleListResize:te,handleListScroll:re,handleListWheel:ae,handleItemResize:W}},render(){const{itemResizable:e,keyField:n,keyToIndex:o,visibleItemsTag:l}=this;return c(ht,{onResize:this.handleListResize},{default:()=>{var i,u;return c("div",hn(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?c("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[c(l,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>{const{renderCol:h,renderItemWithCols:a}=this;return this.viewportItems.map(b=>{const w=b[n],m=o.get(w),M=h!=null?c(yt,{index:m,item:b}):void 0,C=a!=null?c(yt,{index:m,item:b}):void 0,x=this.$slots.default({item:b,renderedCols:M,renderedItemWithCols:C,index:m})[0];return e?c(ht,{key:w,onResize:y=>this.handleItemResize(w,y)},{default:()=>x}):(x.key=w,x)})}})]):(u=(i=this.$slots).empty)===null||u===void 0?void 0:u.call(i)])}})}});function It(e,n){n&&(Ue(()=>{const{value:o}=e;o&&Qe.registerHandler(o,n)}),xe(e,(o,l)=>{l&&Qe.unregisterHandler(l)},{deep:!1}),Rt(()=>{const{value:o}=e;o&&Qe.unregisterHandler(o)}))}function tt(e){const n=e.filter(o=>o!==void 0);if(n.length!==0)return n.length===1?n[0]:o=>{e.forEach(l=>{l&&l(o)})}}const Un=ve({props:{onFocus:Function,onBlur:Function},setup(e){return()=>c("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),qn={height:"calc(var(--n-option-height) * 7.6)",paddingTiny:"4px 0",paddingSmall:"4px 0",paddingMedium:"4px 0",paddingLarge:"4px 0",paddingHuge:"4px 0",optionPaddingTiny:"0 12px",optionPaddingSmall:"0 12px",optionPaddingMedium:"0 12px",optionPaddingLarge:"0 12px",optionPaddingHuge:"0 12px",loadingSize:"18px"};function Gn(e){const{borderRadius:n,popoverColor:o,textColor3:l,dividerColor:i,textColor2:u,primaryColorPressed:h,textColorDisabled:a,primaryColor:b,opacityDisabled:w,hoverColor:m,fontSizeTiny:M,fontSizeSmall:C,fontSizeMedium:x,fontSizeLarge:y,fontSizeHuge:N,heightTiny:K,heightSmall:T,heightMedium:R,heightLarge:_,heightHuge:L}=e;return Object.assign(Object.assign({},qn),{optionFontSizeTiny:M,optionFontSizeSmall:C,optionFontSizeMedium:x,optionFontSizeLarge:y,optionFontSizeHuge:N,optionHeightTiny:K,optionHeightSmall:T,optionHeightMedium:R,optionHeightLarge:_,optionHeightHuge:L,borderRadius:n,color:o,groupHeaderTextColor:l,actionDividerColor:i,optionTextColor:u,optionTextColorPressed:h,optionTextColorDisabled:a,optionTextColorActive:b,optionOpacityDisabled:w,optionCheckColor:b,optionColorPending:m,optionColorActive:"rgba(0, 0, 0, 0)",optionColorActivePending:m,actionTextColor:u,loadingColor:b})}const Xn=st({name:"InternalSelectMenu",common:dt,peers:{Scrollbar:vn,Empty:Dn},self:Gn}),kt=Xn,St=ve({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:n,labelFieldRef:o,nodePropsRef:l}=at(ut);return{labelField:o,nodeProps:l,renderLabel:e,renderOption:n}},render(){const{clsPrefix:e,renderLabel:n,renderOption:o,nodeProps:l,tmNode:{rawNode:i}}=this,u=l==null?void 0:l(i),h=n?n(i,!1):Fe(i[this.labelField],i,!1),a=c("div",Object.assign({},u,{class:[`${e}-base-select-group-header`,u==null?void 0:u.class]}),h);return i.render?i.render({node:a,option:i}):o?o({node:a,option:i,selected:!1}):a}});function Yn(e,n){return c(Tt,{name:"fade-in-scale-up-transition"},{default:()=>e?c(gn,{clsPrefix:n,class:`${n}-base-select-option__check`},{default:()=>c(Nn)}):null})}const Ct=ve({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:n,pendingTmNodeRef:o,multipleRef:l,valueSetRef:i,renderLabelRef:u,renderOptionRef:h,labelFieldRef:a,valueFieldRef:b,showCheckmarkRef:w,nodePropsRef:m,handleOptionClick:M,handleOptionMouseEnter:C}=at(ut),x=we(()=>{const{value:T}=o;return T?e.tmNode.key===T.key:!1});function y(T){const{tmNode:R}=e;R.disabled||M(T,R)}function N(T){const{tmNode:R}=e;R.disabled||C(T,R)}function K(T){const{tmNode:R}=e,{value:_}=x;R.disabled||_||C(T,R)}return{multiple:l,isGrouped:we(()=>{const{tmNode:T}=e,{parent:R}=T;return R&&R.rawNode.type==="group"}),showCheckmark:w,nodeProps:m,isPending:x,isSelected:we(()=>{const{value:T}=n,{value:R}=l;if(T===null)return!1;const _=e.tmNode.rawNode[b.value];if(R){const{value:L}=i;return L.has(_)}else return T===_}),labelField:a,renderLabel:u,renderOption:h,handleMouseMove:K,handleMouseEnter:N,handleClick:y}},render(){const{clsPrefix:e,tmNode:{rawNode:n},isSelected:o,isPending:l,isGrouped:i,showCheckmark:u,nodeProps:h,renderOption:a,renderLabel:b,handleClick:w,handleMouseEnter:m,handleMouseMove:M}=this,C=Yn(o,e),x=b?[b(n,o),u&&C]:[Fe(n[this.labelField],n,o),u&&C],y=h==null?void 0:h(n),N=c("div",Object.assign({},y,{class:[`${e}-base-select-option`,n.class,y==null?void 0:y.class,{[`${e}-base-select-option--disabled`]:n.disabled,[`${e}-base-select-option--selected`]:o,[`${e}-base-select-option--grouped`]:i,[`${e}-base-select-option--pending`]:l,[`${e}-base-select-option--show-checkmark`]:u}],style:[(y==null?void 0:y.style)||"",n.style||""],onClick:tt([w,y==null?void 0:y.onClick]),onMouseenter:tt([m,y==null?void 0:y.onMouseenter]),onMousemove:tt([M,y==null?void 0:y.onMousemove])}),c("div",{class:`${e}-base-select-option__content`},x));return n.render?n.render({node:N,option:n,selected:o}):a?a({node:N,option:n,selected:o}):N}}),Jn=$("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[$("scrollbar",`
 max-height: var(--n-height);
 `),$("virtual-list",`
 max-height: var(--n-height);
 `),$("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[j("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),$("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),$("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),j("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),j("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),j("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),j("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),$("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),$("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[ie("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),ue("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),ue("&:active",`
 color: var(--n-option-text-color-pressed);
 `),ie("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),ie("pending",[ue("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),ie("selected",`
 color: var(--n-option-text-color-active);
 `,[ue("&::before",`
 background-color: var(--n-option-color-active);
 `),ie("pending",[ue("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),ie("disabled",`
 cursor: not-allowed;
 `,[it("selected",`
 color: var(--n-option-text-color-disabled);
 `),ie("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),j("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Ft({enterScale:"0.5"})])])]),Qn=ve({name:"InternalSelectMenu",props:Object.assign(Object.assign({},Oe.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:o}=ct(e),l=Ot("InternalSelectMenu",o,n),i=Oe("InternalSelectMenu","-internal-select-menu",Jn,kt,e,J(e,"clsPrefix")),u=F(null),h=F(null),a=F(null),b=B(()=>e.treeMate.getFlattenedNodes()),w=B(()=>wn(b.value)),m=F(null);function M(){const{treeMate:d}=e;let v=null;const{value:A}=e;A===null?v=d.getFirstAvailableNode():(e.multiple?v=d.getNode((A||[])[(A||[]).length-1]):v=d.getNode(A),(!v||v.disabled)&&(v=d.getFirstAvailableNode())),p(v||null)}function C(){const{value:d}=m;d&&!e.treeMate.getNode(d.key)&&(m.value=null)}let x;xe(()=>e.show,d=>{d?x=xe(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?M():C(),Mt(I)):C()},{immediate:!0}):x==null||x()},{immediate:!0}),Rt(()=>{x==null||x()});const y=B(()=>lt(i.value.self[me("optionHeight",e.size)])),N=B(()=>Ee(i.value.self[me("padding",e.size)])),K=B(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),T=B(()=>{const d=b.value;return d&&d.length===0});function R(d){const{onToggle:v}=e;v&&v(d)}function _(d){const{onScroll:v}=e;v&&v(d)}function L(d){var v;(v=a.value)===null||v===void 0||v.sync(),_(d)}function W(){var d;(d=a.value)===null||d===void 0||d.sync()}function Q(){const{value:d}=m;return d||null}function Y(d,v){v.disabled||p(v,!1)}function re(d,v){v.disabled||R(v)}function ae(d){var v;Ae(d,"action")||(v=e.onKeyup)===null||v===void 0||v.call(e,d)}function te(d){var v;Ae(d,"action")||(v=e.onKeydown)===null||v===void 0||v.call(e,d)}function Z(d){var v;(v=e.onMousedown)===null||v===void 0||v.call(e,d),!e.focusable&&d.preventDefault()}function ne(){const{value:d}=m;d&&p(d.getNext({loop:!0}),!0)}function s(){const{value:d}=m;d&&p(d.getPrev({loop:!0}),!0)}function p(d,v=!1){m.value=d,v&&I()}function I(){var d,v;const A=m.value;if(!A)return;const oe=w.value(A.key);oe!==null&&(e.virtualScroll?(d=h.value)===null||d===void 0||d.scrollTo({index:oe}):(v=a.value)===null||v===void 0||v.scrollTo({index:oe,elSize:y.value}))}function D(d){var v,A;!((v=u.value)===null||v===void 0)&&v.contains(d.target)&&((A=e.onFocus)===null||A===void 0||A.call(e,d))}function U(d){var v,A;!((v=u.value)===null||v===void 0)&&v.contains(d.relatedTarget)||(A=e.onBlur)===null||A===void 0||A.call(e,d)}ot(ut,{handleOptionMouseEnter:Y,handleOptionClick:re,valueSetRef:K,pendingTmNodeRef:m,nodePropsRef:J(e,"nodeProps"),showCheckmarkRef:J(e,"showCheckmark"),multipleRef:J(e,"multiple"),valueRef:J(e,"value"),renderLabelRef:J(e,"renderLabel"),renderOptionRef:J(e,"renderOption"),labelFieldRef:J(e,"labelField"),valueFieldRef:J(e,"valueField")}),ot(xn,u),Ue(()=>{const{value:d}=a;d&&d.sync()});const H=B(()=>{const{size:d}=e,{common:{cubicBezierEaseInOut:v},self:{height:A,borderRadius:oe,color:ye,groupHeaderTextColor:Se,actionDividerColor:ce,optionTextColorPressed:le,optionTextColor:Ce,optionTextColorDisabled:fe,optionTextColorActive:Me,optionOpacityDisabled:ze,optionCheckColor:Pe,actionTextColor:Ie,optionColorPending:ge,optionColorActive:be,loadingColor:ke,loadingSize:$e,optionColorActivePending:Be,[me("optionFontSize",d)]:Re,[me("optionHeight",d)]:pe,[me("optionPadding",d)]:ee}}=i.value;return{"--n-height":A,"--n-action-divider-color":ce,"--n-action-text-color":Ie,"--n-bezier":v,"--n-border-radius":oe,"--n-color":ye,"--n-option-font-size":Re,"--n-group-header-text-color":Se,"--n-option-check-color":Pe,"--n-option-color-pending":ge,"--n-option-color-active":be,"--n-option-color-active-pending":Be,"--n-option-height":pe,"--n-option-opacity-disabled":ze,"--n-option-text-color":Ce,"--n-option-text-color-active":Me,"--n-option-text-color-disabled":fe,"--n-option-text-color-pressed":le,"--n-option-padding":ee,"--n-option-padding-left":Ee(ee,"left"),"--n-option-padding-right":Ee(ee,"right"),"--n-loading-color":ke,"--n-loading-size":$e}}),{inlineThemeDisabled:V}=e,E=V?ft("internal-select-menu",B(()=>e.size[0]),H,e):void 0,G={selfRef:u,next:ne,prev:s,getPendingTmNode:Q};return It(u,e.onResize),Object.assign({mergedTheme:i,mergedClsPrefix:n,rtlEnabled:l,virtualListRef:h,scrollbarRef:a,itemSize:y,padding:N,flattenedNodes:b,empty:T,virtualListContainer(){const{value:d}=h;return d==null?void 0:d.listElRef},virtualListContent(){const{value:d}=h;return d==null?void 0:d.itemsElRef},doScroll:_,handleFocusin:D,handleFocusout:U,handleKeyUp:ae,handleKeyDown:te,handleMouseDown:Z,handleVirtualListResize:W,handleVirtualListScroll:L,cssVars:V?void 0:H,themeClass:E==null?void 0:E.themeClass,onRender:E==null?void 0:E.onRender},G)},render(){const{$slots:e,virtualScroll:n,clsPrefix:o,mergedTheme:l,themeClass:i,onRender:u}=this;return u==null||u(),c("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${o}-base-select-menu`,this.rtlEnabled&&`${o}-base-select-menu--rtl`,i,this.multiple&&`${o}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},vt(e.header,h=>h&&c("div",{class:`${o}-base-select-menu__header`,"data-header":!0,key:"header"},h)),this.loading?c("div",{class:`${o}-base-select-menu__loading`},c(bn,{clsPrefix:o,strokeWidth:20})):this.empty?c("div",{class:`${o}-base-select-menu__empty`,"data-empty":!0},mn(e.empty,()=>[c(Wn,{theme:l.peers.Empty,themeOverrides:l.peerOverrides.Empty,size:this.size})])):c(pn,{ref:"scrollbarRef",theme:l.peers.Scrollbar,themeOverrides:l.peerOverrides.Scrollbar,scrollable:this.scrollable,container:n?this.virtualListContainer:void 0,content:n?this.virtualListContent:void 0,onScroll:n?void 0:this.doScroll},{default:()=>n?c(Kn,{ref:"virtualListRef",class:`${o}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:h})=>h.isGroup?c(St,{key:h.key,clsPrefix:o,tmNode:h}):h.ignored?null:c(Ct,{clsPrefix:o,key:h.key,tmNode:h})}):c("div",{class:`${o}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(h=>h.isGroup?c(St,{key:h.key,clsPrefix:o,tmNode:h}):c(Ct,{clsPrefix:o,key:h.key,tmNode:h})))}),vt(e.action,h=>h&&[c("div",{class:`${o}-base-select-menu__action`,"data-action":!0,key:"action"},h),c(Un,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),Zn={paddingSingle:"0 26px 0 12px",paddingMultiple:"3px 26px 0 12px",clearSize:"16px",arrowSize:"16px"};function eo(e){const{borderRadius:n,textColor2:o,textColorDisabled:l,inputColor:i,inputColorDisabled:u,primaryColor:h,primaryColorHover:a,warningColor:b,warningColorHover:w,errorColor:m,errorColorHover:M,borderColor:C,iconColor:x,iconColorDisabled:y,clearColor:N,clearColorHover:K,clearColorPressed:T,placeholderColor:R,placeholderColorDisabled:_,fontSizeTiny:L,fontSizeSmall:W,fontSizeMedium:Q,fontSizeLarge:Y,heightTiny:re,heightSmall:ae,heightMedium:te,heightLarge:Z,fontWeight:ne}=e;return Object.assign(Object.assign({},Zn),{fontSizeTiny:L,fontSizeSmall:W,fontSizeMedium:Q,fontSizeLarge:Y,heightTiny:re,heightSmall:ae,heightMedium:te,heightLarge:Z,borderRadius:n,fontWeight:ne,textColor:o,textColorDisabled:l,placeholderColor:R,placeholderColorDisabled:_,color:i,colorDisabled:u,colorActive:i,border:`1px solid ${C}`,borderHover:`1px solid ${a}`,borderActive:`1px solid ${h}`,borderFocus:`1px solid ${a}`,boxShadowHover:"none",boxShadowActive:`0 0 0 2px ${Te(h,{alpha:.2})}`,boxShadowFocus:`0 0 0 2px ${Te(h,{alpha:.2})}`,caretColor:h,arrowColor:x,arrowColorDisabled:y,loadingColor:h,borderWarning:`1px solid ${b}`,borderHoverWarning:`1px solid ${w}`,borderActiveWarning:`1px solid ${b}`,borderFocusWarning:`1px solid ${w}`,boxShadowHoverWarning:"none",boxShadowActiveWarning:`0 0 0 2px ${Te(b,{alpha:.2})}`,boxShadowFocusWarning:`0 0 0 2px ${Te(b,{alpha:.2})}`,colorActiveWarning:i,caretColorWarning:b,borderError:`1px solid ${m}`,borderHoverError:`1px solid ${M}`,borderActiveError:`1px solid ${m}`,borderFocusError:`1px solid ${M}`,boxShadowHoverError:"none",boxShadowActiveError:`0 0 0 2px ${Te(m,{alpha:.2})}`,boxShadowFocusError:`0 0 0 2px ${Te(m,{alpha:.2})}`,colorActiveError:i,caretColorError:m,clearColor:N,clearColorHover:K,clearColorPressed:T})}const to=st({name:"InternalSelection",common:dt,peers:{Popover:yn},self:eo}),$t=to,no=ue([$("base-selection",`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[$("base-loading",`
 color: var(--n-loading-color);
 `),$("base-selection-tags","min-height: var(--n-height);"),j("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),j("state-border",`
 z-index: 1;
 border-color: #0000;
 `),$("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[j("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),$("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[j("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),$("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[j("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),$("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),$("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[$("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[j("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),j("render-label",`
 color: var(--n-text-color);
 `)]),it("disabled",[ue("&:hover",[j("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),ie("focus",[j("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),ie("active",[j("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),$("base-selection-label","background-color: var(--n-color-active);"),$("base-selection-tags","background-color: var(--n-color-active);")])]),ie("disabled","cursor: not-allowed;",[j("arrow",`
 color: var(--n-arrow-color-disabled);
 `),$("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[$("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),j("render-label",`
 color: var(--n-text-color-disabled);
 `)]),$("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),$("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),$("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[j("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),j("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>ie(`${e}-status`,[j("state-border",`border: var(--n-border-${e});`),it("disabled",[ue("&:hover",[j("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),ie("active",[j("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),$("base-selection-label",`background-color: var(--n-color-active-${e});`),$("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),ie("focus",[j("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),$("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),$("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[ue("&:last-child","padding-right: 0;"),$("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[j("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),oo=ve({name:"InternalSelection",props:Object.assign(Object.assign({},Oe.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:o}=ct(e),l=Ot("InternalSelection",o,n),i=F(null),u=F(null),h=F(null),a=F(null),b=F(null),w=F(null),m=F(null),M=F(null),C=F(null),x=F(null),y=F(!1),N=F(!1),K=F(!1),T=Oe("InternalSelection","-internal-selection",no,$t,e,J(e,"clsPrefix")),R=B(()=>e.clearable&&!e.disabled&&(K.value||e.active)),_=B(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Fe(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),L=B(()=>{const r=e.selectedOption;if(r)return r[e.labelField]}),W=B(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function Q(){var r;const{value:g}=i;if(g){const{value:q}=u;q&&(q.style.width=`${g.offsetWidth}px`,e.maxTagCount!=="responsive"&&((r=C.value)===null||r===void 0||r.sync({showAllItemsBeforeCalculate:!1})))}}function Y(){const{value:r}=x;r&&(r.style.display="none")}function re(){const{value:r}=x;r&&(r.style.display="inline-block")}xe(J(e,"active"),r=>{r||Y()}),xe(J(e,"pattern"),()=>{e.multiple&&Mt(Q)});function ae(r){const{onFocus:g}=e;g&&g(r)}function te(r){const{onBlur:g}=e;g&&g(r)}function Z(r){const{onDeleteOption:g}=e;g&&g(r)}function ne(r){const{onClear:g}=e;g&&g(r)}function s(r){const{onPatternInput:g}=e;g&&g(r)}function p(r){var g;(!r.relatedTarget||!(!((g=h.value)===null||g===void 0)&&g.contains(r.relatedTarget)))&&ae(r)}function I(r){var g;!((g=h.value)===null||g===void 0)&&g.contains(r.relatedTarget)||te(r)}function D(r){ne(r)}function U(){K.value=!0}function H(){K.value=!1}function V(r){!e.active||!e.filterable||r.target!==u.value&&r.preventDefault()}function E(r){Z(r)}const G=F(!1);function d(r){if(r.key==="Backspace"&&!G.value&&!e.pattern.length){const{selectedOptions:g}=e;g!=null&&g.length&&E(g[g.length-1])}}let v=null;function A(r){const{value:g}=i;if(g){const q=r.target.value;g.textContent=q,Q()}e.ignoreComposition&&G.value?v=r:s(r)}function oe(){G.value=!0}function ye(){G.value=!1,e.ignoreComposition&&s(v),v=null}function Se(r){var g;N.value=!0,(g=e.onPatternFocus)===null||g===void 0||g.call(e,r)}function ce(r){var g;N.value=!1,(g=e.onPatternBlur)===null||g===void 0||g.call(e,r)}function le(){var r,g;if(e.filterable)N.value=!1,(r=w.value)===null||r===void 0||r.blur(),(g=u.value)===null||g===void 0||g.blur();else if(e.multiple){const{value:q}=a;q==null||q.blur()}else{const{value:q}=b;q==null||q.blur()}}function Ce(){var r,g,q;e.filterable?(N.value=!1,(r=w.value)===null||r===void 0||r.focus()):e.multiple?(g=a.value)===null||g===void 0||g.focus():(q=b.value)===null||q===void 0||q.focus()}function fe(){const{value:r}=u;r&&(re(),r.focus())}function Me(){const{value:r}=u;r&&r.blur()}function ze(r){const{value:g}=m;g&&g.setTextContent(`+${r}`)}function Pe(){const{value:r}=M;return r}function Ie(){return u.value}let ge=null;function be(){ge!==null&&window.clearTimeout(ge)}function ke(){e.active||(be(),ge=window.setTimeout(()=>{W.value&&(y.value=!0)},100))}function $e(){be()}function Be(r){r||(be(),y.value=!1)}xe(W,r=>{r||(y.value=!1)}),Ue(()=>{Sn(()=>{const r=w.value;r&&(e.disabled?r.removeAttribute("tabindex"):r.tabIndex=N.value?-1:0)})}),It(h,e.onResize);const{inlineThemeDisabled:Re}=e,pe=B(()=>{const{size:r}=e,{common:{cubicBezierEaseInOut:g},self:{fontWeight:q,borderRadius:qe,color:Ge,placeholderColor:Le,textColor:Ne,paddingSingle:De,paddingMultiple:Xe,caretColor:Ye,colorDisabled:We,textColorDisabled:he,placeholderColorDisabled:t,colorActive:f,boxShadowFocus:S,boxShadowActive:k,boxShadowHover:z,border:O,borderFocus:P,borderHover:X,borderActive:se,arrowColor:_t,arrowColorDisabled:Et,loadingColor:At,colorActiveWarning:Lt,boxShadowFocusWarning:Nt,boxShadowActiveWarning:Dt,boxShadowHoverWarning:Wt,borderWarning:Ht,borderFocusWarning:Vt,borderHoverWarning:jt,borderActiveWarning:Kt,colorActiveError:Ut,boxShadowFocusError:qt,boxShadowActiveError:Gt,boxShadowHoverError:Xt,borderError:Yt,borderFocusError:Jt,borderHoverError:Qt,borderActiveError:Zt,clearColor:en,clearColorHover:tn,clearColorPressed:nn,clearSize:on,arrowSize:ln,[me("height",r)]:rn,[me("fontSize",r)]:an}}=T.value,He=Ee(De),Ve=Ee(Xe);return{"--n-bezier":g,"--n-border":O,"--n-border-active":se,"--n-border-focus":P,"--n-border-hover":X,"--n-border-radius":qe,"--n-box-shadow-active":k,"--n-box-shadow-focus":S,"--n-box-shadow-hover":z,"--n-caret-color":Ye,"--n-color":Ge,"--n-color-active":f,"--n-color-disabled":We,"--n-font-size":an,"--n-height":rn,"--n-padding-single-top":He.top,"--n-padding-multiple-top":Ve.top,"--n-padding-single-right":He.right,"--n-padding-multiple-right":Ve.right,"--n-padding-single-left":He.left,"--n-padding-multiple-left":Ve.left,"--n-padding-single-bottom":He.bottom,"--n-padding-multiple-bottom":Ve.bottom,"--n-placeholder-color":Le,"--n-placeholder-color-disabled":t,"--n-text-color":Ne,"--n-text-color-disabled":he,"--n-arrow-color":_t,"--n-arrow-color-disabled":Et,"--n-loading-color":At,"--n-color-active-warning":Lt,"--n-box-shadow-focus-warning":Nt,"--n-box-shadow-active-warning":Dt,"--n-box-shadow-hover-warning":Wt,"--n-border-warning":Ht,"--n-border-focus-warning":Vt,"--n-border-hover-warning":jt,"--n-border-active-warning":Kt,"--n-color-active-error":Ut,"--n-box-shadow-focus-error":qt,"--n-box-shadow-active-error":Gt,"--n-box-shadow-hover-error":Xt,"--n-border-error":Yt,"--n-border-focus-error":Jt,"--n-border-hover-error":Qt,"--n-border-active-error":Zt,"--n-clear-size":on,"--n-clear-color":en,"--n-clear-color-hover":tn,"--n-clear-color-pressed":nn,"--n-arrow-size":ln,"--n-font-weight":q}}),ee=Re?ft("internal-selection",B(()=>e.size[0]),pe,e):void 0;return{mergedTheme:T,mergedClearable:R,mergedClsPrefix:n,rtlEnabled:l,patternInputFocused:N,filterablePlaceholder:_,label:L,selected:W,showTagsPanel:y,isComposing:G,counterRef:m,counterWrapperRef:M,patternInputMirrorRef:i,patternInputRef:u,selfRef:h,multipleElRef:a,singleElRef:b,patternInputWrapperRef:w,overflowRef:C,inputTagElRef:x,handleMouseDown:V,handleFocusin:p,handleClear:D,handleMouseEnter:U,handleMouseLeave:H,handleDeleteOption:E,handlePatternKeyDown:d,handlePatternInputInput:A,handlePatternInputBlur:ce,handlePatternInputFocus:Se,handleMouseEnterCounter:ke,handleMouseLeaveCounter:$e,handleFocusout:I,handleCompositionEnd:ye,handleCompositionStart:oe,onPopoverUpdateShow:Be,focus:Ce,focusInput:fe,blur:le,blurInput:Me,updateCounter:ze,getCounter:Pe,getTail:Ie,renderLabel:e.renderLabel,cssVars:Re?void 0:pe,themeClass:ee==null?void 0:ee.themeClass,onRender:ee==null?void 0:ee.onRender}},render(){const{status:e,multiple:n,size:o,disabled:l,filterable:i,maxTagCount:u,bordered:h,clsPrefix:a,ellipsisTagPopoverProps:b,onRender:w,renderTag:m,renderLabel:M}=this;w==null||w();const C=u==="responsive",x=typeof u=="number",y=C||x,N=c(Tn,null,{default:()=>c(Ln,{clsPrefix:a,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var T,R;return(R=(T=this.$slots).arrow)===null||R===void 0?void 0:R.call(T)}})});let K;if(n){const{labelField:T}=this,R=s=>c("div",{class:`${a}-base-selection-tag-wrapper`,key:s.value},m?m({option:s,handleClose:()=>{this.handleDeleteOption(s)}}):c(Ze,{size:o,closable:!s.disabled,disabled:l,onClose:()=>{this.handleDeleteOption(s)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>M?M(s,!0):Fe(s[T],s,!0)})),_=()=>(x?this.selectedOptions.slice(0,u):this.selectedOptions).map(R),L=i?c("div",{class:`${a}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},c("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:l,value:this.pattern,autofocus:this.autofocus,class:`${a}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),c("span",{ref:"patternInputMirrorRef",class:`${a}-base-selection-input-tag__mirror`},this.pattern)):null,W=C?()=>c("div",{class:`${a}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},c(Ze,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:l})):void 0;let Q;if(x){const s=this.selectedOptions.length-u;s>0&&(Q=c("div",{class:`${a}-base-selection-tag-wrapper`,key:"__counter__"},c(Ze,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:l},{default:()=>`+${s}`})))}const Y=C?i?c(gt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:_,counter:W,tail:()=>L}):c(gt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:_,counter:W}):x&&Q?_().concat(Q):_(),re=y?()=>c("div",{class:`${a}-base-selection-popover`},C?_():this.selectedOptions.map(R)):void 0,ae=y?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},b):null,Z=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?c("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`},c("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)):null,ne=i?c("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-tags`},Y,C?null:L,N):c("div",{ref:"multipleElRef",class:`${a}-base-selection-tags`,tabindex:l?void 0:0},Y,N);K=c(Rn,null,y?c(Cn,Object.assign({},ae,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>ne,default:re}):ne,Z)}else if(i){const T=this.pattern||this.isComposing,R=this.active?!T:!this.selected,_=this.active?!1:this.selected;K=c("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-label`,title:this.patternInputFocused?void 0:bt(this.label)},c("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${a}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:l,disabled:l,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),_?c("div",{class:`${a}-base-selection-label__render-label ${a}-base-selection-overlay`,key:"input"},c("div",{class:`${a}-base-selection-overlay__wrapper`},m?m({option:this.selectedOption,handleClose:()=>{}}):M?M(this.selectedOption,!0):Fe(this.label,this.selectedOption,!0))):null,R?c("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},c("div",{class:`${a}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,N)}else K=c("div",{ref:"singleElRef",class:`${a}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?c("div",{class:`${a}-base-selection-input`,title:bt(this.label),key:"input"},c("div",{class:`${a}-base-selection-input__content`},m?m({option:this.selectedOption,handleClose:()=>{}}):M?M(this.selectedOption,!0):Fe(this.label,this.selectedOption,!0))):c("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},c("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)),N);return c("div",{ref:"selfRef",class:[`${a}-base-selection`,this.rtlEnabled&&`${a}-base-selection--rtl`,this.themeClass,e&&`${a}-base-selection--${e}-status`,{[`${a}-base-selection--active`]:this.active,[`${a}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${a}-base-selection--disabled`]:this.disabled,[`${a}-base-selection--multiple`]:this.multiple,[`${a}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},K,h?c("div",{class:`${a}-base-selection__border`}):null,h?c("div",{class:`${a}-base-selection__state-border`}):null)}});function Ke(e){return e.type==="group"}function Bt(e){return e.type==="ignored"}function nt(e,n){try{return!!(1+n.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function lo(e,n){return{getIsGroup:Ke,getIgnored:Bt,getKey(l){return Ke(l)?l.name||l.key||"key-required":l[e]},getChildren(l){return l[n]}}}function io(e,n,o,l){if(!n)return e;function i(u){if(!Array.isArray(u))return[];const h=[];for(const a of u)if(Ke(a)){const b=i(a[l]);b.length&&h.push(Object.assign({},a,{[l]:b}))}else{if(Bt(a))continue;n(o,a)&&h.push(a)}return h}return i(e)}function ro(e,n,o){const l=new Map;return e.forEach(i=>{Ke(i)?i[o].forEach(u=>{l.set(u[n],u)}):l.set(i[n],i)}),l}function ao(e){const{boxShadow2:n}=e;return{menuBoxShadow:n}}const so=st({name:"Select",common:dt,peers:{InternalSelection:$t,InternalSelectMenu:kt},self:ao}),uo=so,co=ue([$("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `),$("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Ft({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),fo=Object.assign(Object.assign({},Oe.props),{to:rt.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,menuSize:{type:String},filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),mo=ve({name:"Select",props:fo,slots:Object,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:o,namespaceRef:l,inlineThemeDisabled:i}=ct(e),u=Oe("Select","-select",co,uo,e,n),h=F(e.defaultValue),a=J(e,"value"),b=pt(a,h),w=F(!1),m=F(""),M=Fn(e,["items","options"]),C=F([]),x=F([]),y=B(()=>x.value.concat(C.value).concat(M.value)),N=B(()=>{const{filter:t}=e;if(t)return t;const{labelField:f,valueField:S}=e;return(k,z)=>{if(!z)return!1;const O=z[f];if(typeof O=="string")return nt(k,O);const P=z[S];return typeof P=="string"?nt(k,P):typeof P=="number"?nt(k,String(P)):!1}}),K=B(()=>{if(e.remote)return M.value;{const{value:t}=y,{value:f}=m;return!f.length||!e.filterable?t:io(t,N.value,f,e.childrenField)}}),T=B(()=>{const{valueField:t,childrenField:f}=e,S=lo(t,f);return Bn(K.value,S)}),R=B(()=>ro(y.value,e.valueField,e.childrenField)),_=F(!1),L=pt(J(e,"show"),_),W=F(null),Q=F(null),Y=F(null),{localeRef:re}=An("Select"),ae=B(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:re.value.placeholder}),te=[],Z=F(new Map),ne=B(()=>{const{fallbackOption:t}=e;if(t===void 0){const{labelField:f,valueField:S}=e;return k=>({[f]:String(k),[S]:k})}return t===!1?!1:f=>Object.assign(t(f),{value:f})});function s(t){const f=e.remote,{value:S}=Z,{value:k}=R,{value:z}=ne,O=[];return t.forEach(P=>{if(k.has(P))O.push(k.get(P));else if(f&&S.has(P))O.push(S.get(P));else if(z){const X=z(P);X&&O.push(X)}}),O}const p=B(()=>{if(e.multiple){const{value:t}=b;return Array.isArray(t)?s(t):[]}return null}),I=B(()=>{const{value:t}=b;return!e.multiple&&!Array.isArray(t)?t===null?null:s([t])[0]||null:null}),D=On(e),{mergedSizeRef:U,mergedDisabledRef:H,mergedStatusRef:V}=D;function E(t,f){const{onChange:S,"onUpdate:value":k,onUpdateValue:z}=e,{nTriggerFormChange:O,nTriggerFormInput:P}=D;S&&de(S,t,f),z&&de(z,t,f),k&&de(k,t,f),h.value=t,O(),P()}function G(t){const{onBlur:f}=e,{nTriggerFormBlur:S}=D;f&&de(f,t),S()}function d(){const{onClear:t}=e;t&&de(t)}function v(t){const{onFocus:f,showOnFocus:S}=e,{nTriggerFormFocus:k}=D;f&&de(f,t),k(),S&&ce()}function A(t){const{onSearch:f}=e;f&&de(f,t)}function oe(t){const{onScroll:f}=e;f&&de(f,t)}function ye(){var t;const{remote:f,multiple:S}=e;if(f){const{value:k}=Z;if(S){const{valueField:z}=e;(t=p.value)===null||t===void 0||t.forEach(O=>{k.set(O[z],O)})}else{const z=I.value;z&&k.set(z[e.valueField],z)}}}function Se(t){const{onUpdateShow:f,"onUpdate:show":S}=e;f&&de(f,t),S&&de(S,t),_.value=t}function ce(){H.value||(Se(!0),_.value=!0,e.filterable&&De())}function le(){Se(!1)}function Ce(){m.value="",x.value=te}const fe=F(!1);function Me(){e.filterable&&(fe.value=!0)}function ze(){e.filterable&&(fe.value=!1,L.value||Ce())}function Pe(){H.value||(L.value?e.filterable?De():le():ce())}function Ie(t){var f,S;!((S=(f=Y.value)===null||f===void 0?void 0:f.selfRef)===null||S===void 0)&&S.contains(t.relatedTarget)||(w.value=!1,G(t),le())}function ge(t){v(t),w.value=!0}function be(){w.value=!0}function ke(t){var f;!((f=W.value)===null||f===void 0)&&f.$el.contains(t.relatedTarget)||(w.value=!1,G(t),le())}function $e(){var t;(t=W.value)===null||t===void 0||t.focus(),le()}function Be(t){var f;L.value&&(!((f=W.value)===null||f===void 0)&&f.$el.contains(_n(t))||le())}function Re(t){if(!Array.isArray(t))return[];if(ne.value)return Array.from(t);{const{remote:f}=e,{value:S}=R;if(f){const{value:k}=Z;return t.filter(z=>S.has(z)||k.has(z))}else return t.filter(k=>S.has(k))}}function pe(t){ee(t.rawNode)}function ee(t){if(H.value)return;const{tag:f,remote:S,clearFilterAfterSelect:k,valueField:z}=e;if(f&&!S){const{value:O}=x,P=O[0]||null;if(P){const X=C.value;X.length?X.push(P):C.value=[P],x.value=te}}if(S&&Z.value.set(t[z],t),e.multiple){const O=Re(b.value),P=O.findIndex(X=>X===t[z]);if(~P){if(O.splice(P,1),f&&!S){const X=r(t[z]);~X&&(C.value.splice(X,1),k&&(m.value=""))}}else O.push(t[z]),k&&(m.value="");E(O,s(O))}else{if(f&&!S){const O=r(t[z]);~O?C.value=[C.value[O]]:C.value=te}Ne(),le(),E(t[z],t)}}function r(t){return C.value.findIndex(S=>S[e.valueField]===t)}function g(t){L.value||ce();const{value:f}=t.target;m.value=f;const{tag:S,remote:k}=e;if(A(f),S&&!k){if(!f){x.value=te;return}const{onCreate:z}=e,O=z?z(f):{[e.labelField]:f,[e.valueField]:f},{valueField:P,labelField:X}=e;M.value.some(se=>se[P]===O[P]||se[X]===O[X])||C.value.some(se=>se[P]===O[P]||se[X]===O[X])?x.value=te:x.value=[O]}}function q(t){t.stopPropagation();const{multiple:f}=e;!f&&e.filterable&&le(),d(),f?E([],[]):E(null,null)}function qe(t){!Ae(t,"action")&&!Ae(t,"empty")&&!Ae(t,"header")&&t.preventDefault()}function Ge(t){oe(t)}function Le(t){var f,S,k,z,O;if(!e.keyboard){t.preventDefault();return}switch(t.key){case" ":if(e.filterable)break;t.preventDefault();case"Enter":if(!(!((f=W.value)===null||f===void 0)&&f.isComposing)){if(L.value){const P=(S=Y.value)===null||S===void 0?void 0:S.getPendingTmNode();P?pe(P):e.filterable||(le(),Ne())}else if(ce(),e.tag&&fe.value){const P=x.value[0];if(P){const X=P[e.valueField],{value:se}=b;e.multiple&&Array.isArray(se)&&se.includes(X)||ee(P)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;L.value&&((k=Y.value)===null||k===void 0||k.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;L.value?(z=Y.value)===null||z===void 0||z.next():ce();break;case"Escape":L.value&&(En(t),le()),(O=W.value)===null||O===void 0||O.focus();break}}function Ne(){var t;(t=W.value)===null||t===void 0||t.focus()}function De(){var t;(t=W.value)===null||t===void 0||t.focusInput()}function Xe(){var t;L.value&&((t=Q.value)===null||t===void 0||t.syncPosition())}ye(),xe(J(e,"options"),ye);const Ye={focus:()=>{var t;(t=W.value)===null||t===void 0||t.focus()},focusInput:()=>{var t;(t=W.value)===null||t===void 0||t.focusInput()},blur:()=>{var t;(t=W.value)===null||t===void 0||t.blur()},blurInput:()=>{var t;(t=W.value)===null||t===void 0||t.blurInput()}},We=B(()=>{const{self:{menuBoxShadow:t}}=u.value;return{"--n-menu-box-shadow":t}}),he=i?ft("select",void 0,We,e):void 0;return Object.assign(Object.assign({},Ye),{mergedStatus:V,mergedClsPrefix:n,mergedBordered:o,namespace:l,treeMate:T,isMounted:Mn(),triggerRef:W,menuRef:Y,pattern:m,uncontrolledShow:_,mergedShow:L,adjustedTo:rt(e),uncontrolledValue:h,mergedValue:b,followerRef:Q,localizedPlaceholder:ae,selectedOption:I,selectedOptions:p,mergedSize:U,mergedDisabled:H,focused:w,activeWithoutMenuOpen:fe,inlineThemeDisabled:i,onTriggerInputFocus:Me,onTriggerInputBlur:ze,handleTriggerOrMenuResize:Xe,handleMenuFocus:be,handleMenuBlur:ke,handleMenuTabOut:$e,handleTriggerClick:Pe,handleToggle:pe,handleDeleteOption:ee,handlePatternInput:g,handleClear:q,handleTriggerBlur:Ie,handleTriggerFocus:ge,handleKeydown:Le,handleMenuAfterLeave:Ce,handleMenuClickOutside:Be,handleMenuScroll:Ge,handleMenuKeydown:Le,handleMenuMousedown:qe,mergedTheme:u,cssVars:i?void 0:We,themeClass:he==null?void 0:he.themeClass,onRender:he==null?void 0:he.onRender})},render(){return c("div",{class:`${this.mergedClsPrefix}-select`},c(zn,null,{default:()=>[c(Pn,null,{default:()=>c(oo,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,n;return[(n=(e=this.$slots).arrow)===null||n===void 0?void 0:n.call(e)]}})}),c(In,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===rt.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>c(Tt,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,n,o;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),kn(c(Qn,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(n=this.menuProps)===null||n===void 0?void 0:n.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:this.menuSize,renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(o=this.menuProps)===null||o===void 0?void 0:o.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var l,i;return[(i=(l=this.$slots).empty)===null||i===void 0?void 0:i.call(l)]},header:()=>{var l,i;return[(i=(l=this.$slots).header)===null||i===void 0?void 0:i.call(l)]},action:()=>{var l,i;return[(i=(l=this.$slots).action)===null||i===void 0?void 0:i.call(l)]}}),this.displayDirective==="show"?[[$n,this.mergedShow],[mt,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[mt,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{Un as F,mo as N,Kn as V,Qn as a,lo as c,kt as i,tt as m,uo as s};
