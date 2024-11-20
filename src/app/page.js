'use client'
import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
export default function Component() {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <div className=" min-h-screen overflow-hidden bg-black text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-fit opacity-100"
      >
        <source src="/ParkingLot.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 bg-black bg-opacity-50 p-4">
  <nav className="container mx-auto flex justify-between items-center">
    <img src='/logo.jpg' alt="Rave Race Logo" className="h-10" />
    <div className="space-x-4">
      <Link href="/" passHref>
        <Button variant="ghost">Home</Button>
      </Link>
      <Link href="/features" passHref>
        <Button variant="ghost">Features</Button>
      </Link>
      <Link href="/how-to-play" passHref>
        <Button variant="ghost">How to Play</Button>
      </Link>
      <Link href="/marketplace" passHref>
        <Button variant="ghost">Marketplace</Button>
      </Link>
    </div>
  </nav>
</header>

        {/* Hero Section */}
        <section style={fadeIn} className="min-h-screen flex items-center justify-center text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-6xl font-bold mb-6">Rave Race</h1>
            <p className="text-2xl mb-8">A Web3 Racing Game Mini-App on Telegram</p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Start Racing Now
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-black bg-opacity-75">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Career Mode', description: 'Progress through levels, unlock cars, and tackle challenges in solo play.' },
                { title: 'Online Multiplayer', description: 'Race players worldwide and earn TON-backed rewards.' },
                { title: 'NFT Marketplace', description: 'Buy, sell, and trade driver profiles and car parts.' },
                { title: 'Play-to-Earn', description: 'Earn TON tokens in multiplayer races and expand your garage.' },
              ].map((feature, index) => (
                <Card key={index} className="bg-orange-800 border-none text-black">
                  <CardHeader>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How to Play Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">How to Play</h2>
            <ol className="list-decimal list-inside space-y-4 text-lg max-w-2xl mx-auto">
              <li>Access the game on Telegram</li>
              <li>Connect your TON wallet</li>
              <li>Choose Career or Multiplayer mode</li>
              <li>Exchange TON tokens for kasis to participate</li>
              <li>Race and earn rewards!</li>
            </ol>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black bg-opacity-75 py-8">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <p>&copy; 2023 Rave Race. All rights reserved.</p>
            <div className="space-x-4">
              <Button variant="link">Privacy Policy</Button>
              <Button variant="link">Terms of Service</Button>
              <Button variant="link">Contact Us</Button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
