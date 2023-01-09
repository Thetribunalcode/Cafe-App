<template>
	<div id="Cart">
    <TheHeaderVue><span>Cart</span></TheHeaderVue>

    <router-link to="/menu">    
		<div id="Backward_arrow" class="Backward_arrow">
			<svg class="Path_10" viewBox="0 0 28 28">
				<path id="Path_10" d="M 14 0 L 11.45454597473145 2.545454502105713 L 21.09090995788574 12.18181800842285 L 0 12.18181800842285 L 0 15.81818199157715 L 21.09090995788574 15.81818199157715 L 11.45454597473145 25.45454597473145 L 14 28 L 28 14 L 14 0 Z">
				</path>
			</svg>
		</div>
	</router-link>



	<div id="Group_21">
		<div id="quantity_1" style="font-size:20px;">Quantity</div>
		<div id="name_1" style="font-size:20px;">ITEM</div> 
		<div id="price_1" style="font-size:20px;">Price</div>
		<h2 v-for="(item, index) in cartItems" :key="index" class="cartList">
			<div id="quantity_1">{{ item.quantity }} </div>
			<div id="name_1">{{ item.name }}</div>
			<div id="price_1">
				{{ item.price * item.quantity  }}
			</div>
		</h2>
	</div>

	<div id="Group_4">
		<svg class="Rectangle_1448">
			<rect id="Rectangle_1448" rx="10" ry="10" x="0" y="0" width="384" height="72">
			</rect>
		</svg>
		<div id="TOTAL__xx">
			<span>TOTAL : {{ totalPrice }} </span>
		</div>
		<div id="Button_CTA">
			<svg class="Rectangle_1090">
				<rect id="Rectangle_1090" rx="10" ry="10" x="0" y="0" width="146" height="50">
				</rect>
			</svg>
			<div @click="handleNav" id="Buy_Now">
				<span>order now</span>

			</div>
		</div>
	</div>
	</div>
</template>

<style scoped>

</style>

<script>
import TheHeaderVue from '../../Header/TheHeader.vue';
import { fetchRecordByID, updateRecordByID } from '../../../../appwrite.config';

    export default {
        inject: ['cart'],
        components: {
            TheHeaderVue
        },
		data () {
			return {
				cartItems: [],
				images: [],
				ID: 12,
				tran_id: 0,
				totalPrice: 0,
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
			}
		},
		async mounted() {
			this.ID = (this.$route.params.id)
			this.tran_id = (this.$route.params.id)
			const res = await fetchRecordByID(this.ID);
			this.cartItems = res.ItemNames.map((id2, index) => ({name: this.items.find(item => item.id === id2).name, quantity: res.ItemQuantities[index], price: this.items.find(item => item.id === id2).price}))
			// this.images= this.items.filter( (item) => item.name === this.cartItems.map( (id) => id.name) )
			this.images = res.ItemNames
			console.log(this.images)
			this.totalPrice = res.Total;
		},
		methods: {
			async handleNav() {
				const res = await updateRecordByID(this.ID);
				console.log(res)
				this.$router.push({path: `/bill/${this.ID}`, replace: true});
			}
		}
    }
</script>















<style scoped>

