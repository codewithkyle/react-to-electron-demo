import React, { Component, SyntheticEvent } from 'react';
import './filter-button.scss';

interface FitlerButtonProps {
	value: string;
	label: string;
	callback: Function;
	selected: boolean;
}

export class FilterButton extends Component<FitlerButtonProps, {}> {
	public props: FitlerButtonProps;
	constructor(props: FitlerButtonProps) {
		super(props);
	}

	private handleClickEvent = (e: SyntheticEvent) => {
		this.props.callback(this.props.value);
	};

	render() {
		return (
			<button className={`filter-button ${this.props.selected ? 'is-active' : ''}`} data-type={this.props.value} onClick={this.handleClickEvent}>
				{this.props.label}
			</button>
		);
	}
}
