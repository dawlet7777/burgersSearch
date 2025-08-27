import { Modal } from "antd";
import { useBurgerStore } from "../store/useBurgerStore";
import { useState } from "react";
import { motion } from "framer-motion"; // добавили
import "../index.css";

function Card({ id, img, name, price, weight }) {
  const { addToBurger } = useBurgerStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBurger, setSelectedBurger] = useState(null);

  const handleOrderClick = () => {
    const burgerItem = { id, desc: name, price, weight, img };
    setSelectedBurger(burgerItem);
    setIsModalOpen(true);
  };

  const handleModalOk = () => {
    addToBurger(selectedBurger);
    setIsModalOpen(false);
    setSelectedBurger(null);
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
    setSelectedBurger(null);
  };

  return (
    <>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 20 }}   // начальное состояние
        animate={{ opacity: 1, y: 0 }}    // финальное состояние
        exit={{ opacity: 0, y: -20 }}     // при уходе
        transition={{ duration: 0.3 }}    // скорость анимации
      >
        <img className="card-img" src={img} alt={name} />
        <p className="card-price">{price}₽</p>
        <p className="card-desc">{name}</p>
        <p className="card-weight">{weight}г</p>
        <button className="card-btn" onClick={handleOrderClick}>
          Добавить
        </button>
      </motion.div>

      <Modal
        title="Добавить в корзину"
        open={isModalOpen}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        style={{ top: 340 }}
        okText="Добавить в корзину"
        cancelText="Отмена"
      >
        {selectedBurger && (
          <div className="modal-content">
            <img
              className="modal-img"
              src={selectedBurger.img}
              alt={selectedBurger.desc}
              style={{
                width: "350px",
                paddingLeft: "40px",
                borderRadius: "8px",
              }}
            />
            <div className="modal-info">
              <h2>Название еды: {selectedBurger.desc}</h2>
              <p>Цена: {selectedBurger.price}₽</p>
              <p>Вес: {selectedBurger.weight}г</p>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}

export default Card;