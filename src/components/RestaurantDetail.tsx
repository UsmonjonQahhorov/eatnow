import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { 
  ArrowLeft, 
  Clock, 
  Users, 
  Star, 
  MapPin, 
  Phone,
  Zap,
  Plus,
  Minus,
  ShoppingCart,
  Heart,
  Share2,
  ChefHat
} from 'lucide-react'


interface RestaurantDetailProps {
  restaurant: any
  onViewChange: (view: string) => void
}

const menuItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Fresh mozzarella, tomato sauce, basil, and olive oil",
    price: 18.99,
    prepTime: "12 min",
    isReady: false,
    category: "Pizza",
    image: "https://images.unsplash.com/photo-1662197480393-2a82030b7b83",
    popular: true
  },
  {
    id: 2,
    name: "Carbonara Pasta",
    description: "Spaghetti with eggs, pecorino cheese, pancetta, and black pepper",
    price: 16.99,
    prepTime: "8 min",
    isReady: true,
    category: "Pasta",
    image: "https://images.unsplash.com/photo-1662197480393-2a82030b7b83",
    popular: false
  },
  {
    id: 3,
    name: "Caesar Salad",
    description: "Romaine lettuce, parmesan, croutons with caesar dressing",
    price: 12.99,
    prepTime: "3 min",
    isReady: true,
    category: "Salads",
    image: "https://images.unsplash.com/photo-1662197480393-2a82030b7b83",
    popular: false
  },
  {
    id: 4,
    name: "Tiramisu",
    description: "Classic Italian dessert with coffee-soaked ladyfingers",
    price: 8.99,
    prepTime: "Ready",
    isReady: true,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1662197480393-2a82030b7b83",
    popular: true
  }
]

