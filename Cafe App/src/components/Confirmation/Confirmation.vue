<template>
<TheHeader><span class="heading">Status</span></TheHeader>
<div v-if="success" id="Group_2">
    Your order has been confirmed. 
    <br>
    Transaction ID : {{ ID }}
</div>
<div v-else id="Group_2">
    Something went wrong. 
    <br>
    Refund will be initiated.
</div>
</template>

<style scoped>
#Group_2{
    margin: 3%;
    margin-top: 5%;
    color: white;
    font-family: Alcester;
    font-size: 2rem;
}
</style>

<script>
import TheHeader from '../Header/TheHeader.vue';
import { fetchRecordByID } from '../../../appwrite.config';

export default {
    components: {
        TheHeader,
    },
    data () {
			return {
				ID: 12312,
                success: false,
            }
        },
    async mounted() {
			this.ID = (this.$route.params.id);
            const res = await fetchRecordByID(this.ID);
            this.success = res.AmountPaid;
		}
}
</script>