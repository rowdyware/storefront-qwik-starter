import { component$, useContext } from '@builder.io/qwik';
import { APP_STATE } from '~/constants';
import type { OrderPriceFields } from '~/types';
import { formatPrice } from '~/utils';
import { Order } from '~/generated/graphql';

export default component$(
	(props: { field: OrderPriceFields; forcedClass?: string; completedOrder?: Order }) => {
		const order = useContext(APP_STATE).activeOrder || props.completedOrder;
		const currencyCode = useContext(APP_STATE).activeOrder?.currencyCode || 'USD';
		const priceWithTax = order ? order[props.field] : 0;
		return <div class={props.forcedClass}>{formatPrice(priceWithTax, currencyCode)}</div>;
	}
);
