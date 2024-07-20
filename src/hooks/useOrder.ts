import { useState } from 'react'
import type { MenuItem, OrderItem } from '../types'

export default function useOrder() {
    // sirve para mantener un objeto con esas propiedades
    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

    const addItem = (item: MenuItem)=>{
        const itemExist = order.find(orderItem => orderItem.id === item.id)

        // Evitar duplicados
        if(itemExist){
            const updateOrder = order.map(orderItem => orderItem.id === item.id ? 
                {...orderItem, quantity: orderItem.quantity + 1} : 
                orderItem)
            setOrder(updateOrder)
        }else{
            const newItem = {...item, quantity: 1}
            setOrder([...order,newItem])
        }   
    }

    const removeItem = (id: MenuItem['id']) => {
        setOrder(order.filter(item => item.id !== id))
    }

    const placeOrder = ()=> {
        // Reiniciar el estado
        setOrder([])
        setTip(0)
    }

    return {
        order,
        tip, 
        setTip,
        addItem,
        removeItem,
        placeOrder
    }
  
}
