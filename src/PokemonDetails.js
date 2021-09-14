import React from 'react';
import './pokemon.css';


class PokemonDetails extends React.Component {
	render() {
		const { match: { params: { id } }, data } = this.props;
		const pokemonId = parseInt(id);

		const pokemonDetails = data.find((pokemon) => pokemon.id === pokemonId);

		return(
			<div className="pokemon-detail-container">
				<div className="pokemon-detail">
						<div>
							<p>{ pokemonDetails.name }</p>
							<p>{ pokemonDetails.type }</p>
							<p>
								Average weight: { `${pokemonDetails.averageWeight.value} ${pokemonDetails.averageWeight.measurementUnit}` }
							</p>
						</div>
						<img src={ pokemonDetails.image } alt={ pokemonDetails.name } />
				</div>
				<div className="sumary">
					<h3>Sumary</h3>
					<p>{pokemonDetails.summary}</p>
				</div>
				<h3>Game locations of { pokemonDetails.name }</h3>
				<div className="map">
					{ pokemonDetails.foundAt.map((map) => (
						<div key={map.location}>
							<div key={pokemonDetails.id}>
								<img src={ map.map } alt="pokemonDetails.name" width="400px" />
								<p>{ map.location }</p>
							</div>
						</div>
					)) }
				</div>
			</div>
		)
	}
}

export default PokemonDetails;