<template>
  <transition name="toast-pop">
    <div class="toast" v-show="visible" :class="customClass"
         :style="{ 'padding': iconClass === '' ? '10px' : '20px' }">
      <i class="toast-icon" :class="iconClass" v-if="iconClass !== ''"></i>
      <span class="toast-text" :style="{ 'padding-top': iconClass === '' ? '0' : '10px' }">{{ message }}</span>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
  .toast {
    position: fixed;
    max-width: 80%;
    border-radius: 8px;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    box-sizing: border-box;
    text-align: center;
    z-index: 1000;
    transition: opacity .3s linear;
    word-break: break-all;
    &-icon {
      display: block;
      text-align: center;
      font-size: 112px;
    }
    &-text {
      font-size: 28px;
      display: block;
      text-align: center;
    }
    &-pop-enter, &-pop-leave-active {
      opacity: 0;
    }
  }
  .toast-placetop {
    top: 30%;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .toast-placebottom {
    bottom: 20%;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .toast-placemiddle {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>

<script>
  export default {
    props: {
      message: String,
      className: {
        type: String,
        default: ''
      },
      position: {
        type: String,
        default: 'middle'
      },
      iconClass: {
        type: String,
        default: ''
      }
    },

    data () {
      return {
        visible: false
      }
    },

    computed: {
      customClass () {
        let classes = []
        switch (this.position) {
          case 'top':
            classes.push('toast-placetop')
            break
          case 'bottom':
            classes.push('toast-placebottom')
            break
          default:
            classes.push('toast-placemiddle')
        }
        classes.push(this.className)
        return classes.join(' ')
      }
    }
  }
</script>
