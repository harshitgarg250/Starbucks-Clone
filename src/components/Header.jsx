import {useState} from 'react';
function Header({ links, name }) {
  const [isLoggedIn , setIsLoggedIn] = useState(false);

  function handleLogin(){
    // setIsLoggedIn(!isLoggedIn);
    setIsLoggedIn((previousValue)=>!previousValue); 
  }
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
      <button onClick={handleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
      <p>
        {isLoggedIn
        ?"welcome to starbucks!"
      :"Please login to continue"}
      </p>
    </header>
  );
}
export default Header;
