(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[512],{859:function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default="import 'dart:math' show Random;\n\nvoid main() {\n  print(new Die(n: 12).roll());\n}\n\n// Define a class.\nclass Die {\n  // Define a class variable.\n  static Random shaker = new Random();\n\n  // Define instance variables.\n  int sides, value;\n\n  // Define a method using shorthand syntax.\n  String toString() => '$value';\n\n  // Define a constructor.\n  Die({int n: 6}) {\n    if (4 <= n && n <= 20) {\n      sides = n;\n    } else {\n      // Support for errors and exceptions.\n      throw new ArgumentError(/* */);\n    }\n  }\n\n  // Define an instance method.\n  int roll() {\n    return value = shaker.nextInt(sides) + 1;\n  }\n}\n"}}]);
//# sourceMappingURL=512.be45d1a8.chunk.js.map