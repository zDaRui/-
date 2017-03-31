import Vue from 'vue'
Vue.directive('music', {
  bind: function (el, binding, vnode) {
    
    let myAudio = el.children[1],
        myImg = el.children[0];
    el.addEventListener('click',function(){
      if(myAudio.paused){
        myImg.className = 'autoplay'
        myAudio.play();
      }else{
        myImg.className = ' '
        myAudio.pause();
      }
    },false)
  }
})

