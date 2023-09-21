import Header from "./components/Header";
import { HOME } from "./constants/pages/Home.const";

export default async function Home() {
  const products: Product[] = await getData();

  return (
    <div className={HOME.CONTAINER}>
      <Header />
      {products.length === 0 ? (
        <p className={HOME.NO_DATA_AVAILABLE}>No data available.</p>
      ) : (
        <ul className={HOME.UL}>
          {products.map((product: any) => (
            <li key={product.id} className={HOME.LI}>
              <div className={HOME.LI_DIV}>
                <div>
                  <h2 className={HOME.PRODUCT_NAME}>{product.name}</h2>
                  <p>{product.description}</p>
                </div>
                <div className={HOME.LI_SUBDIV_2}>
                  <p>Units: {product.units}</p>
                  <p className={HOME.PRODUCT_PRICE}>Price: ${product.price}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

async function getData() {
  const res = await fetch(process.env.NEXT_PUBLIC_MOCK_REST_URL as string);

  if (!res.ok) {
    return [];
  }

  return res.json();
}
