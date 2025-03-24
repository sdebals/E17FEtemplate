// import { BlockCart } from '@/components/commerce/block-cart';

import {
  ProductSearch,
  type ProductSearchQuery,
  type ProductSearchQueryVariables
} from '@repo/commercetools/gql-types';
import ctQuery from '@repo/commercetools/query';
import ProductCard from '@repo/ui/product-card';
import { addProductToCart } from '../cart/actions';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/authOptions';
import { redirect } from 'next/navigation';

export default async function CtExample() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/login');
  }

  const productsQueryResult = await ctQuery<ProductSearchQuery, ProductSearchQueryVariables>(
    ProductSearch,
    {
      locale: 'en-GB',
      text: ''
    }
  );

  return (
    <div className="flex flex-col gap-y-4 px-4">
      {productsQueryResult.productProjectionSearch.results.map((product) => (
        <ProductCard
          key={product.name}
          name={product.name}
          description={product.description}
          sku={product.masterVariant.sku as string}
          addToCartAction={addProductToCart}
        />
      ))}
    </div>
  );
  // return <BlockCart />;
}
