<script>
    const year = new Date().getFullYear();
</script>

<footer>
    <div class="footer__container">Copyright © Your Website {year}</div>
</footer>

<style>
    footer {
        height: 50px;
        background-color: #343a40;
        color: white;
        position: relative;
    }
    .footer__container {
        width: 100%;
        text-align: center;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
</style>
