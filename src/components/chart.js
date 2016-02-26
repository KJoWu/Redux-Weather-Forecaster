//does not need any state. Props just come in. So we use function over className
import React from 'react';
import _ from 'lodash'; //npm install --save lodash

import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

function average(data){ //calculates the average
	return _.round(_.sum(data)/data.length);
}

export default (props) =>{
	return (
		<div>
			<Sparklines height={120} width={180} data={props.data}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type="avg" />
			</Sparklines>

				<div>{average(props.data)} {props.units}</div> 

		</div>
	);
}




