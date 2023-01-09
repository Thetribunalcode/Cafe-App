<template>
  <div id="Home_Page">
    <img id="Untitled-1" src="./assets/Untitled-1.png" />

    <svg class="Rectangle_1449">
      <rect
        id="Rectangle_1449"
        rx="0"
        ry="0"
        x="0"
        y="0"
        width="438"
        height="789"
      ></rect>
    </svg>
    <router-link to="/menu/takeaway"
      ><div id="Button_CTA_da">
        <svg class="Rectangle_1090_da">
          <rect
            id="Rectangle_1090_da"
            rx="10"
            ry="10"
            x="0"
            y="0"
            width="147"
            height="50"
          ></rect>
        </svg>
        <div id="takeaway">
          <span>TAKEAWAY</span>
        </div>
      </div></router-link
    >
    <router-link to="/menu/dine-in">    <div id="Button_CTA_db">
        <svg class="Rectangle_1090_dc">
          <rect
            id="Rectangle_1090_dc"
            rx="10"
            ry="10"
            x="0"
            y="0"
            width="147"
            height="50"
          ></rect>
        </svg>
        <div id="dine_in">
          <span>DINE IN</span>
        </div>
      </div></router-link>

    <img id="logo_de" src="./assets/logo.png" />
  </div>
</template>

<script></script>

<style scoped>
.mediaViewInfo {
  --web-view-name: Home Page;
  --web-view-id: Home_Page;
  --web-scale-on-resize: true;
  --web-enable-deep-linking: true;
}
:root {
  --web-view-ids: Home_Page;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: none;
}
#Home_Page {
  position: absolute;
  width: 425px;
  height: 100vh;
  background-color: rgba(255, 255, 255, 1);
  overflow: hidden;
  --web-view-name: Home Page;
  --web-view-id: Home_Page;
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
#Untitled-1 {
  filter: blur(2px);
  position: absolute;
  width: 425px;
  height: 100vh;
  left: -11px;
  top: -10px;
  overflow: visible;
}
#Rectangle_1449 {
  opacity: 0.47;
  fill: rgba(48, 46, 46, 1);
  stroke: rgba(112, 112, 112, 1);
  stroke-width: 1px;
  stroke-linejoin: miter;
  stroke-linecap: butt;
  stroke-miterlimit: 4;
  shape-rendering: auto;
}
.Rectangle_1449 {
  mix-blend-mode: hard-light;
  position: absolute;
  overflow: visible;
  width: 438px;
  height: 100vh;
  left: -10px;
  top: -19px;
}
#Button_CTA_da {
  position: absolute;
  width: 147px;
  height: 50px;
  left: 222px;
  top: 581px;
  overflow: visible;
  --web-animation: fadein 0.3s ease-out;
  --web-action-type: page;
  --web-action-target: Menu.html;
  cursor: pointer;
}
#Rectangle_1090_da {
  fill: rgba(218, 171, 129, 1);
  stroke: rgba(68, 9, 3, 1);
  stroke-width: 2px;
  stroke-linejoin: miter;
  stroke-linecap: butt;
  stroke-miterlimit: 4;
  shape-rendering: auto;
}
.Rectangle_1090_da {
  position: absolute;
  overflow: visible;
  width: 147px;
  height: 50px;
  left: 0px;
  top: 0px;
}
#takeaway {
  left: 16px;
  top: 10px;
  position: absolute;
  overflow: visible;
  width: 117px;
  white-space: nowrap;
  line-height: 42px;
  margin-top: -3.5px;
  text-align: center;
  font-family: alcester;
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  color: rgba(255, 255, 255, 1);
}
#Button_CTA_db {
  position: absolute;
  width: 147px;
  height: 50px;
  left: 45px;
  top: 581px;
  overflow: visible;
  --web-animation: fadein 0.3s ease-out;
  --web-action-type: page;
  --web-action-target: Menu.html;
  cursor: pointer;
}
#Rectangle_1090_dc {
  fill: rgba(218, 171, 129, 1);
  stroke: rgba(68, 9, 3, 1);
  stroke-width: 2px;
  stroke-linejoin: miter;
  stroke-linecap: butt;
  stroke-miterlimit: 4;
  shape-rendering: auto;
}
.Rectangle_1090_dc {
  position: absolute;
  overflow: visible;
  width: 147px;
  height: 50px;
  left: 0px;
  top: 0px;
}
#dine_in {
  left: 33px;
  top: 10px;
  position: absolute;
  overflow: visible;
  width: 83px;
  white-space: nowrap;
  line-height: 40px;
  margin-top: -2px;
  text-align: center;
  font-family: alcester;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  color: rgba(255, 255, 255, 1);
}
#logo_de {
  position: absolute;
  width: 260px;
  height: 260px;
  left: 77px;
  top: -17px;
  overflow: visible;
}
</style>
