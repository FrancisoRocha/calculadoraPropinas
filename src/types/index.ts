
export type MenuItem = {
  id: number;
  name: string;
  price: number;
};

export type OrderIteme = MenuItem & {
    quantity : number
}
