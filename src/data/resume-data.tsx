import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { CalendlyIcon } from "@/components/icons/CalendlyIcon";

export const RESUME_DATA = {
  name: "Suraj Pabba",
  initials: "SP",
  location: "USA",
  locationLink: "https://www.google.com/maps/place/USA",
  about:
    "Technical Solutions Engineer with a focus in data and technical products",
  summary:
    "Experienced technologist with a background in scaling sales and products. Having spent time in sales engineering, I have built processes and worked with customers and product teams to launch new products that exceed revenue goals. I am looking to leverage my diverse experiences to help grow an innovative organization and build with AI",
  avatarUrl: "https://media.licdn.com/dms/image/D4E03AQHbm0WxDDn2TA/profile-displayphoto-shrink_800_800/0/1687814996739?e=1710979200&v=beta&t=iJG6NzSsGcx1eziRtgDlrVYvYUBFuCqIhq5iq0oRSJQ",
  personalWebsiteUrl: "https://surajpabba.com",
  contact: {
    email: "hello@surajpabba.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/big_curry",
        icon: GitHubIcon,
      },
      {
        name: "Calendly",
        url: "https://calendly.com/suraj-pabba89/30min",
        icon: CalendlyIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/spabba/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/pabba_suraj",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Houston",
      degree: "Management Information Systems || Liberal Arts Honors",
      start: "2008",
      end: "2012",
    },
  ],
  work: [
    {
      company: "Parenthood",
      //link: "https://parabol.co",
      badges: [],
      title: "Parent & AI Student",
      //logo: ParabolLogo,
      start: "2023",
      end: "Forever",
      description:
        "Exploring parenthood and the learnings that come with it. Taking time to learn LLMs, embeddings, and machine learning concepts",
    },
    {
      company: "Salesforce",
      link: "https://Salesforce.com",
      badges: [],
      title: "Senior Solutions Engineer @ MuleSoft",
      //logo: ClevertechLogo,
      start: "2021",
      end: "2022",
      description:
        "Led the presales process from technical discovery to close for all enterprise and strategic (10,000+ employees) customers in MuleSoft's HLS Business Unit",
    },
    {
      company: "project44",
      link: "https://project44.com//",
      badges: [],
      title: "Senior Solutions Engineer",
      //logo: JojoMobileLogo,
      start: "2021",
      end: "2022",
      description:
        "project44 is a real time visibility solution for all modes of logistics transportation. As a senior solutions engineer I led the presales process for the project44 platform for a number of clients ",
    },
    {
      company: "iManage",
      link: "https://imanage.com/",
      badges: [],
      title: "Solutions Engineer",
      logo: NSNLogo,
      start: "2018",
      end: "2021",
      description: "iManage is a platform solution for the legal and finance industry to govern, manage, and detect threats across content. As a solutions engineer I was pivotal during the presales process to help customers understand the value of the solution as it pertained to their use cases.",
    },    {
      company: "Uptake",
      link: "https://uptake.com/",
      badges: [],
      title: "Corporate Development / Solutions Engineer",
      logo: NSNLogo,
      start: "2016",
      end: "2018",
      description: "Uptake is an AI solution for the heavy asset industry. As an early employee I was able to play a variety of roles across product, GTM, and solutions engineering",
    },
  ],
  skills: [
    "JavaScript",
    "Data Science",
    "AI",
    "Go-To-Market",
    "API Development",
    "Product Architecture",
  ],
  projects: [
    {
      title: "Benchmark",
      techStack: [
        "AWS",
        "Video Transcription",
        "Sales Tech",
      ],
      description: "Benchmark was a startup focused on sales engineers that transcribed video meetings and and provided meeting analysis",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "",
      },
    },   
    {
      title: "InField",
      techStack: [
        "Industry 4.o",
        "Labor Tech",
        "Machine Learning",
        "Vision Technology",
      ],
      description: "InField was a startup focused on improving skilled labors training and implementation of complex assets by utilizing machine learning visual technology to ensure project certification",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "",
      },
    },
    {
      title: "Groom Therapy",
      techStack: [
        "Consumer",
        "Services",
        "Web Tech",
      ],
      description: "Groom Therapy was a solution to help grooms parties with their hair and personal care at their wedding venue. We connected barbers to grooms and allowed for personal care at the wedding venue",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "",
      },
    },

  ],
} as const;
