import React from 'react';


class PokemonDetails extends React.Component {
	render() {
		const { match: { params: { id } } } = this.props;

		return(
			<div>
				detalhes pokemon { id }
			</div>
		)
	}
}

export default PokemonDetails;