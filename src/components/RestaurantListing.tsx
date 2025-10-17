import { useState } from 'react'
import { motion } from 'motion/react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Badge } from './ui/badge'
import { 
  Search, 
  Filter, 
  Clock, 
  Users, 
  Star, 
  MapPin,
  Zap,
  DollarSign,
  ChefHat,
  ArrowRight
} from 'lucide-react'


interface RestaurantListingProps {
  onViewChange: (view: string, data?: any) => void
}

const restaurants = [
  {
    id: 1,
    name: "Bella Italia",
    cuisine: "Italian",
    rating: 4.8,
    reviews: 234,
    waitTime: "3 min",
    seatsAvailable: 8,
    priceRange: "$$",
    distance: "0.2 miles",
    image: "https://images.unsplash.com/photo-1662197480393-2a82030b7b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwcmVzdGF1cmFudCUyMGZvb2R8ZW58MXx8fHwxNzU2Mzg5NjUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    specialties: ["Pasta", "Pizza", "Risotto"],
    readyMeals: 12,
    isOpen: true,
    quickOrder: ["Margherita Pizza", "Carbonara", "Caesar Salad"]
  },
  {
    id: 2,
    name: "Sakura Sushi",
    cuisine: "Japanese",
    rating: 4.9,
    reviews: 189,
    waitTime: "1 min",
    seatsAvailable: 5,
    priceRange: "$$$",
    distance: "0.4 miles",
    image: "https://images.unsplash.com/photo-1707556294075-5aa2ecd6abc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHJlc3RhdXJhbnQlMjBmb29kfGVufDF8fHx8MTc1NjQ4Nzk5NXww&ixlib=rb-4.1.0&q=80&w=1080",
    specialties: ["Sushi", "Ramen", "Tempura"],
    readyMeals: 8,
    isOpen: true,
    quickOrder: ["California Roll", "Salmon Sashimi", "Miso Soup"]
  },
  {
    id: 3,
    name: "Taco Libre",
    cuisine: "Mexican",
    rating: 4.6,
    reviews: 156,
    waitTime: "5 min",
    seatsAvailable: 12,
    priceRange: "$",
    distance: "0.1 miles",
    image: "https://images.unsplash.com/photo-1665541719551-655b587161e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwcmVzdGF1cmFudCUyMHRhY29zfGVufDF8fHx8MTc1NjQyMDM4Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    specialties: ["Tacos", "Burritos", "Quesadillas"],
    readyMeals: 15,
    isOpen: true,
    quickOrder: ["Beef Tacos", "Chicken Burrito", "Guacamole"]
  },
  {
    id: 4,
    name: "Burger Palace",
    cuisine: "American",
    rating: 4.4,
    reviews: 298,
    waitTime: "7 min",
    seatsAvailable: 3,
    priceRange: "$$",
    distance: "0.3 miles",
    image: "https://images.unsplash.com/photo-1722125680299-783f98369451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjByZXN0YXVyYW50JTIwZm9vZHxlbnwxfHx8fDE3NTY0ODgwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    specialties: ["Burgers", "Fries", "Shakes"],
    readyMeals: 6,
    isOpen: true,
    quickOrder: ["Classic Burger", "Cheese Fries", "Vanilla Shake"]
  }
]

