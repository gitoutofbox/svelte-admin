<script lang="ts">
  import * as SC from "svelte-cubed";
  import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
  import { onMount } from "svelte";
  // import { modelURL } from "./stores";

  import {
    MeshStandardMaterial,
    BoxGeometry,
    SphereGeometry,
    BackSide,
  } from "three";
  import {
    PerspectiveCamera,
    DirectionalLight,
    AmbientLight,
    OrbitControls,
    Mesh,
  } from "@threlte/core";
  import { GLTF, Float } from "@threlte/extras";

  const url =
    "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/models/gltf/MaterialsVariantsShoe/glTF/MaterialsVariantsShoe.gltf";

  let model: any = null;

  function loadGLTF() {
    const loader = new GLTFLoader();
    return loader.loadAsync(url);
  }

  onMount(() => {
    loadGLTF().then((_model) => (model = _model));
  });
</script>

<!-- {#if model}
    <SC.Primitive object={model.scene} scale={[0.05, 0.05, 0.05]} />
  {/if} -->
  
<PerspectiveCamera position={{ y: 5, z: 10 }} lookAt={{ y: 0 }}>
  <OrbitControls />
</PerspectiveCamera>

<DirectionalLight shadow position={{ x: 1, y: 10, z: -1 }} />
<AmbientLight />

<Float rotationIntensity={5}>
  <GLTF {url} scale={20} castShadow/>

  
</Float>

<Mesh
  geometry={new BoxGeometry()}
  material={new MeshStandardMaterial({ color: "green" })}
  position={{ y: -2 }}
  scale={{ x: 10, y: 0.5, z: 10 }}
  receiveShadow
/>

<Mesh
  geometry={new SphereGeometry()}
  material={new MeshStandardMaterial({ color: "orangered", side: BackSide })}
  scale={400}
/>
