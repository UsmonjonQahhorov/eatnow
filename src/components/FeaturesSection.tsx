import { motion } from 'motion/react'
import { 
  Clock, 
  Users, 
  ShoppingBag, 
  Brain, 
  Map, 
  Zap,
  CheckCircle,
  TrendingUp
} from 'lucide-react'

const features = [
  {
    icon: Clock,
    title: 'Real-time Meal Readiness',
    description: 'See exactly how long until your food is ready at each restaurant. No more guessing games.',
    highlight: '3.2 min avg wait',
    color: 'from-logo-orange to-warm-yellow',
    glowColor: 'glow-orange'
  },
  {
    icon: Users,
    title: 'Live Seating Availability',
    description: 'Check available tables in real-time. Reserve your spot before you arrive.',
    highlight: '89 seats available',
    color: 'from-warm-yellow to-orange-400',
    glowColor: 'glow-yellow'
  },
  {
    icon: ShoppingBag,
    title: 'Pre-order & Pickup',
    description: 'Order in advance and skip the waiting line. Your food will be ready when you arrive.',
    highlight: 'Skip the wait',
    color: 'from-tomato-red to-red-500',
    glowColor: 'glow-red'
  },
  {
    icon: Brain,
    title: 'Smart Recommendations',
    description: 'AI-powered suggestions based on your location, time constraints, and preferences.',
    highlight: '95% accuracy',
    color: 'from-orange-500 to-logo-orange',
    glowColor: 'glow-orange'
  },
  {
    icon: Map,
    title: 'Interactive Live Map',
    description: 'Explore restaurants on an interactive map with real-time data overlays.',
    highlight: '156 restaurants',
    color: 'from-yellow-500 to-warm-yellow',
    glowColor: 'glow-yellow'
  },
  {
    icon: Zap,
    title: 'Instant Updates',
    description: 'Get notified the moment your table is ready or your order is prepared.',
    highlight: 'Real-time alerts',
    color: 'from-red-500 to-tomato-red',
    glowColor: 'glow-red'
  }
]

export function FeaturesSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-logo-orange rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-warm-yellow rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-40 right-20 w-48 h-48 bg-tomato-red rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-cream-white">Revolutionary </span>
            <span className="gradient-text">Features</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-warm-gray max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Experience the future of dining with our cutting-edge technology that eliminates waiting and maximizes your lunch break.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`glass rounded-2xl p-8 relative overflow-hidden group hover:${feature.glowColor} transition-all duration-500`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Icon */}
              <motion.div 
                className={`relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} mb-6`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="h-8 w-8 text-white" />
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-cream-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-warm-gray mb-4 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Highlight badge */}
                <motion.div 
                  className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${feature.color} text-cream-white text-sm font-medium`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  {feature.highlight}
                </motion.div>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-logo-orange/20 via-warm-yellow/20 to-tomato-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-cream-white mb-2">
                  Ready to revolutionize your lunch break?
                </h3>
                <p className="text-warm-gray">
                  Join thousands who already save time with EatNow's real-time restaurant data.
                </p>
              </div>
              <motion.button 
                className="bg-gradient-to-r from-fresh-green to-blue-400 hover:from-green-400 hover:to-blue-500 text-black px-8 py-4 rounded-xl font-bold whitespace-nowrap glow-green transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <TrendingUp className="h-5 w-5 mr-2 inline" />
                Start Saving Time
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}