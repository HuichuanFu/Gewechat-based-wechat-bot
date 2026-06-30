import{ar as B,P as R,J as f,I as N,d as L,L as O,V as v,b as V,O as b,as as _,at as E,au as p,a3 as H,F as j}from"./index.js";let k=!1;function A(){if(B&&window.CSS&&!k&&(k=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}function F(e){const{heightSmall:o,heightMedium:i,heightLarge:n,borderRadius:t}=e;return{color:"#eee",colorEnd:"#ddd",borderRadius:t,heightSmall:o,heightMedium:i,heightLarge:n}}const I={name:"Skeleton",common:R,self:F},T=f([N("skeleton",`
 height: 1em;
 width: 100%;
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 animation: 2s skeleton-loading infinite cubic-bezier(0.36, 0, 0.64, 1);
 background-color: var(--n-color-start);
 `),f("@keyframes skeleton-loading",`
 0% {
 background: var(--n-color-start);
 }
 40% {
 background: var(--n-color-end);
 }
 80% {
 background: var(--n-color-start);
 }
 100% {
 background: var(--n-color-start);
 }
 `)]),$=Object.assign(Object.assign({},v.props),{text:Boolean,round:Boolean,circle:Boolean,height:[String,Number],width:[String,Number],size:String,repeat:{type:Number,default:1},animated:{type:Boolean,default:!0},sharp:{type:Boolean,default:!0}}),K=L({name:"Skeleton",inheritAttrs:!1,props:$,setup(e){A();const{mergedClsPrefixRef:o}=O(e),i=v("Skeleton","-skeleton",T,I,e,o);return{mergedClsPrefix:o,style:V(()=>{var n,t;const a=i.value,{common:{cubicBezierEaseInOut:y}}=a,m=a.self,{color:S,colorEnd:w,borderRadius:x}=m;let s;const{circle:l,sharp:P,round:z,width:r,height:c,size:g,text:h,animated:C}=e;g!==void 0&&(s=m[E("height",g)]);const d=l?(n=r??c)!==null&&n!==void 0?n:s:r,u=(t=l?r??c:c)!==null&&t!==void 0?t:s;return{display:h?"inline-block":"",verticalAlign:h?"-0.125em":"",borderRadius:l?"50%":z?"4096px":P?"":x,width:typeof d=="number"?p(d):d,height:typeof u=="number"?p(u):u,animation:C?"":"none","--n-bezier":y,"--n-color-start":S,"--n-color-end":w}})}},render(){const{repeat:e,style:o,mergedClsPrefix:i,$attrs:n}=this,t=b("div",_({class:`${i}-skeleton`,style:o},n));return e>1?b(j,null,H(e,null).map(a=>[t,`
`])):t}});export{K as N};
