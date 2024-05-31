import { formatCurrency } from "../helpers";
import type { OrderItem } from "../types";

type OrderContentProps = {
  order: OrderItem[];
};

export default function OrderContents({ order }: OrderContentProps) {
  return (
    <section className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
      <h2 className="font-black text-4xl">Consumo</h2>
      <section className="space-y-3 mt-10">
        {order.length > 0 ? (
          order.map((item) => (
            <article
              key={item.id}
              className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
            >
              <div>
                <p className="text-lg">
                  {item.name} - {formatCurrency(item.price)}
                </p>
                <p className="font-black">
                  Cantidad: {item.amount} -{" "}
                  {formatCurrency(item.price * item.amount)}
                </p>
              </div>
              <button className="bg-red-600 h-8 w-8 rounded-full text-white font-black">
                X
              </button>
            </article>
          ))
        ) : (
          <p className="text-center">La orden está vacía</p>
        )}
      </section>
    </section>
  );
}
