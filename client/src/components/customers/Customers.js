import React, { Component } from 'react';
import axios from 'axios';
export default class Customers extends Component {
	state = {
		customers: [],
	};
	componentDidMount() {
		fetch('/api/customers')
			.then((res) => res.json())
			.then((customers) =>
				this.setState({ customers }, () =>
					console.log('customers fetched..', customers)
				)
			);
		// let result = axios
		// 	.get('/api/customers')
		// 	.then((result) =>
		// 		this.setState({ customers: result }, () =>
		// 			console.log('customerfetched', result)
		// 		)
		// 	);
	}
	render() {
		console.log('state', this.state);
		return (
			<div>
				<h2>Customers</h2>
				{/* <ul>
					{this.state.customers &&
						this.state.customers.map((el) => {
							return <li>{el.firstName}</li>;
						})}
				</ul> */}

				<ul>
					{this.state.customers.map((customer) => (
						<li>{customer.firstName}</li>
					))}
				</ul>
			</div>
		);
	}
}
