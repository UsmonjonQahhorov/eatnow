import { useState } from 'react'
import { Button } from './ui/button'
import { motion } from 'motion/react'
import { 
  Utensils, 
  Map, 
  Clock, 
  Users, 
  Download, 
  Menu, 
  X,
  ChefHat
} from 'lucide-react'

interface NavigationProps {
  currentView: string
  onViewChange: (view: string) => void
}

export function Navigation({ currentView, onViewChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home', icon: ChefHat },
    { id: 'restaurants', label: 'Restaurants', icon: Utensils },
    { id: 'map', label: 'Live Map', icon: Map },
    { id: 'about', label: 'About', icon: Users },
  ]

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-purple-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onViewChange('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <ChefHat className="h-8 w-8 text-logo-orange" />
              <div className="absolute inset-0 h-8 w-8 text-logo-orange animate-pulse opacity-50" />
            </div>
            <span className="text-2xl font-bold gradient-text">EatNow</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  currentView === item.id
                    ? 'bg-logo-orange/20 text-warm-yellow border border-logo-orange/30'
                    : 'text-cream-white/80 hover:text-cream-white hover:bg-logo-orange/10'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </motion.button>
            ))}
            
            <Button 
              onClick={() => onViewChange('download')}
              className="bg-gradient-to-r from-logo-orange to-warm-yellow hover:from-orange-600 hover:to-yellow-500 text-cream-white px-6 py-2 rounded-lg glow-orange transition-all duration-300"
            >
              <Download className="h-4 w-4 mr-2" />
              Download App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-cream-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-logo-orange/20 mt-2 pt-4 pb-4"
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    onViewChange(item.id)
                    setIsMenuOpen(false)
                  }}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    currentView === item.id
                      ? 'bg-logo-orange/20 text-warm-yellow border border-logo-orange/30'
                      : 'text-cream-white/80 hover:text-cream-white hover:bg-logo-orange/10'
                  }`}
                  whileHover={{ x: 10 }}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </motion.button>
              ))}
              
              <Button 
                onClick={() => {
                  onViewChange('download')
                  setIsMenuOpen(false)
                }}
                className="bg-gradient-to-r from-logo-orange to-warm-yellow hover:from-orange-600 hover:to-yellow-500 text-cream-white justify-start"
              >
                <Download className="h-5 w-5 mr-3" />
                Download App
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}