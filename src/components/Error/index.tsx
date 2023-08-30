import React from 'react';

import styles from './error.module.css';

interface ErrorProps {
    message: string;
}

export const Error = ({ message: error }: ErrorProps) => {
    return <div className={styles.error}>{error}</div>;
};
