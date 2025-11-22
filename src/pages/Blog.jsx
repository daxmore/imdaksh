import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Blog = () => {
    const posts = [
        {
            id: 1,
            title: "The Future of Web Development",
            excerpt: "Exploring the latest trends in frontend frameworks and tools for 2025.",
            date: "Nov 20, 2024",
            readTime: "5 min read",
            category: "Tech"
        },
        {
            id: 2,
            title: "Mastering Tailwind CSS",
            excerpt: "A deep dive into advanced Tailwind techniques for scalable design systems.",
            date: "Nov 15, 2024",
            readTime: "8 min read",
            category: "Design"
        },
        {
            id: 3,
            title: "GSAP Animations Guide",
            excerpt: "How to create stunning scroll-triggered animations with GSAP and React.",
            date: "Nov 10, 2024",
            readTime: "6 min read",
            category: "Tutorial"
        }
    ];

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-luxury-light dark:bg-luxury-black text-luxury-black dark:text-white transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <Link to="/" className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 mb-6 transition-colors">
                        <ArrowLeft size={16} className="mr-2" />
                        Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Blog</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
                        Thoughts, tutorials, and insights on design and development.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <article key={post.id} className="bg-white dark:bg-luxury-dark rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:border-primary-200 dark:hover:border-primary-800 group">
                            <div className="flex items-center justify-between text-xs font-medium text-gray-500 dark:text-gray-400 mb-4">
                                <span>{post.date}</span>
                                <span>{post.readTime}</span>
                            </div>
                            <h2 className="text-xl font-bold mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                {post.title}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                                {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between mt-auto">
                                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs rounded-full font-medium">
                                    {post.category}
                                </span>
                                <span className="text-sm font-medium text-primary-600 dark:text-primary-400 group-hover:translate-x-1 transition-transform">
                                    Read More &rarr;
                                </span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
