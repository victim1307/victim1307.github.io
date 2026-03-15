import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <Badge variant="secondary" className="w-fit">
        {eyebrow}
      </Badge>
      <div className="space-y-3">
        <h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight tracking-[-0.04em] text-foreground sm:text-5xl">
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
