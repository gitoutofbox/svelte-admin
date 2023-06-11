<script>
    import Navbar from "$lib/Navbar.svelte";
    import Footer from "$lib/Footer.svelte";
    import { navigating } from "$app/stores";
    import { globalLoaderStore } from "../store/store";
    import { onDestroy } from "svelte";
    import GlobalLoader from "$lib/Global-loader.svelte";
    let showGlobalLoader = false;

    const unsubscribe = globalLoaderStore.subscribe((value) => {
        showGlobalLoader = value;
    });
    onDestroy(unsubscribe);
</script>

<div class="app">
    <Navbar />
    <div class="container">
        {#if $navigating} Loading... {:else} <slot /> {/if}
    </div>
    <Footer />
    <GlobalLoader showLoader={showGlobalLoader} />
</div>

<style>
    .app {
        /* min-height: 100vh; */
        display: flex;
        flex-direction: column;
    }
    .container {
        min-height: calc(100vh - 50px - 50px - 16px);
        margin-top: 15px;
        margin-bottom: 15px;
    }
</style>
