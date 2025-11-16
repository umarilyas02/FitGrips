import Image from 'next/image';
import { useSingleProduct } from '@/components/hooks/useSingleProduct';


export default async function ProductPage({ params }) {
  // 1. Get the slug value from params
  const { slug } = await params;
  

  // 2. Fetch the product using the slug
  const productData = await useSingleProduct(slug);
  const product = productData && Array.isArray(productData) && productData.length > 0
  ? productData[0]
  : null;

  // Handle case where API returns no product for the slug
  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] p-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">404 | Product Not Found</h1>
        <p className="text-gray-600">The product you&apos;re looking for doesn&apos;t exist or has been removed permanently.</p>
      </div>
    );
  }

  // Parse product images if they're stored as JSON string
  let productImages = [];
  try {
    if (product.product_img && typeof product.product_img === 'string') {
      const parsed = JSON.parse(product.product_img);
      if (Array.isArray(parsed)) {
        productImages = parsed;
      }
    }
  } catch (e) {
    console.error('Failed to parse product images:', e);
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative aspect-square w-full rounded-2xl overflow-hidden">
            {productImages.length > 0 && productImages[0].img ? (
              <Image
                src={productImages[0].img}
                alt={product.product_name || 'Product'}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">No image available</p>
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl md:text-4xl font-bold">{product.product_name}</h1>
            
            <div className="flex items-center gap-3">
              {product.price && (
                <span className="text-lg text-gray-500 line-through">
                  PKR {Number(product.price).toFixed(2)}
                </span>
              )}
              {product.sale_price && (
                <span className="text-2xl md:text-3xl font-bold text-green-600">
                  PKR {Number(product.sale_price).toFixed(2)}
                </span>
              )}
            </div>

            {product.price && product.sale_price && (
              <div className="inline-block bg-yellow-400 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold w-fit">
                Save PKR {(product.price - product.sale_price).toFixed(2)}
              </div>
            )}

            <div className="border-t border-b py-4 my-2">
              <p className="text-gray-700">{product.short_desc || product.description}</p>
            </div>

            {product.long_desc && (
              <div className="prose max-w-none">
                <div dangerouslySetInnerHTML={{ __html: product.long_desc }} />
              </div>
            )}

            <button className="mt-4 w-full bg-black text-white py-4 px-6 rounded-full font-semibold hover:bg-gray-800 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}