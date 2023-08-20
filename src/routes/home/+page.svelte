<script lang="ts">
    import Seo from '$lib/Seo.svelte';

    export let data;
    const {latestPost} = data;
</script>

<Seo
	title="Home Page | Learn Svelte"
	description="SSR learning website"
	type="Website"
	name="Svelte website"
/>
<h2>Latest post</h2>
<h3>{latestPost.title}</h3>
<p>{latestPost.body}</p>
