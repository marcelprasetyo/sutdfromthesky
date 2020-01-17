<template>
  <div>
    <p style="text-align:right;margin-right:5%"><button id="themebutton" @click="changeBg">WHITE THEME</button></p>
    <div class="nav2" id="simplenav">
      <router-link to="/simple" class="tab cursory">Home</router-link>
      <router-link to="/simple/allnews" class="tab">All News</router-link>
      <router-link to="/simple/allevents" class="tab">All Events</router-link>
    </div>
    <transition name="fade" mode="out-in" @beforeLeave="beforeLeave"
                                        @enter="enter"
                                        @afterEnter="afterEnter">>
      <router-view/>
      <div v-if="home">
        <p>Hi welcome to the site where you can access all relevant SUTD news.
          <br> Coming your way. <br> Here's the magic link we use: <br> <a href=": https://www.sutd.edu.sg/Prospective-Students" target="_blank">https://www.sutd.edu.sg/Prospective-Students</a></p>
      </div>
    </transition>
  </div>
</template>

<script>

  export default {
    name: 'Simple',
    data() {
      return {
        home: true,
        prevHeight: 0
      };
    },
    mounted() {
      this.mountCheck();
    },
    methods: {
      mountCheck() {
        if (window.localStorage.getItem('simpleTheme') === 'white') {
          this.whiteWash();
        }
      },
      whiteWash() {
        this.$parent.white = true;
        document.getElementById("themebutton").innerHTML = 'ORIGINAL THEME';
        document.body.style.background = '#FFFFFF';
        document.getElementById("nav1").style.background = '#FFFFFF';
        document.getElementById("simplenav").style.background = '#FFFFFF';
        document.getElementById("footer").style.background = '#FFFFFF';
        document.getElementById("footer").style.color = '#000000';
        document.body.style.minHeight = '100vh';


        let a = [document.getElementById(("nav1-1")), document.getElementById(("nav1-2")), document.getElementById(("nav1-3")), document.getElementById(("nav1-4")) ] ;
        for (let i = 0; i < a.length ; i++) {
          a[i].style.textShadow = "none";
          a[i].style.color = "black";

        }
      },
      handWash() {
        this.$parent.white = false;

        document.getElementById("themebutton").innerHTML = 'WHITE THEME';
        document.body.style.background = 'transparent';
        document.getElementById("nav1").style.background = 'rgba(255,22,5,0.8)';
        document.getElementById("simplenav").style.background = '#d7dbd3';
        document.getElementById("footer").style.background = '#b90233';
        document.getElementById("footer").style.color = 'rgba(211, 213, 223, 0.95)';
        document.body.style.minHeight = 'inherit';


        let a = [document.getElementById(("nav1-1")), document.getElementById(("nav1-2")), document.getElementById(("nav1-3")), document.getElementById(("nav1-4")) ] ;
        for (let i = 0; i < a.length ; i++) {
          a[i].style.textShadow = "2px 2px #460083";
          a[i].style.color = "rgba(211, 213, 223, 0.95)";

        }
        a[3].style.color = "#c2c5f2";
      },
      changeBg() {
        if (this.$parent.white === true || window.localStorage.getItem('simpleTheme') === 'white') {
          window.localStorage.setItem('simpleTheme', 'original');
          this.handWash();
        }
        else {
          window.localStorage.setItem('simpleTheme', 'white');
          // variable white must be set to true if the others below are set true.
          this.whiteWash();

          // if (document.style.background === '#FFFFFF') {
          //   document.style.background =  "-moz-linear-gradient(' + orientation + ', ' + colorOne + ', ' + colorTwo + ')";
          // }
          // else document.style.background = '#FFFFFF';
        }
      },
      toggle() {
        if (!this.home)
          this.home = !this.home;
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
  .cursory:hover {
    cursor: pointer;
  }

  .active {
    color: #ff0047;
  }

  .table2 {
    display: flex;
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 768px) {
    .table2 {
      flex-direction: column;
    }
  }

  .frame {
    padding: 3rem;
    border: none;
  }

</style>