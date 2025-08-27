import React from 'react'
import { useBurgerStore } from '../store/useBurgerStore'
import { motion, AnimatePresence } from 'framer-motion' // добавили
import '../index.css'

export const CardKorzina = () => {
    const { burgers, removeFromBurger, plusCount, minusCount } = useBurgerStore()

    return (
        <div className='card-korzina'>
            <AnimatePresence>
                {burgers.map((item) => (
                    <motion.div
                        className='korzina-item'
                        key={item.id}
                        initial={{ opacity: 0, y: -50 }}  // начало — сверху
                        animate={{ opacity: 1, y: 0 }}    // плавное падение
                        exit={{ opacity: 0, y: 50 }}      // уход вниз
                        transition={{ type: "spring", stiffness: 100,duration: 0.5, damping: 10 }}
                    >
                        <button onClick={() => removeFromBurger(item.id)} className='korzina-close'>X</button>
                        <img className='korzina-item-img' src={item.img} alt="" />
                        <div className='korzina-item-info'>
                            <p>{item.desc}</p>
                            <p>{item.weight} г</p>
                            <p>{item.price} руб</p>
                            
                        </div>
                        <div className='korzina-item-count'>
                            <button onClick={() => plusCount(item.id)} className='korzina-btn'>+</button>
                            <p className='korzina-count'>{item.count}</p>
                            <button onClick={() => minusCount(item.id)} className='korzina-btn'>-</button>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}