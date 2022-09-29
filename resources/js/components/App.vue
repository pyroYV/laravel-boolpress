<template>
    <section class="container-lg">
        <h1>Lista Vue</h1>
       <!--  <ul>
            <li  v-for="post in posts" :key="post.id">
                {{post.post_title}} with ID = {{post.id}}
            </li>


        </ul> -->
        <label for="queryFilter"><h2>Filter for:</h2></label>
        <input type="search" name="queryFilter" id="queryFilter" v-model="query" @keyup.enter="getPostsFiltered()">
        <div>
            <button class="btn btn-danger" @click="prevPage()" :disabled='this.prevPageUrl==null' >Prev</button>
            <button class="btn btn-success" @click="nextPage()":disabled='this.nextPageUrl==null'>Next</button>
        </div>
        <PostComponent
        v-for="post in posts" :key="post.id"
        class="my-3 p-3"
        :post= 'post'
        />
    </section>
</template>

<script>
import axios from 'axios';
import PostComponent from './PostComponent.vue'

export default {
    data:function(){
        return{
            posts:[],
            query:'',
            nextPageUrl:'',
            prevPageUrl:'',
        }
    },
    components:{
        PostComponent
    },
    methods: {
        /* getPosts(){
            axios.get('/api/posts')
            .then((result) => {
                console.log(result.data.results.data)
                this.posts = result.data.results.data
            }).catch((err) => {
                console.error(err)
            });
        }, */
        getPostsFiltered(){
            axios.get('/api/posts?post_title=' + this.query)
            .then((result) => {
                console.log(result.data.results)
                this.posts = result.data.results.data
                this.nextPageUrl = result.data.results.next_page_url;
                this.prevPageUrl = result.data.results.prev_page_url
            }).catch((err) => {
                console.error(err)
            });
        },
        nextPage(){
            axios.get(this.nextPageUrl)
            .then((result) => {
                console.log(result.data.results)
                this.posts = result.data.results.data
                this.nextPageUrl = result.data.results.next_page_url;
                this.prevPageUrl = result.data.results.prev_page_url
            }).catch((err) => {
                console.error(err)
            });
        },
        prevPage(){
            axios.get(this.prevPageUrl)
            .then((result) => {
                console.log(result.data.results)
                this.posts = result.data.results.data
                this.nextPageUrl = result.data.results.next_page_url;
                this.prevPageUrl = result.data.results.prev_page_url
            }).catch((err) => {
                console.error(err)
            });
        },


    },
    created() {
        this.getPostsFiltered();
    },
}
</script>

<style>

</style>
