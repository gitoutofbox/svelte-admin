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

  const url = "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/models/gltf/MaterialsVariantsShoe/glTF/MaterialsVariantsShoe.gltf";
  const url2 = "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/MaterialsVariantsShoe/glTF/MaterialsVariantsShoe.gltf";
  const url3 = "https://threejs.org/manual/examples/resources/models/animals/Sheep.gltf";
  const url4 = "gltf/Sheep.gltf";
  const url5 = "https://github.com/KhronosGroup/glTF-Sample-Models/blob/master/2.0/ABeautifulGame/glTF/ABeautifulGame.gltf";
  // let model: any = null;

  // function loadGLTF() {
  //   const loader = new GLTFLoader();
  //   return loader.loadAsync(url2);
  // }

  // onMount(() => {
  //   loadGLTF().then((_model) => (model = _model));
  // });
</script>

<PerspectiveCamera position={{ x: -10, y: 5, z: 5 }} lookAt={{ x: 0, y: 0, z: 0 }}>
  <OrbitControls/>
</PerspectiveCamera>

<DirectionalLight shadow position={{ x: 5, y: 10, z: -1 }} />
<AmbientLight />

<Float speed={5} >
  <GLTF url={url3} scale={0} castShadow position={{ x: 1, y: 0 }} />
  
  
</Float>

<Mesh
  geometry={new BoxGeometry()}
  material={new MeshStandardMaterial({ color: "green" })}
  position={{x: 2,  y: -1 }}
  scale={{ x: 10, y: 0.5, z: 10 }}
  receiveShadow
/>

<Mesh
  geometry={new SphereGeometry()}
  material={new MeshStandardMaterial({ color: "orangered", side: BackSide })}
  scale={400}
/>
