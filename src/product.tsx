import React, { Component, SyntheticEvent } from 'react';

/** CSS */
import './product.scss';

interface ProductProps {
	key: number;
	product: Product;
	callback: Function;
	selectedProducts: Array<Product>;
}

export class ProductComponent extends Component<ProductProps, {}> {
	constructor(props) {
		super(props);
	}

	private handleClickEvent = (e: SyntheticEvent) => {
		this.props.callback(this.props.product.uuid);
	};

	render() {
		let numberInCart = 0;
		this.props.selectedProducts.map(selectedProduct => {
			if (selectedProduct.uuid === this.props.product.uuid) {
				numberInCart++;
			}
		});
		let numberInCartEl = null;
		if (numberInCart) {
			numberInCartEl = <span className="number-in-pack">{numberInCart} in the pack</span>;
		}
		return (
			<button className="product" tabIndex={0} onClick={this.handleClickEvent}>
				<img src={`./${this.props.product.image}`} alt={`pint of ${this.props.product.name}`} draggable="false" />
				<span>
					{this.props.product.dairyFree ? 'Dariy Free ' : ''}
					{this.props.product.name}
				</span>
				{numberInCartEl}
			</button>
		);
	}
}
