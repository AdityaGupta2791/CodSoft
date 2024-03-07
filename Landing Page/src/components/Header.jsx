
export default function Header(){
  return (
    <div className="header">
      <div className="logo">
        <h1>AnimeWorld</h1>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="/">Anime</a></li>
          <li><a href="/">Category</a></li>
          <li><a href="/">About Us</a></li>
          <li><a href="/">Contact Us</a></li>
        </ul>
      </nav>
      <div className="btn">
        <button>Login</button>
      </div>
  </div>
  );
}