<script>
  export let data
</script>

<div class="container grid">
  {#each data.posts as post}
    <div>
      <img src={post.imageUrl} width="100px" alt={post.name}>
      <div>{post.name}</div>
      <a href={`/blog/${post.id}`}>Go to Read</a>
    </div>
  {/each}
</div>

<style>
.container {
  max-width: 840px;
  margin: 0 auto;
}
.grid {
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 10px;
  padding: 10px;
}
</style>