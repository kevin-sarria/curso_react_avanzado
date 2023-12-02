# KS-Product-Card

Este es un paquete de pruebas de despliegue en npm


### Kevin Sarria

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'ks-product-card';
```

```
<ProductCard
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10
        }}
      >
        {
          ({ reset, count, isMaxCountReached, maxCount, increaseBy }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />

            </>
          )
        }
</ProductCard>
```