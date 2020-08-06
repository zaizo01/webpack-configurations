(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&'object'==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,'default',{enumerable:!0,value:a}),2&c&&'string'!=typeof a)for(var e in a)b.d(d,e,function(b){return a[b]}.bind(null,e));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=1)})([function(){},function(a,b,c){'use strict';function d(c,a){if(!(c instanceof a))throw new TypeError('Cannot call a class as a function')}function e(i,a){var b;if('undefined'==typeof Symbol||null==i[Symbol.iterator]){if(Array.isArray(i)||(b=f(i))||a&&i&&'number'==typeof i.length){b&&(i=b);var c=0,d=function(){};return{s:d,n:function(){return c>=i.length?{done:!0}:{done:!1,value:i[c++]}},e:function(b){throw b},f:d}}throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')}var j,k=!0,g=!1;return{s:function(){b=i[Symbol.iterator]()},n:function(){var c=b.next();return k=c.done,c},e:function(b){g=!0,j=b},f:function a(){try{k||null==b['return']||b['return']()}finally{if(g)throw a}}}}function f(d,e){if(d){if('string'==typeof d)return g(d,e);var b=Object.prototype.toString.call(d).slice(8,-1);return'Object'===b&&d.constructor&&(b=d.constructor.name),'Map'===b||'Set'===b?Array.from(d):'Arguments'===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)?g(d,e):void 0}}function g(e,a){(null==a||a>e.length)&&(a=e.length);for(var b=0,c=Array(a);b<a;b++)c[b]=e[b];return c}function h(c,a){if(!(c instanceof a))throw new TypeError('Cannot call a class as a function')}function i(e,a){for(var b,c=0;c<a.length;c++)b=a[c],b.enumerable=b.enumerable||!1,b.configurable=!0,'value'in b&&(b.writable=!0),Object.defineProperty(e,b.key,b)}function j(d,a,b){return a&&i(d.prototype,a),b&&i(d,b),d}function k(i,a){var b;if('undefined'==typeof Symbol||null==i[Symbol.iterator]){if(Array.isArray(i)||(b=l(i))||a&&i&&'number'==typeof i.length){b&&(i=b);var c=0,d=function(){};return{s:d,n:function(){return c>=i.length?{done:!0}:{done:!1,value:i[c++]}},e:function(b){throw b},f:d}}throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.')}var j,f=!0,g=!1;return{s:function(){b=i[Symbol.iterator]()},n:function(){var c=b.next();return f=c.done,c},e:function(b){g=!0,j=b},f:function a(){try{f||null==b['return']||b['return']()}finally{if(g)throw a}}}}function l(d,e){if(d){if('string'==typeof d)return m(d,e);var b=Object.prototype.toString.call(d).slice(8,-1);return'Object'===b&&d.constructor&&(b=d.constructor.name),'Map'===b||'Set'===b?Array.from(d):'Arguments'===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)?m(d,e):void 0}}function m(e,a){(null==a||a>e.length)&&(a=e.length);for(var b=0,c=Array(a);b<a;b++)c[b]=e[b];return c}c.r(b),c.d(b,'todoList',function(){return w});var n=c(0),o=function c(a){d(this,c),this.task=a,this.id=new Date().getTime(),this.completed=!1,this.created=new Date},p=function(){function b(){h(this,b),this.loadLocalStorage()}return j(b,[{key:'newTodo',value:function(b){this.todos.push(b),this.saveLocalStorage()}},{key:'deleteTodo',value:function(c){this.todos=this.todos.filter(function(a){return a.id!=c}),this.saveLocalStorage()}},{key:'markCompleted',value:function(f){var a,b=e(this.todos);try{for(b.s();!(a=b.n()).done;){var c=a.value;if(console.log(f,c.id),c.id==f){c.completd=!c.completd,this.saveLocalStorage();break}}}catch(c){b.e(c)}finally{b.f()}}},{key:'deleteCompleted',value:function(){this.todos=this.todos.filter(function(b){return!b.completd}),this.saveLocalStorage()}},{key:'saveLocalStorage',value:function(){localStorage.setItem('todo',JSON.stringify(this.todos))}},{key:'loadLocalStorage',value:function(){this.todos=localStorage.getItem('todo')?JSON.parse(localStorage.getItem('todo')):[]}}]),b}(),q=document.querySelector('.todo-list'),r=document.querySelector('.new-todo'),s=document.querySelector('.clear-completed'),t=document.querySelector('.filters'),u=document.querySelectorAll('.filtro'),v=function(d){var a='\n    <li class="'.concat(d.completd?'completed':'','" data-id="').concat(d.id,'">\n\t\t<div class="view">\n\t\t\t<input class="toggle" type="checkbox" ').concat(d.completd?'chekend':'','>\n\t\t\t<label>').concat(d.task,'</label>\n\t\t\t<button class="destroy"></button>\n\t\t</div>\n\t\t<input class="edit" value="Create a TodoMVC template">\n\t</li>\n    '),b=document.createElement('div');return b.innerHTML=a,q.append(b.firstElementChild),b.firstElementChild};r.addEventListener('keyup',function(c){if(13===c.keyCode&&0<r.value.length){console.log(r.value);var a=new o(r.value);w.newTodo(a),v(a),r.value=''}}),q.addEventListener('click',function(e){var a=e.target.localName,b=e.target.parentElement.parentElement,c=b.getAttribute('data-id');a.includes('input')?(w.markCompleted(c),b.classList.toggle('completed')):a.includes('button')&&(w.deleteTodo(c),q.removeChild(b))}),s.addEventListener('click',function(){w.deleteCompleted();for(var c,a=q.children.length-1;0<=a;a--)c=q.children[a],c.classList.contains('completed')&&q.removeChild(c)}),t.addEventListener('click',function(g){var a=g.target.text;if(a){u.forEach(function(b){return b.classList.remove('selected')}),g.target.classList.add('selected');var b,c=k(q.children);try{for(c.s();!(b=c.n()).done;){var d=b.value;d.classList.remove('hidden');var e=d.classList.contains('completed');'Pendientes'===a?e&&d.classList.add('hidden'):'Completados'===a?e||d.classList.add('hidden'):void 0}}catch(b){c.e(b)}finally{c.f()}}});var w=new p;w.todos.forEach(v)}]);