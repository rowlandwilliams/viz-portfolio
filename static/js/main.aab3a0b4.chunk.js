(this["webpackJsonpviz-portfolio"]=this["webpackJsonpviz-portfolio"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},33:function(e,t,c){var r={"./stock-chart.jpg":34,"./supernova.jpg":35};function i(e){var t=n(e);return c(t)}function n(e){if(!c.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=n,e.exports=i,i.id=33},34:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/stock-chart.d3c8fdc8.jpg"},35:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/supernova.250f1e75.jpg"},36:function(e,t,c){"use strict";c.r(t);var r,i,n=c(1),o=c.n(n),s=c(14),l=c.n(s),a=(c(22),c(23),c(17)),j=c(7),d=c(0),u=function(){return Object(d.jsxs)("div",{className:"hidden md:block w-96 mt-8 text-sm",children:[Object(d.jsx)(j.b,{to:"/viz-portfolio/",children:"Projects"}),Object(d.jsx)("div",{children:"CV"})]})},b=c(16),h=c.n(b),x=function(e){var t=e.handleBurgerClick;return Object(d.jsx)("div",{onClick:t,children:Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",stroke:"black","stroke-width":"2","stroke-linecap":"round",children:[Object(d.jsx)("line",{x2:"30",y2:"30"}),Object(d.jsx)("line",{x1:"30",y2:"30"})]})})},f=function(e){var t=e.burgerIsVisible,c=e.handleBurgerClick;return Object(d.jsxs)("div",{className:h()("md:hidden absolute transition-left duration-300 top-0",{"-left-full":t,"left-0":!t},"w-full h-screen p-4 bg-gray-100 z-20 bg-opacity-95"),children:[Object(d.jsxs)("div",{className:"flex justify-between ",children:[Object(d.jsx)(j.b,{to:"/viz-portfolio/",children:"Projects"}),Object(d.jsx)(x,{handleBurgerClick:c})]}),Object(d.jsx)("div",{children:"CV"})]})},p=function(e){var t=e.handleBurgerClick;return Object(d.jsx)("div",{className:"md:hidden opacity-80",onClick:t,children:Object(d.jsxs)("svg",{viewBox:"0 0 100 80",width:"30",height:"30",children:[Object(d.jsx)("rect",{width:"100",height:"14"}),Object(d.jsx)("rect",{y:"30",width:"100",height:"14"}),Object(d.jsx)("rect",{y:"60",width:"100",height:"14"})]})})},g=function(e){var t=e.handleBurgerClick;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(j.b,{to:"/",children:[Object(d.jsxs)("div",{className:"flex justify-between items-center",children:[Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:"text-2xl",children:"ROWLAND WILLIAMS"})}),Object(d.jsx)(p,{handleBurgerClick:t})]}),Object(d.jsx)("div",{className:"text-gray-800",children:"Data Visualisation Engineer"})]})})},v=function(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),c=t[0],r=t[1],i=function(){r(!c)};return Object(d.jsxs)("div",{className:"w-screen md:w-80 md:h-screen p-4",children:[Object(d.jsx)(g,{handleBurgerClick:i}),Object(d.jsx)(f,{burgerIsVisible:c,handleBurgerClick:i}),Object(d.jsx)(u,{})]})},O=function(e){var t=e.projectTitle,c=(e.projectStack,e.backgroundColor);return Object(d.jsx)("div",{className:"absolute top-0 w-full h-full text-opacity-0 hover:text-opacity-100 bg-".concat(c," transition-bg-opacity duration-200 bg-opacity-0 hover:bg-opacity-80 text-white"),children:Object(d.jsx)("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl",children:t})})},m=(r=c(33),i=".jpg",r.keys().map((function(e){return{slug:e.substr(2).replace(i,""),module:r(e)}}))),k=function(e){var t=e.imgName,c=e.projectTitle,r=e.projectStack,i=e.backgroundColor;return Object(d.jsx)("div",{className:"w-full md:w-auto mx-2",children:Object(d.jsx)(j.b,{to:t,children:Object(d.jsxs)("div",{className:"relative",children:[Object(d.jsx)("img",{src:m.filter((function(e){return e.slug===t}))[0].module.default,alt:"suh",className:"relative"}),Object(d.jsx)(O,{projectTitle:c,projectStack:r,backgroundColor:i})]})})})},w=[{imgName:"stock-chart",projectTitle:"Stock-chart",projectStack:["d3.js","React"],backgroundColor:"stock_pink"},{imgName:"supernova",projectTitle:"Supernova AI Discovery",projectStack:["d3.js","React"],backgroundColor:"globe_blue"}],C=function(){return Object(d.jsx)("div",{className:"flex bg-gray-100 p-4",children:w.map((function(e){return Object(d.jsx)(k,{imgName:e.imgName,projectTitle:e.projectTitle,projectStack:e.projectStack,backgroundColor:e.backgroundColor})}))})},N=c(2);var y=function(){return console.log("/viz-portfolio","/viz-portfolio/"),Object(d.jsx)("div",{className:"relative flex flex-col md:flex-row",children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(v,{}),Object(d.jsxs)(N.c,{children:[Object(d.jsx)(N.a,{exact:!0,path:"/viz-portfolio/",children:Object(d.jsx)(C,{})}),Object(d.jsx)(N.a,{exact:!0,path:"/viz-portfolio/stockchart",children:Object(d.jsx)("div",{children:"stocks"})})]})]})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,37)).then((function(t){var c=t.getCLS,r=t.getFID,i=t.getFCP,n=t.getLCP,o=t.getTTFB;c(e),r(e),i(e),n(e),o(e)}))};l.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root")),S()}},[[36,1,2]]]);
//# sourceMappingURL=main.aab3a0b4.chunk.js.map