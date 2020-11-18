(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),c=(n(0),n(92)),o={title:"Overview",slug:"/cargo-contract-cli"},i={unversionedId:"cargo-contract/overview",id:"cargo-contract/overview",isDocsHomePage:!1,title:"Overview",description:"What it is",source:"@site/docs/cargo-contract/overview.md",slug:"/cargo-contract-cli",permalink:"/ink-docs/cargo-contract-cli",editUrl:"https://github.com/ink-docs/edit/master/docs/cargo-contract/overview.md",version:"current",sidebar:"reference",previous:{title:"Overview",permalink:"/ink-docs/examples"},next:{title:"Overview",permalink:"/ink-docs/canvas"}},l=[{value:"What it is",id:"what-it-is",children:[]},{value:"Usage",id:"usage",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"what-it-is"},"What it is"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/paritytech/cargo-contract"}),Object(c.b)("inlineCode",{parentName:"a"},"cargo-contract"))," is a CLI tool for helping setting up\nand managing WebAssembly smart contracts written with ink!."),Object(c.b)("p",null,"The tool has a number of handy capabilities:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"cargo-contract 0.7.0\nUtilities to develop Wasm smart contracts\n\nUSAGE:\n    cargo contract <SUBCOMMAND>\n\nOPTIONS:\n    -h, --help          Prints help information\n    -V, --version       Prints version information\n\nSUBCOMMANDS:\n    new                 Setup and create a new smart contract project\n    build               Compiles the smart contract\n    generate-metadata   Generate contract metadata artifacts\n    test                Test the smart contract off-chain\n    deploy              Upload the smart contract code to the chain\n    instantiate         Instantiate a deployed smart contract\n    call                Arguments required for creating and sending\n                        an extrinsic to a substrate node\n")),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)("p",null,"You can install it this way:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"cargo install cargo-contract --force\n")),Object(c.b)("p",null,"Use the ",Object(c.b)("inlineCode",{parentName:"p"},"--force")," to ensure you are updated to the most recent ",Object(c.b)("inlineCode",{parentName:"p"},"cargo-contract")," version."),Object(c.b)("p",null,"In order to initialize a new ink! project you can use:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"cargo contract new flipper\n")),Object(c.b)("p",null,"This will create a folder ",Object(c.b)("inlineCode",{parentName:"p"},"flipper")," in your work directory.\nThe folder contains a scaffold ",Object(c.b)("inlineCode",{parentName:"p"},"Cargo.toml")," and a ",Object(c.b)("inlineCode",{parentName:"p"},"lib.rs"),", which both contain the necessary building blocks for using ink!."),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"lib.rs")," contains our hello world contract \u2012 the ",Object(c.b)("inlineCode",{parentName:"p"},"Flipper"),", which we explain in the next section."),Object(c.b)("p",null,"In order to build the contract just execute these commmands in the ",Object(c.b)("inlineCode",{parentName:"p"},"flipper")," folder:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"cargo contract build && cargo contract generate-metadata\n")),Object(c.b)("p",null,"As a result you'll get a file ",Object(c.b)("inlineCode",{parentName:"p"},"target/flipper.wasm")," and ",Object(c.b)("inlineCode",{parentName:"p"},"target/metadata.json"),". Those need to be used when deploying the contract."))}s.isMDXComponent=!0},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||c;return n?a.a.createElement(m,i(i({ref:t},p),{},{components:n})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<c;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);