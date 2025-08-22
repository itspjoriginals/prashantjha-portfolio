"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import type * as THREE from "three"

function AnimatedPoints() {
  const ref = useRef<THREE.Points>(null!)

  // Generate random points
  const points = new Float32Array(2000 * 3)
  for (let i = 0; i < 2000; i++) {
    points[i * 3] = (Math.random() - 0.5) * 10
    points[i * 3 + 1] = (Math.random() - 0.5) * 10
    points[i * 3 + 2] = (Math.random() - 0.5) * 10
  }

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.1
    }
  })

  return (
    <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#3B82F6" size={0.02} sizeAttenuation={true} depthWrite={false} opacity={0.6} />
    </Points>
  )
}

export function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <AnimatedPoints />
      </Canvas>
    </div>
  )
}
