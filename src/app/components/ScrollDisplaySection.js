






'use client'

import { useEffect, useRef, useState } from 'react'
import { usePop } from '../context/PopUpCOntext'
const ScrollDisplay = () => {
  const { setShowPopUp } = usePop()
  const [activeLink, setActiveLink] = useState('system')
  const sectionRefs = useRef({})

  const sections = [
  {
    id: 'system',
    title: '01 SYSTEM',
    content: (
      <div className="bg-zinc-900 px-4 text-white py-10 md:py-20">
        <h2 className="text-3xl font-bold mb-3">Secure and Scalable AI System</h2>
        <p className="text-gray-300 mb-4">
          Our system is built from the ground up for both security and scale...
        </p>
        <p className="text-gray-300 mb-2">
          We follow a microservices architecture that allows...
        </p>
        <ul className="list-disc pl-5 text-gray-300">
          <li>ISO-compliant data encryption</li>
          <li>Real-time performance monitoring</li>
          <li>Scalable up to 1M+ users</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'performance',
    title: '02 PERFORMANCE',
    content: (
      <div className="bg-neutral-800 px-4 text-white py-10 md:py-20">
        <h2 className="text-3xl font-bold mb-3">Lightning-Fast Performance</h2>
        <p className="text-gray-300 mb-4">
          Built for speed, our platform operates with under 100ms...
        </p>
        <img className="my-6 w-full" alt="performance-dashboard" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyZm9ybWFuY2UlMjBkYXNoYm9hcmR8ZW58MHx8MHx8fDA%3D"  />
        <p className="text-gray-300">
          Whether you&apos;re processing real-time analytics...
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"  onClick={(()=>{
              setShowPopUp(true)
            })}>Join Waitlist</button>
      </div>
    ),
  },
  {
    id: 'technology',
    title: '03 TECHNOLOGY',
    content: (
      <div className="bg-gray-900 px-4 text-white py-10 md:py-20">
        <h2 className="text-3xl font-bold mb-3">Cutting-Edge Tech Stack</h2>
        <p className="text-gray-300 mb-2">
          We combine modern frameworks, cloud-native solutions...
        </p>
        <ul className="list-disc pl-5 text-gray-300 mb-4">
          <li>Frontend: React, Next.js with Tailwind CSS</li>
          <li>Backend: Node.js, Python (FastAPI)</li>
          <li>Database: PostgreSQL, Redis, MongoDB</li>
          <li>Infra: AWS Lambda, Docker, Kubernetes</li>
          <li>ML: TensorFlow, PyTorch, HuggingFace</li>
        </ul>
        <img src="https://media.istockphoto.com/id/1126907825/photo/double-exposure-business-logistics-concept-map-global-partner-connection-of-container-cargo.webp?a=1&b=1&s=612x612&w=0&k=20&c=moiCW5tsviVNTmBCtyNw6cHZc87Oj4NpCE_hqgJz9YQ=" className="w-full mt-6" alt="tech-stack-graph" />
      </div>
    ),
  },
  {
    id: 'ai-team',
    title: '04 AI TEAM',
    content: (
      <div className="bg-slate-800 px-4 text-white py-10 md:py-20" id="team">
        <h2 className="text-3xl font-bold mb-3">Meet the People Behind the AI</h2>
        <p className="text-gray-300 mb-4">
Our team includes researchers, engineers, and designers from world-renowned institutions and
        companies like MIT, OpenAI, Meta AI, and Google Brain. With a diverse background in deep learning,
        cloud infrastructure, product design, and systems engineering, they bring visionary ideas to life.        </p>
     <div className="grid grid-cols-2 mt-6 md:grid-cols-4 gap-6">
          {[
                        { name: 'Aisha Bello', role: 'Head of AI Research', img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXwVc09FmnGPHJYyWpKFIuhNu_udk159-iaQ&s" },

            { name: 'Carlos Mendes', role: 'Full-Stack Engineer' ,img:"data:image/jpeg;base64,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" },
            { name: 'Fatima Zhang', role: 'Product Designer', img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkj387Z3jbUVbvpZncxd7r_70sHo-kHaIvqQ&s"},
            { name: 'David Olumide', role: 'Cloud DevOps Engineer' , img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtVgb8qdHwvZ7OUP_KS5iHEUa1n_2QI3r22g&s" },
            { name: 'Sara Novak', role: 'NLP Scientist', img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGBIZjaEzX4z2_O-q7x2lBALNNX1axMw7xPA&s" },
            { name: 'Michael Tan', role: 'Backend Architect', img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVGa5rCSEw91b7Tq07Ju8cNBjCFas5zwSOGg&s"},
          ].map((person, i) => (
            <div key={i} className="text-center border rounded-lg bg-black pb-2">
              <img
                src={person.img}
                alt={person.name}
                className=" h-[200px] rounded-lg w-full object-cover mx-auto mb-2"
              />
              <h4 className="font-bold text-white">{person.name}</h4>
              <p className="text-sm text-gray-500">{person.role}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'integrations',
    title: '05 INTEGRATIONS',
    content: (
      <div className="bg-neutral-900 px-4 text-white py-10 md:py-20" id="integration">
        <h2 className="text-3xl font-bold mb-3">Seamless Integrations</h2>
        <p className="text-gray-300 mb-2">
          Connect your favorite tools in seconds...
        </p>
        <ul className="grid grid-cols-2 gap-2 list-disc pl-5 text-gray-300 mb-4">
          <li>Slack</li><li>Notion</li><li>Zapier</li>
          <li>Jira</li><li>Figma</li><li>Github</li>
        </ul>
        <img className="w-full mt-6" src="https://media.istockphoto.com/id/2206372993/photo/financial-trading-monitor-with-price-data-bar-graph-and-rare-metals-ingots.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q-YmiK0H6xYo5RYnxNTO8L1ERD0LuL28mT5cmnYIFyw=" alt="Integration logos"  />
      </div>
    ),
  },
  {
    id: 'pricing',
    title: '06 PRICING',
    content: (
      <div className="bg-gray-800 px-4 text-white py-10 md:py-20" id="pricing">
        <h2 className="text-3xl font-bold mb-3">Simple, Transparent Pricing</h2>
        <p className="text-gray-300 mb-4">
          No hidden fees. Choose the plan that fits your workflow...
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-gray-700 rounded bg-gray-900">
            <h3 className="font-bold text-xl mb-2">Free Tier</h3>
            <p className="text-gray-300 mb-2">Ideal for individuals and small projects.</p>
            <ul className="list-disc pl-5 text-gray-300 text-sm">
              <li>100 AI requests/month</li>
              <li>Email support</li>
              <li>Community access</li>
            </ul>
          </div>
          <div className="p-4 border border-gray-700 rounded bg-gray-700">
            <h3 className="font-bold text-xl mb-2">Pro Tier – $29/month</h3>
            <p className="text-gray-200 mb-2">For teams and growing businesses.</p>
            <ul className="list-disc pl-5 text-gray-200 text-sm">
              <li>Unlimited requests</li>
              <li>Dedicated support</li>
              <li>Custom ML endpoints</li>
              <li>Early access to new features</li>
            </ul>
          </div>
        </div>
        <button className="mt-6 px-6 py-3 bg-white text-black rounded hover:bg-gray-200 transition"  onClick={(()=>{
              setShowPopUp(true)
            })}>
          Join Waitlist
        </button>
      </div>
    ),
  },
];


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id)
          }
        })
      },
      { threshold: 0.4 } // triggers when 40% of section is in view
    )

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => {
      Object.values(sectionRefs.current).forEach((section) => {
        if (section) observer.unobserve(section)
      })
    }
  }, [])

  return (
    <main className="px-4 md:px-6 max-w-screen-2xl mx-auto">
      <div className="grid gap-6 md:grid-cols-5">
        {/* Sidebar */}
        <div className="top-16 md:top-20 md:col-span-1 sticky  h-fit z-10 bg-black/30 md:bg-transparent backdrop-blur-md md:backdrop-blur-0 rounded md:rounded-none p-2 md:p-0">
          <ul className="grid grid-cols-2 items-center justify-center md:grid md:grid-cols-1 md:w-full  gap-3 md:gap-4 overflow-x-auto md:flex-col md:overflow-x-hidden whitespace-nowrap">
            {sections.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer transition-all duration-200 text-sm font-medium ${
                  activeLink === item.id
                    ? 'text-white border-b-2 border-white md:border-b-0 md:border-l-4 md:pl-2'
                    : 'text-white/40 hover:text-white/70'
                }`}
                onClick={() => {
                  const el = document.getElementById(item.id)
                  el?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Content Sections */}
        <div className="md:col-span-4 space-y-10">
          {sections.map((item, index) => (
            <section
              key={index}
              id={item.id}
              ref={(el) => (sectionRefs.current[item.id] = el)}
              className="scroll-mt-28"
            >
              {item.content}
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}

export default ScrollDisplay
