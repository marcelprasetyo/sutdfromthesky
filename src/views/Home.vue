<template>
  <div class="home">
    <div style="padding:1rem 0;"></div>
    <div style="display:flex;flex-direction:row">
    <p class="title0" style="font-size:5rem;margin:0 0 2rem 0;">SUTD From The Sky</p>
    <p class="title" style="font-size:5rem;margin:0 0 2rem 0;">SUTD From The Sky</p>
    </div>
    <div class="table">
      <div style="width:40%;padding:0 5px;">
        <img id="cat" alt="Aesthetic Helicopter View" src="../../public/logo.jpg" width="97%">
        <br><br>
      </div>
      <div class="flyingtext semi" style="width:60%;text-align:left;padding: 2rem 1rem;">
        <a> Aesthetic Helicopter View (AerView) </a> <br><br>
        <router-link to="/simple"> Simple SUTD Viewer </router-link> <br><br>
        <router-link to="/"> One Stop Portal </router-link>
      </div>

    </div>

    <div class="view semi" style="color:beige;text-shadow:3px 3px #ff1d67; font-size:1.3rem">
    Welcome to SUTD From The Sky!<br>
    You can explore the whimsical<br>
    as well as practical resources that you can just bookmark for Simple Resources Viewer and One Stop.
    </div>

  </div>
</template>

<style>

  .table {
    display: flex;
    justify-content: center;
    margin: 0 10%;
  }

  @media only screen and (max-width: 768px) {
    .table {
      flex-direction: column;
    }
  }

  @media only screen and (min-width: 768px) {
    .table {
      flex-direction: row;
    }
  }

  .title {
    position: absolute;
    animation-delay: 2s;
    animation-timing-function: ease-in;
    font-family: 'Lobster', 'Oswald', serif;
    color: #d8e9d6;
    text-shadow: 3px 3px rgb(255,22,5);;
    -webkit-animation: fly 1.5s forwards;
    animation: fly 1.5s forwards;

  }

  .title0 {
    font-family: 'Lobster', 'Oswald', serif;
    color: transparent;
  }

  @-webkit-keyframes fly {
    from {right: -75vw;}
    to {right: 25vw;}
  }

  @keyframes fly {
    from {right: -75vw;}
    to {right: 25vw;}
  }

</style>