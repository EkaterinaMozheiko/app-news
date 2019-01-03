import { NewsSources } from '../models/news-sources';
import { NewsResponse } from '../models/news';

export const expectedNewsSources: NewsSources = {
  status: 'ok',
  sources: [
    {
      id: '1',
      name: 'ABC News',
      description: 'Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.',
      url: 'https://abcnews.go.com',
      category: 'general',
      language: 'en',
      country: 'us'
    },
    {
      id: 'abc-news-au',
      name: 'ABC News (AU)',
      description: 'Australia\'s most trusted source of local, national and world news. \
      Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.',
      url: 'http://www.abc.net.au/news',
      category: 'general',
      language: 'en',
      country: 'au'
    }
  ]};


  export const expectedNews: NewsResponse = {
    status: 'ok',
    totalResults: 1,
    articles: [{
      source: {
        id: 'techcrunch',
        name: 'TechCrunch'
      },
      author: 'Kate Clark',
      title: 'NYSE operator’s crypto project Bakkt brings in $182M',
      description: 'Venture capitalists remain bullish on Bitcoin and its underlying technology despite sinking crypto prices.',
      url: 'http://techcrunch.com/2018/12/31/nyse-operators-crypto-project-bakkt-brings-in-182m/',
      urlToImage: 'https://techcrunch.com/wp-content/uploads/2018/12/GettyImages-1064373142.jpg?w=600',
      publishedAt: '2018-12-31T18:56:47Z',
      content: 'The Intercontinental Exchange’s (ICE) cryptocurrency project Bakkt celebrated New Year’s Eve with the \
      announcement of a $182.5 million equity round from a slew of notable institutional investors. '
    }]
  };
