(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{114:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return b}));var r=t(1),a=t(6),p=(t(0),t(123)),c={title:"Reparentable"},o={id:"reparentable",title:"Reparentable",description:"Get the [Reparentable](./tools#reparentable--%EF%B8%8F) component from the package.",source:"@site/docs\\reparentable.mdx",permalink:"/react-reparenting/docs/reparentable",editUrl:"https://github.com/paol-imi/react-reparenting/edit/master/website/docs/reparentable.mdx",sidebar:"docs",previous:{title:"Usage",permalink:"/react-reparenting/docs/usage"},next:{title:"Parent",permalink:"/react-reparenting/docs/parent"}},i=[{value:"Setup \u2699\ufe0f",id:"setup-\ufe0f",children:[]},{value:"Usage \ud83d\udcd6",id:"usage-",children:[]},{value:"Example \ud83d\udca1",id:"example-",children:[]}],l={rightToc:i};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(p.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(p.b)("p",null,"Get the ",Object(p.b)("a",Object(r.a)({parentName:"p"},{href:"./tools#reparentable--%EF%B8%8F"}),"Reparentable")," component from the package."),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import {Reparentable, sendReparentableChild} from 'react-reparenting';\n")),Object(p.b)("h2",{id:"setup-\ufe0f"},"Setup \u2699\ufe0f"),Object(p.b)("p",null,"Once you have chosen who the parent components are, use the ",Object(p.b)("inlineCode",{parentName:"p"},"<Reparentable>")," component within them. That component ",Object(p.b)("strong",{parentName:"p"},"must")," be the direct parent of the children who can be transferred, and it ",Object(p.b)("strong",{parentName:"p"},"must")," have a unique id that differentiates it from other ",Object(p.b)("inlineCode",{parentName:"p"},"<Reparentable>"),"s in your app."),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'const MyParent = ({id, children}) => {\n  return (\n    <div className="parent">\n      {/* <Reparentable> must be the direct parent  \n          of the children and have an unique id. \n          You can render what you want before. */}\n      <Reparentable id={id}>{children}</Reparentable>\n    </div>\n  );\n};\n')),Object(p.b)("h2",{id:"usage-"},"Usage \ud83d\udcd6"),Object(p.b)("p",null,"Let's define a very simple child component for the example."),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const Child = () => <div />;\n")),Object(p.b)("p",null,"We define in our app two simple parent components, and insert within them the ",Object(p.b)("inlineCode",{parentName:"p"},"<Reparentable>"),"s with their ids and children."),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'const App = () => {\n  // The children\'s keys.\n  const [parent, setParent] = useState({\n    A: [\'c1\', \'c2\'],\n    B: [\'c3\'],\n  });\n\n  // The child components.\n  const children = {\n    parentA: parent.A.map((key) => <Child key={key} />),\n    parentB: parent.B.map((key) => <Child key={key} />),\n  };\n\n  return (\n    <>\n      {/* Parent A */}\n      <div className="parent">\n        <Reparentable id="parentA">{children.parentA}</Reparentable>\n      </div>\n      {/* Parent B */}\n      <div className="parent">\n        <Reparentable id="parentB">{children.parentB}</Reparentable>\n      </div>\n    </>\n  );\n};\n')),Object(p.b)("p",null,"Now we can reparent anywhere in our app using the ",Object(p.b)("inlineCode",{parentName:"p"},"sendReparentableChild")," method."),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"// Send the first Child ('c3') of 'parentB'\n// before the Child ('c2') of 'parentA'.\nsendReparentableChild('parentB', 'parentA', 0, 'c2');\n// Send the Child ('c1') of 'parentA'\n// in the first position of 'parentB'.\nsendReparentableChild('parentA', 'parentB', 'c1', 0);\n\n// Re-render the components with the changes.\n// The transferred children won't be re-mounted.\nsetParent({\n  A: ['c3', 'c2'],\n  B: ['c1'],\n});\n")),Object(p.b)("h2",{id:"example-"},"Example \ud83d\udca1"),Object(p.b)("p",null,"Check out the full example on ",Object(p.b)("a",Object(r.a)({parentName:"p"},{href:"https://codesandbox.io/s/react-reparenting-rvfi4"}),"codesandbox"),"."))}b.isMDXComponent=!0},123:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),b=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o({},n,{},e)),t},s=function(e){var n=b(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=b(t),u=r,m=s["".concat(c,".").concat(u)]||s[u]||d[u]||p;return t?a.a.createElement(m,o({ref:n},l,{components:t})):a.a.createElement(m,o({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,c=new Array(p);c[0]=u;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<p;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);