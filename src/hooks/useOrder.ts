import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);

  const addItem = (item: MenuItem) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);
    if (itemIndex >= 0) {
      const updatedOrder = [...order];
      updatedOrder[itemIndex].amount += 1;
      setOrder(updatedOrder);
    } else {
      const newItem = { ...item, amount: 1 };
      setOrder([...order, newItem]);
    }
  };

  return {
    order,
    addItem,
  };
}
