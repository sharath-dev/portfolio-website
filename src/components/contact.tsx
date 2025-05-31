export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-terminalGray">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-16 text-primary">
          <span className="text-gray-500"># </span>Contact
        </h2>
        <div className="code-block p-8 rounded-lg border border-green-400/30">
          <div className="flex items-center mb-6">
            <span className="text-gray-500">$ </span>
            <span className="text-primary ml-2">curl -X GET https://api.sharath.dev/contact</span>
          </div>
          
          <div className="space-y-4 text-sm">
            <div className="text-green-400">
              <span className="text-blue-400">const</span> 
              <span className="text-yellow-400"> contactInfo</span> = {'{'}
            </div>
            <div className="ml-4 space-y-2">
              <div className="flex items-center">
                <span className="text-green-400 w-16">email:</span>
                <a href="mailto:sharathdev99@gmail.com" className="text-accent hover:text-primary transition-colors">
                  &quot;sharathdev99@gmail.com&quot;
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 w-16">phone:</span>
                <a href="tel:+13126844760" className="text-accent hover:text-primary transition-colors">
                  &quot;+1 (312) 684 4760&quot;
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 w-16">github:</span>
                <a href="https://github.com/sharath-dev" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary transition-colors">
                  &quot;github.com/sharath-dev&quot;
                </a>
              </div>
              {/* <div className="flex items-center">
                <span className="text-green-400 w-20">location:</span>
                <span className="text-orange-400">
                  &quot;Chicago, Illinois&quot;
                </span>
              </div> */}
            </div>
            <div className="text-green-400">{'};'}</div>
            
            <div className="mt-6 pt-6 border-t border-green-400/30">
              <div className="text-gray-400">
                <span className="text-purple-400">console</span>.<span className="text-blue-400">log</span>(<span className="text-orange-400">&quot;Always interested in new opportunities!&quot;</span>);
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a href="mailto:sharathdev99@gmail.com" className="bg-primary text-terminal px-6 py-3 rounded hover:bg-secondary transition-colors font-bold">
              {'>'} Send Message
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
