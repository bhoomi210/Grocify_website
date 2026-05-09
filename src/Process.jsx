import React from "react";

const Process = () => {
  return (
    <section className="w-full min-h-screen bg-[#fffaf5] pt-35 px-6 md:px-16">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-800">
          Our <span className="text-orange-500">Process</span>
        </h1>

        <p className="text-zinc-600 mt-6 leading-8 text-lg">
          At Grocify, we follow a simple and efficient process to deliver
          fresh groceries directly to your doorstep quickly and safely.
        </p>
      </div>

      {/* Process Cards */}
      <div className="grid md:grid-cols-4 gap-8 mt-16">

        {/* Step 1 */}
        <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:scale-105 transition duration-300">
          <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
            1
          </div>

          <h2 className="text-2xl font-bold text-zinc-800 mt-6 mb-4">
            Choose Products
          </h2>

          <p className="text-zinc-600 leading-7">
            Browse fresh groceries, fruits, dairy, seafood, and more from our collection.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:scale-105 transition duration-300">
          <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
            2
          </div>

          <h2 className="text-2xl font-bold text-zinc-800 mt-6 mb-4">
            Add To Cart
          </h2>

          <p className="text-zinc-600 leading-7">
            Select your favorite items and add them to your shopping cart easily.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:scale-105 transition duration-300">
          <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
            3
          </div>

          <h2 className="text-2xl font-bold text-zinc-800 mt-6 mb-4">
            Secure Payment
          </h2>

          <p className="text-zinc-600 leading-7">
            Make payments safely using our secure and trusted payment system.
          </p>
        </div>

        {/* Step 4 */}
        <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:scale-105 transition duration-300">
          <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
            4
          </div>

          <h2 className="text-2xl font-bold text-zinc-800 mt-6 mb-4">
            Fast Delivery
          </h2>

          <p className="text-zinc-600 leading-7">
            Get your groceries delivered fresh and on time right to your home.
          </p>
        </div>

      </div>

    </section>
  );
};

export default Process;