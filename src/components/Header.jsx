import burgerSvg from '../assets/big-burger.svg'
import logoSvg from '../assets/logo.svg'

function Header() {

    return (
      <>
        <header>
          <div className="container">
            <div className="header-top">
              <a href="#">
                <img src={logoSvg} alt="logo" />
              </a>
            </div>  
            <div className="header-bottom">
              <div className="header-left">
                  <img className='header-img' src={burgerSvg} alt="burger" />
              </div>
              <div className="header-right">
                  <h1 className="header-title">Только  самые <br /> <span>сочные бургеры!</span></h1>
                  <p className="header-text">Бесплатная доставка от 599₽</p>
                  
              </div>
            </div>
            
          </div>
          <h2 style={{color: '#fff',fontSize:15,marginTop:30,textAlign:'center'}}>Автор сайта: С.Даулетияр</h2>
        </header>
      </>
    )
  }
  
  export default Header