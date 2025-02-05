const { useState } = React;

const sites = [
    {title: "google", component: (<div>
        gfoogle
    </div>)}, 
    {title: "youtube", component: (<div>
        youtube
    </div>)},
    {title: "facebook", component: (<div>
        facebook
    </div>)}];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSite, setCurrentSite] = useState(sites[0]);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    eel.say_hello("penis")(function(data) {
        //alert(data)
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Python Eel App</h1>
        <button className="uk-button uk-button-default" type="button" onClick={toggleMenu}>
          <span uk-icon="icon: menu"></span>
        </button>
      </header>

      <div className={`burger-menu ${menuOpen ? 'open' : ''}`}>
        <ul className="uk-nav uk-nav-default">
            {sites.map((site) => {
                return <li className={`${currentSite === site ? "uk-active" : ""}`}><a onClick={() => {
                    setCurrentSite(site) 
                    toggleMenu()
                }}><span uk-icon="icon: home"></span><span className="nav-text"> {site.title}</span></a></li>
            })}
          {/* <li className="uk-active"><a href="#"><span uk-icon="icon: home"></span><span className="nav-text"> Home</span></a></li>
          <li><a href="#"><span uk-icon="icon: info"></span><span className="nav-text"> About</span></a></li>
          <li><a href="#"><span uk-icon="icon: mail"></span><span className="nav-text"> Contact</span></a></li> */}
        </ul>
      </div>
       <div style={{paddingLeft:"50px"}}>{currentSite.component}</div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));