"use strict";(()=>{var M,a,xe,ht,H,Ee,ge,Se,j={},Pe=[],dt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function U(e,t){for(var n in t)e[n]=t[n];return e}function Ae(e){var t=e.parentNode;t&&t.removeChild(e)}function g(e,t,n){var r,i,o,u={};for(o in t)o=="key"?r=t[o]:o=="ref"?i=t[o]:u[o]=t[o];if(arguments.length>2&&(u.children=arguments.length>3?M.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)u[o]===void 0&&(u[o]=e.defaultProps[o]);return T(e,u,r,i,null)}function T(e,t,n,r,i){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++xe};return i==null&&a.vnode!=null&&a.vnode(o),o}function X(){return{current:null}}function A(e){return e.children}function b(e,t){this.props=e,this.context=t}function R(e,t){if(t==null)return e.__?R(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?R(e):null}function Ue(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Ue(e)}}function Q(e){(!e.__d&&(e.__d=!0)&&H.push(e)&&!z.__r++||ge!==a.debounceRendering)&&((ge=a.debounceRendering)||Ee)(z)}function z(){for(var e;z.__r=H.length;)e=H.sort(function(t,n){return t.__v.__b-n.__v.__b}),H=[],e.some(function(t){var n,r,i,o,u,s;t.__d&&(u=(o=(n=t).__v).__e,(s=n.__P)&&(r=[],(i=U({},o)).__v=o.__v+1,ee(s,o,i,n.__n,s.ownerSVGElement!==void 0,o.__h!=null?[u]:null,r,u??R(o),o.__h),Oe(r,o),o.__e!=u&&Ue(o)))})}function we(e,t,n,r,i,o,u,s,p,h){var _,d,c,l,f,S,v,y=r&&r.__k||Pe,P=y.length;for(n.__k=[],_=0;_<t.length;_++)if((l=n.__k[_]=(l=t[_])==null||typeof l=="boolean"?null:typeof l=="string"||typeof l=="number"||typeof l=="bigint"?T(null,l,null,null,l):Array.isArray(l)?T(A,{children:l},null,null,null):l.__b>0?T(l.type,l.props,l.key,null,l.__v):l)!=null){if(l.__=n,l.__b=n.__b+1,(c=y[_])===null||c&&l.key==c.key&&l.type===c.type)y[_]=void 0;else for(d=0;d<P;d++){if((c=y[d])&&l.key==c.key&&l.type===c.type){y[d]=void 0;break}c=null}ee(e,l,c=c||j,i,o,u,s,p,h),f=l.__e,(d=l.ref)&&c.ref!=d&&(v||(v=[]),c.ref&&v.push(c.ref,null,l),v.push(d,l.__c||f,l)),f!=null?(S==null&&(S=f),typeof l.type=="function"&&l.__k===c.__k?l.__d=p=Ne(l,p,e):p=Re(e,l,c,y,f,p),typeof n.type=="function"&&(n.__d=p)):p&&c.__e==p&&p.parentNode!=e&&(p=R(c))}for(n.__e=S,_=P;_--;)y[_]!=null&&(typeof n.type=="function"&&y[_].__e!=null&&y[_].__e==n.__d&&(n.__d=R(r,_+1)),We(y[_],y[_]));if(v)for(_=0;_<v.length;_++)Le(v[_],v[++_],v[++_])}function Ne(e,t,n){for(var r,i=e.__k,o=0;i&&o<i.length;o++)(r=i[o])&&(r.__=e,t=typeof r.type=="function"?Ne(r,t,n):Re(n,r,r,i,r.__e,t));return t}function k(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){k(n,t)}):t.push(e)),t}function Re(e,t,n,r,i,o){var u,s,p;if(t.__d!==void 0)u=t.__d,t.__d=void 0;else if(n==null||i!=o||i.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(i),u=null;else{for(s=o,p=0;(s=s.nextSibling)&&p<r.length;p+=2)if(s==i)break e;e.insertBefore(i,o),u=o}return u!==void 0?u:i.nextSibling}function vt(e,t,n,r,i){var o;for(o in n)o==="children"||o==="key"||o in t||q(e,o,null,n[o],r);for(o in t)i&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===t[o]||q(e,o,t[o],n[o],r)}function Ce(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||dt.test(t)?n:n+"px"}function q(e,t,n,r,i){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Ce(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||Ce(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r||e.addEventListener(t,o?ke:be,o):e.removeEventListener(t,o?ke:be,o);else if(t!=="dangerouslySetInnerHTML"){if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function be(e){this.l[e.type+!1](a.event?a.event(e):e)}function ke(e){this.l[e.type+!0](a.event?a.event(e):e)}function ee(e,t,n,r,i,o,u,s,p){var h,_,d,c,l,f,S,v,y,P,D,ye,$,E=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(p=n.__h,s=t.__e=n.__e,t.__h=null,o=[s]),(h=a.__b)&&h(t);try{e:if(typeof E=="function"){if(v=t.props,y=(h=E.contextType)&&r[h.__c],P=h?y?y.props.value:h.__:r,n.__c?S=(_=t.__c=n.__c).__=_.__E:("prototype"in E&&E.prototype.render?t.__c=_=new E(v,P):(t.__c=_=new b(v,P),_.constructor=E,_.render=yt),y&&y.sub(_),_.props=v,_.state||(_.state={}),_.context=P,_.__n=r,d=_.__d=!0,_.__h=[]),_.__s==null&&(_.__s=_.state),E.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=U({},_.__s)),U(_.__s,E.getDerivedStateFromProps(v,_.__s))),c=_.props,l=_.state,d)E.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(E.getDerivedStateFromProps==null&&v!==c&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(v,P),!_.__e&&_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(v,_.__s,P)===!1||t.__v===n.__v){_.props=v,_.state=_.__s,t.__v!==n.__v&&(_.__d=!1),_.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(B){B&&(B.__=t)}),_.__h.length&&u.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(v,_.__s,P),_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(c,l,f)})}if(_.context=P,_.props=v,_.__v=t,_.__P=e,D=a.__r,ye=0,"prototype"in E&&E.prototype.render)_.state=_.__s,_.__d=!1,D&&D(t),h=_.render(_.props,_.state,_.context);else do _.__d=!1,D&&D(t),h=_.render(_.props,_.state,_.context),_.state=_.__s;while(_.__d&&++ye<25);_.state=_.__s,_.getChildContext!=null&&(r=U(U({},r),_.getChildContext())),d||_.getSnapshotBeforeUpdate==null||(f=_.getSnapshotBeforeUpdate(c,l)),$=h!=null&&h.type===A&&h.key==null?h.props.children:h,we(e,Array.isArray($)?$:[$],t,n,r,i,o,u,s,p),_.base=t.__e,t.__h=null,_.__h.length&&u.push(_),S&&(_.__E=_.__=null),_.__e=!1}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=mt(n.__e,t,n,r,i,o,u,p);(h=a.diffed)&&h(t)}catch(B){t.__v=null,(p||o!=null)&&(t.__e=s,t.__h=!!p,o[o.indexOf(s)]=null),a.__e(B,t,n)}}function Oe(e,t){a.__c&&a.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){a.__e(r,n.__v)}})}function mt(e,t,n,r,i,o,u,s){var p,h,_,d=n.props,c=t.props,l=t.type,f=0;if(l==="svg"&&(i=!0),o!=null){for(;f<o.length;f++)if((p=o[f])&&"setAttribute"in p==!!l&&(l?p.localName===l:p.nodeType===3)){e=p,o[f]=null;break}}if(e==null){if(l===null)return document.createTextNode(c);e=i?document.createElementNS("http://www.w3.org/2000/svg",l):document.createElement(l,c.is&&c),o=null,s=!1}if(l===null)d===c||s&&e.data===c||(e.data=c);else{if(o=o&&M.call(e.childNodes),h=(d=n.props||j).dangerouslySetInnerHTML,_=c.dangerouslySetInnerHTML,!s){if(o!=null)for(d={},f=0;f<e.attributes.length;f++)d[e.attributes[f].name]=e.attributes[f].value;(_||h)&&(_&&(h&&_.__html==h.__html||_.__html===e.innerHTML)||(e.innerHTML=_&&_.__html||""))}if(vt(e,c,d,i,s),_)t.__k=[];else if(f=t.props.children,we(e,Array.isArray(f)?f:[f],t,n,r,i&&l!=="foreignObject",o,u,o?o[0]:n.__k&&R(n,0),s),o!=null)for(f=o.length;f--;)o[f]!=null&&Ae(o[f]);s||("value"in c&&(f=c.value)!==void 0&&(f!==e.value||l==="progress"&&!f||l==="option"&&f!==d.value)&&q(e,"value",f,d.value,!1),"checked"in c&&(f=c.checked)!==void 0&&f!==e.checked&&q(e,"checked",f,d.checked,!1))}return e}function Le(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){a.__e(r,n)}}function We(e,t,n){var r,i;if(a.unmount&&a.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Le(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){a.__e(o,t)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&We(r[i],t,typeof e.type!="function");n||e.__e==null||Ae(e.__e),e.__e=e.__d=void 0}function yt(e,t,n){return this.constructor(e,n)}function O(e,t,n){var r,i,o;a.__&&a.__(e,t),i=(r=typeof n=="function")?null:n&&n.__k||t.__k,o=[],ee(t,e=(!r&&n||t).__k=g(A,null,[e]),i||j,j,t.ownerSVGElement!==void 0,!r&&n?[n]:i?null:t.firstChild?M.call(t.childNodes):null,o,!r&&n?n:i?i.__e:t.firstChild,r),Oe(o,e)}function te(e,t){O(e,t,te)}function K(e,t,n){var r,i,o,u=U({},e.props);for(o in t)o=="key"?r=t[o]:o=="ref"?i=t[o]:u[o]=t[o];return arguments.length>2&&(u.children=arguments.length>3?M.call(arguments,2):n),T(e.type,u,r||e.key,i||e.ref,null)}function w(e,t){var n={__c:t="__cC"+Se++,__:e,Consumer:function(r,i){return r.children(i)},Provider:function(r){var i,o;return this.getChildContext||(i=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(u){this.props.value!==u.value&&i.some(Q)},this.sub=function(u){i.push(u);var s=u.componentWillUnmount;u.componentWillUnmount=function(){i.splice(i.indexOf(u),1),s&&s.call(u)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}M=Pe.slice,a={__e:function(e,t,n,r){for(var i,o,u;t=t.__;)if((i=t.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(e)),u=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),u=i.__d),u)return i.__E=i}catch(s){e=s}throw e}},xe=0,ht=function(e){return e!=null&&e.constructor===void 0},b.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=U({},this.state),typeof e=="function"&&(e=e(U({},n),this.props)),e&&U(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),Q(this))},b.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Q(this))},b.prototype.render=A,H=[],Ee=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,z.__r=0,Se=0;var W,m,ne,De,L=0,$e=[],G=[],He=a.__b,Te=a.__r,Me=a.diffed,Fe=a.__c,Ie=a.unmount;function F(e,t){a.__h&&a.__h(m,e,L||t),L=0;var n=m.__H||(m.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:G}),n.__[e]}function oe(e){return L=1,_e(Ke,e)}function _e(e,t,n){var r=F(W++,2);return r.t=e,r.__c||(r.__=[n?n(t):Ke(void 0,t),function(i){var o=r.t(r.__[0],i);r.__[0]!==o&&(r.__=[o,r.__[1]],r.__c.setState({}))}],r.__c=m),r.__}function ie(e,t){var n=F(W++,3);!a.__s&&le(n.__H,t)&&(n.__=e,n.u=t,m.__H.__h.push(n))}function ue(e,t){var n=F(W++,4);!a.__s&&le(n.__H,t)&&(n.__=e,n.u=t,m.__h.push(n))}function Be(e){return L=5,Z(function(){return{current:e}},[])}function je(e,t,n){L=6,ue(function(){return typeof e=="function"?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0},n==null?n:n.concat(e))}function Z(e,t){var n=F(W++,7);return le(n.__H,t)?(n.__V=e(),n.u=t,n.__h=e,n.__V):n.__}function ze(e,t){return L=8,Z(function(){return e},t)}function ae(e){var t=m.context[e.__c],n=F(W++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(m)),t.props.value):e.__}function qe(e,t){a.useDebugValue&&a.useDebugValue(t?t(e):e)}function gt(){for(var e;e=$e.shift();)if(e.__P)try{e.__H.__h.forEach(Y),e.__H.__h.forEach(re),e.__H.__h=[]}catch(t){e.__H.__h=[],a.__e(t,e.__v)}}a.__b=function(e){m=null,He&&He(e)},a.__r=function(e){Te&&Te(e),W=0;var t=(m=e.__c).__H;t&&(ne===m?(t.__h=[],m.__h=[],t.__.forEach(function(n){n.__V=G,n.u=void 0})):(t.__h.forEach(Y),t.__h.forEach(re),t.__h=[])),ne=m},a.diffed=function(e){Me&&Me(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&($e.push(t)!==1&&De===a.requestAnimationFrame||((De=a.requestAnimationFrame)||function(n){var r,i=function(){clearTimeout(o),Ve&&cancelAnimationFrame(r),setTimeout(n)},o=setTimeout(i,100);Ve&&(r=requestAnimationFrame(i))})(gt)),t.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.__V!==G&&(n.__=n.__V),n.u=void 0,n.__V=G})),ne=m=null},a.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Y),n.__h=n.__h.filter(function(r){return!r.__||re(r)})}catch(r){t.some(function(i){i.__h&&(i.__h=[])}),t=[],a.__e(r,n.__v)}}),Fe&&Fe(e,t)},a.unmount=function(e){Ie&&Ie(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{Y(r)}catch(i){t=i}}),t&&a.__e(t,n.__v))};var Ve=typeof requestAnimationFrame=="function";function Y(e){var t=m,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),m=t}function re(e){var t=m;e.__c=e.__(),m=t}function le(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Ke(e,t){return typeof t=="function"?t(e):t}function nt(e,t){for(var n in t)e[n]=t[n];return e}function ce(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function se(e){this.props=e}function Ct(e,t){function n(i){var o=this.props.ref,u=o==i.ref;return!u&&o&&(o.call?o(null):o.current=null),t?!t(this.props,i)||!u:ce(this.props,i)}function r(i){return this.shouldComponentUpdate=n,g(e,i)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(se.prototype=new b).isPureReactComponent=!0,se.prototype.shouldComponentUpdate=function(e,t){return ce(this.props,e)||ce(this.state,t)};var Ge=a.__b;a.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Ge&&Ge(e)};var bt=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function kt(e){function t(n){var r=nt({},n);return delete r.ref,e(r,n.ref||null)}return t.$$typeof=bt,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var Ye=function(e,t){return e==null?null:k(k(e).map(t))},xt={map:Ye,forEach:Ye,count:function(e){return e?k(e).length:0},only:function(e){var t=k(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:k},Et=a.__e;a.__e=function(e,t,n,r){if(e.then){for(var i,o=t;o=o.__;)if((i=o.__c)&&i.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),i.__c(e,t)}Et(e,t,n,r)};var Ze=a.unmount;function J(){this.__u=0,this.t=null,this.__b=null}function rt(e){var t=e.__.__c;return t&&t.__e&&t.__e(e)}function St(e){var t,n,r;function i(o){if(t||(t=e()).then(function(u){n=u.default||u},function(u){r=u}),r)throw r;if(!n)throw t;return g(n,o)}return i.displayName="Lazy",i.__f=!0,i}function I(){this.u=null,this.o=null}a.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),Ze&&Ze(e)},(J.prototype=new b).__c=function(e,t){var n=t.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var i=rt(r.__v),o=!1,u=function(){o||(o=!0,n.__R=null,i?i(s):s())};n.__R=u;var s=function(){if(!--r.__u){if(r.state.__e){var h=r.state.__e;r.__v.__k[0]=function d(c,l,f){return c&&(c.__v=null,c.__k=c.__k&&c.__k.map(function(S){return d(S,l,f)}),c.__c&&c.__c.__P===l&&(c.__e&&f.insertBefore(c.__e,c.__d),c.__c.__e=!0,c.__c.__P=f)),c}(h,h.__c.__P,h.__c.__O)}var _;for(r.setState({__e:r.__b=null});_=r.t.pop();)_.forceUpdate()}},p=t.__h===!0;r.__u++||p||r.setState({__e:r.__b=r.__v.__k[0]}),e.then(u,u)},J.prototype.componentWillUnmount=function(){this.t=[]},J.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function o(u,s,p){return u&&(u.__c&&u.__c.__H&&(u.__c.__H.__.forEach(function(h){typeof h.__c=="function"&&h.__c()}),u.__c.__H=null),(u=nt({},u)).__c!=null&&(u.__c.__P===p&&(u.__c.__P=s),u.__c=null),u.__k=u.__k&&u.__k.map(function(h){return o(h,s,p)})),u}(this.__b,n,r.__O=r.__P)}this.__b=null}var i=t.__e&&g(A,null,e.fallback);return i&&(i.__h=null),[g(A,null,t.__e?null:e.children),i]};var Je=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};function Pt(e){return this.getChildContext=function(){return e.context},e.children}function At(e){var t=this,n=e.i;t.componentWillUnmount=function(){O(null,t.l),t.l=null,t.i=null},t.i&&t.i!==n&&t.componentWillUnmount(),e.__v?(t.l||(t.i=n,t.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),t.i.appendChild(r)},insertBefore:function(r,i){this.childNodes.push(r),t.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),t.i.removeChild(r)}}),O(g(Pt,{context:t.context},e.__v),t.l)):t.l&&t.componentWillUnmount()}function Ut(e,t){var n=g(At,{__v:e,i:t});return n.containerInfo=t,n}(I.prototype=new b).__e=function(e){var t=this,n=rt(t.__v),r=t.o.get(e);return r[0]++,function(i){var o=function(){t.props.revealOrder?(r.push(i),Je(t,e,r)):i()};n?n(o):o()}},I.prototype.render=function(e){this.u=null,this.o=new Map;var t=k(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},I.prototype.componentDidUpdate=I.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){Je(e,n,t)})};var ot=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,wt=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|shape|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Nt=typeof document<"u",Rt=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};function fe(e,t,n){return t.__k==null&&(t.textContent=""),O(e,t),typeof n=="function"&&n(),e?e.__c:null}function Ot(e,t,n){return te(e,t),typeof n=="function"&&n(),e?e.__c:null}b.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(b.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Qe=a.event;function Lt(){}function Wt(){return this.cancelBubble}function Dt(){return this.defaultPrevented}a.event=function(e){return Qe&&(e=Qe(e)),e.persist=Lt,e.isPropagationStopped=Wt,e.isDefaultPrevented=Dt,e.nativeEvent=e};var _t,Xe={configurable:!0,get:function(){return this.class}},et=a.vnode;a.vnode=function(e){var t=e.type,n=e.props,r=n;if(typeof t=="string"){var i=t.indexOf("-")===-1;for(var o in r={},n){var u=n[o];Nt&&o==="children"&&t==="noscript"||o==="value"&&"defaultValue"in n&&u==null||(o==="defaultValue"&&"value"in n&&n.value==null?o="value":o==="download"&&u===!0?u="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+t)&&!Rt(n.type)?o="oninput":/^onfocus$/i.test(o)?o="onfocusin":/^onblur$/i.test(o)?o="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o)?o=o.toLowerCase():i&&wt.test(o)?o=o.replace(/[A-Z0-9]/,"-$&").toLowerCase():u===null&&(u=void 0),/^oninput$/i.test(o)&&(o=o.toLowerCase(),r[o]&&(o="oninputCapture")),r[o]=u)}t=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=k(n.children).forEach(function(s){s.props.selected=r.value.indexOf(s.props.value)!=-1})),t=="select"&&r.defaultValue!=null&&(r.value=k(n.children).forEach(function(s){s.props.selected=r.multiple?r.defaultValue.indexOf(s.props.value)!=-1:r.defaultValue==s.props.value})),e.props=r,n.class!=n.className&&(Xe.enumerable="className"in n,n.className!=null&&(r.class=n.className),Object.defineProperty(r,"className",Xe))}e.$$typeof=ot,et&&et(e)};var tt=a.__r;a.__r=function(e){tt&&tt(e),_t=e.__c};var Ht={ReactCurrentDispatcher:{current:{readContext:function(e){return _t.__n[e.__c].props.value}}}};function Tt(e){return g.bind(null,e)}function it(e){return!!e&&e.$$typeof===ot}function Mt(e){return it(e)?K.apply(null,arguments):e}function Ft(e){return!!e.__k&&(O(null,e),!0)}function It(e){return e&&(e.base||e.nodeType===1&&e)||null}var Vt=function(e,t){return e(t)},$t=function(e,t){return e(t)};var C={useState:oe,useReducer:_e,useEffect:ie,useLayoutEffect:ue,useRef:Be,useImperativeHandle:je,useMemo:Z,useCallback:ze,useContext:ae,useDebugValue:qe,version:"17.0.2",Children:xt,render:fe,hydrate:Ot,unmountComponentAtNode:Ft,createPortal:Ut,createElement:g,createContext:w,createFactory:Tt,cloneElement:Mt,createRef:X,Fragment:A,isValidElement:it,findDOMNode:It,Component:b,PureComponent:se,memo:Ct,forwardRef:kt,flushSync:$t,unstable_batchedUpdates:Vt,StrictMode:A,Suspense:J,SuspenseList:I,lazy:St,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Ht};var Bt={};function V(e,t){for(var n in t)e[n]=t[n];return e}function jt(e,t,n){var r,i=/(?:\?([^#]*))?(#.*)?$/,o=e.match(i),u={};if(o&&o[1])for(var s=o[1].split("&"),p=0;p<s.length;p++){var h=s[p].split("=");u[decodeURIComponent(h[0])]=decodeURIComponent(h.slice(1).join("="))}e=pe(e.replace(i,"")),t=pe(t||"");for(var _=Math.max(e.length,t.length),d=0;d<_;d++)if(t[d]&&t[d].charAt(0)===":"){var c=t[d].replace(/(^:|[+*?]+$)/g,""),l=(t[d].match(/[+*?]+$/)||Bt)[0]||"",f=~l.indexOf("+"),S=~l.indexOf("*"),v=e[d]||"";if(!v&&!S&&(l.indexOf("?")<0||f)){r=!1;break}if(u[c]=decodeURIComponent(v),f||S){u[c]=e.slice(d).map(decodeURIComponent).join("/");break}}else if(t[d]!==e[d]){r=!1;break}return(n.default===!0||r!==!1)&&u}function zt(e,t){return e.rank<t.rank?1:e.rank>t.rank?-1:e.index-t.index}function qt(e,t){return e.index=t,e.rank=function(n){return n.props.default?0:pe(n.props.path).map(Kt).join("")}(e),e.props}function pe(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function Kt(e){return e.charAt(0)==":"?1+"*+?".indexOf(e.charAt(e.length-1))||4:5}var Gt={},N=[],ut=[],x=null,lt={url:he()},Yt=w(lt);function he(){var e;return""+((e=x&&x.location?x.location:x&&x.getCurrentLocation?x.getCurrentLocation():typeof location<"u"?location:Gt).pathname||"")+(e.search||"")}function Zt(e,t){return t===void 0&&(t=!1),typeof e!="string"&&e.url&&(t=e.replace,e=e.url),function(n){for(var r=N.length;r--;)if(N[r].canRoute(n))return!0;return!1}(e)&&function(n,r){r===void 0&&(r="push"),x&&x[r]?x[r](n):typeof history<"u"&&history[r+"State"]&&history[r+"State"](null,null,n)}(e,t?"replace":"push"),ct(e)}function ct(e){for(var t=!1,n=0;n<N.length;n++)N[n].routeTo(e)&&(t=!0);return t}function Jt(e){if(e&&e.getAttribute){var t=e.getAttribute("href"),n=e.getAttribute("target");if(t&&t.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return Zt(t)}}function Qt(e){return e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault(),!1}function st(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||e.button)){var t=e.target;do if(t.localName==="a"&&t.getAttribute("href")){if(t.hasAttribute("data-native")||t.hasAttribute("native"))return;if(Jt(t))return Qt(e)}while(t=t.parentNode)}}var at=!1;function de(e){e.history&&(x=e.history),this.state={url:e.url||he()}}V(de.prototype=new b,{shouldComponentUpdate:function(e){return e.static!==!0||e.url!==this.props.url||e.onChange!==this.props.onChange},canRoute:function(e){var t=k(this.props.children);return this.g(t,e)!==void 0},routeTo:function(e){this.setState({url:e});var t=this.canRoute(e);return this.p||this.forceUpdate(),t},componentWillMount:function(){this.p=!0},componentDidMount:function(){var e=this;at||(at=!0,x||addEventListener("popstate",function(){ct(he())}),addEventListener("click",st)),N.push(this),x&&(this.u=x.listen(function(t){var n=t.location||t;e.routeTo(""+(n.pathname||"")+(n.search||""))})),this.p=!1},componentWillUnmount:function(){typeof this.u=="function"&&this.u(),N.splice(N.indexOf(this),1)},componentWillUpdate:function(){this.p=!0},componentDidUpdate:function(){this.p=!1},g:function(e,t){e=e.filter(qt).sort(zt);for(var n=0;n<e.length;n++){var r=e[n],i=jt(t,r.props.path,r.props);if(i)return[r,i]}},render:function(e,t){var n,r,i=e.onChange,o=t.url,u=this.c,s=this.g(k(e.children),o);if(s&&(r=K(s[0],V(V({url:o,matches:n=s[1]},n),{key:void 0,ref:void 0}))),o!==(u&&u.url)){V(lt,u=this.c={url:o,previous:u&&u.url,current:r,path:r?r.props.path:null,matches:n}),u.router=this,u.active=r?[r]:[];for(var p=ut.length;p--;)ut[p]({});typeof i=="function"&&i(u)}return g(Yt.Provider,{value:u},r)}});var ve=function(e){return g("a",V({onClick:st},e))},me=function(e){return g(e.component,e)};var Xt=w({}),ft=({children:e,url:t})=>{let n=new WebSocket(t);return C.createElement(Xt.Provider,{value:{}},e)};function pt(){return C.createElement(ft,{url:"ws://127.0.0.1:3333"},C.createElement(de,null,C.createElement(me,{path:"/",component:()=>C.createElement("div",null,C.createElement(ve,{href:"/df"},C.createElement("h1",null,"homepage")))}),C.createElement(me,{default:!0,component:()=>C.createElement("div",null,C.createElement(ve,{href:"/home"},C.createElement("h1",null,"homepage")))})))}fe(C.createElement(pt,null),document.getElementById("app"));})();
