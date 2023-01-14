const HeaderComponent = () => {
    return (
      <>
          <div className="top_wrapper">
            <div className="search_logo_wrapper">
              <div className="logo">
                <h1>PICAZU</h1>
              </div>
  
              <div className="searchbar">
                <input type="text" /> <button>GO</button>
              </div>
            </div>
  
            <div className="profile">
              <a href="#">Log in</a>
            </div>
          </div>
      </>
    );
  };

  export default HeaderComponent;