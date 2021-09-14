import React from 'react';

class About extends React.Component {
	render() {
		return (
			<article className="about-pokedex">
				<h3>About Pokedex</h3>
				<div>
					<img src="https://cdn2.bulbagarden.net/upload/thumb/9/96/Pok%C3%A9dex_FRLG.png/564px-Pok%C3%A9dex_FRLG.png" width="350px" alt="pokedex" />
				</div>
				<p>
					The Pokédex (Japanese: ポケモン図鑑) is a digital encyclopedia created by Professor Oak as an invaluable tool to Trainers in the Pokémon world. It gives information about all Pokémon in the world that are contained in its database, although it differs in how it acquires and presents information over the different media. However, they are also only given to a few Trainers at a time, generally to the ones that are felt to have exceptional potential and skill. Regional Pokédexes give information about Pokémon native to a particular region, while the National Pokédex records information about all known Pokémon.
				</p>
				<p>
					Pokédex entries typically describe a Pokémon in only two or three sentences. They may give background information on the habitat or activities of a Pokémon in the wild or other information on the Pokémon's history or anatomy. Pokédex entries also include height, weight, cry, footprint (prior to Generation VI), location, other forms, and a picture of the Pokémon.
				</p>
			</article>
		)
	}
}


export default About;