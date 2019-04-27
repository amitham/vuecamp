import Vue from 'vue';

Vue.directive('highlight', {
  bind (el, binding, vnode) {
    var delay = 0;
    if (binding.modifiers['delayed']) {
      delay = 1000;
    }

    if (binding.modifiers['blink']) {
      let mainColor = binding.value.mainColor;
      let secondColor = binding.value.secondColor;
      let currentColor = mainColor;

      setTimeout(() => {
        setInterval(() => {
          currentColor = currentColor === secondColor ? mainColor : secondColor;
          if (binding.arg === 'background') {
            el.style.backgroundColor = currentColor;
            el.style.color = 'white';
          } else {
            el.style.color = currentColor;
          }
        }, binding.value.delay);
      }, delay);
    } else {
      setTimeout(() => {
        if (binding.arg === 'background') {
          el.style.backgroundColor = binding.value.mainColor;
        } else {
          el.style.color = binding.value.mainColor;
        }
      }, delay);
    }
  }
});
