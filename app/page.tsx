'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function YagoCrypto() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 w-full z-50 bg-transparent backdrop-blur-sm border-b border-gray-800 relative">
        
        {/* Content */}
        <div className="container mx-auto px-4 py-4 flex items-center justify-between relative z-10">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/goat-full.png"
              alt="YAGO"
              width={50}
              height={50}
              className="mr-4"
            />
            <span className="text-2xl font-bold text-yellow-400 hidden sm:block drop-shadow-lg">YAGO</span>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="menu-button lg:hidden text-gray-900 drop-shadow-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-900 hover:text-yellow-600 transition-colors drop-shadow-lg font-medium">home</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-900 hover:text-yellow-600 transition-colors drop-shadow-lg font-medium">about</button>
            <button onClick={() => scrollToSection('story')} className="text-gray-900 hover:text-yellow-600 transition-colors drop-shadow-lg font-medium">story</button>
            <button onClick={() => scrollToSection('how')} className="text-gray-900 hover:text-yellow-600 transition-colors drop-shadow-lg font-medium">how to buy</button>
            <button onClick={() => scrollToSection('community')} className="text-gray-900 hover:text-yellow-600 transition-colors drop-shadow-lg font-medium">tokenomics</button>
          </nav>

          <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-500 shadow-lg">
            <Link href="#" target="_blank">buy now</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-800">
            <nav className="flex flex-col p-4 space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-gray-900 hover:text-yellow-600 transition-colors font-medium">home</button>
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-900 hover:text-yellow-600 transition-colors font-medium">about</button>
              <button onClick={() => scrollToSection('story')} className="text-left text-gray-900 hover:text-yellow-600 transition-colors font-medium">story</button>
              <button onClick={() => scrollToSection('how')} className="text-left text-gray-900 hover:text-yellow-600 transition-colors font-medium">how to buy</button>
              <button onClick={() => scrollToSection('community')} className="text-left text-gray-900 hover:text-yellow-600 transition-colors font-medium">tokenomics</button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/landscape-bg.png"
            alt="Landscape Background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        
        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-white/20"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-8xl md:text-9xl font-bold mb-8 tracking-wider drop-shadow-2xl">YAGO</h1>
          <div className="mb-8">
            <Image
              src="/images/goat-full.png"
              alt="YAGO Goat"
              width={400}
              height={400}
              className="mx-auto drop-shadow-2xl"
            />
          </div>
          <div className="flex justify-center space-x-6">
            <Link href="#" target="_blank" className="hover:text-yellow-600 transition-colors drop-shadow-lg">
              <ExternalLink size={32} />
            </Link>
            <Link href="#" target="_blank" className="hover:text-yellow-600 transition-colors drop-shadow-lg">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                <path d="M28.6108 3.27352C28.4559 3.13973 28.2674 3.05075 28.0656 3.01617C27.8638 2.98159 27.6565 3.00271 27.4658 3.07727L2.1333 12.991C1.77429 13.1306 1.47033 13.3831 1.26721 13.7104C1.06409 14.0377 0.972783 14.4221 1.00705 14.8058C1.04131 15.1895 1.19929 15.5516 1.4572 15.8378C1.7151 16.1239 2.05898 16.3185 2.43705 16.3923L9.0008 17.681V24.9998C8.99951 25.3984 9.11798 25.7883 9.34086 26.1188C9.56373 26.4493 9.88074 26.7053 10.2508 26.8535C10.6203 27.0044 11.0266 27.0406 11.417 26.9575C11.8073 26.8743 12.1636 26.6756 12.4396 26.3873L15.6046 23.1048L20.6258 27.4998C20.9881 27.8211 21.4553 27.9989 21.9396 27.9998C22.1518 27.9996 22.3626 27.9663 22.5646 27.901C22.8945 27.7963 23.1912 27.607 23.4252 27.352C23.6593 27.0969 23.8224 26.785 23.8983 26.4473L28.9721 4.37477C29.0174 4.17571 29.0078 3.96805 28.9442 3.77405C28.8805 3.58005 28.7653 3.40702 28.6108 3.27352ZM21.9421 25.9998L11.6071 16.9373L26.4821 6.27602L21.9421 25.9998Z"/>
              </svg>
            </Link>
            <Link href="#" target="_blank" className="hover:text-yellow-600 transition-colors drop-shadow-lg">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                <path d="M26.8755 27.4813C26.7894 27.6381 26.6628 27.769 26.5089 27.8602C26.355 27.9514 26.1794 27.9997 26.0005 28H20.0005C19.8322 27.9999 19.6666 27.9574 19.5191 27.8764C19.3716 27.7953 19.247 27.6783 19.1567 27.5362L14.0955 19.5825L6.74049 27.6725C6.56119 27.8651 6.3132 27.9793 6.05029 27.9903C5.78738 28.0012 5.53074 27.9082 5.336 27.7312C5.14126 27.5542 5.02413 27.3076 5.00999 27.0448C4.99586 26.7821 5.08586 26.5243 5.26049 26.3275L12.9817 17.8275L5.15674 5.5375C5.06036 5.3863 5.00641 5.21198 5.00054 5.03278C4.99466 4.85357 5.03707 4.67609 5.12333 4.5189C5.20959 4.36172 5.33653 4.23062 5.49085 4.13932C5.64516 4.04803 5.82119 3.99991 6.00049 4H12.0005C12.1688 4.00005 12.3344 4.04258 12.4818 4.12365C12.6293 4.20471 12.754 4.32169 12.8442 4.46375L17.9055 12.4175L25.2605 4.3275C25.4398 4.1349 25.6878 4.02073 25.9507 4.00974C26.2136 3.99876 26.4702 4.09185 26.665 4.26882C26.8597 4.44579 26.9768 4.69239 26.991 4.95515C27.0051 5.21791 26.9151 5.47566 26.7405 5.6725L19.0192 14.1663L26.8442 26.4638C26.9401 26.615 26.9935 26.7892 26.999 26.9682C27.0045 27.1472 26.9619 27.3244 26.8755 27.4813Z"/>
              </svg>
            </Link>
            <Link href="#" target="_blank" className="hover:text-yellow-600 transition-colors drop-shadow-lg">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                <path d="M29 10V15C29 15.2652 28.8946 15.5196 28.7071 15.7071C28.5196 15.8946 28.2652 16 28 16C25.911 16.0049 23.8521 15.5026 22 14.5363V19.5C22 22.0196 20.9991 24.4359 19.2175 26.2175C17.4359 27.9991 15.0196 29 12.5 29C9.98044 29 7.56408 27.9991 5.78249 26.2175C4.00089 24.4359 3 22.0196 3 19.5C3 14.8875 6.36375 10.81 10.825 10.015C10.9689 9.98942 11.1167 9.9957 11.2579 10.0334C11.3992 10.0711 11.5304 10.1393 11.6424 10.2332C11.7544 10.3271 11.8445 10.4445 11.9063 10.5769C11.9681 10.7094 12.0001 10.8538 12 11V16.3363C12.0001 16.5255 11.9464 16.7109 11.8453 16.8709C11.7442 17.0309 11.5997 17.1589 11.4288 17.24C11.0245 17.4317 10.6792 17.7283 10.4287 18.099C10.1782 18.4696 10.0317 18.9007 10.0046 19.3472C9.97747 19.7938 10.0707 20.2394 10.2744 20.6376C10.4782 21.0359 10.7851 21.3722 11.1631 21.6114C11.5411 21.8506 11.9764 21.984 12.4236 21.9977C12.8707 22.0114 13.3133 21.9048 13.7053 21.6891C14.0972 21.4735 14.4241 21.1566 14.6518 20.7715C14.8796 20.3865 14.9998 19.9474 15 19.5V3C15 2.73478 15.1054 2.48043 15.2929 2.29289C15.4804 2.10536 15.7348 2 16 2H21C21.2652 2 21.5196 2.10536 21.7071 2.29289C21.8946 2.48043 22 2.73478 22 3C22.0017 4.59079 22.6343 6.11595 23.7592 7.24081C24.884 8.36567 26.4092 8.99835 28 9C28.2652 9 28.5196 9.10536 28.7071 9.29289C28.8946 9.48043 29 9.73478 29 10Z"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-yellow-400 text-black py-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-xl font-bold mx-8">UNSTOPPABLE FOREVER. UNBOTHERED TOGETHER</span>
          <span className="text-xl font-bold mx-8">•</span>
          <span className="text-xl font-bold mx-8">UNSTOPPABLE FOREVER. UNBOTHERED TOGETHER</span>
          <span className="text-xl font-bold mx-8">•</span>
          <span className="text-xl font-bold mx-8">UNSTOPPABLE FOREVER. UNBOTHERED TOGETHER</span>
          <span className="text-xl font-bold mx-8">•</span>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/yagi-car-landscape.png"
            alt="Yago Car Landscape"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-8 text-white drop-shadow-2xl">About $YAGO</h2>
            <p className="text-lg leading-relaxed mb-8 text-white drop-shadow-lg bg-black/30 backdrop-blur-sm rounded-lg p-6">
              It happened during a late-night degen scroll—charts glitching, Discord echoing nonsense—
              when the candles started blinking in Morse code. That's when Yago saw it. The market
              wasn't real. It was a loop. A simulation of hype, hopium, and herdthink. He didn't panic. He
              unplugged—unbothered and wide awake.—Yago is more than a meme. Cast out for thinking
              differently and freely, he left the herd behind—alone, but finally awake. Now, Yago leads a
              new movement: a chill, chaos-proof collective of thinkers, builders, and memers
              unbothered by noise and fueled by purpose. On Base Network, we graze freely, live on our own
              terms, and shape a culture where the next generation of YAGOs rise. Not just to follow—but
              to become your own YAGO
            </p>
            <Button 
              onClick={() => scrollToSection('how')}
              className="bg-yellow-400 text-black hover:bg-yellow-500 border-2 border-yellow-400 shadow-lg"
            >
              How to buy
            </Button>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-20 bg-yagi-green">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-5xl font-bold mb-8 text-gray-800">The story of Yago!</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Cast out for thinking differently and freely, Yago left the herd behind—alone, but finally
                awake. Now he's leading a new herd of unbothered thinkers, builders, and memers—
                grazing freely on their own terms. He's not leading followers. He's leading future YAGOs—
                those brave enough to think freely, build, and graze differently.
              </p>
            </div>
            <div>
              <Image
                src="/images/yago-story-2.jpg"
                alt="Yago Story"
                width={400}
                height={400}
                className="mx-auto rounded-lg"
              />
            </div>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-20">
            <div className="aspect-square">
              <Image
                src="/images/yago-story-1.jpg"
                alt="Yago at the marina"
                width={200}
                height={200}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/images/yago-story-3.jpg"
                alt="Yago with sports car"
                width={200}
                height={200}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/images/yago-story-4.jpg"
                alt="Yago in convertible"
                width={200}
                height={200}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/images/yago-story-5.jpg"
                alt="Yago at castle"
                width={200}
                height={200}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/images/yago-story-6.jpg"
                alt="Yago in space"
                width={200}
                height={200}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/images/yago-story-7.jpg"
                alt="Yago in Paris"
                width={200}
                height={200}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/images/yago-story-8.jpg"
                alt="Yago at beach"
                width={200}
                height={200}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/images/yago-story-9.jpg"
                alt="Yago at mansion"
                width={200}
                height={200}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/images/yago-story-10.jpg"
                alt="Yago red carpet"
                width={200}
                height={200}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800">Yago isn't just a meme—it's a mindset.</h3>
              <p className="text-gray-700 leading-relaxed">
                This isn't just about markets—it's about mindset. Yago is for those who walk steady in
                storms, think sharp under pressure, and never let noise write their story.<br/><br/>
                <strong>Rebellious with Purpose:</strong> Yago doesn't ride trends—it breaks loops. No roadmaps. No
                gatekeepers. No herd mentality. Just creators, memers, and thinkers carving futures no
                one else saw coming.<br/><br/>
                <strong>Born on Base Network</strong>, Yago isn't here to sell dreams—it's here to build a culture where
                community leads, free thinkers thrive, memes matter, and the pasture is wide open.
                This isn't about following the <strong>YAGO, its about unlocking the one within—calm, curious,
                and ready to lead</strong>.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800">A New Path Starts Here</h3>
              <p className="text-gray-700 leading-relaxed">
                Yago may be unbothered—but never uninvolved. With clarity comes responsibility. We
                believe that true freedom means building not just onchain, but off-chain too.<br/><br/>
                As part of our mission, Yago is committed to supporting causes that liberate minds,
                empower communities, and protect the pastures we all share—digital and physical.
                Because when the herd chills with purpose, real change grazes in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Buy Section */}
      <section id="how" className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/goat-socials.png"
            alt="Yago Goat with Lightsaber and Crowd"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-center">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-bold mb-8 text-white drop-shadow-2xl text-center">How to buy $YAGO</h2>
              <ol className="text-xl space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="bg-yellow-400 text-black rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold">1</span>
                  <span className="text-white drop-shadow-lg font-medium">Create wallet</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-yellow-400 text-black rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold">2</span>
                  <span className="text-white drop-shadow-lg font-medium">Buy or send ETH</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-yellow-400 text-black rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold">3</span>
                  <span className="text-white drop-shadow-lg font-medium">Open Uniswap</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-yellow-400 text-black rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold">4</span>
                  <span className="text-white drop-shadow-lg font-medium">{'Swap ETH -> YAGO'}</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-yellow-400 text-black rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold">5</span>
                  <span className="text-white drop-shadow-lg font-medium">Join community</span>
                </li>
              </ol>
              <div className="text-center">
                <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-500 mb-8 shadow-lg">
                  <Link href="#" target="_blank">Go to buy</Link>
                </Button>
              </div>
              <div className="bg-red-100/90 backdrop-blur-sm border-red-400 rounded-lg p-4">
                <h3 className="text-red-700 font-bold mb-2">DISCLAIMER!!</h3>
                <p className="text-red-600 text-sm">Memecoins have no intrinsic value. There can be no expectation of financial reward</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 bg-green-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="max-w-4xl text-center">
              <h2 className="text-5xl font-bold mb-8 text-gray-800">Join the Yago Movement</h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-8">
                Yago isn't just a coin—it's a collective flex. A herd of unbothered minds building, memeing,
                and thinking freely across the chain.
                Yago is all of us—each on our own path to becoming the greatest in whatever we touch. It's
                not about hype. It's about showing up calm, curious, and unapologetically you.
                You're not just joining a project, <strong>You're entering your YAGO era</strong>.
              </p>
              <div className="flex justify-center space-x-4">
                <Link href="#" target="_blank" className="hover:text-yellow-600 transition-colors">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M28.6108 3.27352C28.4559 3.13973 28.2674 3.05075 28.0656 3.01617C27.8638 2.98159 27.6565 3.00271 27.4658 3.07727L2.1333 12.991C1.77429 13.1306 1.47033 13.3831 1.26721 13.7104C1.06409 14.0377 0.972783 14.4221 1.00705 14.8058C1.04131 15.1895 1.19929 15.5516 1.4572 15.8378C1.7151 16.1239 2.05898 16.3185 2.43705 16.3923L9.0008 17.681V24.9998C8.99951 25.3984 9.11798 25.7883 9.34086 26.1188C9.56373 26.4493 9.88074 26.7053 10.2508 26.8535C10.6203 27.0044 11.0266 27.0406 11.417 26.9575C11.8073 26.8743 12.1636 26.6756 12.4396 26.3873L15.6046 23.1048L20.6258 27.4998C20.9881 27.8211 21.4553 27.9989 21.9396 27.9998C22.1518 27.9996 22.3626 27.9663 22.5646 27.901C22.8945 27.7963 23.1912 27.607 23.4252 27.352C23.6593 27.0969 23.8224 26.785 23.8983 26.4473L28.9721 4.37477C29.0174 4.17571 29.0078 3.96805 28.9442 3.77405C28.8805 3.58005 28.7653 3.40702 28.6108 3.27352ZM21.9421 25.9998L11.6071 16.9373L26.4821 6.27602L21.9421 25.9998Z"/>
                  </svg>
                </Link>
                <Link href="#" target="_blank" className="hover:text-yellow-600 transition-colors">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M26.8755 27.4813C26.7894 27.6381 26.6628 27.769 26.5089 27.8602C26.355 27.9514 26.1794 27.9997 26.0005 28H20.0005C19.8322 27.9999 19.6666 27.9574 19.5191 27.8764C19.3716 27.7953 19.247 27.6783 19.1567 27.5362L14.0955 19.5825L6.74049 27.6725C6.56119 27.8651 6.3132 27.9793 6.05029 27.9903C5.78738 28.0012 5.53074 27.9082 5.336 27.7312C5.14126 27.5542 5.02413 27.3076 5.00999 27.0448C4.99586 26.7821 5.08586 26.5243 5.26049 26.3275L12.9817 17.8275L5.15674 5.5375C5.06036 5.3863 5.00641 5.21198 5.00054 5.03278C4.99466 4.85357 5.03707 4.67609 5.12333 4.5189C5.20959 4.36172 5.33653 4.23062 5.49085 4.13932C5.64516 4.04803 5.82119 3.99991 6.00049 4H12.0005C12.1688 4.00005 12.3344 4.04258 12.4818 4.12365C12.6293 4.20471 12.754 4.32169 12.8442 4.46375L17.9055 12.4175L25.2605 4.3275C25.4398 4.1349 25.6878 4.02073 25.9507 4.00974C26.2136 3.99876 26.4702 4.09185 26.665 4.26882C26.8597 4.44579 26.9768 4.69239 26.991 4.95515C27.0051 5.21791 26.9151 5.47566 26.7405 5.6725L19.0192 14.1663L26.8442 26.4638C26.9401 26.615 26.9935 26.7892 26.999 26.9682C27.0045 27.1472 26.9619 27.3244 26.8755 27.4813Z"/>
                  </svg>
                </Link>
                <Link href="#" target="_blank" className="hover:text-yellow-600 transition-colors">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M29 10V15C29 15.2652 28.8946 15.5196 28.7071 15.7071C28.5196 15.8946 28.2652 16 28 16C25.911 16.0049 23.8521 15.5026 22 14.5363V19.5C22 22.0196 20.9991 24.4359 19.2175 26.2175C17.4359 27.9991 15.0196 29 12.5 29C9.98044 29 7.56408 27.9991 5.78249 26.2175C4.00089 24.4359 3 22.0196 3 19.5C3 14.8875 6.36375 10.81 10.825 10.015C10.9689 9.98942 11.1167 9.9957 11.2579 10.0334C11.3992 10.0711 11.5304 10.1393 11.6424 10.2332C11.7544 10.3271 11.8445 10.4445 11.9063 10.5769C11.9681 10.7094 12.0001 10.8538 12 11V16.3363C12.0001 16.5255 11.9464 16.7109 11.8453 16.8709C11.7442 17.0309 11.5997 17.1589 11.4288 17.24C11.0245 17.4317 10.6792 17.7283 10.4287 18.099C10.1782 18.4696 10.0317 18.9007 10.0046 19.3472C9.97747 19.7938 10.0707 20.2394 10.2744 20.6376C10.4782 21.0359 10.7851 21.3722 11.1631 21.6114C11.5411 21.8506 11.9764 21.984 12.4236 21.9977C12.8707 22.0114 13.3133 21.9048 13.7053 21.6891C14.0972 21.4735 14.4241 21.1566 14.6518 20.7715C14.8796 20.3865 14.9998 19.9474 15 19.5V3C15 2.73478 15.1054 2.48043 15.2929 2.29289C15.4804 2.10536 15.7348 2 16 2H21C21.2652 2 21.5196 2.10536 21.7071 2.29289C21.8946 2.48043 22 2.73478 22 3C22.0017 4.59079 22.6343 6.11595 23.7592 7.24081C24.884 8.36567 26.4092 8.99835 28 9C28.2652 9 28.5196 9.10536 28.7071 9.29289C28.8946 9.48043 29 9.73478 29 10Z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
