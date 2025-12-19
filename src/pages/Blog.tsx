import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

function Blog() {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      slug: 'the-secret-to-perfect-pizza-dough',
      title: "The Secret to Perfect Pizza Dough",
      excerpt: "Learn the art of crafting the perfect pizza dough with our master chef's time-tested techniques and secret ingredients that make all the difference.",
      author: "Chef Marco Rossi",
      date: "December 15, 2024",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg",
      category: "Recipes"
    },
    {
      id: 2,
      slug: 'a-journey-through-italian-pizza-history',
      title: "A Journey Through Italian Pizza History",
      excerpt: "Discover the fascinating history of pizza, from its humble origins in Naples to becoming one of the world's most beloved dishes.",
      author: "Sofia Bianchi",
      date: "December 12, 2024",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg",
      category: "Culture"
    },
    {
      id: 3,
      slug: 'top-10-pizza-toppings-for-2024',
      title: "Top 10 Pizza Toppings for 2024",
      excerpt: "From classic favorites to innovative new combinations, explore the most popular pizza toppings that are trending this year.",
      author: "Chef Marco Rossi",
      date: "December 10, 2024",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/3762069/pexels-photo-3762069.jpeg",
      category: "Trends"
    },
    {
      id: 4,
      slug: 'wood-fired-vs-gas-ovens',
      title: "Wood-Fired vs. Gas Ovens: Which is Better?",
      excerpt: "An in-depth comparison of traditional wood-fired ovens and modern gas ovens, and how each affects the flavor and texture of your pizza.",
      author: "Giovanni Russo",
      date: "December 8, 2024",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg",
      category: "Equipment"
    },
    {
      id: 5,
      slug: 'the-art-of-pizza-pairing',
      title: "The Art of Pizza Pairing: Wine & Beer",
      excerpt: "Expert tips on selecting the perfect beverages to complement your favorite pizza styles and enhance your dining experience.",
      author: "Sofia Bianchi",
      date: "December 5, 2024",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg",
      category: "Pairings"
    },
    {
      id: 6,
      slug: 'behind-the-scenes-at-bella-pizza',
      title: "Behind the Scenes: A Day at Bella Pizza",
      excerpt: "Get an exclusive look at what happens behind the scenes at Bella Pizza, from dough preparation to the final product.",
      author: "Chef Marco Rossi",
      date: "December 1, 2024",
      readTime: "10 min read",
      image: "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg",
      category: "Behind the Scenes"
    }
  ];

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900">
              Pizza <span className="text-red-600">Stories</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Insights, recipes, and stories from our kitchen to yours
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="relative h-96 md:h-full">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Featured Post
              </div>
            </div>
            <div className="p-8 md:p-12 space-y-6">
              <div className="inline-block bg-red-100 text-red-600 px-4 py-1.5 rounded-full text-sm font-semibold">
                {featuredPost.category}
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                {featuredPost.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-500 pt-4">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
              <Link 
                to={`/blog/${featuredPost.slug}`}
                className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors font-medium flex items-center space-x-2"
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Posts</h2>
            <p className="text-xl text-gray-600">
              Latest insights and stories from our kitchen
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="w-full bg-gray-100 text-gray-900 px-5 py-2.5 rounded-full hover:bg-red-600 hover:text-white transition-colors font-medium flex items-center justify-center space-x-2"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to our newsletter for the latest recipes, tips, and pizza stories
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
            />
            <button className="bg-red-600 text-white px-8 py-4 rounded-full hover:bg-red-700 transition-colors font-medium whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
