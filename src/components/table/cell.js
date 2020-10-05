import { checkType } from '@/utils/utils';

export default {
    name: 'table-cell',
    functional: true,
    props: ['render', 'value', 'record'],
    render: (h, ctx) => {
        const { render, value, record } = ctx.props;

        if (!render) {
            return h('span', value);
        }

        const result = render(value, record, h);

        return ['String', 'Number'].indexOf(checkType(result)) > -1 ? h('span', result) : result; 
    }
};