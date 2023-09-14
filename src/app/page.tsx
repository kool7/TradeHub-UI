import Header from "./components/Header";

export default async function Home() {
  const products: Product[] = await getData();

  return (
    <div className="container mx-auto p-4">
      <Header />
      {products.length === 0 ? (
        <p className="text-2xl font-semibold text-center text-gray-600">
          No data available.
        </p>
      ) : (
        <ul className="divide-y divide-gray-300">
          {products.map((product: any) => (
            <li key={product.id} className="py-4">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p>{product.description}</p>
                </div>
                <div className="text-right">
                  <p>Units: {product.units}</p>
                  <p className="text-green-600 font-semibold">
                    Price: ${product.price}
                  </p>
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
    return ([]);
  }

  return res.json();
}
