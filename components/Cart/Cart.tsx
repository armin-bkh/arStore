import CartItem from "components/Cart/CartItem";
import { useCart } from "helpers/hooks/useCart";

const Cart = () => {
  const { cart } = useCart();

  return (
    <section className="rounded-t-3xl bg-gradient-to-b from-zinc-100/50 to-white mt-20 grid grid-cols-4 gap-5 safeArea p-5">
      {cart.map((product) => (
        <CartItem key={product._id} product={product} />
      ))}
    </section>
  );
};

export default Cart;
