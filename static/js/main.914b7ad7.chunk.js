(this.webpackJsonpcomparedtowhat=this.webpackJsonpcomparedtowhat||[]).push([[0],{11:function(e,t,a){},14:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(15),l=a.n(i),c=(a(11),a(5)),o=a(6),u=a(3),r=a(8),d=a(7),h=(a(14),a(2)),m=a(1),b=(s.a.Component,function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={value_loc:"",value_num:3,error:null,isLoaded:!1,apiinfo:""},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n.handleClick=n.handleClick.bind(Object(u.a)(n)),n}return Object(o.a)(a,[{key:"handleChange",value:function(e){var t=e.target.getAttribute("mode");"loc"==t&&this.setState({value_loc:e.target.value}),"num"==t&&this.setState({value_num:e.target.value})}},{key:"handleSubmit",value:function(e){isNaN(+this.state.value_num)?alert("Please enter a valid number"):this.state.value_num>6||this.state.value_num<1?alert("Please enter a number between 1 and 6"):(alert("A name was submitted: "+this.state.value_loc+this.state.value_num),e.preventDefault())}},{key:"handleClick",value:function(e){e.preventDefault();var t=e.target.getAttribute("mode");"plus"===t&&(this.state.value_num+1>6?alert("Please enter a number between 1 and 6"):this.setState({value_num:this.state.value_num+1})),"minus"===t&&(this.state.value_num-1<1?alert("Please enter a number between 1 and 6"):this.setState({value_num:this.state.value_num-1}))}},{key:"fetchAPI",value:function(){var e=this;fetch("https://parseapi.back4app.com/classes/Uszipcode_US_Zip_Code?limit=3500&order=County&keys=Primary_city,County,State,US_Zip_Code,estimated_population",{method:"get",headers:new Headers({"X-Parse-Application-Id":"agOTkpIB8tfKwaMVg4Pl8U8vFCnccEl8XAYvIdRV","X-Parse-REST-API-Key":"2tHQfbGYAclL4yBKJFcgYcIVjCX8mtRpl18AK98S"})}).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,apiinfo:t.items})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"renderapiinfo",value:function(){var e=this.state.error,t=this.state.isLoaded,a=this.state.apiinfo;return e?Object(m.jsxs)("div",{children:["Error: ",e.message]}):t?Object(m.jsx)("ul",{children:a.map((function(e){return Object(m.jsxs)("li",{children:[e.name," ",e.price]},e.id)}))}):Object(m.jsx)("div",{children:"Loading..."})}},{key:"render",value:function(){return Object(m.jsxs)(h.a,{className:"page",children:[Object(m.jsxs)("header",{className:"App-header",children:[Object(m.jsx)("div",{className:"logo",children:" CounText"}),Object(m.jsx)("label",{className:"headercontent",children:" A comparison tool for journalists who need to make sense of their data - through context."}),Object(m.jsx)(h.b,{to:"/Info",className:"moreinfo",children:"MORE INFO"})]}),Object(m.jsx)("form",{onSubmit:this.handleSubmit,className:"Main",children:Object(m.jsxs)("div",{className:"inputform",children:[Object(m.jsx)("label",{children:"Enter a location for comparison, and the number of counties to compare it to:"}),Object(m.jsxs)("label",{children:["Location:",Object(m.jsx)("input",{mode:"loc",type:"text",value:this.state.value_loc,onChange:this.handleChange})]}),Object(m.jsxs)("div",{className:"similarcounties",children:[Object(m.jsxs)("label",{children:["Number of similar counties:",Object(m.jsx)("input",{id:"simcount",mode:"num",type:"text",value:this.state.value_num,onChange:this.handleChange})]}),Object(m.jsxs)("div",{className:"updownbutton",children:[Object(m.jsx)("button",{className:"plusminbutton",onClick:this.handleClick,mode:"plus",children:"+"}),Object(m.jsx)("button",{className:"plusminbutton",onClick:this.handleClick,mode:"minus",children:"-"})]})]}),Object(m.jsx)("div",{className:"submitbutton",children:Object(m.jsx)("input",{type:"submit",value:"Search"})})]})}),Object(m.jsx)("div",{className:"censusinfo"})]})}}]),a}(s.a.Component)),j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,32)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,l=t.getTTFB;a(e),n(e),s(e),i(e),l(e)}))};l.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(b,{})}),document.getElementById("root")),j()}},[[31,1,2]]]);
//# sourceMappingURL=main.914b7ad7.chunk.js.map