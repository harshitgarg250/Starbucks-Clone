function Header({ links, name }) {
  return (
    <header>
      <h2>{name}</h2>
      <nav>
        {links.map((link) => {
          return (
            <a key={link} href="/">
              {link}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
export default Header;
