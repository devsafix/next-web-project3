import { fetchListOfProducts } from "@/actions";

const ServerActionsExample = async () => {
  const products = await fetchListOfProducts();
  console.log(products);

  return (
    <div>
      <h1 className="text-3xl font-bold">
        Server Actions Example - server components
      </h1>
      <div>
        <ul>
          {products && products.length > 0
            ? products?.map((item) => <li key={item.id} className="list-disc ml-6">{item.title}</li>)
            : null}
        </ul>
      </div>
    </div>
  );
};

export default ServerActionsExample;
