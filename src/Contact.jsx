import React from "react";

const Contact = () => {
  return (
    <section className="w-full min-h-screen bg-[#fffaf5] pt-35 px-6 md:px-16">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-800">
          Contact <span className="text-orange-500">Us</span>
        </h1>

        <p className="text-zinc-600 mt-6 leading-8 text-lg">
          Have questions or need support? Feel free to contact Grocify anytime.
          We are always ready to help you.
        </p>
      </div>

      {/* Contact Section */}
      <div className="grid md:grid-cols-2 gap-12 mt-16">

        {/* Left Side */}
        <div className="bg-white p-10 rounded-3xl shadow-lg">

          <h2 className="text-3xl font-bold text-zinc-800 mb-8">
            Get In Touch
          </h2>

          <div className="space-y-6">

            <div>
              <h3 className="text-xl font-semibold text-orange-500">
                Address
              </h3>

              <p className="text-zinc-600 mt-2">
                Ahmedabad, Gujarat, India
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-orange-500">
                Email
              </h3>

              <p className="text-zinc-600 mt-2">
                support@grocify.com
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-orange-500">
                Phone
              </h3>

              <p className="text-zinc-600 mt-2">
                +91 98765 43210
              </p>
            </div>

          </div>
        </div>

        {/* Right Side */}
        <div className="bg-white p-10 rounded-3xl shadow-lg">

          <form className="space-y-6">

            <div>
              <label className="block text-zinc-700 font-semibold mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-zinc-300 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block text-zinc-700 font-semibold mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-zinc-300 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block text-zinc-700 font-semibold mb-2">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-zinc-300 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 transition duration-300 text-white px-8 py-3 rounded-xl font-semibold"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>

    </section>
  );
};

export default Contact;