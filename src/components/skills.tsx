export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "TypeScript", level: "████████░░" },
        { name: "Python", level: "█████████░" },
        { name: "Java", level: "███████░░░" },
        { name: "C#", level: "██████░░░░" }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", level: "█████████░" },
        { name: "Angular", level: "████████░░" },
        { name: "Svelte", level: "██████░░░░" },
        { name: "NextJS", level: "███████░░░" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "NodeJS", level: "████████░░" },
        { name: "Flask", level: "███████░░░" },
        { name: "Django", level: "██████░░░░" },
        { name: "ASP.NET", level: "█████░░░░░" }
      ]
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "AWS", level: "████████░░" },
        { name: "Docker", level: "███████░░░" },
        { name: "Jenkins", level: "██████░░░░" },
        { name: "MongoDB", level: "███████░░░" }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-terminal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-16 text-primary">
          <span className="text-gray-500"># </span>Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="code-block p-6 rounded-lg border border-green-400/30">
              <h3 className="text-lg font-bold mb-4 text-accent">{category.title}</h3>
              <div className="space-y-2 text-sm">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between">
                    <span>{skill.name}</span>
                    <span className="text-primary">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
