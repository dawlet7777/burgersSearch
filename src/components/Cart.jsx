import { useState } from "react";
import deliveryIcon from "../assets/icons/delivery-icon.svg";
import { useBurgerStore } from "../store/useBurgerStore";
import { CardKorzina } from "./CardKorzina";
import { Modal } from "antd";
import { motion, AnimatePresence } from 'framer-motion' // добавили
function Cart() {
    const { burgers, clearBurger, totalPrice } = useBurgerStore();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOrderClick = () => {
        if (burgers.length > 0) {
            setIsModalOpen(true);
        }
    };

    const handleModalOk = () => {
        setIsModalOpen(false);

    };

    const clearBurgers = () => {
        clearBurger()

    }

    const handleModalCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="cart">
            <div className="cart-top">
                <h2 className="cart-title">Корзина</h2>
                <button style={{ color: 'red', border: '1px solid red' }} onClick={clearBurger} className="cart-clear">Clear</button>
                <p style={{ color: 'red', border: '1px solid red', borderRadius: '50%', padding: '7px', fontSize: '13px' }} className="cart-count">{burgers.reduce((acc, item) => acc + item.count, 0)}</p>
            </div>

            <AnimatePresence className="cart-bottom">
                <CardKorzina />
                <motion.div>
                    <div className="cart-sum">
                        Итого: <span style={{ fontWeight: "bold", color: 'red' }} className="cart-sum-price">{totalPrice()} ₽</span>
                    </div>
                    <button
                        onClick={handleOrderClick}
                        className={burgers.length === 0 ? "cart-btn-disabled" : "cart-btn"}
                        disabled={burgers.length === 0}
                    >
                        Оформить заказ
                    </button>

                    <div className="cart-delivery">
                        <img className="delivery-icon" src={deliveryIcon} alt="delivery" />
                        <p className="deliry-text">Бесплатная доставка</p>
                    </div>
                </motion.div>

            </AnimatePresence>

            <Modal
                title="Оформление заказа"
                open={isModalOpen}
                onOk={handleModalOk}
                onCancel={handleModalCancel}
                style={{ top: 340 }}
            >
                <div className="modal-input">
                    <input placeholder="Ваше имя" type="text" />
                    <input placeholder="Номер телефона" type="number" />
                    <input placeholder="Адрес доставки" type="text" />
                </div>
                <div>
                    <h3>Всего еды было куплено: {burgers.reduce((acc, item) => acc + item.count, 0)}</h3>
                    <h3>Итого: {totalPrice()}₽</h3>
                </div>
                <div>
                    <button onClick={clearBurgers} className="modal-btn">Купить</button>
                </div>
            </Modal>
        </div>
    );
}

export default Cart;