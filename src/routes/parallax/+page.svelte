<script lang="ts">
    import { onDestroy, onMount } from 'svelte';
    import { Parallax, ParallaxLayer } from "svelte-parallax";
    import { containerClassStore } from "../../store/store";
    let parallax: any;
    let fancy = "Notebook".split("");

    
    let scrollY: number;
    let speed = 5;
    onMount(() => {
        document.body.scrollIntoView();
        containerClassStore.set("full-width");
  });
  onDestroy(() => {
    containerClassStore.set('');
  });
    
</script>

<svelte:window bind:scrollY />

<div class="parallax-main">
    <div class="gate">
        <div
            class="gate-left"
            style:transform={`translate3d(${scrollY * speed * -1}px, 0, 0)`}
        >
            <img src="/laptop/gate-left.jpg" alt="laptop" class="laptop-4" />
        </div>
        <div
            class="gate-right"
            style:transform={`translate3d(${scrollY * speed}px, 0, 0)`}
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

        <!-- <ParallaxLayer offset={1} rate={2.5} style="display: flex; justify-content: flex-start;">
		<div style="background-color: #000; opacity: 1; width: 50%; height: 100%;">
            <img src="/laptop/2.jpg" alt="laptop2" class="laptop-2" />
        </div>
	</ParallaxLayer>
	
	<ParallaxLayer offset={1} rate={-2.5} style="display: flex; justify-content: flex-end;">
		<div style="background-color: black; opacity: 1; width: 50%; height: 100%;">
            <img src="/laptop/3.jpg" alt="laptop3" class="laptop-3" />
        </div>
	</ParallaxLayer> -->
        <!--     
    <ParallaxLayer offset={1} rate={2} >
        <img src="/laptop/2.jpg" alt="laptop2" class="laptop-2" />
    </ParallaxLayer>

    <ParallaxLayer offset={1} rate={2.5}>
        
    </ParallaxLayer> -->

        <!-- <ParallaxLayer rate={1}>
            <img src="/laptop/2.jpg" alt="laptop1" class="laptop-2" />
        </ParallaxLayer> -->

        <ParallaxLayer rate={1}>
            <div class="laptop-1-wrap"><img src="/laptop/1.jpg" alt="laptop1" class="laptop-1" /></div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} rate={2}>
            <img src="/laptop/4.jpg" alt="laptop4" class="laptop-4" />
        </ParallaxLayer>
    </Parallax>
</div>

<style>
    .parallax-main {
        padding: 0 50px;
        background: #000;
        overflow-x: hidden;
    }
    img {
        max-width: 100%;
    }
    .gate {
        overflow: hidden;
    }
    .gate img:after {
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
    }
    .gate-left {
        left: 0;
    }
    .gate-right {
        left: 50%;
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
