import { useLoader } from "@react-three/fiber";
import THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const TypeScriptLogo = () => {
    // location of the 3D model
    const gltf = useLoader(GLTFLoader, "/typescript3d.glb");
    
    return (
      <>
        {/* Use scale to control the size of the 3D model */}
        <primitive object={gltf.scene} scale={1} rotation={[0, -.75, 0]}/>
      </>
    );
  };

export { TypeScriptLogo }

