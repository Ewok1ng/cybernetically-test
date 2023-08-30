import { ColumnsType } from 'antd/es/table';
import { IStock } from '../models/IStock';

import formatDate from './formatDate';

export const columns: ColumnsType<IStock> = [
    {
        title: 'Symbol',
        dataIndex: 'symbol',
        key: 'symbol',
    },
    {
        title: 'Sector',
        dataIndex: 'sector',
        key: 'sector',
    },
    {
        title: 'Security type',
        dataIndex: 'securityType',
        key: 'securityType',
    },
    {
        title: 'Bid size',
        dataIndex: 'bidSize',
        key: 'bidSize',
    },
    {
        title: 'Ask price',
        dataIndex: 'askPrice',
        key: 'askPrice',
    },
    {
        title: 'Ask size',
        dataIndex: 'askSize',
        key: 'askSize',
    },
    {
        title: 'Last updated',
        dataIndex: 'lastUpdated',
        key: 'lastUpdated',
        render: (value) => formatDate(value),
    },
    {
        title: 'Last sale price',
        dataIndex: 'lastSalePrice',
        key: 'lastSalePrice',
    },
    {
        title: 'Last sale size',
        dataIndex: 'lastSaleSize',
        key: 'lastSaleSize',
    },
    {
        title: 'Last sale time',
        dataIndex: 'lastSaleTime',
        key: 'lastSaleTime',
        render: (value) => formatDate(value),
    },
    {
        title: 'Volume',
        dataIndex: 'volume',
        key: 'volume',
    },
];
