<template>
    <div class="flex flex-row space-x-4 gap-2 main">
        <h1 class="mb-2 text-4xl font-bold tracking-tight text-black dark:text-black">Kitchen</h1>
        <h2 v-if="orders.length===0" class="mb-2 text-2xl font-bold tracking-tight text-black dark:text-black">All done!</h2>
    <div v-for="order in orders" :key="order.$id" class="text-center max-w-lg w-full p-6 bg-black border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
     
            <h5 class="mb-2 text-center text-2xl font-bold tracking-tight text-white dark:text-white">Order {{order.TransactionID}} </h5>

        <ul>
            <li class="mb-2 text-md font-bold tracking-tight text-white dark:text-white" v-for="(item, index) in order.ItemNames" :key="item">{{item}} {{order.ItemQuantities[index]}}</li>
        </ul>
        
        <button @click="handleClick(order.TransactionID)" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-30">
            Confirm
        </button>
    </div>  

</div>
</template>


<style scoped>

.main {
    min-height: 100vh;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

</style>

<script>

import { listRecordsInDatabase, updateOrderByID } from '../../../appwrite.config';

export default{
    data()
    {
        return {
            orders: [],
        }
    },


    async mounted() {
			this.stateGetter()
		},
		methods: {
            async handleClick(ID)
            {
                try{
                    const res = await updateOrderByID(ID)
                    console.log(res)
                    this.stateGetter();
                }
                catch(err)
                {
                    console.log(err)
                }
            },
            async stateGetter() {
                let res = await listRecordsInDatabase();
                console.log(res)
                this.orders = (res.documents)
            }
		}


}
</script>