// design_system/tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js,jsx,ts,tsx}",
    "./prototypes/**/*.html",
    "./examples/**/*.{tsx,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Base Palette
        void: 'var(--color-void)',
        paper: 'var(--color-paper)',
        'paper-2': 'var(--color-paper-2)',
        'paper-hover': 'var(--color-paper-hover)',
        
        // Text Colors
        lux: 'var(--color-lux)',
        'lux-dim': 'var(--color-lux-dim)',
        clay: 'var(--color-clay)',
        gold: 'var(--color-gold)',
        
        // Strokes
        stroke: 'var(--color-stroke)',
        'stroke-strong': 'var(--color-stroke-strong)',
        'stroke-soft': 'var(--color-stroke-soft)',

        // Status
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        error: 'var(--color-error)',
        info: 'var(--color-info)',
      },
      fontFamily: {
        sans: ['var(--font-family-sans)'],
        serif: ['var(--font-family-serif)'],
        mono: ['var(--font-family-mono)'],
      },
      borderRadius: {
        card: 'var(--radius-xl)',
        panel: 'var(--radius-2xl)',
        control: 'var(--radius-lg)',
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        lift: 'var(--shadow-lift)',
        deep: 'var(--shadow-deep)',
        gilded: 'var(--shadow-gilded)',
      }
    },
  },
  plugins: [],
}