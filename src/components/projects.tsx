export default function Projects() {
  const projects = [
    {
      name: "Stardust",
      period: "May 2023 — July 2023",
      filename: "stardust.js",
      description: "NPM Package for Web3 wallet connections and transactions",
      technologies: [
        { name: "React", color: "bg-blue-900/50 text-blue-300" },
        { name: "Web3", color: "bg-purple-900/50 text-purple-300" },
        { name: "wagmi.sh", color: "bg-green-900/50 text-green-300" }
      ],
      features: [
        "Secure web3 wallet transactions",
        "Customizable themes",
        "Configuration file support"
      ]
    },
    {
      name: "Actron Air",
      period: "Nov 2022 — Jan 2023",
      filename: "actron-air.js",
      description: "Alexa voice application for AC control",
      technologies: [
        { name: "Alexa Skills", color: "bg-orange-900/50 text-orange-300" },
        { name: "OAuth", color: "bg-blue-900/50 text-blue-300" },
        { name: "AWS", color: "bg-yellow-900/50 text-yellow-300" }
      ],
      features: [
        "OAuth authentication system",
        "Device discovery mechanism",
        "Voice control for all functions"
      ]
    },
    {
      name: "Blade - Situational Awareness",
      period: "Oct 2022 — July 2023",
      filename: "blade-awareness.py",
      description: "Real-time communication for military units",
      technologies: [
        { name: "React", color: "bg-blue-900/50 text-blue-300" },
        { name: "Flask", color: "bg-green-900/50 text-green-300" },
        { name: "WebSockets", color: "bg-red-900/50 text-red-300" }
      ],
      features: [
        "Interactive mapping system",
        "P2P network architecture",
        "Real-time messaging"
      ]
    },
    {
      name: "Omnipolis",
      period: "Sept 2021 — Sept 2022",
      filename: "omnipolis.ts",
      description: "Emergency response dashboard",
      technologies: [
        { name: "Angular", color: "bg-red-900/50 text-red-300" },
        { name: "AWS Lambda", color: "bg-yellow-900/50 text-yellow-300" },
        { name: "AWS SNS", color: "bg-green-900/50 text-green-300" }
      ],
      features: [
        "Emergency dashboard",
        "Advanced mapping",
        "Automated notifications"
      ]
    },
    {
      name: "GoGames",
      period: "Sept 2021 — Sept 2022",
      filename: "gogames.angular",
      description: "Tournament platform with e-commerce",
      technologies: [
        { name: "Angular", color: "bg-red-900/50 text-red-300" },
        { name: "Tournament System", color: "bg-blue-900/50 text-blue-300" },
        { name: "E-commerce", color: "bg-green-900/50 text-green-300" }
      ],
      features: [
        "1,000+ user authentication",
        "Tournament registration",
        "Integrated CMS"
      ]
    },
    {
      name: "BigFDay",
      period: "Nov 2018 — Jan 2020",
      filename: "bigfday.net",
      description: "Event hosting platform",
      technologies: [
        { name: "ASP.NET", color: "bg-purple-900/50 text-purple-300" },
        { name: "Angular", color: "bg-red-900/50 text-red-300" },
        { name: "Jenkins", color: "bg-yellow-900/50 text-yellow-300" }
      ],
      features: [
        "Session management",
        "Airtable integration",
        "CI/CD automation"
      ]
    }
  ]

  return (
    <section id="projects" className="py-20 bg-terminal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-16 text-primary">
          <span className="text-gray-500"># </span>Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="code-block rounded-lg border border-green-400/30 overflow-hidden hover:border-primary/50 transition-colors">
              <div className="bg-terminalGray px-4 py-2 border-b border-green-400/30">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 text-xs ml-2">{project.filename}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-accent">{project.name}</h3>
                  <span className="text-xs text-gray-500">{project.period}</span>
                </div>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={`px-2 py-1 rounded text-xs ${tech.color}`}>
                      {tech.name}
                    </span>
                  ))}
                </div>
                <div className="text-xs text-gray-400 space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex}>• {feature}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
