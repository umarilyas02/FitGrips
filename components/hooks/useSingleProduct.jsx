import axios from 'axios';

async function useSingleProduct(slug) {
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_PRODUCTS_API_SLUG}${slug}`;
    
    const res = await axios.get(apiUrl);

    const data = await res.data
    return data
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }

}

export { useSingleProduct };