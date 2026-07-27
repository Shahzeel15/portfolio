import { motion } from 'framer-motion'
import { 
  Code2, 
  Database, 
  Layout, 
  Server, 
  Smartphone, 
  Cloud, 
  Mail, 
  Link,
  GitBranch,
  X,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Zap,
  Target,
  Award,
  BookOpen,
  Briefcase
} from 'lucide-react'
import { useState } from 'react'

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  const skills = [
    { name: 'Python', level: 95, icon: <Zap className="w-6 h-6" /> },
    { name: 'Flask/Django', level: 90, icon: <Server className="w-6 h-6" /> },
    { name: 'LLM/RAG', level: 92, icon: <Code2 className="w-6 h-6" /> },
    { name: 'PostgreSQL', level: 88, icon: <Database className="w-6 h-6" /> },
    { name: 'LangChain', level: 85, icon: <Layout className="w-6 h-6" /> },
    { name: 'Docker', level: 80, icon: <Cloud className="w-6 h-6" /> },
    { name: 'REST APIs', level: 90, icon: <Server className="w-6 h-6" /> },
  ]

  const experiences = [
    {
      title: 'Backend Engineer',
      company: 'Evital Rx',
      period: 'Jan 2025 – Present',
      description: 'Recognized as Employee of the Month for outstanding contributions in developing and maintaining Sahaai features. Built Sahaai Analytics & Alerting Platform with dynamic chart builder, query engine, and anomaly detection system. Developed EVA AI Assistant using RAG, ChromaDB, and Gemini for product support workflows.',
      icon: <Briefcase className="w-6 h-6" />
    }
  ]

  const education = [
    {
      degree: 'M.Sc. CA & IT',
      institution: 'K.S. School Of Business Management, Gujarat University',
      period: '2023 – 2025',
      description: 'Gold Medal – 74th Gujarat University Annual Convocation (4.09 out of 5)',
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      degree: 'B.Sc. CA & IT',
      institution: 'K.S. School Of Business Management, Gujarat University',
      period: '2020 – 2023',
      description: 'Academic excellence with 4.07 out of 5 GPA',
      icon: <BookOpen className="w-6 h-6" />
    }
  ]

  const projects = [
    {
      title: 'Stock Trend Prediction System',
      description: 'Stock prediction system using machine learning models with real-time market data and news API integration. Developed interactive dashboards and sentiment analysis of financial news.',
      tech: ['Python', 'Machine Learning', 'Streamlit'],
      image: '�'
    },
    {
      title: 'AI ChatFusion',
      description: 'Multi-modal AI platform integrating chatbot, document processing, and media analysis. Supports PDFs, images, audio, and YouTube content in a unified interface.',
      tech: ['Python', 'AI/LLM', 'LangChain'],
      image: '🤖'
    },
    {
      title: 'Sahaai Analytics Platform',
      description: 'Dynamic chart builder and query engine supporting configurable chart types, 10+ modules, date ranges, and user-defined dashboards for business analytics.',
      tech: ['Python', 'ECharts', 'PostgreSQL'],
      image: '📊'
    },
    {
      title: 'EVA AI Assistant',
      description: 'RAG-based multilingual AI assistant using ChromaDB and Gemini for product support workflows with agentic AI capabilities using MCP and Claude.',
      tech: ['Python', 'RAG', 'ChromaDB'],
      image: '🧠'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 glass"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              className="text-2xl font-bold text-gradient"
              whileHover={{ scale: 1.05 }}
            >
              ZS
            </motion.div>
            <div className="flex gap-6">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors relative group"
                  whileHover={{ scale: 1.1 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1 glow">
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-6xl">
                👨‍💻
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            <span className="text-gradient">Zeel Shah</span>
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl text-gray-300 mb-8"
          >
            Python Backend & <span className="text-accent">AI Developer</span>
          </motion.p>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 justify-center mb-12"
          >
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#projects"
              className="px-8 py-4 glass rounded-full font-semibold hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-6 justify-center"
          >
            {[
              { icon: <GitBranch className="w-6 h-6" />, href: 'https://github.com/shahzeel15' },
              { icon: <Link className="w-6 h-6" />, href: 'https://linkedin.com/in/zeel-shah-4b3b0a210' },
              { icon: <Mail className="w-6 h-6" />, href: 'mailto:szeel1694@gmail.com' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="p-3 glass rounded-full hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronRight className="w-8 h-8 text-gray-400 rotate-90" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-gradient">About Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants} className="glass p-8 rounded-3xl">
              <div className="text-6xl mb-6 text-center">🚀</div>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                Python Backend and AI Developer with hands-on experience building production-grade systems and real-world AI solutions. Skilled in designing configurable query engines, alerting systems, and analytics pipelines.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                Experienced in building multi-modal AI applications using LLMs, RAG, MCP, and agentic workflows. Comfortable owning features end-to-end from database queries and backend design to AI integration.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              {[
                { icon: <Target className="w-8 h-8" />, label: 'Projects Completed', value: '50+' },
                { icon: <Award className="w-8 h-8" />, label: 'Years Experience', value: '5+' },
                { icon: <Sparkles className="w-8 h-8" />, label: 'Happy Clients', value: '30+' },
                { icon: <Zap className="w-8 h-8" />, label: 'Technologies', value: '15+' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="glass p-6 rounded-2xl text-center hover:bg-white/10 transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-primary mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-gradient">Skills & Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass p-6 rounded-2xl hover:bg-white/10 transition-all group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl">
                    <div className="text-white">{skill.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
                  />
                </div>
                <div className="text-right text-sm text-gray-400 mt-2">{skill.level}%</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-gradient">Experience & Education</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Briefcase className="text-primary" />
                Work Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="glass p-6 rounded-2xl relative hover:bg-white/10 transition-all group"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent rounded-l-2xl" />
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl">
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-1">{exp.title}</h4>
                        <p className="text-primary mb-2">{exp.company}</p>
                        <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                        <p className="text-gray-300">{exp.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <BookOpen className="text-secondary" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="glass p-6 rounded-2xl relative hover:bg-white/10 transition-all group"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary to-accent rounded-l-2xl" />
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-br from-secondary to-accent rounded-xl">
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-1">{edu.degree}</h4>
                        <p className="text-secondary mb-2">{edu.institution}</p>
                        <p className="text-gray-400 text-sm mb-3">{edu.period}</p>
                        <p className="text-gray-300">{edu.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-gradient">Featured Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center text-8xl">
                  {project.image}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <motion.button
                    className="flex items-center gap-2 text-accent hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-gradient">Get In Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-3xl"
          >
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <motion.a
                href="mailto:szeel1694@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/10 transition-all group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="p-4 bg-gradient-to-br from-primary to-secondary rounded-xl">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="text-lg font-semibold group-hover:text-primary transition-colors">
                    szeel1694@gmail.com
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="tel:9328254121"
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/10 transition-all group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="p-4 bg-gradient-to-br from-secondary to-accent rounded-xl">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Phone</div>
                  <div className="text-lg font-semibold group-hover:text-secondary transition-colors">
                    +91 9328254121
                  </div>
                </div>
              </motion.a>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focusBorder-primary transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea
                  rows={5}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focusBorder-primary transition-colors resize-none"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-primary to-secondary rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-400"
          >
            © 2024 Zeel Shah. Built with ❤️ using React & Framer Motion
          </motion.p>
        </div>
      </footer>
    </div>
  )
}

export default App
