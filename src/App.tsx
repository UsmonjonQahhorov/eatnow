import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Navigation } from './components/Navigation'
import { HeroSection } from './components/HeroSection'
import { FeaturesSection } from './components/FeaturesSection'
import { RestaurantListing } from './components/RestaurantListing'
import { RestaurantDetail } from './components/RestaurantDetail'
import { AboutPage } from './components/AboutPage'
import { DownloadPage } from './components/DownloadPage'
import { MapView } from './components/MapView'

export default function App() {
  const [currentView, setCurrentView] = useState('home')
  const [selectedRestaurant, setSelectedRestaurant] = useState(null)

  const handleViewChange = (view: string, data?: any) => {
    if (view === 'restaurant-detail' && data) {
      setSelectedRestaurant(data)
    }
    setCurrentView(view)
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderCurrentView = () => {
    switch (currentView) {
      case 'restaurants':
        return <RestaurantListing onViewChange={handleViewChange} />
      
      case 'restaurant-detail':
        return selectedRestaurant ? (
          <RestaurantDetail 
            restaurant={selectedRestaurant} 
            onViewChange={handleViewChange} 
          />
        ) : (
          <RestaurantListing onViewChange={handleViewChange} />
        )
      
      case 'about':
        return <AboutPage onViewChange={handleViewChange} />
      
      case 'download':
        return <DownloadPage onViewChange={handleViewChange} />
      
      case 'map':
        return <MapView onViewChange={handleViewChange} />
      
      case 'home':
      default:
        return (
          <>
            <HeroSection onViewChange={handleViewChange} />
            <FeaturesSection />
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation currentView={currentView} onViewChange={handleViewChange} />
      
      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.main
          key={currentView}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          {renderCurrentView()}
        </motion.main>
      </AnimatePresence>

      {/* Footer */}
      {currentView === 'home' && (
        <motion.footer 
          className="border-t border-purple-500/20 py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-fresh-green to-blue-400 rounded-lg flex items-center justify-center">
                    <span className="text-black font-bold text-sm">EN</span>
                  </div>
                  <span className="text-2xl font-bold gradient-text">EatNow</span>
                </div>
                <p className="text-gray-300 mb-4 max-w-md">
                  Revolutionizing the dining experience with real-time restaurant data. 
                  No more waiting, just eating.
                </p>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center cursor-pointer hover:bg-purple-600/30 transition-colors">
                    <span className="text-white text-sm">f</span>
                  </div>
                  <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-600/30 transition-colors">
                    <span className="text-white text-sm">t</span>
                  </div>
                  <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center cursor-pointer hover:bg-purple-600/30 transition-colors">
                    <span className="text-white text-sm">in</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-semibold text-white mb-4">Quick Links</h3>
                <div className="space-y-2">
                  {[
                    { label: 'Restaurants', view: 'restaurants' },
                    { label: 'Live Map', view: 'map' },
                    { label: 'About Us', view: 'about' },
                    { label: 'Download App', view: 'download' }
                  ].map((link) => (
                    <button
                      key={link.label}
                      onClick={() => handleViewChange(link.view)}
                      className="block text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Support */}
              <div>
                <h3 className="font-semibold text-white mb-4">Support</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                    Help Center
                  </a>
                  <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                    Contact Us
                  </a>
                  <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                  <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-purple-500/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 EatNow. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <span className="text-gray-400 text-sm">Made with</span>
                <div className="flex items-center space-x-1">
                  <span className="text-red-500">♥</span>
                  <span className="text-gray-400 text-sm">by the EatNow team</span>
                </div>
              </div>
            </div>
          </div>
        </motion.footer>
      )}

      {/* Floating elements for visual interest */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Animated background particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
        
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 2,
          }}
        />
      </div>
    </div>
  )
}