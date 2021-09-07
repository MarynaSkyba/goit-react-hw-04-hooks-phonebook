(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{19:function(n,e,t){},24:function(n,e,t){"use strict";t.r(e);var a,r,o,i,c,s,l,b,d,p,u,x=t(1),h=t.n(x),m=t(9),f=t.n(m),j=(t(19),t(12)),g=t(4),O=t(5),w=t(7),y=t(6),k=t(25),v=t(2),C=t(3),S=C.a.button(a||(a=Object(v.a)(["\n  display: inline-block;\n  width: 30%;\n  border-width: 0;\n  line-height: 40px;\n  border-radius: 20px;\n  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);\n  text-transform: uppercase;\n  font-size: 14px;\n  background-color: antiquewhite;\n  cursor: pointer;\n"]))),z=C.a.ul(r||(r=Object(v.a)(["\n  list-style: none;\n  max-width: 400px;\n  padding: 40px 50px;\n  margin: 50px auto 0;\n  background-color: gainsboro;\n"]))),A=C.a.p(o||(o=Object(v.a)(["\n  display: block;\n  padding: 0 15px;\n  font-family: 'Roboto', sans-serif;\n  color: black;\n  font-size: 14px;\n"]))),I=C.a.li(i||(i=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);\n  border-radius: 20px;\n  margin-bottom: 10px;\n  background: rgba(255, 255, 255, 0.2);\n"]))),R=t(0),L=function(n){var e=n.contacts,t=n.onDeleteContacts;return Object(R.jsx)(z,{children:e.map((function(n){var e=n.id,a=n.name,r=n.number;return Object(R.jsxs)(I,{children:[Object(R.jsxs)(A,{children:[a," : ",r]}),Object(R.jsx)(S,{onClick:function(){return t(e)},children:"Delete"})]},e)}))})},F=t(11),q=C.a.form(c||(c=Object(v.a)(["\n  max-width: 400px;\n  padding: 40px 50px;\n  margin: 50px auto 0;\n  background-color: gainsboro;\n"]))),D=C.a.label(s||(s=Object(v.a)(["\n  display: block;\n  font-family: 'Roboto', sans-serif;\n  color: black;\n  text-transform: uppercase;\n  font-size: 14px;\n"]))),N=C.a.input(l||(l=Object(v.a)(["\n  display: block;\n  width: 100%;\n  padding: 0 0 0 15px;\n  margin: 10px 0 15px;\n  border-width: 0;\n  line-height: 40px;\n  border-radius: 20px;\n  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);\n  color: black;\n  background: rgba(255, 255, 255, 0.2);\n  font-family: 'Roboto', sans-serif;\n"]))),H=C.a.button(b||(b=Object(v.a)(["\n  display: block;\n  width: 103%;\n  margin: 40px 0 15px;\n  border-width: 0;\n  line-height: 40px;\n  border-radius: 20px;\n  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);\n  text-transform: uppercase;\n  font-size: 14px;\n  background-color: antiquewhite;\n  cursor: pointer;\n"]))),J=function(n){Object(w.a)(t,n);var e=Object(y.a)(t);function t(){var n;Object(g.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).state={name:"",number:""},n.nameId=Object(k.a)(),n.telId=Object(k.a)(),n.handleNameChange=function(e){var t=e.currentTarget,a=t.name,r=t.value;n.setState(Object(F.a)({},a,r))},n.handleSubmit=function(e){var t=n.state,a=t.name,r=t.number;e.preventDefault(),n.props.onSubmit(a,r),n.reset()},n.reset=function(){n.setState({name:"",number:""})},n}return Object(O.a)(t,[{key:"render",value:function(){return Object(R.jsxs)(q,{onSubmit:this.handleSubmit,children:[Object(R.jsxs)(D,{htmlFor:this.nameId,children:["Name",Object(R.jsx)(N,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,id:this.nameId,value:this.state.name,onChange:this.handleNameChange})]}),Object(R.jsxs)(D,{htmlFor:this.telId,children:["Telephone",Object(R.jsx)(N,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,id:this.telId,value:this.state.number,onChange:this.handleNameChange})]}),Object(R.jsx)(H,{type:"submit",children:"Add to contacts"})]})}}]),t}(x.Component),T=C.a.label(d||(d=Object(v.a)(["\n  display: block;\n  width: 400px;\n  margin: 50px auto 0;\n  font-family: 'Roboto', sans-serif;\n  color: black;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 14px;\n"]))),Z=C.a.input(p||(p=Object(v.a)(["\n  display: block;\n  width: 100%;\n  padding: 0 0 0 15px;\n  margin: 10px 0 15px;\n  border-width: 0;\n  line-height: 40px;\n  border-radius: 20px;\n  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);\n  color: black;\n  background: rgba(255, 255, 255, 0.2);\n  font-family: 'Roboto', sans-serif;\n"]))),B=function(n){var e=n.value,t=n.onChange;return Object(R.jsxs)(T,{children:["Find contacts by name",Object(R.jsx)(Z,{type:"text",value:e,onChange:t})]})},E=C.a.h2(u||(u=Object(v.a)(["\n  display: block;\n  width: 400px;\n  margin: 50px auto 0;\n  font-family: 'Roboto', sans-serif;\n  color: black;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 34px;\n"]))),M=function(n){Object(w.a)(t,n);var e=Object(y.a)(t);function t(){var n;Object(g.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},n.deleteContacts=function(e){n.setState((function(n){return{contacts:n.contacts.filter((function(n){return n.id!==e}))}}))},n.formSubmitHandler=function(e,t){if(n.state.contacts.find((function(n){return n.name.toLowerCase()===e.toLowerCase()})))alert("".concat(e," is already in contacts!"));else{var a={id:Object(k.a)(),name:e,number:t};n.setState((function(n){var e=n.contacts;return{contacts:[a].concat(Object(j.a)(e))}}))}},n.changeFilter=function(e){n.setState({filter:e.currentTarget.value})},n.filteredContacts=function(){var e=n.state,t=e.filter;return e.contacts.filter((function(n){return n.name.toLocaleLowerCase().includes(t.toLocaleLowerCase())}))},n}return Object(O.a)(t,[{key:"render",value:function(){return Object(R.jsxs)("div",{children:[Object(R.jsx)(E,{children:"Phonebook"}),Object(R.jsx)(J,{onSubmit:this.formSubmitHandler}),Object(R.jsx)(E,{children:"Contacts"}),Object(R.jsx)(B,{value:this.state.filter,onChange:this.changeFilter}),Object(R.jsx)(L,{contacts:this.filteredContacts(),onDeleteContacts:this.deleteContacts})]})}}]),t}(x.Component);f.a.render(Object(R.jsx)(h.a.StrictMode,{children:Object(R.jsx)(M,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.aa28a610.chunk.js.map