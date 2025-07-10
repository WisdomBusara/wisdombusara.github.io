'use client';


import React from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Portfolio() {
  return (
    <div className="bg-gray-900 text-gray-300 font-sans">
      <Head>
        <title>Ian Mwaura Kimani | Systems Analyst Portfolio</title>
        <meta name="description" content="Portfolio website of Ian Mwaura Kimani – Systems Analyst specialising in Core Banking, SWIFT, and Cloud Solutions." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <nav className="bg-gray-800 px-6 py-4 flex justify-between items-center fixed w-full z-50">
        <h1 className="text-xl font-bold text-white">Ian Mwaura Kimani</h1>
        <div className="space-x-4">
          <a href="#about" className="text-gray-300 hover:text-teal-400">About</a>
          <a href="#experience" className="text-gray-300 hover:text-teal-400">Experience</a>
          <a href="#projects" className="text-gray-300 hover:text-teal-400">Projects</a>
          <a href="#skills" className="text-gray-300 hover:text-teal-400">Skills</a>
          <a href="#contact" className="text-gray-300 hover:text-teal-400">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-900 h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Ian Mwaura Kimani</h2>
        <p className="text-teal-400 text-xl mb-6">Systems Analyst | Core Banking & SWIFT | Cloud & Automation Enthusiast</p>
        <a href="#contact" className="bg-teal-500 text-white px-6 py-3 rounded-full hover:bg-teal-600 transition">Contact Me</a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-20 bg-gray-800">
        <h3 className="text-3xl font-bold mb-8 text-teal-400">About Me</h3>
        <p className="text-lg leading-relaxed">Results-driven Systems Analyst with expertise in Finacle Core Banking, Treasury, AML, and SWIFT systems, passionate about cloud solutions and automation.</p>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 md:px-20 bg-gray-900">
        <h3 className="text-3xl font-bold mb-8 text-teal-400">Experience</h3>
        <p>Details about ABC Bank, KENEX, and Redlands Roses experience coming soon.</p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-20 bg-gray-800">
        <h3 className="text-3xl font-bold mb-8 text-teal-400">Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-700 p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-2">Finacle Script Automation</h4>
            <p>Automated EOD processes, reduced manual interventions, and prevented income leakage.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-2">SWIFT Regional Support</h4>
            <p>Managed regional SWIFT infrastructure ensuring secure messaging for multiple banks.</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 md:px-20 bg-gray-900">
        <h3 className="text-3xl font-bold mb-8 text-teal-400">Skills</h3>
        <p>Finacle Core, Treasury, AML, SWIFT Systems, SQL, NoSQL, C#, Java, REST APIs, JasperReports, Microsoft Azure, VMware, Hyper-V, React.js, Vue.js.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-20 bg-gray-800">
        <h3 className="text-3xl font-bold mb-8 text-teal-400">Contact Me</h3>
        <form name="contact" method="POST" data-netlify="true" className="space-y-4 max-w-lg">
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
          <button type="submit" className="bg-teal-500 text-white px-6 py-3 rounded hover:bg-teal-600 transition">Send</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Ian Mwaura Kimani. All rights reserved.
      </footer>
    </div>
  );
}
