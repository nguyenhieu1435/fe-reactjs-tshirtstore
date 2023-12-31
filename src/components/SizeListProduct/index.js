import clsx from 'clsx';
import styles from './SizeListProduct.module.scss';
import { useEffect, useState } from 'react';

const SizeListProduct = ({ product, sizeSelected, handleSetaSizeSelected }) => {

    useEffect(() => {
        handleSetaSizeSelected(product.size?.[0]);
    }, [product]);

    return (
        <>
            <p className={clsx(styles.productSize)}>SIZE: {sizeSelected}</p>
            <div className={clsx(styles.listSize)}>
                {product.size.map((size, index) => {
                    return (
                        <span
                            key={index}
                            className={clsx(
                                styles.productSizeItem,
                                sizeSelected === size ? styles.active : '',
                            )}
                            onClick={() => handleSetaSizeSelected(size)}
                        >
                            {size}
                        </span>
                    );
                })}
            </div>
        </>
    );
};

export default SizeListProduct;
