<template>
  <div id="app">
    <div style="padding-top:0rem"></div>
    <div class="nav1" id="nav1">
      <a id="nav1-1">Aesthetic Helicopter View</a>
      <router-link id="nav1-2" to="/simple" class="toptab">SUTD News & Resources Viewer</router-link>
      <router-link id="nav1-3" to="/" class="toptab">SUTD One Stop</router-link>
      <router-link id="nav1-4" to="/" class="toptab">Home</router-link>
    </div>
    <hr v-if="white">

    <transition name="fade" mode="out-in" @beforeLeave="beforeLeave"
                        @enter="enter"
                        @afterEnter="afterEnter">
      <router-view></router-view>
    </transition>
    <Footer/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Footer from '@/components/Footer.vue'

  export default {
    name: 'app',
    components: {
      Footer
    },
          data() {
    return {
      prevHeight: 0,
      white: false,
    };
  },
    watch:{
      $route: function(to, from) {
        if (this.white && to.path === "/" && ( /^(\/simple)/.test(from.path)) ) {
          this.handWash();
        }
      }
    },
    methods: {
      handWash() {
        this.white = false;

        document.getElementById("themebutton").innerHTML = 'WHITE THEME';
        document.body.style.background = 'transparent';
        document.getElementById("nav1").style.background = 'rgba(255,22,5,0.8)';
        document.getElementById("simplenav").style.background = '#d7dbd3';
        document.getElementById("footer").style.background = '#b90233';
        document.getElementById("footer").style.color = 'rgba(211, 213, 223, 0.95)';
        document.body.style.minHeight = 'inherit';


        let a = [document.getElementById(("nav1-1")), document.getElementById(("nav1-2")), document.getElementById(("nav1-3")), document.getElementById(("nav1-4"))];
        for (let i = 0; i < a.length; i++) {
          a[i].style.textShadow = "2px 2px #460083";
          a[i].style.color = "rgba(211, 213, 223, 0.95)";

        }
        a[3].style.color = "#c2c5f2";
      },
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
  },
  };
</script>

<style>
  html {
    background: rgb(209,0,64);
    background: linear-gradient(348deg, rgba(209,0,64,1) 0%, rgba(134,77,125,1) 6%, rgba(80,133,170,1) 19%, rgba(35,179,206,1) 39%, rgba(21,192,226,1) 69%, rgba(0,212,255,1) 100%);
    background-attachment: fixed;
    min-height: 100%;
  }

  body {
    margin: 0;
  }

  #cat {
    -webkit-filter: blur(0.5px); /* Safari 6.0 - 9.0 */
    filter: blur(0.5px);
    border: 2px solid #f2deea;
    border-radius: 5rem;
  }

  .nav1 {
    background: rgba(255,22,5,0.8);
    padding: .7rem 0;
    margin: 0;
    border: 0;
  }

  .toptab {
    padding: 0 .8rem;
    margin: 0 .5rem;

  }

  .view {
    margin: 0 10%;
  }

  .tab {
    padding: 0 .5rem;
    margin: 0 .5rem;

  }

  .nav2 {
    display: flex;
    justify-content: center;
  }



#app {
  font-family: 'Poppins', 'Public Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav1 a, .nav1 a:visited, .nav1 a:active {
  font-weight: 600;
  text-shadow: 2px 2px #460083;
  color: rgba(211, 213, 223, 0.95);
  text-decoration: none;
  font-size: 1.3rem;
}

  .nav1 a:hover {
    font-weight: 600;
    color: rgba(230, 232, 242, 0.95);
    text-decoration: none;
    font-size: 1.3rem;
  }

  #nav1-4 {
  color: #c2c5f2;
}
  #nav1-4:hover {
    color: rgba(230, 232, 242, 0.95);
  }

  .nav2 {
    background: #d7dbd3;
    padding: 2rem 0;
  }

.nav2 a {
  font-size: 1.2rem;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

.nav2 a.router-link-exact-active {
  color: #ff0047;
}

  .semi {
    font-weight: 600;
  }

  .flyingtext {
    font-size: 2.8vw;
  }

  .flyingtext a, .flyingtext a:visited, .flyingtext a:active {
    color: #ee1650;
    text-shadow: 2px 2px #f4d900;
    text-decoration: none;
  }

  .flyingtext a:hover {
    color: #0500db;
    text-decoration: none;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity, height;
    transition-timing-function: ease;
    overflow: hidden;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }


</style>
