<template>
  <div class="table2">

    <div class="frame" style="display:flex;flex-direction:column">
      <p style="padding: .5rem 0;font-weight:600;"> <img src="https://www.sutd.edu.sg/favicon.ico" width="16px"> <a href="https://www.sutd.edu.sg/About-Us/News-and-Events/News" target="_blank">SUTD Official News</a>
      <br><button @click="toggleShowNews1">Load/Unload Page Here</button></p>
      <iframe v-if="showNews1" src="https://www.sutd.edu.sg/About-Us/News-and-Events/News" height="500vh" ></iframe>
    </div>

    <div class="frame" style="display:flex;flex-direction:column">
      <p style="padding: .5rem 0;font-weight:600;"> <img src="https://www.sutd.edu.sg/favicon.ico" width="16px"> <a href="https://www.sutd.edu.sg/Research/Research-News" target="_blank">SUTD Research News</a>
        <br><button @click="toggleShowNews3">Load/Unload Page Here </button></p>
      <iframe v-if="showNews3" src="https://www.sutd.edu.sg/Research/Research-News" height="500vh"></iframe>
    </div>

    <div class="frame" style="display:flex;flex-direction:column">
      <p style="padding: .5rem 0;font-weight:600;"> <img src="https://www.sutd.edu.sg/favicon.ico" width="16px"> <a href="https://www.sutd.edu.sg/About-Us/News-and-Events/Press-Releases" target="_blank">SUTD Press Releases</a>
        <br><button @click="toggleShowNews2">Load/Unload Page Here </button></p>
      <iframe v-if="showNews2" src="https://www.sutd.edu.sg/About-Us/News-and-Events/Press-Releases" height="500vh"></iframe>
    </div>

    <div class="frame" style="display:flex;flex-direction:column">
      <p style="padding: .5rem 0;font-weight:600;"> <img src="https://www.sutd.edu.sg/favicon.ico" width="16px"> <a href="https://www.sutd.edu.sg/About-Us/News-and-Events/Speeches" target="_blank">SUTD Speeches</a>
        <br><button @click="toggleShowNews4">Load/Unload Page Here </button></p>
      <iframe v-if="showNews4" src="https://www.sutd.edu.sg/About-Us/News-and-Events/Speeches" height="500vh"></iframe>
    </div>

<!--    <iframe src="https://store.sutd.edu.sg" height="500vh"></iframe>TODO:works-->
<!--    <iframe src="https://cyberlab.sutd.edu.sg" height="500vh"></iframe> TODO: works-->
<!--    <iframe src="https://wearesutd.sutd.edu.sg" width="500px"></iframe> TODO:also succeeds. no idc, no library, no itrust -->
<!--    <iframe src="http://careers.sutd.edu.sg/ad/en/listing/" height="500vh"></iframe> TODO: put in SUTD misc. -->

  </div>
</template>

<script>
  export default {
    name: 'AllNews',
    data() {
      return {
        showNews1: false,
        showNews2: false,
        showNews3: false,
        showNews4: false,
      };
    },
    methods: {
      toggleShowNews1() {
        this.showNews1 = !this.showNews1;
      },
      toggleShowNews2() {
        this.showNews2 = !this.showNews2;
      },
      toggleShowNews3() {
        this.showNews3 = !this.showNews3;
      },
      toggleShowNews4() {
        this.showNews4 = !this.showNews4;
      }
    }
  }
</script>
