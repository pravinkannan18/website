import { useState } from 'react';
import { ShoppingCart, Phone, MapPin, Clock, ChevronRight, Pizza, Flame, Heart, Star } from 'lucide-react';

interface PizzaItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  popular?: boolean;
  spicy?: boolean;
}

function Home() {
  const [cartCount, setCartCount] = useState(0);

  const featuredPizzas: PizzaItem[] = [
    {
      id: 1,
      name: "Margherita Classica",
      description: "Fresh mozzarella, San Marzano tomatoes, basil, extra virgin olive oil",
      price: 14.99,
      image: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg",
      popular: true
    },
    {
      id: 2,
      name: "Pepperoni Supreme",
      description: "Double pepperoni, mozzarella, signature tomato sauce",
      price: 16.99,
      image: "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg",
      popular: true
    },
    {
      id: 3,
      name: "Diavola",
      description: "Spicy salami, hot peppers, mozzarella, chili oil",
      price: 17.99,
      image: "https://images.pexels.com/photos/3762069/pexels-photo-3762069.jpeg",
      spicy: true
    },
    {
      id: 4,
      name: "Quattro Formaggi",
      description: "Mozzarella, gorgonzola, parmesan, fontina cheese blend",
      price: 18.99,
      image: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg"
    }
  ];

  const menuPizzas: PizzaItem[] = [
    {
      id: 5,
      name: "Prosciutto e Rucola",
      description: "Prosciutto di Parma, arugula, cherry tomatoes, parmesan shavings",
      price: 19.99,
      image: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg"
    },
    {
      id: 6,
      name: "Vegetariana",
      description: "Grilled vegetables, mushrooms, bell peppers, onions, olives",
      price: 15.99,
      image: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg"
    },
    {
      id: 7,
      name: "Truffle Deluxe",
      description: "Black truffle cream, mushrooms, mozzarella, truffle oil",
      price: 24.99,
      image: "https://images.pexels.com/photos/3762069/pexels-photo-3762069.jpeg"
    },
    {
      id: 8,
      name: "Hawaiian Twist",
      description: "Smoked ham, pineapple, mozzarella, BBQ drizzle",
      price: 16.99,
      image: "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg"
    }
  ];

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <>
      <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-red-50 via-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold">
              Authentic Italian Pizza
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Pravin
              <span className="block text-red-600">Perfection</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Experience the true taste of Naples with our authentic Italian pizzas, crafted with passion and baked to perfection in our traditional wood-fired oven.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-red-600 text-white px-8 py-4 rounded-full hover:bg-red-700 transition-all transform hover:scale-105 font-semibold text-lg flex items-center justify-center space-x-2"
              >
                <span>View Menu</span>
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full hover:bg-gray-900 hover:text-white transition-all font-semibold text-lg">
                Learn More
              </button>
            </div>
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-red-600" />
                <span className="text-gray-700 font-medium">Mon-Sun: 11AM-11PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-red-600" />
                <span className="text-gray-700 font-medium">(555) 123-4567</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
            <img
              src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg"
              alt="Delicious Pizza"
              className="relative rounded-3xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Customer Favorites</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our most loved pizzas, crafted with premium ingredients and authentic Italian recipes
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredPizzas.map((pizza) => (
              <div key={pizza.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden h-64">
                  <img
                    src={pizza.image}
                    alt={pizza.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {pizza.popular && (
                    <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1.5 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current" />
                      <span>Popular</span>
                    </div>
                  )}
                  {pizza.spicy && (
                    <div className="absolute top-4 right-4 bg-orange-600 text-white p-2 rounded-full">
                      <Flame className="w-4 h-4" />
                    </div>
                  )}
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">{pizza.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{pizza.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-2xl font-bold text-red-600">${pizza.price}</span>
                    <button
                      onClick={addToCart}
                      className="bg-red-600 text-white px-5 py-2.5 rounded-full hover:bg-red-700 transition-colors font-medium flex items-center space-x-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Full Menu</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our complete selection of handcrafted pizzas
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuPizzas.map((pizza) => (
              <div key={pizza.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden h-64">
                  <img
                    src={pizza.image}
                    alt={pizza.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">{pizza.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{pizza.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-2xl font-bold text-red-600">${pizza.price}</span>
                    <button
                      onClick={addToCart}
                      className="bg-red-600 text-white px-5 py-2.5 rounded-full hover:bg-red-700 transition-colors font-medium flex items-center space-x-2"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                The Art of
                <span className="block text-red-600">Pizza Making</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Since 1985, we've been crafting authentic Italian pizzas using traditional methods passed down through generations. Our wood-fired oven, imported directly from Naples, reaches the perfect temperature to create that signature crispy yet tender crust.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We source the finest ingredients from local farms and Italian suppliers, ensuring every bite is a celebration of authentic flavors. From our hand-stretched dough to our San Marzano tomatoes, quality is never compromised.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">38+</div>
                  <div className="text-gray-600 font-medium">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">50k+</div>
                  <div className="text-gray-600 font-medium">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-600 mb-2">4.9</div>
                  <div className="text-gray-600 font-medium">Average Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg"
                alt="Pizza Making"
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
                <div className="flex items-center space-x-3 mb-3">
                  <Heart className="w-6 h-6 text-red-600 fill-current" />
                  <span className="font-bold text-gray-900 text-lg">Made with Love</span>
                </div>
                <p className="text-gray-600 text-sm">Every pizza is crafted by our master pizza chefs with decades of experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Pizza className="w-8 h-8 text-red-600" />
                <span className="text-2xl font-bold">Bella Pizza</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Bringing authentic Italian flavors to your table since 1985. Experience the difference that passion and tradition make.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <span className="text-sm">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <span className="text-sm">𝕏</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <span className="text-sm">in</span>
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Visit Us</p>
                    <p className="text-gray-400">123 Pizza Street, Naples District</p>
                    <p className="text-gray-400">New York, NY 10012</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Call Us</p>
                    <p className="text-gray-400">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Hours</p>
                    <p className="text-gray-400">Monday - Sunday</p>
                    <p className="text-gray-400">11:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold">Quick Links</h3>
              <div className="grid grid-cols-2 gap-3">
                <a href="#menu" className="text-gray-400 hover:text-red-600 transition-colors">Menu</a>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">Catering</a>
                <a href="#about" className="text-gray-400 hover:text-red-600 transition-colors">About Us</a>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">Delivery</a>
                <a href="#contact" className="text-gray-400 hover:text-red-600 transition-colors">Contact</a>
                <a href="#" className="text-gray-400 hover:text-red-600 transition-colors">Careers</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Bella Pizza. All rights reserved. Crafted with passion in New York.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
