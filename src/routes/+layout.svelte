<script>
    import Navbar from "$lib/Navbar.svelte";
    import Footer from "$lib/Footer.svelte";
</script>

<div class="app">
    <Navbar />
    <div class="container">
        <slot />
    </div>
    <Footer />
</div>

<style>
    .app {
        /* min-height: 100vh; */
        display: flex;
        flex-direction: column;
    }
    .container {
        min-height: calc(100vh - 50px - 50px - 16px);
    }
</style>
