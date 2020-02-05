<template>
  <div class="table2">

<!--  TODO: add button: load/unload 4 widgets at once.  -->

    <div class="frame" style="display:flex;flex-direction:column">
      <p style="padding: .5rem 0;font-weight:600;"> <img src="https://www.sutd.edu.sg/favicon.ico" width="16px"> <a href="https://www.sutd.edu.sg/About-Us/News-and-Events/News" target="_blank">SUTD Official News</a>
      <br><button @click="toggleShowNews1">Load/Unload Page Here</button></p>
        <transition name="fade" mode="out-in">
            <iframe v-if="showNews1" src="https://www.sutd.edu.sg/About-Us/News-and-Events/News" height="500vh" ></iframe>
        </transition>
    </div>


    <div class="frame" style="display:flex;flex-direction:column">
      <p style="padding: .5rem 0;font-weight:600;"> <img src="https://www.sutd.edu.sg/favicon.ico" width="16px"> <a href="https://www.sutd.edu.sg/Research/Research-News" target="_blank">SUTD Research News</a>
        <br><button @click="toggleShowNews3">Load/Unload Page Here </button></p>
        <transition name="fade" mode="out-in">
            <iframe v-if="showNews3" src="https://www.sutd.edu.sg/Research/Research-News" height="500vh"></iframe>
        </transition>
    </div>


    <div class="frame" style="display:flex;flex-direction:column">
      <p style="padding: .5rem 0;font-weight:600;"> <img src="https://www.sutd.edu.sg/favicon.ico" width="16px"> <a href="https://www.sutd.edu.sg/About-Us/News-and-Events/Press-Releases" target="_blank">SUTD Press Releases</a>
        <br><button @click="toggleShowNews2">Load/Unload Page Here </button></p>
        <transition name="fade" mode="out-in">
            <iframe v-if="showNews2" src="https://www.sutd.edu.sg/About-Us/News-and-Events/Press-Releases" height="500vh"></iframe>
        </transition>
    </div>

    <div class="frame" style="display:flex;flex-direction:column">
      <p style="padding: .5rem 0;font-weight:600;"> <img src="https://www.sutd.edu.sg/favicon.ico" width="16px"> <a href="https://www.sutd.edu.sg/About-Us/News-and-Events/Speeches" target="_blank">SUTD Speeches</a>
        <br><button @click="toggleShowNews4">Load/Unload Page Here </button></p>
        <transition name="fade" mode="out-in">
            <iframe v-if="showNews4" src="https://www.sutd.edu.sg/About-Us/News-and-Events/Speeches" height="500vh"></iframe>
        </transition>
    </div>

    <iframe src="https://wearesutd.sutd.edu.sg" height="500vh">wearesutd</iframe>
    <iframe src="https://wearesutd.sutd.edu.sg/category/sutd-ents/undergraduate-research-opportunities-programme/" height="500vh">wearesutd UROP</iframe>
    <iframe src="https://wearesutd.sutd.edu.sg/category/sutd-ents/" height="500vh">wearesutd sutd-ents</iframe>
    <iframe src="https://wearesutd.sutd.edu.sg/category/sutd-ians/" height="500vh">wearesutd sutd-ians</iframe>
    <iframe src="https://cyberlab.sutd.edu.sg/news/" height="500vh">ST Engineering NEWS</iframe>

    <div class="frame"><a href="https://idc.sutd.edu.sg/news/" title="International Design Centre">IDC News</a></div>
    <div class="frame"><a href="https://asi.sutd.edu.sg/news-events/news/" title="Aviation Studies Institute">ASI News</a></div>
    <div class="frame"><a href="https://dmand.sutd.edu.sg/news-events/news/" title="Digital Manufacturing and Design Centre">DManD News</a></div>
    <div class="frame"><a href="https://lkycic.sutd.edu.sg/news-and-events/news-and-media/" title="Lee Kuan Yew Centre for Innovative Cities"">LKYCIC News</a></div>
    <div class="frame"><a href="https://temasek-labs.sutd.edu.sg/happenings/news/">Temasek Labs News</a></div>
    <div class="frame"><a href="https://cyberlab.sutd.edu.sg/news/">ST Engineering News</a></div>
    <div class="frame"><a href="https://gamelab.dorienherremans.com/our-games">SUTD Game Lab News</a></div>
    <div class="frame"><a href="https://gamelab.dorienherremans.com">SUTD Game Lab Games</a></div>
    <div class="frame"><a href="https://airlab.sutd.edu.sg">AirLab News</a></div>
    <div class="frame"><a href="https://airlab.sutd.edu.sg/news/">AirLab News2</a></div>


    <div class="frame">aklasjdfalkdjfaf</div>






  </div>
</template>

<script>
  export default {
    name: 'AllNews',
    data() {
      return {
        showNews2: false,
        showNews1: false,
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
