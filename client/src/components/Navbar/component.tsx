import "./navbar.css";

type NavbarProps = {
   branding: string;
   navItems: JSX.Element[];
};

export function Navbar({ branding, navItems }: NavbarProps): JSX.Element {
   return (
      <nav className="navbar">
         <div className="brand-box">{branding}</div>
         <ul className="tabs">{navItems}</ul>
      </nav>
   );
}
