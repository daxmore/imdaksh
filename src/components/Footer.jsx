import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Portfolio<span className="text-blue-600">.</span></h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Building digital experiences with passion and precision.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 text-sm">About</a></li>
                            <li><a href="/projects" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 text-sm">Projects</a></li>
                            <li><a href="/services" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 text-sm">Services</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Connect</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
