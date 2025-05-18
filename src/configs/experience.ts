'use client';
import { siteConfig } from '@/src/configs/config';

export interface ExperienceEntry {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  isActive?: boolean;
  companyUrl?: string;
}

export const experienceEntries: ExperienceEntry[] = [
  {
    title: 'Web Application Developer | Present',
    description:
      "Currently working as a freelance role helping small business with web applications, **big or small**, **AI**, **Data Science**, and **Full Stack** development. Open to full-time roles, internships, or freelance work. Let's connect!",
    startDate: 'Present',
    endDate: 'Present',
    isActive: true,
    companyUrl: siteConfig.social.linkedin
  },
  {
    title: 'Web Developer / SEO Specialist | Jun. 2023 - Mar. 2004',
    description:
      'Redesign company websites and optimize product pages for search engines, optimize meta tags, onsite SEO and link building, help with social media marketing',
    startDate: 'Jun 2023',
    endDate: 'Mar 2024',
    isActive: false,
    companyUrl: siteConfig.social.company1
  },
  {
    title: 'Web Developer | Jun. 2015 - Feb. 2018',
    description:
      'Design & develop websites, WordPress design and development, Search engine optimisation, Email solutions, Microsoft Exchange, Google Workspace, Web Hosting setup & management, Determining client requirements, Help & support',
    startDate: 'Jun 2015',
    endDate: 'Feb 2018',
    isActive: false,
    companyUrl: siteConfig.other.company2
  },
  {
    title: 'CodSoft - Data Science Intern | Sep. 2023 - Oct. 2023',
    description:
      'Self-paced Data Science Learner where I gained practical experience in data science applications using Python. I also contributed to open-source projects and maintained repositories on GitHub.',
    startDate: 'Sep 2023',
    endDate: 'Oct 2023',
    companyUrl: siteConfig.other.codsoft
  },
  {
    title: 'Hacktoberfest 2023 | Sep. 2023 - Oct. 2023',
    description:
      'Participated as a maintainer and content writer in the Hacktoberfest event. Contributed to open-source projects and wrote technical content on platforms such as Medium, Dev.to, and Hashnode.',
    startDate: 'Sep 2023',
    endDate: 'Oct 2023',
    companyUrl: siteConfig.other.hacktoberfest
  },
  {
    title: 'Technical Content Writer | Sep. 2023 - Present',
    description:
      'Writing technical content and tutorials on platforms like Medium, Dev.to, and Hashnode. Topics include software development, data science, and open-source contributions.',
    startDate: 'Sep 2023',
    endDate: 'Present',
    isActive: true,
    companyUrl: siteConfig.baseUrl + '/blog'
  },
  {
    title: 'Open Source Contributor & Maintainer | Dec. 2020 - Present',
    description:
      'Actively contributing to and maintaining open-source repositories on GitHub. Focused on building and improving tools for the developer community.',
    startDate: 'Dec 2020',
    endDate: 'Present',
    isActive: true,
    companyUrl: siteConfig.social.github
  }
];
