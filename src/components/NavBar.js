import React from "react";

function NavBar() {
  const links = [
    { text: "Home", href: "#home" },
    { text: "About", href: "#about" },
    { text: "Projects", href: "#projects" },
  ];

  return (
    <nav>
      {links.map((link) => (
        <a key={link.href} href={link.href}>
          {link.text}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;

