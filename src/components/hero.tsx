export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="pt-16 min-h-screen flex items-center bg-terminal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="code-block p-8 rounded-lg border border-green-400/30">
          <div className="flex items-center mb-6">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="ml-4 text-green-400 text-sm">terminal@portfolio:~$</span>
          </div>
          
          <div className="space-y-2 text-sm md:text-base">
            <div className="text-green-400">
              <span className="text-blue-400">const</span> 
              <span className="text-yellow-400"> developer</span> = {'{'}
            </div>
            <div className="ml-4 text-green-400">
              name: <span className="text-orange-400">&quot;Sharath Devasahayam&quot;</span>,
            </div>
            <div className="ml-4 text-green-400">
              role: <span className="text-orange-400">&quot;Full Stack Developer&quot;</span>,
            </div>
            <div className="ml-4 text-green-400">
              location: <span className="text-orange-400">&quot;Chicago, Illinois&quot;</span>,
            </div>
            <div className="ml-4 text-green-400">
              experience: <span className="text-orange-400">&quot;3+ years&quot;</span>,
            </div>
            <div className="ml-4 text-green-400">
              specialization: [<span className="text-orange-400">&quot;React&quot;, &quot;Node.js&quot;, &quot;Python&quot;, &quot;AWS&quot;</span>],
            </div>
            <div className="ml-4 text-green-400">
              passion: <span className="text-orange-400">&quot;Building scalable web applications&quot;</span>
            </div>
            <div className="text-green-400">{'};'}</div>
            <div className="mt-4 text-green-400">
              <span className="text-purple-400">console</span>.<span className="text-blue-400">log</span>(<span className="text-orange-400">&quot;Welcome to my portfolio!&quot;</span>);
            </div>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToProjects}
              className="bg-primary text-terminal px-6 py-3 rounded hover:bg-secondary transition-colors font-bold"
            >
              {'>'} View Projects
            </button>
            <button 
              onClick={scrollToContact}
              className="border border-primary text-primary px-6 py-3 rounded hover:bg-primary/10 transition-colors"
            >
              {'>'} Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
