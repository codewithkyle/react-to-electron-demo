/// <reference path="./shop.d.ts" />

import React, { Component } from 'react';
import './product-grid.scss';
import { ProductComponent } from './product';
import { FilterButton } from './filter-button';

interface ProductGridProps {
	products: Array<Product>;
	selectedProducts: Array<Product>;
	callback: Function;
}

type Filter = 'all' | 'dairyFree' | 'pops';

interface ProductGridState {
	filterType: Filter;
}

export class ProductGrid extends Component<ProductGridProps, ProductGridState> {
	public props: ProductGridProps;
	constructor(props: ProductGridProps) {
		super(props);
		this.state = {
			filterType: 'all',
		};
	}

	private renderProduct = (product: Product, i: number) => {
		let productEl = null;
		switch (this.state.filterType) {
			case 'dairyFree':
				if (product.dairyFree) {
					productEl = <ProductComponent key={i} product={product} callback={this.props.callback} selectedProducts={this.props.selectedProducts} />;
				}
				break;
			case 'pops':
				if (product.type === 'pops') {
					productEl = <ProductComponent key={i} product={product} callback={this.props.callback} selectedProducts={this.props.selectedProducts} />;
				}
				break;
			default:
				productEl = <ProductComponent key={i} product={product} callback={this.props.callback} selectedProducts={this.props.selectedProducts} />;
				break;
		}

		return productEl;
	};

	private filter(newFilter: Filter): void {
		this.setState({ filterType: newFilter });
	}

	render() {
		const products = this.props.products.map((product, i) => this.renderProduct(product, i));
		return (
			<div className="products">
				<div className="filters">
					<FilterButton selected={this.state.filterType === 'all'} value="all" label="All" callback={this.filter.bind(this)} />
					<FilterButton selected={this.state.filterType === 'dairyFree'} value="dairyFree" label="Dairy Free" callback={this.filter.bind(this)} />
					<FilterButton selected={this.state.filterType === 'pops'} value="pops" label="Pops" callback={this.filter.bind(this)} />
				</div>
				<div className="grid">{products}</div>
			</div>
		);
	}
}
