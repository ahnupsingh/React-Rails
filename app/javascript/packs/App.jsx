import React, {Component} from 'react';
import axios from 'axios';
import {getRecipes, updateRecipe} from './api/recipeApi';
import RecipeList from './RecipeList';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			recipes: {}
		};
	}

	componentWillMount() {
		axios.defaults.headers.common['X-CSRF-Token'] = document
			.querySelector('meta[name="csrf-token"]')
			.getAttribute('content');
	}

	componentDidMount() {
		this.fetchRecipes();
	}

	fetchRecipes = () => {
		getRecipes()
			.then((response) => {
				this.setState({recipes: response.data});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	update = ({formData, recipe}, callback) => {
		const {recipes} = this.state;

		updateRecipe(formData, recipe.id)
			.then((response) => {
				this.setState(
					{
						recipes: {...recipes, [recipe.id]: response.data}
					},
					() => callback()
				);
				alert(`Recipe ${recipe.title} updated!`);
			})
			.catch((error) => {
				alert(`Something went wrong: ${error}`);
			});
	};

	render() {
		const {recipes} = this.state;

		return (
			<section className='section'>
				<div className='container'>
					<RecipeList recipes={Object.values(recipes)} update={this.update} />
				</div>
			</section>
		);
	}
}
