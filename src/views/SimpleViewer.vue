<template>
  <div>
    <p style="text-align:right;margin-right:5%"><button class="btn hideBtn" style="margin:0;padding:0" id="themebutton" @click="changeBg">WHITE THEME</button></p>
    <div class="nav2" id="simplenav">
      <router-link to="/simple" class="tab cursory">Home</router-link>
      <!--  Links here are listed neatly using the list in data() below   -->
      <router-link v-for="item in items" :key="item.id" :to="item.route" class="tab">{{item.title}}</router-link>

    </div>
    <transition name="fade" mode="out-in" @beforeLeave="beforeLeave"
                                        @enter="enter"
                                        @afterEnter="afterEnter">>
      <router-view/>
      <div v-if="home">
        <p>Hi welcome to the site where you can access all relevant SUTD news.
          <br> Here's the magic link we use: <br> <a href=": https://www.sutd.edu.sg/Prospective-Students" target="_blank">https://www.sutd.edu.sg/Prospective-Students</a></p>
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
        prevHeight: 0,
        items: [
          {route: '/simple/allnews', title: 'All News', id: 1},
          {route: '/simple/allevents', title: 'All Events', id: 2},
          {route: '/simple/allpublications', title: 'All Publications', id: 3},
          {route: '/simple/videos', title: 'Videos and Media', id: 4},
          {route: '/simple/allachievements', title: 'All Achievements', id: 5},
          // {route: '/simple/alllistsofpeople', title: 'All Lists Of People', id: 6},
          {route: '/simple/sutdjobscareers', title: 'SUTD Jobs and Careers', id: 7}
        ],
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
        document.body.style.background = '#fff6fe';
        document.getElementById("nav1").style.background = '#f0f5df';
        document.getElementById("simplenav").style.background = '#ffebeb';
        document.getElementById("footer").style.background = '#f9f9f9';
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
      }
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