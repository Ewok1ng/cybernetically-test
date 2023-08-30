import React from 'react';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

import type { DragEndEvent } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable';

import { useAppDispatch } from '../../hooks/redux';
import { stockSlice } from '../../store/reducers/StockSlice';

import { IStock } from '../../models/IStock';

import styles from './stocks-table.module.css';

import { DraggableRow } from '../../components';

interface StockTableProps {
    tableColumns: ColumnsType<IStock>;
    tableData: IStock[];
    isTableLoading: boolean;
}

export const StocksTable = ({ tableColumns, tableData, isTableLoading }: StockTableProps) => {
    const { reoderStocks } = stockSlice.actions;
    const dispatch = useAppDispatch();

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 1,
            },
        }),
    );

    const onDragEnd = ({ active, over }: DragEndEvent) => {
        if (active.id !== over?.id) {
            const activeIndex = tableData.findIndex((i) => i.symbol === active.id);
            const overIndex = tableData.findIndex((i) => i.symbol === over?.id);

            const reorderedStocks = arrayMove(tableData, activeIndex, overIndex);

            dispatch(reoderStocks(reorderedStocks));
        }
    };

    return (
        <DndContext sensors={sensors} modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd}>
            <SortableContext
                items={tableData.map((i) => i.symbol)}
                strategy={verticalListSortingStrategy}
            >
                <Table
                    components={{
                        body: {
                            row: DraggableRow,
                        },
                    }}
                    columns={tableColumns}
                    dataSource={tableData}
                    className={styles.table}
                    bordered
                    rowKey="symbol"
                    size="small"
                    loading={isTableLoading}
                    pagination={{ position: ['bottomCenter'] }}
                />
            </SortableContext>
        </DndContext>
    );
};
