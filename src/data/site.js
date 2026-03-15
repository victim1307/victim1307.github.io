export const navItems = [
  { label: "Signal", href: "#signal" },
  { label: "Timeline", href: "#timeline" },
  { label: "Work", href: "#work" },
  { label: "Writing", href: "#writing" },
  { label: "Proof", href: "#proof" },
];

export const heroStats = [
  { value: "2025", label: "latest public writing" },
  { value: "01", label: "indexed research paper" },
  { value: "9.3", label: "B.Tech CGPA" },
  { value: "Top 3", label: "hackathon finish" },
];

export const signalCards = [
  {
    title: "Current public signal",
    copy:
      "Publicly visible recent work points to product and threat-research writing through CloudSEK, backed by earlier application security, cryptography, and CTF work.",
    pills: ["CloudSEK", "Security Writing", "Threat Research"],
  },
  {
    title: "What the portfolio should say",
    copy:
      "You are not just a student portfolio with random projects. The stronger story is security operator, cryptography competitor, builder of reconnaissance tooling, and published technical writer.",
    pills: ["AppSec", "Recon", "CTF"],
  },
  {
    title: "What it has done till now",
    copy:
      "Atlassian internship, Team bi0s cryptography leadership, ECC implementation research, hackathon placement, speaking/workshops, and publicly published security articles.",
    pills: ["Atlassian", "Team bi0s", "Research"],
  },
];

