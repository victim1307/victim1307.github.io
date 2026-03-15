import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  FileText,
  Menu,
  Radar,
  Shield,
} from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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

function MotionBlock({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function LinkList() {
  return (
    <div className="flex flex-wrap gap-3">
      {profile.links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border/80 px-4 py-2 text-sm text-muted-foreground transition hover:border-emerald-300/30 hover:text-foreground"
        >
          {link.label}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      ))}
    </div>
  );
}

function App() {
  const leadWriting = writing[0];
  const secondaryWriting = writing.slice(1);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(112,255,203,0.08),transparent_24%),radial-gradient(circle_at_88%_16%,rgba(130,173,255,0.08),transparent_20%),linear-gradient(180deg,rgba(8,11,18,0.96),rgba(8,11,18,1))]" />
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:72px_72px] opacity-[0.045]" />
      <div className="pointer-events-none absolute inset-y-0 left-[6%] hidden w-px bg-white/6 xl:block" />
      <div className="pointer-events-none absolute inset-y-0 right-[6%] hidden w-px bg-white/6 xl:block" />

      <header className="sticky top-0 z-50 border-b border-white/8 bg-background/82 backdrop-blur-2xl">
        <div className="container flex h-16 items-center justify-between">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-300/25 bg-emerald-300/8 font-display text-sm font-semibold text-emerald-200">
              PMR
            </div>
            <div className="min-w-0">
              <p className="truncate font-display text-base font-semibold tracking-tight">
                {profile.name}
              </p>
              <p className="truncate text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Threat Researcher at CloudSEK
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button asChild variant="outline" className="hidden md:inline-flex">
              <a href="/files/Pagilla_Manohar_Reddy_Resume.pdf">Resume</a>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden">
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Open navigation</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="border-white/10 bg-[#0d121a]/96">
                <div className="mt-12 flex flex-col gap-5">
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
        <section className="container py-10 md:py-14">
          <div className="grid gap-8 xl:grid-cols-[280px_minmax(0,1fr)]">
            <MotionBlock className="xl:sticky xl:top-24 xl:h-fit">
              <Card className="overflow-hidden border-white/10 bg-white/[0.03]">
                <CardHeader className="space-y-5 p-6">
                  <Avatar className="h-28 w-28 rounded-[1.75rem] border border-white/10">
                    <AvatarImage src={profile.image} alt={profile.name} />
                    <AvatarFallback>PMR</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <CardTitle className="text-3xl leading-tight">{profile.name}</CardTitle>
                    <CardDescription className="text-sm leading-7">
                      {profile.title}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 p-6 pt-0">
                  <div className="grid gap-3">
                    {[
                      ["Current", "Threat intelligence, cyber operations, adversary analysis"],
                      ["Focus", "Hacktivist ecosystems, campaigns, underground monitoring"],
                      ["Method", "Automation, structured collection, analyst-facing systems"],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-[1.2rem] border border-white/8 bg-white/[0.02] p-4">
                        <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
                        <p className="mt-2 text-sm leading-6 text-foreground/90">{value}</p>
                      </div>
                    ))}
                  </div>
                  <Separator className="bg-white/8" />
                  <LinkList />
                </CardContent>
              </Card>
            </MotionBlock>

            <div className="space-y-14">
              <MotionBlock className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
                <div className="space-y-8">
                  <div className="flex flex-wrap gap-2">
                    {profile.badges.map((item) => (
                      <Badge key={item} variant="outline" className="rounded-full border-white/10 bg-white/[0.02] text-[10px] tracking-[0.2em] text-foreground/75">
                        {item}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-5">
                    <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                      Personal site
                    </p>
                    <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[0.92] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                      Threat intelligence,
                      <span className="block text-foreground/70">
                        adversary tracking,
                      </span>
                      <span className="block text-emerald-200">automation.</span>
                    </h1>
                    <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                      {profile.summary}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button asChild size="lg">
                      <a href="/files/Pagilla_Manohar_Reddy_Resume.pdf">
                        Resume
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <a href="#writing">Recent writing</a>
                    </Button>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
                  {heroStats.map((stat, index) => (
                    <MotionBlock key={stat.label} delay={index * 0.05}>
                      <Card className="border-white/10 bg-white/[0.03]">
                        <CardContent className="p-5">
                          <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                            {stat.label}
                          </p>
                          <p className="mt-4 font-display text-4xl font-semibold tracking-tight">
                            {stat.value}
                          </p>
                        </CardContent>
                      </Card>
                    </MotionBlock>
                  ))}
                </div>
              </MotionBlock>

              <section id="writing" className="space-y-8">
                <SectionHeading
                  eyebrow="Writing"
                  title="Recent public writing"
                  description="Recent CloudSEK articles are the clearest public record of the work right now."
                />

                <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
                  <MotionBlock>
                    <Card className="h-full border-white/10 bg-[#0f151d]">
                      <CardHeader className="space-y-4 p-8">
                        <div className="flex items-center justify-between gap-4">
                          <Badge variant="secondary" className="rounded-full">
                            Featured article
                          </Badge>
                          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                            {leadWriting.date}
                          </p>
                        </div>
                        <CardTitle className="max-w-2xl text-4xl leading-tight">
                          {leadWriting.title}
                        </CardTitle>
                        <CardDescription className="max-w-2xl text-base leading-8">
                          {leadWriting.summary}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-8 pt-0">
                        <Button asChild>
                          <a href={leadWriting.href} target="_blank" rel="noreferrer">
                            Read article
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  </MotionBlock>

                  <MotionBlock delay={0.08}>
                    <Card className="border-white/10 bg-white/[0.03]">
                      <CardHeader className="p-6 pb-4">
                        <CardTitle className="text-2xl">Archive</CardTitle>
                        <CardDescription className="text-sm leading-7">
                          CloudSEK bylines and earlier publication work.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-6 pt-0">
                        <ScrollArea className="h-[32rem] pr-3">
                          <div className="space-y-3">
                            {secondaryWriting.map((item) => (
                              <a
                                key={item.title}
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                className="block rounded-[1.2rem] border border-white/8 bg-white/[0.02] p-5 transition hover:border-emerald-300/20 hover:bg-white/[0.04]"
                              >
                                <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                                  {item.date}
                                </p>
                                <h3 className="mt-2 font-display text-2xl font-medium leading-snug tracking-tight">
                                  {item.title}
                                </h3>
                                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                                  {item.summary}
                                </p>
                              </a>
                            ))}
                          </div>
                        </ScrollArea>
                      </CardContent>
                    </Card>
                  </MotionBlock>
                </div>
              </section>

              <section id="signal" className="space-y-8">
                <SectionHeading
                  eyebrow="Focus"
                  title="Current work and research model"
                  description="The profile leads with threat intelligence, adversary tracking, and the automation behind large-scale monitoring."
                />

                <div className="grid gap-5 lg:grid-cols-3">
                  {signalCards.map((card, index) => (
                    <MotionBlock key={card.title} delay={index * 0.06}>
                      <Card className="h-full border-white/10 bg-white/[0.03]">
                        <CardHeader>
                          <Badge variant="outline" className="w-fit rounded-full border-white/10 bg-white/[0.02]">
                            {card.pills[0]}
                          </Badge>
                          <CardTitle className="text-3xl">{card.title}</CardTitle>
                          <CardDescription className="text-base leading-8">
                            {card.copy}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                          {card.pills.slice(1).map((pill) => (
                            <Badge key={pill} variant="outline" className="rounded-full border-white/10 bg-transparent">
                              {pill}
                            </Badge>
                          ))}
                        </CardContent>
                      </Card>
                    </MotionBlock>
                  ))}
                </div>
              </section>

              <section id="coverage" className="space-y-8">
                <SectionHeading
                  eyebrow="Coverage"
                  title="Research areas"
                  description="Themes that show up most clearly in the current public work."
                />

                <div className="overflow-hidden rounded-[1.6rem] border border-white/10">
                  {featuredWork.map((item, index) => (
                    <MotionBlock key={item.title} delay={index * 0.05}>
                      <div className="grid gap-4 border-b border-white/8 bg-white/[0.02] px-6 py-6 last:border-b-0 md:grid-cols-[180px_minmax(0,1fr)_auto] md:items-start">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                            {item.eyebrow}
                          </p>
                        </div>
                        <div className="space-y-3">
                          <h3 className="font-display text-3xl font-medium tracking-tight">
                            {item.title}
                          </h3>
                          <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2 md:justify-end">
                          {item.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="rounded-full border-white/10 bg-transparent">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </MotionBlock>
                  ))}
                </div>
              </section>

              <section id="timeline" className="space-y-8">
                <SectionHeading
                  eyebrow="Timeline"
                  title="How the focus changed over time"
                  description="The earlier security and crypto background still matters, but the current center of gravity is threat research and automation."
                />

                <div className="grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
                  <MotionBlock>
                    <Card className="h-full border-white/10 bg-white/[0.03]">
                      <CardHeader>
                        <CardTitle className="text-3xl">Current emphasis</CardTitle>
                        <CardDescription className="text-base leading-8">
                          Threat research, adversary monitoring, intelligence automation, and public technical writing are now the main anchors.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {[
                          { icon: Shield, label: "Threat intelligence", text: "Campaign tracking, actor behavior, and hacktivist ecosystems." },
                          { icon: BrainCircuit, label: "Analysis", text: "Converting fragmented activity into clear investigative narratives." },
                          { icon: Radar, label: "Automation", text: "Infrastructure that makes collection and analysis operational." },
                          { icon: FileText, label: "Writing", text: "Public reporting that reflects current research direction." },
                        ].map((item) => (
                          <div key={item.label} className="flex gap-4 rounded-[1.2rem] border border-white/8 bg-white/[0.02] p-4">
                            <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-200" />
                            <div>
                              <p className="font-medium">{item.label}</p>
                              <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.text}</p>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </MotionBlock>

                  <MotionBlock delay={0.08}>
                    <div className="space-y-4">
                      {timeline.map((item) => (
                        <Card key={item.period} className="border-white/10 bg-white/[0.03]">
                          <CardHeader className="pb-4">
                            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                              {item.period}
                            </p>
                            <CardTitle className="text-3xl">{item.heading}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm leading-7 text-muted-foreground">{item.body}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </MotionBlock>
                </div>
              </section>

              <section id="proof" className="space-y-8">
                <SectionHeading
                  eyebrow="Background"
                  title="Older work that still adds context"
                  description="These items stay because they explain the technical base, even though they are no longer the main focus."
                />

                <div className="grid gap-5 md:grid-cols-2">
                  {proofCards.map((card, index) => (
                    <MotionBlock key={card.title} delay={index * 0.06}>
                      <Card className="h-full overflow-hidden border-white/10 bg-white/[0.03]">
                        <div className="aspect-[16/10] overflow-hidden border-b border-white/8">
                          <img
                            src={card.image}
                            alt={card.title}
                            className="h-full w-full object-cover grayscale-[15%] transition duration-500 hover:scale-[1.03]"
                          />
                        </div>
                        <CardHeader>
                          <CardTitle className="text-3xl">{card.title}</CardTitle>
                          <CardDescription className="text-base leading-8">
                            {card.text}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </MotionBlock>
                  ))}
                </div>
              </section>

              <section className="pb-20">
                <MotionBlock>
                  <Card className="border-white/10 bg-white/[0.03]">
                    <CardContent className="grid gap-8 p-8 lg:grid-cols-[1fr_auto] lg:items-center">
                      <div className="space-y-4">
                        <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                          Contact
                        </p>
                        <h2 className="max-w-3xl font-display text-4xl font-semibold tracking-[-0.05em]">
                          Threat intelligence, cyber operations, and automation work
                        </h2>
                        <p className="max-w-3xl text-base leading-8 text-muted-foreground">
                          For current work, the strongest public references are the CloudSEK articles and the operational research themes they cover.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <Button asChild size="lg">
                          <a href="mailto:poimnbmpoff@gmail.com">Email</a>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                          <a href="https://github.com/victim1307" target="_blank" rel="noreferrer">
                            GitHub
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </MotionBlock>
              </section>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