export function RestaurantDetail({ restaurant, onViewChange }: RestaurantDetailProps) {
  const [cart, setCart] = useState<{[key: number]: number}>({})
  const [orderTime, setOrderTime] = useState("7 minutes")
  const [orderType, setOrderType] = useState<'dine-in' | 'takeaway'>('dine-in')

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      const times = ["7 minutes", "6 minutes", "5 minutes", "4 minutes"]
      setOrderTime(prev => {
        const currentIndex = times.indexOf(prev)
        return currentIndex < times.length - 1 ? times[currentIndex + 1] : times[0]
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const addToCart = (itemId: number) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }))
  }

  const removeFromCart = (itemId: number) => {
    setCart(prev => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0)
    }))
  }

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, quantity) => sum + quantity, 0)
  }

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((total, [itemId, quantity]) => {
      const item = menuItems.find(item => item.id === parseInt(itemId))
      return total + (item ? item.price * quantity : 0)
    }, 0)
  }

  const categories = [...new Set(menuItems.map(item => item.category))]

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <motion.button
          onClick={() => onViewChange('restaurants')}
          className="flex items-center text-gray-300 hover:text-white mb-6 transition-colors"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Restaurants
        </motion.button>

        {/* Restaurant Header */}
        <motion.div 
          className="glass rounded-2xl overflow-hidden mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative h-64 overflow-hidden">
           
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            
            {/* Status indicators */}
            <div className="absolute top-6 left-6 flex gap-3">
              <Badge className="bg-fresh-green/90 text-black">
                <Zap className="h-4 w-4 mr-1" />
                {restaurant.readyMeals} Ready Now
              </Badge>
              <Badge className="bg-blue-500/90 text-white">
                <Users className="h-4 w-4 mr-1" />
                {restaurant.seatsAvailable} Seats Available
              </Badge>
            </div>

            {/* Action buttons */}
            <div className="absolute top-6 right-6 flex gap-3">
              <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Heart className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>

            {/* Restaurant info overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <h1 className="text-3xl font-bold text-white mb-2">{restaurant.name}</h1>
              <div className="flex flex-wrap items-center gap-4 text-white/90">
                <div className="flex items-center gap-2">
                  <ChefHat className="h-4 w-4" />
                  <span>{restaurant.cuisine}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span>{restaurant.rating}</span>
                  <span className="text-white/60">({restaurant.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{restaurant.distance}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-fresh-green" />
                  <span className="text-fresh-green">Wait: {restaurant.waitTime}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Real-time order status */}
        <motion.div 
          className="glass rounded-2xl p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Live Order Status</h3>
              <p className="text-gray-300">Your order will be ready in approximately</p>
            </div>
            <div className="flex items-center gap-4">
              <motion.div 
                className="text-2xl font-bold text-fresh-green"
                key={orderTime}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {orderTime}
              </motion.div>
              <div className="flex gap-2">
                <Button
                  variant={orderType === 'dine-in' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setOrderType('dine-in')}
                  className={orderType === 'dine-in' ? 'bg-purple-600' : 'border-purple-500/30'}
                >
                  Dine-in
                </Button>
                <Button
                  variant={orderType === 'takeaway' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setOrderType('takeaway')}
                  className={orderType === 'takeaway' ? 'bg-purple-600' : 'border-purple-500/30'}
                >
                  Takeaway
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Menu Tabs */}
        <motion.div 
          className="glass rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Tabs defaultValue="menu" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-purple-900/30">
              <TabsTrigger value="menu" className="data-[state=active]:bg-purple-600">Menu</TabsTrigger>
              <TabsTrigger value="info" className="data-[state=active]:bg-purple-600">Info</TabsTrigger>
              <TabsTrigger value="reviews" className="data-[state=active]:bg-purple-600">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="menu" className="p-6">
              {/* Category filters */}
              <div className="flex flex-wrap gap-2 mb-6">
                <Button variant="outline" size="sm" className="border-purple-500/30 bg-purple-600/20 text-white">
                  All Items
                </Button>
                {categories.map(category => (
                  <Button 
                    key={category}
                    variant="outline" 
                    size="sm" 
                    className="border-purple-500/30 text-gray-300 hover:bg-purple-600/20"
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* Menu items */}
              <div className="space-y-4">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="flex items-center justify-between p-4 rounded-xl bg-purple-900/20 border border-purple-500/20 hover:border-purple-500/40 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-16 h-16 rounded-lg overflow-hidden">
                       
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-white">{item.name}</h4>
                          {item.popular && (
                            <Badge className="bg-orange-500/90 text-white text-xs">
                              Popular
                            </Badge>
                          )}
                          {item.isReady && (
                            <Badge className="bg-fresh-green/90 text-black text-xs">
                              <Zap className="h-3 w-3 mr-1" />
                              Ready
                            </Badge>
                          )}
                        </div>
                        <p className="text-gray-300 text-sm mb-2">{item.description}</p>
                        <div className="flex items-center gap-4">
                          <span className="font-bold text-white">${item.price}</span>
                          <div className="flex items-center gap-1 text-sm">
                            <Clock className="h-3 w-3 text-gray-400" />
                            <span className={item.isReady ? 'text-fresh-green' : 'text-gray-400'}>
                              {item.prepTime}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Add to cart controls */}
                    <div className="flex items-center gap-3">
                      {cart[item.id] > 0 ? (
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => removeFromCart(item.id)}
                            className="h-8 w-8 p-0 border-purple-500/30"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="text-white font-medium w-8 text-center">
                            {cart[item.id]}
                          </span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => addToCart(item.id)}
                            className="h-8 w-8 p-0 border-purple-500/30"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      ) : (
                        <Button
                          size="sm"
                          onClick={() => addToCart(item.id)}
                          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                        >
                          <Plus className="h-4 w-4 mr-1" />
                          Add
                        </Button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="info" className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Contact Information</h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span>(555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>123 Food Street, Downtown District</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Hours</h3>
                  <div className="space-y-1 text-gray-300">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>11:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday - Sunday</span>
                      <span>10:00 AM - 11:00 PM</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Specialties</h3>
                  <div className="flex flex-wrap gap-2">
                    {restaurant.specialties.map((specialty: string) => (
                      <Badge key={specialty} variant="outline" className="border-purple-500/30 text-purple-300">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="p-6">
              <div className="space-y-4">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Star className="h-6 w-6 text-yellow-400 fill-current" />
                    <span className="text-2xl font-bold text-white">{restaurant.rating}</span>
                  </div>
                  <p className="text-gray-300">Based on {restaurant.reviews} reviews</p>
                </div>

                {/* Sample reviews */}
                {[
                  { name: "Sarah M.", rating: 5, comment: "Amazing food and super fast service! The real-time updates are a game changer.", time: "2 hours ago" },
                  { name: "Mike R.", rating: 4, comment: "Great pasta, though it was a bit busy. Love the seat availability feature.", time: "1 day ago" },
                  { name: "Emma L.", rating: 5, comment: "Perfect for lunch breaks. Ordered ahead and it was ready exactly when promised!", time: "2 days ago" }
                ].map((review, index) => (
                  <div key={index} className="p-4 rounded-lg bg-purple-900/20 border border-purple-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white">{review.name}</span>
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <span className="text-gray-400 text-sm">{review.time}</span>
                    </div>
                    <p className="text-gray-300">{review.comment}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Floating Cart */}
        {getTotalItems() > 0 && (
          <motion.div 
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="glass rounded-2xl p-4 flex items-center gap-4 glow-green">
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5 text-fresh-green" />
                <span className="text-white font-medium">
                  {getTotalItems()} items
                </span>
              </div>
              <div className="text-white font-bold">
                ${getTotalPrice().toFixed(2)}
              </div>
              <Button className="bg-gradient-to-r from-fresh-green to-blue-400 hover:from-green-400 hover:to-blue-500 text-black">
                Checkout
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}