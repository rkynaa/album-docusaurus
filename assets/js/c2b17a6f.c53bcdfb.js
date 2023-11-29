"use strict";(self.webpackChunkalbum_docusaurus=self.webpackChunkalbum_docusaurus||[]).push([[8002],{2110:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=r(5893),t=r(1151),s=r(4866),i=r(5162);const o={sidebar_label:"API Paths",sidebar_position:2},l="API Paths",c={id:"album-api/api-paths-mdx",title:"API Paths",description:"List of paths provided by the API (and with details):",source:"@site/docs/album-api/api-paths-mdx.mdx",sourceDirName:"album-api",slug:"/album-api/api-paths-mdx",permalink:"/album-docusaurus/docs/album-api/api-paths-mdx",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/album-api/api-paths-mdx.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"API Paths",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"API Paths",permalink:"/album-docusaurus/docs/album-api/api-paths"},next:{title:"API Responses",permalink:"/album-docusaurus/docs/album-api/api-responses"}},u={},d=[{value:"<code>/api/actions/</code>",id:"apiactions",level:2},{value:"<code>/api/actions/{id}/</code>",id:"apiactionsid",level:2},{value:"<code>/api/actions/{id}/resend/</code>",id:"apiactionsidresend",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"api-paths",children:"API Paths"}),"\n",(0,a.jsx)(n.p,{children:"List of paths provided by the API (and with details):"}),"\n",(0,a.jsx)(n.h2,{id:"apiactions",children:(0,a.jsx)(n.code,{children:"/api/actions/"})}),"\n",(0,a.jsxs)(s.Z,{defaultValue:"apple",values:[{label:"Get",value:"apple"},{label:"Post",value:"orange"}],children:[(0,a.jsxs)(i.Z,{value:"apple",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yml",metastring:'title: "get"',children:"get:\r\noperationId: actions_list\r\nsummary: Get Actions List\r\ndescription: Retrieves a list of actions.\r\ntags:\r\n- actions\r\nresponses: #API's response based on code\n"})}),(0,a.jsxs)(n.p,{children:["List of responses are ",(0,a.jsx)(n.a,{href:"/docs/album-api/api-responses#get",children:"here"}),"."]})]}),(0,a.jsx)(i.Z,{value:"orange",children:"This is an orange \ud83c\udf4a"})]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"post"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yml",metastring:'title: "post"',children:"post:\r\n  operationId: actions_create\r\n  summary: Create an Action\r\n  description: Creates a new action.\r\n  tags:\r\n  - actions\r\n  requestBody:\r\n  content:\r\n      application/json:\r\n      schema:\r\n          $ref: '#/components/schemas/ActionCreate'\r\n      application/x-www-form-urlencoded:\r\n      schema:\r\n          $ref: '#/components/schemas/ActionCreate'\r\n      multipart/form-data:\r\n      schema:\r\n          $ref: '#/components/schemas/ActionCreate'\r\n  responses: #API's response based on code\n"})}),"\n",(0,a.jsxs)(n.p,{children:["List of responses are ",(0,a.jsx)(n.a,{href:"/docs/album-api/api-responses#post",children:"here"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"apiactionsid",children:(0,a.jsx)(n.code,{children:"/api/actions/{id}/"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"get"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yml",children:"get:\r\n    operationId: actions_retrieve\r\n    summary: Get an Action\r\n    description: Retrieves an action by its ID.\r\n    parameters:\r\n    - in: path\r\n    name: id\r\n    schema:\r\n        type: string\r\n        title: UUID\r\n    description: A unique value identifying the action.\r\n    required: true\r\n    tags:\r\n    - actions\r\n    responses: #API's response based on code\n"})}),"\n",(0,a.jsxs)(n.p,{children:["List of responses are ",(0,a.jsx)(n.a,{href:"/docs/album-api/api-responses#get-1",children:"here"})]}),"\n",(0,a.jsx)(n.h2,{id:"apiactionsidresend",children:(0,a.jsx)(n.code,{children:"/api/actions/{id}/resend/"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"post"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yml",children:"post:\r\n      operationId: actions_resend_create\r\n      summary: Resend an Action\r\n      description: Resends a creation request for a specific action using its ID.\r\n      parameters:\r\n      - in: path\r\n        name: id\r\n        schema:\r\n          type: string\r\n          title: UUID\r\n        description: A unique value identifying the action.\r\n        required: true\r\n      tags:\r\n      - actions\r\n      requestBody:\r\n        content:\r\n          application/json:\r\n            schema:\r\n              $ref: '#/components/schemas/Action'\r\n          application/x-www-form-urlencoded:\r\n            schema:\r\n              $ref: '#/components/schemas/Action'\r\n          multipart/form-data:\r\n            schema:\r\n              $ref: '#/components/schemas/Action'\r\n      responses: # API's response based on code\n"})}),"\n",(0,a.jsxs)(n.p,{children:["List of responses are ",(0,a.jsx)(n.a,{href:"/docs/album-api/api-responses#post-1",children:"here"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},5162:(e,n,r)=>{r.d(n,{Z:()=>i});r(7294);var a=r(6010);const t={tabItem:"tabItem_Ymn6"};var s=r(5893);function i(e){let{children:n,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(t.tabItem,i),hidden:r,children:n})}},4866:(e,n,r)=>{r.d(n,{Z:()=>I});var a=r(7294),t=r(6010),s=r(2466),i=r(6550),o=r(469),l=r(1980),c=r(7392),u=r(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:a,default:t}}=e;return{value:n,label:r,attributes:a,default:t}}))}(r);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function h(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const t=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l._X)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(t.location.search);n.set(s,e),t.replace({...t.location,search:n.toString()})}),[s,t])]}function b(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,s=p(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[c,d]=m({queryString:r,groupId:t}),[b,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,s]=(0,u.Nk)(r);return[t,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:t}),x=(()=>{const e=c??b;return h({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{x&&l(x)}),[x]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=r(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(5893);function g(e){let{className:n,block:r,selectedValue:a,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const n=e.currentTarget,r=l.indexOf(n),t=o[r].value;t!==a&&(c(n),i(t))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,t.Z)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":a===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:t}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===t));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=b(e);return(0,v.jsxs)("div",{className:(0,t.Z)("tabs-container",x.tabList),children:[(0,v.jsx)(g,{...e,...n}),(0,v.jsx)(j,{...e,...n})]})}function I(e){const n=(0,f.Z)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(n))}},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>i});var a=r(7294);const t={},s=a.createContext(t);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);