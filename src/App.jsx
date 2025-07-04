import NavBar from "./components/navBar";
import Hero from "./section/Hero";
import Services from "./section/Services";
import Banner from "./section/Banner";
import Dream from "./section/Dream";
import Testimonial from "./section/Testimonial";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Services />
      <Banner />
      <Dream />
      <Testimonial />
      <Footer />

      {/* 
      <section class="py-16 bg-white text-center">
        <h2 class="text-3xl font-semibold mb-12">Why Choose Us</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div>
            <p class="text-xl font-medium">📦 Wide Range</p>
          </div>
          <div>
            <p class="text-xl font-medium">🚚 Nationwide Delivery</p>
          </div>
          <div>
            <p class="text-xl font-medium">💷 Competitive Prices</p>
          </div>
          <div>
            <p class="text-xl font-medium">📞 Dedicated Support</p>
          </div>
        </div>
      </section>

      <section id="contact" class="py-16 bg-white">
        <h2 class="text-3xl font-semibold text-center mb-12">Get in Touch</h2>
        <div class="max-w-xl mx-auto px-4">
          <form class="grid gap-6">
            <input
              type="text"
              placeholder="Full Name"
              class="border border-gray-300 p-3 rounded-md"
            />
            <input
              type="text"
              placeholder="Business Name"
              class="border border-gray-300 p-3 rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              class="border border-gray-300 p-3 rounded-md"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              class="border border-gray-300 p-3 rounded-md"
            />
            <textarea
              placeholder="Message"
              rows="4"
              class="border border-gray-300 p-3 rounded-md"
            ></textarea>
            <button class="bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>
      </section> */}

      {/* <footer class="bg-gray-100 py-6 text-center text-sm text-gray-500">
    &copy; 2025 UK Wholesale Interiors. All rights reserved.
  </footer> */}
    </>
  );
}

export default App;
