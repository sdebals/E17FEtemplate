import { CartActionButton } from '../atoms/cart-add-button';
import { CartRemoveButton } from '../atoms/cart-remove-button';

const ProductCard = ({
  name,
  description,
  sku,
  addToCartAction,
  isInCart,
  quantity,
  removeLineItemFromCartAction
}: {
  name?: string | null;
  description?: string | null;
  addToCartAction?: (productSku: string, quantity: number) => Promise<any>;
  removeLineItemFromCartAction?: () => Promise<void>;
  sku: string;
  isInCart?: boolean;
  quantity?: number;
}) => {
  return (
    <div className="flex gap-x-4 border p-4">
      <div>
        <h2 className="font-bold">{name}</h2>
        <p>{description}</p>
      </div>
      {quantity ? <span>x {quantity}</span> : null}
      {!isInCart ? (
        <CartActionButton sku={sku} addToCartAction={addToCartAction} />
      ) : (
        <CartRemoveButton removeFromCart={removeLineItemFromCartAction} />
      )}
    </div>
  );
};

export default ProductCard;
