
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-800 font-sans">
        <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Global Debate Academy</h1>
            <div className="space-x-4">
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/about" className="hover:underline">About</Link>
              <Link to="/program" className="hover:underline">Our Program</Link>
              <Link to="/global" className="hover:underline">Global Access</Link>
              <Link to="/contact" className="hover:underline">Contact</Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/program" element={<Program />} />
          <Route path="/global" element={<GlobalAccess />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <section className="text-center py-20 px-6">
      <h2 className="text-4xl font-bold mb-4">Welcome to Global Debate Academy</h2>
      <p className="text-lg max-w-2xl mx-auto">
        We help young students build confidence, critical thinking, and communication skills through online debate education.
      </p>
    </section>
  );
}

function About() {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="mb-2">We are a team of passionate educators from different parts of the world, committed to teaching kids how to debate, express their opinions, and grow as thinkers and leaders.</p>
      <p>Our teachers are fluent in English and Korean, and we aim to support bilingual students in becoming confident speakers.</p>
    </section>
  );
}

function Program() {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Our Program</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Online debate classes for kids aged 7–14</li>
        <li>Interactive and fun sessions on Zoom</li>
        <li>Focus on public speaking, critical thinking, and teamwork</li>
        <li>English and bilingual (English-Korean) classes available</li>
      </ul>
    </section>
  );
}

function GlobalAccess() {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Global Access</h2>
      <p className="mb-2">Our program is available to students across the US, Korea, and China.</p>
      <p>We offer flexible scheduling for different time zones and language support to help families who are more comfortable with Korean or Chinese.</p>
    </section>
  );
}

function Contact() {
  return (
    <section className="py-16 px-6 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p className="mb-4">Interested in our program? Send us a message and we’ll get back to you!</p>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-2 border border-gray-300 rounded" />
        <textarea placeholder="Your Message" rows="4" className="w-full p-2 border border-gray-300 rounded"></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
      </form>
    </section>
  );
}

export default App;