.mediaViewInfo {
	--web-view-name: Cart;
	--web-view-id: Cart;
	--web-scale-on-resize: true;
	--web-enable-deep-linking: true;
}
:root {
	--web-view-ids: Cart;
}
* {
	box-sizing: border-box;
	border: none;
}
#Cart {
	position: absolute;
	width: 414px;
	height: 1000px;
	background-color: rgba(25,10,6,1);
	overflow: hidden;
	--web-view-name: Cart;
	--web-view-id: Cart;
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
#Group_1 {
	opacity: 0.95;
	position: absolute;
	width: 433px;
	height: 43px;
	left: -9px;
	top: 118px;
	overflow: visible;
}
#Rectangle_1447 {
	fill: rgba(237,191,125,1);
	stroke: rgba(112,112,112,1);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: round;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Rectangle_1447 {
	position: absolute;
	overflow: visible;
	width: 433px;
	height: 43px;
	left: 0px;
	top: 0px;
}
#CART {
	left: 182px;
	top: 5px;
	position: absolute;
	overflow: visible;
	width: 69px;
	white-space: nowrap;
	text-align: center;
	font-family: alcester;
	font-style: normal;
	font-weight: normal;
	font-size: 40px;
	color: rgba(255,255,255,1);
}
#logo {
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
#Backward_arrow {
	position: absolute;
	width: 29px;
	height: 28px;
	left: 31px;
	top: 52px;
	overflow: visible;
	--web-animation: fadein 0.3s ease-out;
	--web-action-type: page;
	--web-action-target: Menu.html;
	cursor: pointer;
}
#Path_10 {
	fill: rgba(226,181,118,1);
}
.Path_10 {
	overflow: visible;
	position: absolute;
	width: 28px;
	height: 28px;
	transform: translate(0px, 0px) matrix(1,0,0,1,0,0) rotate(180deg);
	transform-origin: center;
	left: 0px;
	top: 0px;
}
#Group_4 {
	position: absolute;
	width: 384px;
	height: 72px;
	left: 15px;
	top: 624px;
	overflow: visible;
	--web-animation: fadein 0.3s ease-out;
	--web-action-type: page;
	--web-action-target: Order_Details_Bill.html;
	cursor: pointer;
}
#Rectangle_1448 {
	fill: rgba(237,191,125,1);
	stroke: rgba(68,9,3,1);
	stroke-width: 2px;
	stroke-linejoin: round;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Rectangle_1448 {
	position: absolute;
	overflow: visible;
	width: 384px;
	height: 72px;
	left: 0px;
	top: 0px;
}

#TOTAL__xx {
	left: 27px;
	top: 16px;
	position: absolute;
	overflow: visible;
	width: 131px;
	white-space: nowrap;
	text-align: center;
	font-family: alcester;
	font-style: normal;
	font-weight: normal;
	font-size: 30px;
	color: rgba(255,255,255,1);
	letter-spacing: 0.2px;
}
#Button_CTA {
	position: absolute;
	width: 146px;
	height: 50px;
	left: 227px;
	top: 12px;
	overflow: visible;
}
#Rectangle_1090 {
	fill: rgba(218,171,129,1);
	stroke: rgba(68,9,3,1);
	stroke-width: 2px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Rectangle_1090 {
	position: absolute;
	overflow: visible;
	width: 146px;
	height: 50px;
	left: 0px;
	top: 0px;
}
#Buy_Now {
	left: 12px;
	top: 10px;
	position: absolute;
	overflow: visible;
	width: 123px;
	white-space: nowrap;
	line-height: 33px;
	margin-top: -0.5px;
	text-align: center;
	font-family: alcester;
	font-style: normal;
	font-weight: normal;
	font-size: 32px;
	color: rgba(255,255,255,1);
}
#Premium_filter_coffee {
	left: 41px;
	top: 213px;
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
	color: rgba(255,255,255,1);
}
#BY2_coffee {
	left: 28px;
	top: 269px;
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
	color: rgba(255,255,255,1);
}
#Button_CTA_x {
	position: absolute;
	width: 87px;
	height: 30px;
	left: 240px;
	top: 207px;
	overflow: visible;
}
#Rectangle_1090_y {
	fill: rgba(218,171,129,1);
	stroke: rgba(68,9,3,1);
	stroke-width: 2px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Rectangle_1090_y {
	position: absolute;
	overflow: visible;
	width: 87px;
	height: 30px;
	left: 0px;
	top: 0px;
}
#ic_remove_24px {
	fill: rgba(68,9,3,1);
}
.ic_remove_24px {
	overflow: visible;
	position: absolute;
	width: 14px;
	height: 2px;
	left: 11px;
	top: 15px;
	transform: matrix(1,0,0,1,0,0);
}
#ic_add_24px {
	fill: rgba(68,9,3,1);
}
.ic_add_24px {
	overflow: visible;
	position: absolute;
	width: 14px;
	height: 14px;
	left: 64px;
	top: 8px;
	transform: matrix(1,0,0,1,0,0);
}
#quantity {
	left: 41px;
	top: 6px;
	position: absolute;
	overflow: visible;
	width: 7px;
	white-space: nowrap;
	line-height: 24px;
	margin-top: -2px;
	text-align: center;
	font-family: alcester;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	color: rgba(255,255,255,1);
}
#Button_CTA_ {
	position: absolute;
	width: 87px;
	height: 30px;
	left: 240px;
	top: 320px;
	overflow: visible;
}
#Rectangle_1090_ {
	fill: rgba(218,171,129,1);
	stroke: rgba(68,9,3,1);
	stroke-width: 2px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Rectangle_1090_ {
	position: absolute;
	overflow: visible;
	width: 87px;
	height: 30px;
	left: 0px;
	top: 0px;
}
#ic_remove_24px_ {
	fill: rgba(68,9,3,1);
}
#waste1
{
	position: absolute;
	left: 100%;

}
#waste2
{
	position: absolute;
	left: 250%;
}

