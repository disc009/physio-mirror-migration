import { Link, useRouterState } from "@tanstack/react-router";

const TOP = [
  { to: "/datenschutz", label: "Datenschutz" },
  { to: "/impressum", label: "Impressum" },
  { to: "/anfahrt", label: "Anfahrt" },
  { to: "/", label: "Home" },
];

const MAIN = [
  { to: "/team", label: "TEAM" },
  { to: "/therapie", label: "THERAPIE" },
  { to: "/praxis", label: "PRAXIS" },
  { to: "/kontakt", label: "KONTAKT" },
];

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const isActive = (to: string) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  return (
    <header className="site-header" role="banner">
      <div className="topmenu" role="navigation" aria-label="Sekundär">
        <ul>
          {TOP.map((i) => (
            <li key={i.to}>
              <Link to={i.to} className={isActive(i.to) ? "active" : ""}>
                {i.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="header-inner">
        <div className="logo">
          <Link to="/" title="Startseite">
            <img
              src="https://www.physio-bueren.de/wp-content/themes/physio/img/logo-physiotherapie-zentrum-bueren_2.jpg"
              width={284}
              height={96}
              alt="Physiotherapie Zentrum Rosenstraße Büren"
            />
          </Link>
        </div>
        <nav className="mainmenu" aria-label="Hauptnavigation">
          <ul>
            {MAIN.map((i) => (
              <li key={i.to}>
                <Link to={i.to} className={isActive(i.to) ? "active" : ""}>
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
