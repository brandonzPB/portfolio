(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"8+s/":function(e,t,n){"use strict";var a,r=n("q1tI"),i=(a=r)&&"object"==typeof a&&"default"in a?a.default:a;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(a){if("function"!=typeof a)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function u(){c=e(s.map((function(e){return e.props}))),d.canUseDOM?t(c):n&&(c=n(c))}var d=function(e){var t,n;function r(){return e.apply(this,arguments)||this}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.peek=function(){return c},r.rewind=function(){if(r.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var o=r.prototype;return o.UNSAFE_componentWillMount=function(){s.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},o.render=function(){return i.createElement(a,this.props)},r}(r.PureComponent);return o(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(a)+")"),o(d,"canUseDOM",l),d}}},Bl7J:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("Wbzz"),o=n("+HZG"),l=n("9eSz"),c=n.n(l),s=n("vOnD"),u=n("2a4S"),d=(n("9veM"),n("B1U6"),n("K7oo"),function(){var e=Object(i.useStaticQuery)("1346730006"),t={key:0,fluid:e.allFile.edges[0].node.childImageSharp.fluid,src:e.allFile.edges[0].node.childImageSharp.fluid.src};return r.a.createElement(m,null,r.a.createElement(p,null,r.a.createElement(u.a,null),r.a.createElement(f,null,r.a.createElement("div",{id:"desktop"},r.a.createElement("h3",null,"Oh hello, I'm Brandon. "),r.a.createElement("h3",null,"Full-Stack ",r.a.createElement("span",{className:"gold-text"},"Developer")),r.a.createElement("h3",null,"and Life-Long Learner")),r.a.createElement("div",{id:"mobile"},r.a.createElement("h3",null,"Oh hello, I'm Brandon. Full-Stack ",r.a.createElement("span",{className:"gold-text"},"Developer")," and Life-Long Learner"))),r.a.createElement(h,null,r.a.createElement(y,{fluid:t.fluid,alt:"Picture of me (a bald man) in a suit"})),r.a.createElement(g,null,r.a.createElement(b,null,r.a.createElement("p",null,"I am a 22 year-old passionate Stoic who loves using code to create solutions and build useful, elegant, and enjoyable experiences. ",r.a.createElement("br",null),r.a.createElement("br",null),"To me, code is like an infinite pile of legos with each piece being made at the will of my imagination. (inspired by V. Anton Spraul)")),r.a.createElement(E,null,r.a.createElement("p",null,"Aside from studying economics and data science at UCLA, I've used most of my free time to study, practice, and build as much as I possibly can with code.")))))}),m=s.b.div.withConfig({displayName:"Header__HeaderContainer",componentId:"sc-9eu2yh-0"})(["margin:3rem auto 0 auto;display:block;text-align:center;width:70%;@media screen and (max-width:500px){width:80%;}"]),p=s.b.div.withConfig({displayName:"Header__HeaderContent",componentId:"sc-9eu2yh-1"})([""]),f=s.b.div.withConfig({displayName:"Header__TextContainer",componentId:"sc-9eu2yh-2"})(["@keyframes fadein{from{opacity:0;translateY(-30px);}to{opacity:1;translateY(30px);}}text-align:left;margin:0 2rem;font-size:2rem;font-family:'Playfair Display',sans-serif;color:#36434d;h3{animation:fadein 2s;}#mobile{display:none;}.gold-text{color:#fecc27;}@media screen and (max-width:700px){font-size:1.25rem;margin:0 auto;width:auto;#desktop{display:none;}#mobile{display:block;width:110%;padding:0;}}"]),h=s.b.div.withConfig({displayName:"Header__ImageContainer",componentId:"sc-9eu2yh-3"})(["display:block;margin:2rem auto;h3{font-size:0.75rem;color:#828282;font-family:'Open Sans',sans-serif;}"]),y=Object(s.b)(c.a).withConfig({displayName:"Header__Image",componentId:"sc-9eu2yh-4"})(["height:50%;width:50%;margin:0 auto;@media screen and (max-width:500px){width:100%;}"]),g=s.b.div.withConfig({displayName:"Header__DetailsContainer",componentId:"sc-9eu2yh-5"})(["margin:2rem auto;display:grid;grid-template-columns:1fr 1fr;width:100%;color:#828282;@media screen and (max-width:700px){grid-template-columns:1fr;font-size:1.25rem;display:flex;align-items:center;justify-content:center;flex-direction:column;flex-wrap:wrap;flex:1;text-align:left;}"]),b=s.b.div.withConfig({displayName:"Header__ColOne",componentId:"sc-9eu2yh-6"})(["display:block;margin:0 auto;height:100%;padding:0 2rem;line-height:1.5rem;font-family:'Open Sans',sans-serif;text-align:left;@media screen and (max-width:700px){padding:0;width:100%;}"]),E=s.b.div.withConfig({displayName:"Header__ColTwo",componentId:"sc-9eu2yh-7"})(["display:block;margin:0 auto;height:100%;padding:0 2rem;line-height:1.5rem;font-family:'Open Sans',sans-serif;text-align:left;@media screen and (max-width:700px){padding:0;margin-top:1.5rem;width:100%;}"]),w=n("KQm4"),v=n("R77S"),T=n("LjP0"),x=n("Lnxd");function C(e){return Object(x.a)({tag:"svg",attr:{viewBox:"0 0 8 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"}}]})(e)}var S=n("tjd4"),O=function(){var e=Object(i.useStaticQuery)("372466766"),t=Object(w.a)(e.allFile.edges);return r.a.createElement(N,null,r.a.createElement(A,null,r.a.createElement("h1",null,"My Skills"),r.a.createElement(j,null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(v.e,{id:"react",className:"icon"}),r.a.createElement(S.b,{className:"list-type"}),r.a.createElement("span",{className:"list-text"},"React (JavaScript and TypeScript)")),r.a.createElement("li",null,r.a.createElement(T.g,{id:"redux",className:"icon"}),r.a.createElement(S.b,{className:"list-type"}),r.a.createElement("span",{className:"list-text"},"React Context API")),r.a.createElement("li",null,r.a.createElement(T.a,{id:"gatsby",className:"icon"}),r.a.createElement(S.b,{className:"list-type"}),r.a.createElement("span",{className:"list-text"},"Gatsby Styled Components")),r.a.createElement("li",null,r.a.createElement(T.b,{id:"graphql",className:"icon"}),r.a.createElement(S.b,{className:"list-type"}),r.a.createElement("span",{className:"list-text"},"GraphQL"))),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(v.a,{id:"bootstrap",className:"icon"}),r.a.createElement(S.b,{className:"list-type"}),r.a.createElement("span",{className:"list-text"},"Bootstrap")),r.a.createElement("li",null,r.a.createElement(v.f,{id:"sass",className:"icon"}),r.a.createElement(S.b,{className:"list-type"}),r.a.createElement("span",{className:"list-text"},"Sass")),r.a.createElement("li",null,r.a.createElement(v.b,{id:"html",className:"icon"}),r.a.createElement(S.b,{className:"list-type"}),r.a.createElement("span",{className:"list-text"},"HTML5")),r.a.createElement("li",null,r.a.createElement(v.c,{id:"node",className:"icon"}),r.a.createElement(S.b,{className:"list-type"}),r.a.createElement("span",{className:"list-text"},"NodeJS"))),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(C,{id:"express",className:"icon"}),r.a.createElement(S.b,{className:"list-type"}),r.a.createElement("span",{className:"list-text"},"Express")),r.a.createElement("li",null,r.a.createElement(T.e,{id:"mongo",className:"icon"}),r.a.createElement(S.b,{className:"list-type"}),r.a.createElement("span",{className:"list-text"},"MongoDB (NoSQL)")),r.a.createElement("li",null,r.a.createElement(T.d,{id:"jest",className:"icon"}),r.a.createElement(S.b,{className:"list-type"}),r.a.createElement("span",{className:"list-text"},"Jest")),r.a.createElement("li",null,r.a.createElement(T.f,{id:"python",className:"icon"}),r.a.createElement(S.b,{className:"list-type"}),r.a.createElement("span",{className:"list-text"},"Python"))),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(T.c,{id:"heroku",className:"icon"}),r.a.createElement(S.b,{className:"list-type"}),r.a.createElement("span",{className:"list-text"},"Heroku")),r.a.createElement("li",null,r.a.createElement(v.d,{id:"photoshop",className:"icon"}),r.a.createElement(S.b,{className:"list-type"}),r.a.createElement("span",{className:"list-text"},"Adobe Photoshop"))))),r.a.createElement(I,null,r.a.createElement("h1",null,"Projects I've Made"),r.a.createElement(k,null,r.a.createElement(P,null,r.a.createElement(_,{to:"/Creatures"},r.a.createElement(L,{fluid:t[1].node.childImageSharp.fluid,src:t[1].node.childImageSharp.fluid.src,key:1,className:"thumbnail"})),r.a.createElement(B,null,"Creatures of Habit"),r.a.createElement(M,null,"I made this project to help users quantify areas of their life that are intrinsically qualitative (e.g., mental health)."),r.a.createElement(D,{to:"/Creatures"},"View Project")),r.a.createElement(P,null,r.a.createElement(_,{to:"/Mindful"},r.a.createElement(L,{fluid:t[0].node.childImageSharp.fluid,src:t[0].node.childImageSharp.fluid.src,key:0,className:"thumbnail"})),r.a.createElement(B,null,"mindful.io"),r.a.createElement(M,null,"I made this project for the purpose of helping users to become more mindful in their daily life."),r.a.createElement(D,{to:"/Mindful"},"View Project")),r.a.createElement(P,null,r.a.createElement(_,{to:"/Battleship"},r.a.createElement(L,{fluid:t[2].node.childImageSharp.fluid,src:t[2].node.childImageSharp.fluid.src,key:2,className:"thumbnail"})),r.a.createElement(B,null,"Battleship"),r.a.createElement(M,null,"This was the first project I made solely for the purpose of putting my skills into practice."),r.a.createElement(D,{to:"/Battleship"},"View Project")))))},N=s.b.div.withConfig({displayName:"Body__BodyContainer",componentId:"onlhe1-0"})(["margin:0 7rem;display:block;@media screen and (max-width:700px){margin:0 1rem;}"]),A=s.b.div.withConfig({displayName:"Body__SkillsContainer",componentId:"onlhe1-1"})(["margin:5rem auto;width:100%;h1{font-family:'Playfair Display',sans-serif;color:#36434d;}@media screen and (max-width:700px){display:block;}"]),j=s.b.div.withConfig({displayName:"Body__SkillsListContainer",componentId:"onlhe1-2"})(["margin:2rem auto;display:grid;grid-template-columns:repeat(4,1fr);width:100%;@media screen and (max-width:500px){grid-template-columns:1fr;}ul{margin:0 auto;width:100%;text-align:left;display:block;@media screen and (max-width:500px){height:auto;padding:0 1.5rem;width:90%;display:block;}}li{list-style-type:none;margin:0.5rem auto;text-align:left;font-family:'Open Sans',sans-serif;color:#828282;.list-type{display:none;}@media screen and (max-width:500px){.list-type{display:inline-block;width:1rem;font-size:1rem;color:#fecc27;margin-right:0.5rem;}}}.list-text{}.icon{font-size:0.75rem;margin:0 1rem;}@media screen and (max-width:500px){.icon{display:none;}}#react{color:#48CEF7;}#redux{color:#7E5ABB;}#gatsby{color:#663399;}#graphql{color:#DE33A6;}#bootstrap{color:#533B78;}#sass{color:#C76494;}#html{color:#DD4B25;}#node{color:#93B74C;}#express{color:#5896CE;}#mongo{color:#52A74B;}#jest{color:#BC1224;}#heroku{color:#5D1BB3;}#python{color:#F7DC78;}#jupyter{color:#F37726;}#photoshop{color:#001D34;}"]),I=s.b.div.withConfig({displayName:"Body__ProjectSection",componentId:"onlhe1-3"})(["display:block;margin:0 auto;text-align:center;h1{text-align:left;font-family:'Playfair Display',sans-serif;color:#36434d;}@media screen and (max-width:700px){grid-template-columns:1fr;}"]),k=s.b.div.withConfig({displayName:"Body__ProjectList",componentId:"onlhe1-4"})(["display:grid;grid-template-columns:1fr 1fr;margin:0 auto;@media screen and (max-width:500px){grid-template-columns:1fr;}"]),P=s.b.div.withConfig({displayName:"Body__ProjectContainer",componentId:"onlhe1-5"})(["display:block;text-align:center;margin:2rem auto 4rem auto;height:auto;width:auto;font-family:'Open Sans',sans-serif;@media screen and (max-width:500px){width:100%;height:100%;}"]),_=Object(s.b)(i.Link).withConfig({displayName:"Body__ProjectAnchor",componentId:"onlhe1-6"})([""]),L=Object(s.b)(c.a).withConfig({displayName:"Body__ProjectThumbnail",componentId:"onlhe1-7"})(["height:75%;width:75%;margin:1rem auto;border-radius:5px;box-shadow:0 50px 100px -20px rgba(50,50,93,.25),0 30px 60px -30px rgba(0,0,0,.3);transition:transform 0.5s;transition-timing-function:ease-in-out;&:hover{transform:scale(1.1);}@media screen and (max-width:500px){height:auto;display:block;}"]),B=s.b.h3.withConfig({displayName:"Body__ProjectTitle",componentId:"onlhe1-8"})(["margin:2rem 0 0 0;font-size:1.5rem;color:#36434d;"]),M=s.b.p.withConfig({displayName:"Body__ProjectDetails",componentId:"onlhe1-9"})(["line-height:1.25rem;margin:1rem auto;width:90%;text-align:center;color:#828282;"]),D=Object(s.b)(i.Link).withConfig({displayName:"Body__ProjectLink",componentId:"onlhe1-10"})(["color:#0070b7;transition:border-bottom 0.3s ease 0s;text-decoration:none;font-family:'Open Sans',sans-serif;&:visited,&:link{color:#0070b7;}&:hover{color:#48CEF7;border-bottom:2px solid #48cef7;}@media screen and (max-width:500px){font-size:1.25rem;}"]),H=n("JwsL");t.a=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null),r.a.createElement(d,null),r.a.createElement("main",null,t),r.a.createElement(O,null),r.a.createElement(H.a,null))}},ZhWT:function(e,t){var n="undefined"!=typeof Element,a="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,o){if(t===o)return!0;if(t&&o&&"object"==typeof t&&"object"==typeof o){if(t.constructor!==o.constructor)return!1;var l,c,s,u;if(Array.isArray(t)){if((l=t.length)!=o.length)return!1;for(c=l;0!=c--;)if(!e(t[c],o[c]))return!1;return!0}if(a&&t instanceof Map&&o instanceof Map){if(t.size!==o.size)return!1;for(u=t.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;for(u=t.entries();!(c=u.next()).done;)if(!e(c.value[1],o.get(c.value[0])))return!1;return!0}if(r&&t instanceof Set&&o instanceof Set){if(t.size!==o.size)return!1;for(u=t.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(o)){if((l=t.length)!=o.length)return!1;for(c=l;0!=c--;)if(t[c]!==o[c])return!1;return!0}if(t.constructor===RegExp)return t.source===o.source&&t.flags===o.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===o.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===o.toString();if((l=(s=Object.keys(t)).length)!==Object.keys(o).length)return!1;for(c=l;0!=c--;)if(!Object.prototype.hasOwnProperty.call(o,s[c]))return!1;if(n&&t instanceof Element)return!1;for(c=l;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!t.$$typeof)&&!e(t[s[c]],o[s[c]]))return!1;return!0}return t!=t&&o!=o}(e,t)}catch(o){if((o.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw o}}},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return he}));n("E9XD");var a,r,i,o,l=n("17x9"),c=n.n(l),s=n("8+s/"),u=n.n(s),d=n("ZhWT"),m=n.n(d),p=n("q1tI"),f=n.n(p),h=n("YVoz"),y=n.n(h),g="bodyAttributes",b="htmlAttributes",E="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(w).map((function(e){return w[e]})),"charset"),T="cssText",x="href",C="http-equiv",S="innerHTML",O="itemprop",N="name",A="property",j="rel",I="src",k="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},_="defaultTitle",L="defer",B="encodeSpecialCharacters",M="onChangeClientState",D="titleTemplate",H=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),R=[w.NOSCRIPT,w.SCRIPT,w.STYLE],q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},U=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},V=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},J=function(e){var t=$(e,w.TITLE),n=$(e,D);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var a=$(e,_);return t||a||void 0},W=function(e){return $(e,M)||function(){}},Q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var a=Object.keys(n),r=0;r<a.length;r++){var i=a[r].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},Z=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ae("Helmet: "+e+' should be of type "Array". Instead found type "'+q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var l=i[o],c=l.toLowerCase();-1===t.indexOf(c)||n===j&&"canonical"===e[n].toLowerCase()||c===j&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(l)||l!==S&&l!==T&&l!==O||(n=l)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][s]&&(r[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(r),o=0;o<i.length;o++){var l=i[o],c=y()({},a[l],r[l]);a[l]=c}return e}),[]).reverse()},$=function(e,t){for(var n=e.length-1;n>=0;n--){var a=e[n];if(a.hasOwnProperty(t))return a[t]}return null},X=(a=Date.now(),function(e){var t=Date.now();t-a>16?(a=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:e.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ae=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},re=null,ie=function(e,t){var n=e.baseTag,a=e.bodyAttributes,r=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,d=e.title,m=e.titleAttributes;ce(w.BODY,a),ce(w.HTML,r),le(d,m);var p={baseTag:se(w.BASE,n),linkTags:se(w.LINK,i),metaTags:se(w.META,o),noscriptTags:se(w.NOSCRIPT,l),scriptTags:se(w.SCRIPT,s),styleTags:se(w.STYLE,u)},f={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,a=t.oldTags;n.length&&(f[e]=n),a.length&&(h[e]=p[e].oldTags)})),t&&t(),c(e,f,h)},oe=function(e){return Array.isArray(e)?e.join(""):e},le=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ce(w.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var a=n.getAttribute("data-react-helmet"),r=a?a.split(","):[],i=[].concat(r),o=Object.keys(t),l=0;l<o.length;l++){var c=o[l],s=t[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===r.indexOf(c)&&r.push(c);var u=i.indexOf(c);-1!==u&&i.splice(u,1)}for(var d=i.length-1;d>=0;d--)n.removeAttribute(i[d]);r.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==o.join(",")&&n.setAttribute("data-react-helmet",o.join(","))}},se=function(e,t){var n=document.head||document.querySelector(w.HEAD),a=n.querySelectorAll(e+"[data-react-helmet]"),r=Array.prototype.slice.call(a),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var a in t)if(t.hasOwnProperty(a))if(a===S)n.innerHTML=t.innerHTML;else if(a===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[a]?"":t[a];n.setAttribute(a,l)}n.setAttribute("data-react-helmet","true"),r.some((function(e,t){return o=t,n.isEqualNode(e)}))?r.splice(o,1):i.push(n)})),r.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:r,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,n){var a=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+a:a}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},me=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(a={key:e})["data-react-helmet"]=!0,r=de(n,a),[f.a.createElement(w.TITLE,r,e)];var e,n,a,r},toString:function(){return function(e,t,n,a){var r=ue(n),i=oe(t);return r?"<"+e+' data-react-helmet="true" '+r+">"+V(i,a)+"</"+e+">":"<"+e+' data-react-helmet="true">'+V(i,a)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case g:case b:return{toComponent:function(){return de(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var a,r=((a={key:n})["data-react-helmet"]=!0,a);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===S||n===T){var a=t.innerHTML||t.cssText;r.dangerouslySetInnerHTML={__html:a}}else r[n]=t[e]})),f.a.createElement(e,r)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,a){var r=Object.keys(a).filter((function(e){return!(e===S||e===T)})).reduce((function(e,t){var r=void 0===a[t]?t:t+'="'+V(a[t],n)+'"';return e?e+" "+r:r}),""),i=a.innerHTML||a.cssText||"",o=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+r+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,a=e.encode,r=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,c=e.scriptTags,s=e.styleTags,u=e.title,d=void 0===u?"":u,m=e.titleAttributes;return{base:me(w.BASE,t,a),bodyAttributes:me(g,n,a),htmlAttributes:me(b,r,a),link:me(w.LINK,i,a),meta:me(w.META,o,a),noscript:me(w.NOSCRIPT,l,a),script:me(w.SCRIPT,c,a),style:me(w.STYLE,s,a),title:me(w.TITLE,{title:d,titleAttributes:m},a)}},fe=u()((function(e){return{baseTag:G([x,k],e),bodyAttributes:Q(g,e),defer:$(e,L),encode:$(e,B),htmlAttributes:Q(b,e),linkTags:Z(w.LINK,[j,x],e),metaTags:Z(w.META,[N,v,C,A,O],e),noscriptTags:Z(w.NOSCRIPT,[S],e),onChangeClientState:W(e),scriptTags:Z(w.SCRIPT,[I,S],e),styleTags:Z(w.STYLE,[T],e),title:J(e),titleAttributes:Q(E,e)}}),(function(e){re&&ne(re),e.defer?re=te((function(){ie(e,(function(){re=null}))})):(ie(e),re=null)}),pe)((function(){return null})),he=(r=fe,o=i=function(e){function t(){return z(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,r=e.newChildProps,i=e.nestedChildren;return Y({},a,((t={})[n.type]=[].concat(a[n.type]||[],[Y({},r,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,r=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(a.type){case w.TITLE:return Y({},r,((t={})[a.type]=o,t.titleAttributes=Y({},i),t));case w.BODY:return Y({},r,{bodyAttributes:Y({},i)});case w.HTML:return Y({},r,{htmlAttributes:Y({},i)})}return Y({},r,((n={})[a.type]=Y({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var a;n=Y({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,a={};return f.a.Children.forEach(e,(function(e){if(e&&e.props){var r=e.props,i=r.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[H[n]||n]=e[n],t}),t)}(U(r,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:a=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:a,newChildProps:o,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(a,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=U(e,["children"]),a=Y({},n);return t&&(a=this.mapChildrenToProps(t,a)),f.a.createElement(r,a)},F(t,null,[{key:"canUseDOM",set:function(e){r.canUseDOM=e}}]),t}(f.a.Component),i.propTypes={base:c.a.object,bodyAttributes:c.a.object,children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),defaultTitle:c.a.string,defer:c.a.bool,encodeSpecialCharacters:c.a.bool,htmlAttributes:c.a.object,link:c.a.arrayOf(c.a.object),meta:c.a.arrayOf(c.a.object),noscript:c.a.arrayOf(c.a.object),onChangeClientState:c.a.func,script:c.a.arrayOf(c.a.object),style:c.a.arrayOf(c.a.object),title:c.a.string,titleAttributes:c.a.object,titleTemplate:c.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=r.peek,i.rewind=function(){var e=r.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);he.renderStatic=he.rewind}).call(this,n("yLpj"))},vrFN:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("qhky"),o=n("Wbzz");function l(e){var t,n,a=e.description,l=e.lang,c=e.meta,s=e.title,u=Object(o.useStaticQuery)("63159454").site,d=a||u.siteMetadata.description,m=null===(t=u.siteMetadata)||void 0===t?void 0:t.title;return r.a.createElement(i.a,{htmlAttributes:{lang:l},title:s,titleTemplate:m?"%s | "+m:null,meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(n=u.siteMetadata)||void 0===n?void 0:n.author)||""},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(c)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l}}]);
//# sourceMappingURL=11a94a3e73140724a8de4b52d94986fe0f3aacd5-be226a8e2dc2f8c3a262.js.map