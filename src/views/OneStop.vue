<template>
  <div>
        <!--  TODO: slider to customize icon size.   -->
    <p style="text-align:right;margin-right:5%"><button id="themebutton" @click="changeBg">WHITE THEME</button></p>

    <div class="nav2" style="font-size:3rem;" id="simplenav">
      SUTD One Stop
    </div>

    <div >
      <div>
        <p class="section-title" style="text-align:left"><b>Often Visited</b><button @click="showHide1" class=" btn hideBtn">Hide/show</button></p>

        <hr class="hr-section">

<!--        <div ref="os1"  :style="[show1 ? { height:computedHeight1 }: { height:0 }]" class="item-row">-->
        <div :style="[show1 ? { height:computedHeight1 }: { height:0 }]" class="row-container">
          <transition name="fade" mode="out-in">
            <div ref="os1" v-show="show1" class="item-row">
          <!--          downloads, self help, fablab booking (edbooking)-->
          <span class="span-item">
                <img src="../assets/icons/qnap.png" width="64px"> <br>
                DOWNLOADS
              </span>
          <span class="span-item">
                <img src="../assets/icons/qnap.png" width="64px"> <br>
                DOWNLOADS
              </span>
          <span class="span-item">
                <img src="../assets/icons/qnap.png" width="64px"> <br>
                DOWNLOADS <br>SFSFSDFSDF
              </span>
          <span class="span-item">
                <img src="../assets/icons/qnap.png" width="64px"> <br>
                DOWNLOADS
              </span>
          <span class="span-item">
                <img src="../assets/icons/qnap.png" width="64px"> <br>
                DOWNLOADS
              </span>
          <span class="span-item">
                <img src="../assets/icons/qnap.png" width="64px"> <br>
                DOWNLOADS
              </span>
          <span class="span-item">
                <img src="../assets/icons/qnap.png" width="64px"> <br>
                DOWNLOADS
              </span>
          <span class="span-item">
                <img src="../assets/icons/qnap.png" width="64px"> <br>
                DOWNLOADS
              </span>
          <span class="span-item">
                <img src="../assets/icons/qnap.png" width="64px"> <br>
                DOWNLOADS
              </span>
          <span class="span-item">
                <img src="../assets/icons/qnap.png" width="64px"> <br>
                DOWNLOADS
              </span>
          <span class="span-item">
                <img src="../assets/icons/qnap.png" width="64px"> <br>
                DOWNLOADS
              </span>
          <span class="span-item">
                <img src="../assets/icons/qnap.png" width="64px"> <br>
                DOWNLOADS
              </span>
          <span class="span-item">
                <img src="../assets/icons/qnap.png" width="64px"> <br>
                DOWNLOADS
              </span>
          <span class="span-item">
                <img src="../assets/icons/qnap.png" width="64px"> <br>
                DOWNLOADS
              </span>

<!--          <span v-for="item in oftenItems"></span>-->
        </div>
          </transition>
        </div>


      </div>
      <br><br><br>
      <div>
        <p class="section-title" style="text-align:left"><b>Often Visited</b></p>
        <hr class="hr-section">

            <div  v-show="show2" class="item-row">
            <!--          downloads, self help, fablab booking (edbooking)-->
            <span class="span-item">
                <img src="../assets/icons/qnap.png" width="64px"> <br>
                DOWNLOADS
              </span>
            <span class="span-item">
                <img src="../assets/icons/qnap.png" width="64px"> <br>
                DOWNLOADS
              </span>
            <span class="span-item">
                <img src="../assets/icons/qnap.png" width="64px"> <br>
                DOWNLOADS <br>SFSFSDFSDF
              </span>
            <span class="span-item">
                <img src="../assets/icons/qnap.png" width="64px"> <br>
                DOWNLOADS
              </span>
            <span class="span-item">
                <img src="../assets/icons/qnap.png" width="64px"> <br>
                DOWNLOADS
              </span>
            <span class="span-item">
                <img src="../assets/icons/qnap.png" width="64px"> <br>
                DOWNLOADS
              </span>
            <span class="span-item">
                <img src="../assets/icons/qnap.png" width="64px"> <br>
                DOWNLOADS
              </span>
            <span class="span-item">
                <img src="../assets/icons/qnap.png" width="64px"> <br>
                DOWNLOADS
              </span>
            <span class="span-item">
                <img src="../assets/icons/qnap.png" width="64px"> <br>
                DOWNLOADS
              </span>
            <span class="span-item">
                <img src="../assets/icons/qnap.png" width="64px"> <br>
                DOWNLOADS
              </span>
            <span class="span-item">
                <img src="../assets/icons/qnap.png" width="64px"> <br>
                DOWNLOADS
              </span>
            <span class="span-item">
                <img src="../assets/icons/qnap.png" width="64px"> <br>
                DOWNLOADS
              </span>
            <span class="span-item">
                <img src="../assets/icons/qnap.png" width="64px"> <br>
                DOWNLOADS
              </span>
            <span class="span-item">
                <img src="../assets/icons/qnap.png" width="64px"> <br>
                DOWNLOADS
              </span>

            <span v-for="item in oftenItems"></span>
          </div>

      </div>
      <br>
      <div>
        <p class="section-title" style="text-align:left"><b>Often Visited</b></p>
        <hr class="hr-section">
        asldkfjasldfjalsdfadf<br>breargasfasasdfas
      </div>
      <br>
      <div>
        <p class="section-title" style="text-align:left"><b>Often Visited</b></p>
        <hr class="hr-section">
        asldkfjasldfjalsdfadf<br>breargasfasasdfas
      </div>
      <br>

    </div>

  </div>
