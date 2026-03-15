import authorImage from "../../assets/images/author/Pagilla_Manohar_Reddy.jpeg";
import atlImage from "../../assets/images/sections/achievements/atlassian.jpeg";
import blackhatImage from "../../assets/images/sections/achievements/blackhat_2.jpeg";
import isidtuImage from "../../assets/images/sections/achievements/isidtu.jpeg";
import pwcImage from "../../assets/images/sections/achievements/pwc.jpeg";

export const navItems = [
  { label: "Writing", href: "#writing" },
  { label: "Practice", href: "#signal" },
  { label: "Coverage", href: "#coverage" },
  { label: "Trajectory", href: "#timeline" },
  { label: "Background", href: "#proof" },
];

export const heroStats = [
  { value: "2025", label: "current article footprint" },
  { value: "04+", label: "recent public bylines" },
  { value: "CloudSEK", label: "current platform" },
  { value: "Automation", label: "research workflow" },
];

export const signalCards = [
  {
    title: "Current work",
    copy:
      "The strongest public signal now is threat intelligence and adversary analysis at CloudSEK, especially reporting on hacktivist ecosystems, campaign behavior, and cyber conflict narratives.",
    pills: ["CloudSEK", "Threat Intelligence", "Adversary Analysis"],
  },
  {
    title: "Research model",
    copy:
      "The work combines monitoring of threat actors and underground communities with automation that turns large, messy data into usable intelligence.",
    pills: ["Automation", "Intel Pipelines", "Cyber Operations"],
  },
  {
    title: "Earlier work",
    copy:
      "Older cryptography work still matters as background, but the center of gravity has moved to threat monitoring, hacktivist tracking, cyber campaign analysis, and public intelligence writing.",
    pills: ["Hacktivism", "Campaign Monitoring", "Threat Research"],
  },
];

export const profile = {
  name: "Pagilla Manohar Reddy",
  title: "Threat Researcher · Cyber Operations Analyst · Intelligence Automation Builder",
  summary:
    "I am a cybersecurity researcher working at the intersection of threat intelligence, cyber operations, and adversary analysis at CloudSEK. My work focuses on tracking hacktivist ecosystems, monitoring emerging cyber campaigns, and analyzing threat actor behavior across deep web and underground communities. Alongside research, I build automation and intelligence infrastructure that turns fragmented threat signals into structured intelligence analysts can act on.",
  image: authorImage,
  badges: ["CloudSEK", "Threat Intelligence", "Hacktivist Monitoring", "Automation"],
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
      label: "Current role",
      title: "Threat researcher with recent public bylines",
      copy:
        "CloudSEK’s author page identifies Pagilla Manohar Reddy as a Threat Researcher and surfaces recent writing on hacktivist operations, cyber conflict, scams, and adversary behavior.",
    },
    {
      label: "Scope",
      title: "Threat intelligence with automation in the workflow",
      copy:
        "The work is not just reporting. It includes systems that collect, process, and structure large volumes of threat data so investigations can move faster.",
    },
  ],
  built: [
    {
      label: "Automation",
      title: "Infrastructure that makes threat monitoring scalable",
      copy:
        "The strongest current narrative is automation in support of monitoring and analysis: systems that collect large volumes of threat data and turn fragmented activity into structured intelligence.",
    },
    {
      label: "Monitoring",
      title: "Tracking hacktivist ecosystems and cyber campaigns",
      copy:
        "Public reporting points to work around coordinated hacktivist activity, geopolitical cyber conflicts, influence-style exaggeration, and operational reality behind public claims.",
    },
    {
      label: "Background",
      title: "Earlier crypto and CTF work remain background, not the headline",
      copy:
        "Older cryptography research and competition experience still explain the technical base, but they should sit behind the current threat-intel and automation focus.",
    },
  ],
  proof: [
    {
      label: "Public footprint",
      title: "Recent public work is concentrated in operational security writing",
      copy:
        "The current public footprint is concentrated in articles and reporting rather than formal publications, so recent writing carries more weight than older research output.",
    },
    {
      label: "Publication context",
      title: "The 2023 ECC paper is still valid, but it is not the main storyline anymore",
      copy:
        "Publicly, the most current story is threat intelligence and adversary reporting. The older paper should remain visible as prior research depth, not the first thing a reader sees.",
    },
  ],
};

