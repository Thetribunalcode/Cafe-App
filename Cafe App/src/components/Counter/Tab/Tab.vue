<template>
    <div v-if="(cart.length>0)" id="Group_3">
		<svg class="Rectangle_1448_cz">
			<rect id="Rectangle_1448_cz" rx="10" ry="10" x="0" y="0" width="384" height="72">
			</rect>
		</svg>
		<div v-if="(cart.length>1)" id="ID1_item_in_cart">
			<span>{{cart.length}} items in cart</span>
		</div>
        <div v-else id="ID1_item_in_cart">
			<span>1 item in cart</span>
		</div>
		<div id="Button_CTA_c">
			<svg class="Rectangle_1090_c">
				<rect id="Rectangle_1090_c" rx="10" ry="10" x="0" y="0" width="146" height="50">
				</rect>
			</svg>
			<div id="view_cart" @click="handleSubmit">
				<span >view cart</span>
			</div>
		</div>
	</div>
</template>


<script>
import { addRecordsToDatabase } from '../../../../appwrite.config';

export default {
    props: ['cart'],
	methods: {
		async handleSubmit() {
			const order = {
				ItemNames: this.cart.map((item) => item.id),
				ItemQuantities: this.cart.map((item) => item.count),
				TransactionID: (Math.random() * 1000000).toFixed(0),
				Total: this.cart.reduce((total, item) => total + item.count * item.price, 0),
				CustomerName: 'Test',
				AmountPaid: false,
				processed: false
			}
			const res = await addRecordsToDatabase(order);
			console.log(res);
			this.$router.push({path: `/cart/${order.TransactionID}`});
		}
	}
}
</script>