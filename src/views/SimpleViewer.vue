<template>
  <div>
    <div class="nav2">
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
    methods: {
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