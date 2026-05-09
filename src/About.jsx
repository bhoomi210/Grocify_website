import React from "react";

const About = () => {
  return (
    <section className="w-full min-h-screen bg-[#fffaf5] pt-35 px-6 md:px-16">
      
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-800">
          About <span className="text-orange-500">Grocify</span>
        </h1>

        <p className="text-zinc-600 mt-6 leading-8 text-lg">
          Grocify is your trusted online grocery platform designed to make
          shopping easier, faster, and more convenient. We provide fresh
          fruits, dairy products, seafood, vegetables, and daily essentials
          directly to your doorstep with premium quality and affordable prices.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 mt-16">

        {/* Card 1 */}
        <div className="bg-white rounded-3xl shadow-lg p-8 hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">
            Our Mission
          </h2>

          <p className="text-zinc-600 leading-7">
            Our mission is to simplify grocery shopping by offering
            high-quality products with fast delivery and excellent customer
            service.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-3xl shadow-lg p-8 hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">
            Fresh Products
          </h2>

          <p className="text-zinc-600 leading-7">
            We carefully select farm-fresh fruits, healthy dairy products,
            and premium seafood to ensure the best quality for every customer.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-3xl shadow-lg p-8 hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">
            Fast Delivery
          </h2>

          <p className="text-zinc-600 leading-7">
            Grocify ensures safe and quick delivery so your groceries reach
            your home fresh and on time every day.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-20 bg-orange-500 rounded-3xl p-10 text-center text-white shadow-xl">
        <h2 className="text-3xl font-bold mb-4">
          Why Choose Grocify?
        </h2>

        <p className="max-w-3xl mx-auto leading-8 text-lg">
          With Grocify, you get premium grocery products, affordable prices,
          easy ordering experience, and trusted delivery services — all in one
          place.
        </p>
      </div>

    </section>
  );
};

export default About;