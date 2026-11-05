/** Fixed, scroll-driven decorations: the milk-glass progress meter and the rolling cookie. */
export default function ScrollDecor() {
  return (
    <>
      <div className="milk" aria-hidden="true">
        <i />
      </div>
      <div className="roller" aria-hidden="true">
        <svg viewBox="0 0 60 60" width="58" height="58">
          <circle cx="30" cy="30" r="27" fill="#E5A650" stroke="#3A1E14" strokeWidth="4" />
          <circle cx="20" cy="22" r="4.5" fill="#4A2518" />
          <circle cx="38" cy="19" r="4" fill="#4A2518" />
          <circle cx="40" cy="38" r="5" fill="#4A2518" />
          <circle cx="23" cy="40" r="4" fill="#4A2518" />
          <circle cx="31" cy="30" r="3" fill="#4A2518" />
        </svg>
      </div>
    </>
  );
}
