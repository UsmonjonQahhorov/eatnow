import { motion } from 'motion/react'
import { Button } from './ui/button'
import { 
  Download, 
  Smartphone, 
  Apple, 
  Chrome,
  Star,
  CheckCircle,
  Zap,
  Clock,
  Users,
  QrCode
} from 'lucide-react'


interface DownloadPageProps {
  onViewChange: (view: string) => void
}

const features = [
  {
    icon: Zap,
    title: 'Real-time Updates',
    description: 'Get instant notifications when your table is ready or order is prepared'
  },
  {
    icon: Clock,
    title: 'Smart Pre-ordering',
    description: 'Order ahead and skip the wait with accurate timing predictions'
  },
  {
    icon: Users,
    title: 'Live Seating Info',
    description: 'See available tables and reserve your spot before arriving'
  }
]

const reviews = [
  {
    name: 'Jennifer M.',
    rating: 5,
    comment: 'Game changer for busy professionals! I save 20 minutes every lunch break.',
    role: 'Marketing Manager'
  },
  {
    name: 'David L.',
    rating: 5,
    comment: 'The real-time updates are incredibly accurate. Never had to wait unnecessarily again.',
    role: 'Software Engineer'
  },
  {
    name: 'Maria R.',
    rating: 5,
    comment: 'Love being able to see which restaurants have open tables. Perfect for group lunches!',
    role: 'Project Manager'
  }
]

export function DownloadPage({ onViewChange }: DownloadPageProps) {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative mx-auto w-64 h-64 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Phone mockup */}
            <div className="relative z-10 w-48 h-64 mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-2 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-purple-900 via-blue-900 to-green-900 rounded-2xl overflow-hidden relative">
                {/* Screen content simulation */}
                <div className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-4 bg-fresh-green/80 rounded"></div>
                    <div className="w-8 h-4 bg-white/60 rounded"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-3 bg-white/40 rounded"></div>
                    <div className="w-3/4 h-3 bg-white/30 rounded"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-16 bg-purple-600/60 rounded-lg"></div>
                    <div className="h-16 bg-blue-600/60 rounded-lg"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="w-full h-2 bg-white/20 rounded"></div>
                    <div className="w-2/3 h-2 bg-white/20 rounded"></div>
                  </div>
                </div>
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-fresh-green/20 to-blue-500/20 animate-pulse"></div>
              </div>
            </div>
            
            {/* Floating icons */}
            <motion.div
              className="absolute top-8 -left-8 w-12 h-12 bg-fresh-green/20 rounded-xl flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap className="h-6 w-6 text-fresh-green" />
            </motion.div>
            <motion.div
              className="absolute top-16 -right-8 w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            >
              <Clock className="h-6 w-6 text-blue-400" />
            </motion.div>
            <motion.div
              className="absolute bottom-16 -left-4 w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: 1 }}
            >
              <Users className="h-6 w-6 text-purple-400" />
            </motion.div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-white">Download </span>
            <span className="gradient-text">EatNow</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Take the power of real-time restaurant data with you. Never waste time waiting again.
          </motion.p>

          {/* Download buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-xl flex items-center gap-3 transition-all duration-300 hover:scale-105"
            >
              <Apple className="h-6 w-6" />
              <div className="text-left">
                <div className="text-xs text-gray-300">Download on the</div>
                <div className="font-semibold">App Store</div>
              </div>
            </Button>
            <Button 
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl flex items-center gap-3 transition-all duration-300 hover:scale-105"
            >
              <Chrome className="h-6 w-6" />
              <div className="text-left">
                <div className="text-xs text-green-100">Get it on</div>
                <div className="font-semibold">Google Play</div>
              </div>
            </Button>
          </motion.div>

          {/* QR Code option */}
          <motion.div 
            className="inline-flex items-center gap-3 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <QrCode className="h-5 w-5" />
            <span>Or scan QR code to download</span>
          </motion.div>
        </motion.div>

        {/* App Features */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Everything You Need in Your Pocket
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="glass rounded-2xl p-8 text-center"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* User Reviews */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                className="glass rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{review.name}</div>
                    <div className="text-gray-400 text-sm">{review.role}</div>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{review.comment}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="glass rounded-2xl p-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-fresh-green mb-2">50K+</div>
              <div className="text-gray-300">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">4.9</div>
              <div className="text-gray-300">App Store Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">12M</div>
              <div className="text-gray-300">Minutes Saved</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-gray-300">Partner Restaurants</div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="glass rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Dining Experience?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who've already discovered the future of dining. 
              Download EatNow today and never waste time waiting again.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-gradient-to-r from-fresh-green to-blue-400 hover:from-green-400 hover:to-blue-500 text-black px-8 py-3 glow-green"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Now
              </Button>
              <Button 
                variant="outline" 
                onClick={() => onViewChange('restaurants')}
                className="border-purple-500/30 text-white hover:bg-purple-600/20 px-8 py-3"
              >
                Explore Web Version
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}