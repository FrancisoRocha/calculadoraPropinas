import formatCurrency from "../helpers";
import type { MenuItem, OrderItem } from "../types";

type OrderContentsProps = {
    order: OrderItem[];
    removeItem: (id: MenuItem["id"]) => void;
};

export default function OrderContents({
    order,
    removeItem,
}: OrderContentsProps) {
    return (
        <div>
            <h2 className="font-black text-4xl">Consumo</h2>

            <div className="space-y-3 mt-10">
                {order.map((item) => (
                    <div
                        key={item.id}
                        className="flex justify-between itmes-center
                                border-t border-gray-300 py-5 last-of-type:border-b"
                    >
                        <div>
                            <p className="text-lg">
                                {item.name} - {formatCurrency(item.price)}
                            </p>
                            <p className="font-black">
                                Cantidad: {item.quantity} -{" "}
                                {formatCurrency(item.price * item.quantity)}
                            </p>
                        </div>
                        <button
                            className="bg-red-600 w-8 h-8 rounded-full
                                    text-white font-black cursor-pointer"
                            onClick={() => removeItem(item.id)}
                        >
                            x
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
