'use client'

import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment, Html } from '@react-three/drei'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Loader2, ShoppingCart } from 'lucide-react'

// Mocked car data - in a real app, this would come from an API
const carNFTs = [
  { id: 1, name: 'Speedster', price: 100, model: '/assets/3d/duck.glb' },
  { id: 2, name: 'Luxury Cruiser', price: 150, model: '/assets/3d/duck.glb' },
  { id: 3, name: 'Off-Road Beast', price: 200, model: '/assets/3d/duck.glb' },
  { id: 4, name: 'Electric Wonder', price: 180, model: '/assets/3d/duck.glb' },
]

function CarModel({ url }) {
  const [loading, setLoading] = React.useState(true)
  
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000) // Simulate loading
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Html center><Loader2 className="h-8 w-8 animate-spin" /></Html>
  }

  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  )
}

export default function NFTMarketplace() {
  const [selectedCar, setSelectedCar] = useState(carNFTs[0])

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* 3D Viewer */}
      <div className="w-full md:w-2/3 h-1/2 md:h-full">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <Suspense fallback={null}>
            <CarModel url={selectedCar.model} />
            <Environment preset="sunset" background />
          </Suspense>
          <OrbitControls enablePan={false} />
        </Canvas>
      </div>

      {/* Marketplace Interface */}
      <div className="w-full md:w-1/3 p-6 bg-gray-800">
        <h2 className="text-3xl font-bold mb-6">NFT Marketplace</h2>
        <ScrollArea className="h-[calc(100vh-12rem)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
            {carNFTs.map((car) => (
              <Card key={car.id} className={`bg-gray-700 border-2 ${selectedCar.id === car.id ? 'border-primary' : 'border-gray-600'}`}>
                <CardHeader>
                  <CardTitle>{car.name}</CardTitle>
                  <CardDescription>{car.price} KASIS</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="secondary" 
                    className="w-full"
                    onClick={() => setSelectedCar(car)}
                  >
                    View
                  </Button>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <ShoppingCart className="mr-2 h-4 w-4" /> Buy NFT
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}