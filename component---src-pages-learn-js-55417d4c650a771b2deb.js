(self.webpackChunkportfolio_blog=self.webpackChunkportfolio_blog||[]).push([[438],{7471:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var a=n(7294),o=n(9),i=n(5444),r=n(1496),l=n.p+"static/epictetus-2a200291508b52c07e353a19246971d8.jpg",c=function(){var e=(0,i.useStaticQuery)("3434501458"),t={key:0,fluid:e.allFile.edges[0].node.childImageSharp.fluid,src:e.allFile.edges[0].node.childImageSharp.fluid.src,alt:"Epictetus writing code"};return a.createElement(d,null,a.createElement(m,{style:{backgroundImage:"url("+l+")",backgroundSize:"cover",backgroundAttachment:"fixed",backgroundPosition:"right center",backgroundRepeat:"no-repeat",backgroundColor:"transparent"}},a.createElement(s,null,a.createElement(p,null,"Learn with the Stoic ",a.createElement("span",{className:"gold-text"},"Programmer")))),a.createElement(u,null,a.createElement(g,{fluid:t.fluid,src:t.src,alt:t.alt,key:0}),a.createElement(f,null,"Learn with the Stoic ",a.createElement("span",{className:"gold-text"},"Programmer"))))},d=o.ZP.div.withConfig({displayName:"BlogHeader__HeaderContainer",componentId:"sc-14gluew-0"})(["width:80vw;height:35rem;margin-left:8.5rem;@media screen and (max-width:500px){margin:0 auto;width:100%;}"]),m=o.ZP.div.withConfig({displayName:"BlogHeader__WebContainer",componentId:"sc-14gluew-1"})(["width:100%;display:flex;flex:1;flex-wrap:nowrap;flex-direction:row;align-items:center;justify-content:center;background:rgba(255,255,255,0.2);height:100%;@media screen and (max-width:500px){display:none;}"]),s=o.ZP.div.withConfig({displayName:"BlogHeader__HeaderTextContainer",componentId:"sc-14gluew-2"})(["width:60%;margin:0 4rem 0 2rem;@media screen and (max-width:500px){margin:0 1rem;}"]),p=o.ZP.h1.withConfig({displayName:"BlogHeader__HeaderText",componentId:"sc-14gluew-3"})(["margin:0 auto;font-size:3.5rem;color:white;text-align:center;font-family:'Playfair Display',sans-serif;.gold-text{color:#fecc27;}"]),u=o.ZP.div.withConfig({displayName:"BlogHeader__MobileContainer",componentId:"sc-14gluew-4"})(["margin:0 auto;display:flex;flex-direction:column;align-items:center;justify-content:center;height:auto;@media only screen and (min-width:700px){display:none;}"]),g=(0,o.ZP)(r.Z).withConfig({displayName:"BlogHeader__Epictetus",componentId:"sc-14gluew-5"})(["display:none;@media screen and (max-width:500px){display:block;width:100%;}"]),f=o.ZP.h1.withConfig({displayName:"BlogHeader__MobileText",componentId:"sc-14gluew-6"})(["font-family:'Playfair Display',sans-serif;font-size:3rem;text-align:center;width:80%;.gold-text{color:#fecc27;display:block;}"])},7658:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var a,o=n(7294),i=n(9),r=n(4316),l=n(5761),c=(0,i.vJ)(a||(a=(0,l.Z)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n"]))),d=(n(7471),n(3375),function(e){var t=e.children,n=e.modalState;return o.createElement(o.Fragment,null,o.createElement(c,null),o.createElement("main",null,t.map((function(e){return o.cloneElement(e,{key:(0,r.v4)(),modalState:n})}))))});i.ZP.div.withConfig({displayName:"BlogLayout__BlogContainer",componentId:"gfem6x-0"})([""," width:100%;"],""),i.ZP.div.withConfig({displayName:"BlogLayout__BlogFooterContainer",componentId:"gfem6x-1"})(["margin:0 auto;width:100%;background-color:rgba(100,100,100,0.6);padding:0.5rem 0;"])},6916:function(e,t,n){"use strict";var a=n(7294),o=n(5444),i=n(1496),r=n(9);t.Z=function(e){var t=e.modalState,n=void 0===t?null:t,i=(0,o.useStaticQuery)("2981069726"),r=(0,a.useState)({status:!0}),m=r[0],s=r[1],p=(0,a.useRef)(!1);(0,a.useEffect)((function(){return function(){p.current=!1}}),[]),(0,a.useEffect)((function(){null!==n&&p.current&&(n.display?s({status:!1}):n.display||s({status:!0}))}),[n,s,p]);var u=i.allFile.edges[0].node.childImageSharp;return a.createElement(l,{style:{display:m.status?"inline":"none"},ref:p},a.createElement(c,{to:"/Brandon"},a.createElement(d,{fluid:u.fluid,alt:"A small picture of me wearing a suit."})))};var l=r.ZP.div.withConfig({displayName:"MyIcon__IconContainer",componentId:"sc-1ujpjf4-0"})([""]),c=(0,r.ZP)(o.Link).withConfig({displayName:"MyIcon__IconLink",componentId:"sc-1ujpjf4-1"})([""]),d=(0,r.ZP)(i.Z).withConfig({displayName:"MyIcon__MyIconImage",componentId:"sc-1ujpjf4-2"})(["width:25px;display:inline-block;&:hover{transform:scale(1.05);}"])},4261:function(e,t,n){"use strict";var a=n(7294),o=n(9),i=n(5444),r=n(1521),l=n(6916);t.Z=function(e){var t=e.post,n=e.inTags,o=void 0!==n&&n,i=e.setTag,w=e.modalState;return a.createElement(c,null,a.createElement(d,{to:t.path},t.title),a.createElement(m,null,"Posted by Brandon ",a.createElement(l.Z,{modalState:w})," on ",t.date),a.createElement(s,null,o?a.createElement(p,null,t.tags.map((function(e,t){return a.createElement(u,{key:t},a.createElement(r._MD,{id:"puzzle"}),a.createElement(g,{onClick:function(){return i(e)}},e))}))):a.createElement(p,null,t.tags.map((function(e,t){return a.createElement(u,{key:t},a.createElement(r._MD,{id:"puzzle"}),a.createElement(f,{to:"/tags"},e))})))),a.createElement(h,null,t.excerpt))};var c=o.ZP.div.withConfig({displayName:"PostPreview__PostPreviewContainer",componentId:"pzssmc-0"})(["display:block;margin:0 auto;width:60%;text-align:left;margin:2rem auto;height:auto;@media screen and (max-width:500px){margin:1rem auto;width:80%;}"]),d=(0,o.ZP)(i.Link).withConfig({displayName:"PostPreview__PostLink",componentId:"pzssmc-1"})(["text-decoration:none;font-size:2.25rem;border-bottom:2px solid #0070B7;color:#0070B7;margin:1rem auto;font-family:'Roboto',sans-serif;transition:border-bottom 0.2s ease;&:link,&:visited{color:#0070B7;}&:hover{border-bottom:none;color:#95BCDE;}"]),m=o.ZP.div.withConfig({displayName:"PostPreview__PostInfo",componentId:"pzssmc-2"})(["display:block;margin:0.5rem auto;"]),s=o.ZP.div.withConfig({displayName:"PostPreview__TagContainer",componentId:"pzssmc-3"})(["display:block;margin:1rem auto;"]),p=o.ZP.div.withConfig({displayName:"PostPreview__PuzzlePieces",componentId:"pzssmc-4"})(["display:flex;flex-direction:row;flex:1;flex-wrap:wrap;align-items:center;"]),u=o.ZP.div.withConfig({displayName:"PostPreview__TagLinkContainer",componentId:"pzssmc-5"})(["border:1px solid #0070b7;border-radius:5px;padding:0.25rem 0;text-align:center;width:7rem;&:hover{color:#5ED3F3;border-color:#5ED3F3;}#puzzle{font-size:0.75rem;color:#0070b7;}#puzzle:hover{color:#5ed3f3;}"]),g=o.ZP.span.withConfig({displayName:"PostPreview__ActiveTag",componentId:"pzssmc-6"})(["text-decoration:none;color:#0070b7;font-size:0.75rem;margin:0 0.25rem;&:hover{color:#5ED3F3;}"]),f=(0,o.ZP)(i.Link).withConfig({displayName:"PostPreview__TagLink",componentId:"pzssmc-7"})(["text-decoration:none;color:#0070b7;font-size:0.75rem;margin:0 0.25rem;&:active,&:link{color:#0070b7;}&:hover{color:#5ED3F3;}"]),h=o.ZP.div.withConfig({displayName:"PostPreview__ContentPreviewContainer",componentId:"pzssmc-8"})(["display:block;"])},4608:function(e,t,n){"use strict";n.d(t,{Z:function(){return E}});var a=n(7294),o=n(9),i=n(4316),r=n(5444),l=n(782);var c=n(9295),d=function(e){var t=e.hideModal;!function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n])}(e,["hideModal"]);return a.createElement(m,null,a.createElement(s,{onClick:t},a.createElement(c.sQZ,{id:"icon"})),a.createElement(p,null,a.createElement(r.Link,{to:"/"},"PORTFOLIO")),a.createElement(p,null,a.createElement(r.Link,{to:"/learn"},"BLOG")),a.createElement(p,null,a.createElement("a",{href:"/#skills"},"SKILLS & PROJECTS")),a.createElement(p,null,a.createElement("a",{href:"/#footer"},"CONTACT")))},m=o.ZP.div.withConfig({displayName:"MobileModal__ModalContainer",componentId:"sc-1qtbuf7-0"})(["@keyframes slidein{from{transform:translateX(120rem);}to{transform:translateX(0);}}position:fixed;top:3rem;right:0;margin:0 auto;z-index:4;height:90vh;width:90vw;background-color:white;border-radius:10px;box-shadow:0 50px 100px -20px rgba(50,50,93,.25),0 30px 60px -30px rgba(0,0,0,.3);animation:slidein 0.2s ease;"]),s=(o.ZP.div.withConfig({displayName:"MobileModal__ModalBackground",componentId:"sc-1qtbuf7-1"})(["width:100%;height:100%;"]),o.ZP.div.withConfig({displayName:"MobileModal__CloseButton",componentId:"sc-1qtbuf7-2"})(["text-align:center;background:none;margin:4rem auto;width:85%;text-align:right;#icon{font-size:2.25rem;}"])),p=o.ZP.span.withConfig({displayName:"MobileModal__ModalItem",componentId:"sc-1qtbuf7-3"})(["font-size:2.5rem;font-family:'Roboto',sans-serif;margin:2.5rem auto;text-align:center;display:block;text-decoration:none;font-weight:600;color:black;a,a:visited,a:active{color:black;text-decoration:none;}"]),u=function(e){var t=e.hideModal,n=e.modalState,o=e.showModal;return a.createElement(g,null,a.createElement(f,null,a.createElement(h,null,a.createElement(w,{to:"/"},"PORTFOLIO")),a.createElement(h,null,a.createElement(w,{to:"/learn"},"BLOG")),a.createElement(h,null,a.createElement(w,{to:"/#skills"},"SKILLS")),a.createElement(h,null,a.createElement(w,{to:"/#projects"},"PROJECTS")),a.createElement(h,null,a.createElement(w,{to:"/#footer"},"CONTACT"))),a.createElement(y,null,a.createElement(l.vHB,{id:"icon",onClick:o}),a.createElement(b,{style:{display:n.display?"block":"none"}},a.createElement(d,{hideModal:t}))))},g=o.ZP.div.withConfig({displayName:"NavBar__NavBarContainer",componentId:"sc-1im1ece-0"})(["width:8rem;height:auto;display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:center;position:fixed;left:0.5rem;@media screen and (max-width:500px){width:10rem;position:absolute;}"]),f=o.ZP.div.withConfig({displayName:"NavBar__WebContainer",componentId:"sc-1im1ece-1"})(["border-right:1px solid black;@media screen and (max-width:500px){display:none;}"]),h=o.ZP.div.withConfig({displayName:"NavBar__NavItem",componentId:"sc-1im1ece-2"})(["margin:1rem 2rem;text-decoration:none;display:block;"]),w=(0,o.ZP)(r.Link).withConfig({displayName:"NavBar__NavLink",componentId:"sc-1im1ece-3"})(["color:black;opacity:0.5;transition:border-bottom 0.3s ease 0s;text-decoration:none;font-family:'Roboto',sans-serif;font-weight:600;font-size:0.75rem;&:visited,{color:#0070b7;}&:active,&:focus{color:black;opacity:1;}&:hover{color:#48CEF7;border-bottom:2px solid #48cef7;}"]),y=o.ZP.div.withConfig({displayName:"NavBar__MobileContainer",componentId:"sc-1im1ece-4"})(["float:right;position:fixed;right:2rem;top:6rem;#icon{font-size:2rem;}@media screen and (min-width:900px){display:none;#icon{display:none;}}"]),b=o.ZP.div.withConfig({displayName:"NavBar__ModalContainer",componentId:"sc-1im1ece-5"})(["@keyframes slideout{from{transform:translateX(0);}to{transform:translateX(120rem);}}.hide-modal{animation:slideout 0.2s ease;}@media screen and (min-width:900px){display:none;}"]),x=n(7471),v=n(3375),E=function(e){var t=e.children,n=e.layout,o=t.props?t.props.children:t,r=(0,a.useState)({display:!1}),l=r[0],c=r[1];return a.createElement(a.Fragment,null,a.createElement(u,{hideModal:function(){l.display&&c({display:!1})},modalState:l,showModal:function(){l.display||c({display:!0})}}),"blog"===n?a.createElement(x.Z,null):a.createElement(a.Fragment,null),a.createElement("main",null,o.map((function(e){return a.cloneElement(e,{key:(0,i.v4)(),modalState:l})}))),"blog"===n?a.createElement(k,null,a.createElement(v.Z,{theme:"dark"})):a.createElement(v.Z,{theme:"light"}))},k=o.ZP.div.withConfig({displayName:"NavLayout__BlogFooterContainer",componentId:"yazvd0-0"})(["margin:0 auto;width:100%;background-color:rgba(100,100,100,0.6);padding:0.5rem 0;"])},7110:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var a=n(7294),o=n(5444),i=n(4316),r=n(4608),l=n(7658),c=n(5414),d=n(9),m=n(4261);function s(e){var t=e.data,n=e.modalState,o=t.filter((function(e){return e.frontmatter.title.length>0})).map((function(e){var t={title:e.frontmatter.title,path:e.frontmatter.path,date:e.frontmatter.date,excerpt:e.excerpt,tags:e.frontmatter.tags};return a.createElement(m.Z,{key:e.key,post:t,modalState:n})}));return a.createElement("div",{className:"blog-posts"},a.createElement(c.q,{title:"The Stoic Programmer | Brandon Zirulnikoff"}),a.createElement(p,null,a.createElement(u,null,a.createElement(g,{to:"/tags"},"Browse Tags")),a.createElement(f,null,o)))}var p=d.ZP.div.withConfig({displayName:"BlogIndex__IndexContainer",componentId:"sc-15zkolj-0"})(["border-radius:10px;width:100%;height:auto;padding:2rem 0 0 0;margin:0 auto;background:linear-gradient(0.25turn,transparent,rgba(255,255,255,1) );@media screen and (max-width:500px){padding:0;}"]),u=d.ZP.span.withConfig({displayName:"BlogIndex__TagHeader",componentId:"sc-15zkolj-1"})(["display:block;fontSize:1.5rem;margin:2rem auto;text-align:center;@media screen and (max-width:500px){margin:0 auto;}"]),g=(0,d.ZP)(o.Link).withConfig({displayName:"BlogIndex__TagsLink",componentId:"sc-15zkolj-2"})(["text-decoration:none;cursor:pointer;border-bottom:2px solid black;transition:border-bottom 0.3s ease 0s;color:black;text-align:center;font-size:1.75rem;&:hover{color:#828282;border-bottom:transparent;}"]),f=d.ZP.div.withConfig({displayName:"BlogIndex__InnerContainer",componentId:"sc-15zkolj-3"})(["border-radius:10px;width:90%;height:auto;padding:3rem 0;margin:0 auto;background:rgba(255,255,255,0.7);display:flex;flex-wrap:wrap;flex:1;flex-direction:column;align-items:center;justify-content:center;"]),h=n(6179),w=function(){var e=(0,o.useStaticQuery)("3894138085").allMarkdownRemark.edges.map((function(e){var t=e.node,n=t.html.slice(3,150)+"...",a=new RegExp("<br>","g"),o=n.replace(a," ");return Object.assign({},t,{key:(0,i.v4)(),excerpt:o})}));return a.createElement(r.Z,{layout:"blog"},a.createElement(l.Z,null,a.createElement(h.Z,{title:"Learn about the Best Full-stack Tech with the Stoic Programmer | BZWEB"}),a.createElement(s,{data:e})))}}}]);
//# sourceMappingURL=component---src-pages-learn-js-55417d4c650a771b2deb.js.map