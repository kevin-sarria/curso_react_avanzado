import { ProductCardHOCProps } from '../interfaces';

import { ProductImage } from './';
import { ProductTitle } from './';
import { ProductButtons } from './';
import { ProductCard as productCardHOC } from './ProductCard'

export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';
export { ProductButtons } from './ProductButtons';

export const ProductCard: ProductCardHOCProps = Object.assign( productCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
} );

export default ProductCard;