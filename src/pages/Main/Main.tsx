import React from 'react';

import { fetchStocks } from '../../store/reducers/ActionCreators';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { columns } from '../../utils/tableColumns';

import styles from './main.module.css';

import { Error, StocksTable } from '../../components';

export const Main = () => {
    const dispatch = useAppDispatch();
    const { isLoading, error, stocks } = useAppSelector((state) => state.stockReducer);

    React.useEffect(() => {
        dispatch(fetchStocks());
    }, [dispatch]);

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>IEX TOPS</h1>
            {error ? (
                <Error message={error} />
            ) : (
                <StocksTable tableData={stocks} tableColumns={columns} isTableLoading={isLoading} />
            )}
        </div>
    );
};
