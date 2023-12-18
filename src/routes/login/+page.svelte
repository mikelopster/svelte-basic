<script>
  export let form
</script>

<div>
  {#if form?.error}
    <p class="error">{form.error}</p>
  {/if}

  <form
    method="post"
    action="?/login">
    <div>
      Email <input name="email">
    </div>
    <div>
      Password <input type="password" name="password">
    </div>
    <button>Login</button>
  </form>
</div>