/** Hand-drawn doodle portrait. The wobble comes from the #wob SVG filter; the eyes blink via CSS. */
export default function Portrait() {
  return (
    <svg
      className="me"
      viewBox="0 0 420 460"
      role="img"
      aria-label="Doodle portrait of Fasih: bearded, in a black cap and clear glasses, holding a bitten cookie"
    >
      <defs>
        <filter id="wob" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.025" numOctaves={2} seed="7" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="5" />
        </filter>
        <mask id="bitem">
          <rect x="0" y="0" width="420" height="460" fill="#fff" />
          <circle cx="386" cy="304" r="15" fill="#000" />
          <circle cx="399" cy="330" r="12" fill="#000" />
          <circle cx="372" cy="292" r="11" fill="#000" />
        </mask>
      </defs>
      <g filter="url(#wob)" stroke="#2A160E" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M30 460 C30 385 85 350 140 338 L280 338 C335 350 390 385 390 460 Z" fill="#8B7357" />
        <path d="M168 338 L210 425 L252 338 Z" fill="#8C8A8E" />
        <path d="M140 338 L172 330 L205 420 L170 400 Z" fill="#7A6349" />
        <path d="M280 338 L248 330 L215 420 L250 400 Z" fill="#7A6349" />
        <path d="M70 432 L110 422 L112 460" fill="none" strokeWidth="4" />
        <path d="M178 290 L178 335 Q210 355 242 335 L242 290 Z" fill="#B97A50" />
        <ellipse cx="118" cy="215" rx="13" ry="20" fill="#C58A5F" />
        <ellipse cx="302" cy="215" rx="13" ry="20" fill="#C58A5F" />
        <circle cx="320" cy="224" r="17" fill="#2B1B15" />
        <path d="M118 205 C116 135 156 105 210 105 C264 105 304 135 302 205 C302 270 266 322 210 326 C154 322 118 270 118 205 Z" fill="#C58A5F" />
        <path d="M119 215 C122 285 160 332 210 334 C260 332 298 285 301 215 C288 252 258 266 210 266 C162 266 132 252 119 215 Z" fill="#35241C" />
        <path d="M145 296 l0 0 M165 312 l0 0 M255 312 l0 0 M275 296 l0 0 M190 322 l0 0 M230 322 l0 0" stroke="#5a4033" strokeWidth="5" fill="none" />
        <path d="M114 178 C110 95 156 62 210 62 C264 62 310 95 306 178 Z" fill="#1E1C20" />
        <path d="M100 174 Q210 146 320 174 Q332 198 210 202 Q90 198 100 174 Z" fill="#1E1C20" />
        <circle cx="210" cy="62" r="8" fill="#1E1C20" />
        <path d="M172 122 l14 -24 l12 17 l12 -26 l14 30" stroke="#F2F0EA" strokeWidth="5" fill="none" />
        <rect x="140" y="207" width="60" height="42" rx="14" fill="#fff" fillOpacity=".3" />
        <rect x="220" y="207" width="60" height="42" rx="14" fill="#fff" fillOpacity=".3" />
        <path d="M200 222 Q210 214 220 222 M140 218 L121 214 M280 218 L299 214" fill="none" />
        <path d="M150 218 l14 -6 M230 218 l14 -6" stroke="#fff" strokeWidth="3" fill="none" />
        <circle className="eye" cx="170" cy="230" r="5.5" fill="#1a0f0a" stroke="none" />
        <circle className="eye" cx="250" cy="230" r="5.5" fill="#1a0f0a" stroke="none" />
        <path d="M146 203 Q168 194 192 202 M228 202 Q252 194 274 203" stroke="#2B1B15" strokeWidth="6" fill="none" />
        <path d="M210 234 Q198 262 214 266" strokeWidth="4" fill="none" />
        <path d="M168 278 Q190 264 210 276 Q230 264 252 278 Q230 292 210 286 Q190 292 168 278 Z" fill="#35241C" strokeWidth="4" />
        <path d="M188 300 Q210 318 232 300" stroke="#F3B7A0" strokeWidth="7" fill="none" />
        <ellipse cx="338" cy="436" rx="52" ry="40" fill="#8B7357" />
        <g mask="url(#bitem)">
          <circle cx="345" cy="335" r="52" fill="#E5A650" />
          <circle cx="330" cy="320" r="7" fill="#4A2518" stroke="none" />
          <circle cx="360" cy="348" r="8" fill="#4A2518" stroke="none" />
          <circle cx="336" cy="358" r="6" fill="#4A2518" stroke="none" />
          <circle cx="322" cy="342" r="5" fill="#4A2518" stroke="none" />
          <circle cx="356" cy="318" r="5" fill="#4A2518" stroke="none" />
        </g>
        <ellipse cx="318" cy="388" rx="32" ry="20" fill="#C58A5F" transform="rotate(-18 318 388)" />
        <ellipse cx="312" cy="354" rx="12" ry="17" fill="#C58A5F" transform="rotate(-20 312 354)" />
      </g>
      <g stroke="#B3202E" strokeWidth="4" strokeLinecap="round" fill="none">
        <path d="M60 120 l0 22 M49 131 l22 0" />
        <path d="M352 150 l0 16 M344 158 l16 0" />
        <path d="M40 250 l0 14 M33 257 l14 0" />
      </g>
    </svg>
  );
}
