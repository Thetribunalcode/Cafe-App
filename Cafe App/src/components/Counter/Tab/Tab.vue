<template>
    <div v-if="(number>0)" id="Group_3">
		<svg class="Rectangle_1448_cz">
			<rect id="Rectangle_1448_cz" rx="10" ry="10" x="0" y="0" width="384" height="72">
			</rect>
		</svg>
		<div v-if="(number>1)" id="ID1_item_in_cart">
			<span>{{number}} items in cart</span>
		</div>
        <div v-else id="ID1_item_in_cart">
			<span>1 item in cart</span>
		</div>
		<router-link to="/cart">		<div id="Button_CTA_c">
			<svg class="Rectangle_1090_c">
				<rect id="Rectangle_1090_c" rx="10" ry="10" x="0" y="0" width="146" height="50">
				</rect>
			</svg>
			<div id="view_cart">
				<span >view cart</span>
			</div>
		</div></router-link>

	</div>
</template>


<script>
export default {
    props: ['number']
}
</script>