export const easePremium: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export const revealVariant = (x = 0, y = 40, delay = 0) => ({
  hidden: { opacity: 0, x, y },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: easePremium,
    },
  },
});
