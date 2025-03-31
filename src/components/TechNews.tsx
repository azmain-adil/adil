
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Newspaper, ExternalLink, RefreshCw } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
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
    // Shuffle array and pick first 3 items
    const shuffled = [...techNews].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);
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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

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
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {currentNews.map((news, index) => (
            <motion.div key={index} variants={item}>
              <Card className="hover-effect overflow-hidden group h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors duration-300">
                    {news.title}
                  </CardTitle>
                  <CardDescription>
                    {news.source} • {news.date}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p>{news.description}</p>
                </CardContent>
                <CardFooter className="pt-0">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <a 
                        href={news.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary flex items-center gap-1 hover:underline"
                      >
                        Read more <ExternalLink className="h-3 w-3" />
                      </a>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      Visit {news.source} to read the full article
                    </HoverCardContent>
                  </HoverCard>
                </CardFooter>
                <div className="h-1 w-0 bg-primary group-hover:w-full transition-all duration-500 ease-out"></div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default TechNews;
