import { useState } from 'react'
import { motion } from 'motion/react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { 
  MapPin, 
  Filter, 
  Layers, 
  ZoomIn, 
  ZoomOut, 
  Navigation,
  Clock,
  Users,
  Star,
  Zap,
  ChefHat
} from 'lucide-react'

interface MapViewProps {
  onViewChange: (view: string, data?: any) => void
}

const mapPins = [
  {
    id: 1,
    name: "Bella Italia",
    cuisine: "Italian",
    x: 35,
    y: 45,
    waitTime: "3 min",
    seats: 8,
    rating: 4.8,
    status: "ready"
  },
  {
    id: 2,
    name: "Sakura Sushi",
    cuisine: "Japanese", 
    x: 65,
    y: 25,
    waitTime: "1 min",
    seats: 5,
    rating: 4.9,
    status: "ready"
  },
  {
    id: 3,
    name: "Taco Libre",
    cuisine: "Mexican",
    x: 20,
    y: 70,
    waitTime: "5 min",
    seats: 12,
    rating: 4.6,
    status: "busy"
  },
  {
    id: 4,
    name: "Burger Palace",
    cuisine: "American",
    x: 75,
    y: 60,
    waitTime: "7 min",
    seats: 3,
    rating: 4.4,
    status: "busy"
  },
  {
    id: 5,
    name: "Green Bowl",
    cuisine: "Healthy",
    x: 50,
    y: 35,
    waitTime: "2 min",
    seats: 6,
    rating: 4.7,
    status: "ready"
  },
  {
    id: 6,
    name: "Pasta Corner",
    cuisine: "Italian",
    x: 40,
    y: 80,
    waitTime: "4 min",
    seats: 0,
    rating: 4.5,
    status: "full"
  }
]

