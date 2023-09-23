import { ReactElement, CSSProperties, createContext } from 'react';
import { useProduct } from '../hooks';
import styles from '../styles/styles.module.css';

import { Product, ProductContextProps } from '../interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}

export const ProductCard = ({ product, children, className, style }: Props) => {

    const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{
        counter,
        increaseBy,
        product
    }}>
        <div
          className={ `${styles.productCard} ${className}` }
          style={ style }
        >
            { children }
        </div>
    </Provider>
  )
}