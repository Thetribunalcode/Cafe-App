<template>
    <div v-if="(items.find( (item) => item.id === item_id).ischanged) " id="Button_CTA_bw">
        <svg class="Rectangle_1090_bx">
			<rect id="Rectangle_1090_bx" rx="10" ry="10" x="0" y="0" width="87" height="30">
			</rect>
		</svg>
        <svg @click="subtractButton(item_id)" class="ic_remove_24px_by" viewBox="5 11 14 2">
            <div></div>
            <path id="ic_remove_24px_by" d="M 19 13 L 5 13 L 5 11 L 19 11 L 19 13 Z">
            </path>
        </svg>
        <svg @click="addButton(item_id)" class="ic_add_24px_bz" viewBox="5 5 14 14">
            <path id="ic_add_24px_bz" d="M 19 13 L 13 13 L 13 19 L 11 19 L 11 13 L 5 13 L 5 11 L 11 11 L 11 5 L 13 5 L 13 11 L 19 11 L 19 13 Z">
            </path>
        </svg>
        <div id="quantity_b">
            <span>{{items.find( (item) => item.id === item_id).count}}</span>
        </div>
    </div>
    <div v-else  @click="submitHandler(item_id)" id="Button_CTA_bw">
		<svg class="Rectangle_1090_bx">
			<rect id="Rectangle_1090_bx" rx="10" ry="10" x="0" y="0" width="87" height="30">
			</rect>
		</svg>
        <div  id="quantity_ca">ADD</div>
	</div>
</template>

<script>
export default {
    props: ['item_id','items'],
    inject: ['cartItems'],
    methods: 
    {
        submitHandler(id)
        {
            this.cartItems.push( this.items.find( (item) => item.id === id))
            this.items.find( (item) => item.id === id).count++
            this.updateButton(id)
        },
        updateButton(id)
        {
            this.items.find( (item) => item.id === id).ischanged = true
            console.log(this.items.find( (item) => item.id === id).count)
        },
        subtractButton(id)
        {  
           const obj = this.items.find( (item) => item.id === id)
           obj.count--
           if (obj.count<1)
           {
            obj.ischanged = false
           } 
        },
        addButton(id)
        {
            const obj = this.items.find( (item) => item.id === id)
           obj.count++
        },
    }
}
</script>