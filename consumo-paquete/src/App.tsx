import { ProductCard, ProductTitle, ProductImage, ProductButtons } from 'ks-ec-product-card'

function App() {

  const product = {
    id: '1',
    title: 'Coffe Mug - Card',
    // img: './coffe-mug.png'
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center', alignItems: 'center', backgroundColor: '#485663', margin: 0, padding: 0, width: '100vw', height: '100vh' }}>
      <h1 style={{ fontSize: '50px', fontWeight: 'bold', color: 'white' }}>Product Card</h1>
      <ProductCard
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
}

export default App;
