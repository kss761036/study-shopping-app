// ProductPage.tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type ProductType = {
  id: string;
  name: string;
  explanation: string;
  price: number;
  thumbnail?: string;
};

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    fetch(`/product/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data.product));
  }, [productId]);

  if (!product) {
    return <h1>존재하지 않는 상품입니다.</h1>;
  }

  return (
    <div className="max-w-xl w-full mx-auto h-full py-10">
      <h1 className="text-2xl font-bold text-center mb-4">{product?.name}</h1>
      <div className="overflow-hidden rounded-xl mb-4 border-black border">
        <img className="w-full" src={product?.thumbnail} alt={product?.name} />
      </div>
      <ul>
        <li className=" mb-4">
          <div className="text-md">가격</div>
          <div className="text-sm p-3 bg-blue-50 overflow-hidden rounded-lg mt-2">
            {product?.price.toLocaleString()}원
          </div>
        </li>
        <li className=" mb-4">
          <div className="text-md">내용</div>
          <div className="text-sm p-3 bg-blue-50 overflow-hidden rounded-lg mt-2">
            {product?.explanation}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProductPage;
