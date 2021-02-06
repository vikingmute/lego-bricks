import { defineComponent, openBlock, createBlock, Fragment, createVNode } from 'vue';

var script = defineComponent({
  name: 'App',
});

const _hoisted_1 = /*#__PURE__*/createVNode("h1", null, "慕课乐高标准模版", -1 /* HOISTED */);
const _hoisted_2 = /*#__PURE__*/createVNode("ul", null, [
  /*#__PURE__*/createVNode("li", null, "开箱即用"),
  /*#__PURE__*/createVNode("li", null, "typescript"),
  /*#__PURE__*/createVNode("li", null, "Vue3"),
  /*#__PURE__*/createVNode("li", null, "支持 tsx"),
  /*#__PURE__*/createVNode("li", null, "eslint"),
  /*#__PURE__*/createVNode("li", null, "简单易用可扩展")
], -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock(Fragment, null, [
    _hoisted_1,
    _hoisted_2
  ], 64 /* STABLE_FRAGMENT */))
}

script.render = render;
script.__file = "src/App.vue";

export default script;
