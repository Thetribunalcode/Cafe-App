<template>
  <div id="Menu">
    <div id="Group_2">
      <svg class="Rectangle_1447_be">
        <rect
          id="Rectangle_1447_be"
          rx="0"
          ry="0"
          x="0"
          y="0"
          width="433"
          height="43"
        ></rect>
      </svg>
      <div id="MENU">
        <slot></slot>
      </div>
    </div>
    <router-link to="/home">
      <img id="logo_bg" src="../../assets/logo.png"
    /></router-link>
  </div>
</template>
<script>
export default {
  props: ['title'],
};
</script>

<style scoped>
#Menu {
  position: absolute;
  width: 500px;
  height: 1214px;
  background-color: rgba(25, 10, 6, 1);
  overflow: hidden;
  --web-view-name: Menu;
  --web-view-id: Menu;
  --web-scale-on-resize: true;
  --web-enable-deep-linking: true;
}
@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
#Group_2 {
  opacity: 0.95;
  position: absolute;
  width: 433px;
  height: 43px;
  left: -8px;
  top: 113px;
  overflow: visible;
}
#logo_bg {
  position: absolute;
  width: 131px;
  height: 131px;
  left: 142px;
  top: 0px;
  overflow: visible;
  --web-animation: fadein 0.3s ease-out;
  --web-action-type: page;
  --web-action-target: Home_Page.html;
  cursor: pointer;
}
#Rectangle_1447_be {
  fill: rgba(237, 191, 125, 1);
  stroke: rgba(112, 112, 112, 1);
  stroke-width: 1px;
  stroke-linejoin: miter;
  stroke-linecap: round;
  stroke-miterlimit: 4;
  shape-rendering: auto;
}
.Rectangle_1447_be {
  position: absolute;
  overflow: visible;
  width: 433px;
  height: 43px;
  left: 0px;
  top: 0px;
}
#MENU {
  left: 183px;
  top: -7px;
  position: absolute;
  overflow: visible;
  width: 67px;
  white-space: nowrap;
  text-align: center;
  font-family: alcester;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  color: rgba(255, 255, 255, 1);
}
</style>
