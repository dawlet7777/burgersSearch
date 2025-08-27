import logoLarge from '../assets/logo-large.svg'
import phoneSvg from '../assets/icons/phone-icon.svg'
import vkIcon from '../assets/icons/vk-icon.png'
import tgIcon from '../assets/icons/telegram-icon.png'

function Footer() {

    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer-top">
                        <a href="#">
                            <img className='footer-logo' src={logoLarge} alt="logo" />
                        </a>
                        <div className="footer-item">
                            <h3 className='footer-title'>Номер для заказа</h3>
                            <a className='footer-link' href="#">
                                <img src={phoneSvg} alt="phone" />
                                +7(930)833-38-11</a>
                        </div>
                        <div className="footer-item">
                            <h3 className='footer-title'>Мы в соцсетях</h3>
                            <div className="social">
                                <a className='footer-link' href="#">
                                    <img src={vkIcon} alt="vk" />
                                </a>
                                <a className='footer-link' href="#">
                                    <img src={tgIcon} alt="tg" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copy">
                        <span className="footer-copy-text">© YouMeal, 2022 <br /> Design: Anastasia Ilina</span>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer 