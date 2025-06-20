"use client";

// ** React Imports
import { useEffect, useRef } from "react";

const FlowLineBackground = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const animationRef = useRef<number>(null);
  const offsetRef = useRef(0);
  const speed = 900; // set 15 * 60

  useEffect(() => {
    let lastTime = performance.now();

    const animate = (time: number) => {
      const delta = (time - lastTime) / 1000; // seconds
      lastTime = time;

      offsetRef.current -= speed * delta;

      const path = pathRef.current;
      if (path) {
        path.style.setProperty(
          "stroke-dashoffset",
          offsetRef.current.toString(),
        );
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <svg
      viewBox="0 0 1920 779"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full">
      <g filter="url(#filter0_f)">
        <path
          ref={pathRef}
          d="M2087 308.5C1974 236.833 1691.4 145.6 1465 354C1182 614.5 1965.5 427.5 1556 207.5C1146.5 -12.5 788 331 762.5 490.5C737 650 1354.5 230 671.5 184.5C-11.5 139 381 -17.5 588 83.5C795 184.5 286.5 834 -62 543.5C-410.5 253 492 414.5 176 905"
          stroke="white"
          strokeOpacity="0.06"
          strokeWidth="40"
          style={{
            strokeDasharray: 5000,
            strokeDashoffset: 0,
            willChange: "stroke-dashoffset",
          }}
        />
      </g>
      <defs>
        <filter
          id="filter0_f"
          x="-193.436"
          y="0.173615"
          width="2321.15"
          height="945.658"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur" />
        </filter>
      </defs>
    </svg>
  );
};

export default FlowLineBackground;
