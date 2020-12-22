import HomeIcon from '@material-ui/icons/Home';
import UtilitiesIcon from '@material-ui/icons/EmojiObjects';
import BuildIcon from '@material-ui/icons/Build';
import CommuteIcon from '@material-ui/icons/Commute';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import DirectionsTransitIcon from '@material-ui/icons/DirectionsTransit';
import FlightIcon from '@material-ui/icons/Flight';


export default [
	{
		title: 'Housing',
		icon: HomeIcon,
		color: '#795548',
		items: [
			{
				title: 'Utilities',
				icon: UtilitiesIcon
			},
			{
				title: 'Repairs',
				icon: BuildIcon
			}
		]
	},
	{
		title: 'Transportation',
		icon: CommuteIcon,
		color: '#9E9E9E',
		items:[
			{
				title: 'Public Transport',
				icon: DirectionsTransitIcon
			},
			{
				title: 'Taxi',
				icon: DriveEtaIcon
			},
			{
				title: 'Long Trip',
				icon: FlightIcon
			}
		]
	}
]