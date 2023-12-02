import { products } from "../data";
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from "../";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10
        }}
      >
        {
          () => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />

            </>
          )
        }
      </ProductCard>
    </div>
  );
};
