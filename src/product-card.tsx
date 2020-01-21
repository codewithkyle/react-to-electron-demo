import React, { Component, SyntheticEvent } from 'react';

/** CSS */
import './product-card.scss';

interface ProductCardProps {
	key: number;
	product: Product;
	callback: Function;
}

export class ProductCard extends Component<ProductCardProps, {}> {
	constructor(props) {
		super(props);
	}

	private handleClickEvent = (e: SyntheticEvent) => {
		this.props.callback(this.props.product.uuid);
	};

	render() {
		const primaryColor = {
			fill: this.props.product.primaryColor === '' ? '#a88c34' : this.props.product.primaryColor,
		};
		const secondaryColor = {
			fill: this.props.product.secondaryColor === '' ? '#fff' : this.props.product.secondaryColor,
		};
		return (
			<button className="product-card" tabIndex={0} onClick={this.handleClickEvent} aria-label={`click to remove ${this.props.product.name}`}>
				<svg viewBox="0 0 64 64" aria-hidden="true">
					<polygon style={secondaryColor} points="11.1,14 52.9,14 50.9,58.6 13.1,58.6 " />
					<path style={primaryColor} d="M4.9,2v12h5l2.1,46.9h39.8L54,14h5V2H4.9z M50.9,58.6H13.1l-2-44.6h41.9L50.9,58.6z" />
					<path
						style={primaryColor}
						d="M32.3,19.9c4.7,0,7.8,3.3,8.4,3.9c0.8,0.9,2,2.3,2.4,4.4c0.4,2.2,0.1,3.3,0.7,3.6c0.5,0.2,0.6-0.2,1.5-0.1
					c0.9,0,1.7,1.4,1.9,2.4c0.5,2.3-1.2,5.3-3.1,5.6c-0.9,0.2-1.8-0.3-2.7,0.4c-0.5,0.4-0.7,0.8-0.7,1c-0.8,2-3.7,6.5-5.7,6.2
					c-1-0.1-1.3-1.3-2.2-1.1c-0.6,0.1-1.1,0.7-1.3,1.1c-0.8,1.2-0.2,2-0.9,2.7c-0.7,0.8-2.3,0.8-3.1,0.1c-0.4-0.3-0.3-0.6-0.9-1.6
					c-0.5-1-1.1-1.9-2.1-2.5c-0.7-0.4-1-0.3-1.4-0.8c-0.4-0.5-0.3-1.1-0.3-1.5c0-2.2-3.4-3-4.7-5.8c-0.3-0.7-1-2.1-0.4-3.4
					c0.5-1.2,1.9-1.7,2-1.7c0.7-0.3,1-0.1,1.4-0.3c1.3-0.6,0.6-3.3,0.9-5.3C22.6,23.5,27.4,19.9,32.3,19.9z"
					/>
				</svg>
				<span>
					{this.props.product.dairyFree ? 'Dairy Free ' : ''}
					{this.props.product.name}
				</span>
			</button>
		);
	}
}
