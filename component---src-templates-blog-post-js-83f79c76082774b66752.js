(self.webpackChunkportfolio_blog=self.webpackChunkportfolio_blog||[]).push([[989],{7471:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var a=n(7294),o=n(9),i=n(5444),r=n(1496),l=n.p+"static/epictetus-2a200291508b52c07e353a19246971d8.jpg",d=function(){var e=(0,i.useStaticQuery)("3434501458"),t={key:0,fluid:e.allFile.edges[0].node.childImageSharp.fluid,src:e.allFile.edges[0].node.childImageSharp.fluid.src,alt:"Epictetus writing code"};return a.createElement(c,null,a.createElement(m,{style:{backgroundImage:"url("+l+")",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"right center",backgroundRepeat:"no-repeat",backgroundColor:"transparent"}},a.createElement(s,null,a.createElement(g,null,"Learn with the Stoic ",a.createElement("span",{className:"gold-text"},"Programmer")))),a.createElement(u,null,a.createElement(f,{fluid:t.fluid,src:t.src,alt:t.alt,key:0}),a.createElement(p,null,"Learn with the Stoic ",a.createElement("span",{className:"gold-text"},"Programmer"))))},c=o.ZP.div.withConfig({displayName:"BlogHeader__HeaderContainer",componentId:"sc-14gluew-0"})(["width:80vw;height:35rem;margin-left:8.5rem;@media screen and (max-width:500px){margin:0 auto;width:100%;}"]),m=o.ZP.div.withConfig({displayName:"BlogHeader__WebContainer",componentId:"sc-14gluew-1"})(["width:100%;display:flex;flex:1;flex-wrap:nowrap;flex-direction:row;align-items:center;justify-content:center;background:rgba(255,255,255,0.2);height:100%;@media screen and (max-width:500px){display:none;}"]),s=o.ZP.div.withConfig({displayName:"BlogHeader__HeaderTextContainer",componentId:"sc-14gluew-2"})(["width:60%;margin:0 4rem 0 2rem;@media screen and (max-width:500px){margin:0 1rem;}"]),g=o.ZP.h1.withConfig({displayName:"BlogHeader__HeaderText",componentId:"sc-14gluew-3"})(["margin:0 auto;font-size:3.5rem;color:white;text-align:center;font-family:'Playfair Display',sans-serif;.gold-text{color:#fecc27;}"]),u=o.ZP.div.withConfig({displayName:"BlogHeader__MobileContainer",componentId:"sc-14gluew-4"})(["margin:0 auto;display:flex;flex-direction:column;align-items:center;justify-content:center;height:auto;@media only screen and (min-width:700px){display:none;}"]),f=(0,o.ZP)(r.Z).withConfig({displayName:"BlogHeader__Epictetus",componentId:"sc-14gluew-5"})(["display:none;@media screen and (max-width:500px){display:block;width:100%;}"]),p=o.ZP.h1.withConfig({displayName:"BlogHeader__MobileText",componentId:"sc-14gluew-6"})(["font-family:'Playfair Display',sans-serif;font-size:3rem;text-align:center;width:80%;.gold-text{color:#fecc27;display:block;}"])},7658:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a,o=n(7294),i=n(9),r=n(4316),l=n(5761),d=(0,i.vJ)(a||(a=(0,l.Z)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n"]))),c=(n(7471),n(3375),function(e){var t=e.children,n=e.modalState;return o.createElement(o.Fragment,null,o.createElement(d,null),o.createElement("main",null,t.map((function(e){return o.cloneElement(e,{key:(0,r.v4)(),modalState:n})}))))});i.ZP.div.withConfig({displayName:"BlogLayout__BlogContainer",componentId:"gfem6x-0"})([""," width:100%;"],""),i.ZP.div.withConfig({displayName:"BlogLayout__BlogFooterContainer",componentId:"gfem6x-1"})(["margin:0 auto;width:100%;background-color:rgba(100,100,100,0.6);padding:0.5rem 0;"])},6916:function(e,t,n){"use strict";var a=n(7294),o=n(5444),i=n(1496),r=n(9);t.Z=function(e){var t=e.modalState,n=void 0===t?null:t,i=(0,o.useStaticQuery)("2981069726"),r=(0,a.useState)({status:!0}),m=r[0],s=r[1],g=(0,a.useRef)(!1);(0,a.useEffect)((function(){return function(){g.current=!1}}),[]),(0,a.useEffect)((function(){null!==n&&g.current&&(n.display?s({status:!1}):n.display||s({status:!0}))}),[n,s,g]);var u=i.allFile.edges[0].node.childImageSharp;return a.createElement(l,{style:{display:m.status?"inline":"none"},ref:g},a.createElement(d,{to:"/Brandon"},a.createElement(c,{fluid:u.fluid,alt:"A small picture of me wearing a suit."})))};var l=r.ZP.div.withConfig({displayName:"MyIcon__IconContainer",componentId:"sc-1ujpjf4-0"})([""]),d=(0,r.ZP)(o.Link).withConfig({displayName:"MyIcon__IconLink",componentId:"sc-1ujpjf4-1"})([""]),c=(0,r.ZP)(i.Z).withConfig({displayName:"MyIcon__MyIconImage",componentId:"sc-1ujpjf4-2"})(["width:25px;display:inline-block;&:hover{transform:scale(1.05);}"])},8661:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var a=n(7294),o=n(9),i=n(4316),r=n(5444),l=n(782);var d=n(9295),c=function(e){var t=e.hideModal;!function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n])}(e,["hideModal"]);return a.createElement(m,null,a.createElement(s,{onClick:t},a.createElement(d.sQZ,{id:"icon"})),a.createElement(g,null,a.createElement(r.Link,{to:"/"},"PORTFOLIO")),a.createElement(g,null,a.createElement(r.Link,{to:"/learn"},"BLOG")),a.createElement(g,null,a.createElement("a",{href:"/#skills"},"SKILLS & PROJECTS")),a.createElement(g,null,a.createElement("a",{href:"/#footer"},"CONTACT")))},m=o.ZP.div.withConfig({displayName:"MobileModal__ModalContainer",componentId:"sc-1qtbuf7-0"})(["@keyframes slidein{from{transform:translateX(120rem);}to{transform:translateX(0);}}position:fixed;top:3rem;right:0;margin:0 auto;z-index:4;height:90vh;width:90vw;background-color:white;border-radius:10px;box-shadow:0 50px 100px -20px rgba(50,50,93,.25),0 30px 60px -30px rgba(0,0,0,.3);animation:slidein 0.2s ease;"]),s=(o.ZP.div.withConfig({displayName:"MobileModal__ModalBackground",componentId:"sc-1qtbuf7-1"})(["width:100%;height:100%;"]),o.ZP.div.withConfig({displayName:"MobileModal__CloseButton",componentId:"sc-1qtbuf7-2"})(["text-align:center;background:none;margin:4rem auto;width:85%;text-align:right;#icon{font-size:2.25rem;}"])),g=o.ZP.span.withConfig({displayName:"MobileModal__ModalItem",componentId:"sc-1qtbuf7-3"})(["font-size:2.5rem;font-family:'Roboto',sans-serif;margin:2.5rem auto;text-align:center;display:block;text-decoration:none;font-weight:600;color:black;a,a:visited,a:active{color:black;text-decoration:none;}"]),u=function(e){var t=e.hideModal,n=e.modalState,o=e.showModal;return console.log("modalState",n),a.createElement(f,null,a.createElement(p,null,a.createElement(h,null,a.createElement(w,{to:"/"},"PORTFOLIO")),a.createElement(h,null,a.createElement(w,{to:"/learn"},"BLOG")),a.createElement(h,null,a.createElement(w,{to:"/#skills"},"SKILLS")),a.createElement(h,null,a.createElement(w,{to:"/#projects"},"PROJECTS")),a.createElement(h,null,a.createElement(w,{to:"/#footer"},"CONTACT"))),a.createElement(y,null,a.createElement(l.vHB,{id:"icon",onClick:o}),a.createElement(b,{style:{display:n.display?"block":"none"}},a.createElement(c,{hideModal:t}))))},f=o.ZP.div.withConfig({displayName:"NavBar__NavBarContainer",componentId:"sc-14kk019-0"})(["width:8rem;height:auto;display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:center;position:fixed;left:0.5rem;@media screen and (max-width:500px){width:10rem;position:absolute;}"]),p=o.ZP.div.withConfig({displayName:"NavBar__WebContainer",componentId:"sc-14kk019-1"})(["border-right:1px solid black;@media screen and (max-width:500px){display:none;}"]),h=o.ZP.div.withConfig({displayName:"NavBar__NavItem",componentId:"sc-14kk019-2"})(["margin:1rem 2rem;text-decoration:none;display:block;"]),w=(0,o.ZP)(r.Link).withConfig({displayName:"NavBar__NavLink",componentId:"sc-14kk019-3"})(["color:black;opacity:0.5;transition:border-bottom 0.3s ease 0s;text-decoration:none;font-family:'Roboto',sans-serif;font-weight:600;font-size:0.75rem;&:visited,{color:#0070b7;}&:active,&:focus{color:black;opacity:1;}&:hover{color:#48CEF7;border-bottom:2px solid #48cef7;}"]),y=o.ZP.div.withConfig({displayName:"NavBar__MobileContainer",componentId:"sc-14kk019-4"})(["float:right;position:fixed;right:2rem;top:6rem;#icon{font-size:2rem;}@media screen and (min-width:900px){display:none;#icon{display:none;}}"]),b=o.ZP.div.withConfig({displayName:"NavBar__ModalContainer",componentId:"sc-14kk019-5"})(["@keyframes slideout{from{transform:translateX(0);}to{transform:translateX(120rem);}}.hide-modal{animation:slideout 0.2s ease;}@media screen and (min-width:900px){display:none;}"]),x=n(7471),E=n(3375),k=function(e){var t=e.children,n=e.layout,o=t.props?t.props.children:t,r=(0,a.useState)({display:!1}),l=r[0],d=r[1];return a.createElement(a.Fragment,null,a.createElement(u,{hideModal:function(){l.display&&d({display:!1})},modalState:l,showModal:function(){l.display||d({display:!0})}}),"blog"===n?a.createElement(x.Z,null):a.createElement(a.Fragment,null),a.createElement("main",null,o.map((function(e){return a.cloneElement(e,{key:(0,i.v4)(),modalState:l})}))),"blog"===n?a.createElement(_,null,a.createElement(E.Z,{theme:"dark"})):a.createElement(E.Z,{theme:"light"}))},_=o.ZP.div.withConfig({displayName:"NavLayout__BlogFooterContainer",componentId:"itg1f8-0"})(["margin:0 auto;width:100%;background-color:rgba(100,100,100,0.6);padding:0.5rem 0;"])},1328:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var a=n(7294),o=n(5414),i=n(5444),r=n(8661),l=n(7658),d=n(9),c=n(1521),m=n(6916),s=function(e){var t=e.post,n=e.modalState,o=t.frontmatter.tags.map((function(e,t){return a.createElement(b,{key:t},a.createElement(c._MD,{id:"puzzle"}),a.createElement(x,{to:"/tags"},e))}));return a.createElement(g,null,a.createElement(u,null,a.createElement(f,{to:"/learn"},"Browse Posts")),a.createElement(p,null,a.createElement(h,null,t.frontmatter.title),a.createElement(w,null,"Posted by Brandon ",a.createElement(m.Z,{modalState:n})," on ",t.frontmatter.date),a.createElement(y,null,o),a.createElement(E,null,a.createElement("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:t.html}}))))},g=d.ZP.div.withConfig({displayName:"BlogPost__BlogPostContainer",componentId:"sc-5f6m07-0"})(["border-radius:10px;width:100%;height:auto;padding:2rem 0 0 0;margin:0 auto;background:linear-gradient(0.25turn,transparent,rgba(255,255,255,1) );"]),u=d.ZP.p.withConfig({displayName:"BlogPost__BrowseText",componentId:"sc-5f6m07-1"})(["display:block;fontSize:1.5rem;margin:2rem auto;text-align:center;"]),f=(0,d.ZP)(i.Link).withConfig({displayName:"BlogPost__BrowseLink",componentId:"sc-5f6m07-2"})(["text-decoration:none;cursor:pointer;border-bottom:2px solid #0070b7;transition:border-bottom 0.3s ease 0s;color:#0070b7;text-align:center;font-size:1.75rem;&:hover{color:#48CEF7;border-bottom:transparent;}"]),p=d.ZP.div.withConfig({displayName:"BlogPost__PostContent",componentId:"sc-5f6m07-3"})(["border-radius:10px;width:90%;height:auto;padding:3rem 0;margin:0 auto;background:rgba(255,255,255,0.8);display:flex;flex-wrap:wrap;flex:1;flex-direction:column;align-items:center;justify-content:center;"]),h=d.ZP.h1.withConfig({displayName:"BlogPost__PostTitle",componentId:"sc-5f6m07-4"})(["color:black;font-size:3rem;margin:0 auto 2.5rem auto;@media screen and (max-width:500px){text-align:center;}"]),w=d.ZP.div.withConfig({displayName:"BlogPost__PostInfo",componentId:"sc-5f6m07-5"})(["margin:0 auto 1rem auto;width:60%;text-align:center;color:#828282;"]),y=d.ZP.div.withConfig({displayName:"BlogPost__TagList",componentId:"sc-5f6m07-6"})(["display:flex;flex-direction:row;flex:1;flex-wrap:wrap;align-items:center;"]),b=d.ZP.div.withConfig({displayName:"BlogPost__TagListItem",componentId:"sc-5f6m07-7"})(["@keyframes jiggle{0%{transform:rotate(10deg);}20%{transform:rotate(-10deg);}40%{transform:rotate(10deg);}60%{transform:rotate(-10deg);}80%{transform:rotate(10deg);}100%{transform:rotate(-10deg);}}border:1px solid #0070b7;border-radius:5px;padding:0.25rem 0;text-align:center;width:7rem;color:#0070b7;&:hover{color:#5ED3F3;border-color:#5ED3F3;}#puzzle{font-size:0.75rem;}"]),x=(0,d.ZP)(i.Link).withConfig({displayName:"BlogPost__TagLink",componentId:"sc-5f6m07-8"})(["text-decoration:none;font-size:0.75rem;margin:0 0.25rem;color:#0070b7;&:active,&:link{color:#0070b7;}&:hover{color:#5ED3F3;}"]),E=d.ZP.div.withConfig({displayName:"BlogPost__InnerHtmlContainer",componentId:"sc-5f6m07-9"})(["margin:2rem auto;background:none;width:80%;font-size:1.15rem;@media screen and (max-width:500px){font-size:1.5rem;line-height:2rem;}"]),k=n(6179);function _(e){var t=e.data.markdownRemark;return a.createElement(r.Z,{layout:"blog"},a.createElement(l.Z,null,a.createElement(o.q,{title:"Learn with The Stoic Programmer - "+t.frontmatter.title}),a.createElement(k.Z,{title:"Learn with the Stoic Programmer"}),a.createElement(s,{post:t})))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-83f79c76082774b66752.js.map