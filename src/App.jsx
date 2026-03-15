import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Menu, Network, Radar, Shield } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  featuredWork,
  heroStats,
  navItems,
  profile,
  proofCards,
  signalCards,
  timeline,
  writing,
} from "@/data/site";

function MotionBlock({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
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
    <div className="flex flex-wrap gap-2.5">
      {profile.links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-sm text-muted-foreground transition hover:border-white/20 hover:bg-white/[0.05] hover:text-foreground"
        >
          {link.label}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      ))}
    </div>
  );
}

function WritingRow({ item, index }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="group grid gap-4 rounded-[1.4rem] border border-white/8 bg-white/[0.02] px-5 py-5 transition hover:border-white/16 hover:bg-white/[0.045] md:grid-cols-[56px_minmax(0,1fr)_auto] md:items-start"
    >
      <div className="text-[11px] font-medium tracking-[0.24em] text-muted-foreground">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="space-y-2">
        <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{item.date}</p>
        <h3 className="max-w-3xl font-display text-xl font-semibold leading-snug tracking-[-0.03em] text-foreground md:text-2xl">
          {item.title}
        </h3>
        <p className="max-w-3xl text-sm leading-7 text-muted-foreground">{item.summary}</p>
      </div>
      <div className="inline-flex items-center gap-2 text-sm text-foreground/80 transition group-hover:text-foreground">
        Read
        <ArrowUpRight className="h-4 w-4" />
      </div>
    </a>
  );
}