export const timeline = [
  {
    period: "Now",
    heading: "Threat intelligence, hacktivist monitoring, and adversary analysis",
    body:
      "Current work is best described as monitoring cyber campaigns, investigating coordinated activity, and producing intelligence around threat actors, influence behavior, and geopolitically driven conflict.",
  },
  {
    period: "Public 2025 footprint",
    heading: "CloudSEK articles on hacktivism, scams, and operational reality",
    body:
      "Publicly visible 2025 writing includes coverage of the Iran-Israel cyber standoff, the India-Pakistan hacktivist surge, Valentine’s Day cyber scams, and phishing abuse built on Zendesk infrastructure.",
  },
  {
    period: "Earlier base",
    heading: "Product security, cryptography, and CTF experience as technical foundation",
    body:
      "Earlier phases include Atlassian experience, Team bi0s and cryptography-heavy work, and the ECC paper. That background still matters, but it now supports a different front-facing story.",
  },
];

export const featuredWork = [
  {
    title: "Hacktivist Ecosystem Tracking",
    eyebrow: "Threat Intel Coverage",
    description:
      "Monitoring campaigns, inflated claims, recycled leaks, and the tactical reality behind hacktivist narratives across geopolitical flashpoints.",
    tags: ["Hacktivism", "Adversary Intel", "Campaign Tracking"],
  },
  {
    title: "Threat Data Automation",
    eyebrow: "Infrastructure",
    description:
      "Systems that collect, process, and normalize large volumes of threat data so investigations can move from fragmented signals to structured intelligence.",
    tags: ["Automation", "Pipelines", "Scalability"],
  },
  {
    title: "Adversary Behavior Analysis",
    eyebrow: "Research Workflow",
    description:
      "Analysis focused on how modern actors actually operate: coordinated cyber activity, influence dynamics, deception, and operational constraints.",
    tags: ["Threat Actors", "Deep Web", "Underground"],
  },
  {
    title: "ECC Paper",
    eyebrow: "Archived Publication",
    description:
      "The older ECC implementation paper remains useful as evidence of technical depth, but it now sits behind the threat-intel and automation identity.",
    tags: ["Research", "ECC", "Archive"],
  },
];

export const writing = [
  {
    date: "June 19, 2025",
    title: "Part 1: The Iran-Israel Cyber Standoff - The Hacktivist Front",
    href: "https://www.cloudsek.com/blog/part-1-the-iran-israel-cyber-standoff---the-hacktivist-front",
    summary:
      "CloudSEK analysis of coordinated pro-Iranian hacktivist activity against Israeli targets, emphasizing exaggerated claims, recycled data, and the operational reality behind the noise.",
  },
  {
    date: "May 11, 2025",
    title: "Brief Disruptions, Bold Claims: The Tactical Reality Behind the India-Pakistan Hacktivist Surge",
    href: "https://www.cloudsek.com/blog/brief-disruptions-bold-claims-the-tactical-reality-behind-the-india-pakistan-hacktivist-surge",
    summary:
      "Analysis separating inflated public claims from actual impact in the India-Pakistan cyber conflict, including the role of APT36 and broader hacktivist exaggeration.",
  },
  {
    date: "February 14, 2025",
    title: "Valentine's Day Cyber Attack Landscape: Exploiting Love Through Digital Deception",
    href: "https://www.cloudsek.com/blog/valentines-day-cyber-attack-landscape-exploiting-love-through-digital-deception",
    summary:
      "Threat-intel framing of seasonal fraud, phishing, impersonation, and scam infrastructure built around Valentine’s Day digital deception.",
  },
  {
    date: "January 20, 2025",
    title: "Facilitating Phishing and Pig Butchering Activities using Zendesk Infrastructure [Bait & Switch Mode]",
    href: "https://www.cloudsek.com/blog/facilitating-phishing-and-pig-butchering-activities-using-zendesk-infrastructure-bait-switch-mode",
    summary:
      "Investigation into how SaaS infrastructure can be repurposed for phishing and pig-butchering activity, aligning tightly with your automation-heavy threat-research identity.",
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
    text: "Still useful as proof of earlier public recognition, but now treated as historical context rather than the homepage’s center.",
  },
  {
    image: atlImage,
    title: "Atlassian",
    text: "Important background proof of product-security experience before the shift toward threat intelligence and research-heavy work.",
  },
  {
    image: blackhatImage,
    title: "Security Ecosystem Exposure",
    text: "Industry-facing events still help prove context and engagement, but they now support the threat-intel story instead of replacing it.",
  },
  {
    image: isidtuImage,
    title: "CTF and Crypto Background",
    text: "Older competition and crypto work stay visible as technical foundation, not as the main present-day identity.",
  },
];
