'use client';

const LightbeamBackground: React.FC = () => {
  return (
    <div className="pointer-events-none fixed bottom-0 left-0 w-full z-[-1]">
      <svg
        className="animate-spotlight h-[50vh] w-full opacity-0 hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 3787 2842"
        fill="none"
      >
        <g filter="url(#filter)">
          <ellipse
            cx="1924.71"
            cy="273.501"
            rx="1924.71"
            ry="273.501"
            transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
            fill="white"
            fillOpacity="0.21"
          />
        </g>
        <defs>
          <filter
            id="filter"
            x="100.860352"
            y="0.938989"
            width="3785.16"
            height="2840.26"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feBlend mode="normal" in="SourceGraphic" result="shape" />
            <feGaussianBlur
              stdDeviation="200"
              result="effect1_foregroundBlur_1065_8"
            />
          </filter>
        </defs>
      </svg>
      <style jsx>{`
        @keyframes spotlight {
          0% {
            opacity: 0;
            transform: translate(-72%, -62%) scale(0.5);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, -40%) scale(1.5);
          }
        }

        .animate-spotlight {
          animation: spotlight 2s ease 0.75s 1 forwards;
        }
      `}</style>
    </div>
  );
};

export default LightbeamBackground;
