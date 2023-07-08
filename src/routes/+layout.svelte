<script>
    import Navbar from "$lib/Navbar.svelte";
    import Footer from "$lib/Footer.svelte";
    import { navigating } from "$app/stores";
    import { globalLoaderStore, containerClassStore } from "../store/store";
    import { onDestroy } from "svelte";
    import GlobalLoader from "$lib/Global-loader.svelte";
    import LoadingIndicator from "$lib/Loading-indicator.svelte";

    let showGlobalLoader = false;
    let containerClass = "";

    const globalLoader$ = globalLoaderStore.subscribe((value) => {
        showGlobalLoader = value;
    });
    const containerClass$ = containerClassStore.subscribe((value) => {
        containerClass = value;
    });
    onDestroy(() => {
        globalLoader$();
        containerClass$();
    });
</script>

<div class="app">
    <Navbar />
    <div class={containerClass ? containerClass : 'container'}>
        {#if $navigating} <LoadingIndicator /> {:else} <slot /> {/if}
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
        min-height: calc(100vh - 50px - 50px - 32px);
        margin-top: 15px;
        margin-bottom: 15px;
    }
</style>
