(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[75],{782:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default="import React from 'react';\nimport styles from './index.less';\n\nconst Select = ({ value, options, onChange }) => {\n  return (\n    <select className={styles.select} value={value} onChange={onChange}>\n      {options.map((item, key) => {\n        const optionProps = { key };\n        if (value === item) {\n          optionProps.value = item;\n        }\n        return (\n          <option {...optionProps}> {item} </option>\n        );\n      })}\n    </select>\n  );\n};\n\nexport default Select;\n"}}]);
//# sourceMappingURL=75.5756b03d.chunk.js.map