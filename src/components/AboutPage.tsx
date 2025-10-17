import { motion } from 'motion/react'
import { Button } from './ui/button'
import { 
  Zap, 
  Clock, 
  Users, 
  TrendingUp, 
  Target,
  Award,
  Lightbulb,
  Heart
} from 'lucide-react'

interface AboutPageProps {
  onViewChange: (view: string) => void
}

const stats = [
  { label: 'Minutes Saved Daily', value: '12M+', icon: Clock },
  { label: 'Happy Users', value: '50K+', icon: Users },
  { label: 'Partner Restaurants', value: '500+', icon: TrendingUp },
  { label: 'Cities Covered', value: '15', icon: Target }
]

const team = [
  { name: 'Alex Chen', role: 'CEO & Co-founder', background: 'Former Google Product Manager' },
  { name: 'Sarah Kim', role: 'CTO & Co-founder', background: 'Ex-Uber Engineering Lead' },
  { name: 'Marcus Johnson', role: 'Head of Partnerships', background: 'Restaurant Industry Veteran' }
]

export function AboutPage({ onViewChange }: AboutPageProps) {
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
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white">Revolutionizing </span>
            <span className="gradient-text">Lunch Breaks</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            EatNow was born from a simple frustration: wasting precious lunch time waiting in lines and for tables. 
            We're building the future where every minute of your break counts.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
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
                <stat.icon className="h-8 w-8 text-fresh-green" />
              </div>
              <div className="text-2xl font-bold text-fresh-green mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Story Section */}
        <motion.div 
          className="glass rounded-2xl p-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  It started with a simple question: "Why do we still wait in uncertainty for our food?" 
                  In 2023, our founders Alex and Sarah were frustrated by yet another lunch break wasted 
                  standing in line, not knowing if their usual spot had available tables.
                </p>
                <p>
                  They realized that in an age of real-time everything – from ride-sharing to package tracking – 
                  the restaurant industry was still operating in the dark ages of "it'll be ready when it's ready."
                </p>
                <p>
                  EatNow bridges this gap by providing real-time visibility into restaurant operations, 
                  giving diners the power to make informed decisions and restaurants the tools to serve customers better.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-purple-600 via-blue-600 to-green-600 p-8 flex items-center justify-center">
                <div className="text-center text-white">
                  <Lightbulb className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">The Idea</h3>
                  <p>Real-time restaurant data for smarter dining decisions</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div 
            className="glass rounded-2xl p-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-purple-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-gray-300 mb-4">
              To eliminate waiting and uncertainty from the dining experience by connecting 
              diners with real-time restaurant data, making every lunch break more efficient and enjoyable.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Efficiency', 'Transparency', 'Customer-First'].map((value) => (
                <span key={value} className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">
                  {value}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="glass rounded-2xl p-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="flex items-center mb-6">
              <Award className="h-8 w-8 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Our Vision</h2>
            </div>
            <p className="text-gray-300 mb-4">
              A world where dining out is frictionless, where every restaurant operates with 
              complete transparency, and where technology enhances rather than complicates the human experience.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Innovation', 'Sustainability', 'Community'].map((value) => (
                <span key={value} className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">
                  {value}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="glass rounded-2xl p-6 text-center"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-purple-300 mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.background}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div 
          className="glass rounded-2xl p-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">Why We Do This</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="h-12 w-12 text-fresh-green mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Time is Precious</h3>
              <p className="text-gray-300">
                Your lunch break should be about enjoying food and recharging, not waiting in uncertainty.
              </p>
            </div>
            <div className="text-center">
              <Zap className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Technology for Good</h3>
              <p className="text-gray-300">
                We believe technology should solve real problems and make life genuinely better.
              </p>
            </div>
            <div className="text-center">
              <Heart className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Restaurant Partners</h3>
              <p className="text-gray-300">
                We help restaurants serve customers better while reducing waste and improving efficiency.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <div className="glass rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Lunch Break?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who've already discovered the future of dining. 
              No more waiting, just eating.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => onViewChange('download')}
                className="bg-gradient-to-r from-fresh-green to-blue-400 hover:from-green-400 hover:to-blue-500 text-black px-8 py-3 glow-green"
              >
                <Zap className="h-5 w-5 mr-2" />
                Download EatNow
              </Button>
              <Button 
                variant="outline" 
                onClick={() => onViewChange('restaurants')}
                className="border-purple-500/30 text-white hover:bg-purple-600/20 px-8 py-3"
              >
                Explore Restaurants
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}