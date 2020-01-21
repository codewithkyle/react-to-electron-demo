/// <reference path="./shop.d.ts" />

import React, { Component } from 'react';
import { render } from 'react-dom';

/** CSS */
import './shop.scss';
import './variables.scss';

/** Components */
import { Cart } from './cart';
import { ProductGrid } from './product-grid';

interface ShopState {
	products: Array<Product>;
	selectedProducts: Array<Product>;
}

interface ShopProps {}

class Shop extends Component<ShopProps, ShopState> {
	public state: ShopState;
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			selectedProducts: [],
		};
	}

	private prefillCart(products: Array<Product>): void {
		const selectedProducts = JSON.parse(sessionStorage.getItem('selectedProducts'));
		if (selectedProducts) {
			const validSelectedProducts = [];
			selectedProducts.map(selectedProduct => {
				for (let i = 0; i < products.length; i++) {
					if (selectedProduct.uuid === products[i].uuid) {
						validSelectedProducts.push(products[i]);
						break;
					}
				}
			});
			this.setState({ selectedProducts: validSelectedProducts });
		}
	}

	private async getProducts() {
		const request = await fetch('./api/products.json', {
			headers: new Headers({
				Accpet: 'application/json',
			}),
		});
		let products = [];
		if (request.ok) {
			const response = await request.json();
			products = response.data;
			this.prefillCart(products);
		}
		this.setState({ products: products });
	}

	componentDidMount() {
		this.getProducts();
	}

	private addToCart(uuid: string): void {
		if (this.state.selectedProducts.length < 8) {
			let prodcut;
			for (let i = 0; i < this.state.products.length; i++) {
				if (this.state.products[i].uuid === uuid) {
					prodcut = this.state.products[i];
				}
			}
			const newSelectedProdcuts = [...this.state.selectedProducts, prodcut];
			this.setState({ selectedProducts: newSelectedProdcuts });
			sessionStorage.setItem('selectedProducts', JSON.stringify(newSelectedProdcuts));
		}
	}

	private removeFromCart(uuid: string): void {
		const selectedProducts = { ...this.state }.selectedProducts;
		for (let i = 0; i < selectedProducts.length; i++) {
			if (selectedProducts[i].uuid === uuid) {
				selectedProducts.splice(i, 1);
				break;
			}
		}
		this.setState({ selectedProducts: selectedProducts });
		sessionStorage.setItem('selectedProducts', JSON.stringify(selectedProducts));
	}

	render() {
		return (
			<div className="shop">
				<ProductGrid products={this.state.products} callback={this.addToCart.bind(this)} selectedProducts={this.state.selectedProducts} />
				<Cart products={this.state.products} selectedProducts={this.state.selectedProducts} callback={this.removeFromCart.bind(this)} />
			</div>
		);
	}
}

render(<Shop />, document.body.querySelector('#mounting-point'));
