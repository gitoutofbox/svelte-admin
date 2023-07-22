<script>
    import {
      PerspectiveCamera,
      DirectionalLight,
      AmbientLight,
      Mesh,
      useFrame,
      Object3DInstance,
      OrbitControls,
      Fog
    } from '@threlte/core';
    import {
      MeshStandardMaterial,
      IcosahedronGeometry,
      GridHelper,
      AxesHelper, 
    } from 'three';
    import { tweened } from 'svelte/motion';
  
    import { GLTF } from '@threlte/extras'

    const t = tweened(3, { duration: 2000 });
    let r = 0;
  
    // Use delta to ensure motion is consistent at any frame rate
    // Learn more: https://discoverthreejs.com/book/first-steps/animation-loop/#fixed-and-dynamic-frames
    useFrame((_, delta) => {
      r += 0.5 * delta;
    })
    const gltfUrl =
    "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/models/gltf/MaterialsVariantsShoe/glTF/MaterialsVariantsShoe.gltf";
  </script>
  
  <PerspectiveCamera
    position={{ y: 5, z: 10 }}
    lookAt={{ x:0, y: 0, z: 0 }}
  >
    <OrbitControls />
  </PerspectiveCamera>
  <Object3DInstance object={new GridHelper(100, 100)}/>
  <Object3DInstance object={new AxesHelper(5)}/>
  <DirectionalLight />
  <AmbientLight />
  <Fog color={'#dddddd'} />
  <Mesh 
    geometry={new IcosahedronGeometry()}
    material={new MeshStandardMaterial({color: 'seagreen'})}
    position={{ x: $t }}
    rotation={{ y: r, z: r }}
    interactive
    on:click={() => $t = $t > 0 ? -3 : 3}
  >
    <Object3DInstance object={new AxesHelper(5)}/>
  
  </Mesh>


<GLTF url="https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/models/gltf/MaterialsVariantsShoe/glTF/MaterialsVariantsShoe.gltf" />