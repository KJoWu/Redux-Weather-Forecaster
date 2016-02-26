//does not need any state. Props just come in. So we use function over className
import React from 'react';
import {Sparklines, SparklinesLine} from 'react-sparklines';


export default (props) =>{
	return (
		<div>
			<Sparklines height={120} width={180} data={props.data}>
				<SparklinesLine color={props.color} />
			</Sparklines>
		</div>
	);
}