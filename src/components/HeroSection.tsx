import { useState } from 'react'
import { motion } from 'motion/react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { 
  Search, 
  Clock, 
  MapPin, 
  Users, 
  Zap, 
  TrendingUp,
  Star,
  ArrowRight
} from 'lucide-react'


interface HeroSectionProps {
  onViewChange: (view: string) => void
}

export function HeroSection({ onViewChange }: HeroSectionProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchType, setSearchType] = useState('restaurants')

  const stats = [
    { label: 'Meals Ready Now', value: '247', icon: Zap, color: 'text-logo-orange' },
    { label: 'Avg Wait Time', value: '3.2 min', icon: Clock, color: 'text-warm-yellow' },
    { label: 'Available Seats', value: '89', icon: Users, color: 'text-tomato-red' },
    { label: 'Active Restaurants', value: '156', icon: TrendingUp, color: 'text-orange-400' }
  ]

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
       
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/80 via-yellow-900/60 to-red-900/40" />
        
        {/* Animated grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-grid-pattern animate-pulse" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Tagline */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-cream-white">No more </span>
            <span className="gradient-text">waiting</span>,
            <br />
            <span className="text-cream-white">just </span>
            <span className="gradient-text">eating</span>
            <motion.span 
              className="text-logo-orange text-8xl"
              animate={{ 
                textShadow: [
                  '0 0 20px rgba(255, 107, 0, 0.5)',
                  '0 0 40px rgba(255, 107, 0, 0.8)',
                  '0 0 20px rgba(255, 107, 0, 0.5)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              .
            </motion.span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-warm-gray max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Real-time restaurant data that saves your lunch break. 
            See what's ready, find available seats, and skip the wait.
          </motion.p>

          {/* Search Section */}
          <motion.div 
            className="glass rounded-2xl p-8 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <Select value={searchType} onValueChange={setSearchType}>
                  <SelectTrigger className="bg-charcoal-gray/30 border-logo-orange/30 text-cream-white">
                    <SelectValue placeholder="Search for..." />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-logo-orange/30">
                    <SelectItem value="restaurants">Find Restaurants</SelectItem>
                    <SelectItem value="meals">See Ready Meals</SelectItem>
                    <SelectItem value="seating">Check Seating Availability</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex-[2]">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    placeholder="Enter location or restaurant name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-charcoal-gray/30 border-logo-orange/30 text-cream-white placeholder-warm-gray"
                  />
                </div>
              </div>
              
              <Button 
                className="bg-gradient-to-r from-logo-orange to-warm-yellow hover:from-orange-600 hover:to-yellow-500 text-cream-white px-8 py-3 glow-orange transition-all duration-300"
                onClick={() => onViewChange('restaurants')}
              >
                <Search className="h-5 w-5 mr-2" />
                Search Now
              </Button>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                className="border-logo-orange/30 text-cream-white hover:bg-logo-orange/20"
                onClick={() => onViewChange('restaurants')}
              >
                <Clock className="h-4 w-4 mr-2" />
                Order Now
              </Button>
              <Button 
                variant="outline" 
                className="border-warm-yellow/30 text-cream-white hover:bg-warm-yellow/20"
                onClick={() => onViewChange('restaurants')}
              >
                <MapPin className="h-4 w-4 mr-2" />
                See Restaurants
              </Button>
              <Button 
                variant="outline" 
                className="border-tomato-red/30 text-cream-white hover:bg-tomato-red/20"
                onClick={() => onViewChange('download')}
              >
                <ArrowRight className="h-4 w-4 mr-2" />
                Download App
              </Button>
            </div>
          </motion.div>

          {/* Real-time Stats */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass rounded-xl p-6 text-center gradient-border"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="flex justify-center mb-3">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className={`text-2xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-warm-gray text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-logo-orange rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}