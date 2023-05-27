<script>
    import { page } from "$app/stores";
    $: routeId = $page.route.id;
    // $: {
    //     console.log(routeId)
    // }
</script>

<nav>
    <ul>
        <li><a class="active" href="/login" class:active={routeId === '/' || routeId === '/login'}>Home</a></li>
        <li><a href="/student/list" class:active={routeId === '/student/list' || routeId === '/student/[id]'}>Students</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
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

    li a:hover:not(.active) {
        background-color: #111;
    }

    .active {
        background-color: #04aa6d;
    }
</style>
