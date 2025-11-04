import { useState } from "react";
import type { OrderIteme } from "../types";

export default function useOrder() {

    const [order, useOrder] = useState<OrderIteme>([])

    const addItem = () => {
        console.log('Agregando Item')
    }

    return {
        addItem
    }

}
