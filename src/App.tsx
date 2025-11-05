import MenuItem from "./components/MenuItems";
import OrderContents from "./components/OrderContents";
import { menuItems } from "./data/db";
import useOrden from "./hooks/useOrden";

function App() {

  const { order, addItem, removeItem } = useOrden()

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
          <OrderContents
            order={order}
            remveItem={removeItem}
          />
        </div>
      </main>
    </>
  );
}

export default App;
