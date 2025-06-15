"use client";
import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function BigBlackCube() {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    

    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(400, 400);


    // Add outline cube
    const geometry =  new THREE.ConeGeometry( 0.5, 1, 4 );
    const edges = new THREE.EdgesGeometry(geometry);
    const line = new THREE.LineSegments(
      edges,
      new THREE.LineBasicMaterial({ color: 0xF8FFE5, linewidth: 1 })
    );
    scene.add(line);

    // Floating and rotating animation
    let frameId;
    const animate = () => {
      line.rotation.x += 0.01;
      line.rotation.y += 0.01;
      line.position.y = Math.sin(Date.now() * 0.001) * 0.3;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    mountRef.current.appendChild(renderer.domElement);

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      renderer.dispose();
      if (mountRef.current) mountRef.current.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="  outline-gray-400 rounded-2xl flex items-center justify-center"
      style={{ width: 200, height: 200 }}
    />
  );
}