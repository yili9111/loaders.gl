(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{194:function(e,t,r){"use strict";r.r(t);r(269),r(7);var n=r(16),a=r.n(n),i=r(2),u=r.n(i),o=r(0),s=r.n(o),c=r(44),f=r(380),p=r(257),l=r(382),b=(r(31),r(80),r(230));r(202),r(231),r(241);function d(e){var t={};return t.POSITION={value:new Float32Array(e.vertices),size:3},e.normals.length>0&&(t.NORMAL={value:new Float32Array(e.normals),size:3}),e.uvs.length>0&&(t.TEXCOORD_0={value:new Float32Array(e.uvs),size:2}),e.colors.length>0&&(t.COLOR_0={value:new Uint8Array(e.colors),size:3}),t}function y(e,t){var r,n;if(void 0===t&&(t={}),e instanceof ArrayBuffer){var a=(new b.a).decode(e);n="ascii"===(r=v(a,t)).format?m(a,r):function(e,t){for(var r,n={indices:[],vertices:[],normals:[],uvs:[],colors:[]},a="binary_little_endian"===t.format,i=new DataView(e,t.headerLength),u=0,o=0;o<t.elements.length;o++)for(var s=t.elements[o].count,c=0;c<s;c++){r=k(i,u,t.elements[o].properties,a),u+=r[1];var f=r[0];g(n,t.elements[o].name,f)}return n}(e,r)}else n=m(e,r=v(e,t));return function(e,t,r){var n={loaderData:{header:e},header:{vertexCount:t.indices.length||t.vertices.length/3},mode:t.indices&&t.indices.length>0?4:0,attributes:d(t)};return t.indices&&t.indices.length>0&&(n.indices={value:new Uint32Array(t.indices),size:1}),n}(r,n)}function v(e,t){var r="",n=0,a=/ply([\s\S]*)end_header\s/.exec(e);null!==a&&(r=a[1],n=a[0].length);for(var i,u,o,s={comments:[],elements:[],headerLength:n},c=r.split("\n"),f=0;f<c.length;f++){var p=c[f];if(""!==(p=p.trim()))switch(u=(o=p.split(/\s+/)).shift(),p=o.join(" "),u){case"format":s.format=o[0],s.version=o[1];break;case"comment":s.comments.push(p);break;case"element":void 0!==i&&s.elements.push(i),(i={}).name=o[0],i.count=parseInt(o[1],10),i.properties=[];break;case"property":i.properties.push(h(o,t.propertyNameMapping));break;default:console.log("unhandled",u,o)}}return void 0!==i&&s.elements.push(i),s}function h(e,t){var r={type:e[0]};return"list"===r.type?(r.name=e[3],r.countType=e[1],r.itemType=e[2]):r.name=e[1],t&&r.name in t&&(r.name=t[r.name]),r}function w(e,t){switch(t){case"char":case"uchar":case"short":case"ushort":case"int":case"uint":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":return parseInt(e,10);case"float":case"double":case"float32":case"float64":return parseFloat(e);default:throw new Error(t)}}function x(e,t){for(var r=t.split(/\s+/),n={},a=0;a<e.length;a++)if("list"===e[a].type){for(var i=[],u=w(r.shift(),e[a].countType),o=0;o<u;o++)i.push(w(r.shift(),e[a].itemType));n[e[a].name]=i}else n[e[a].name]=w(r.shift(),e[a].type);return n}function m(e,t){var r,n={indices:[],vertices:[],normals:[],uvs:[],colors:[]},a="";null!==(r=/end_header\s([\s\S]*)$/.exec(e))&&(a=r[1]);for(var i=a.split("\n"),u=0,o=0,s=0;s<i.length;s++){var c=i[s];if(""!==(c=c.trim())){o>=t.elements[u].count&&(u++,o=0);var f=x(t.elements[u].properties,c);g(n,t.elements[u].name,f),o++}}return n}function g(e,t,r){if("vertex"===t)e.vertices.push(r.x,r.y,r.z),"nx"in r&&"ny"in r&&"nz"in r&&e.normals.push(r.nx,r.ny,r.nz),"s"in r&&"t"in r&&e.uvs.push(r.s,r.t),"red"in r&&"green"in r&&"blue"in r&&e.colors.push(r.red/255,r.green/255,r.blue/255);else if("face"===t){var n=r.vertex_indices||r.vertex_index;3===n.length?e.indices.push(n[0],n[1],n[2]):4===n.length&&(e.indices.push(n[0],n[1],n[3]),e.indices.push(n[1],n[2],n[3]))}}function O(e,t,r,n){switch(r){case"int8":case"char":return[e.getInt8(t),1];case"uint8":case"uchar":return[e.getUint8(t),1];case"int16":case"short":return[e.getInt16(t,n),2];case"uint16":case"ushort":return[e.getUint16(t,n),2];case"int32":case"int":return[e.getInt32(t,n),4];case"uint32":case"uint":return[e.getUint32(t,n),4];case"float32":case"float":return[e.getFloat32(t,n),4];case"float64":case"double":return[e.getFloat64(t,n),8];default:throw new Error(r)}}function k(e,t,r,n){for(var a,i={},u=0,o=0;o<r.length;o++)if("list"===r[o].type){var s=[],c=(a=O(e,t+u,r[o].countType,n))[0];u+=a[1];for(var f=0;f<c;f++)a=O(e,t+u,r[o].itemType,n),s.push(a[0]),u+=a[1];i[r[o].name]=s}else a=O(e,t+u,r[o].type,n),i[r[o].name]=a[0],u+=a[1];return[i,u]}var A={name:"PLY",extensions:["ply"],parseTextSync:y,parseSync:y,text:!0,binary:!0,DEFAULT_OPTIONS:{}},j=r(381),S=r(220),T=r(223);r.d(t,"default",function(){return L}),r.d(t,"renderToDOM",function(){return B}),Object(S.b)(A),Object(S.b)(j.a);var _="https://raw.githubusercontent.com/uber-common/deck.gl-data/master/examples/point-cloud-laz/indoor.0.1.laz",C={target:[0,0,0],rotationX:0,rotationOrbit:0,orbitAxis:"Y",fov:50,minZoom:0,maxZoom:10,zoom:1},I=new p.d(["rotationOrbit"]),L=function(e){function t(t){var r;return(r=e.call(this,t)||this).state={viewState:C,pointsCount:0,points:null},r._onLoad=r._onLoad.bind(a()(r)),r._onViewStateChange=r._onViewStateChange.bind(a()(r)),r._rotateCamera=r._rotateCamera.bind(a()(r)),Object(T.a)(_).then(r._onLoad),r}u()(t,e);var r=t.prototype;return r._onViewStateChange=function(e){var t=e.viewState;this.setState({viewState:t})},r._rotateCamera=function(){var e=this.state.viewState;this.setState({viewState:Object.assign({},e,{rotationOrbit:e.rotationOrbit+30,transitionDuration:600,transitionInterpolator:I,onTransitionEnd:this._rotateCamera})})},r._onLoad=function(e){var t=e.header,r=e.loaderData,n=e.attributes,a=(e.progress,r.header),i=a.mins,u=a.maxs,o=this.state.viewState;i&&u&&(o=Object.assign({},o,{target:[(i[0]+u[0])/2,(i[1]+u[1])/2,(i[2]+u[2])/2],zoom:Math.log2(window.innerWidth/(u[0]-i[0]))-1})),this.props.onLoad&&this.props.onLoad({count:t.vertexCount,progress:1}),this.setState({pointsCount:t.vertexCount,points:n.POSITION.value,viewState:o},this._rotateCamera)},r._renderLayers=function(){var e=this.state,t=e.pointsCount,r=e.points;return[r&&new l.a({id:"laz-point-cloud-layer",coordinateSystem:p.a.IDENTITY,numInstances:t,instancePositions:r,getNormal:[0,1,0],getColor:[255,255,255],opacity:.5,pointSize:.5})]},r.render=function(){var e=this.state.viewState;return s.a.createElement(f.a,{views:new p.e,viewState:e,controller:!0,onViewStateChange:this._onViewStateChange,layers:this._renderLayers(),parameters:{clearColor:[.07,.14,.19,1]}})},t}(o.PureComponent);function B(e){Object(c.render)(s.a.createElement(L,null),e)}},203:function(e,t,r){"use strict";r.d(t,"c",function(){return u}),r.d(t,"a",function(){return o}),r.d(t,"d",function(){return s}),r.d(t,"b",function(){return c}),r.d(t,"e",function(){return f});r(75),r(76);var n=function(e){return"boolean"==typeof e},a=function(e){return"function"==typeof e},i=function(e){return null!==e&&"object"==typeof e},u=function(e){return e&&"function"==typeof e[Symbol.iterator]},o=function(e){return e&&"function"==typeof e[Symbol.asyncIterator]},s=function(e){return i(e)&&"done"in e&&"value"in e},c=function(e){return"undefined"!=typeof window&&e instanceof window.Response||e.arrayBuffer&&e.json&&e.body},f=function(e){return function(e){return i(e)&&a(e.tee)&&a(e.cancel)&&a(e.pipeTo)&&a(e.getReader)}(e)||function(e){return i(e)&&a(e.read)&&a(e.pipe)&&n(e.readable)}(e)}},206:function(e,t,r){"use strict";(function(e,n){r.d(t,"b",function(){return a}),r.d(t,"a",function(){return u});var a="object"!=typeof e||"[object process]"!==String(e)||e.browser,i={self:"undefined"!=typeof self&&self,window:"undefined"!=typeof window&&window,global:void 0!==n&&n,document:"undefined"!=typeof document&&document},u=i.global||i.self||i.window}).call(this,r(117),r(78))},209:function(e,t,r){"use strict";(function(e){r.d(t,"a",function(){return u});r(30),r(11),r(202);var n=r(216),a=function(e){return e&&e instanceof ArrayBuffer},i=function(t){return t&&t instanceof e};function u(e){if(a(e))return e;if(i(e))return new Uint8Array(e).buffer;if(ArrayBuffer.isView(e))return e.buffer;if("string"==typeof e){var t=e;return(new TextEncoder).encode(t).buffer}return Object(n.a)(!1)}}).call(this,r(245).Buffer)},210:function(e,t,r){"use strict";r(7);var n=r(205),a=r.n(n),i=(r(207),r(208)),u=r.n(i),o=r(238),s=r(221),c=function(){function e(){}var t=e.prototype;return t.log=function(){},t.info=function(){},t.warn=function(){},t.error=function(){},e}(),f=r(220),p=r(216),l=(r(30),r(19),r(14),r(11),r(77),r(239),r(209)),b=new Map;function d(e,t,r){var n=function(e){var t=b.get(e);if(!t){var r=new Blob([e],{type:"application/javascript"});t=URL.createObjectURL(r),b.set(e,t)}return new Worker(t)}(e);r=function(e){null!==(e=Object.assign({},e)).log&&delete e.log;return e}(r);var a=function(e,t){return new Promise(function(r,a){n.onmessage=function(e){switch(e.data.type){case"done":r(e.data.result),n.terminate();break;case"error":a(new Error(e.data.message))}};var i=Object(l.a)(e);n.postMessage({arraybuffer:i,opts:t},[i])})};return t?a(t,r):a}r(75),r(76);var y=r(203),v=r(227),h="Cannot convert supplied data type";function w(e){return Object(y.b)(e)?e.url:null}function x(e,t){if(t.text&&"string"==typeof e)return e;if(e instanceof ArrayBuffer||ArrayBuffer.isView(e)){var r=e.buffer||e;return t.text&&!t.binary?new TextDecoder("utf8").decode(r):r}throw new Error(h)}function m(e,t){return g.apply(this,arguments)}function g(){return(g=u()(a.a.mark(function e(t,r){var n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:if(t=e.sent,n=t instanceof ArrayBuffer||ArrayBuffer.isView(t),"string"!=typeof t&&!n){e.next=6;break}return e.abrupt("return",x(t,r));case 6:if(!Object(y.b)(t)){e.next=15;break}if(!r.binary){e.next=13;break}return e.next=10,t.arrayBuffer();case 10:e.t0=e.sent,e.next=14;break;case 13:e.t0=t.text();case 14:return e.abrupt("return",e.t0);case 15:throw new Error(h);case 16:case"end":return e.stop()}},e)}))).apply(this,arguments)}function O(e,t){return k.apply(this,arguments)}function k(){return(k=u()(a.a.mark(function e(t,r){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!Object(y.d)(t)){e.next=2;break}return e.abrupt("return",t);case 2:if(!Object(y.b)(t)){e.next=4;break}return e.abrupt("return",Object(v.a)(t.body));case 4:if(!Object(y.e)(t)){e.next=6;break}return e.abrupt("return",Object(v.a)(t));case 6:if(!Object(y.a)(t)){e.next=8;break}return e.abrupt("return",t[Symbol.asyncIterator]());case 8:return e.abrupt("return",A(t,r));case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}function A(e,t){return j.apply(this,arguments)}function j(){return(j=u()(a.a.mark(function e(t,r){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t instanceof ArrayBuffer||ArrayBuffer.isView(t))){e.next=2;break}return e.abrupt("return",a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.buffer||t;case 2:case"end":return e.stop()}},e)})());case 2:if(!Object(y.d)(t)){e.next=4;break}return e.abrupt("return",t);case 4:if(!Object(y.c)(t)){e.next=6;break}return e.abrupt("return",t[Symbol.iterator]());case 6:throw new Error(h);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function S(e,t,r,n){return T.apply(this,arguments)}function T(){return(T=u()(a.a.mark(function e(t,r,n,i){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===n&&(n={}),i=i||w(t),e.next=4,m(t,r);case 4:if(t=e.sent,!r.parseTextSync||"string"!=typeof t){e.next=8;break}return n.dataType="text",e.abrupt("return",r.parseTextSync(t,n,i,r));case 8:if(!r.parseSync){e.next=10;break}return e.abrupt("return",r.parseSync(t,n,i,r));case 10:if(!r.parse){e.next=14;break}return e.next=13,r.parse(t,n,i,r);case 13:return e.abrupt("return",e.sent);case 14:if(!r.worker){e.next=18;break}return e.next=17,d(r.worker,t,n);case 17:return e.abrupt("return",e.sent);case 18:return e.abrupt("return",Object(p.a)(!1));case 19:case"end":return e.stop()}},e)}))).apply(this,arguments)}function _(e,t,r,n){return C.apply(this,arguments)}function C(){return(C=u()(a.a.mark(function e(t,r,n,i){var u,o;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===n&&(n={}),!r.parseInBatches){e.next=7;break}return e.next=4,O(t);case 4:return u=e.sent,o=r.parseInBatches(u,n,i,r),e.abrupt("return",o);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}function I(e,t,r,n){return L.apply(this,arguments)}function L(){return(L=u()(a.a.mark(function e(t,r,n,i){var u;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(Array.isArray(r)||Object(s.a)(r)||(i=n,n=r,r=null),r=r||Object(f.a)(),u=Array.isArray(r)?Object(o.a)(i,t,r):r){e.next=5;break}return e.abrupt("return",null);case 5:return Object(s.b)(u),n=P(n,u),e.next=9,S(t,u,n,i);case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}},e)}))).apply(this,arguments)}function B(e,t,r,n){Array.isArray(t)||Object(s.a)(t)||(n=r,r=t,t=null),t=t||Object(f.a)();var a=Array.isArray(t)?Object(o.a)(n,e,t):t;return Object(s.b)(a),function(e,t,r,n){return void 0===r&&(r={}),e=x(e,t),t.parseTextSync&&"string"==typeof e?t.parseTextSync(e,r,n,t):t.parseSync?t.parseSync(e,r,n,t):Object(p.a)(!1)}(e,a,r=P(r,a),n)}function E(e,t,r,n){return z.apply(this,arguments)}function z(){return(z=u()(a.a.mark(function e(t,r,n,i){var u;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return Array.isArray(r)||Object(s.a)(r)||(i=n,n=r,r=null),r=r||Object(f.a)(),u=Array.isArray(r)?Object(o.a)(i,null,r):r,Object(s.b)(u),n=P(n,u),e.abrupt("return",_(t,u,n,i));case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function P(e,t){return null===(e=Object.assign({},t.DEFAULT_OPTIONS,t.options,e,{dataType:"arraybuffer"})).log&&(e.log=new c),"log"in e||(e.log=console),e}r.d(t,"a",function(){return I}),r.d(t,"c",function(){return B}),r.d(t,"b",function(){return E})},212:function(e,t,r){"use strict";r.d(t,"a",function(){return i});r(33),r(226),r(7);var n="",a={};function i(e){for(var t in a)if(e.startsWith(t)){var r=a[t];return e.replace(t,r)}return e+=n}},216:function(e,t,r){"use strict";function n(e,t){if(!e)throw new Error(t||"loader assertion failed.")}r.d(t,"a",function(){return n})},220:function(e,t,r){"use strict";r.d(t,"b",function(){return i}),r.d(t,"a",function(){return u});r(14),r(11),r(253),r(75),r(76),r(19);var n=r(221),a={};function i(e){var t=e=Array.isArray(e)?e:[e],r=Array.isArray(t),i=0;for(t=r?t:t[Symbol.iterator]();;){var u;if(r){if(i>=t.length)break;u=t[i++]}else{if((i=t.next()).done)break;u=i.value}var o=u;Object(n.b)(o);var s=o.extensions,c=Array.isArray(s),f=0;for(s=c?s:s[Symbol.iterator]();;){var p;if(c){if(f>=s.length)break;p=s[f++]}else{if((f=s.next()).done)break;p=f.value}a[p]=o}}}function u(){return Object.values(a)}},221:function(e,t,r){"use strict";r.d(t,"a",function(){return a}),r.d(t,"b",function(){return i});r(7);var n=r(216);function a(e){return!!e&&(Array.isArray(e)&&(e=e[0]),e.parseTextSync||e.parseSync||e.parse||e.loadAndParse||e.parseStream||e.parseInBatches||e.worker)}function i(e){var t;return Object(n.a)(a(e)),Array.isArray(e)&&(t=(e=e[0])[1],e=Object.assign({},e,{options:Object.assign({},e.options,{options:t})})),e.extension&&(e.extensions=e.extensions||[e.extension],delete e.extension),Array.isArray(e.extensions)||(e.extensions=[e.extensions]),Object(n.a)(e.extensions&&e.extensions.length>0&&e.extensions[0]),e.parseTextSync&&(e.text=!0),e.text||(e.binary=!0),e}},222:function(e,t,r){"use strict";r.d(t,"a",function(){return s});var n=r(205),a=r.n(n),i=(r(207),r(208)),u=r.n(i),o=r(212);function s(e,t){return c.apply(this,arguments)}function c(){return(c=u()(a.a.mark(function e(t,r){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(o.a)(t),e.abrupt("return",fetch(t,r));case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}},223:function(e,t,r){"use strict";r.d(t,"a",function(){return l});var n=r(205),a=r.n(n),i=(r(207),r(208)),u=r.n(i),o=r(222),s=r(221),c=r(238),f=r(210),p=r(220);function l(e,t,r){return b.apply(this,arguments)}function b(){return(b=u()(a.a.mark(function e(t,r,n){var i,u;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(Array.isArray(r)||Object(s.a)(r)||(n=r,r=null),r=r||Object(p.a)(),!(i=Array.isArray(r)?Object(c.a)(t,null,r):r)||!i.loadAndParse){e.next=7;break}return e.next=6,i.loadAndParse(t,n);case 6:return e.abrupt("return",e.sent);case 7:if("string"!=typeof(u=t)){e.next=12;break}return e.next=11,Object(o.a)(t,n);case 11:u=e.sent;case 12:return e.abrupt("return",Object(f.a)(u,r,n,t));case 13:case"end":return e.stop()}},e)}))).apply(this,arguments)}},227:function(e,t,r){"use strict";r.d(t,"a",function(){return l});r(30),r(11),r(75),r(76);var n=r(208),a=r.n(n),i=r(205),u=r.n(i),o=(r(207),r(286)),s=r.n(o),c=r(287),f=r.n(c),p=r(206);function l(e){return"function"==typeof e[Symbol.asyncIterator]?e:"function"==typeof e.getIterator?e.getIterator():p.b?function(e){return b.apply(this,arguments)}(e):function(e){return d.apply(this,arguments)}(e)}function b(){return(b=f()(u.a.mark(function e(t){var r,n,a,i;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r=t.getReader(),e.prev=1;case 2:return e.next=5,s()(r.read());case 5:if(n=e.sent,a=n.done,i=n.value,!a){e.next=10;break}return e.abrupt("return");case 10:return e.next=12,i;case 12:e.next=2;break;case 14:return e.prev=14,r.releaseLock(),e.finish(14);case 17:case"end":return e.stop()}},e,null,[[1,,14,17]])}))).apply(this,arguments)}function d(){return(d=f()(u.a.mark(function e(t){var r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s()(t);case 2:t=e.sent;case 3:if(null===(r=t.read())){e.next=9;break}return e.next=8,r;case 8:return e.abrupt("continue",3);case 9:if(!t._readableState.ended){e.next=11;break}return e.abrupt("return");case 11:return e.next=13,s()(y(t));case 13:e.next=3;break;case 15:case"end":return e.stop()}},e)}))).apply(this,arguments)}function y(e){return v.apply(this,arguments)}function v(){return(v=a()(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e){t.once("readable",e)}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}},230:function(e,t,r){"use strict";r.d(t,"a",function(){return a});r(205),r(207),r(208),r(210),r(222),r(223),r(212);var n=r(206),a=(n.a.TextEncoder,n.a.TextDecoder)},238:function(e,t,r){"use strict";r.d(t,"a",function(){return i});r(75),r(76),r(19),r(79);var n=r(221),a=/[^.]+$/;function i(e,t,r){void 0===e&&(e="");var i=e.match(a);if(i&&i[0]){var u=function(e,t){t=t.toLowerCase();for(var r=e,a=Array.isArray(r),i=0,r=a?r:r[Symbol.iterator]();;){var u;if(a){if(i>=r.length)break;u=r[i++]}else{if((i=r.next()).done)break;u=i.value}var o=u;Object(n.b)(o);for(var s=o.extensions,c=Array.isArray(s),f=0,s=c?s:s[Symbol.iterator]();;){var p;if(c){if(f>=s.length)break;p=s[f++]}else{if((f=s.next()).done)break;p=f.value}var l=p;if(l.toLowerCase()===t)return o}}return null}(r,i[0]);if(u)return u}var o=function(e,t){for(var r=e,n=Array.isArray(r),a=0,r=n?r:r[Symbol.iterator]();;){var i;if(n){if(a>=r.length)break;i=r[a++]}else{if((a=r.next()).done)break;i=a.value}var u=i;if(u.testText&&u.testText(t))return u}return null}(r,t);return o||null}},267:function(e,t){},301:function(e,t){},302:function(e,t){},350:function(e,t){},351:function(e,t){}}]);