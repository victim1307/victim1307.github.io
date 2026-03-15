import { motion } from "framer-motion";

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="grid gap-4 xl:grid-cols-[160px_minmax(0,1fr)] xl:items-start"
    >
      <div>
        <p className="pt-1 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
          {eyebrow}
        </p>
      </div>
      <div className="space-y-3">
        <h2 className="max-w-3xl font-display text-3xl font-semibold leading-tight tracking-[-0.05em] text-foreground sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-base leading-8 text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
    </motion.div>
  );
}
