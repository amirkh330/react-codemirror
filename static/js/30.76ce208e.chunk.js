(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[30,123],{456:function(t,e,n){!function(t){"use strict";t.defineMode("yaml",(function(){var t=new RegExp("\\b(("+["true","false","on","off","yes","no"].join(")|(")+"))$","i");return{token:function(e,n){var i=e.peek(),r=n.escaped;if(n.escaped=!1,"#"==i&&(0==e.pos||/\s/.test(e.string.charAt(e.pos-1))))return e.skipToEnd(),"comment";if(e.match(/^('([^']|\\.)*'?|"([^"]|\\.)*"?)/))return"string";if(n.literal&&e.indentation()>n.keyCol)return e.skipToEnd(),"string";if(n.literal&&(n.literal=!1),e.sol()){if(n.keyCol=0,n.pair=!1,n.pairStart=!1,e.match("---"))return"def";if(e.match("..."))return"def";if(e.match(/\s*-\s+/))return"meta"}if(e.match(/^(\{|\}|\[|\])/))return"{"==i?n.inlinePairs++:"}"==i?n.inlinePairs--:"["==i?n.inlineList++:n.inlineList--,"meta";if(n.inlineList>0&&!r&&","==i)return e.next(),"meta";if(n.inlinePairs>0&&!r&&","==i)return n.keyCol=0,n.pair=!1,n.pairStart=!1,e.next(),"meta";if(n.pairStart){if(e.match(/^\s*(\||\>)\s*/))return n.literal=!0,"meta";if(e.match(/^\s*(\&|\*)[a-z0-9\._-]+\b/i))return"variable-2";if(0==n.inlinePairs&&e.match(/^\s*-?[0-9\.\,]+\s?$/))return"number";if(n.inlinePairs>0&&e.match(/^\s*-?[0-9\.\,]+\s?(?=(,|}))/))return"number";if(e.match(t))return"keyword"}return!n.pair&&e.match(/^\s*(?:[,\[\]{}&*!|>'"%@`][^\s'":]|[^,\[\]{}#&*!|>'"%@`])[^#]*?(?=\s*:($|\s))/)?(n.pair=!0,n.keyCol=e.indentation(),"atom"):n.pair&&e.match(/^:\s*/)?(n.pairStart=!0,"meta"):(n.pairStart=!1,n.escaped="\\"==i,e.next(),null)},startState:function(){return{pair:!1,pairStart:!1,keyCol:0,inlinePairs:0,inlineList:0,literal:!1,escaped:!1}},lineComment:"#",fold:"indent"}})),t.defineMIME("text/x-yaml","yaml"),t.defineMIME("text/yaml","yaml")}(n(6))},563:function(t,e,n){!function(t){var e=0,n=1,i=2;t.defineMode("yaml-frontmatter",(function(r,a){var s=t.getMode(r,"yaml"),o=t.getMode(r,a&&a.base||"gfm");function l(t){return t.state==n?{mode:s,state:t.yaml}:{mode:o,state:t.inner}}return{startState:function(){return{state:e,yaml:null,inner:t.startState(o)}},copyState:function(e){return{state:e.state,yaml:e.yaml&&t.copyState(s,e.yaml),inner:t.copyState(o,e.inner)}},token:function(r,a){if(a.state==e)return r.match("---",!1)?(a.state=n,a.yaml=t.startState(s),s.token(r,a.yaml)):(a.state=i,o.token(r,a.inner));if(a.state==n){var l=r.sol()&&r.match(/(---|\.\.\.)/,!1),m=s.token(r,a.yaml);return l&&(a.state=i,a.yaml=null),m}return o.token(r,a.inner)},innerMode:l,indent:function(e,n,i){var r=l(e);return r.mode.indent?r.mode.indent(r.state,n,i):t.Pass},blankLine:function(t){var e=l(t);if(e.mode.blankLine)return e.mode.blankLine(e.state)}}}))}(n(6),n(456))}}]);
//# sourceMappingURL=30.76ce208e.chunk.js.map