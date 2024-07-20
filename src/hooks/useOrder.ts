import { useState } from 'react'
import type { OrderItem } from '../types'

export default function useOrder() {
    // sirve para mantener un objeto con esas propiedades
    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

    const placeOrder = ()=> {
        // Reiniciar el estado
        setOrder([])
        setTip(0)
    }

    return {
        order,
        tip,
        placeOrder
    }
  
}
