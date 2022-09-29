<template>
    <section>
      <PostComponent
        :post = 'post'
        :link='false'
        />
    </section>
</template>

<script>
import PostComponent from '../components/PostComponent';
import axios from 'axios'
export default {
    data: function() {
        return{
            post:{},
            }
    },
    components:{
        PostComponent
    },
    methods:{
        ApiCall(){
            axios.get('/api/posts/'+this.$route.params.id)
            .then((response)=> {
                console.log(response);
                this.post = response.data.results.data;
                console.warn(this.post)
            })
            .catch((error)=>{
                console.error(error)
            })

        }
    },
    mounted(){
        this.ApiCall();
    }
}
</script>

<style>

</style>
