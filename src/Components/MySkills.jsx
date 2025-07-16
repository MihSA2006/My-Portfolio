import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Configuration des compétences
const skillCategories = {
  Frontend: {
    icon: "💻",
    skills: [
      {
        name: "ReactJS",
        percentage: 80,
        color: "#61DAFB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "TailwindCSS",
        percentage: 70,
        color: "#06B6D4",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s",
      },
      {
        name: "Sass/Scss",
        percentage: 90,
        color: "#CC6699",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
      },
    ]
  },
  Backend: {
    icon: "⚙️",
    skills: [
      {
        name: "Django",
        percentage: 70,
        color: "#092E20",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      },
      {
        name: "Express",
        percentage: 60,
        color: "#000000",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "Dotnet",
        percentage: 75,
        color: "#512BD4",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
      },
    ]
  },
  Mobile: {
    icon: "📱",
    skills: [
      {
        name: "React Native",
        percentage: 80,
        color: "#61DAFB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Android Java",
        percentage: 80,
        color: "#3DDC84",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
      },
    ]
  },
  Outils: {
    icon: "🛠️",
    skills: [
      {
        name: "Docker",
        percentage: 50,
        color: "#2496ED",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "Github",
        percentage: 90,
        color: "#181717",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
    ]
  },
  BasesDeDonnées: {
    icon: "🗄️",
    skills: [
      {
        name: "MySQL",
        percentage: 85,
        color: "#4479A1",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "PostgreSQL",
        percentage: 80,
        color: "#336791",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
    ]
  }
}

const ProgressRing = ({ percentage, color, children }) => {
  const [progress, setProgress] = useState(0)
  
  useEffect(() => {
    const animate = setTimeout(() => setProgress(percentage), 200)
    return () => clearTimeout(animate)
  }, [percentage])

  const radius = 40
  const stroke = 6
  const normalizedRadius = radius - stroke
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className="relative w-28 h-28 flex items-center justify-center">
      <svg height={radius * 2} width={radius * 2} className="transform -rotate-90">
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  )
}

const SkillCard = ({ skill }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div 
      className="relative bg-white rounded-xl shadow-lg overflow-hidden"
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-6 flex flex-col items-center">
        <ProgressRing percentage={skill.percentage} color={skill.color}>
          <img 
            src={skill.icon} 
            alt={skill.name} 
            className="w-10 h-10 object-contain transition-transform duration-300"
            style={{ transform: isHovered ? 'scale(1.2)' : 'scale(1)' }}
          />
        </ProgressRing>
        
        <h4 className="mt-4 font-semibold text-gray-800">{skill.name}</h4>
        <motion.div 
          className="w-full bg-gray-200 rounded-full h-2 mt-3"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div 
            className="h-2 rounded-full transition-all duration-1000"
            style={{ 
              width: `${skill.percentage}%`,
              backgroundColor: skill.color
            }}
          />
        </motion.div>
        <AnimatePresence>
          {isHovered && (
            <motion.span 
              className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white text-center py-2"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              {skill.percentage}% Maîtrise
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

const SkillCategory = ({ title, icon, skills, index }) => {
  const [isOpen, setIsOpen] = useState(index === 0)
  
  return (
    <motion.div 
      className="mb-8 bg-white bg-opacity-70 backdrop-blur-sm rounded-xl shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <button 
        className="w-full px-6 py-4 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <span className="text-2xl mr-3">{icon}</span>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-gray-600"
        >
          ▼
        </motion.span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
              {skills.map((skill, idx) => (
                <SkillCard key={idx} skill={skill} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const MySkills = () => {
  const [activeTab, setActiveTab] = useState('all')
  
  return (
    <section id="skills" className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-neutral-100">
      <div className="max-w-6xl mx-auto">
        {/* En-tête avec animation */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="md:text-4xl text-neutral-800 mb-4 text-center font-bold text-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Mes <span className="text-center font-bold text-4xl text-neutral-800">Compétences</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Technologies et outils que j'utilise pour créer des solutions performantes et innovantes.
          </motion.p>
          <motion.div 
            className="w-24 h-1.5 bg-gradient-to-r from-black to-neutral-400 rounded-full mx-auto mt-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "backOut" }}
          />
        </motion.div>

        {/* Filtres */}
        {/* <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          {['all', ...Object.keys(skillCategories)].map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                activeTab === category 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category === 'all' ? 'Toutes' : category}
            </button>
          ))}
        </motion.div> */}

        {/* Catégories de compétences */}
        <div className="space-y-6">
          {Object.entries(skillCategories).map(([category, {icon, skills}], index) => (
            (activeTab === 'all' || activeTab === category) && (
              <SkillCategory 
                key={category}
                title={category}
                icon={icon}
                skills={skills}
                index={index}
              />
            )
          ))}
        </div>

        {/* Note de bas de section */}
        <motion.div 
          className="mt-16 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <p>Les pourcentages représentent ma confiance et ma maîtrise de chaque technologie</p>
        </motion.div>
      </div>
    </section>
  )
}

export default MySkills