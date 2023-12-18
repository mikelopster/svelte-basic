<script>
  export let data
  export let form
  import { enhance } from '$app/forms'

  let loading = false
</script>

<div>
  Welcome Edit page
  <div>
    Title: {data.post.name}
  </div>

  {#if form?.error}
		<p class="error">{form.error}</p>
	{/if}

  {#if loading}
		<p>Loading</p>
	{/if}

  <a href={`/blog/${data.post.id}`}>Back to read</a>
  <form
    method="POST"
    action="?/update"
    use:enhance={() => {
			loading = true

			return async ({ update }) => {
				await update()
				loading = false
			}
		}}>
		<div>
			<input
				name="post-name"
        bind:value={data.post.name}
        required
			/>
    </div>
    <button>Update post</button>
	</form>
</div>