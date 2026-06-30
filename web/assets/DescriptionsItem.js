import{P as H,Q as C,J as g,I as e,a1 as N,R as $,K as D,S as W,T as G,d as E,L as K,V,b as k,Y as J,aR as Q,aA as Y,O as n,a3 as q,aB as U,at as I}from"./index.js";function _(r,d="default",c=[]){const{children:s}=r;if(s!==null&&typeof s=="object"&&!Array.isArray(s)){const l=s[d];if(typeof l=="function")return l()}return c}const X={thPaddingBorderedSmall:"8px 12px",thPaddingBorderedMedium:"12px 16px",thPaddingBorderedLarge:"16px 24px",thPaddingSmall:"0",thPaddingMedium:"0",thPaddingLarge:"0",tdPaddingBorderedSmall:"8px 12px",tdPaddingBorderedMedium:"12px 16px",tdPaddingBorderedLarge:"16px 24px",tdPaddingSmall:"0 0 8px 0",tdPaddingMedium:"0 0 12px 0",tdPaddingLarge:"0 0 16px 0"};function Z(r){const{tableHeaderColor:d,textColor2:c,textColor1:s,cardColor:l,modalColor:i,popoverColor:a,dividerColor:p,borderRadius:h,fontWeightStrong:u,lineHeight:S,fontSizeSmall:t,fontSizeMedium:f,fontSizeLarge:m}=r;return Object.assign(Object.assign({},X),{lineHeight:S,fontSizeSmall:t,fontSizeMedium:f,fontSizeLarge:m,titleTextColor:s,thColor:C(l,d),thColorModal:C(i,d),thColorPopover:C(a,d),thTextColor:s,thFontWeight:u,tdTextColor:c,tdColor:l,tdColorModal:i,tdColorPopover:a,borderColor:C(l,p),borderColorModal:C(i,p),borderColorPopover:C(a,p),borderRadius:h})}const ee={name:"Descriptions",common:H,self:Z},oe=ee,te=g([e("descriptions",{fontSize:"var(--n-font-size)"},[e("descriptions-separator",`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),e("descriptions-table-wrapper",[e("descriptions-table",[e("descriptions-table-row",[e("descriptions-table-header",{padding:"var(--n-th-padding)"}),e("descriptions-table-content",{padding:"var(--n-td-padding)"})])])]),N("bordered",[e("descriptions-table-wrapper",[e("descriptions-table",[e("descriptions-table-row",[g("&:last-child",[e("descriptions-table-content",{paddingBottom:0})])])])])]),$("left-label-placement",[e("descriptions-table-content",[g("> *",{verticalAlign:"top"})])]),$("left-label-align",[g("th",{textAlign:"left"})]),$("center-label-align",[g("th",{textAlign:"center"})]),$("right-label-align",[g("th",{textAlign:"right"})]),$("bordered",[e("descriptions-table-wrapper",`
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `,[e("descriptions-table",[e("descriptions-table-row",[g("&:not(:last-child)",[e("descriptions-table-content",{borderBottom:"1px solid var(--n-merged-border-color)"}),e("descriptions-table-header",{borderBottom:"1px solid var(--n-merged-border-color)"})]),e("descriptions-table-header",`
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `,[g("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})]),e("descriptions-table-content",[g("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})])])])])]),e("descriptions-header",`
 font-weight: var(--n-th-font-weight);
 font-size: 18px;
 transition: color .3s var(--n-bezier);
 line-height: var(--n-line-height);
 margin-bottom: 16px;
 color: var(--n-title-text-color);
 `),e("descriptions-table-wrapper",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[e("descriptions-table",`
 width: 100%;
 border-collapse: separate;
 border-spacing: 0;
 box-sizing: border-box;
 `,[e("descriptions-table-row",`
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[e("descriptions-table-header",`
 font-weight: var(--n-th-font-weight);
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-th-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),e("descriptions-table-content",`
 vertical-align: top;
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-td-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[D("content",`
 transition: color .3s var(--n-bezier);
 display: inline-block;
 color: var(--n-td-text-color);
 `)]),D("label",`
 font-weight: var(--n-th-font-weight);
 transition: color .3s var(--n-bezier);
 display: inline-block;
 margin-right: 14px;
 color: var(--n-th-text-color);
 `)])])])]),e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 `),W(e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),G(e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),F="DESCRIPTION_ITEM_FLAG";function re(r){return typeof r=="object"&&r&&!Array.isArray(r)?r.type&&r.type[F]:!1}const ne=Object.assign(Object.assign({},V.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:{type:String,default:"medium"},bordered:Boolean,labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]}),se=E({name:"Descriptions",props:ne,slots:Object,setup(r){const{mergedClsPrefixRef:d,inlineThemeDisabled:c}=K(r),s=V("Descriptions","-descriptions",te,oe,r,d),l=k(()=>{const{size:a,bordered:p}=r,{common:{cubicBezierEaseInOut:h},self:{titleTextColor:u,thColor:S,thColorModal:t,thColorPopover:f,thTextColor:m,thFontWeight:R,tdTextColor:M,tdColor:L,tdColorModal:B,tdColorPopover:o,borderColor:y,borderColorModal:O,borderColorPopover:b,borderRadius:v,lineHeight:w,[I("fontSize",a)]:P,[I(p?"thPaddingBordered":"thPadding",a)]:x,[I(p?"tdPaddingBordered":"tdPadding",a)]:z}}=s.value;return{"--n-title-text-color":u,"--n-th-padding":x,"--n-td-padding":z,"--n-font-size":P,"--n-bezier":h,"--n-th-font-weight":R,"--n-line-height":w,"--n-th-text-color":m,"--n-td-text-color":M,"--n-th-color":S,"--n-th-color-modal":t,"--n-th-color-popover":f,"--n-td-color":L,"--n-td-color-modal":B,"--n-td-color-popover":o,"--n-border-radius":v,"--n-border-color":y,"--n-border-color-modal":O,"--n-border-color-popover":b}}),i=c?J("descriptions",k(()=>{let a="";const{size:p,bordered:h}=r;return h&&(a+="a"),a+=p[0],a}),l,r):void 0;return{mergedClsPrefix:d,cssVars:c?void 0:l,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender,compitableColumn:Q(r,["columns","column"]),inlineThemeDisabled:c}},render(){const r=this.$slots.default,d=r?Y(r()):[];d.length;const{contentClass:c,labelClass:s,compitableColumn:l,labelPlacement:i,labelAlign:a,size:p,bordered:h,title:u,cssVars:S,mergedClsPrefix:t,separator:f,onRender:m}=this;m==null||m();const R=d.filter(o=>re(o)),M={span:0,row:[],secondRow:[],rows:[]},B=R.reduce((o,y,O)=>{const b=y.props||{},v=R.length-1===O,w=["label"in b?b.label:_(y,"label")],P=[_(y)],x=b.span||1,z=o.span;o.span+=x;const T=b.labelStyle||b["label-style"]||this.labelStyle,A=b.contentStyle||b["content-style"]||this.contentStyle;if(i==="left")h?o.row.push(n("th",{class:[`${t}-descriptions-table-header`,s],colspan:1,style:T},w),n("td",{class:[`${t}-descriptions-table-content`,c],colspan:v?(l-z)*2+1:x*2-1,style:A},P)):o.row.push(n("td",{class:`${t}-descriptions-table-content`,colspan:v?(l-z)*2:x*2},n("span",{class:[`${t}-descriptions-table-content__label`,s],style:T},[...w,f&&n("span",{class:`${t}-descriptions-separator`},f)]),n("span",{class:[`${t}-descriptions-table-content__content`,c],style:A},P)));else{const j=v?(l-z)*2:x*2;o.row.push(n("th",{class:[`${t}-descriptions-table-header`,s],colspan:j,style:T},w)),o.secondRow.push(n("td",{class:[`${t}-descriptions-table-content`,c],colspan:j,style:A},P))}return(o.span>=l||v)&&(o.span=0,o.row.length&&(o.rows.push(o.row),o.row=[]),i!=="left"&&o.secondRow.length&&(o.rows.push(o.secondRow),o.secondRow=[])),o},M).rows.map(o=>n("tr",{class:`${t}-descriptions-table-row`},o));return n("div",{style:S,class:[`${t}-descriptions`,this.themeClass,`${t}-descriptions--${i}-label-placement`,`${t}-descriptions--${a}-label-align`,`${t}-descriptions--${p}-size`,h&&`${t}-descriptions--bordered`]},u||this.$slots.header?n("div",{class:`${t}-descriptions-header`},u||U(this,"header")):null,n("div",{class:`${t}-descriptions-table-wrapper`},n("table",{class:`${t}-descriptions-table`},n("tbody",null,i==="top"&&n("tr",{class:`${t}-descriptions-table-row`,style:{visibility:"collapse"}},q(l*2,n("td",null))),B))))}}),le={label:String,span:{type:Number,default:1},labelClass:String,labelStyle:[Object,String],contentClass:String,contentStyle:[Object,String]},ae=E({name:"DescriptionsItem",[F]:!0,props:le,slots:Object,render(){return null}});export{se as N,ae as a};