</template>

<script>

  export default {
    name: 'OneStop',
    data() {
      return {
        show1: true,
        show2: true,
        show3: true,
        show4: true,
        show5: true,
        show6: true,
        show7: true,
        show8: true,
        show9: true,
        computedHeight1: 0,
        prevHeight2: 0,
      };
    },
    mounted() {
      this.initHeight();
      this.mountCheck();
    },
    methods: {
      initHeight() {

        this.$refs['os1'].style.height = 'auto';

        const height = getComputedStyle(this.$refs['os1']).height;
        this.computedHeight1= height;
      },
      showHide1() {
        this.show1 = !this.show1;
        if (!this.show1) {  //when hidden
          window.localStorage.setItem('oneStop1', 'hide');
        }
        else {
          window.localStorage.setItem('oneStop1', 'show');
        }
      },
      showHide2() {
        this.show2 = !this.show2;
        if (!this.show2) {  //when hidden
          window.localStorage.setItem('oneStop2', 'hide')
        }
        else {
          window.localStorage.setItem('oneStop2', 'show')
        }
      },
      showHide3() {
        this.show3 = !this.show3;
        if (!this.show3) {  //when hidden
          window.localStorage.setItem('oneStop3', 'hide')
        }
        else {
          window.localStorage.setItem('oneStop3', 'show')
        }
      },
      showHide4() {
        this.show4 = !this.show4;
        if (!this.show4) {  //when hidden
          window.localStorage.setItem('oneStop4', 'hide')
        }
        else {
          window.localStorage.setItem('oneStop4', 'show')
        }
      },
      showHide5() {
        this.show5 = !this.show5;
        if (!this.show5) {  //when hidden
          window.localStorage.setItem('oneStop5', 'hide')
        }
        else {
          window.localStorage.setItem('oneStop5', 'show')
        }
      },
      showHide6() {
        this.show6 = !this.show6;
        if (!this.show6) {  //when hidden
          window.localStorage.setItem('oneStop6', 'hide')
        }
        else {
          window.localStorage.setItem('oneStop6', 'show')
        }
      },
      showHide7() {
        this.show7 = !this.show7;
        if (!this.show7) {  //when hidden
          window.localStorage.setItem('oneStop7', 'hide')
        }
        else {
          window.localStorage.setItem('oneStop7', 'show')
        }
      },
      showHide8() {
        this.show8 = !this.show8;
        if (!this.show8) {  //when hidden
          window.localStorage.setItem('oneStop8', 'hide')
        }
        else {
          window.localStorage.setItem('oneStop8', 'show')
        }
      },
      showHide9() {
        this.show9 = !this.show9;
        if (!this.show9) {  //when hidden
          window.localStorage.setItem('oneStop9', 'hide')
        }
        else {
          window.localStorage.setItem('oneStop9', 'show')
        }
      },
      mountCheck() {
        // check whitewashing
        if (window.localStorage.getItem('simpleTheme') === 'white') {
          this.whiteWash();
        }
        // check hiding
        if (window.localStorage.getItem('oneStop1') === 'hide') {
          this.show1 = false;
        }
        if (window.localStorage.getItem('oneStop2') === 'hide') {
          this.show2 = false;
        }
        if (window.localStorage.getItem('oneStop3') === 'hide') {
          this.show3 = false;
        }
        if (window.localStorage.getItem('oneStop4') === 'hide') {
          this.show4 = false;
        }
        if (window.localStorage.getItem('oneStop5') === 'hide') {
          this.show5 = false;
        }
        if (window.localStorage.getItem('oneStop6') === 'hide') {
          this.show6 = false;
        }
        if (window.localStorage.getItem('oneStop7') === 'hide') {
          this.show7 = false;
        }
        if (window.localStorage.getItem('oneStop8') === 'hide') {
          this.show8 = false;
        }
        if (window.localStorage.getItem('oneStop9') === 'hide') {
          this.show9 = false;
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
        }
      },
      beforeLeave(element) {
        let hei = getComputedStyle(element).height;

          this.prevHeight1 = hei;

      },
      enter(element) {
        const { height } = getComputedStyle(element);


          element.style.height = this.prevHeight1;


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
  .section-title {
    margin: 0 5vh;
    font-size: 2.1rem;
  }

  .hr-section {
    background: #5e5e5e;
    margin: 0 5vh;
  }

  .btn {
    border: 2px solid black;
    background-color: white;
    color: black;
    padding: .5rem .7rem;
    margin: 0 0 .3rem 1rem;
    vertical-align: bottom;
    font-size: 1.1rem;
    cursor: pointer;
    border-radius: .6rem;
  }

  .hideBtn {
    font-family: 'Oswald', Helvetica, Arial, sans-serif;
    padding: .3rem .7rem .5rem .7rem;
    border-color: #7b7e7b;
    color: #575e61;
    /*background: transparent;*/
  }

  .hideBtn:hover {
    background-color: #d13531;
    color: white;
  }

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

  .row-container {
    transition: .5s;
    background: #dcddf2;
    margin: .5rem 5vh 0;
    border-radius: 1rem;
  }

  .item-row {
    display: flex;
    transition-property: height;
    transition: .5s;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .span-item {
    font-size: 1.5rem;
    padding:.3rem .3rem;
    margin: .2rem 1rem;
    cursor: pointer;
  }

</style>