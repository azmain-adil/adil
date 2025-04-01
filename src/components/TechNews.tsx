
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Newspaper, ExternalLink, RefreshCw } from 'lucide-react';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';

interface NewsItem {
  title: string;
  description: string;
  url: string;
  source: string;
  date: string;
}

const techNews: NewsItem[] = [
  {
    title: "Apple Announces New Vision Pro Apps",
    description: "Apple has unveiled a new lineup of apps specifically designed for the Vision Pro, highlighting spatial computing capabilities.",
    url: "https://www.apple.com",
    source: "Apple Newsroom",
    date: "2024-10-15"
  },
  {
    title: "AI Integration in iOS 19 Enhances User Experience",
    description: "The latest iOS update brings advanced AI features to iPhones, focusing on privacy and performance optimizations.",
    url: "https://www.apple.com",
    source: "TechCrunch",
    date: "2024-10-12"
  },
  {
    title: "Apple's M4 Chip Sets New Performance Benchmarks",
    description: "Benchmark tests reveal Apple's M4 chip significantly outperforms competitors in both performance and energy efficiency.",
    url: "https://www.apple.com",
    source: "AnandTech",
    date: "2024-10-10"
  },
  {
    title: "Tesla Announces New AI Model for Self-Driving",
    description: "Tesla's latest AI model promises to improve self-driving capabilities with enhanced perception systems.",
    url: "https://www.tesla.com",
    source: "Electrek",
    date: "2024-10-08"
  },
  {
    title: "Microsoft Unveils New Surface Devices",
    description: "Microsoft's fall hardware event revealed new Surface Pro and Surface Laptop models with significant performance upgrades.",
    url: "https://www.microsoft.com",
    source: "The Verge",
    date: "2024-10-05"
  },
  {
    title: "AR Development Growing as Industry Prepares for Apple Glasses",
    description: "Developer interest in AR has surged as rumors about Apple's AR glasses become more substantial.",
    url: "https://www.apple.com",
    source: "Bloomberg",
    date: "2024-10-03"
  }
];

const TechNews: React.FC = () => {
  const [currentNews, setCurrentNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Get random news articles
  const getRandomNews = () => {
    setRefreshing(true);
    // Shuffle array and pick first 4 items for horizontal layout
    const shuffled = [...techNews].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 4);
    setCurrentNews(selected);
    setLoading(false);
    
    setTimeout(() => {
      setRefreshing(false);
    }, 600);
  };

  useEffect(() => {
    getRandomNews();
    
    // Refresh news every 60 seconds
    const interval = setInterval(() => {
      getRandomNews();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="section-title mb-0 flex items-center gap-2">
          <Newspaper className="h-6 w-6 text-primary" />
          <span>Tech News</span>
        </h2>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={getRandomNews}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="Refresh news"
        >
          <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
          <span>Refresh</span>
        </motion.button>
      </div>

      {loading ? (
        <div className="flex justify-center py-10">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-6 items-stretch overflow-x-auto pb-4 snap-x scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent">
            {currentNews.map((news, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex-shrink-0 w-[300px] snap-start"
              >
                <div className="border border-gray-200 dark:border-gray-800 rounded-lg h-full hover:border-primary hover:shadow-lg transition-all duration-300 p-4 flex flex-col">
                  <div className="flex-1">
                    <h3 className="font-bold mb-1 hover:text-primary transition-colors duration-300">
                      {news.title}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2">
                      {news.source} • {news.date}
                    </p>
                    <p className="text-sm">{news.description}</p>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800">
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <a 
                          href={news.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-primary flex items-center gap-1 hover:underline"
                        >
                          Read more <ExternalLink className="h-3 w-3" />
                        </a>
                      </HoverCardTrigger>
                      <HoverCardContent>
                        Visit {news.source} to read the full article
                      </HoverCardContent>
                    </HoverCard>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TechNews;