#waste
{
	position: absolute;
	left: 500%;
}
.ic_remove_24px_ {
	overflow: visible;
	position: absolute;
	width: 14px;
	height: 2px;
	left: 11px;
	top: 15px;
	transform: matrix(1,0,0,1,0,0);
}
#ic_add_24px_ {
	fill: rgba(68,9,3,1);
}
.ic_add_24px_ {
	overflow: visible;
	position: absolute;
	width: 14px;
	height: 14px;
	left: 64px;
	top: 8px;
	transform: matrix(1,0,0,1,0,0);
}
#quantity_ {
	left: 41px;
	top: 6px;
	position: absolute;
	overflow: visible;
	width: 7px;
	white-space: nowrap;
	line-height: 24px;
	margin-top: -2px;
	text-align: center;
	font-family: alcester;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	color: rgba(255,255,255,1);
}
#Button_CTA_ba {
	position: absolute;
	width: 87px;
	height: 30px;
	left: 240px;
	top: 439px;
	overflow: visible;
}
#Rectangle_1090_ba {
	fill: rgba(218,171,129,1);
	stroke: rgba(68,9,3,1);
	stroke-width: 2px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Rectangle_1090_ba {
	position: absolute;
	overflow: visible;
	width: 87px;
	height: 30px;
	left: 0px;
	top: 0px;
}
#ic_remove_24px_ba {
	fill: rgba(68,9,3,1);
}
.ic_remove_24px_ba {
	overflow: visible;
	position: absolute;
	width: 14px;
	height: 2px;
	left: 11px;
	top: 15px;
	transform: matrix(1,0,0,1,0,0);
}
#ic_add_24px_ba {
	fill: rgba(68,9,3,1);
}
.ic_add_24px_ba {
	overflow: visible;
	position: absolute;
	width: 14px;
	height: 14px;
	left: 64px;
	top: 8px;
	transform: matrix(1,0,0,1,0,0);
}
#quantity_bb {
	left: 41px;
	top: 6px;
	position: absolute;
	overflow: visible;
	width: 7px;
	white-space: nowrap;
	line-height: 24px;
	margin-top: -2px;
	text-align: center;
	font-family: alcester;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	color: rgba(255,255,255,1);
}
#Button_CTA_bc {
	position: absolute;
	width: 87px;
	height: 30px;
	left: 240px;
	top: 262px;
	overflow: visible;
}
#Rectangle_1090_bd {
	fill: rgba(218,171,129,1);
	stroke: rgba(68,9,3,1);
	stroke-width: 2px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Rectangle_1090_bd {
	position: absolute;
	overflow: visible;
	width: 87px;
	height: 30px;
	left: 0px;
	top: 0px;
}
#ic_remove_24px_be {
	fill: rgba(68,9,3,1);
}
.ic_remove_24px_be {
	overflow: visible;
	position: absolute;
	width: 14px;
	height: 2px;
	left: 11px;
	top: 15px;
	transform: matrix(1,0,0,1,0,0);
}
#ic_add_24px_bf {
	fill: rgba(68,9,3,1);
}
.ic_add_24px_bf {
	overflow: visible;
	position: absolute;
	width: 14px;
	height: 14px;
	left: 64px;
	top: 8px;
	transform: matrix(1,0,0,1,0,0);
}
#quantity_bg {
	left: 41px;
	top: 6px;
	position: absolute;
	overflow: visible;
	width: 7px;
	white-space: nowrap;
	line-height: 24px;
	margin-top: -2px;
	text-align: center;
	font-family: alcester;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	color: rgba(255,255,255,1);
}
#Button_CTA_bh {
	position: absolute;
	width: 87px;
	height: 30px;
	left: 240px;
	top: 375px;
	overflow: visible;
}
#Rectangle_1090_bi {
	fill: rgba(218,171,129,1);
	stroke: rgba(68,9,3,1);
	stroke-width: 2px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Rectangle_1090_bi {
	position: absolute;
	overflow: visible;
	width: 87px;
	height: 30px;
	left: 0px;
	top: 0px;
}
#ic_remove_24px_bj {
	fill: rgba(68,9,3,1);
}
.ic_remove_24px_bj {
	overflow: visible;
	position: absolute;
	width: 14px;
	height: 2px;
	left: 11px;
	top: 15px;
	transform: matrix(1,0,0,1,0,0);
}
#ic_add_24px_bk {
	fill: rgba(68,9,3,1);
}
.ic_add_24px_bk {
	overflow: visible;
	position: absolute;
	width: 14px;
	height: 14px;
	left: 64px;
	top: 8px;
	transform: matrix(1,0,0,1,0,0);
}
#quantity_bl {
	left: 41px;
	top: 6px;
	position: absolute;
	overflow: visible;
	width: 7px;
	white-space: nowrap;
	line-height: 24px;
	margin-top: -2px;
	text-align: center;
	font-family: alcester;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	color: rgba(255,255,255,1);
}
#Button_CTA_bm {
	position: absolute;
	width: 87px;
	height: 30px;
	left: 240px;
	top: 494px;
	overflow: visible;
}
#Rectangle_1090_bn {
	fill: rgba(218,171,129,1);
	stroke: rgba(68,9,3,1);
	stroke-width: 2px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Rectangle_1090_bn {
	position: absolute;
	overflow: visible;
	width: 87px;
	height: 30px;
	left: 0px;
	top: 0px;
}
#ic_remove_24px_bo {
	fill: rgba(68,9,3,1);
}
.ic_remove_24px_bo {
	overflow: visible;
	position: absolute;
	width: 14px;
	height: 2px;
	left: 11px;
	top: 15px;
	transform: matrix(1,0,0,1,0,0);
}
#ic_add_24px_bp {
	fill: rgba(68,9,3,1);
}
.ic_add_24px_bp {
	overflow: visible;
	position: absolute;
	width: 14px;
	height: 14px;
	left: 64px;
	top: 8px;
	transform: matrix(1,0,0,1,0,0);
}
#quantity_bq {
	left: 41px;
	top: 6px;
	position: absolute;
	overflow: visible;
	width: 7px;
	white-space: nowrap;
	line-height: 24px;
	margin-top: -2px;
	text-align: center;
	font-family: alcester;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	color: rgba(255,255,255,1);
}
#Button_CTA_br {
	position: absolute;
	width: 87px;
	height: 30px;
	left: 240px;
	top: 562px;
	overflow: visible;
}
#Rectangle_1090_bs {
	fill: rgba(218,171,129,1);
	stroke: rgba(68,9,3,1);
	stroke-width: 2px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Rectangle_1090_bs {
	position: absolute;
	overflow: visible;
	width: 87px;
	height: 30px;
	left: 0px;
	top: 0px;
}
#ic_remove_24px_bt {
	fill: rgba(68,9,3,1);
}
.ic_remove_24px_bt {
	overflow: visible;
	position: absolute;
	width: 14px;
	height: 2px;
	left: 11px;
	top: 15px;
	transform: matrix(1,0,0,1,0,0);
}
#ic_add_24px_bu {
	fill: rgba(68,9,3,1);
}
.ic_add_24px_bu {
	overflow: visible;
	position: absolute;
	width: 14px;
	height: 14px;
	left: 64px;
	top: 8px;
	transform: matrix(1,0,0,1,0,0);
}
#quantity_bv {
	left: 41px;
	top: 6px;
	position: absolute;
	overflow: visible;
	width: 7px;
	white-space: nowrap;
	line-height: 24px;
	margin-top: -2px;
	text-align: center;
	font-family: alcester;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	color: rgba(255,255,255,1);
}
#xx {
	left: 365px;
	top: 206px;
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
	color: rgba(255,255,255,1);
}
#xx_bx {
	left: 365px;
	top: 319px;
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
	color: rgba(255,255,255,1);
}
#xx_by {
	left: 365px;
	top: 438px;
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
	color: rgba(255,255,255,1);
}
#xx_bz {
	left: 368px;
	top: 262px;
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
	color: rgba(255,255,255,1);
}
#xx_b {
	left: 368px;
	top: 375px;
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
	color: rgba(255,255,255,1);
}
#xx_ca {
	left: 368px;
	top: 494px;
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
	color: rgba(255,255,255,1);
}
#xx_cb {
	left: 368px;
	top: 562px;
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
	color: rgba(255,255,255,1);
}
#ID1 {
	position: absolute;
	width: 37px;
	height: 36px;
	left: 15px;
	top: 208px;
	overflow: visible;
}
#South_Indian_Filter_Coffee_Rec {
	position: absolute;
	width: 37px;
	height: 36px;
	left: 15px;
	top: 258px;
	overflow: visible;
}
#South_Indian_Filter_Coffee_Rec_b {
	position: absolute;
	width: 37px;
	height: 35px;
	left: 15px;
	top: 314px;
	overflow: visible;
}
#South_Indian_Filter_Coffee_Rec_ca {
	position: absolute;
	width: 37px;
	height: 35px;
	left: 15px;
	top: 375px;
	overflow: visible;
}
#South_Indian_Filter_Coffee_Rec_cb {
	position: absolute;
	width: 37px;
	height: 35px;
	left: 15px;
	top: 436px;
	overflow: visible;
}
#South_Indian_Filter_Coffee_Rec_cc {
	position: absolute;
	width: 37px;
	height: 36px;
	left: 15px;
	top: 497px;
	overflow: visible;
}
#South_Indian_Filter_Coffee_Rec_cd {
	position: absolute;
	width: 37px;
	height: 36px;
	left: 15px;
	top: 559px;
	overflow: visible;
}
#IDLI_VADA {
	left: 22px;
	top: 322px;
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
	color: rgba(255,255,255,1);
}
#Menu {
	position: absolute;
	width: 414px;
	height: 700px;
	background-color: rgba(25,10,6,1);
	overflow: hidden;
	--web-view-name: Menu;
	--web-view-id: Menu;
	--web-scale-on-resize: true;
	--web-enable-deep-linking: true;
}
#IDLI_2_nos {
	left: 32px;
	top: 383px;
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
	color: rgba(255,255,255,1);
}
#vada_2_nos {
	left: 38px;
	top: 447px;
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
	color: rgba(255,255,255,1);
}
#RAVA_IDLI {
	left: 26px;
	top: 505px;
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
	color: rgba(255,255,255,1);
}
#masala_dosa {
	left: 43px;
	top: 567px;
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
	color: rgba(255,255,255,1);
}
#Group_21 {
	position: relative;
	top: 220px;
	color: white;
	font-family: Alcester;
}
#quantity
{
	color: white;
	font-family: Alcester;
}
#item
{
	position: absolute;
	top: 35.2%;
	left: 15%;
	color: white;
	font-family: Alcester;
}
#price
{
	position: absolute;
	top: 35.2%;
	left: 26.5%;
	color: white;
	font-family: Alcester;
}
#quantity_1
{
	position: absolute;
	left: 50px;
}
#name_1
{
	position: absolute;
	left: 150px;
}
#price_1
{
	position: relative;
	left: 330px;
}

</style>