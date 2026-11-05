const EMAIL_HREF =
  "mailto:fasihrana98@gmail.com?subject=Hello%20Crumble%20%E2%80%94%20Fasih%20Rana%20(Full%20Stack%20Developer)";

const contacts = [
  { label: "WhatsApp 0302 3454259", href: "https://wa.me/923023454259" },
  { label: "LinkedIn", href: "https://linkedin.com/in/fasih-rana-2108a6227" },
  { label: "GitHub", href: "https://github.com/Fasih-25" },
  { label: "Portfolio", href: "https://fasih-ranaportfolio.netlify.app" },
];

export default function Order() {
  return (
    <footer className="foot" id="order">
      <div className="wrap">
        <span className="hand kicker" style={{ color: "var(--dough)" }}>
          ready to order?
        </span>
        <h2>
          Let&apos;s spread happiness, <em>one commit</em> at a time.
        </h2>
        <div className="dunk" aria-hidden="true">
          <svg className="dunkc" viewBox="0 0 60 60">
            <circle cx="30" cy="30" r="27" fill="#E5A650" stroke="#FFF4E2" strokeWidth="3" />
            <circle cx="20" cy="22" r="4.5" fill="#4A2518" />
            <circle cx="38" cy="19" r="4" fill="#4A2518" />
            <circle cx="40" cy="38" r="5" fill="#4A2518" />
            <circle cx="23" cy="40" r="4" fill="#4A2518" />
            <circle cx="31" cy="30" r="3" fill="#4A2518" />
          </svg>
          <div className="glass" />
        </div>
        <a className="btn b-dough" href={EMAIL_HREF}>
          Email me · fasihrana98@gmail.com
        </a>
        <div className="contacts">
          {contacts.map((contact) => (
            <a key={contact.href} href={contact.href}>
              {contact.label}
            </a>
          ))}
        </div>
        <p className="hand sign">Warmly, Fasih</p>
        <p className="fine">Muhammad Fasih Rana · Islamabad, Pakistan · Available immediately</p>
      </div>
    </footer>
  );
}
