import MenuItem from "./components/MenuItems";
import OrderContents from "./components/OrderContents";
import { menuItems } from "./data/db";
import useOrden from "./hooks/useOrden";
import OrderTotals from './components/OrderTotals';
import TipPercetageForm from "./components/TipPercetageForm";

function App() {

  const { order, addItem, tip, setTip, removeItem, placeOrder } = useOrden()

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Calculador de Propinas y Consumo
        </h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        {/* DIV DE MENUS */}
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="space-y-3 mt-10">
              {menuItems.map((item) => (
                <MenuItem
                  key={item.id}
                  item={item}
                  addItem={addItem}
                />
              ))}
          </div>
        </div>
        {/* DIV DE CONSUMOS */}
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
            { order.length > 0  ? (
                <>
                    <OrderContents
                      order={order}
                      removeItem={removeItem}
                    />
                    {/* Formulario de Propinas */}
                    <TipPercetageForm
                      setTip={setTip}
                      tip={tip}
                    />
                    {/* Total de las ordenes */}
                    <OrderTotals
                      order={order}
                      tip={tip}
                      placeOrder={placeOrder}
                    />
                </>
            ) : (
                <p className="text-center font-medium">La orden esta vacia</p>
            ) }
        </div>
      </main>
    </>
  );
}

export default App;
