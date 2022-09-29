<template>
<div>
  <router-link :to=" link ? `/posts/${post.id}` : '' " >
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
  </router-link>
  </div>
</template>

<script>
export default {
    props:{'post':Object,
    'link': Boolean}
}
</script>

<style>

</style>
