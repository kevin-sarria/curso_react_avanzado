import { ReactElement, CSSProperties, createContext } from 'react';
import { useProduct } from '../hooks';
import styles from '../styles/styles.module.css';

import { Product, ProductContextProps, onChangeArgs } from '../interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: ( args: onChangeArgs ) => void;
  value?: number;
}

export const ProductCard = ({ product, children, className, style, onChange, value }: Props) => {

    const { counter, increaseBy } = useProduct({onChange, product, value});

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