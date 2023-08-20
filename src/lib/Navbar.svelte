<script>
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    $: routeId = $page.route.id;

    $: {
        // console.log('isLoggedIn', $page.data.auth)
    }
    const signOut = () => {
        goto('/login?signout=1');
    }
    const signIn = () => {
        goto('/login');
    }
</script>

<nav class="sticky-top">
    <ul>
        <li><a class="active" href="/home" class:active={routeId === '/home'}>Home</a></li>
        <li><a href="/student/list" class:active={routeId === '/student/list' || routeId === '/student/[id]'}>Students</a></li>
        <li><a href="/contact" class:active={routeId === '/contact'}>Contact</a></li>
        <li><a href="/about" class:active={routeId === '/about'}>About</a></li>
        <li><a class="active" href="/" class:active={routeId === '/'}>3D Test</a></li>
        <li><a href="/parallax" class:active={routeId === '/parallax'}>Prallax</a></li>
        <li class="btn-wrap">
            {#if $page?.data?.auth?.isLoggedIn}
            <button class="btn btn-link" on:click={signOut}>Logout</button>
            {:else}
            <button class="btn btn-link" class:btn-success={routeId === '/login'} on:click={signIn}>Login</button>
            {/if}
        </li>
    </ul>
</nav>

<style>
    nav {
        height: 50px;
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
    }

    li {
        float: left;
    }

    li a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }

    li a:hover:not(.active), li.btn-wrap button:hover {
        background-color: #111;
    }

    li.btn-wrap {
        float: right;  
    }
    li.btn-wrap button {
        color: #fff; 
        text-decoration: none;
        padding: 14px 16px;
        margin: 0;
    }

    .active {
        background-color: #04aa6d;
    }
</style>
