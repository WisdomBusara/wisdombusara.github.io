import React from 'react';
import { ThemeProvider } from 'next-themes';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Portfolio() {
  return (
    <ThemeProvider attribute="class">
      <div className="flex flex-col min-h-screen font-sans bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <Head>
          <title>Ian Mwaura Kimani | Systems Analyst Portfolio</title>
          <meta name="description" content="Portfolio website of Ian Mwaura Kimani – Systems Analyst specialising in Core Banking, SWIFT, and Cloud Solutions." />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Sidebar Navigation + Toggle */}
        <aside className="bg-gray-900 text-white p-4 w-full md:w-1/4 md:min-h-screen sticky top-0">
          <div className="flex flex-col items-center">
            <img src="/ian-photo.jpg" alt="Ian Mwaura Kimani" className="rounded-full w-32 h-32 mb-4 border-4 border-teal-400 animate-pulse" />
            <h1 className="text-2xl font-bold">Ian Mwaura Kimani</h1>
            <p className="text-teal-400">Systems Analyst | Core Banking & SWIFT | Cloud & Automation Enthusiast</p>
            <nav className="mt-6 space-y-2">
              <motion.a href="#about" whileHover={{ scale: 1.05 }} className="hover:text-teal-400 block">About</motion.a>
              <motion.a href="#experience" whileHover={{ scale: 1.05 }} className="hover:text-teal-400 block">Experience</motion.a>
              <motion.a href="#projects" whileHover={{ scale: 1.05 }} className="hover:text-teal-400 block">Projects</motion.a>
              <motion.a href="#skills" whileHover={{ scale: 1.05 }} className="hover:text-teal-400 block">Skills</motion.a>
              <motion.a href="#contact" whileHover={{ scale: 1.05 }} className="hover:text-teal-400 block">Contact</motion.a>
            </nav>
            <button className="mt-4 bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition">Toggle Theme</button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="p-6 md:ml-1/4 space-y-12">
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} id="about">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p>Results-driven Systems Analyst with expertise in Finacle Core Banking, Treasury, AML, and SWIFT systems, passionate about cloud solutions and automation.</p>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} id="experience">
            <h2 className="text-3xl font-bold mb-4">Experience</h2>
            <p>Details about ABC Bank, KENEX, and Redlands Roses experience coming soon.</p>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} id="projects">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <p>Finacle Script Automation, SWIFT Regional Support, Hybrid IT Infrastructure Upgrade, and more.</p>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }} id="skills">
            <h2 className="text-3xl font-bold mb-4">Skills</h2>
            <p>Finacle Core, Treasury, AML, SWIFT Systems, SQL, NoSQL, C#, Java, REST APIs, JasperReports, Microsoft Azure, VMware, Hyper-V, React.js, Vue.js.</p>
          </motion.section>

          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.8 }} id="contact">
            <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
            <form name="contact" method="POST" data-netlify="true" className="space-y-4">
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <label className="block mb-1">Name</label>
                <input type="text" name="name" required className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
              </div>
              <div>
                <label className="block mb-1">Email</label>
                <input type="email" name="email" required className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
              </div>
              <div>
                <label className="block mb-1">Message</label>
                <textarea name="message" required className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"></textarea>
              </div>
              <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition">Send</button>
            </form>

            <p className="mt-6">Alternatively, email me directly at <a href="mailto:ianmwaura@gmail.com" className="text-teal-400">ianmwaura@gmail.com</a></p>
          </motion.section>
        </main>
      </div>
    </ThemeProvider>
  );
}

// ✅ **Final code ready for deployment.** Follow previous build and deploy instructions to push live today.
