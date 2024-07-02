"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[769],{6648:function(e,t,r){r.d(t,{default:function(){return o.a}});var n=r(5601),o=r.n(n)},5601:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return i},getImageProps:function(){return l}});let n=r(9920),o=r(497),u=r(8173),a=n._(r(1241));function l(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/BeyondPDFInfo/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let i=u.Image},7266:function(e,t,r){r.d(t,{y1:function(){return o}});var n=r(2265);function o(e,t,r){var o=this,u=(0,n.useRef)(null),a=(0,n.useRef)(0),l=(0,n.useRef)(null),i=(0,n.useRef)([]),s=(0,n.useRef)(),c=(0,n.useRef)(),d=(0,n.useRef)(e),f=(0,n.useRef)(!0);d.current=e;var p="undefined"!=typeof window,m=!t&&0!==t&&p;if("function"!=typeof e)throw TypeError("Expected a function");t=+t||0;var v=!!(r=r||{}).leading,b=!("trailing"in r)||!!r.trailing,g="maxWait"in r,h="debounceOnServer"in r&&!!r.debounceOnServer,x=g?Math.max(+r.maxWait||0,t):null;return(0,n.useEffect)(function(){return f.current=!0,function(){f.current=!1}},[]),(0,n.useMemo)(function(){var e=function(e){var t=i.current,r=s.current;return i.current=s.current=null,a.current=e,c.current=d.current.apply(r,t)},r=function(e,t){m&&cancelAnimationFrame(l.current),l.current=m?requestAnimationFrame(e):setTimeout(e,t)},n=function(e){if(!f.current)return!1;var r=e-u.current;return!u.current||r>=t||r<0||g&&e-a.current>=x},y=function(t){return l.current=null,b&&i.current?e(t):(i.current=s.current=null,c.current)},E=function e(){var o=Date.now();if(n(o))return y(o);if(f.current){var l=t-(o-u.current);r(e,g?Math.min(l,x-(o-a.current)):l)}},T=function(){if(p||h){var d=Date.now(),m=n(d);if(i.current=[].slice.call(arguments),s.current=o,u.current=d,m){if(!l.current&&f.current)return a.current=u.current,r(E,t),v?e(u.current):c.current;if(g)return r(E,t),e(u.current)}return l.current||r(E,t),c.current}};return T.cancel=function(){l.current&&(m?cancelAnimationFrame(l.current):clearTimeout(l.current)),a.current=0,i.current=u.current=s.current=l.current=null},T.isPending=function(){return!!l.current},T.flush=function(){return l.current?y(Date.now()):c.current},T},[v,g,t,x,b,m,p,h])}},1378:function(e,t,r){let n;r.d(t,{Y8:function(){return H},Ee:function(){return W}});var o=r(6117),u=r(3892),a=r(2265);function l(e,t){return null!==e&&null!==t&&"object"==typeof e&&"object"==typeof t&&"id"in e&&"id"in t?e.id===t.id:e===t}var i=r(6584),s=r(1463),c=r(8703),d=r(1469);let f=(0,a.createContext)(void 0);function p(){return(0,a.useContext)(f)}var m=r(4887),v=r(9299);function b(e,t){return e?e+"["+t+"]":t}var g=r(2642),h=r(9080);let x=(0,a.createContext)(null);function y(e){let{children:t}=e,r=(0,a.useContext)(x);if(!r)return a.createElement(a.Fragment,null,t);let{target:n}=r;return n?(0,m.createPortal)(a.createElement(a.Fragment,null,t),n):null}function E(e){let{data:t,form:r,disabled:n,onReset:o,overrides:u}=e,[l,i]=(0,a.useState)(null),s=(0,v.G)();return(0,a.useEffect)(()=>{if(o&&l)return s.addEventListener(l,"reset",o)},[l,r,o]),a.createElement(y,null,a.createElement(T,{setForm:i,formId:r}),(function e(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];for(let[o,u]of Object.entries(t))!function t(r,n,o){if(Array.isArray(o))for(let[e,u]of o.entries())t(r,b(n,e.toString()),u);else o instanceof Date?r.push([n,o.toISOString()]):"boolean"==typeof o?r.push([n,o?"1":"0"]):"string"==typeof o?r.push([n,o]):"number"==typeof o?r.push([n,`${o}`]):null==o?r.push([n,""]):e(o,n,r)}(n,b(r,o),u);return n})(t).map(e=>{let[t,o]=e;return a.createElement(h._,{features:h.x.Hidden,...(0,g.oA)({key:t,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:r,disabled:n,name:t,value:o,...u})})}))}function T(e){let{setForm:t,formId:r}=e;return(0,a.useEffect)(()=>{if(r){let e=document.getElementById(r);e&&t(e)}},[t,r]),r?null:a.createElement(h._,{features:h.x.Hidden,as:"input",type:"hidden",hidden:!0,readOnly:!0,ref:e=>{if(!e)return;let r=e.closest("form");r&&t(r)}})}let R=(0,a.createContext)(void 0);function P(){return(0,a.useContext)(R)}var k=r(7986),I=r(9309),O=r(5583),C=r(1498);let S=(0,a.createContext)(null);function w(){let[e,t]=(0,a.useState)([]);return[e.length>0?e.join(" "):void 0,(0,a.useMemo)(()=>function(e){let r=(0,i.z)(e=>(t(t=>[...t,e]),()=>t(t=>{let r=t.slice(),n=r.indexOf(e);return -1!==n&&r.splice(n,1),r}))),n=(0,a.useMemo)(()=>({register:r,slot:e.slot,name:e.name,props:e.props,value:e.value}),[r,e.slot,e.name,e.props,e.value]);return a.createElement(S.Provider,{value:n},e.children)},[t])]}S.displayName="DescriptionContext";let A=Object.assign((0,g.yV)(function(e,t){let r=(0,a.useId)(),n=p(),{id:o=`headlessui-description-${r}`,...u}=e,l=function e(){let t=(0,a.useContext)(S);if(null===t){let t=Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,e),t}return t}(),i=(0,d.T)(t);(0,s.e)(()=>l.register(o),[o,l.register]);let c=n||!1,f=(0,a.useMemo)(()=>({...l.slot,disabled:c}),[l.slot,c]),m={ref:i,...l.props,id:o};return(0,g.sY)({ourProps:m,theirProps:u,slot:f,defaultTag:"p",name:l.name||"Description"})}),{});var F=r(7551);let D=(0,a.createContext)(null);function M(e){var t,r,n;let o=null!=(r=null==(t=(0,a.useContext)(D))?void 0:t.value)?r:void 0;return(null!=(n=null==e?void 0:e.length)?n:0)>0?[o,...e].filter(Boolean).join(" "):o}function z(){let{inherit:e=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=M(),[r,n]=(0,a.useState)([]),o=e?[t,...r].filter(Boolean):r;return[o.length>0?o.join(" "):void 0,(0,a.useMemo)(()=>function(e){let t=(0,i.z)(e=>(n(t=>[...t,e]),()=>n(t=>{let r=t.slice(),n=r.indexOf(e);return -1!==n&&r.splice(n,1),r}))),r=(0,a.useMemo)(()=>({register:t,slot:e.slot,name:e.name,props:e.props,value:e.value}),[t,e.slot,e.name,e.props,e.value]);return a.createElement(D.Provider,{value:r},e.children)},[n])]}D.displayName="LabelContext";let G=Object.assign((0,g.yV)(function(e,t){var r;let n=(0,a.useId)(),o=function e(){let t=(0,a.useContext)(D);if(null===t){let t=Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,e),t}return t}(),u=P(),l=p(),{id:c=`headlessui-label-${n}`,htmlFor:f=null!=u?u:null==(r=o.props)?void 0:r.htmlFor,passive:m=!1,...v}=e,b=(0,d.T)(t);(0,s.e)(()=>o.register(c),[c,o.register]);let h=(0,i.z)(e=>{let t=e.currentTarget;if(t instanceof HTMLLabelElement&&e.preventDefault(),o.props&&"onClick"in o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),t instanceof HTMLLabelElement){let e=document.getElementById(t.htmlFor);if(e){let t=e.getAttribute("disabled");if("true"===t||""===t)return;let r=e.getAttribute("aria-disabled");if("true"===r||""===r)return;(e instanceof HTMLInputElement&&("radio"===e.type||"checkbox"===e.type)||"radio"===e.role||"checkbox"===e.role||"switch"===e.role)&&e.click(),e.focus({preventScroll:!0})}}}),x=l||!1,y=(0,a.useMemo)(()=>({...o.slot,disabled:x}),[o.slot,x]),E={ref:b,...o.props,id:c,htmlFor:f,onClick:h};return m&&("onClick"in E&&(delete E.htmlFor,delete E.onClick),"onClick"in v&&delete v.onClick),(0,g.sY)({ourProps:E,theirProps:v,slot:y,defaultTag:f?"label":"div",name:o.name||"Label"})}),{});var j=((n=j||{})[n.RegisterOption=0]="RegisterOption",n[n.UnregisterOption=1]="UnregisterOption",n);let L={0(e,t){let r=[...e.options,{id:t.id,element:t.element,propsRef:t.propsRef}];return{...e,options:(0,I.z2)(r,e=>e.element.current)}},1(e,t){let r=e.options.slice(),n=e.options.findIndex(e=>e.id===t.id);return -1===n?e:(r.splice(n,1),{...e,options:r})}},N=(0,a.createContext)(null);function V(e){let t=(0,a.useContext)(N);if(null===t){let t=Error(`<${e} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,V),t}return t}N.displayName="RadioGroupDataContext";let Y=(0,a.createContext)(null);function _(e){let t=(0,a.useContext)(Y);if(null===t){let t=Error(`<${e} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,_),t}return t}function U(e,t){return(0,O.E)(t.type,L,e,t)}Y.displayName="RadioGroupActionsContext";let $=(0,g.yV)(function(e,t){let r=(0,a.useId)(),n=p(),{id:o=`headlessui-radiogroup-${r}`,value:u,form:s,name:c,onChange:f,by:m,disabled:v=n||!1,defaultValue:b,...h}=e,x=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;return(0,a.useCallback)((t,r)=>"string"==typeof e?(null==t?void 0:t[e])===(null==r?void 0:r[e]):e(t,r),[e])}(m),[y,T]=(0,a.useReducer)(U,{options:[]}),R=y.options,[P,k]=z(),[O,S]=w(),A=(0,a.useRef)(null),D=(0,d.T)(A,t),M=function(e){let[t]=(0,a.useState)(e);return t}(b),[G,j]=function(e,t,r){let[n,o]=(0,a.useState)(r),u=void 0!==e,l=(0,a.useRef)(u),s=(0,a.useRef)(!1),c=(0,a.useRef)(!1);return!u||l.current||s.current?u||!l.current||c.current||(c.current=!0,l.current=u,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(s.current=!0,l.current=u,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[u?e:n,(0,i.z)(e=>(u||o(e),null==t?void 0:t(e)))]}(u,f,M),L=(0,a.useMemo)(()=>R.find(e=>!e.propsRef.current.disabled),[R]),V=(0,a.useMemo)(()=>R.some(e=>x(e.propsRef.current.value,G)),[R,G]),_=(0,i.z)(e=>{var t;if(v||x(e,G))return!1;let r=null==(t=R.find(t=>x(t.propsRef.current.value,e)))?void 0:t.propsRef.current;return(null==r||!r.disabled)&&(null==j||j(e),!0)}),$=(0,i.z)(e=>{let t=A.current;if(!t)return;let r=(0,C.r)(t),n=R.filter(e=>!1===e.propsRef.current.disabled).map(e=>e.element.current);switch(e.key){case F.R.Enter:!function(e){var t,r;let n=null!=(t=null==e?void 0:e.form)?t:e.closest("form");if(n){for(let t of n.elements)if(t!==e&&("INPUT"===t.tagName&&"submit"===t.type||"BUTTON"===t.tagName&&"submit"===t.type||"INPUT"===t.nodeName&&"image"===t.type)){t.click();return}null==(r=n.requestSubmit)||r.call(n)}}(e.currentTarget);break;case F.R.ArrowLeft:case F.R.ArrowUp:if(e.preventDefault(),e.stopPropagation(),(0,I.jA)(n,I.TO.Previous|I.TO.WrapAround)===I.fE.Success){let e=R.find(e=>e.element.current===(null==r?void 0:r.activeElement));e&&_(e.propsRef.current.value)}break;case F.R.ArrowRight:case F.R.ArrowDown:if(e.preventDefault(),e.stopPropagation(),(0,I.jA)(n,I.TO.Next|I.TO.WrapAround)===I.fE.Success){let e=R.find(e=>e.element.current===(null==r?void 0:r.activeElement));e&&_(e.propsRef.current.value)}break;case F.R.Space:{e.preventDefault(),e.stopPropagation();let t=R.find(e=>e.element.current===(null==r?void 0:r.activeElement));t&&_(t.propsRef.current.value)}}}),B=(0,i.z)(e=>(T({type:0,...e}),()=>T({type:1,id:e.id}))),H=(0,a.useMemo)(()=>({value:G,firstOption:L,containsCheckedOption:V,disabled:v,compare:x,...y}),[G,L,V,v,x,y]),W=(0,a.useMemo)(()=>({registerOption:B,change:_}),[B,_]),q=(0,a.useMemo)(()=>({value:G}),[G]),X=(0,a.useCallback)(()=>{if(void 0!==M)return _(M)},[_,M]);return a.createElement(S,{name:"RadioGroup.Description"},a.createElement(k,{name:"RadioGroup.Label"},a.createElement(Y.Provider,{value:W},a.createElement(N.Provider,{value:H},null!=c&&a.createElement(E,{disabled:v,data:{[c]:G||"on"},overrides:{type:"radio",checked:null!=G},form:s,onReset:X}),(0,g.sY)({ourProps:{ref:D,id:o,role:"radiogroup","aria-labelledby":P,"aria-describedby":O,onKeyDown:$},theirProps:h,slot:q,defaultTag:"div",name:"RadioGroup"})))))}),B=(0,g.yV)(function(e,t){var r;let n=V("RadioGroup.Option"),l=_("RadioGroup.Option"),f=(0,a.useId)(),{id:p=`headlessui-radiogroup-option-${f}`,value:m,disabled:v=n.disabled||!1,autoFocus:b=!1,...h}=e,x=(0,a.useRef)(null),y=(0,d.T)(x,t),[E,T]=z(),[R,P]=w(),I=(0,c.E)({value:m,disabled:v});(0,s.e)(()=>l.registerOption({id:p,element:x,propsRef:I}),[p,l,x,I]);let O=(0,i.z)(e=>{var t;if((0,k.P)(e.currentTarget))return e.preventDefault();l.change(m)&&(null==(t=x.current)||t.focus())}),C=(null==(r=n.firstOption)?void 0:r.id)===p,{isFocusVisible:S,focusProps:A}=(0,o.F)({autoFocus:b}),{isHovered:F,hoverProps:D}=(0,u.X)({isDisabled:v}),M=n.compare(n.value,m),G=(0,g.dG)({ref:y,id:p,role:"radio","aria-checked":M?"true":"false","aria-labelledby":E,"aria-describedby":R,"aria-disabled":!!v||void 0,tabIndex:v?-1:M||!n.containsCheckedOption&&C?0:-1,onClick:v?void 0:O,autoFocus:b},A,D),j=(0,a.useMemo)(()=>({checked:M,disabled:v,active:S,hover:F,focus:S,autofocus:b}),[M,v,F,S,b]);return a.createElement(P,{name:"RadioGroup.Description"},a.createElement(T,{name:"RadioGroup.Label"},(0,g.sY)({ourProps:G,theirProps:h,slot:j,defaultTag:"div",name:"RadioGroup.Option"})))}),H=(0,g.yV)(function(e,t){var r,n,l;let f=V("Radio"),m=_("Radio"),v=(0,a.useId)(),b=P(),h=p(),{id:x=b||`headlessui-radio-${v}`,value:y,disabled:E=f.disabled||h||!1,autoFocus:T=!1,...R}=e,I=(0,a.useRef)(null),O=(0,d.T)(I,t),C=M(),w=null!=(l=null==(n=(0,a.useContext)(S))?void 0:n.value)?l:void 0,A=(0,c.E)({value:y,disabled:E});(0,s.e)(()=>m.registerOption({id:x,element:I,propsRef:A}),[x,m,I,A]);let F=(0,i.z)(e=>{var t;if((0,k.P)(e.currentTarget))return e.preventDefault();m.change(y)&&(null==(t=I.current)||t.focus())}),{isFocusVisible:D,focusProps:z}=(0,o.F)({autoFocus:T}),{isHovered:G,hoverProps:j}=(0,u.X)({isDisabled:E}),L=(null==(r=f.firstOption)?void 0:r.id)===x,N=f.compare(f.value,y),Y=(0,g.dG)({ref:O,id:x,role:"radio","aria-checked":N?"true":"false","aria-labelledby":C,"aria-describedby":w,"aria-disabled":!!E||void 0,tabIndex:E?-1:N||!f.containsCheckedOption&&L?0:-1,autoFocus:T,onClick:E?void 0:F},z,j),U=(0,a.useMemo)(()=>({checked:N,disabled:E,hover:G,focus:D,autofocus:T}),[N,E,G,D,T]);return(0,g.sY)({ourProps:Y,theirProps:R,slot:U,defaultTag:"span",name:"Radio"})}),W=Object.assign($,{Option:B,Radio:H,Label:G,Description:A})},6447:function(e,t,r){let n,o,u;r.d(t,{OK:function(){return Y},v0:function(){return j},td:function(){return L},x4:function(){return V},nP:function(){return N}});var a=r(6117),l=r(3892),i=r(2265),s=r(4079),c=r(6584),d=r(1463),f=r(8703),p=r(5180),m=r(1469),v=r(9080);function b(e){let t,{onFocus:r}=e,[n,o]=(0,i.useState)(!0),u=(t=(0,i.useRef)(!1),(0,d.e)(()=>(t.current=!0,()=>{t.current=!1}),[]),t);return n?i.createElement(v._,{as:"button",type:"button",features:v.x.Focusable,onFocus:e=>{e.preventDefault();let t,n=50;t=requestAnimationFrame(function e(){if(n--<=0){t&&cancelAnimationFrame(t);return}if(r()){if(cancelAnimationFrame(t),!u.current)return;o(!1);return}t=requestAnimationFrame(e)})}}):null}var g=r(9309),h=r(5583),x=r(8043),y=r(1498),E=r(2642);let T=i.createContext(null);function R(e){let{children:t}=e,r=i.useRef({groups:new Map,get(e,t){var r;let n=this.groups.get(e);n||(n=new Map,this.groups.set(e,n));let o=null!=(r=n.get(t))?r:0;return n.set(t,o+1),[Array.from(n.keys()).indexOf(t),function(){let e=n.get(t);e>1?n.set(t,e-1):n.delete(t)}]}});return i.createElement(T.Provider,{value:r},t)}function P(e){let t=i.useContext(T);if(!t)throw Error("You must wrap your component in a <StableCollection>");let r=i.useId(),[n,o]=t.current.get(e,r);return i.useEffect(()=>o,[]),n}var k=r(7551),I=((n=I||{})[n.Forwards=0]="Forwards",n[n.Backwards=1]="Backwards",n),O=((o=O||{})[o.Less=-1]="Less",o[o.Equal=0]="Equal",o[o.Greater=1]="Greater",o),C=((u=C||{})[u.SetSelectedIndex=0]="SetSelectedIndex",u[u.RegisterTab=1]="RegisterTab",u[u.UnregisterTab=2]="UnregisterTab",u[u.RegisterPanel=3]="RegisterPanel",u[u.UnregisterPanel=4]="UnregisterPanel",u);let S={0(e,t){var r;let n=(0,g.z2)(e.tabs,e=>e.current),o=(0,g.z2)(e.panels,e=>e.current),u=n.filter(e=>{var t;return!(null!=(t=e.current)&&t.hasAttribute("disabled"))}),a={...e,tabs:n,panels:o};if(t.index<0||t.index>n.length-1){let r=(0,h.E)(Math.sign(t.index-e.selectedIndex),{[-1]:()=>1,0:()=>(0,h.E)(Math.sign(t.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});if(0===u.length)return a;let o=(0,h.E)(r,{0:()=>n.indexOf(u[0]),1:()=>n.indexOf(u[u.length-1])});return{...a,selectedIndex:-1===o?e.selectedIndex:o}}let l=n.slice(0,t.index),i=[...n.slice(t.index),...l].find(e=>u.includes(e));if(!i)return a;let s=null!=(r=n.indexOf(i))?r:e.selectedIndex;return -1===s&&(s=e.selectedIndex),{...a,selectedIndex:s}},1(e,t){if(e.tabs.includes(t.tab))return e;let r=e.tabs[e.selectedIndex],n=(0,g.z2)([...e.tabs,t.tab],e=>e.current),o=e.selectedIndex;return e.info.current.isControlled||-1===(o=n.indexOf(r))&&(o=e.selectedIndex),{...e,tabs:n,selectedIndex:o}},2:(e,t)=>({...e,tabs:e.tabs.filter(e=>e!==t.tab)}),3:(e,t)=>e.panels.includes(t.panel)?e:{...e,panels:(0,g.z2)([...e.panels,t.panel],e=>e.current)},4:(e,t)=>({...e,panels:e.panels.filter(e=>e!==t.panel)})},w=(0,i.createContext)(null);function A(e){let t=(0,i.useContext)(w);if(null===t){let t=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,A),t}return t}w.displayName="TabsDataContext";let F=(0,i.createContext)(null);function D(e){let t=(0,i.useContext)(F);if(null===t){let t=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,D),t}return t}function M(e,t){return(0,h.E)(t.type,S,e,t)}F.displayName="TabsActionsContext";let z=E.VN.RenderStrategy|E.VN.Static,G=(0,E.yV)(function(e,t){var r,n;let o=(0,i.useId)(),{id:u=`headlessui-tabs-tab-${o}`,disabled:f=!1,autoFocus:v=!1,...b}=e,{orientation:T,activation:R,selectedIndex:I,tabs:O,panels:C}=A("Tab"),S=D("Tab"),w=A("Tab"),F=(0,i.useRef)(null),M=(0,m.T)(F,t);(0,d.e)(()=>S.registerTab(F),[S,F]);let z=P("tabs"),G=O.indexOf(F);-1===G&&(G=z);let j=G===I,L=(0,c.z)(e=>{var t;let r=e();if(r===g.fE.Success&&"auto"===R){let e=null==(t=(0,y.r)(F))?void 0:t.activeElement,r=w.tabs.findIndex(t=>t.current===e);-1!==r&&S.change(r)}return r}),N=(0,c.z)(e=>{let t=O.map(e=>e.current).filter(Boolean);if(e.key===k.R.Space||e.key===k.R.Enter){e.preventDefault(),e.stopPropagation(),S.change(G);return}switch(e.key){case k.R.Home:case k.R.PageUp:return e.preventDefault(),e.stopPropagation(),L(()=>(0,g.jA)(t,g.TO.First));case k.R.End:case k.R.PageDown:return e.preventDefault(),e.stopPropagation(),L(()=>(0,g.jA)(t,g.TO.Last))}if(L(()=>(0,h.E)(T,{vertical:()=>e.key===k.R.ArrowUp?(0,g.jA)(t,g.TO.Previous|g.TO.WrapAround):e.key===k.R.ArrowDown?(0,g.jA)(t,g.TO.Next|g.TO.WrapAround):g.fE.Error,horizontal:()=>e.key===k.R.ArrowLeft?(0,g.jA)(t,g.TO.Previous|g.TO.WrapAround):e.key===k.R.ArrowRight?(0,g.jA)(t,g.TO.Next|g.TO.WrapAround):g.fE.Error}))===g.fE.Success)return e.preventDefault()}),V=(0,i.useRef)(!1),Y=(0,c.z)(()=>{var e;V.current||(V.current=!0,null==(e=F.current)||e.focus({preventScroll:!0}),S.change(G),(0,x.Y)(()=>{V.current=!1}))}),_=(0,c.z)(e=>{e.preventDefault()}),{isFocusVisible:U,focusProps:$}=(0,a.F)({autoFocus:v}),{isHovered:B,hoverProps:H}=(0,l.X)({isDisabled:f}),{pressed:W,pressProps:q}=(0,s.x)({disabled:f}),X=(0,i.useMemo)(()=>({selected:j,hover:B,active:W,focus:U,autofocus:v,disabled:f}),[j,B,U,W,v,f]),K=(0,E.dG)({ref:M,onKeyDown:N,onMouseDown:_,onClick:Y,id:u,role:"tab",type:(0,p.f)(e,F),"aria-controls":null==(n=null==(r=C[G])?void 0:r.current)?void 0:n.id,"aria-selected":j,tabIndex:j?0:-1,disabled:f||void 0,autoFocus:v},$,H,q);return(0,E.sY)({ourProps:K,theirProps:b,slot:X,defaultTag:"button",name:"Tabs.Tab"})}),j=(0,E.yV)(function(e,t){let{defaultIndex:r=0,vertical:n=!1,manual:o=!1,onChange:u,selectedIndex:a=null,...l}=e,s=n?"vertical":"horizontal",p=o?"manual":"auto",v=null!==a,h=(0,f.E)({isControlled:v}),x=(0,m.T)(t),[y,T]=(0,i.useReducer)(M,{info:h,selectedIndex:null!=a?a:r,tabs:[],panels:[]}),P=(0,i.useMemo)(()=>({selectedIndex:y.selectedIndex}),[y.selectedIndex]),k=(0,f.E)(u||(()=>{})),I=(0,f.E)(y.tabs),O=(0,i.useMemo)(()=>({orientation:s,activation:p,...y}),[s,p,y]),C=(0,c.z)(e=>(T({type:1,tab:e}),()=>T({type:2,tab:e}))),S=(0,c.z)(e=>(T({type:3,panel:e}),()=>T({type:4,panel:e}))),A=(0,c.z)(e=>{D.current!==e&&k.current(e),v||T({type:0,index:e})}),D=(0,f.E)(v?e.selectedIndex:y.selectedIndex),z=(0,i.useMemo)(()=>({registerTab:C,registerPanel:S,change:A}),[]);return(0,d.e)(()=>{T({type:0,index:null!=a?a:r})},[a]),(0,d.e)(()=>{if(void 0===D.current||y.tabs.length<=0)return;let e=(0,g.z2)(y.tabs,e=>e.current);e.some((e,t)=>y.tabs[t]!==e)&&A(e.indexOf(y.tabs[D.current]))}),i.createElement(R,null,i.createElement(F.Provider,{value:z},i.createElement(w.Provider,{value:O},O.tabs.length<=0&&i.createElement(b,{onFocus:()=>{var e,t;for(let r of I.current)if((null==(e=r.current)?void 0:e.tabIndex)===0)return null==(t=r.current)||t.focus(),!0;return!1}}),(0,E.sY)({ourProps:{ref:x},theirProps:l,slot:P,defaultTag:"div",name:"Tabs"}))))}),L=(0,E.yV)(function(e,t){let{orientation:r,selectedIndex:n}=A("Tab.List"),o=(0,m.T)(t),u=(0,i.useMemo)(()=>({selectedIndex:n}),[n]);return(0,E.sY)({ourProps:{ref:o,role:"tablist","aria-orientation":r},theirProps:e,slot:u,defaultTag:"div",name:"Tabs.List"})}),N=(0,E.yV)(function(e,t){let{selectedIndex:r}=A("Tab.Panels"),n=(0,m.T)(t),o=(0,i.useMemo)(()=>({selectedIndex:r}),[r]);return(0,E.sY)({ourProps:{ref:n},theirProps:e,slot:o,defaultTag:"div",name:"Tabs.Panels"})}),V=(0,E.yV)(function(e,t){var r,n,o,u;let l=(0,i.useId)(),{id:s=`headlessui-tabs-panel-${l}`,tabIndex:c=0,...f}=e,{selectedIndex:p,tabs:b,panels:g}=A("Tab.Panel"),h=D("Tab.Panel"),x=(0,i.useRef)(null),y=(0,m.T)(x,t);(0,d.e)(()=>h.registerPanel(x),[h,x]);let T=P("panels"),R=g.indexOf(x);-1===R&&(R=T);let k=R===p,{isFocusVisible:I,focusProps:O}=(0,a.F)(),C=(0,i.useMemo)(()=>({selected:k,focus:I}),[k,I]),S=(0,E.dG)({ref:y,id:s,role:"tabpanel","aria-labelledby":null==(n=null==(r=b[R])?void 0:r.current)?void 0:n.id,tabIndex:k?c:-1},O);return k||null!=(o=f.unmount)&&!o||null!=(u=f.static)&&u?(0,E.sY)({ourProps:S,theirProps:f,slot:C,defaultTag:"div",features:z,visible:k,name:"Tabs.Panel"}):i.createElement(v._,{as:"span","aria-hidden":"true",...S})}),Y=Object.assign(G,{Group:j,List:L,Panels:N,Panel:V})},8733:function(e,t,r){r.d(t,{Y:function(){return u}});var n=r(2265);r(9047);let o={some:0,all:1};function u(e,{root:t,margin:r,amount:u,once:a=!1}={}){let[l,i]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{if(!e.current||a&&l)return;let n={root:t&&t.current||void 0,margin:r,amount:u};return function(e,t,{root:r,margin:n,amount:u="some"}={}){var a;let l=("string"==typeof(a=e)?a=document.querySelectorAll(a):a instanceof Element&&(a=[a]),Array.from(a||[])),i=new WeakMap,s=new IntersectionObserver(e=>{e.forEach(e=>{let r=i.get(e.target);if(!!r!==e.isIntersecting){if(e.isIntersecting){let r=t(e);"function"==typeof r?i.set(e.target,r):s.unobserve(e.target)}else r&&(r(e),i.delete(e.target))}})},{root:r,rootMargin:n,threshold:"number"==typeof u?u:o[u]});return l.forEach(e=>s.observe(e)),()=>s.disconnect()}(e.current,()=>(i(!0),a?void 0:()=>i(!1)),n)},[t,e,r,a,u]),l}},5282:function(e,t,r){r.d(t,{c:function(){return l}});var n=r(2265),o=r(804),u=r(9791),a=r(458);function l(e){let t=(0,a.h)(()=>(0,o.BX)(e)),{isStatic:r}=(0,n.useContext)(u._);if(r){let[,r]=(0,n.useState)(e);(0,n.useEffect)(()=>t.on("change",r),[])}return t}}}]);