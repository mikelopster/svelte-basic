<script>
  export let data
</script>

<div>
  Title: {data.post.name}
  <a href={`/blog/${data.post.id}/edit`}>
    Go to edit page
  </a>
</div>