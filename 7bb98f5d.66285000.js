(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{110:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),p=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=p(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(t),m=a,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||i;return t?r.a.createElement(d,l(l({ref:n},s),{},{components:t})):r.a.createElement(d,l({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},82:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(2),r=t(6),i=(t(0),t(110)),o={title:"#[ink::contract]",slug:"/macros-attributes/contract"},l={unversionedId:"macros-attributes/contract",id:"macros-attributes/contract",isDocsHomePage:!1,title:"#[ink::contract]",description:"Entry point for writing ink! smart contracts.",source:"@site/docs/macros-attributes/contract.md",slug:"/macros-attributes/contract",permalink:"/ink-docs/macros-attributes/contract",editUrl:"https://github.com/ink-docs/edit/master/docs/macros-attributes/contract.md",version:"current",sidebar:"reference",previous:{title:"Overview",permalink:"/ink-docs/macros-attributes"},next:{title:"#[ink(anonymous)]",permalink:"/ink-docs/macros-attributes/anonymous"}},c=[{value:"Header Arguments",id:"header-arguments",children:[]},{value:"Anaylsis",id:"anaylsis",children:[]},{value:"Interacting with the Contract Executor",id:"interacting-with-the-contract-executor",children:[]},{value:"Events",id:"events",children:[]},{value:"Example: Flipper",id:"example-flipper",children:[]}],s={rightToc:c};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Entry point for writing ink! smart contracts."),Object(i.b)("p",null,"If you are a beginner trying to learn ink! we recommend you to check out\nour extensive ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://substrate.dev/substrate-contracts-workshop/#/"}),"ink! workshop"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," In all below examples we will be using ",Object(i.b)("inlineCode",{parentName:"p"},"ink_lang")," crate aliased as just ",Object(i.b)("inlineCode",{parentName:"p"},"ink"),".\nYou can do this yourself by adding the following line to your code:\n",Object(i.b)("inlineCode",{parentName:"p"},"use ink_lang as ink;")),Object(i.b)("h1",{id:"description"},"Description"),Object(i.b)("p",null,"The macro does analysis on the provided smart contract code and generates\nproper code."),Object(i.b)("p",null,"ink! smart contracts can compile in several different modes.\nThere are two main compilation modes using either"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"on-chain mode: ",Object(i.b)("inlineCode",{parentName:"li"},"no_std")," + WebAssembly as target"),Object(i.b)("li",{parentName:"ul"},"off-chain mode: ",Object(i.b)("inlineCode",{parentName:"li"},"std"))),Object(i.b)("p",null,"We generally use the on-chain mode for actual smart contract deployment\nwhereas we use the off-chain mode for smart contract testing using the\noff-chain environment provided by the ",Object(i.b)("inlineCode",{parentName:"p"},"ink_env")," crate."),Object(i.b)("h1",{id:"usage"},"Usage"),Object(i.b)("h2",{id:"header-arguments"},"Header Arguments"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"#[ink::contract]")," macro can be provided with some additional comma-separated\nheader arguments:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"dynamic_storage_allocator: bool")),Object(i.b)("p",{parentName:"li"},"   Tells the ink! code generator to allow usage of ink!'s built-in dynamic\nstorage allocator."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"true"),": Use the dynamic storage allocator provided by ink!.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"false"),": Do NOT use the dynamic storage allocator provided by ink!."),Object(i.b)("p",{parentName:"li"},"This feature is generally only needed for smart contracts that try to model\ntheir data in a way that contains storage entites within other storage\nentities."),Object(i.b)("p",{parentName:"li"},"Contract writers should try to write smart contracts that do not depend on the\ndynamic storage allocator since enabling it comes at a cost of increased Wasm\nfile size. Although it will enable interesting use cases. Use it with care!"),Object(i.b)("p",{parentName:"li"},"An example for this is the following type that could potentially be used\nwithin a contract's storage struct definition:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"// A storage vector of storage vectors.\nuse ink_storage as storage;\ntype Foo = storage::Vec<storage::Vec<i32>>;\n")),Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Usage Example:")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"use ink_lang as ink;\n#[ink::contract(dynamic_storage_allocator = true)]\nmod my_contract {\n    #[ink(storage)]\n    pub struct MyStorage;\n    impl MyStorage {\n        #[ink(constructor)]\n        pub fn construct() -> Self { MyStorage {} }\n        #[ink(message)]\n        pub fn message(&self) {}\n    }\n    // ...\n}\n")),Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Default value:")," ",Object(i.b)("inlineCode",{parentName:"p"},"false"))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"compile_as_dependency: bool")),Object(i.b)("p",{parentName:"li"},"   Tells the ink! code generator to ",Object(i.b)("strong",{parentName:"p"},"always")," or ",Object(i.b)("strong",{parentName:"p"},"never"),"\ncompile the smart contract as if it was used as a dependency of another ink!\nsmart contract."),Object(i.b)("p",{parentName:"li"},"   Normally this flag is only really useful for ink! developers who\nwant to inspect code generation of ink! smart contracts.\nThe author is not aware of any particular practical use case for users that\nmakes use of this flag but contract writers are encouraged to disprove this."),Object(i.b)("p",{parentName:"li"},"   Note that it is recommended to make use of the built-in crate feature\n",Object(i.b)("inlineCode",{parentName:"p"},"ink-as-dependency")," to flag smart contract dependencies listed in a contract's\n",Object(i.b)("inlineCode",{parentName:"p"},"Cargo.toml")," as actual dependencies to ink!."),Object(i.b)("p",{parentName:"li"},"   ",Object(i.b)("strong",{parentName:"p"},"Usage Example:")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"use ink_lang as ink;\n#[ink::contract(compile_as_dependency = true)]\nmod my_contract {\n    #[ink(storage)]\n    pub struct MyStorage;\n    impl MyStorage {\n        #[ink(constructor)]\n        pub fn construct() -> Self { MyStorage {} }\n        #[ink(message)]\n        pub fn message(&self) {}\n    }\n    // ...\n}\n")),Object(i.b)("p",{parentName:"li"},"   ",Object(i.b)("strong",{parentName:"p"},"Default value:")," Depends on the crate feature propagation of ",Object(i.b)("inlineCode",{parentName:"p"},"Cargo.toml"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"env: impl Environment")),Object(i.b)("p",{parentName:"li"},"   Tells the ink! code generator which environment to use for the ink! smart contract.\nThe environment must implement the ",Object(i.b)("inlineCode",{parentName:"p"},"Environment")," (defined in ",Object(i.b)("inlineCode",{parentName:"p"},"ink_env"),") trait and provides\nall the necessary fundamental type definitions for ",Object(i.b)("inlineCode",{parentName:"p"},"Balance"),", ",Object(i.b)("inlineCode",{parentName:"p"},"AccountId")," etc."),Object(i.b)("p",{parentName:"li"},"   When using a custom ",Object(i.b)("inlineCode",{parentName:"p"},"Environment")," implementation for a smart contract all types\nthat it exposes to the ink! smart contract and the mirrored types used in the runtime\nmust be aligned with respect to SCALE encoding and semantics."),Object(i.b)("p",{parentName:"li"},"   ",Object(i.b)("strong",{parentName:"p"},"Usage Example:")),Object(i.b)("p",{parentName:"li"},"   Given a custom ",Object(i.b)("inlineCode",{parentName:"p"},"Environment")," implementation:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"pub struct MyEnvironment;\n\nimpl ink_env::Environment for MyEnvironment {\n    const MAX_EVENT_TOPICS: usize = 3;\n    type AccountId = u64;\n    type Balance = u128;\n    type Hash = [u8; 32];\n    type Timestamp = u64;\n    type BlockNumber = u32;\n    type ChainExtension = ::ink_env::NoChainExtension;\n}\n")),Object(i.b)("p",{parentName:"li"},"   A user might implement their ink! smart contract using the above custom ",Object(i.b)("inlineCode",{parentName:"p"},"Environment"),"\nimplementation as demonstrated below:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"use ink_lang as ink;\n#[ink::contract(env = MyEnvironment)]\nmod my_contract {\n    pub struct MyEnvironment;\n   \n    impl ink_env::Environment for MyEnvironment {\n        const MAX_EVENT_TOPICS: usize = 3;\n        type AccountId = u64;\n        type Balance = u128;\n        type Hash = [u8; 32];\n        type Timestamp = u64;\n        type BlockNumber = u32;\n        type ChainExtension = ::ink_env::NoChainExtension;\n    }\n    \n    #[ink(storage)]\n    pub struct MyStorage;\n    impl MyStorage {\n        #[ink(constructor)]\n        pub fn construct() -> Self { MyStorage {} }\n        #[ink(message)]\n        pub fn message(&self) {}\n    }\n    // ...\n}\n")),Object(i.b)("p",{parentName:"li"},"   ",Object(i.b)("strong",{parentName:"p"},"Default value:")," ",Object(i.b)("inlineCode",{parentName:"p"},"DefaultEnvironment")," defined in ",Object(i.b)("inlineCode",{parentName:"p"},"ink_env")," crate."))),Object(i.b)("h2",{id:"anaylsis"},"Anaylsis"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"#[ink::contract]")," macro fully analyses its input smart contract\nagainst invalid arguments and structure."),Object(i.b)("p",null,"Some example rules include but are not limited to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"There must be exactly one ",Object(i.b)("inlineCode",{parentName:"p"},"#[ink(storage)]")," struct."),Object(i.b)("p",{parentName:"li"},"   This struct defines the layout of the storage that the ink! smart contract operates on.\nThe user is able to use a variety of built-in facilities, combine them in various ways\nor even provide their own implementations of storage data structures."),Object(i.b)("p",{parentName:"li"},"   For more information visit the ",Object(i.b)("inlineCode",{parentName:"p"},"ink_storage")," crate documentation."),Object(i.b)("p",{parentName:"li"},"   ",Object(i.b)("strong",{parentName:"p"},"Example:")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"use ink_lang as ink;\n#[ink::contract]\nmod flipper {\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n    impl Flipper {\n        #[ink(constructor)]\n        pub fn construct() -> Self { Flipper { value: false } }\n        #[ink(message)]\n        pub fn message(&self) {}\n    }\n}\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"There must be at least one ",Object(i.b)("inlineCode",{parentName:"p"},"#[ink(constructor)]")," defined method."),Object(i.b)("p",{parentName:"li"},"   Methods flagged with ",Object(i.b)("inlineCode",{parentName:"p"},"#[ink(constructor)]")," are special in that they are dispatchable\nupon contract instantiation. A contract may define multiple such constructors which\nallow users of the contract to instantiate a contract in multiple different ways."),Object(i.b)("p",{parentName:"li"},"   ",Object(i.b)("strong",{parentName:"p"},"Example:")),Object(i.b)("p",{parentName:"li"},"   Given the ",Object(i.b)("inlineCode",{parentName:"p"},"Flipper")," contract definition above we add an ",Object(i.b)("inlineCode",{parentName:"p"},"#[ink(constructor)]"),"\nas follows:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"use ink_lang as ink;\n#[ink::contract]\nmod flipper {\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n    impl Flipper {\n        #[ink(constructor)]\n        pub fn new(initial_value: bool) -> Self {\n            Flipper { value: false }\n        }\n        #[ink(message)]\n        # pub fn message(&self) {}\n    }\n}\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"There must be at least one ",Object(i.b)("inlineCode",{parentName:"p"},"#[ink(message)]")," defined method."),Object(i.b)("p",{parentName:"li"},"   Methods flagged with ",Object(i.b)("inlineCode",{parentName:"p"},"#[ink(message)]")," are special in that they are dispatchable\nupon contract invocation. The set of ink! messages defined for an ink! smart contract\ndefine its API surface with which users are allowed to interact."),Object(i.b)("p",{parentName:"li"},"   An ink! smart contract can have multiple such ink! messages defined."),Object(i.b)("p",{parentName:"li"},"   ",Object(i.b)("strong",{parentName:"p"},"Note:")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"An ink! message with a ",Object(i.b)("inlineCode",{parentName:"p"},"&self")," receiver may only read state whereas an ink! message\nwith a ",Object(i.b)("inlineCode",{parentName:"p"},"&mut self")," receiver may mutate the contract's storage."),Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Example:")),Object(i.b)("p",{parentName:"li"},"Given the ",Object(i.b)("inlineCode",{parentName:"p"},"Flipper")," contract definition above we add some ",Object(i.b)("inlineCode",{parentName:"p"},"#[ink(message)]")," definitions\nas follows:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"use ink_lang as ink;\n#[ink::contract]\nmod flipper {\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n    impl Flipper {\n        #[ink(constructor)]\n        pub fn new(initial_value: bool) -> Self {\n            Flipper { value: false }\n        }\n        /// Flips the current value.\n        #[ink(message)]\n        pub fn flip(&mut self) {\n            self.value = !self.value;\n        }\n\n        /// Returns the current value.\n        #[ink(message)]\n        pub fn get(&self) -> bool {\n            self.value\n        }\n    }\n}\n")),Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Payable Messages:")),Object(i.b)("p",{parentName:"li"},"An ink! message by default will reject calls that additional fund the smart contract.\nAuthors of ink! smart contracts can make an ink! message payable by adding the ",Object(i.b)("inlineCode",{parentName:"p"},"payable"),"\nflag to it. An example below:"),Object(i.b)("p",{parentName:"li"},"Note that ink! constructors are always implicitly payable and thus cannot be flagged\nas such."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"use ink_lang as ink;\n#[ink::contract]\nmod flipper {\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n    impl Flipper {\n        #[ink(constructor)]\n        pub fn new(initial_value: bool) -> Self {\n            Flipper { value: false }\n        }\n        /// Flips the current value.\n        #[ink(message)]\n        #[ink(payable)] // You can either specify payable out-of-line.\n        pub fn flip(&mut self) {\n            self.value = !self.value;\n        }\n\n        /// Returns the current value.\n        #[ink(message, payable)] // ... or specify payable inline.\n        pub fn get(&self) -> bool {\n            self.value\n        }\n    }\n}\n")),Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Controlling the messages selector:")),Object(i.b)("p",{parentName:"li"},"Every ink! message and ink! constructor has a unique selector with which the\nmessage or constructor can be uniquely identified within the ink! smart contract.\nThese selectors are mainly used to drive the contract's dispatch upon calling it."),Object(i.b)("p",{parentName:"li"},"An ink! smart contract author can control the selector of an ink! message or ink!\nconstructor using the ",Object(i.b)("inlineCode",{parentName:"p"},"selector")," flag. An example is shown below:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),'use ink_lang as ink;\n#[ink::contract]\nmod flipper {\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n    impl Flipper {\n        #[ink(constructor)]\n        #[ink(selector = "0xDEADBEEF")] // Works on constructors as well.\n        pub fn new(initial_value: bool) -> Self {\n            Flipper { value: false }\n        }\n\n        /// Flips the current value.\n        #[ink(message)]\n        #[ink(selector = "0xCAFEBABE")] // You can either specify selector out-of-line.\n        pub fn flip(&mut self) {\n            self.value = !self.value;\n        }\n       \n        /// Returns the current value.\n        #[ink(message, selector = "0xFEEDBEEF")] // ... or specify selector inline.\n        pub fn get(&self) -> bool {\n            self.value\n        }\n    }\n}\n')))))),Object(i.b)("h2",{id:"interacting-with-the-contract-executor"},"Interacting with the Contract Executor"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"ink_env")," crate provides facitilies to interact with the contract executor that\nconnects ink! smart contracts with the outer world."),Object(i.b)("p",null,"For example it is possible to query the current call's caller via:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"ink_env::test::run_test::<ink_env::DefaultEnvironment, _>(|_| {\n    let caller = ink_env::caller::<ink_env::DefaultEnvironment>();\n    let _caller = caller;\n    Ok(())\n}).unwrap();\n")),Object(i.b)("p",null,"However, ink! provides a much simpler way to interact with the contract executor\nvia its environment accessor. An example below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),' use ink_lang as ink;\n \n #[ink::contract]\n mod greeter {\n     #[ink(storage)]\n     pub struct Greeter;\n\n     impl Greeter {\n         #[ink(constructor)]\n         pub fn new() -> Self {\n             let caller = Self::env().caller();\n             let message = format!("thanks for instantiation {:?}", caller);\n             ink_env::debug_println(&message);\n             Greeter {}\n         }\n\n         #[ink(message, payable)]\n         pub fn fund(&mut self) {\n             let caller = self.env().caller();\n             let value = self.env().transferred_balance();\n             let message = format!("thanks for the funding of {:?} from {:?}", value, caller);\n             ink_env::debug_println(&message);\n         }\n     }\n }\n')),Object(i.b)("h2",{id:"events"},"Events"),Object(i.b)("p",null,"An ink! smart contract may define events that it can emit during contract execution.\nEmitting events can be used by third party tools to query information about a contract's\nexecution and state."),Object(i.b)("p",null,"The following example ink! contract shows how an event ",Object(i.b)("inlineCode",{parentName:"p"},"Transferred")," is defined and\nemitted in the ",Object(i.b)("inlineCode",{parentName:"p"},"#[ink(constructor)]"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"})," use ink_lang as ink;\n \n #[ink::contract]\n mod erc20 {\n     /// Defines an event that is emitted every time value is transferred.\n     #[ink(event)]\n     pub struct Transferred {\n         from: Option<AccountId>,\n         to: Option<AccountId>,\n         value: Balance,\n     }\n\n     #[ink(storage)]\n     pub struct Erc20 {\n         total_supply: Balance,\n         // more fields ...\n     }\n\n     impl Erc20 {\n         #[ink(constructor)]\n         pub fn new(initial_supply: Balance) -> Self {\n             let caller = Self::env().caller();\n             Self::env().emit_event(Transferred {\n                 from: None,\n                 to: Some(caller),\n                 value: initial_supply,\n             });\n             Self { total_supply: initial_supply }\n         }\n\n         #[ink(message)]\n         pub fn total_supply(&self) -> Balance {\n             self.total_supply\n         }\n     }\n }\n")),Object(i.b)("h2",{id:"example-flipper"},"Example: Flipper"),Object(i.b)("p",null,'The below code shows the complete implementation of the so-called Flipper\nink! smart contract.\nFor us it acts as the "Hello, World!" of the ink! smart contracts because\nit is minimal while still providing some more or less useful functionality.'),Object(i.b)("p",null,"It controls a single ",Object(i.b)("inlineCode",{parentName:"p"},"bool")," value that can be either ",Object(i.b)("inlineCode",{parentName:"p"},"false")," or ",Object(i.b)("inlineCode",{parentName:"p"},"true"),"\nand allows the user to flip this value using the ",Object(i.b)("inlineCode",{parentName:"p"},"Flipper::flip")," message\nor retrieve the current value using ",Object(i.b)("inlineCode",{parentName:"p"},"Flipper::get"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"})," use ink_lang as ink;\n\n #[ink::contract]\n pub mod flipper {\n     #[ink(storage)]\n     pub struct Flipper {\n         value: bool,\n     }\n\n     impl Flipper {\n         /// Creates a new flipper smart contract initialized with the given value.\n         #[ink(constructor)]\n         pub fn new(init_value: bool) -> Self {\n             Self { value: init_value }\n         }\n\n         /// Flips the current value of the Flipper's bool.\n         #[ink(message)]\n         pub fn flip(&mut self) {\n             self.value = !self.value;\n         }\n\n         /// Returns the current value of the Flipper's bool.\n         #[ink(message)]\n         pub fn get(&self) -> bool {\n             self.value\n         }\n     }\n }\n")))}p.isMDXComponent=!0}}]);