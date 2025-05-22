export const siteConfig: {
  baseUrl: string;
  domain: string;
  author: string;
  author_surname: string;
  titlePrefix: string;
  profile_image: string;
  form_id: string;
  github_org_name: string;
  country: string;
  social: {
    kofi: string;
    sponsor: string;
    email: string;
    twitter: string;
    github: string;
    linkedin: string;
    blog: string;
    medium: string;
    dev: string;
    hashnode: string;
    discord: string;
    github_organisation: string;
    company1: string;
    daily_dev: {
      username: string;
      card: string;
    };
    holopin: string;
  };
  other: {
    hacktoberfest: string;
    codsoft: string;
    github_snake: string;
    company2: string;
  };
  chatbot: {
    rateLimit: number;
  };
  contact: {
    debug: boolean;
    rateLimit: number;
  };
  metadata: {
    description: string;
    keywords: string;
    type: string;
  };
} = {
  baseUrl: 'http://localhost:3000/',
  domain: 'localhost:3000',
  author: 'Kamal Khanal',
  author_surname: 'Khanal',
  titlePrefix: 'Kamal Khanal',
  github_org_name: 'WebKamal',
  country: 'Australia',
  profile_image: 'https://avatars.githubusercontent.com/u/4837728?v=4',
  form_id: 'https://formspree.io/f/xqaqnjdd',
  social: {
    kofi: 'https://ko-fi.com/webkamal',
    sponsor: 'https://github.com/sponsors/webkamal',
    email: 'ozzykamal@gmail.com',
    twitter: '@web_kamal',
    github: 'webkamal',
    linkedin: 'https://www.linkedin.com/in/khanalkamal/',
    blog: 'https://webkamal.com',
    medium: 'https://webkamal.medium.com',
    dev: 'https://dev.to/webkamal',
    hashnode: 'https://webkamal.hashnode.dev',
    discord: 'https://discord.gg/webkamal',
    github_organisation: 'https://github.com/webkamal',
    company1: 'https://cheapestiles.com.au',
    daily_dev: {
      username: 'webkamal',
      card: 'https://api.daily.dev/devcards/v2/BTQ5qVDxJkaW6pXC5DX6H.png?type=wide&r=vde'
    },
    holopin: 'muhammadfiaz'
  },
  metadata: {
    description: `Hi! I'm Kamal Khanal, a Full Stack developer passionate about building apps, exploring AI and ML, and collaborating on exciting projects. Let's connect!`,
    keywords:
      'Kamal Khanal, Full Stack Developer, Kamal Khanal portfolio, Kamal Khanal GitHub, Web Development, Mobile Applications, Nextjs Developer, React Developer, Open Source Developer, App Development',
    type: 'website'
  },
  chatbot: {
    rateLimit: 10
  },
  contact: {
    debug: true,
    rateLimit: 10
  },
  other: {
    hacktoberfest: 'https://hacktoberfest.com/',
    codsoft: 'https://www.codsoft.in/',
    company2: 'https://allinit.com.au',
    github_snake: '/img/github-contribution-grid-snake.svg'
  }
};
