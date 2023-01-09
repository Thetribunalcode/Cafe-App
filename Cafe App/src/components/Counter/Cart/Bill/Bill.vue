<template>
  <div id="Order_DetailsBill">
  <TheHeaderVue><span>Bill</span></TheHeaderVue>
  <div id="your_order_number_is_">
    <span>your order number is </span>
  </div>
  <div id="xxxxxxxxxxxx">
    <span>{{ ID }}</span>
  </div>
  <div id="Items_">
    <span>Items </span>
  </div>
  <div id="qty">
    <span>qty</span>
  </div>
  <div id="amt">
    <span>amt</span>
  </div>

  <div id="Group_21">
    <span v-for="(item, index) in cartItems" :key="index">
      <div id="name">
        {{ item.name }}
      </div>
      <div id="quantity">
        {{ item.quantity }}
      </div>
      <div id="total">
        ₹{{ item.price * item.quantity }}
      </div>
    </span>
	<div id="line">
        <svg class="line_3" viewBox="0 0 414 3">
          <path id="Line_3" d="M 0 0 L 414 0"></path>
        </svg>
      </div>
	<h2 id="sum_total">
		<span>total :</span>
	</h2>
  <h2 id="sum_value">
		<span>₹{{totalPrice}}</span>
	</h2>
  <div id="payment_mode">
		<span>Payment mode :</span>
	</div>
  <div id="online">
		<span>online</span>
	</div>
  <div id="Thank_you_see_you_again">
		<span>Thank you<br/>see you again</span>
	</div>
  </div>
  <svg class="Line_2" viewBox="0 0 414 3">
    <path id="Line_2" d="M 0 0 L 414 0"></path>
  </svg>
  <svg class="Line_3" viewBox="0 0 414 3">
    <path id="Line_3" d="M 0 0 L 414 0"></path>
  </svg>
  </div>
</template>

<script>
import TheHeaderVue from '../../../Header/TheHeader.vue';
import { fetchRecordByID } from '../../../../../appwrite.config';

export default {
  inject: ['cart'],
  components: {
    TheHeaderVue,
  },
  data() {
    return {
      ID: 12,
      cartItems: [],
      items: [
        {
          id: 'pcoffee',
          name: 'Filter Coffee',
          price: 25,
        },
        {
          id: 'bcoffee',
          name: 'BY2 Coffee',
          price: 20,
        },
        {
          id: 'vidli',
          name: 'Vada & Idli',
          price: 50,
        },
        {
          id: 'idli',
          name: 'Idli',
          price: 40,
        },
        {
          id: 'vada',
          name: 'Vada',
          price: 45,
        },
        {
          id: 'ridli',
          name: 'Rava Idli',
          price: 40,
        },
        {
          id: 'mdosa',
          name: 'Masala Dosa',
          price: 50,
        },
      ],
      tran_id: 0,
      totalPrice: 0,
    };
  },
  async mounted() {
    const ID = this.$route.params.id;
    this.ID = ID;
    const res = await fetchRecordByID(ID);
    this.cartItems = res.ItemNames.map((id2, index) => ({
      name: this.items.find((item) => item.id === id2).name,
      quantity: res.ItemQuantities[index],
      price: this.items.find((item) => item.id === id2).price,
    }));
	this.totalPrice = res.Total;
    console.log(this.cartItems);
  },
};
</script>


