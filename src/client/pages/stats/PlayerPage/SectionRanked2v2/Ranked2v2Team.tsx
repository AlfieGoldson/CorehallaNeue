import React from 'react';
import BarChart from '../../../../components/Charts/BarChart';

import { I2v2TeamFormat } from 'corehalla.js';

interface Props {
	team: I2v2TeamFormat;
	id: number;
}

const Ranked2v2Team: React.FC<Props> = ({ team, id }) => {
	const winrate = parseInt((team.season.wins / team.season.games).toFixed(2));
	return (
		<div
			className='card ranked-team'
			style={
				{
					'--delay': `${0.05 * id}s`,
				} as React.CSSProperties
			}
		>
			<h3>
				<img
					src={`/assets/images/icons/flags/${team.region}.png`}
					alt={`${team.region}_icon`}
				/>
				{name}
			</h3>
			<div className='stats-container'>
				<img
					style={
						{
							'--delay': `${0.05 * id}s`,
						} as React.CSSProperties
					}
					src={`/assets/images/icons/ranked/${team.season.tier}.png`}
					alt={`${team.season.tier}_icon`}
				/>
				<div>
					<p>
						<span>{team.season.rating}</span>
						<span>Rating</span>
					</p>
					<p>
						<span>{team.season.peak}</span>
						<span>Peak</span>
					</p>
					<p>
						<span>{winrate}%</span>
						<span>Winrate</span>
					</p>
					<p>
						<span>{team.season.games}</span>
						<span>Games</span>
					</p>
				</div>
			</div>
			<BarChart amount={winrate} height='1rem' />
		</div>
	);
};

export default Ranked2v2Team;
