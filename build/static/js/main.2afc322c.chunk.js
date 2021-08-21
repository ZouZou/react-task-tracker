(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{28:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(20),s=n.n(a),o=(n(28),n(14)),u=n(23),i=n(6),j=n.n(i),l=n(11),d=n(10),b=n(8),f=n(2),h=n(1),p=function(e){var t=e.color,n=e.text,r=e.onClick;return Object(h.jsx)("button",{onClick:r,style:{backgroundColor:t},className:"btn",children:n})};p.defaultProps={color:"steelBlue"};var O=p,x=function(e){var t=e.title,n=e.onAdd,r=e.showAdd,c=Object(f.e)();return Object(h.jsxs)("header",{className:"header",children:[Object(h.jsx)("h1",{children:t}),"/"===c.pathname&&Object(h.jsx)(O,{color:r?"red":"green",text:r?"Close":"Add",onClick:n})]})};x.defaultProps={title:"Task Tracker"};var m=x,v=function(){return Object(h.jsxs)("footer",{children:[Object(h.jsx)("p",{children:"Copyright \xa9 2021"}),Object(h.jsx)(b.b,{to:"/about",children:"About"})]})},k=n(22),g=function(e){var t=e.task,n=e.onDelete,r=e.onToggle;return Object(h.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return r(t.id)},children:[Object(h.jsxs)("h3",{children:[t.text,Object(h.jsx)(k.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(h.jsx)("p",{children:t.day})]})},y=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle;return Object(h.jsx)(h.Fragment,{children:t.map((function(e){return Object(h.jsx)(g,{task:e,onDelete:n,onToggle:r},e.id)}))})},T=function(e){var t=e.onAdd,n=Object(r.useState)(""),c=Object(d.a)(n,2),a=c[0],s=c[1],o=Object(r.useState)(""),u=Object(d.a)(o,2),i=u[0],j=u[1],l=Object(r.useState)(!1),b=Object(d.a)(l,2),f=b[0],p=b[1];return Object(h.jsxs)("form",{className:"add-from",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:i,reminder:f}),s(""),j(""),p(!1)):alert("Please add a task")},children:[Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{children:"Task"}),Object(h.jsx)("input",{type:"text",placeholder:"Add Task",value:a,onChange:function(e){return s(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{children:"Day & Time"}),Object(h.jsx)("input",{type:"text",placeholder:"Add Day & Time",value:i,onChange:function(e){return j(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-control form-control-check",children:[Object(h.jsx)("label",{children:"Set Reminer"}),Object(h.jsx)("input",{type:"checkbox",value:f,checked:f,onChange:function(e){return p(e.currentTarget.checked)}})]}),Object(h.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})},w=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{children:"Version 1.0.0"}),Object(h.jsx)(b.b,{to:"/",children:"Go Back"})]})};var C=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),s=Object(d.a)(a,2),i=s[0],p=s[1],O="http://localhost:5500/tasks";Object(r.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var x=function(){var e=Object(l.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(O);case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(l.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(O,"/").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(l.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(O,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,p([].concat(Object(u.a)(i),[r]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(l.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(O,"/").concat(t),{method:"DELETE"});case 2:p(i.filter((function(e){return e.id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(l.a)(j.a.mark((function e(t){var n,r,c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(t);case 2:return n=e.sent,r=Object(o.a)(Object(o.a)({},n),{},{reminder:!n.reminder}),e.next=6,fetch("".concat(O,"/").concat(t),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 6:return c=e.sent,e.next=9,c.json();case 9:a=e.sent,p(i.map((function(e){return e.id===t?Object(o.a)(Object(o.a)({},e),{},{reminder:a.reminder}):e})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(b.a,{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(m,{onAdd:function(){return c(!n)},showAdd:n}),Object(h.jsx)(f.a,{path:"/",exact:!0,render:function(e){return Object(h.jsxs)(h.Fragment,{children:[n&&Object(h.jsx)(T,{onAdd:g}),i.length>0?Object(h.jsx)(y,{tasks:i,onDelete:C,onToggle:S}):"No Tasks to Show"]})}}),Object(h.jsx)(f.a,{path:"/about",component:w}),Object(h.jsx)(v,{})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root")),S()}},[[39,1,2]]]);
//# sourceMappingURL=main.2afc322c.chunk.js.map