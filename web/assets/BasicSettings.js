import{d as q,r as R,aL as Ut,aM as Ot,O as P,aN as Ge,aw as Ht,aO as et,P as Gt,Z as qt,$ as tt,a0 as Xt,b as ee,as as Kt,F as at,ac as Yt,aP as Jt,aQ as Zt,ag as Qt,I as b,R as _,J as V,K as j,a1 as ea,L as ta,V as rt,aR as qe,aA as Te,aS as aa,w as Re,e as ie,W as ra,X as Z,aT as oa,ay as na,Y as sa,ab as Xe,a2 as ke,aj as _e,aU as la,v as ze,at as Q,aV as we,aW as ia,aX as da,aY as ca,aZ as ua,u as de,h as N,o as D,g as Y,i as o,a as F,k as n,m as T,j as e,D as W,p as J,N as te,s as re,_ as oe,a_ as pa,f as fa,a$ as ba,c as he,t as se,C as ve,aK as ga,A as Ke}from"./index.js";import{u as Ie}from"./composables.js";import{N as ce,a as H}from"./FormItem.js";import{N as le}from"./Input.js";import{A as va,a as Ee,N as ot}from"./Switch.js";import{N as ue}from"./Spin.js";import{N as Fe}from"./Select.js";import{N as $e}from"./Alert.js";import{N as ma}from"./Divider.js";import{t as Ye}from"./toNumber.js";import"./cryptojs.js";import"./use-locale.js";import"./en-US.js";import"./Checkmark.js";import"./Empty.js";const ha=Ge(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[Ge("&::-webkit-scrollbar",{width:0,height:0})]),ya=q({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const t=R(null);function a(c){!(c.currentTarget.offsetWidth<c.currentTarget.scrollWidth)||c.deltaY===0||(c.currentTarget.scrollLeft+=c.deltaY+c.deltaX,c.preventDefault())}const r=Ut();return ha.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:Ot,ssr:r}),Object.assign({selfRef:t,handleWheel:a},{scrollTo(...c){var h;(h=t.value)===null||h===void 0||h.scrollTo(...c)}})},render(){return P("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var xa=function(){return Ht.Date.now()};const Le=xa;var _a="Expected a function",wa=Math.max,Ca=Math.min;function Sa(t,a,r){var u,c,h,l,s,p,f=0,v=!1,$=!1,M=!0;if(typeof t!="function")throw new TypeError(_a);a=Ye(a)||0,et(r)&&(v=!!r.leading,$="maxWait"in r,h=$?wa(Ye(r.maxWait)||0,a):h,M="trailing"in r?!!r.trailing:M);function z(m){var g=u,G=c;return u=c=void 0,f=m,l=t.apply(G,g),l}function C(m){return f=m,s=setTimeout(A,a),v?z(m):l}function x(m){var g=m-p,G=m-f,B=a-g;return $?Ca(B,h-G):B}function w(m){var g=m-p,G=m-f;return p===void 0||g>=a||g<0||$&&G>=h}function A(){var m=Le();if(w(m))return L(m);s=setTimeout(A,x(m))}function L(m){return s=void 0,M&&u?z(m):(u=c=void 0,l)}function U(){s!==void 0&&clearTimeout(s),f=0,u=p=c=s=void 0}function E(){return s===void 0?l:L(Le())}function k(){var m=Le(),g=w(m);if(u=arguments,c=this,p=m,g){if(s===void 0)return C(p);if($)return clearTimeout(s),s=setTimeout(A,a),z(p)}return s===void 0&&(s=setTimeout(A,a)),l}return k.cancel=U,k.flush=E,k}var Pa="Expected a function";function We(t,a,r){var u=!0,c=!0;if(typeof t!="function")throw new TypeError(Pa);return et(r)&&(u="leading"in r?!!r.leading:u,c="trailing"in r?!!r.trailing:c),Sa(t,a,{leading:u,maxWait:a,trailing:c})}const Ta={tabFontSizeSmall:"14px",tabFontSizeMedium:"14px",tabFontSizeLarge:"16px",tabGapSmallLine:"36px",tabGapMediumLine:"36px",tabGapLargeLine:"36px",tabGapSmallLineVertical:"8px",tabGapMediumLineVertical:"8px",tabGapLargeLineVertical:"8px",tabPaddingSmallLine:"6px 0",tabPaddingMediumLine:"10px 0",tabPaddingLargeLine:"14px 0",tabPaddingVerticalSmallLine:"6px 12px",tabPaddingVerticalMediumLine:"8px 16px",tabPaddingVerticalLargeLine:"10px 20px",tabGapSmallBar:"36px",tabGapMediumBar:"36px",tabGapLargeBar:"36px",tabGapSmallBarVertical:"8px",tabGapMediumBarVertical:"8px",tabGapLargeBarVertical:"8px",tabPaddingSmallBar:"4px 0",tabPaddingMediumBar:"6px 0",tabPaddingLargeBar:"10px 0",tabPaddingVerticalSmallBar:"6px 12px",tabPaddingVerticalMediumBar:"8px 16px",tabPaddingVerticalLargeBar:"10px 20px",tabGapSmallCard:"4px",tabGapMediumCard:"4px",tabGapLargeCard:"4px",tabGapSmallCardVertical:"4px",tabGapMediumCardVertical:"4px",tabGapLargeCardVertical:"4px",tabPaddingSmallCard:"8px 16px",tabPaddingMediumCard:"10px 20px",tabPaddingLargeCard:"12px 24px",tabPaddingSmallSegment:"4px 0",tabPaddingMediumSegment:"6px 0",tabPaddingLargeSegment:"8px 0",tabPaddingVerticalLargeSegment:"0 8px",tabPaddingVerticalSmallCard:"8px 12px",tabPaddingVerticalMediumCard:"10px 16px",tabPaddingVerticalLargeCard:"12px 20px",tabPaddingVerticalSmallSegment:"0 4px",tabPaddingVerticalMediumSegment:"0 6px",tabGapSmallSegment:"0",tabGapMediumSegment:"0",tabGapLargeSegment:"0",tabGapSmallSegmentVertical:"0",tabGapMediumSegmentVertical:"0",tabGapLargeSegmentVertical:"0",panePaddingSmall:"8px 0 0 0",panePaddingMedium:"12px 0 0 0",panePaddingLarge:"16px 0 0 0",closeSize:"18px",closeIconSize:"14px"};function Ra(t){const{textColor2:a,primaryColor:r,textColorDisabled:u,closeIconColor:c,closeIconColorHover:h,closeIconColorPressed:l,closeColorHover:s,closeColorPressed:p,tabColor:f,baseColor:v,dividerColor:$,fontWeight:M,textColor1:z,borderRadius:C,fontSize:x,fontWeightStrong:w}=t;return Object.assign(Object.assign({},Ta),{colorSegment:f,tabFontSizeCard:x,tabTextColorLine:z,tabTextColorActiveLine:r,tabTextColorHoverLine:r,tabTextColorDisabledLine:u,tabTextColorSegment:z,tabTextColorActiveSegment:a,tabTextColorHoverSegment:a,tabTextColorDisabledSegment:u,tabTextColorBar:z,tabTextColorActiveBar:r,tabTextColorHoverBar:r,tabTextColorDisabledBar:u,tabTextColorCard:z,tabTextColorHoverCard:z,tabTextColorActiveCard:r,tabTextColorDisabledCard:u,barColor:r,closeIconColor:c,closeIconColorHover:h,closeIconColorPressed:l,closeColorHover:s,closeColorPressed:p,closeBorderRadius:C,tabColor:f,tabColorSegment:v,tabBorderColor:$,tabFontWeightActive:M,tabFontWeight:M,tabBorderRadius:C,paneTextColor:a,fontWeightStrong:w})}const ka={name:"Tabs",common:Gt,self:Ra},za=ka,Ve=qt("n-tabs"),nt={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},Be=q({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:nt,slots:Object,setup(t){const a=tt(Ve,null);return a||Xt("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:a.paneStyleRef,class:a.paneClassRef,mergedClsPrefix:a.mergedClsPrefixRef}},render(){return P("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),$a=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},Qt(nt,["displayDirective"])),Me=q({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:$a,setup(t){const{mergedClsPrefixRef:a,valueRef:r,typeRef:u,closableRef:c,tabStyleRef:h,addTabStyleRef:l,tabClassRef:s,addTabClassRef:p,tabChangeIdRef:f,onBeforeLeaveRef:v,triggerRef:$,handleAdd:M,activateTab:z,handleClose:C}=tt(Ve);return{trigger:$,mergedClosable:ee(()=>{if(t.internalAddable)return!1;const{closable:x}=t;return x===void 0?c.value:x}),style:h,addStyle:l,tabClass:s,addTabClass:p,clsPrefix:a,value:r,type:u,handleClose(x){x.stopPropagation(),!t.disabled&&C(t.name)},activateTab(){if(t.disabled)return;if(t.internalAddable){M();return}const{name:x}=t,w=++f.id;if(x!==r.value){const{value:A}=v;A?Promise.resolve(A(t.name,r.value)).then(L=>{L&&f.id===w&&z(x)}):z(x)}}}},render(){const{internalAddable:t,clsPrefix:a,name:r,disabled:u,label:c,tab:h,value:l,mergedClosable:s,trigger:p,$slots:{default:f}}=this,v=c??h;return P("div",{class:`${a}-tabs-tab-wrapper`},this.internalLeftPadded?P("div",{class:`${a}-tabs-tab-pad`}):null,P("div",Object.assign({key:r,"data-name":r,"data-disabled":u?!0:void 0},Kt({class:[`${a}-tabs-tab`,l===r&&`${a}-tabs-tab--active`,u&&`${a}-tabs-tab--disabled`,s&&`${a}-tabs-tab--closable`,t&&`${a}-tabs-tab--addable`,t?this.addTabClass:this.tabClass],onClick:p==="click"?this.activateTab:void 0,onMouseenter:p==="hover"?this.activateTab:void 0,style:t?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),P("span",{class:`${a}-tabs-tab__label`},t?P(at,null,P("div",{class:`${a}-tabs-tab__height-placeholder`}," "),P(Yt,{clsPrefix:a},{default:()=>P(va,null)})):f?f():typeof v=="object"?v:Jt(v??r)),s&&this.type==="card"?P(Zt,{clsPrefix:a,class:`${a}-tabs-tab__close`,onClick:this.handleClose,disabled:u}):null))}}),La=b("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[_("segment-type",[b("tabs-rail",[V("&.transition-disabled",[b("tabs-capsule",`
 transition: none;
 `)])])]),_("top",[b("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),_("left",[b("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),_("left, right",`
 flex-direction: row;
 `,[b("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),b("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),_("right",`
 flex-direction: row-reverse;
 `,[b("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),b("tabs-bar",`
 left: 0;
 `)]),_("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[b("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),b("tabs-bar",`
 top: 0;
 `)]),b("tabs-rail",`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[b("tabs-capsule",`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),b("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[b("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[_("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),V("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),_("flex",[b("tabs-nav",`
 width: 100%;
 position: relative;
 `,[b("tabs-wrapper",`
 width: 100%;
 `,[b("tabs-tab",`
 margin-right: 0;
 `)])])]),b("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[j("prefix, suffix",`
 display: flex;
 align-items: center;
 `),j("prefix","padding-right: 16px;"),j("suffix","padding-left: 16px;")]),_("top, bottom",[b("tabs-nav-scroll-wrapper",[V("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),V("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),_("shadow-start",[V("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),_("shadow-end",[V("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]),_("left, right",[b("tabs-nav-scroll-content",`
 flex-direction: column;
 `),b("tabs-nav-scroll-wrapper",[V("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),V("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),_("shadow-start",[V("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),_("shadow-end",[V("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])]),b("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[b("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[V("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `)]),V("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),b("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),b("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),b("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),b("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[_("disabled",{cursor:"not-allowed"}),j("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),j("label",`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),b("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[V("&.transition-disabled",`
 transition: none;
 `),_("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),b("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),b("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[V("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),V("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),V("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),V("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),V("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),b("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),_("line-type, bar-type",[b("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[V("&:hover",{color:"var(--n-tab-text-color-hover)"}),_("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),_("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),b("tabs-nav",[_("line-type",[_("top",[j("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),b("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),b("tabs-bar",`
 bottom: -1px;
 `)]),_("left",[j("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),b("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),b("tabs-bar",`
 right: -1px;
 `)]),_("right",[j("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),b("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),b("tabs-bar",`
 left: -1px;
 `)]),_("bottom",[j("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),b("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),b("tabs-bar",`
 top: -1px;
 `)]),j("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),b("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),b("tabs-bar",`
 border-radius: 0;
 `)]),_("card-type",[j("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),b("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),b("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),b("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[_("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[j("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),ea("disabled",[V("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),_("closable","padding-right: 8px;"),_("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),_("disabled","color: var(--n-tab-text-color-disabled);")])]),_("left, right",`
 flex-direction: column; 
 `,[j("prefix, suffix",`
 padding: var(--n-tab-padding-vertical);
 `),b("tabs-wrapper",`
 flex-direction: column;
 `),b("tabs-tab-wrapper",`
 flex-direction: column;
 `,[b("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),_("top",[_("card-type",[b("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);"),j("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),b("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[_("active",`
 border-bottom: 1px solid #0000;
 `)]),b("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),b("tabs-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),_("left",[_("card-type",[b("tabs-scroll-padding","border-right: 1px solid var(--n-tab-border-color);"),j("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),b("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[_("active",`
 border-right: 1px solid #0000;
 `)]),b("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `),b("tabs-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),_("right",[_("card-type",[b("tabs-scroll-padding","border-left: 1px solid var(--n-tab-border-color);"),j("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),b("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[_("active",`
 border-left: 1px solid #0000;
 `)]),b("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `),b("tabs-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),_("bottom",[_("card-type",[b("tabs-scroll-padding","border-top: 1px solid var(--n-tab-border-color);"),j("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),b("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[_("active",`
 border-top: 1px solid #0000;
 `)]),b("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `),b("tabs-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),Wa=Object.assign(Object.assign({},rt.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),Ba=q({name:"Tabs",props:Wa,slots:Object,setup(t,{slots:a}){var r,u,c,h;const{mergedClsPrefixRef:l,inlineThemeDisabled:s}=ta(t),p=rt("Tabs","-tabs",La,za,t,l),f=R(null),v=R(null),$=R(null),M=R(null),z=R(null),C=R(null),x=R(!0),w=R(!0),A=qe(t,["labelSize","size"]),L=qe(t,["activeName","value"]),U=R((u=(r=L.value)!==null&&r!==void 0?r:t.defaultValue)!==null&&u!==void 0?u:a.default?(h=(c=Te(a.default())[0])===null||c===void 0?void 0:c.props)===null||h===void 0?void 0:h.name:null),E=aa(L,U),k={id:0},m=ee(()=>{if(!(!t.justifyContent||t.type==="card"))return{display:"flex",justifyContent:t.justifyContent}});Re(E,()=>{k.id=0,ne(),je()});function g(){var i;const{value:d}=E;return d===null?null:(i=f.value)===null||i===void 0?void 0:i.querySelector(`[data-name="${d}"]`)}function G(i){if(t.type==="card")return;const{value:d}=v;if(!d)return;const y=d.style.opacity==="0";if(i){const S=`${l.value}-tabs-bar--disabled`,{barWidth:I,placement:X}=t;if(i.dataset.disabled==="true"?d.classList.add(S):d.classList.remove(S),["top","bottom"].includes(X)){if(O(["top","maxHeight","height"]),typeof I=="number"&&i.offsetWidth>=I){const K=Math.floor((i.offsetWidth-I)/2)+i.offsetLeft;d.style.left=`${K}px`,d.style.maxWidth=`${I}px`}else d.style.left=`${i.offsetLeft}px`,d.style.maxWidth=`${i.offsetWidth}px`;d.style.width="8192px",y&&(d.style.transition="none"),d.offsetWidth,y&&(d.style.transition="",d.style.opacity="1")}else{if(O(["left","maxWidth","width"]),typeof I=="number"&&i.offsetHeight>=I){const K=Math.floor((i.offsetHeight-I)/2)+i.offsetTop;d.style.top=`${K}px`,d.style.maxHeight=`${I}px`}else d.style.top=`${i.offsetTop}px`,d.style.maxHeight=`${i.offsetHeight}px`;d.style.height="8192px",y&&(d.style.transition="none"),d.offsetHeight,y&&(d.style.transition="",d.style.opacity="1")}}}function B(){if(t.type==="card")return;const{value:i}=v;i&&(i.style.opacity="0")}function O(i){const{value:d}=v;if(d)for(const y of i)d.style[y]=""}function ne(){if(t.type==="card")return;const i=g();i?G(i):B()}function je(){var i;const d=(i=z.value)===null||i===void 0?void 0:i.$el;if(!d)return;const y=g();if(!y)return;const{scrollLeft:S,offsetWidth:I}=d,{offsetLeft:X,offsetWidth:K}=y;S>X?d.scrollTo({top:0,left:X,behavior:"smooth"}):X+K>S+I&&d.scrollTo({top:0,left:X+K-I,behavior:"smooth"})}const ye=R(null);let Ce=0,ae=null;function st(i){const d=ye.value;if(d){Ce=i.getBoundingClientRect().height;const y=`${Ce}px`,S=()=>{d.style.height=y,d.style.maxHeight=y};ae?(S(),ae(),ae=null):ae=S}}function lt(i){const d=ye.value;if(d){const y=i.getBoundingClientRect().height,S=()=>{document.body.offsetHeight,d.style.maxHeight=`${y}px`,d.style.height=`${Math.max(Ce,y)}px`};ae?(ae(),ae=null,S()):ae=S}}function it(){const i=ye.value;if(i){i.style.maxHeight="",i.style.height="";const{paneWrapperStyle:d}=t;if(typeof d=="string")i.style.cssText=d;else if(d){const{maxHeight:y,height:S}=d;y!==void 0&&(i.style.maxHeight=y),S!==void 0&&(i.style.height=S)}}}const Ne={value:[]},De=R("next");function dt(i){const d=E.value;let y="next";for(const S of Ne.value){if(S===d)break;if(S===i){y="prev";break}}De.value=y,ct(i)}function ct(i){const{onActiveNameChange:d,onUpdateValue:y,"onUpdate:value":S}=t;d&&_e(d,i),y&&_e(y,i),S&&_e(S,i),U.value=i}function ut(i){const{onClose:d}=t;d&&_e(d,i)}function Ue(){const{value:i}=v;if(!i)return;const d="transition-disabled";i.classList.add(d),ne(),i.classList.remove(d)}const pe=R(null);function Se({transitionDisabled:i}){const d=f.value;if(!d)return;i&&d.classList.add("transition-disabled");const y=g();y&&pe.value&&(pe.value.style.width=`${y.offsetWidth}px`,pe.value.style.height=`${y.offsetHeight}px`,pe.value.style.transform=`translateX(${y.offsetLeft-la(getComputedStyle(d).paddingLeft)}px)`,i&&pe.value.offsetWidth),i&&d.classList.remove("transition-disabled")}Re([E],()=>{t.type==="segment"&&ze(()=>{Se({transitionDisabled:!1})})}),ie(()=>{t.type==="segment"&&Se({transitionDisabled:!0})});let Oe=0;function pt(i){var d;if(i.contentRect.width===0&&i.contentRect.height===0||Oe===i.contentRect.width)return;Oe=i.contentRect.width;const{type:y}=t;if((y==="line"||y==="bar")&&Ue(),y!=="segment"){const{placement:S}=t;Pe((S==="top"||S==="bottom"?(d=z.value)===null||d===void 0?void 0:d.$el:C.value)||null)}}const ft=We(pt,64);Re([()=>t.justifyContent,()=>t.size],()=>{ze(()=>{const{type:i}=t;(i==="line"||i==="bar")&&Ue()})});const fe=R(!1);function bt(i){var d;const{target:y,contentRect:{width:S,height:I}}=i,X=y.parentElement.parentElement.offsetWidth,K=y.parentElement.parentElement.offsetHeight,{placement:ge}=t;if(!fe.value)ge==="top"||ge==="bottom"?X<S&&(fe.value=!0):K<I&&(fe.value=!0);else{const{value:me}=M;if(!me)return;ge==="top"||ge==="bottom"?X-S>me.$el.offsetWidth&&(fe.value=!1):K-I>me.$el.offsetHeight&&(fe.value=!1)}Pe(((d=z.value)===null||d===void 0?void 0:d.$el)||null)}const gt=We(bt,64);function vt(){const{onAdd:i}=t;i&&i(),ze(()=>{const d=g(),{value:y}=z;!d||!y||y.scrollTo({left:d.offsetLeft,top:0,behavior:"smooth"})})}function Pe(i){if(!i)return;const{placement:d}=t;if(d==="top"||d==="bottom"){const{scrollLeft:y,scrollWidth:S,offsetWidth:I}=i;x.value=y<=0,w.value=y+I>=S}else{const{scrollTop:y,scrollHeight:S,offsetHeight:I}=i;x.value=y<=0,w.value=y+I>=S}}const mt=We(i=>{Pe(i.target)},64);ra(Ve,{triggerRef:Z(t,"trigger"),tabStyleRef:Z(t,"tabStyle"),tabClassRef:Z(t,"tabClass"),addTabStyleRef:Z(t,"addTabStyle"),addTabClassRef:Z(t,"addTabClass"),paneClassRef:Z(t,"paneClass"),paneStyleRef:Z(t,"paneStyle"),mergedClsPrefixRef:l,typeRef:Z(t,"type"),closableRef:Z(t,"closable"),valueRef:E,tabChangeIdRef:k,onBeforeLeaveRef:Z(t,"onBeforeLeave"),activateTab:dt,handleClose:ut,handleAdd:vt}),oa(()=>{ne(),je()}),na(()=>{const{value:i}=$;if(!i)return;const{value:d}=l,y=`${d}-tabs-nav-scroll-wrapper--shadow-start`,S=`${d}-tabs-nav-scroll-wrapper--shadow-end`;x.value?i.classList.remove(y):i.classList.add(y),w.value?i.classList.remove(S):i.classList.add(S)});const ht={syncBarPosition:()=>{ne()}},yt=()=>{Se({transitionDisabled:!0})},He=ee(()=>{const{value:i}=A,{type:d}=t,y={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[d],S=`${i}${y}`,{self:{barColor:I,closeIconColor:X,closeIconColorHover:K,closeIconColorPressed:ge,tabColor:me,tabBorderColor:xt,paneTextColor:_t,tabFontWeight:wt,tabBorderRadius:Ct,tabFontWeightActive:St,colorSegment:Pt,fontWeightStrong:Tt,tabColorSegment:Rt,closeSize:kt,closeIconSize:zt,closeColorHover:$t,closeColorPressed:Lt,closeBorderRadius:Wt,[Q("panePadding",i)]:xe,[Q("tabPadding",S)]:Bt,[Q("tabPaddingVertical",S)]:At,[Q("tabGap",S)]:Et,[Q("tabGap",`${S}Vertical`)]:Ft,[Q("tabTextColor",d)]:Mt,[Q("tabTextColorActive",d)]:It,[Q("tabTextColorHover",d)]:Vt,[Q("tabTextColorDisabled",d)]:jt,[Q("tabFontSize",i)]:Nt},common:{cubicBezierEaseInOut:Dt}}=p.value;return{"--n-bezier":Dt,"--n-color-segment":Pt,"--n-bar-color":I,"--n-tab-font-size":Nt,"--n-tab-text-color":Mt,"--n-tab-text-color-active":It,"--n-tab-text-color-disabled":jt,"--n-tab-text-color-hover":Vt,"--n-pane-text-color":_t,"--n-tab-border-color":xt,"--n-tab-border-radius":Ct,"--n-close-size":kt,"--n-close-icon-size":zt,"--n-close-color-hover":$t,"--n-close-color-pressed":Lt,"--n-close-border-radius":Wt,"--n-close-icon-color":X,"--n-close-icon-color-hover":K,"--n-close-icon-color-pressed":ge,"--n-tab-color":me,"--n-tab-font-weight":wt,"--n-tab-font-weight-active":St,"--n-tab-padding":Bt,"--n-tab-padding-vertical":At,"--n-tab-gap":Et,"--n-tab-gap-vertical":Ft,"--n-pane-padding-left":we(xe,"left"),"--n-pane-padding-right":we(xe,"right"),"--n-pane-padding-top":we(xe,"top"),"--n-pane-padding-bottom":we(xe,"bottom"),"--n-font-weight-strong":Tt,"--n-tab-color-segment":Rt}}),be=s?sa("tabs",ee(()=>`${A.value[0]}${t.type[0]}`),He,t):void 0;return Object.assign({mergedClsPrefix:l,mergedValue:E,renderedNames:new Set,segmentCapsuleElRef:pe,tabsPaneWrapperRef:ye,tabsElRef:f,barElRef:v,addTabInstRef:M,xScrollInstRef:z,scrollWrapperElRef:$,addTabFixed:fe,tabWrapperStyle:m,handleNavResize:ft,mergedSize:A,handleScroll:mt,handleTabsResize:gt,cssVars:s?void 0:He,themeClass:be==null?void 0:be.themeClass,animationDirection:De,renderNameListRef:Ne,yScrollElRef:C,handleSegmentResize:yt,onAnimationBeforeLeave:st,onAnimationEnter:lt,onAnimationAfterEnter:it,onRender:be==null?void 0:be.onRender},ht)},render(){const{mergedClsPrefix:t,type:a,placement:r,addTabFixed:u,addable:c,mergedSize:h,renderNameListRef:l,onRender:s,paneWrapperClass:p,paneWrapperStyle:f,$slots:{default:v,prefix:$,suffix:M}}=this;s==null||s();const z=v?Te(v()).filter(k=>k.type.__TAB_PANE__===!0):[],C=v?Te(v()).filter(k=>k.type.__TAB__===!0):[],x=!C.length,w=a==="card",A=a==="segment",L=!w&&!A&&this.justifyContent;l.value=[];const U=()=>{const k=P("div",{style:this.tabWrapperStyle,class:`${t}-tabs-wrapper`},L?null:P("div",{class:`${t}-tabs-scroll-padding`,style:r==="top"||r==="bottom"?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),x?z.map((m,g)=>(l.value.push(m.props.name),Ae(P(Me,Object.assign({},m.props,{internalCreatedByPane:!0,internalLeftPadded:g!==0&&(!L||L==="center"||L==="start"||L==="end")}),m.children?{default:m.children.tab}:void 0)))):C.map((m,g)=>(l.value.push(m.props.name),Ae(g!==0&&!L?Qe(m):m))),!u&&c&&w?Ze(c,(x?z.length:C.length)!==0):null,L?null:P("div",{class:`${t}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return P("div",{ref:"tabsElRef",class:`${t}-tabs-nav-scroll-content`},w&&c?P(ke,{onResize:this.handleTabsResize},{default:()=>k}):k,w?P("div",{class:`${t}-tabs-pad`}):null,w?null:P("div",{ref:"barElRef",class:`${t}-tabs-bar`}))},E=A?"top":r;return P("div",{class:[`${t}-tabs`,this.themeClass,`${t}-tabs--${a}-type`,`${t}-tabs--${h}-size`,L&&`${t}-tabs--flex`,`${t}-tabs--${E}`],style:this.cssVars},P("div",{class:[`${t}-tabs-nav--${a}-type`,`${t}-tabs-nav--${E}`,`${t}-tabs-nav`]},Xe($,k=>k&&P("div",{class:`${t}-tabs-nav__prefix`},k)),A?P(ke,{onResize:this.handleSegmentResize},{default:()=>P("div",{class:`${t}-tabs-rail`,ref:"tabsElRef"},P("div",{class:`${t}-tabs-capsule`,ref:"segmentCapsuleElRef"},P("div",{class:`${t}-tabs-wrapper`},P("div",{class:`${t}-tabs-tab`}))),x?z.map((k,m)=>(l.value.push(k.props.name),P(Me,Object.assign({},k.props,{internalCreatedByPane:!0,internalLeftPadded:m!==0}),k.children?{default:k.children.tab}:void 0))):C.map((k,m)=>(l.value.push(k.props.name),m===0?k:Qe(k))))}):P(ke,{onResize:this.handleNavResize},{default:()=>P("div",{class:`${t}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(E)?P(ya,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:U}):P("div",{class:`${t}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:"yScrollElRef"},U()))}),u&&c&&w?Ze(c,!0):null,Xe(M,k=>k&&P("div",{class:`${t}-tabs-nav__suffix`},k))),x&&(this.animated&&(E==="top"||E==="bottom")?P("div",{ref:"tabsPaneWrapperRef",style:f,class:[`${t}-tabs-pane-wrapper`,p]},Je(z,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Je(z,this.mergedValue,this.renderedNames)))}});function Je(t,a,r,u,c,h,l){const s=[];return t.forEach(p=>{const{name:f,displayDirective:v,"display-directive":$}=p.props,M=C=>v===C||$===C,z=a===f;if(p.key!==void 0&&(p.key=f),z||M("show")||M("show:lazy")&&r.has(f)){r.has(f)||r.add(f);const C=!M("if");s.push(C?ia(p,[[da,z]]):p)}}),l?P(ca,{name:`${l}-transition`,onBeforeLeave:u,onEnter:c,onAfterEnter:h},{default:()=>s}):s}function Ze(t,a){return P(Me,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:a,disabled:typeof t=="object"&&t.disabled})}function Qe(t){const a=ua(t);return a.props?a.props.internalLeftPadded=!0:a.props={internalLeftPadded:!0},a}function Ae(t){return Array.isArray(t.dynamicProps)?t.dynamicProps.includes("internalLeftPadded")||t.dynamicProps.push("internalLeftPadded"):t.dynamicProps=["internalLeftPadded"],t}function Aa(){const t=R(!1),a=de(),r=Ie(),u=R({host:"127.0.0.1",port:8080});return{loading:t,formData:u,rules:{host:{required:!0,message:"请输入服务地址",trigger:"blur"},port:[{required:!0,message:"请输入服务端口",trigger:"blur"},{validator:(s,p)=>p>0&&p<65536||new Error("端口号必须在1-65535之间")}]},fetchConfig:async()=>{var s,p;t.value=!0;try{const f=await N.get("/system/config");u.value=f.web}catch(f){(p=(s=f.response)==null?void 0:s.data)!=null&&p.message?a.error(f.response.data.message):a.error("获取配置失败")}finally{t.value=!1}},handleSubmit:async()=>{t.value=!0;try{r.warning({title:"修改确认",content:"修改Web服务配置可能会导致服务暂时不可用，修改后需要重启服务才能生效。如果配置了错误的地址或端口，可能会导致无法访问Web界面，请确认配置正确。是否继续？",positiveText:"确定",negativeText:"取消",onPositiveClick:async()=>{var s,p;try{(await N.post("/system/config/web",u.value)).restart_required&&r.warning({title:"重启确认",content:`服务将在5秒后重启，新的监听地址将为：http://${u.value.host}:${u.value.port}，请自行访问。`,positiveText:"知道了",closable:!1,maskClosable:!1,onPositiveClick:async()=>{a.success("配置已保存，正在重启服务..."),r.destroyAll(),await N.post("/system/restart")}})}catch(f){(p=(s=f.response)==null?void 0:s.data)!=null&&p.message?a.error(f.response.data.message):a.error("保存配置失败")}}})}finally{t.value=!1}}}}const Ea={style:{"margin-bottom":"16px"}},Fa={style:{"margin-top":"24px"}},Ma=q({__name:"WebServiceCard",setup(t){const{loading:a,formData:r,rules:u,fetchConfig:c,handleSubmit:h}=Aa();return ie(()=>{c()}),(l,s)=>(D(),Y(e(re),{title:"Web服务配置",class:"settings-card"},{default:o(()=>[F("div",Ea,[n(e(W),null,{default:o(()=>s[2]||(s[2]=[T(" WebUI 服务和 HTTP 服务是绑定在同一 IP 地址和端口号上的， 你可以在这里修改监听地址，配置成外部可访问的模式。 ")])),_:1})]),n(e(ue),{show:e(a)},{default:o(()=>[n(e(ce),{model:e(r),rules:e(u),"label-placement":"left","label-width":"120","require-mark-placement":"right-hanging"},{default:o(()=>[n(e(H),{label:"服务地址",path:"host"},{feedback:o(()=>[n(e(W),{depth:"3"},{default:o(()=>s[3]||(s[3]=[T("Web服务监听的IP地址，设置为0.0.0.0可以允许从任意IP访问，设置为127.0.0.1则只允许本机访问")])),_:1})]),default:o(()=>[n(e(le),{value:e(r).host,"onUpdate:value":s[0]||(s[0]=p=>e(r).host=p),placeholder:"请输入Web服务绑定的IP地址"},null,8,["value"])]),_:1}),n(e(H),{label:"服务端口",path:"port"},{feedback:o(()=>[n(e(W),{depth:"3"},{default:o(()=>s[4]||(s[4]=[T("Web服务监听的端口号，请确保该端口未被其他程序占用，否则会导致服务无法启动。")])),_:1})]),default:o(()=>[n(e(Ee),{value:e(r).port,"onUpdate:value":s[1]||(s[1]=p=>e(r).port=p),placeholder:"请输入Web服务端口号"},null,8,["value"])]),_:1})]),_:1},8,["model","rules"]),F("div",Fa,[n(e(J),{justify:"end"},{default:o(()=>[n(e(te),{type:"primary",loading:e(a),onClick:e(h)},{default:o(()=>s[5]||(s[5]=[T(" 保存配置 ")])),_:1},8,["loading","onClick"])]),_:1})])]),_:1},8,["show"])]),_:1}))}});const Ia=oe(Ma,[["__scopeId","data-v-75bf8de6"]]);function Va(){const t=R(!1),a=de(),r=R({market_base_url:"https://kirara-plugin.app.lss233.com/api/v1"});return{loading:t,formData:r,rules:{market_base_url:{required:!0,message:"请输入插件市场地址",trigger:"blur"}},fetchConfig:async()=>{var l,s;t.value=!0;try{const p=await N.get("/system/config");r.value=p.plugins}catch(p){(s=(l=p.response)==null?void 0:l.data)!=null&&s.message?a.error(p.response.data.message):a.error("获取配置失败")}finally{t.value=!1}},handleSubmit:async()=>{var l,s;t.value=!0;try{await N.post("/system/config/plugins",r.value),a.success("保存配置成功")}catch(p){(s=(l=p.response)==null?void 0:l.data)!=null&&s.message?a.error(p.response.data.message):a.error("保存配置失败")}finally{t.value=!1}}}}const ja={style:{"margin-top":"24px"}},Na=q({__name:"PluginMarketCard",setup(t){const{loading:a,formData:r,rules:u,fetchConfig:c,handleSubmit:h}=Va();return ie(()=>{c()}),(l,s)=>(D(),Y(e(re),{title:"插件市场配置",class:"settings-card"},{default:o(()=>[n(e(ue),{show:e(a)},{default:o(()=>[n(e(ce),{model:e(r),rules:e(u),"label-placement":"left","label-width":"120","require-mark-placement":"right-hanging"},{default:o(()=>[n(e(H),{label:"市场地址",path:"market_base_url"},{feedback:o(()=>[n(e(W),{depth:"3"},{default:o(()=>s[1]||(s[1]=[T("插件市场的API地址，用于获取插件列表，修改后可能影响插件的安装和更新")])),_:1})]),default:o(()=>[n(e(le),{value:e(r).market_base_url,"onUpdate:value":s[0]||(s[0]=p=>e(r).market_base_url=p),placeholder:"请输入插件市场基础URL"},null,8,["value"])]),_:1})]),_:1},8,["model","rules"]),F("div",ja,[n(e(J),{justify:"end"},{default:o(()=>[n(e(te),{type:"primary",loading:e(a),onClick:e(h)},{default:o(()=>s[2]||(s[2]=[T(" 保存配置 ")])),_:1},8,["loading","onClick"])]),_:1})])]),_:1},8,["show"])]),_:1}))}});const Da=oe(Na,[["__scopeId","data-v-251479ec"]]);function Ua(){const t=R(!1),a=de(),r=R({pypi_registry:"https://pypi.org/simple",npm_registry:"https://registry.npmjs.org"});return{loading:t,formData:r,rules:{pypi_registry:{required:!0,message:"请选择或输入PyPI镜像源",trigger:"blur"},npm_registry:{required:!0,message:"请选择或输入NPM镜像源",trigger:"blur"}},pypiRegistryOptions:[{label:"PyPI 官方",value:"https://pypi.org/simple",description:"https://pypi.org/simple"},{label:"阿里云镜像",value:"https://mirrors.aliyun.com/pypi/simple",description:"https://mirrors.aliyun.com/pypi/simple"},{label:"清华镜像",value:"https://pypi.tuna.tsinghua.edu.cn/simple",description:"https://pypi.tuna.tsinghua.edu.cn/simple"}],npmRegistryOptions:[{label:"NPM 官方",value:"https://registry.npmjs.org",description:"https://registry.npmjs.org"},{label:"淘宝镜像",value:"https://registry.npmmirror.com",description:"https://registry.npmmirror.com"}],renderLabel:f=>P("div",{},`${f.label} (${f.description||"自定义"})`),fetchConfig:async()=>{var f,v;t.value=!0;try{const $=await N.get("/system/config");r.value=$.update}catch($){(v=(f=$.response)==null?void 0:f.data)!=null&&v.message?a.error($.response.data.message):a.error("获取配置失败")}finally{t.value=!1}},handleSubmit:async()=>{var f,v;t.value=!0;try{await N.post("/system/config/update",r.value),a.success("保存配置成功")}catch($){(v=(f=$.response)==null?void 0:f.data)!=null&&v.message?a.error($.response.data.message):a.error("保存配置失败")}finally{t.value=!1}}}}const Oa={style:{"margin-bottom":"16px"}},Ha={style:{"margin-top":"24px"}},Ga=q({__name:"UpdateRegistryCard",setup(t){const{loading:a,formData:r,rules:u,pypiRegistryOptions:c,npmRegistryOptions:h,renderLabel:l,fetchConfig:s,handleSubmit:p}=Ua();return ie(()=>{s()}),(f,v)=>(D(),Y(e(re),{title:"更新源配置",class:"settings-card"},{default:o(()=>[F("div",Oa,[n(e(W),null,{default:o(()=>v[2]||(v[2]=[T(" 这里配置的镜像源地址会影响插件的安装和项目本体的更新检查。 请根据你的网络环境选择合适的镜像源，以获得更快的下载速度和更好的使用体验。 ")])),_:1})]),n(e(ue),{show:e(a)},{default:o(()=>[n(e(ce),{model:e(r),rules:e(u),"label-placement":"left","label-width":"120","require-mark-placement":"right-hanging"},{default:o(()=>[n(e(H),{label:"PyPI镜像源",path:"pypi_registry"},{feedback:o(()=>[n(e(W),{depth:"3"},{default:o(()=>v[3]||(v[3]=[T("用于下载Python包的镜像源，国内用户可以选择阿里云或清华镜像以提高下载速度")])),_:1})]),default:o(()=>[n(e(Fe),{value:e(r).pypi_registry,"onUpdate:value":v[0]||(v[0]=$=>e(r).pypi_registry=$),options:e(c),"render-label":e(l),filterable:"",tag:"",placeholder:"请选择或输入PyPI镜像源地址"},null,8,["value","options","render-label"])]),_:1}),n(e(H),{label:"NPM镜像源",path:"npm_registry"},{feedback:o(()=>[n(e(W),{depth:"3"},{default:o(()=>v[4]||(v[4]=[T("用于下载前端依赖的镜像源，国内用户可以选择淘宝镜像以提高下载速度")])),_:1})]),default:o(()=>[n(e(Fe),{value:e(r).npm_registry,"onUpdate:value":v[1]||(v[1]=$=>e(r).npm_registry=$),options:e(h),"render-label":e(l),filterable:"",tag:"",placeholder:"请选择或输入NPM镜像源地址"},null,8,["value","options","render-label"])]),_:1})]),_:1},8,["model","rules"]),F("div",Ha,[n(e(J),{justify:"end"},{default:o(()=>[n(e(te),{type:"primary",loading:e(a),onClick:e(p)},{default:o(()=>v[5]||(v[5]=[T(" 保存配置 ")])),_:1},8,["loading","onClick"])]),_:1})])]),_:1},8,["show"])]),_:1}))}});const qa=oe(Ga,[["__scopeId","data-v-15afa850"]]);function Xa(){const t=R(!1),a=de(),r=R({old_password:"",new_password:"",confirm_password:""});return{loading:t,formData:r,rules:{old_password:{required:!0,message:"请输入当前密码",trigger:"blur"},new_password:{required:!0,message:"请输入新密码",trigger:"blur"},confirm_password:{required:!0,message:"请确认新密码",trigger:"blur",validator:(h,l)=>l===r.value.new_password||new Error("两次输入的密码不一致")}},handleSubmit:async()=>{var h,l;if(r.value.new_password!==r.value.confirm_password){a.error("两次输入的密码不一致");return}t.value=!0;try{let s=await N.post("/auth/change-password",{old_password:r.value.old_password,new_password:r.value.new_password});if(console.log(s),s.error){a.error(s.message||"密码修改失败");return}a.success("密码修改成功"),r.value={old_password:"",new_password:"",confirm_password:""},pa.push("/login")}catch(s){(l=(h=s.response)==null?void 0:h.data)!=null&&l.message?a.error(s.response.data.message):a.error("密码修改失败")}finally{t.value=!1}}}}const Ka={style:{"margin-bottom":"16px"}},Ya={style:{"margin-top":"24px"}},Ja=q({__name:"PasswordCard",setup(t){const{loading:a,formData:r,rules:u,handleSubmit:c}=Xa();return(h,l)=>(D(),Y(e(re),{title:"修改密码",class:"settings-card"},{default:o(()=>[F("div",Ka,[n(e(W),null,{default:o(()=>l[3]||(l[3]=[T(" 配置 WebUI 的登录密码，如果你的 WebUI 可被外部访问，请务必设置一个复杂的密码，以免被破解。 ")])),_:1})]),n(e(ue),{show:e(a)},{default:o(()=>[n(e(ce),{model:e(r),rules:e(u),"label-placement":"left","label-width":"120","require-mark-placement":"right-hanging"},{default:o(()=>[n(e(H),{label:"当前密码",path:"old_password"},{feedback:o(()=>[n(e(W),{depth:"3"},{default:o(()=>l[4]||(l[4]=[T("请输入您当前的登录密码")])),_:1})]),default:o(()=>[n(e(le),{value:e(r).old_password,"onUpdate:value":l[0]||(l[0]=s=>e(r).old_password=s),type:"password","show-password-on":"click",placeholder:"请输入当前密码"},null,8,["value"])]),_:1}),n(e(H),{label:"新密码",path:"new_password"},{feedback:o(()=>[n(e(W),{depth:"3"},{default:o(()=>l[5]||(l[5]=[T("新密码将用于后续登录，请妥善保管")])),_:1})]),default:o(()=>[n(e(le),{value:e(r).new_password,"onUpdate:value":l[1]||(l[1]=s=>e(r).new_password=s),type:"password","show-password-on":"click",placeholder:"请输入新密码"},null,8,["value"])]),_:1}),n(e(H),{label:"确认新密码",path:"confirm_password"},{feedback:o(()=>[n(e(W),{depth:"3"},{default:o(()=>l[6]||(l[6]=[T("请再次输入新密码以确认")])),_:1})]),default:o(()=>[n(e(le),{value:e(r).confirm_password,"onUpdate:value":l[2]||(l[2]=s=>e(r).confirm_password=s),type:"password","show-password-on":"click",placeholder:"请再次输入新密码"},null,8,["value"])]),_:1})]),_:1},8,["model","rules"]),F("div",Ya,[n(e(J),{justify:"end"},{default:o(()=>[n(e(te),{type:"primary",loading:e(a),onClick:e(c)},{default:o(()=>l[7]||(l[7]=[T(" 修改密码 ")])),_:1},8,["loading","onClick"])]),_:1})])]),_:1},8,["show"])]),_:1}))}});const Za=oe(Ja,[["__scopeId","data-v-fcc12e55"]]);function Qa(){const t=R(!1),a=R(!1),r=de(),u=R(null),c=R(0),h=R("idle"),l=R(""),s=R({enable:!1,server_addr:"",server_port:7e3,token:"",remote_port:0,custom_domains:""}),p={server_addr:{required:!0,message:"请输入服务器地址",trigger:["input","blur"]},server_port:[{validator:(C,x)=>x>0&&x<65536}],remote_port:[{validator:(C,x)=>x>=0&&x<65536||new Error("端口号必须在0-65535之间，0表示随机分配")}]},f=async()=>{var C,x;t.value=!0;try{const w=await N.get("/frpc/status");u.value=w,s.value=w.config}catch(w){(x=(C=w.response)==null?void 0:C.data)!=null&&x.message?r.error(w.response.data.message):r.error("获取FRP状态失败")}finally{t.value=!1}},v=async()=>{var C,x;t.value=!0;try{const w=await N.post("/frpc/config",s.value);u.value=w,r.success("配置已保存")}catch(w){(x=(C=w.response)==null?void 0:C.data)!=null&&x.message?r.error(w.response.data.message):r.error("保存配置失败")}finally{t.value=!1}},$=async()=>{var C,x;t.value=!0;try{const w=await N.post("/frpc/start");u.value=w,r.success("FRP服务已启动")}catch(w){(x=(C=w.response)==null?void 0:C.data)!=null&&x.message?r.error(w.response.data.message):r.error("启动FRP服务失败")}finally{t.value=!1}},M=async()=>{var C,x;t.value=!0;try{const w=await N.post("/frpc/stop");u.value=w,r.success("FRP服务已停止")}catch(w){(x=(C=w.response)==null?void 0:C.data)!=null&&x.message?r.error(w.response.data.message):r.error("停止FRP服务失败")}finally{t.value=!1}},z=async()=>{var C;if(!a.value){a.value=!0,h.value="downloading",c.value=0,l.value="";try{const x=window.location.host,w=`${window.location.protocol}//${x}/backend-api/api`,A=await N.fetch("/frpc/download",{credentials:"include",headers:{Accept:"text/event-stream"}});if(!A.ok)throw new Error(`HTTP错误: ${A.status}`);const L=(C=A.body)==null?void 0:C.getReader();if(!L)throw new Error("无法获取响应流");(async()=>{let E="";try{for(;;){const{done:k,value:m}=await L.read();if(k){console.log("SSE流已关闭");break}E+=new TextDecoder().decode(m);const g=E.split(`

`);E=g.pop()||"";for(const G of g){if(G.trim()==="")continue;const B=G.match(/^data: (.+)$/m);if(B&&B[1])try{const O=JSON.parse(B[1]);if(c.value=O.progress,h.value=O.status,O.error_message&&(l.value=O.error_message),O.status==="completed"){r.success("FRP 客户端下载成功"),f(),a.value=!1,L.cancel();break}else if(O.status==="error"){r.error(O.error_message||"下载 FRP 客户端失败"),a.value=!1,L.cancel();break}}catch(O){console.error("解析 SSE 消息失败",O)}}}}catch(k){console.error("处理SSE流时出错",k),h.value="error",l.value="处理下载进度数据失败",r.error("处理下载进度数据失败"),a.value=!1}})()}catch(x){h.value="error",l.value=x.message||"下载 FRP 客户端失败",r.error(x.message||"下载 FRP 客户端失败"),a.value=!1}}};return fa(()=>{a.value&&(a.value=!1)}),{loading:t,downloading:a,status:u,formData:s,rules:p,downloadProgress:c,downloadStatus:h,downloadErrorMessage:l,fetchStatus:f,handleSubmit:v,startFrpc:$,stopFrpc:M,downloadFrpc:z}}const er={style:{"margin-bottom":"16px"}},tr={key:0,class:"frp-not-installed"},ar={key:0,class:"download-progress-container"},rr={class:"download-status"},or={key:1},nr={class:"frp-status"},sr=["href"],lr={style:{"margin-top":"24px"}},ir=q({__name:"FrpServiceCard",setup(t){const{loading:a,downloading:r,status:u,formData:c,rules:h,downloadProgress:l,downloadStatus:s,downloadErrorMessage:p,fetchStatus:f,handleSubmit:v,startFrpc:$,stopFrpc:M,downloadFrpc:z}=Qa(),C=ee(()=>{var m;return((m=u.value)==null?void 0:m.is_installed)||!1}),x=ee(()=>{var m;return((m=u.value)==null?void 0:m.is_running)||!1}),w=ee(()=>{var m;return((m=u.value)==null?void 0:m.error_message)&&u.value.error_message.length>0}),A=ee(()=>{var m;return((m=u.value)==null?void 0:m.version)||""}),L=ee(()=>s.value==="downloading"),U=ee(()=>s.value==="error"&&p.value),E=R(null);ie(()=>{f()});const k=()=>{var m;(m=E.value)==null||m.validate(g=>{g?console.error("表单验证失败",g):v()}).catch(g=>{console.error("表单验证失败",g)})};return(m,g)=>{const G=ba("n-icon");return D(),Y(e(re),{title:"FRP 内网穿透",class:"settings-card"},{default:o(()=>[F("div",er,[n(e(W),null,{default:o(()=>g[5]||(g[5]=[T(" FRP 是一个可用于内网穿透的高性能的反向代理应用，可以帮助您将本地服务暴露到公网，方便远程访问和管理，或者接收 IM 平台的 Webhook。 "),F("a",{href:"https://gofrp.org/zh-cn/docs/setup/",target:"_blank"},"查看 FRP 官方文档了解如何搭建服务端。",-1)])),_:1})]),n(e(ue),{show:e(a)&&!L.value},{default:o(()=>[C.value?(D(),he("div",or,[F("div",nr,[n(e(J),{align:"center"},{default:o(()=>{var B;return[n(e(W),null,{default:o(()=>g[9]||(g[9]=[T("状态:")])),_:1}),n(e(Ke),{type:x.value?"success":"error"},{default:o(()=>[T(se(x.value?"运行中":"已停止"),1)]),_:1},8,["type"]),A.value?(D(),Y(e(W),{key:0},{default:o(()=>[T("版本: "+se(A.value),1)]),_:1})):ve("",!0),x.value&&((B=e(u))!=null&&B.remote_url)?(D(),he(at,{key:1},[n(e(W),null,{default:o(()=>g[10]||(g[10]=[T("远程地址:")])),_:1}),n(e(Ke),{type:"info"},{default:o(()=>{var O,ne;return[F("a",{href:(O=e(u))==null?void 0:O.remote_url,target:"_blank"},se((ne=e(u))==null?void 0:ne.remote_url),9,sr)]}),_:1})],64)):ve("",!0)]}),_:1})]),w.value?(D(),Y(e($e),{key:0,type:"error",title:"错误信息",style:{margin:"16px 0"}},{default:o(()=>{var B;return[T(se((B=e(u))==null?void 0:B.error_message),1)]}),_:1})):ve("",!0),n(e(ma)),n(e(ce),{ref_key:"formRef",ref:E,model:e(c),rules:e(h),"label-placement":"left","label-width":"120","require-mark-placement":"right-hanging"},{default:o(()=>[n(e(H),{label:"启用服务",path:"enable"},{feedback:o(()=>[n(e(W),{depth:"3"},{default:o(()=>g[11]||(g[11]=[T("启用后，系统将在启动时自动启动 FRP 服务")])),_:1})]),default:o(()=>[n(e(ot),{value:e(c).enable,"onUpdate:value":g[0]||(g[0]=B=>e(c).enable=B)},null,8,["value"])]),_:1}),n(e(H),{label:"服务器地址",path:"server_addr"},{feedback:o(()=>[n(e(W),{depth:"3"},{default:o(()=>g[12]||(g[12]=[T("FRP 服务器的 IP 地址或域名")])),_:1})]),default:o(()=>[n(e(le),{value:e(c).server_addr,"onUpdate:value":g[1]||(g[1]=B=>e(c).server_addr=B),placeholder:"请输入 FRP 服务器地址"},null,8,["value"])]),_:1}),n(e(H),{label:"服务器端口",path:"server_port"},{feedback:o(()=>[n(e(W),{depth:"3"},{default:o(()=>g[13]||(g[13]=[T("FRP 服务器的端口号，默认为 7000")])),_:1})]),default:o(()=>[n(e(Ee),{value:e(c).server_port,"onUpdate:value":g[2]||(g[2]=B=>e(c).server_port=B),placeholder:"请输入 FRP 服务器端口"},null,8,["value"])]),_:1}),n(e(H),{label:"连接令牌",path:"token"},{feedback:o(()=>[n(e(W),{depth:"3"},{default:o(()=>g[14]||(g[14]=[T("FRP 服务器的连接令牌，如果服务器未设置则留空")])),_:1})]),default:o(()=>[n(e(le),{value:e(c).token,"onUpdate:value":g[3]||(g[3]=B=>e(c).token=B),placeholder:"请输入连接令牌",type:"password","show-password-on":"click"},null,8,["value"])]),_:1}),n(e(H),{label:"远程端口",path:"remote_port"},{feedback:o(()=>[n(e(W),{depth:"3"},{default:o(()=>g[15]||(g[15]=[T("映射到公网的端口号，设置为 0 表示由服务器随机分配")])),_:1})]),default:o(()=>[n(e(Ee),{value:e(c).remote_port,"onUpdate:value":g[4]||(g[4]=B=>e(c).remote_port=B),placeholder:"请输入远程端口"},null,8,["value"])]),_:1})]),_:1},8,["model","rules"]),F("div",lr,[n(e(J),{justify:"end"},{default:o(()=>[n(e(te),{type:"primary",loading:e(a),onClick:k},{default:o(()=>g[16]||(g[16]=[T(" 保存配置 ")])),_:1},8,["loading"])]),_:1})])])):(D(),he("div",tr,[n(e($e),{type:"warning",title:"FRP 客户端未安装"},{icon:o(()=>[n(G,null,{default:o(()=>g[6]||(g[6]=[F("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[F("path",{fill:"currentColor",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"})],-1)])),_:1})]),default:o(()=>[F("div",null,[g[8]||(g[8]=F("p",null,"您需要先下载 FRP 客户端才能使用内网穿透功能。",-1)),n(e(te),{type:"primary",loading:e(r)&&!L.value,disabled:L.value,onClick:e(z),style:{"margin-top":"8px"}},{default:o(()=>[T(se(L.value?"下载中...":"下载 FRP 客户端"),1)]),_:1},8,["loading","disabled","onClick"]),L.value||e(l)>0||U.value?(D(),he("div",ar,[U.value?(D(),Y(e($e),{key:0,type:"error",title:"下载失败",style:{"margin-bottom":"16px"}},{default:o(()=>[T(se(e(p)),1)]),_:1})):ve("",!0),n(e(ga),{type:"line",percentage:e(l),"show-indicator":!0,processing:e(l)<100&&!U.value,status:U.value?"error":e(s)==="completed"?"success":"info",style:{"margin-top":"8px"}},null,8,["percentage","processing","status"]),F("div",rr,[n(e(W),{depth:"3"},{default:o(()=>[T(se(U.value?"下载失败":e(s)==="completed"?"下载完成":`正在下载 FRP 客户端 (${e(l).toFixed(1)}%)`),1)]),_:1}),U.value?(D(),Y(e(te),{key:0,size:"small",onClick:e(z)},{default:o(()=>g[7]||(g[7]=[T(" 重试 ")])),_:1},8,["onClick"])):ve("",!0)])])):ve("",!0)])]),_:1})]))]),_:1},8,["show"])]),_:1})}}});const dr=oe(ir,[["__scopeId","data-v-439e1fa9"]]);function cr(){const t=R(!1),a=de(),r=Ie(),u=R([{label:"亚洲/上海 (UTC+8)",value:"Asia/Shanghai"},{label:"亚洲/香港 (UTC+8)",value:"Asia/Hong_Kong"},{label:"亚洲/东京 (UTC+9)",value:"Asia/Tokyo"},{label:"亚洲/新加坡 (UTC+8)",value:"Asia/Singapore"},{label:"欧洲/伦敦 (UTC+0)",value:"Europe/London"},{label:"欧洲/巴黎 (UTC+1)",value:"Europe/Paris"},{label:"美国/纽约 (UTC-5)",value:"America/New_York"},{label:"美国/洛杉矶 (UTC-8)",value:"America/Los_Angeles"},{label:"澳大利亚/悉尼 (UTC+10)",value:"Australia/Sydney"}]),c=R({timezone:"Asia/Shanghai"});return{loading:t,formData:c,rules:{timezone:{required:!0,message:"请选择时区",trigger:"blur"}},timezoneOptions:u,fetchConfig:async()=>{var p,f;t.value=!0;try{const v=await N.get("/system/config");c.value={timezone:v.system.timezone}}catch(v){(f=(p=v.response)==null?void 0:p.data)!=null&&f.message?a.error(v.response.data.message):a.error("获取配置失败")}finally{t.value=!1}},handleSubmit:async()=>{t.value=!0;try{r.warning({title:"修改确认",content:"修改时区设置将影响系统的时间显示，确定要修改吗？",positiveText:"确定",negativeText:"取消",onPositiveClick:async()=>{var p,f;try{await N.post("/system/config/system",{timezone:c.value.timezone}),a.success("时区设置已保存")}catch(v){(f=(p=v.response)==null?void 0:p.data)!=null&&f.message?a.error(v.response.data.message):a.error("保存配置失败")}}})}finally{t.value=!1}}}}const ur={style:{"margin-bottom":"16px"}},pr={style:{"margin-top":"24px"}},fr=q({__name:"TimezoneCard",setup(t){const{loading:a,formData:r,rules:u,timezoneOptions:c,fetchConfig:h,handleSubmit:l}=cr();return ie(()=>{h()}),(s,p)=>(D(),Y(e(re),{title:"时区设置",class:"settings-card"},{default:o(()=>[F("div",ur,[n(e(W),null,{default:o(()=>p[1]||(p[1]=[T(" 设置系统时区，影响系统中所有时间的显示和记录， Windows 下修改此设置无效。 ")])),_:1})]),n(e(ue),{show:e(a)},{default:o(()=>[n(e(ce),{model:e(r),rules:e(u),"label-placement":"left","label-width":"120","require-mark-placement":"right-hanging"},{default:o(()=>[n(e(H),{label:"系统时区",path:"timezone"},{feedback:o(()=>[n(e(W),{depth:"3"},{default:o(()=>p[2]||(p[2]=[T("系统时区将影响所有时间的显示和记录，请选择与您所在地区匹配的时区")])),_:1})]),default:o(()=>[n(e(Fe),{value:e(r).timezone,"onUpdate:value":p[0]||(p[0]=f=>e(r).timezone=f),options:e(c),placeholder:"请选择系统时区",filterable:""},null,8,["value","options"])]),_:1})]),_:1},8,["model","rules"]),F("div",pr,[n(e(J),{justify:"end"},{default:o(()=>[n(e(te),{type:"primary",loading:e(a),onClick:e(l)},{default:o(()=>p[3]||(p[3]=[T(" 保存配置 ")])),_:1},8,["loading","onClick"])]),_:1})])]),_:1},8,["show"])]),_:1}))}});const br=oe(fr,[["__scopeId","data-v-33bef2c9"]]);function gr(){const t=R(!1),a=de(),r=Ie(),u=R({llm_tracing_content:!1}),c=async()=>{var s,p;t.value=!0;try{const f=await N.get("/system/config");u.value={llm_tracing_content:f.tracing.llm_tracing_content}}catch(f){(p=(s=f.response)==null?void 0:s.data)!=null&&p.message?a.error(f.response.data.message):a.error("获取配置失败")}finally{t.value=!1}},h=async()=>{t.value=!0;try{u.value.llm_tracing_content?r.warning({title:"LLM 内容追踪功能启用告知书",style:{width:"550px",fontSize:"14px"},content:()=>P("div",{style:{whiteSpace:"pre-line"}},`
您即将启用 LLM 内容追踪功能。请您仔细阅读以下条款，充分了解相关风险与责任：

1. 功能说明：
   - 启用本功能后，系统将完整记录所有 LLM 交互请求及响应内容，包括用户输入的原始请求内容、系统生成的响应内容以及交互时间等元数据。
   - 所有记录数据将至少保留 30 个自然日。

2. 风险提示：
   - 数据可能包含敏感信息，如个人身份信息、商业机密等。
   - 数据存在安全风险，包括但不限于未经授权的访问、系统漏洞导致的数据泄露等。

3. 用户义务：
   - 若您将服务提供给第三方使用，您必须在用户协议中明确告知数据记录条款，并取得用户对数据记录的明确同意。
   - 您承诺遵守相关法律法规，建立数据访问审计机制，并定期进行安全风险评估。

4. 免责声明：
   - 本功能产生的数据均保存在您的服务器上，Kirara AI 开发团队不处理或访问任何记录数据，亦不承担因启用本功能导致的任何法律责任。
   - 因您未履行告知义务、安全防护措施不足或违反相关法律法规而导致的损失，由您全权承担。

请您确认已充分理解并接受以上条款，并承诺对启用本功能后的数据安全负责。
        `),positiveText:"确认开启",negativeText:"取消操作",onPositiveClick:async()=>{await l()},onNegativeClick:()=>{u.value.llm_tracing_content=!1,t.value=!1}}):await l()}catch{t.value=!1}},l=async()=>{var s,p;try{await N.post("/system/config/tracing",{llm_tracing_content:u.value.llm_tracing_content}),a.success("追踪设置已保存")}catch(f){(p=(s=f.response)==null?void 0:s.data)!=null&&p.message?a.error(f.response.data.message):a.error("保存配置失败")}finally{t.value=!1}};return{loading:t,formData:u,fetchConfig:c,handleSubmit:h}}const vr={style:{"margin-bottom":"16px"}},mr={style:{"margin-top":"24px"}},hr=q({__name:"TracingCard",setup(t){const{loading:a,formData:r,fetchConfig:u,handleSubmit:c}=gr();return ie(()=>{u()}),(h,l)=>(D(),Y(e(re),{title:"系统记录",class:"settings-card"},{default:o(()=>[F("div",vr,[n(e(W),null,{default:o(()=>l[1]||(l[1]=[T(" 配置系统记录功能，用于调试和分析。 ")])),_:1})]),n(e(ue),{show:e(a)},{default:o(()=>[n(e(ce),{model:e(r),"label-placement":"left","label-width":"160","require-mark-placement":"right-hanging"},{default:o(()=>[n(e(H),{label:"LLM请求记录时包含完整内容",path:"llm_tracing_content"},{feedback:o(()=>[n(e(W),{depth:"3"},{default:o(()=>l[2]||(l[2]=[T(" 启用后将记录所有LLM请求和响应的完整内容，可能包含敏感信息 ")])),_:1})]),default:o(()=>[n(e(ot),{value:e(r).llm_tracing_content,"onUpdate:value":l[0]||(l[0]=s=>e(r).llm_tracing_content=s)},null,8,["value"])]),_:1})]),_:1},8,["model"]),F("div",mr,[n(e(J),{justify:"end"},{default:o(()=>[n(e(te),{type:"primary",loading:e(a),onClick:e(c)},{default:o(()=>l[3]||(l[3]=[T(" 保存配置 ")])),_:1},8,["loading","onClick"])]),_:1})])]),_:1},8,["show"])]),_:1}))}});const yr=oe(hr,[["__scopeId","data-v-e6b6227e"]]),xr={class:"settings-page"},_r=q({__name:"BasicSettings",setup(t){return(a,r)=>(D(),he("div",xr,[n(e(re),{title:"系统设置",class:"settings-card"},{default:o(()=>[n(e(Ba),{type:"line",animated:"",class:"settings-tabs","pane-wrapper-style":"margin: 0 -4px","pane-style":"padding-left: 4px; padding-right: 4px; box-sizing: border-box;"},{default:o(()=>[n(e(Be),{name:"webservice",tab:"Web服务"},{default:o(()=>[n(e(J),{vertical:"",gap:32},{default:o(()=>[n(Ia),n(Za),n(dr)]),_:1})]),_:1}),n(e(Be),{name:"system",tab:"系统设置"},{default:o(()=>[n(e(J),{vertical:"",gap:32},{default:o(()=>[n(br),n(yr)]),_:1})]),_:1}),n(e(Be),{name:"update",tab:"下载源"},{default:o(()=>[n(e(J),{vertical:"",gap:32},{default:o(()=>[n(qa),n(Da)]),_:1})]),_:1})]),_:1})]),_:1})]))}});const Mr=oe(_r,[["__scopeId","data-v-5e01e0b4"]]);export{Mr as default};
