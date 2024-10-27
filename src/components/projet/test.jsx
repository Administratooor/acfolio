
export const test = () => (
    <motion.div
      className="container"
      initial={{ backgroundSize: "100%" }}
      animate={{ backgroundSize: "200%" }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 40,
        repeat: Infinity,
        repeatType: "mirror",
        repeatDelay: 0.2,
      }}
    />
  ); 
  