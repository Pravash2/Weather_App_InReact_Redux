import React, { Component } from "react";
import {
	Sparklines,
	SparklinesLine,
	SparklinesReferenceLine
} from "react-sparklines";

import _ from "lodash";

export default class SparklinesShow extends Component {
	constructor(props) {
		super(props);
	}

	average(data) {
		return _.round(_.sum(data) / data.length);
	}

	render() {
		return (
			<div>
				<Sparklines height={120} width={180} data={this.props.data}>
					<SparklinesLine color={this.props.color} />
					<SparklinesReferenceLine type="avg" />
				</Sparklines>
				<div className="text-center">
					{this.average(this.props.data)} {this.props.unit}
				</div>
			</div>
		);
	}
}
