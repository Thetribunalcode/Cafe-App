<template>
<TheHeader><span>MENU</span></TheHeader>
<Grid></Grid>
<Counter></Counter>
</template>

<script>
import TheHeader from '../Header/TheHeader.vue';
import Grid from '../Grid/Grid.vue';
import Counter from '../Counter/Counter.vue';

export default {
    components: {
        TheHeader,
        Grid,
        Counter
    },
    data()
    {
        return {
            type: ""
        }
    },
    provide(){
        return{        type: this.type}

    },
    async mounted() {
			this.type = (this.$route.params.type)
    }
    
}
</script>