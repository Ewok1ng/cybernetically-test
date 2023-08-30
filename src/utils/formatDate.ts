import format from 'date-fns/format';

const FORMAT_PATTERN = 'dd MMM yyyy';

export default function formatDate(time: number) {
    if (time > 0) {
        return format(new Date(time), FORMAT_PATTERN);
    }

    return '-';
}
