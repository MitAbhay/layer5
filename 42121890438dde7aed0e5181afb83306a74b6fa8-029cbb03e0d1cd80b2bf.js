(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[5167],{44527:function(n,e,t){var i=t(15301).w_;n.exports.P=function(n){return i({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 19l-7-7 7-7"}}]})(n)}},32746:function(n,e,t){var i=t(15301).w_;n.exports.E=function(n){return i({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256zm289.1-43.4c7.5-7.5 19.8-7.5 27.3 0 3.8 3.8 5.6 8.7 5.6 13.6s-1.9 9.9-5.7 13.7l-94.3 94c-7.6 6.9-19.3 6.7-26.6-.6l-95.7-95.4c-7.5-7.5-7.6-19.7 0-27.3 7.5-7.5 19.7-7.6 27.3 0l81.1 81.9 81-79.9z"}}]})(n)}},31992:function(n,e,t){"use strict";t.d(e,{Z:function(){return l}});var i=t(67294),o=t(95986),r=t(63689),a=t(64423).default.div.withConfig({displayName:"TocPaginationstyle__TocPaginationWrapper",componentId:"sc-zco2fp-0"})(["\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  margin: 3rem 2rem 4rem 2rem;\n\n  @media screen and (max-width: 540px) {\n    margin: 0 0 2rem 0;\n    flex-flow: row wrap;\n    gap: 0.3rem;\n  }\n"]),l=function(){var n,e,t=(0,i.useState)(0),l=t[0],c=t[1];return(0,i.useEffect)((function(){var n=window.location.pathname,e=o.k.findIndex((function(e){return e.link===n}));c(e)}),[]),i.createElement(a,null,l>0?i.createElement(r.default,{secondary:!0,url:null===(n=o.k[l-1])||void 0===n?void 0:n.link},"← Previous"):null,l<o.k.length-1?i.createElement(r.default,{primary:!0,url:null===(e=o.k[l+1])||void 0===e?void 0:e.link},"Next →"):null)}},95986:function(n,e,t){"use strict";t.d(e,{k:function(){return i}});var i=[{id:0,link:"/community/handbook/contributor-journey",text:"About"},{id:1,link:"/community/handbook/community",text:"Guidelines"},{id:2,link:"/community/handbook/community-roles",text:"Roles"},{id:3,link:"/community/handbook/contribution",text:"Contribution"},{id:4,link:"/community/handbook/recognition",text:"Recognition"},{id:5,link:"/community/handbook/repository-overview",text:"Repository Overview"},{id:6,link:"/community/handbook/projects",text:"Projects"},{id:7,link:"/community/handbook/mentorship-programs",text:"Mentorship Programs"},{id:8,link:"/community/handbook/writing-program",text:"Writing Program"},{id:9,link:"/community/handbook/learn-layer5",text:"Learning"},{id:10,link:"/community/handbook/connect-with-us",text:"Connect with us"},{id:11,link:"/community/handbook/code-of-conduct",text:"Code of Conduct"},{id:12,link:"/community/handbook/security-vulnerabilities",text:"Security Vulnerabiities"},{id:13,link:"/community/handbook/faq",text:"FAQs"}]},90075:function(n,e,t){"use strict";t.d(e,{Z:function(){return d}});var i=t(67294),o=t(44527),r=t(71082),a=t(35999),l=t(32746),c=t(64423).default.div.withConfig({displayName:"tocstyle__TOCWrapper",componentId:"sc-y1xb32-0"})(["\n\n  position: sticky;\n  top: 10rem;\n  left: 0rem;\n  margin-left: 3rem;\n  margin-top: 3rem;\n  width:15rem;\n  padding-bottom: 2rem;\n\n  .go-back {\n    margin-left: 1rem;\n    display:flex;\n    justify-content:space-between;\n    align-items:center;   \n    a {\n      display: inline-flex;\n      svg {\n        align-self: center;\n        font-size: 1.5rem;\n        color: rgb(177, 182, 184);\n        width: 100%;\n        max-width: 1.5rem;\n      }\n      h4 {\n        font-weight: 500;\n        text-transform: capitalize;\n        font-size: 1.25rem;\n        white-space: nowrap;\n      }\n      &:hover {\n        svg,\n        h4 {\n          color: #3c494f;\n        }\n      }\n    }\n    margin-bottom: 1rem;\n  }\n\n  .toc-sub-heading {\n    color: ",";\n    margin-top: 1rem;\n    font-weight: 300;\n    font-size: 1.15rem;\n  }\n  \n  .toc-sub-inline{\n    display: inline-block;\n  }\n\n  .active{\n    font-weight:500;\n    color: ",";\n  }\n\n  ul{\n    display:flex;\n    flex-direction:column;\n    white-space: nowrap;\n  }\n\n  .toc-ul{\n    display: flex;\n    flex-direction: column;\n    margin-top: 0rem;\n    list-style: none;\n  }\n\n  .toc-toggle-btn{\n    display:none;\n  }\n \n   .toc-ul-open{\n    display: flex;\n    flex-direction: column;\n    margin-top: 0rem;\n    list-style: none;\n    height:auto !important;\n    opacity:1 !important;\n    margin-bottom: 2rem;\n    transition:all .4s !important;\n   }\n\n  .toc-menu-icon{\n    width: 1.5rem; \n    height: 1.5rem; \n    cursor: pointer;\n    fill: ",";\n  }\n\n  .toc-sub-heading:hover {\n    color: ",";\n  }\n\n  @media only screen and (max-width: 750px){\n   position: initial;\n   margin-right: 3rem;\n   width: auto;\n   .toc-toggle-btn{\n    display:inline-block;\n   }\n   .go-back{\n      margin-left:0;\n   }\n\n   .toc-ul{\n    opacity:0;\n    height:0;\n    transition:none;\n    visibility:hidden;\n   }\n\n   .toc-ul-open{\n    visibility:visible;\n   }\n  }\n"],(function(n){return n.theme.text}),(function(n){return n.theme.secondaryColor}),(function(n){return n.theme.menuColor}),(function(n){return n.theme.secondaryColor})),m=t(95986),d=function(){var n=(0,i.useState)(!1),e=n[0],t=n[1];return i.createElement(c,null,i.createElement("div",{className:"go-back"},i.createElement(r.Link,{to:"/community/handbook"},i.createElement(o.P,null),i.createElement("h4",null,"Table of Contents")),i.createElement("div",{className:"toc-toggle-btn"},e?i.createElement(a.Q,{className:"toc-menu-icon",onClick:function(){t(!e)}}):i.createElement(l.E,{className:"toc-menu-icon",onClick:function(){t(!e)}}))),i.createElement("div",{className:"toc-list"},i.createElement("ul",{className:"toc-ul "+(e?"toc-ul-open":"")},m.k.map((function(n){return i.createElement("li",{key:n.id},i.createElement(r.Link,{to:n.link,key:n.id,className:"toc-sub-heading toc-sub-inline",activeClassName:"active"},n.text))})))))}},70722:function(n,e,t){"use strict";var i=t(67294),o=t(71082),r=t(64423).default.div.withConfig({displayName:"intra-page__JoinCommunityWrapper",componentId:"sc-42m33g-0"})(["\n  .intra-page {\n    position: sticky;\n    top: 10rem;\n    right: 0rem;\n    margin-right: 1rem;\n    padding-bottom: 5rem;\n    padding-right: 2rem;\n    align-items: left;\n    justify-content: space-around;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n\n    .list {\n      color: #000000;\n    }\n    .active {\n      font-weight: 5000;\n      color: #000000;\n    }\n\n    ul {\n      list-style: none;\n      top: 3rem;\n\n      li {\n        padding-bottom: 0.5rem;\n        padding-top: 0.5rem;\n      }\n    }\n    @media only screen and (max-width: 950px) {\n      width: 0;\n      opacity: 0;\n      height: 0;\n      transition: none;\n      visibility: hidden;\n    }\n  }\n\n  .learn {\n    width: 10rem;\n  }\n"]);e.Z=function(n){var e=n.contents,t=(0,i.useState)(null),a=t[0],l=t[1];return(0,i.useEffect)((function(){var n=window.location.pathname;l(n)}),[]),i.createElement(r,null,i.createElement("div",{className:"intra-page"},i.createElement("ul",null,e.map((function(n){return i.createElement("li",{key:n.id,className:"list"},i.createElement(o.Link,{to:""+a+n.link,key:n.id,activeClassName:"active"},n.text))})))))}},72606:function(n,e,t){"use strict";t.d(e,{U:function(){return i}});var i=t(64423).default.div.withConfig({displayName:"Handbookstyle__HandbookWrapper",componentId:"sc-l1w5w5-0"})(["\n\n    .content > a:first-of-type > h2:first-of-type {\n      padding-top: 1rem;\n    }\n\n    .highlight{\n      font-weight: 600;\n    }\n\n    .content{\n      width:100%;\n      padding-bottom: 2rem;\n      ul > li {\n        color: ",";\n      }\n      ol > li {\n        color: ",";\n      }\n      ul > li > span {\n        color: ",";\n      }\n      ol > li > span {\n        color: ",";\n      }\n    }\n\n    h2 h3{\n      margin: 0.5rem 0;\n      color: ",";\n    }\n\n    .page-section{\n      h2{\n        padding-top: 7rem;\n        margin-top: -7rem;\n      }\n      h3{\n        padding-top: 7rem;\n        margin-top: -7rem;\n      }\n      margin-top: -36rem;\n      margin-left: 20rem;\n      display: flex;\n    }\n\n    .sidebar {\n        margin: 0;\n        padding: 0;\n        width: 250px;\n        background-color:",";\n        position: absolute;\n        height: 150rem;\n        overflow: auto;\n    }\n\n    .sidebar a {\n        display: block;\n        color: black;\n        padding: 16px;\n        text-decoration: none;\n    }\n\n    .sidebar a.active {\n        background-color: ",";\n        color: white;\n    }\n\n    .sidebar a:hover:not(.active) {\n        background-color:",";\n        color: white;\n    }\n\n    .page-header-section {\n      height: 10rem;\n      text-align: center;\n      background: rgb(71,126,150);\n      background: linear-gradient(250deg, rgba(71,126,150,1) 0%, rgba(0,179,159,1) 35%, rgba(60,73,79,1) 100%);\n      h1 {\n          line-height: 10rem;\n          color: white;\n      }\n    }\n\n    .community-home-subtitle {\n      text-align: center;\n      padding-top: 3rem;\n      padding-bottom: 1.5rem;\n    }\n\n    #sign-off{\n      padding-bottom: 4rem;\n    }\n\n    table {\n      border-collapse: collapse;\n      width: 98%;\n      margin: 1rem 0 2rem 0;\n      .github-icon{\n        height: 1.7rem;\n        width:auto;\n        display: block;\n        margin-left: auto;\n        margin-right: auto;\n        filter: invert(",");\n      }\n      .site-icon{\n        height: 1.6rem;\n        width:auto;\n        display: block;\n        margin-left: auto;\n        margin-right: auto;\n      }\n      .inline {\n        display: inline;\n        vertical-align: bottom;\n      }\n    }\n\n    td, th {\n      border: 0.05rem solid ",";\n      text-align: left;\n      padding: 0.5rem;\n    }\n\n    .linkscol{\n      text-align: center;\n      width:8%;\n    }\n\n    tbody:nth-child(even) {\n      background-color: ",';\n    }\n\n    .codes{\n      width:75%\n      margin-top:-2rem;\n    }\n\n    .community-home-container{\n      padding: 1rem 0;\n      padding-bottom: 4rem;\n      display: flex;\n      flex-wrap : wrap;\n      align-items : center;\n      justify-content: center;\n    }\n\n    p{\n      margin-top: 10px;\n    }\n\n    input[type=checkbox] + label {\n      display: block;\n      margin: 0.2em;\n      cursor: pointer;\n      padding: 0.2em;\n    }\n\n    input[type=checkbox] {\n      display: none;\n    }\n\n    input[type=checkbox] + label:before {\n      content: url(\'data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" viewBox="0 4 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>\');;\n      border: 0.1em solid #000;\n      border-radius: 0.2em;\n      display: inline-block;\n      width: 1.3em;\n      height: 1.3em;\n      padding-left: 0.2em;\n      padding-bottom: 0.3em;\n      margin-right: 0.5em;\n\n      margin-bottom: 0.15em;\n      vertical-align: bottom;\n      color: transparent;\n      background-color: white;\n    }\n\n    input[type=checkbox] + label:active:before {\n      transform: scale(0);\n    }\n    rect {\n      fill:  ',";  \n    }\n    path {\n      stroke: ",';\n    }\n    svg {\n      color: "red";\n    }\n    input[type=checkbox]:checked + label:before {\n      content: url(\'data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="black" viewBox="0 4 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>\');;\n\n      background-color: ',";\n      border-color: ",";\n      color: #fff;\n    }\n\n    input[type=checkbox]:disabled + label:before {\n      transform: scale(1);\n      border-color: #aaa;\n    }\n\n    input[type=checkbox]:checked:disabled + label:before {\n      transform: scale(1);\n      background-color: ",";\n      border-color: ",';\n    }\n\n    .project-org-list{\n      a{\n      margin-right .3rem;\n      }\n      img{\n        height: auto;\n        width: 1.6rem;\n        vertical-align: middle;\n      }\n    }\n\n    .project-description-icon{\n      width: 3%;\n      transform : translate(0,25%);\n      margin: 0 0.3%;\n    }\n\n    .project-title-icon{\n      margin-left:"10%";\n      width: 4%;\n      align: left;\n      transform : translate(0,28%);\n    }\n\n    @media only screen and (max-width: 750px){\n      .content > a:first-of-type > h2:first-of-type {\n        padding-top: 7rem;\n      }\n      .page-section{\n        margin-top: -2rem;\n        margin-left: 0;\n        padding: 1rem 2.5rem;\n      \n        .table-container {\n          table {\n            width: 100%;\n            margin-left: 0;\n          }\n          overflow-x: scroll;\n        }\n    \n        .table-container::-webkit-scrollbar { \n          display: none;\n        }\n      }\n      \n      .codes{\n        width:100%\n        margin-top:-2rem;\n      }\n    }\n\n    @media only screen and (max-width: 475px){\n      .page-header-section h1{\n        padding: 0 1rem;\n        line-height: 3rem;\n        padding-top: 4rem;\n      }\n      .page-section{\n        margin-top: -2rem;\n        margin-left: 0rem;\n      }\n      table{\n        margin-left: -1.5rem;\n      }\n      .frontendTable{\n        margin-left: -2.8rem;\n      }\n    }\n\n    @media only screen and (max-width: 1024px){\n      .project-title-icon{\n        width:5.5%;\n        transform : translate(0,23%);\n      }\n      .project-description-icon{\n        width:4%;\n      }\n    }\n\n    @media only screen and (max-width: 768px){\n      .project-title-icon{\n        width:8.5%;\n      }\n      .project-description-icon{\n        width:7%;\n      }\n    }\n\n    @media only screen and (max-width: 425px){\n      .project-title-icon{\n        width:11%;\n        transform: translate(0,25%)\n      }\n      .project-description-icon{\n        width:8%;\n      }\n    }\n\n    @media only screen and (max-width: 375px){\n      .project-title-icon{\n        width:13%;\n        transform : translate(0,20%)\n      }\n      .project-description-icon{\n        width:10%;\n      }\n    }\n\n    .channels-list {\n      padding-left: 40px;\n    }\n\n    .channels-img {\n      width: 40px;\n      height: 30px;\n    }\n\n    .channels-para {\n      display: flex;\n      align-items: flex-end;\n    }\n\n    .newcomers-journey{\n      text-align: center;\n      display: flex;\n      align-items: center;\n      margin: 2.5rem 5rem 3rem 0rem;\n      @media only screen and (max-width: 992px){\n        width: 100%;\n      }\n      h2{\n        margin-bottom: 2rem;\n      }\n    }\n\n    .heading{\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n\n    .heading-start{\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: center;\n      align-self: flex-end;\n      margin-right: 2rem;\n      margin-top: -2rem;\n      h5{\n      font-size: 1.125rem;\n      font-weight: 400;\n      margin-right: 1rem;\n      }\n      img{\n      height: 3rem;\n      width: 4rem;\n      transition: .5s;\n      }\n      img:hover{\n      padding-left: 1rem;\n      transition: .5s;\n      }\n    }\n\n  .intra-page{\n    position: sticky;\n    top: 10rem;\n    right:0rem;\n    margin-right: 1rem;\n    padding-bottom: 5rem;\n    align-items:left;\n    justify-content:space-around;\n    display: flex;\n    flex-direction: column;\n    overflow:hidden;\n    .active{\n      font-weight:5000;\n      color: ',";\n    }\n    ul{\n      list-style: none;\n      top: 3rem;\n    }\n    li{\n      padding-bottom:0.5rem;\n      padding-top:0.5rem;\n    }\n    @media only screen and (max-width: 900px){\n      width: 0;\n      opacity:0;\n    height:0;\n      transition:none;\n      visibility:hidden;\n    }\n  }\n\n  .learn{\n    width: 10rem;\n  }\n\n\n.writing_program{\nwidth: 90%;\n@media only screen and (max-width: 900px){\n  width: 100%;\n}\n.list{\n  padding: 1.875rem 0px;\n  table, tr, td{\n    border:none;\n   }\n  .text{\n    p{\n      color: ",";\n    }\n  }\n  .listed{\n      text-align: left;\n      .table{\n          .icon{\n              height: 2.5rem;\n              width: 2.5rem;\n              vertical-align: top;\n          }\n          .skill{\n              color: ",";\n              font-size: 16px;\n              padding: 0 0 1.25rem 1.8rem;\n              h4{\n                  font-weight: 600;\n              }\n          }\n      }\n  }\n}\n.content_list{\n  position: relative;\n  width: 100%;\n  margin-top: 1rem;\n  display: flex;\n  flex-wrap: wrap;\n}\n.content_type { \n  display: flex;\n  flex-direction: column;\n  background: ",";\n  box-shadow: 0px 0px "," ",";\n  &:hover{\n      box-shadow: 0px 0px 5px ",";\n  }\n  padding: 12% 6% 12% 6%;\n  height: 220px;\n  border-radius: 4%;\n  margin-bottom: 30px;\n  text-align: center;\n  h5{\n      margin-bottom: auto; \n      margin-top: 0.5rem;\n      font-weight: 700;\n      color: ","\n  }\n  p{\n      font-weight: 300;\n      color: ",";\n  }\n  img{\n      height: 60px ; \n      width: auto ;\n  }\n}\n.process {\n  margin: 10px auto;\n  border-left: solid 2px ",";\n  padding: 0px 20px 0px 20px;\n} \n.process .item {\n  padding: 10px;\n  font-size: 16px;\n  line-height: 1.7;\n  position: relative;\n}\n.item::before {\n  content: '';\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  display: block;\n  border: 3px solid ",";\n  border-radius: 50%;\n  background-color: ",";\n  top: 25px;\n  left: -32px;\n}\n}\n\n"],(function(n){return n.theme.text}),(function(n){return n.theme.menuColor}),(function(n){return n.theme.text}),(function(n){return n.theme.text}),(function(n){return n.theme.tertiaryColor}),(function(n){return n.theme.secondaryLightColor}),(function(n){return n.theme.primaryLightColorTwo}),(function(n){return n.theme.secondaryLightColor}),(function(n){return n.theme.meshInterfaceLogoFilter}),(function(n){return n.theme.primaryLightColor}),(function(n){return n.theme.secondaryLightColorTwo}),(function(n){return n.theme.DarkTheme?"#313131":"#C9FCF6"}),(function(n){return n.theme.DarkTheme?n.theme.keppelColor:"#00B39F"}),(function(n){return n.theme.keppelColor}),(function(n){return n.theme.primaryLightColorTwo}),(function(n){return n.theme.secondaryLightColor}),(function(n){return n.theme.secondaryLightColor}),(function(n){return n.theme.secondaryColor}),(function(n){return n.theme.tertiaryColor}),(function(n){return n.theme.tertiaryColor}),(function(n){return n.theme.DarkTheme?"#212121":"#FFFFFF"}),(function(n){return n.theme.projectShadowsize}),(function(n){return n.theme.DarkTheme?"#00D3A9":"#E6E6E6"}),(function(n){return n.theme.primaryColor}),(function(n){return n.theme.secondaryColor}),(function(n){return n.theme.text}),(function(n){return n.theme.tertiaryColor}),(function(n){return n.theme.tertiaryColor}),(function(n){return n.theme.secondaryColor}))}}]);
//# sourceMappingURL=42121890438dde7aed0e5181afb83306a74b6fa8-029cbb03e0d1cd80b2bf.js.map