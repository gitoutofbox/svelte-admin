<script lang="ts">
    import { onDestroy, onMount } from 'svelte';
    import { Parallax, ParallaxLayer } from "svelte-parallax";
    import { containerClassStore } from "../../store/store";
    let parallax: any;
    let fancy = "Notebook".split("");

    
    let scrollY: number;
    let speed = 5;
    let windowOffsetHeight: number;
    onMount(() => {
        document.body.scrollIntoView();
        containerClassStore.set("full-width");
        windowOffsetHeight = document.body.offsetHeight;
  });
  $: {
    // console.log('scrollY', scrollY)
  }
  onDestroy(() => {
    containerClassStore.set('');
  });
    
</script>

<svelte:window bind:scrollY />

<div class="parallax-main">
    <div class="gate">
        <div
            class="gate-left"
            style:left={`${scrollY * speed * -1}px`}
        >
            <img src="/laptop/gate-left.jpg" alt="laptop" class="laptop-4" />
        </div>
        <div
            class="gate-right"
            style:right={`${scrollY * speed * -1}px`}
        >
            <img src="/laptop/gate-right.jpg" alt="laptop" class="laptop-4" />
        </div>
    </div>
    <Parallax sections={3} bind:this={parallax}>
        {#each fancy as char, index (index)}
            <ParallaxLayer
                rate={(index + 1) / (fancy.length - 1)}
                offset={1}
                style="
			    margin-left: {30 + index * 5}%; 
				display: flex; 
				justify-content: flex-start; 
				align-items: center; 
                color: #fff;
                "
            >
                <p class="fancy">{char}</p>
            </ParallaxLayer>
        {/each}

        <ParallaxLayer rate={1}>
            <div class="laptop-1-wrap"><img src="/laptop/1.jpg" alt="laptop1" class="laptop-1" /></div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} rate={2}>
            <img src="/laptop/4.jpg" alt="laptop4" class="laptop-4"/>
        </ParallaxLayer>
    </Parallax>
</div>

<style>
    :global(html, body) {
		overflow-x: hidden;
	}
    .parallax-main {
        padding: 0 50px;
        background: #000;
        overflow-x: hidden;
    }
    img {
        max-width: 100%;
    }
   
    .gate-left :after {
        content: "";
        position: absolute;
        display: flex;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: linear-gradient(
            to bottom,
            rgb(0, 0, 0) 30%,
            rgb(255, 255, 255) 100%
        );
        opacity: 0.5;
    }
    .gate-left,
    .gate-right {
        position: absolute;
        z-index: 1;
        width: 50%;
        height: 100vh;
        background: #c9d0d6;
    }
    .gate-left {
        left: 0;
        text-align: right;
    }
    .gate-right {
        text-align: left;
    }
    .laptop-1-wrap {
        text-align: center;
    }

    .laptop-1 {
        border-radius: 10px;
        max-width: 70%;
    }
    .fancy {
        font-size: 5rem;
    }
</style>
