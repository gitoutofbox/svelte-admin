<script lang="ts">
	import Seo from "$lib/Seo.svelte";

	import { Canvas } from "@threlte/core";
	import SceneOne from "$lib/Scene-one.svelte";
	import SceneTwo from "$lib/Scene-two.svelte";
	const shoe: {url: string, scale: number} = {url: "gltf/shoe/shoe.gltf", scale: 20};
</script>

<h1>Welcome to SvelteKit</h1>
<p>
	Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<Seo
	title="Home | Learn Svelte"
	description="A learning website"
	type="Website"
	name="Svelte website"
/>

<section>
	<h2>Scene One</h2>

	<div class="canvas-wrapper">
		<Canvas>
			<SceneOne />
		</Canvas>
	</div>
</section>
<section>
	<h2>Scene Two</h2>

	<div class="canvas-wrapper">
		<Canvas>
			<SceneTwo model={shoe}/>
		</Canvas>
	</div>
</section>
<br />
<br />

<style>
	.canvas-wrapper {
		position: relative;
		/* border: 1px solid black; */
		height: 300px;
	}
</style>
