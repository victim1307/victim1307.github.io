import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  FileText,
  Menu,
  Radar,
  Shield,
  Sparkles,
} from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  featuredWork,
  heroStats,
  navItems,
  profile,
  proofCards,
  signalCards,
  tabs,
  timeline,
  writing,
} from "@/data/site";

function MotionCard({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(32,201,151,0.18),transparent_25%),radial-gradient(circle_at_85%_15%,rgba(255,184,76,0.16),transparent_20%),linear-gradient(180deg,rgba(8,15,24,0.96),rgba(7,10,16,1))]" />
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:52px_52px] opacity-[0.08]" />
      <div className="pointer-events-none absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-emerald-400/25 blur-3xl" />
      <div className="pointer-events-none absolute right-[-5rem] top-48 h-80 w-80 rounded-full bg-amber-300/20 blur-3xl" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-background/70 backdrop-blur-2xl">
        <div className="container flex h-20 items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 via-orange-400 to-emerald-400 font-display text-lg font-bold text-slate-950">
              PMR
            </div>
            <div className="space-y-0.5">
              <p className="font-display text-lg font-semibold tracking-tight">{profile.name}</p>
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                Security systems, but sharper
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-muted-foreground transition hover:text-foreground">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="hidden md:inline-flex">
                  Why this redesign
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Why the site now looks like this</DialogTitle>
                  <DialogDescription>
                    The public record says security operator, technical writer, builder, and cryptography competitor.
                    So the UI stops pretending this is a generic resume and leans into signal, proof, and current public work.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 text-sm leading-7 text-muted-foreground">
                  <p>
                    The strongest recent public signal is not coursework. It is published security writing, a research paper,
                    product-security experience, and competition-heavy cryptography work.
                  </p>
                  <p>
                    The homepage is structured around that: signal, timeline, work, writing, and proof. Every major block is
                    built with shadcn/ui primitives instead of theme leftovers.
                  </p>
                </div>
              </DialogContent>
            </Dialog>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden">
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Open navigation</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="mt-10 flex flex-col gap-4">
                  {navItems.map((item) => (
                    <a key={item.href} href={item.href} className="text-lg font-medium text-foreground">
                      {item.label}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main id="top" className="relative z-10">
        <section className="container py-16 md:py-24">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="space-y-8"
            >
              <div className="flex flex-wrap gap-3">
                {profile.badges.map((item, index) => (
                  <Badge key={item} variant={index % 2 ? "secondary" : "default"}>
                    {item}
                  </Badge>
                ))}
              </div>

              <div className="space-y-5">
                <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                  Product security,
                  <span className="block bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200 bg-clip-text text-transparent">
                    cryptography, and public proof.
                  </span>
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                  {profile.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href="/files/Pagilla_Manohar_Reddy_Resume.pdf">
                    Open resume
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="mailto:poimnbmpoff@gmail.com">Start a conversation</a>
                </Button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {heroStats.map((stat, index) => (
                  <MotionCard key={stat.label} delay={index * 0.08}>
                    <Card className="overflow-hidden">
                      <CardContent className="p-5">
                        <p className="font-display text-3xl font-semibold tracking-tight text-foreground">
                          {stat.value}
                        </p>
                        <p className="mt-2 text-sm uppercase tracking-[0.18em] text-muted-foreground">
                          {stat.label}
                        </p>
                      </CardContent>
                    </Card>
                  </MotionCard>
                ))}
              </div>
            </motion.div>

            <MotionCard delay={0.15} className="relative">
              <Card className="relative overflow-hidden">
                <div className="absolute inset-x-6 top-6 h-24 rounded-full bg-emerald-400/30 blur-3xl animate-pulsebeam" />
                <CardHeader className="relative">
                  <div className="flex items-center justify-between">
                    <Badge>Live profile</Badge>
                    <Badge variant="outline">Shadcn UI</Badge>
                  </div>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-24 w-24 border border-white/10 shadow-glow">
                      <AvatarImage src={profile.image} alt={profile.name} />
                      <AvatarFallback>PMR</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <CardTitle className="text-3xl">{profile.name}</CardTitle>
                      <CardDescription className="max-w-sm text-base leading-7">
                        {profile.title}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative space-y-5">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      { icon: Shield, label: "Operator lens", text: "Product security and application security thinking." },
                      { icon: BrainCircuit, label: "Crypto depth", text: "Research and competition around cryptographic systems." },
                      { icon: Radar, label: "Recon builder", text: "Tooling and automation that reduce investigation noise." },
                      { icon: FileText, label: "Public writing", text: "Recent CloudSEK bylines and indexed research output." },
                    ].map((item) => (
                      <div key={item.label} className="rounded-[1.4rem] border border-white/10 bg-black/20 p-4">
                        <item.icon className="mb-3 h-5 w-5 text-emerald-300" />
                        <p className="font-medium text-foreground">{item.label}</p>
                        <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.text}</p>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  <div className="flex flex-wrap gap-3">
                    {profile.links.map((link) => (
                      <Button key={link.label} asChild variant="ghost" className="rounded-full px-0 text-muted-foreground hover:text-foreground">
                        <a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                          {link.label}
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </MotionCard>
          </div>

          <div className="mt-10 overflow-hidden rounded-full border border-white/10 bg-black/20 py-3">
            <div className="flex min-w-max animate-marquee gap-3 pr-3">
              {[...profile.badges, ...profile.badges, "CloudSEK Writing", "ECC Paper", "Threat Research", "CTF Finals"].map((item) => (
                <Badge key={item} variant="outline" className="ml-3">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        <section id="signal" className="container py-14">
          <SectionHeading
            eyebrow="Signal"
            title="The homepage now tells the story your public record already tells."
            description="The important shift is from generic portfolio language to current security identity: operator, builder, writer, and cryptography-heavy problem solver."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {signalCards.map((card, index) => (
              <MotionCard key={card.title} delay={index * 0.08}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Sparkles className="h-5 w-5 text-amber-200" />
                      <Badge variant={index === 1 ? "secondary" : "default"}>{card.pills[0]}</Badge>
                    </div>
                    <CardTitle>{card.title}</CardTitle>
                    <CardDescription className="text-base leading-8">{card.copy}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {card.pills.map((pill) => (
                      <Badge key={pill} variant="outline">
                        {pill}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              </MotionCard>
            ))}
          </div>
        </section>

        <section className="container py-14">
          <Tabs defaultValue="now" className="space-y-6">
            <SectionHeading
              eyebrow="View"
              title="What you do now, what you have built, and what proves it."
              description="This replaces vague about-copy with a sharper split between current signal, built work, and public proof."
            />
            <TabsList className="w-full justify-start overflow-x-auto">
              <TabsTrigger value="now">Now</TabsTrigger>
              <TabsTrigger value="built">Built</TabsTrigger>
              <TabsTrigger value="proof">Proof</TabsTrigger>
            </TabsList>

            {Object.entries(tabs).map(([key, items]) => (
              <TabsContent key={key} value={key}>
                <div className="grid gap-5 lg:grid-cols-2">
                  {items.map((item, index) => (
                    <MotionCard key={item.title} delay={index * 0.07}>
                      <Card className="h-full">
                        <CardHeader>
                          <Badge className="w-fit" variant="outline">
                            {item.label}
                          </Badge>
                          <CardTitle>{item.title}</CardTitle>
                          <CardDescription className="text-base leading-8">{item.copy}</CardDescription>
                        </CardHeader>
                      </Card>
                    </MotionCard>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        <section id="timeline" className="container py-14">
          <SectionHeading
            eyebrow="Timeline"
            title="The path is clearer when it is shown as phases, not filler."
            description="This section compresses the story into a sequence the reader can understand in under a minute."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <MotionCard>
              <Card className="h-full">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit">
                    Profile summary
                  </Badge>
                  <CardTitle>Where the center of gravity really is</CardTitle>
                  <CardDescription className="text-base leading-8">
                    Product security, threat research, cryptography competition, and public technical writing are the strongest
                    anchors. The UI and copy now reinforce that instead of scattering attention.
                  </CardDescription>
                </CardHeader>
              </Card>
            </MotionCard>

            <MotionCard delay={0.1}>
              <Accordion type="single" collapsible className="space-y-4">
                {timeline.map((item, index) => (
                  <AccordionItem key={item.period} value={item.period}>
                    <AccordionTrigger className="text-lg">
                      <div className="flex flex-col text-left">
                        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{item.period}</span>
                        <span className="mt-1 font-display text-2xl font-semibold tracking-tight">
                          {item.heading}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-8">
                      {item.body}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </MotionCard>
          </div>
        </section>

        <section id="work" className="container py-14">
          <SectionHeading
            eyebrow="Work"
            title="Featured builds chosen for narrative weight, not because they fill a grid."
            description="These are the pieces that best explain what you build and how you think."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {featuredWork.map((item, index) => (
              <MotionCard key={item.title} delay={index * 0.08}>
                <Card className="group h-full overflow-hidden">
                  <CardHeader>
                    <Badge variant={index % 2 ? "secondary" : "default"} className="w-fit">
                      {item.eyebrow}
                    </Badge>
                    <CardTitle className="transition group-hover:text-emerald-200">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-8">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              </MotionCard>
            ))}
          </div>
        </section>

        <section id="writing" className="container py-14">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading
              eyebrow="Writing"
              title="Recent public writing gets its own command center."
              description="That is the most current public evidence of ongoing security work, so it should not be buried below hobby projects."
            />

            <MotionCard>
              <Card className="overflow-hidden">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit">
                    Published online
                  </Badge>
                  <CardTitle>Articles, paper, and what they imply</CardTitle>
                  <CardDescription className="text-base leading-8">
                    The latest public signal is technical writing through CloudSEK, plus the earlier ECC paper.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[26rem] pr-4">
                    <div className="space-y-4">
                      {writing.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="block rounded-[1.4rem] border border-white/10 bg-background/40 p-5 transition hover:border-emerald-300/40 hover:bg-background/70"
                        >
                          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{item.date}</p>
                          <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">
                            {item.title}
                          </h3>
                          <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.summary}</p>
                          <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-emerald-200">
                            Open source
                            <ArrowUpRight className="h-4 w-4" />
                          </div>
                        </a>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </MotionCard>
          </div>
        </section>

        <section id="proof" className="container py-14">
          <SectionHeading
            eyebrow="Proof"
            title="Archived wins and public moments still matter, but they now support the current story."
            description="Older highlights remain valuable as proof, not as the entire homepage."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {proofCards.map((card, index) => (
              <MotionCard key={card.title} delay={index * 0.08}>
                <Card className="h-full overflow-hidden">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{card.title}</CardTitle>
                    <CardDescription className="text-base leading-8">{card.text}</CardDescription>
                  </CardHeader>
                </Card>
              </MotionCard>
            ))}
          </div>
        </section>

        <section className="container py-16">
          <MotionCard>
            <Card className="overflow-hidden bg-gradient-to-br from-emerald-400/10 via-background/80 to-amber-300/10">
              <CardContent className="grid gap-8 p-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="space-y-4">
                  <Badge variant="secondary" className="w-fit">
                    End state
                  </Badge>
                  <h2 className="max-w-3xl font-display text-4xl font-semibold tracking-[-0.05em]">
                    The site now reads like a security profile with actual signal.
                  </h2>
                  <p className="max-w-3xl text-base leading-8 text-muted-foreground">
                    Built with shadcn/ui components, aimed at GitHub Pages static hosting, and reorganized around what the
                    public record says you are doing now and what you have already proven.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="lg">
                    <a href="mailto:poimnbmpoff@gmail.com">Reach out</a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href="https://github.com/victim1307" target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </MotionCard>
        </section>
      </main>
    </div>
  );
}

export default App;
