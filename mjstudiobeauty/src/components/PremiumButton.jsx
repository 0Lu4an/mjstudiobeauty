import { useRipple, RippleContainer } from './RippleEffect';

export function PremiumButton({
  children,
  variant = 'primary',
  onClick,
  className = ''
}) {
  const { ripples, createRipple } = useRipple();

  const baseStyles =
    "relative overflow-hidden px-6 lg:px-8 py-3 lg:py-4 rounded-full font-light text-sm lg:text-base tracking-wide transition-all duration-300 group cursor-pointer inline-flex items-center justify-center gap-2";

  const variants = {
    primary:
      "bg-[#1a1a1a] text-white hover:bg-[#2a2a2a] hover:shadow-2xl hover:shadow-black/20 hover:scale-[1.02]",

    secondary:
      "bg-white text-[#1a1a1a] border border-[#e5e5e5] hover:border-[#1a1a1a] hover:shadow-lg hover:shadow-black/5",

    ghost:
      "bg-white/10 text-white border border-white/20 hover:bg-white hover:text-[#1a1a1a] backdrop-blur-sm"
  };

  const handleClick = (e) => {
    createRipple(e);

    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={handleClick}
    >
      <RippleContainer ripples={ripples} />

      <span className="relative z-10 flex items-center gap-2">
        {children}

        <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-xs lg:text-sm">
          →
        </span>
      </span>
    </button>
  );
}