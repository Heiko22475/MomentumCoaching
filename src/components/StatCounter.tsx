import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Props {
  number: string
  label: string
  delay?: number
}

export default function StatCounter({ number, label, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-display font-bold text-shimmer mb-2">
        {number}
      </div>
      <div className="text-gray-400 text-sm uppercase tracking-wide">
        {label}
      </div>
    </motion.div>
  )
}