function App() {
  const leadWriting = writing[0];
  const secondaryWriting = writing.slice(1);
  const practiceIcons = [Radar, Network, Shield];

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,244,245,0.055),transparent_0,transparent_38%),radial-gradient(circle_at_15%_20%,rgba(116,127,154,0.10),transparent_22%),radial-gradient(circle_at_80%_18%,rgba(74,85,104,0.12),transparent_26%),linear-gradient(180deg,rgba(8,10,14,0.96),rgba(8,10,14,1))]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/8" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-white/[0.03] blur-3xl" />

      <header className="sticky top-0 z-50 px-4 pt-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-2xl md:px-5">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-xs font-semibold tracking-[0.22em] text-foreground/90">
              PMR
            </div>
            <div className="min-w-0">
              <p className="truncate font-display text-sm font-semibold tracking-tight md:text-base">
                {profile.name}
              </p>
              <p className="truncate text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Threat Researcher
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
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
              <SheetContent className="border-white/10 bg-[#0b0d12]/96">
                <div className="mt-10 flex flex-col gap-5">
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

      <main id="top" className="relative z-10 pb-20">
        <section className="container pt-12 md:pt-16">
          <div className="grid gap-10 xl:grid-cols-[minmax(0,1.2fr)_340px]">
            <MotionBlock className="space-y-8">
              <div className="flex flex-wrap gap-2">
                {profile.badges.map((item) => (
                  <Badge key={item} variant="outline">
                    {item}
                  </Badge>
                ))}
              </div>

              <div className="space-y-5">
                <p className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                  Personal site
                </p>
                <h1 className="max-w-5xl font-display text-5xl font-semibold leading-[0.95] tracking-[-0.07em] sm:text-6xl lg:text-7xl">
                  Threat intelligence,
                  <span className="block text-foreground/74">adversary analysis,</span>
                  <span className="block text-foreground/46">and automation systems.</span>
                </h1>
                <p className="max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
                  {profile.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href="#writing">
                    Selected writing
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="/files/Pagilla_Manohar_Reddy_Resume.pdf">Resume</a>
                </Button>
              </div>

              <LinkList />
            </MotionBlock>

            <MotionBlock delay={0.08} className="xl:pt-6">
              <Card className="overflow-hidden">
                <CardContent className="space-y-6 p-6">
                  <div className="space-y-2">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                      Current lens
                    </p>
                    <p className="text-sm leading-7 text-foreground/88">
                      Threat-intelligence research shaped by public reporting, campaign tracking,
                      and the systems behind scalable monitoring.
                    </p>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    {[
                      "Hacktivist ecosystems and geopolitical cyber campaigns.",
                      "Underground, deep web, and fragmented threat-signal monitoring.",
                      "Automation that turns messy activity into usable analyst workflows.",
                    ].map((item) => (
                      <div key={item} className="rounded-[1.2rem] border border-white/8 bg-white/[0.025] p-4 text-sm leading-7 text-muted-foreground">
                        {item}
                      </div>
                    ))}
                  </div>

                  <Separator />

                  <div className="grid grid-cols-2 gap-3">
                    {heroStats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-[1.1rem] border border-white/8 bg-white/[0.025] p-4"
                      >
                        <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                          {stat.label}
                        </p>
                        <p className="mt-3 font-display text-2xl font-semibold tracking-[-0.04em]">
                          {stat.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </MotionBlock>
          </div>
        </section>

        <section id="writing" className="container pt-20 md:pt-24">
          <SectionHeading
            eyebrow="Writing"
            title="Recent public writing"
            description="The clearest public record right now is the CloudSEK work."
          />

          <div className="mt-10 grid gap-6 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <MotionBlock>
              <Card className="h-full overflow-hidden">
                <CardContent className="flex h-full flex-col justify-between gap-10 p-7 md:p-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between gap-4">
                      <Badge>Featured</Badge>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                        {leadWriting.date}
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight tracking-[-0.05em] md:text-4xl">
                        {leadWriting.title}
                      </h2>
                      <p className="max-w-2xl text-sm leading-8 text-muted-foreground md:text-base">
                        {leadWriting.summary}
                      </p>
                    </div>
                  </div>

                  <Button asChild className="w-fit">
                    <a href={leadWriting.href} target="_blank" rel="noreferrer">
                      Read article
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </MotionBlock>

            <MotionBlock delay={0.06} className="space-y-3">
              {secondaryWriting.map((item, index) => (
                <WritingRow key={item.title} item={item} index={index + 1} />
              ))}
            </MotionBlock>
          </div>
        </section>

        <section id="signal" className="container pt-20 md:pt-24">
          <SectionHeading
            eyebrow="Practice"
            title="What the work actually looks like"
            description="The site now stays close to the research profile instead of trying to over-explain it."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {signalCards.map((card, index) => {
              const Icon = practiceIcons[index] ?? FileText;

              return (
                <MotionBlock key={card.title} delay={index * 0.05}>
                  <Card className="h-full">
                    <CardContent className="space-y-6 p-6">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{card.pills[0]}</Badge>
                        <Icon className="h-4 w-4 text-foreground/60" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="font-display text-2xl font-semibold tracking-[-0.04em]">
                          {card.title}
                        </h3>
                        <p className="text-sm leading-7 text-muted-foreground">{card.copy}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {card.pills.slice(1).map((pill) => (
                          <Badge key={pill} variant="outline" className="text-[10px]">
                            {pill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </MotionBlock>
              );
            })}
          </div>
        </section>

        <section id="coverage" className="container pt-20 md:pt-24">
          <SectionHeading
            eyebrow="Coverage"
            title="Research areas"
            description="A compact view of the themes that appear across the public writing and background work."
          />

          <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-white/8 bg-white/[0.02]">
            {featuredWork.map((item, index) => (
              <MotionBlock key={item.title} delay={index * 0.04}>
                <div className="grid gap-4 border-b border-white/8 px-5 py-6 last:border-b-0 md:grid-cols-[180px_minmax(0,1fr)_220px] md:px-7">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    {item.eyebrow}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] md:text-3xl">
                      {item.title}
                    </h3>
                    <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 md:justify-end">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-[10px]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </MotionBlock>
            ))}
          </div>
        </section>

        <section id="timeline" className="container pt-20 md:pt-24">
          <SectionHeading
            eyebrow="Trajectory"
            title="How the work shifted"
            description="Current positioning leads with threat research and automation, while earlier security and cryptography work stays in view as background."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {timeline.map((item, index) => (
              <MotionBlock key={item.period} delay={index * 0.05}>
                <div className="h-full rounded-[1.6rem] border border-white/8 bg-white/[0.02] p-6">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                    {item.period}
                  </p>
                  <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-0.04em]">
                    {item.heading}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.body}</p>
                </div>
              </MotionBlock>
            ))}
          </div>
        </section>

        <section id="proof" className="container pt-20 md:pt-24">
          <SectionHeading
            eyebrow="Background"
            title="Earlier work"
            description="Older work stays as context, not as the headline."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {proofCards.map((card, index) => (
              <MotionBlock key={card.title} delay={index * 0.05}>
                <Card className="h-full overflow-hidden">
                  <div className="aspect-[4/5] overflow-hidden border-b border-white/8 bg-black/20">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover grayscale-[18%] transition duration-700 hover:scale-[1.03]"
                    />
                  </div>
                  <CardContent className="space-y-3 p-5">
                    <h3 className="font-display text-xl font-semibold tracking-[-0.03em]">
                      {card.title}
                    </h3>
                    <p className="text-sm leading-7 text-muted-foreground">{card.text}</p>
                  </CardContent>
                </Card>
              </MotionBlock>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
