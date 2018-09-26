(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('vue')) :
  typeof define === 'function' && define.amd ? define(['vue'], factory) :
  (factory(global.Vue));
}(this, (function (Vue) { 'use strict';

  Vue = Vue && Vue.hasOwnProperty('default') ? Vue['default'] : Vue;

  var script = {
    props: {
      message: String,
      className: {
        type: String,
        'default': ''
      },
      position: {
        type: String,
        'default': 'middle'
      },
      iconClass: {
        type: String,
        'default': ''
      }
    },
    data: function data() {
      return {
        visible: false
      };
    },
    computed: {
      customClass: function customClass() {
        var classes = [];

        switch (this.position) {
          case 'top':
            classes.push('toast-placetop');
            break;

          case 'bottom':
            classes.push('toast-placebottom');
            break;

          default:
            classes.push('toast-placemiddle');
        }

        classes.push(this.className);
        return classes.join(' ');
      }
    }
  };

  /* script */
              var __vue_script__ = script;
  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"toast-pop"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"toast",'class':_vm.customClass,style:({ 'padding': _vm.iconClass === '' ? '10px' : '20px' })},[(_vm.iconClass !== '')?_c('i',{staticClass:"toast-icon",'class':_vm.iconClass}):_vm._e(),_vm._v(" "),_c('span',{staticClass:"toast-text",style:({ 'padding-top': _vm.iconClass === '' ? '0' : '10px' })},[_vm._v(_vm._s(_vm.message))])])])};
  var __vue_staticRenderFns__ = [];

    /* style */
    var __vue_inject_styles__ = undefined;
    /* scoped */
    var __vue_scope_id__ = "data-v-38b1478c";
    /* module identifier */
    var __vue_module_identifier__ = undefined;
    /* functional template */
    var __vue_is_functional_template__ = false;
    /* component normalizer */
    function __vue_normalize__(
      template, style, script$$1,
      scope, functional, moduleIdentifier,
      createInjector, createInjectorSSR
    ) {
      var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

      // For security concerns, we use only base name in production mode.
      component.__file = "toast.vue";

      if (!component.render) {
        component.render = template.render;
        component.staticRenderFns = template.staticRenderFns;
        component._compiled = true;

        if (functional) { component.functional = true; }
      }

      component._scopeId = scope;

      return component
    }
    /* style inject */
    
    /* style inject SSR */
    

    
    var ToastVue = __vue_normalize__(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  var ToastConstructor = Vue.extend(ToastVue);
  var toastPool = [];

  var getAnInstance = function getAnInstance() {
    if (toastPool.length > 0) {
      var instance = toastPool[0];
      toastPool.splice(0, 1);
      return instance;
    }

    return new ToastConstructor({
      el: document.createElement('div')
    });
  };

  var returnAnInstance = function returnAnInstance(instance) {
    if (instance) {
      toastPool.push(instance);
    }
  };

  var removeDom = function removeDom(event) {
    if (event.target.parentNode) {
      event.target.parentNode.removeChild(event.target);
    }
  };

  ToastConstructor.prototype.close = function () {
    this.visible = false;
    this.$el.addEventListener('transitionend', removeDom);
    this.closed = true;
    returnAnInstance(this);
  };

  var Toast = function Toast(options) {
    if (options === void 0) options = {};
    var duration = options.duration || 3000;
    var instance = getAnInstance();
    instance.closed = false;
    clearTimeout(instance.timer);
    instance.message = typeof options === 'string' ? options : options.message;
    instance.position = options.position || 'middle';
    instance.className = options.className || '';
    instance.iconClass = options.iconClass || '';
    document.body.appendChild(instance.$el);
    Vue.nextTick(function () {
      instance.visible = true;
      instance.$el.removeEventListener('transitionend', removeDom);
      ~duration && (instance.timer = setTimeout(function () {
        if (instance.closed) {
          return;
        }

        instance.close();
      }, duration));
    });
    return instance;
  };

  module.exports = {
    Toast: Toast
  };

})));
