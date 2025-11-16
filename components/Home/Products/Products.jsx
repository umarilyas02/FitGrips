import React from 'react'
import ProductsDisplay from './ProductsDisplay'

const Products = () => {
  return (
    <>
    <main className='w-full overflow-x-hidden'>

        <ProductsDisplay title='Wrist Wraps'desc='Elevate your training with premium FitGrips Wrist Wraps designed for unmatched support, comfort, and durability.' button='See More' category_id='19'/>
        <ProductsDisplay title='Lifting Straps' desc='Boost your strength and stability with FitGrips Knee Wraps built for support, comfort, and confident heavy lifting.' category_id='21'/>
        <ProductsDisplay title='Knee Straps' desc='Boost your strength and stability with FitGrips Knee Wraps built for support, comfort, and confident heavy lifting.' category_id='20'/>
    </main>

    </>
  )
}

export default Products