export function MapView({ onViewChange }: MapViewProps) {
  const [selectedPin, setSelectedPin] = useState<number | null>(null)
  const [showWaitTimes, setShowWaitTimes] = useState(true)
  const [showSeating, setShowSeating] = useState(true)
  const [filterCuisine, setFilterCuisine] = useState<string>('all')

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ready': return 'bg-fresh-green'
      case 'busy': return 'bg-yellow-500'
      case 'full': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'ready': return 'Ready Now'
      case 'busy': return 'Moderate Wait'
      case 'full': return 'No Seats'
      default: return 'Unknown'
    }
  }

  const filteredPins = mapPins.filter(pin => 
    filterCuisine === 'all' || pin.cuisine.toLowerCase() === filterCuisine.toLowerCase()
  )

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="flex flex-col lg:flex-row lg:items-center justify-between mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">
              <span className="gradient-text">Live</span> Restaurant Map
            </h1>
            <p className="text-gray-300">
              Real-time data from {mapPins.length} restaurants in your area
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap gap-3 mt-4 lg:mt-0">
            <Button
              variant={showWaitTimes ? "default" : "outline"}
              size="sm"
              onClick={() => setShowWaitTimes(!showWaitTimes)}
              className={showWaitTimes ? 'bg-purple-600' : 'border-purple-500/30'}
            >
              <Clock className="h-4 w-4 mr-2" />
              Wait Times
            </Button>
            <Button
              variant={showSeating ? "default" : "outline"}
              size="sm"
              onClick={() => setShowSeating(!showSeating)}
              className={showSeating ? 'bg-blue-600' : 'border-blue-500/30'}
            >
              <Users className="h-4 w-4 mr-2" />
              Seating
            </Button>
            <select 
              value={filterCuisine}
              onChange={(e) => setFilterCuisine(e.target.value)}
              className="px-3 py-2 bg-purple-900/30 border border-purple-500/30 rounded-lg text-white text-sm"
            >
              <option value="all">All Cuisines</option>
              <option value="italian">Italian</option>
              <option value="japanese">Japanese</option>
              <option value="mexican">Mexican</option>
              <option value="american">American</option>
              <option value="healthy">Healthy</option>
            </select>
          </div>
        </motion.div>

        {/* Map Container */}
        <motion.div 
          className="glass rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative h-[600px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-20">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#374151" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* Street layout simulation */}
            <div className="absolute inset-0">
              {/* Main streets */}
              <div className="absolute top-1/3 left-0 right-0 h-2 bg-gray-600/50"></div>
              <div className="absolute top-2/3 left-0 right-0 h-2 bg-gray-600/50"></div>
              <div className="absolute left-1/4 top-0 bottom-0 w-2 bg-gray-600/50"></div>
              <div className="absolute left-3/4 top-0 bottom-0 w-2 bg-gray-600/50"></div>
              
              {/* Building blocks */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-gray-700/30 rounded"
                  style={{
                    left: `${15 + (i % 3) * 25}%`,
                    top: `${20 + Math.floor(i / 3) * 20}%`,
                    width: `${10 + Math.random() * 10}%`,
                    height: `${8 + Math.random() * 8}%`
                  }}
                />
              ))}
            </div>

            {/* Restaurant pins */}
            {filteredPins.map((pin, index) => (
              <motion.div
                key={pin.id}
                className="absolute cursor-pointer"
                style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedPin(selectedPin === pin.id ? null : pin.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {/* Pin */}
                <div className={`relative w-8 h-8 ${getStatusColor(pin.status)} rounded-full border-2 border-white shadow-lg flex items-center justify-center`}>
                  <ChefHat className="h-4 w-4 text-white" />
                  
                  {/* Pulse animation for ready restaurants */}
                  {pin.status === 'ready' && (
                    <div className="absolute inset-0 bg-fresh-green rounded-full animate-ping opacity-30"></div>
                  )}
                </div>

                {/* Info overlays */}
                {showWaitTimes && (
                  <div className="absolute -top-8 -left-6 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {pin.waitTime}
                  </div>
                )}
                
                {showSeating && pin.seats > 0 && (
                  <div className="absolute -bottom-8 -left-4 bg-blue-600/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {pin.seats} seats
                  </div>
                )}

                {/* Selected pin info card */}
                {selectedPin === pin.id && (
                  <motion.div
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-64 glass rounded-xl p-4 z-10"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-bold text-white text-sm">{pin.name}</h3>
                        <p className="text-gray-300 text-xs">{pin.cuisine}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                        <span className="text-white text-xs">{pin.rating}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-3 text-xs">
                      <div className="text-center">
                        <div className="text-fresh-green font-medium">{pin.waitTime}</div>
                        <div className="text-gray-400">Wait Time</div>
                      </div>
                      <div className="text-center">
                        <div className="text-blue-400 font-medium">{pin.seats}</div>
                        <div className="text-gray-400">Seats</div>
                      </div>
                    </div>

                    <Badge 
                      className={`${getStatusColor(pin.status)} text-white text-xs w-full justify-center mb-3`}
                    >
                      {getStatusText(pin.status)}
                    </Badge>

                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        className="flex-1 bg-gradient-to-r from-fresh-green to-blue-400 hover:from-green-400 hover:to-blue-500 text-black text-xs"
                        onClick={(e) => {
                          e.stopPropagation()
                          onViewChange('restaurant-detail', { 
                            id: pin.id, 
                            name: pin.name, 
                            cuisine: pin.cuisine,
                            rating: pin.rating,
                            waitTime: pin.waitTime,
                            seatsAvailable: pin.seats,
                            image: "https://images.unsplash.com/photo-1662197480393-2a82030b7b83"
                          })
                        }}
                      >
                        View Menu
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-purple-500/30 text-white hover:bg-purple-600/20 text-xs"
                      >
                        <Navigation className="h-3 w-3" />
                      </Button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}

            {/* Map controls */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <Button size="sm" variant="outline" className="w-10 h-10 p-0 border-white/20 text-white hover:bg-white/10">
                <ZoomIn className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="w-10 h-10 p-0 border-white/20 text-white hover:bg-white/10">
                <ZoomOut className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="w-10 h-10 p-0 border-white/20 text-white hover:bg-white/10">
                <Layers className="h-4 w-4" />
              </Button>
            </div>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 glass rounded-lg p-3">
              <h4 className="text-white font-medium text-sm mb-2">Legend</h4>
              <div className="space-y-1 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-fresh-green rounded-full"></div>
                  <span className="text-gray-300">Ready Now</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-300">Moderate Wait</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-gray-300">No Seats</span>
                </div>
              </div>
            </div>

            {/* User location indicator */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg"></div>
                <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-40"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="glass rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-fresh-green mb-1">
              {filteredPins.filter(p => p.status === 'ready').length}
            </div>
            <div className="text-gray-300 text-sm">Ready Now</div>
          </div>
          <div className="glass rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-400 mb-1">
              {filteredPins.reduce((sum, p) => sum + p.seats, 0)}
            </div>
            <div className="text-gray-300 text-sm">Available Seats</div>
          </div>
          <div className="glass rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-yellow-400 mb-1">
              {Math.round(filteredPins.reduce((sum, p) => sum + parseFloat(p.waitTime), 0) / filteredPins.length * 10) / 10} min
            </div>
            <div className="text-gray-300 text-sm">Avg Wait Time</div>
          </div>
          <div className="glass rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-purple-400 mb-1">
              {filteredPins.length}
            </div>
            <div className="text-gray-300 text-sm">Total Restaurants</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}