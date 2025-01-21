import React from 'react';

function Home() {
  return (
    <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 min-h-screen flex flex-col items-center text-white">
      {/* Hero Section */}
      <section className="text-center mt-20 px-6 md:px-12">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Welcome to TMS
        </h1>
        <p className="mt-6 text-lg md:text-2xl leading-relaxed">
          Simplifying transportation management with real-time tracking, optimized routes, and accurate delivery estimates.
        </p>
        <button className="mt-8 px-8 py-4 bg-yellow-400 text-gray-800 font-bold text-lg rounded-lg shadow-md hover:bg-yellow-300 transition">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="mt-20 w-full grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">
        {/* Feature Card 1 */}
        <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition">
          <h2 className="text-2xl font-bold mb-4">Real-Time Tracking</h2>
          <p className="text-lg">
            Track your shipments in real-time and ensure transparency with your customers.
          </p>
        </div>
        {/* Feature Card 2 */}
        <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition">
          <h2 className="text-2xl font-bold mb-4">Optimized Routes</h2>
          <p className="text-lg">
            Discover efficient delivery routes using advanced optimization algorithms.
          </p>
        </div>
        {/* Feature Card 3 */}
        <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition">
          <h2 className="text-2xl font-bold mb-4">Accurate Estimates</h2>
          <p className="text-lg">
            Provide reliable delivery estimates with real-time traffic data analytics.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-24 w-full px-6 md:px-20">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
          What Our Clients Say
        </h2>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Testimonial 1 */}
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <p className="italic">
              "TMS has transformed our logistics operations. Real-time tracking has been a game-changer!"
            </p>
            <h3 className="mt-4 font-bold text-lg">- John Doe, Logistics Manager</h3>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <p className="italic">
              "With route optimization, we have reduced fuel costs by 30%! Highly recommend TMS."
            </p>
            <h3 className="mt-4 font-bold text-lg">- Sarah Smith, Delivery Manager</h3>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <footer className="mt-20 mb-12 text-center">
        <h2 className="text-2xl font-bold">Ready to transform your transportation management?</h2>
        <button className="mt-6 px-8 py-4 bg-yellow-400 text-gray-800 font-bold text-lg rounded-lg shadow-md hover:bg-yellow-300 transition">
          Sign Up Now
        </button>
      </footer>
    </div>
  );
}

export default Home;
