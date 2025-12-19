import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react';

interface BlogPostData {
  id: number;
  title: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  content: string;
}

function BlogPost() {
  const { id } = useParams();

  const blogPosts: { [key: number]: BlogPostData } = {
    1: {
      id: 1,
      title: "The Secret to Perfect Pizza Dough",
      author: "Chef Marco Rossi",
      date: "December 15, 2024",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg",
      category: "Recipes",
      content: `Pizza is more than just food—it is a universal language of comfort, celebration, and flavor. From humble beginnings on the streets of Naples to becoming a global culinary icon, pizza has earned a permanent place on dining tables across cultures and generations.

## A Brief History of Pizza

The modern pizza originated in Naples, Italy, where flatbreads were topped with tomatoes, olive oil, and herbs as affordable street food for working-class families. The introduction of mozzarella cheese transformed pizza into the dish we recognize today. By the late 19th century, pizza gained royal recognition, and soon after, Italian immigrants carried it across Europe and into America.

## Why Pizza Is Loved Everywhere

Pizza's popularity comes from its simplicity and flexibility. A basic crust becomes a canvas for endless creativity—cheese, vegetables, meats, sauces, and spices can be combined to suit any taste. Whether it's a thin-crust Margherita or a loaded deep-dish slice, pizza adapts effortlessly to local flavors and preferences.

## Types of Pizza You Should Know

**Margherita** – Classic tomato, mozzarella, and basil

**Pepperoni** – A global favorite with bold flavors

**Veggie Supreme** – Fresh vegetables with balanced seasoning

**BBQ Chicken** – Smoky, sweet, and savory

**Cheese Burst** – For true cheese lovers

Each variety tells a different story, but all deliver the same satisfaction.

## The Science Behind a Perfect Pizza

A great pizza balances three key elements:

**Crust** – Crisp outside, soft inside

**Sauce** – Tangy, rich, and well-seasoned

**Cheese & Toppings** – Melted evenly with complementary textures

When these elements align, pizza becomes an experience—not just a meal.

## Pizza in Today's Lifestyle

Pizza fits perfectly into modern life. It's ideal for:

- Family dinners
- Office lunches
- Weekend parties
- Late-night cravings

With online ordering, fast delivery, and customizable options, pizza has become the most convenient comfort food of our time.

## Health-Conscious Pizza Choices

Today's pizza is evolving. Whole-wheat crusts, vegan cheese, gluten-free bases, and fresh organic toppings allow pizza lovers to enjoy their favorite dish without compromising health goals.

## Final Thoughts

Pizza continues to evolve while staying true to its roots. Its ability to bring people together—across cultures, ages, and tastes—makes it one of the most loved foods in the world. No matter how it's served, pizza always delivers happiness, one slice at a time.`
    },
    2: {
      id: 2,
      title: "A Journey Through Italian Pizza History",
      author: "Sofia Bianchi",
      date: "December 12, 2024",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg",
      category: "Culture",
      content: `Pizza is more than just food—it is a universal language of comfort, celebration, and flavor. From humble beginnings on the streets of Naples to becoming a global culinary icon, pizza has earned a permanent place on dining tables across cultures and generations.

## A Brief History of Pizza

The modern pizza originated in Naples, Italy, where flatbreads were topped with tomatoes, olive oil, and herbs as affordable street food for working-class families. The introduction of mozzarella cheese transformed pizza into the dish we recognize today. By the late 19th century, pizza gained royal recognition, and soon after, Italian immigrants carried it across Europe and into America.

## Why Pizza Is Loved Everywhere

Pizza's popularity comes from its simplicity and flexibility. A basic crust becomes a canvas for endless creativity—cheese, vegetables, meats, sauces, and spices can be combined to suit any taste. Whether it's a thin-crust Margherita or a loaded deep-dish slice, pizza adapts effortlessly to local flavors and preferences.

## Types of Pizza You Should Know

**Margherita** – Classic tomato, mozzarella, and basil

**Pepperoni** – A global favorite with bold flavors

**Veggie Supreme** – Fresh vegetables with balanced seasoning

**BBQ Chicken** – Smoky, sweet, and savory

**Cheese Burst** – For true cheese lovers

Each variety tells a different story, but all deliver the same satisfaction.

## The Science Behind a Perfect Pizza

A great pizza balances three key elements:

**Crust** – Crisp outside, soft inside

**Sauce** – Tangy, rich, and well-seasoned

**Cheese & Toppings** – Melted evenly with complementary textures

When these elements align, pizza becomes an experience—not just a meal.

## Pizza in Today's Lifestyle

Pizza fits perfectly into modern life. It's ideal for:

- Family dinners
- Office lunches
- Weekend parties
- Late-night cravings

With online ordering, fast delivery, and customizable options, pizza has become the most convenient comfort food of our time.

## Health-Conscious Pizza Choices

Today's pizza is evolving. Whole-wheat crusts, vegan cheese, gluten-free bases, and fresh organic toppings allow pizza lovers to enjoy their favorite dish without compromising health goals.

## Final Thoughts

Pizza continues to evolve while staying true to its roots. Its ability to bring people together—across cultures, ages, and tastes—makes it one of the most loved foods in the world. No matter how it's served, pizza always delivers happiness, one slice at a time.`
    },
    3: {
      id: 3,
      title: "Top 10 Pizza Toppings for 2024",
      author: "Chef Marco Rossi",
      date: "December 10, 2024",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/3762069/pexels-photo-3762069.jpeg",
      category: "Trends",
      content: `Pizza is more than just food—it is a universal language of comfort, celebration, and flavor. From humble beginnings on the streets of Naples to becoming a global culinary icon, pizza has earned a permanent place on dining tables across cultures and generations.

## A Brief History of Pizza

The modern pizza originated in Naples, Italy, where flatbreads were topped with tomatoes, olive oil, and herbs as affordable street food for working-class families. The introduction of mozzarella cheese transformed pizza into the dish we recognize today. By the late 19th century, pizza gained royal recognition, and soon after, Italian immigrants carried it across Europe and into America.

## Why Pizza Is Loved Everywhere

Pizza's popularity comes from its simplicity and flexibility. A basic crust becomes a canvas for endless creativity—cheese, vegetables, meats, sauces, and spices can be combined to suit any taste. Whether it's a thin-crust Margherita or a loaded deep-dish slice, pizza adapts effortlessly to local flavors and preferences.

## Types of Pizza You Should Know

**Margherita** – Classic tomato, mozzarella, and basil

**Pepperoni** – A global favorite with bold flavors

**Veggie Supreme** – Fresh vegetables with balanced seasoning

**BBQ Chicken** – Smoky, sweet, and savory

**Cheese Burst** – For true cheese lovers

Each variety tells a different story, but all deliver the same satisfaction.

## The Science Behind a Perfect Pizza

A great pizza balances three key elements:

**Crust** – Crisp outside, soft inside

**Sauce** – Tangy, rich, and well-seasoned

**Cheese & Toppings** – Melted evenly with complementary textures

When these elements align, pizza becomes an experience—not just a meal.

## Pizza in Today's Lifestyle

Pizza fits perfectly into modern life. It's ideal for:

- Family dinners
- Office lunches
- Weekend parties
- Late-night cravings

With online ordering, fast delivery, and customizable options, pizza has become the most convenient comfort food of our time.

## Health-Conscious Pizza Choices

Today's pizza is evolving. Whole-wheat crusts, vegan cheese, gluten-free bases, and fresh organic toppings allow pizza lovers to enjoy their favorite dish without compromising health goals.

## Final Thoughts

Pizza continues to evolve while staying true to its roots. Its ability to bring people together—across cultures, ages, and tastes—makes it one of the most loved foods in the world. No matter how it's served, pizza always delivers happiness, one slice at a time.`
    },
    4: {
      id: 4,
      title: "Wood-Fired vs. Gas Ovens: Which is Better?",
      author: "Giovanni Russo",
      date: "December 8, 2024",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg",
      category: "Equipment",
      content: `Pizza is more than just food—it is a universal language of comfort, celebration, and flavor. From humble beginnings on the streets of Naples to becoming a global culinary icon, pizza has earned a permanent place on dining tables across cultures and generations.

## A Brief History of Pizza

The modern pizza originated in Naples, Italy, where flatbreads were topped with tomatoes, olive oil, and herbs as affordable street food for working-class families. The introduction of mozzarella cheese transformed pizza into the dish we recognize today. By the late 19th century, pizza gained royal recognition, and soon after, Italian immigrants carried it across Europe and into America.

## Why Pizza Is Loved Everywhere

Pizza's popularity comes from its simplicity and flexibility. A basic crust becomes a canvas for endless creativity—cheese, vegetables, meats, sauces, and spices can be combined to suit any taste. Whether it's a thin-crust Margherita or a loaded deep-dish slice, pizza adapts effortlessly to local flavors and preferences.

## Types of Pizza You Should Know

**Margherita** – Classic tomato, mozzarella, and basil

**Pepperoni** – A global favorite with bold flavors

**Veggie Supreme** – Fresh vegetables with balanced seasoning

**BBQ Chicken** – Smoky, sweet, and savory

**Cheese Burst** – For true cheese lovers

Each variety tells a different story, but all deliver the same satisfaction.

## The Science Behind a Perfect Pizza

A great pizza balances three key elements:

**Crust** – Crisp outside, soft inside

**Sauce** – Tangy, rich, and well-seasoned

**Cheese & Toppings** – Melted evenly with complementary textures

When these elements align, pizza becomes an experience—not just a meal.

## Pizza in Today's Lifestyle

Pizza fits perfectly into modern life. It's ideal for:

- Family dinners
- Office lunches
- Weekend parties
- Late-night cravings

With online ordering, fast delivery, and customizable options, pizza has become the most convenient comfort food of our time.

## Health-Conscious Pizza Choices

Today's pizza is evolving. Whole-wheat crusts, vegan cheese, gluten-free bases, and fresh organic toppings allow pizza lovers to enjoy their favorite dish without compromising health goals.

## Final Thoughts

Pizza continues to evolve while staying true to its roots. Its ability to bring people together—across cultures, ages, and tastes—makes it one of the most loved foods in the world. No matter how it's served, pizza always delivers happiness, one slice at a time.`
    },
    5: {
      id: 5,
      title: "The Art of Pizza Pairing: Wine & Beer",
      author: "Sofia Bianchi",
      date: "December 5, 2024",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg",
      category: "Pairings",
      content: `Pizza is more than just food—it is a universal language of comfort, celebration, and flavor. From humble beginnings on the streets of Naples to becoming a global culinary icon, pizza has earned a permanent place on dining tables across cultures and generations.


## Why Pizza Is Loved Everywhere

Pizza's popularity comes from its simplicity and flexibility. A basic crust becomes a canvas for endless creativity—cheese, vegetables, meats, sauces, and spices can be combined to suit any taste. Whether it's a thin-crust Margherita or a loaded deep-dish slice, pizza adapts effortlessly to local flavors and preferences.

## Types of Pizza You Should Know

**Margherita** – Classic tomato, mozzarella, and basil

**Pepperoni** – A global favorite with bold flavors

**Veggie Supreme** – Fresh vegetables with balanced seasoning

**BBQ Chicken** – Smoky, sweet, and savory

**Cheese Burst** – For true cheese lovers

Each variety tells a different story, but all deliver the same satisfaction.

## The Science Behind a Perfect Pizza

A great pizza balances three key elements:

**Crust** – Crisp outside, soft inside

**Sauce** – Tangy, rich, and well-seasoned

**Cheese & Toppings** – Melted evenly with complementary textures

When these elements align, pizza becomes an experience—not just a meal.

## Pizza in Today's Lifestyle

Pizza fits perfectly into modern life. It's ideal for:

- Family dinners
- Office lunches
- Weekend parties
- Late-night cravings

With online ordering, fast delivery, and customizable options, pizza has become the most convenient comfort food of our time.

## Health-Conscious Pizza Choices

Today's pizza is evolving. Whole-wheat crusts, vegan cheese, gluten-free bases, and fresh organic toppings allow pizza lovers to enjoy their favorite dish without compromising health goals.

## Final Thoughts

Pizza continues to evolve while staying true to its roots. Its ability to bring people together—across cultures, ages, and tastes—makes it one of the most loved foods in the world. No matter how it's served, pizza always delivers happiness, one slice at a time.`
    },
    6: {
      id: 6,
      title: "Behind the Scenes: A Day at Bella Pizza",
      author: "Chef Marco Rossi",
      date: "December 1, 2024",
      readTime: "10 min read",
      image: "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg",
      category: "Behind the Scenes",
      content: `Pizza is more than just food—it is a universal language of comfort, celebration, and flavor. From humble beginnings on the streets of Naples to becoming a global culinary icon, pizza has earned a permanent place on dining tables across cultures and generations.

## A Brief History of Pizza

The modern pizza originated in Naples, Italy, where flatbreads were topped with tomatoes, olive oil, and herbs as affordable street food for working-class families. The introduction of mozzarella cheese transformed pizza into the dish we recognize today. By the late 19th century, pizza gained royal recognition, and soon after, Italian immigrants carried it across Europe and into America.

## Why Pizza Is Loved Everywhere

Pizza's popularity comes from its simplicity and flexibility. A basic crust becomes a canvas for endless creativity—cheese, vegetables, meats, sauces, and spices can be combined to suit any taste. Whether it's a thin-crust Margherita or a loaded deep-dish slice, pizza adapts effortlessly to local flavors and preferences.

## Types of Pizza You Should Know

**Margherita** – Classic tomato, mozzarella, and basil

**Pepperoni** – A global favorite with bold flavors

**Veggie Supreme** – Fresh vegetables with balanced seasoning

**BBQ Chicken** – Smoky, sweet, and savory

**Cheese Burst** – For true cheese lovers

Each variety tells a different story, but all deliver the same satisfaction.

## The Science Behind a Perfect Pizza

A great pizza balances three key elements:

**Crust** – Crisp outside, soft inside

**Sauce** – Tangy, rich, and well-seasoned

**Cheese & Toppings** – Melted evenly with complementary textures

When these elements align, pizza becomes an experience—not just a meal.

## Pizza in Today's Lifestyle

Pizza fits perfectly into modern life. It's ideal for:

- Family dinners
- Office lunches
- Weekend parties
- Late-night cravings

With online ordering, fast delivery, and customizable options, pizza has become the most convenient comfort food of our time.

## Health-Conscious Pizza Choices

Today's pizza is evolving. Whole-wheat crusts, vegan cheese, gluten-free bases, and fresh organic toppings allow pizza lovers to enjoy their favorite dish without compromising health goals.

## Final Thoughts

Pizza continues to evolve while staying true to its roots. Its ability to bring people together—across cultures, ages, and tastes—makes it one of the most loved foods in the world. No matter how it's served, pizza always delivers happiness, one slice at a time.`
    }
  };

  const post = blogPosts[Number(id) || 1];

  if (!post) {
    return (
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-red-600 hover:text-red-700 font-medium">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => {
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={index} className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            {paragraph.replace('## ', '')}
          </h2>
        );
      } else if (paragraph.startsWith('**') || paragraph.includes('**')) {
        const parts = paragraph.split('\n');
        return (
          <div key={index} className="space-y-3 mb-6">
            {parts.map((part, idx) => {
              const boldRegex = /\*\*(.*?)\*\*/g;
              const formattedPart = part.split(boldRegex).map((text, i) => 
                i % 2 === 1 ? <strong key={i} className="font-bold text-gray-900">{text}</strong> : text
              );
              return <p key={idx} className="text-lg text-gray-700 leading-relaxed">{formattedPart}</p>;
            })}
          </div>
        );
      } else if (paragraph.startsWith('- ')) {
        const items = paragraph.split('\n');
        return (
          <ul key={index} className="list-disc list-inside space-y-2 mb-6 text-lg text-gray-700">
            {items.map((item, idx) => (
              <li key={idx}>{item.replace('- ', '')}</li>
            ))}
          </ul>
        );
      } else {
        return (
          <p key={index} className="text-lg text-gray-700 leading-relaxed mb-6">
            {paragraph}
          </p>
        );
      }
    });
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          to="/blog" 
          className="inline-flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Blog</span>
        </Link>

        <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
          {post.category}
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <User className="w-5 h-5" />
            <span className="font-medium">{post.author}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <div className="mb-12">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          {renderContent(post.content)}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Loved this article?
            </h3>
            <p className="text-gray-700 mb-6 max-w-xl mx-auto">
              Subscribe to our newsletter for more insights, recipes, and pizza stories delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
              <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors font-medium whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/blog"
            className="inline-flex items-center space-x-2 text-gray-700 hover:text-red-600 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>View All Posts</span>
          </Link>
        </div>
      </article>
    </div>
  );
}

export default BlogPost;
