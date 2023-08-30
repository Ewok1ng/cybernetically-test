import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import styles from './draggable-row.module.css';

interface DraggableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
    'data-row-key': string;
}

export const DraggableRow = (props: DraggableRowProps) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
        id: props['data-row-key'],
    });

    const style: React.CSSProperties = {
        ...props.style,
        transform: CSS.Transform.toString(transform && { ...transform, scaleY: 1 }),
        transition,
        cursor: 'grab',
        ...(isDragging ? { position: 'relative', zIndex: 9999 } : {}),
    };

    return (
        <tr
            className={styles.row}
            {...props}
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
        />
    );
};