<style scoped>
.mediaViewInfo {
  --web-view-name: Order Details/Bill;
  --web-view-id: Order_DetailsBill;
  --web-scale-on-resize: true;
  --web-enable-deep-linking: true;
}
:root {
  --web-view-ids: Order_DetailsBill;
}
* {
  box-sizing: border-box;
  border: none;
}
#Order_DetailsBill {
  position: absolute;
  width: 414px;
  height: 1214px;
  background-color: rgba(25, 10, 6, 1);
  overflow: hidden;
  --web-view-name: Order Details/Bill;
  --web-view-id: Order_DetailsBill;
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
#Group_1_dh {
  opacity: 0.95;
  position: absolute;
  width: 433px;
  height: 43px;
  left: -9px;
  top: 118px;
  overflow: visible;
}
#Rectangle_1447_di {
  fill: rgba(237, 191, 125, 1);
  stroke: rgba(112, 112, 112, 1);
  stroke-width: 1px;
  stroke-linejoin: miter;
  stroke-linecap: round;
  stroke-miterlimit: 4;
  shape-rendering: auto;
}
.Rectangle_1447_di {
  position: absolute;
  overflow: visible;
  width: 433px;
  height: 43px;
  left: 0px;
  top: 0px;
}
#order_details {
  left: 118px;
  top: 5px;
  position: absolute;
  overflow: visible;
  width: 197px;
  white-space: nowrap;
  text-align: center;
  font-family: alcester;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  color: rgba(255, 255, 255, 1);
}
#logo_dk {
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
#your_order_number_is_ {
  left: 124px;
  top: 179px;
  position: absolute;
  overflow: visible;
  width: 175px;
  white-space: nowrap;
  line-height: 29px;
  margin-top: -3.5px;
  text-align: center;
  font-family: alcester;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  color: rgba(255, 255, 255, 1);
}
#xxxxxxxxxxxx {
  left: 138px;
  top: 216px;
  position: absolute;
  overflow: visible;
  width: 139px;
  white-space: nowrap;
  line-height: 38px;
  margin-top: -4.5px;
  text-align: center;
  font-family: alcester;
  font-style: normal;
  font-weight: normal;
  font-size: 29px;
  color: rgba(255, 255, 255, 1);
}
#Items_ {
  left: 30.5px;
  top: 310px;
  position: absolute;
  overflow: visible;
  width: 43px;
  white-space: nowrap;
  line-height: 26px;
  margin-top: -3px;
  text-align: center;
  font-family: alcester;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: rgba(255, 255, 255, 1);
}
#qty {
  left: 253.5px;
  top: 310px;
  position: absolute;
  overflow: visible;
  width: 27px;
  white-space: nowrap;
  line-height: 26px;
  margin-top: -3px;
  text-align: center;
  font-family: alcester;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: rgba(255, 255, 255, 1);
}
#amt {
  left: 355.5px;
  top: 310px;
  position: absolute;
  overflow: visible;
  width: 29px;
  white-space: nowrap;
  line-height: 26px;
  margin-top: -3px;
  text-align: center;
  font-family: alcester;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: rgba(255, 255, 255, 1);
}
#Premium_filter_coffee_dq {
  left: -5.5px;
  top: 393px;
  position: absolute;
  overflow: visible;
  width: 209px;
  white-space: nowrap;
  line-height: 26px;
  margin-top: -3px;
  text-align: center;
  font-family: alcester;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: rgba(255, 255, 255, 1);
}
#TIME_ORDERED {
  left: -24px;
  top: 290px;
  position: absolute;
  overflow: visible;
  width: 209px;
  white-space: nowrap;
  line-height: 26px;
  margin-top: -3px;
  text-align: center;
  font-family: alcester;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: rgba(255, 255, 255, 1);
}
#BY2_coffee_ds {
  left: -18.5px;
  top: 432px;
  position: absolute;
  overflow: visible;
  width: 161px;
  white-space: nowrap;
  line-height: 26px;
  margin-top: -3px;
  text-align: center;
  font-family: alcester;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: rgba(255, 255, 255, 1);
}
#subtotal_ {
  left: -24.5px;
  top: 480px;
  position: absolute;
  overflow: visible;
  width: 161px;
  white-space: nowrap;
  line-height: 26px;
  margin-top: -3px;
  text-align: center;
  font-family: alcester;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: rgba(255, 255, 255, 1);
}
#total_ {
  left: -28.5px;
  top: 528px;
  position: absolute;
  overflow: visible;
  width: 161px;
  white-space: nowrap;
  line-height: 26px;
  margin-top: -3px;
  text-align: center;
  font-family: alcester;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: rgba(255, 255, 255, 1);
}
#payment_mode {
  left: -10px;
  position: absolute;
  overflow: visible;
  width: 161px;
  white-space: nowrap;
  line-height: 26px;
  margin-top: -3px;
  text-align: center;
  font-family: alcester;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: rgba(255, 255, 255, 1);
}
#online {
  left: 85px;
  position: absolute;
  overflow: visible;
  width: 161px;
  white-space: nowrap;
  line-height: 26px;
  margin-top: -3px;
  text-align: center;
  font-family: alcester;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: rgba(255, 255, 255, 1);
}
#xxxx_xxxx_xxxx {
  left: 118px;
  top: 614px;
  position: absolute;
  overflow: visible;
  width: 161px;
  white-space: nowrap;
  line-height: 26px;
  margin-top: -3px;
  text-align: center;
  font-family: alcester;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: rgba(255, 255, 255, 1);
}
#transaction_id_ {
  left: -7px;
  position: absolute;
  width: 161px; 
  white-space: nowrap;
  line-height: 26px;
  margin-top: -3px;
  text-align: center;
  font-family: alcester;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: rgba(255, 255, 255, 1);
}
#x {
  left: 264.5px;
  top: 400px;
  position: absolute;
  overflow: visible;
  width: 9px;
  white-space: nowrap;
  line-height: 26px;
  margin-top: -3px;
  text-align: center;
  font-family: alcester;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: rgba(255, 255, 255, 1);
}
#x_d {
  left: 264.5px;
  top: 432px;
  position: absolute;
  overflow: visible;
  width: 9px;
  white-space: nowrap;
  line-height: 26px;
  margin-top: -3px;
  text-align: center;
  font-family: alcester;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: rgba(255, 255, 255, 1);
}
#x_ea {
  left: 264.5px;
  top: 480px;
  position: absolute;
  overflow: visible;
  width: 9px;
  white-space: nowrap;
  line-height: 26px;
  margin-top: -3px;
  text-align: center;
  font-family: alcester;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: rgba(255, 255, 255, 1);
}
#xx_d {
  left: 355.5px;
  top: 385px;
  position: absolute;
  overflow: visible;
  width: 27px;
  white-space: nowrap;
  line-height: 26px;
  margin-top: -3px;
  text-align: center;
  font-family: alcester;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: rgba(255, 255, 255, 1);
}
#hhmmss {
  left: 320px;
  top: 290px;
  position: absolute;
  overflow: visible;
  width: 59px;
  white-space: nowrap;
  line-height: 26px;
  margin-top: -3px;
  text-align: center;
  font-family: alcester;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: rgba(255, 255, 255, 1);
}
#xx_ea {
  left: 355.5px;
  top: 424px;
  position: absolute;
  overflow: visible;
  width: 27px;
  white-space: nowrap;
  line-height: 26px;
  margin-top: -3px;
  text-align: center;
  font-family: alcester;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: rgba(255, 255, 255, 1);
}
#xx_eb {
  left: 356.5px;
  top: 472px;
  position: absolute;
  overflow: visible;
  width: 27px;
  white-space: nowrap;
  line-height: 26px;
  margin-top: -3px;
  text-align: center;
  font-family: alcester;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: rgba(255, 255, 255, 1);
}
#xx_ec {
  left: 355.5px;
  top: 529px;
  position: absolute;
  overflow: visible;
  width: 27px;
  white-space: nowrap;
  line-height: 26px;
  margin-top: -3px;
  text-align: center;
  font-family: alcester;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: rgba(255, 255, 255, 1);
}
#Line_1 {
  fill: transparent;
  stroke: rgba(225, 181, 118, 1);
  stroke-width: 3px;
  stroke-linejoin: miter;
  stroke-linecap: butt;
  stroke-dasharray: 6;
  stroke-dashoffset: 0;
  stroke-miterlimit: 4;
  shape-rendering: auto;
}
.Line_1 {
  overflow: visible;
  position: absolute;
  width: 400px;
  height: 3px;
  left: 30px;
  top: 507.5px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Line_2 {
  fill: transparent;
  stroke: rgba(225, 181, 118, 1);
  stroke-width: 3px;
  stroke-linejoin: miter;
  stroke-linecap: butt;
  stroke-dasharray: 6;
  stroke-dashoffset: 0;
  stroke-miterlimit: 4;
  shape-rendering: auto;
}
.Line_2 {
  overflow: visible;
  position: absolute;
  width: 400px;
  height: 3px;
  left: 15px;
  top: 339.5px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Line_3 {
  fill: transparent;
  stroke: rgba(225, 181, 118, 1);
  stroke-width: 3px;
  stroke-linejoin: miter;
  stroke-linecap: butt;
  stroke-dasharray: 6;
  stroke-dashoffset: 0;
  stroke-miterlimit: 4;
  shape-rendering: auto;
}
.Line_3 {
  overflow: visible;
  position: absolute;
  width: 400px;
  height: 3px;
  left: 15px;
  top: 295.5px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Thank_you_see_you_again {
  left: 148px;
  top: 450px;
  position: absolute;
  overflow: visible;
  width: 119px;
  line-height: 32px;
  margin-top: -4px;
  text-align: center;
  font-family: alcester;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  color: rgba(255, 255, 255, 1);
}
#Group_21 {
  position: relative;
  top: 350px;
  color: white;
  font-family: Alcester;
}
#name {
  position: relative;
  display: inline-block;
  left: 20px;
  color: white;
  font-family: Alcester;
}
#quantity {
  position: relative;
  left: 264.5px;
  top: -16px;
  color: white;
  font-family: Alcester;
}
#sum_total
{
	position: relative;
	left: 20px;
	top: 20px;
	color: white;
	font-family: Alcester;

}
#total {
  position: relative;
  left: 355.5px;
  top: -32px;
  color: white;
  font-family: Alcester;
}
#sum_value
{
  position: relative;
  left: 355.5px;
  top: -10px;
  color: white;
  font-family: Alcester;

}
.line_3 {
  overflow: visible;
  position: absolute;
  width: 400px;
  height: 3px;
  left: 9px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
</style>