export const profile = {
  name: "Pagilla Manohar Reddy",
  title: "Product Security Engineer · Cryptography Competitor · Security Writer",
  summary:
    "I work at the overlap of product security, offensive research, and cryptography. The pattern across the public record is consistent: break systems with intent, build tooling that reduces noise, then explain the findings clearly enough that other people can use them.",
  image: authorImage,
  badges: ["CloudSEK", "Team bi0s", "Atlassian", "ECC Research"],
  links: [
    { label: "Email", href: "mailto:poimnbmpoff@gmail.com" },
    { label: "GitHub", href: "https://github.com/victim1307" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/manohar-reddy-pagilla/" },
    { label: "Google Scholar", href: "https://scholar.google.com/citations?user=WFjaDP4AAAAJ&hl=en" },
  ],
};

export const tabs = {
  now: [
    {
      label: "Current public role",
      title: "Research Analyst and published security writer",
      copy:
        "CloudSEK’s author page identifies Pagilla Manohar Reddy as a Research Analyst and surfaces recent bylined security articles, which is the strongest current public-profile anchor.",
    },
    {
      label: "Design direction",
      title: "Cyber laboratory, not resume wallpaper",
      copy:
        "The redesign leans into operator energy: signal windows, high-contrast cards, public proof, and concise narratives instead of generic timeline sludge.",
    },
  ],
  built: [
    {
      label: "Code Spyder",
      title: "Recon tooling for faster stack and pattern discovery",
      copy:
        "A reconnaissance tool built during product-security work to help identify frameworks, technology choices, and sensitive code patterns faster.",
    },
    {
      label: "CryptoLearn",
      title: "A friendlier learning platform for cryptography",
      copy:
        "Structured to explain concepts, implementation, and practice for people moving into cryptography without flattening the hard parts.",
    },
    {
      label: "Secure systems work",
      title: "From secure upload flows to networked and offline sharing projects",
      copy:
        "The project list consistently shows applied security, systems work, and engineering comfort beyond pure theory.",
    },
  ],
  proof: [
    {
      label: "Research paper",
      title: "Attacks on Elliptic Curve Cryptography Implementations in SageMath",
      copy:
        "Indexed on Google Scholar and aligned tightly with the cryptography and implementation-focus narrative the rest of the portfolio should reinforce.",
    },
    {
      label: "Public writing",
      title: "Security articles published through CloudSEK in late 2024 and early 2025",
      copy:
        "These articles are the clearest recent public artifact of ongoing security work and should be given first-class real estate on the homepage.",
    },
  ],
};

export const timeline = [
  {
    period: "Now",
    heading: "Public-facing security writing and research",
    body:
      "Recent public activity centers on CloudSEK bylines, with article topics covering DeepSeek AI security issues and abuse of Google Sheets for command-and-control and payload delivery.",
  },
  {
    period: "2023 - 2024",
    heading: "Atlassian + Team bi0s + strong academic finish",
    body:
      "Product security internship at Atlassian, cryptography leadership and competition through Team bi0s, and a 9.3 CGPA in Computer Science all reinforce the same core profile.",
  },
  {
    period: "Earlier",
    heading: "Builder phase with applied systems and security projects",
    body:
      "Work spans cryptography learning tools, secure file flows, Android and networking projects, and challenge-driven experimentation.",
  },
];

export const featuredWork = [
  {
    title: "Code Spyder",
    eyebrow: "Product Security Tooling",
    description:
      "Recon tool for framework detection, underlying stack mapping, and sensitive-pattern discovery to support smarter pentesting.",
    tags: ["Recon", "Automation", "AppSec"],
  },
  {
    title: "ECC Attack Research",
    eyebrow: "Publication",
    description:
      "A focused look at attacks on elliptic-curve cryptography implementations in SageMath, emphasizing implementation failure modes.",
    tags: ["ECC", "Research", "Cryptography"],
  },
  {
    title: "CryptoLearn",
    eyebrow: "Learning Platform",
    description:
      "Beginner-friendly platform for cryptography concepts and implementations that still respects the technical depth of the subject.",
    tags: ["Education", "Python", "Sage"],
  },
  {
    title: "Secure Upload Flow",
    eyebrow: "Applied Cryptography",
    description:
      "Secure upload/authentication flow using AES and RSA, built around practical confidentiality and key-handling concerns.",
    tags: ["AES", "RSA", "Flask"],
  },
];

export const writing = [
  {
    date: "January 20, 2025",
    title: "7 Security Issues Found In DeepSeek AI",
    href: "https://www.cloudsek.com/blog/7-security-issues-found-in-deepseek-ai",
    summary:
      "Recent public byline that should sit in the hero flow because it is the clearest signal of current outward-facing work.",
  },
  {
    date: "December 20, 2024",
    title: "How Threat Actors Abuse Google Sheets for C2 and Malicious Payload Delivery",
    href: "https://www.cloudsek.com/blog/how-threat-actors-are-abusing-google-sheets-for-command-and-control-and-malicious-payload-delivery",
    summary:
      "Strong threat-research topic that helps move the homepage from generic portfolio into current security-operator territory.",
  },
  {
    date: "May 5, 2023",
    title: "Attacks on Elliptic Curve Cryptography Implementations in SageMath",
    href: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=WFjaDP4AAAAJ&citation_for_view=WFjaDP4AAAAJ:u5HHmVD_uO8C",
    summary:
      "Indexed research output that anchors the cryptography credibility of the whole site.",
  },
];

export const proofCards = [
  {
    image: pwcImage,
    title: "PwC Fiercest Competitor 2.0",
    text: "2nd runner-up finish in a large hackathon field, with cybersecurity work at the center of the result.",
  },
  {
    image: atlImage,
    title: "Atlassian Recognition",
    text: "The internship outcome is strong enough to remain a central proof point in the portfolio narrative.",
  },
  {
    image: blackhatImage,
    title: "Black Hat Asia",
    text: "Useful visual proof of industry exposure and engagement with the wider security ecosystem.",
  },
  {
    image: isidtuImage,
    title: "CTF Finals",
    text: "Competitive cryptography and broader CTF work should stay visible because they sharpen the entire profile.",
  },
];
import authorImage from "../../assets/images/author/Pagilla_Manohar_Reddy.jpeg";
import atlImage from "../../assets/images/sections/achievements/atlassian.jpeg";
import blackhatImage from "../../assets/images/sections/achievements/blackhat_2.jpeg";
import isidtuImage from "../../assets/images/sections/achievements/isidtu.jpeg";
import pwcImage from "../../assets/images/sections/achievements/pwc.jpeg";
