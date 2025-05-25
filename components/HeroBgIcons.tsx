import React from "react";

interface HeroBgIconsProps {
  icons?: string[];
}

const ICON_CONFIG: Record<string, { className: string; svg: JSX.Element }> = {
  figma: {
    className: "hero-bg-icon figma",
    svg: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="24" fill="#fff" />
        <g>
          <circle cx="24" cy="14" r="6" fill="#F24E1E" />
          <circle cx="24" cy="24" r="6" fill="#A259FF" />
          <circle cx="24" cy="34" r="6" fill="#1ABCFE" />
          <circle cx="14" cy="24" r="6" fill="#0ACF83" />
          <circle cx="34" cy="24" r="6" fill="#FF7262" />
        </g>
      </svg>
    ),
  },
  photoshop: {
    className: "hero-bg-icon photoshop",
    svg: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="24" fill="#001E36" />
        <rect x="12" y="12" width="24" height="24" rx="6" fill="#31A8FF" />
        <text
          x="24"
          y="32"
          textAnchor="middle"
          fontSize="16"
          fill="#001E36"
          fontFamily="Arial, sans-serif"
          fontWeight="bold"
        >
          Ps
        </text>
      </svg>
    ),
  },
  css: {
    className: "hero-bg-icon css",
    svg: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="24" fill="#fff" />
        <path d="M12 8h24l-2.2 24.6L24 40l-9.8-7.4L12 8z" fill="#264DE4" />
        <path d="M24 36.1l7.9-5.9L34 10H24v26.1z" fill="#2965F1" />
        <path
          d="M24 20.5h-4.2l.3 3.2H24v3.2h-6.2l-.2-2.2-.2-2.2-.2-2.2H24v3.2z"
          fill="#EBEBEB"
        />
      </svg>
    ),
  },
  scss: {
    className: "hero-bg-icon scss",
    svg: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="24" fill="#fff" />
        <ellipse cx="24" cy="24" rx="12" ry="8" fill="#CD6799" />
        <text
          x="24"
          y="28"
          textAnchor="middle"
          fontSize="14"
          fill="#fff"
          fontFamily="Arial, sans-serif"
          fontWeight="bold"
        >
          SCSS
        </text>
      </svg>
    ),
  },
  html: {
    className: "hero-bg-icon html",
    svg: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="24" fill="#fff" />
        <path d="M12 8h24l-2.2 24.6L24 40l-9.8-7.4L12 8z" fill="#E44D26" />
        <path d="M24 36.1l7.9-5.9L34 10H24v26.1z" fill="#F16529" />
        <text
          x="24"
          y="32"
          textAnchor="middle"
          fontSize="14"
          fill="#fff"
          fontFamily="Arial, sans-serif"
          fontWeight="bold"
        >
          HTML
        </text>
      </svg>
    ),
  },
  js: {
    className: "hero-bg-icon js",
    svg: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="24" fill="#fff" />
        <rect x="12" y="12" width="24" height="24" rx="6" fill="#F7DF1E" />
        <text
          x="24"
          y="32"
          textAnchor="middle"
          fontSize="16"
          fill="#222"
          fontFamily="Arial, sans-serif"
          fontWeight="bold"
        >
          JS
        </text>
      </svg>
    ),
  },
  react: {
    className: "hero-bg-icon react",
    svg: (
      <svg viewBox="0 0 72 72" fill="none">
        <circle cx="36" cy="36" r="36" fill="#fff" />
        <g>
          <ellipse
            rx="20"
            ry="8"
            transform="matrix(.866 .5 -.866 .5 36 36)"
            fill="none"
            stroke="#61DAFB"
            strokeWidth="3"
          />
          <ellipse
            rx="20"
            ry="8"
            transform="matrix(.866 -.5 .866 .5 36 36)"
            fill="none"
            stroke="#61DAFB"
            strokeWidth="3"
          />
          <ellipse
            rx="20"
            ry="8"
            transform="matrix(1 0 0 1 36 36)"
            fill="none"
            stroke="#61DAFB"
            strokeWidth="3"
          />
          <circle cx="36" cy="36" r="5" fill="#61DAFB" />
        </g>
      </svg>
    ),
  },
  git: {
    className: "hero-bg-icon git",
    svg: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="24" fill="#fff" />
        <rect x="12" y="12" width="24" height="24" rx="6" fill="#F05133" />
        <g>
          <circle cx="24" cy="24" r="5" fill="#fff" />
          <circle cx="24" cy="16" r="2" fill="#fff" />
          <circle cx="24" cy="32" r="2" fill="#fff" />
        </g>
      </svg>
    ),
  },
  tailwind: {
    className: "hero-bg-icon tailwind",
    svg: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="24" fill="#fff" />
        <path
          d="M14 28c2-4 4-6 8-6s6 2 8 6c2 4 4 6 8 6s6-2 8-6"
          stroke="#38BDF8"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M14 20c2-4 4-6 8-6s6 2 8 6c2 4 4 6 8 6s6-2 8-6"
          stroke="#38BDF8"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
  },
  vscode: {
    className: "hero-bg-icon vscode",
    svg: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="24" fill="#fff" />
        <g>
          <polygon points="18,34 34,24 18,14 18,34" fill="#007ACC" />
          <polygon
            points="18,34 14,30 22,24 14,18 18,14 18,34"
            fill="#1F9CF0"
          />
        </g>
      </svg>
    ),
  },
  npm: {
    className: "hero-bg-icon npm",
    svg: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="24" fill="#fff" />
        <rect x="12" y="18" width="24" height="12" rx="2" fill="#CB3837" />
        <text
          x="24"
          y="28"
          textAnchor="middle"
          fontSize="12"
          fill="#fff"
          fontFamily="Arial, sans-serif"
          fontWeight="bold"
        >
          npm
        </text>
      </svg>
    ),
  },
  code: {
    className: "hero-bg-icon code",
    svg: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="24" fill="#fff" />
        <rect x="12" y="16" width="24" height="16" rx="4" fill="#222" />
        <text
          x="24"
          y="30"
          textAnchor="middle"
          fontSize="16"
          fill="#fff"
          fontFamily="Arial, sans-serif"
        >
          &lt;/&gt;
        </text>
      </svg>
    ),
  },
};

export const HeroBgIcons: React.FC<HeroBgIconsProps> = ({ icons = [] }) => (
  <>
    {icons.map((icon) =>
      ICON_CONFIG[icon] ? (
        <span key={icon} className={ICON_CONFIG[icon].className}>
          {ICON_CONFIG[icon].svg}
        </span>
      ) : null,
    )}
  </>
);