export function RestaurantListing({ onViewChange }: RestaurantListingProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [cuisineFilter, setCuisineFilter] = useState('all')
  const [priceFilter, setPriceFilter] = useState('all')
  const [sortBy, setSortBy] = useState('waitTime')

  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCuisine = cuisineFilter === 'all' || restaurant.cuisine.toLowerCase() === cuisineFilter
    const matchesPrice = priceFilter === 'all' || restaurant.priceRange === priceFilter
    
    return matchesSearch && matchesCuisine && matchesPrice
  }).sort((a, b) => {
    switch (sortBy) {
      case 'waitTime':
        return parseInt(a.waitTime) - parseInt(b.waitTime)
      case 'rating':
        return b.rating - a.rating
      case 'distance':
        return parseFloat(a.distance) - parseFloat(b.distance)
      default:
        return 0
    }
  })

  const getWaitTimeColor = (waitTime: string) => {
    const minutes = parseInt(waitTime)
    if (minutes <= 3) return 'text-fresh-green'
    if (minutes <= 5) return 'text-yellow-400'
    return 'text-red-400'
  }

  const getSeatsColor = (seats: number) => {
    if (seats >= 10) return 'text-fresh-green'
    if (seats >= 5) return 'text-yellow-400'
    return 'text-red-400'
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-white mb-2">
            <span className="gradient-text">Live</span> Restaurant Data
          </h1>
          <p className="text-gray-300">
            Real-time information from {restaurants.length} restaurants near you
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          className="glass rounded-2xl p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search restaurants or cuisine..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-purple-900/30 border-purple-500/30 text-white"
                />
              </div>
            </div>
            
            <Select value={cuisineFilter} onValueChange={setCuisineFilter}>
              <SelectTrigger className="w-full lg:w-48 bg-purple-900/30 border-purple-500/30 text-white">
                <SelectValue placeholder="Cuisine" />
              </SelectTrigger>
              <SelectContent className="bg-card border-purple-500/30">
                <SelectItem value="all">All Cuisines</SelectItem>
                <SelectItem value="italian">Italian</SelectItem>
                <SelectItem value="japanese">Japanese</SelectItem>
                <SelectItem value="mexican">Mexican</SelectItem>
                <SelectItem value="american">American</SelectItem>
              </SelectContent>
            </Select>

            <Select value={priceFilter} onValueChange={setPriceFilter}>
              <SelectTrigger className="w-full lg:w-32 bg-purple-900/30 border-purple-500/30 text-white">
                <SelectValue placeholder="Price" />
              </SelectTrigger>
              <SelectContent className="bg-card border-purple-500/30">
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="$">$</SelectItem>
                <SelectItem value="$$">$$</SelectItem>
                <SelectItem value="$$$">$$$</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full lg:w-40 bg-purple-900/30 border-purple-500/30 text-white">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-card border-purple-500/30">
                <SelectItem value="waitTime">Wait Time</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
                <SelectItem value="distance">Distance</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredRestaurants.map((restaurant, index) => (
            <motion.div
              key={restaurant.id}
              className="glass rounded-2xl overflow-hidden group hover:glow-purple transition-all duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              onClick={() => onViewChange('restaurant-detail', restaurant)}
            >
              <div className="relative h-48 overflow-hidden">
               
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Status badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-fresh-green/90 text-black">
                    <Zap className="h-3 w-3 mr-1" />
                    {restaurant.readyMeals} Ready
                  </Badge>
                  {restaurant.seatsAvailable > 0 && (
                    <Badge className={`${restaurant.seatsAvailable >= 5 ? 'bg-fresh-green/90' : 'bg-yellow-500/90'} text-black`}>
                      <Users className="h-3 w-3 mr-1" />
                      {restaurant.seatsAvailable} Seats
                    </Badge>
                  )}
                </div>

                {/* Wait time */}
                <div className="absolute top-4 right-4">
                  <Badge className={`bg-black/80 ${getWaitTimeColor(restaurant.waitTime)}`}>
                    <Clock className="h-3 w-3 mr-1" />
                    {restaurant.waitTime}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {restaurant.name}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-300">
                      <ChefHat className="h-4 w-4" />
                      <span>{restaurant.cuisine}</span>
                      <span>•</span>
                      <span>{restaurant.priceRange}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-white font-medium">{restaurant.rating}</span>
                    <span className="text-gray-400">({restaurant.reviews})</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                  <div>
                    <div className={`font-bold ${getWaitTimeColor(restaurant.waitTime)}`}>
                      {restaurant.waitTime}
                    </div>
                    <div className="text-gray-400 text-sm">Wait Time</div>
                  </div>
                  <div>
                    <div className={`font-bold ${getSeatsColor(restaurant.seatsAvailable)}`}>
                      {restaurant.seatsAvailable}
                    </div>
                    <div className="text-gray-400 text-sm">Seats</div>
                  </div>
                  <div>
                    <div className="font-bold text-blue-400">
                      {restaurant.distance}
                    </div>
                    <div className="text-gray-400 text-sm">Distance</div>
                  </div>
                </div>

                {/* Quick Order */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Quick Order:</h4>
                  <div className="flex flex-wrap gap-2">
                    {restaurant.quickOrder.slice(0, 2).map((item) => (
                      <Badge key={item} variant="outline" className="border-purple-500/30 text-purple-300">
                        {item}
                      </Badge>
                    ))}
                    {restaurant.quickOrder.length > 2 && (
                      <Badge variant="outline" className="border-purple-500/30 text-purple-300">
                        +{restaurant.quickOrder.length - 2} more
                      </Badge>
                    )}
                  </div>
                </div>

                
                <div className="flex gap-3">
                  <Button 
                    className="flex-1 bg-gradient-to-r from-fresh-green to-blue-400 hover:from-green-400 hover:to-blue-500 text-black"
                    onClick={(e) => {
                      e.stopPropagation()
                      
                    }}
                  >
                    <Zap className="h-4 w-4 mr-2" />
                    Quick Order
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-purple-500/30 text-white hover:bg-purple-600/20"
                    onClick={(e) => {
                      e.stopPropagation()
                      onViewChange('restaurant-detail', restaurant)
                    }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

       
        {filteredRestaurants.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-2">No restaurants found</h3>
              <p className="text-gray-300">Try adjusting your filters or search criteria.</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}