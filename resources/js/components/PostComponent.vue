<template>
  <div class="card">
    <li>
        {{post.id}}
    </li>
    <li>
        {{post.post_title}}
    </li>
    <li>
        {{post.post_content}}
    </li>
  </div>
</template>

<script>
export default {
    props:['post']
}
</script>

<style>

</style>
