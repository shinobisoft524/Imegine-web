import { FC, useState } from 'react';
import TextField from '@material-ui/core/TextField';

import { $flex, $flexRow, $font, $height, $itemCenter, $itemCenterH, $size, $style, $width } from 'src/utils/font-utilts';

import colors from 'src/constants/colors';
import images from 'src/constants/images';
import IconButton from '../Button/IconButton';
import fonts from 'src/constants/fonts';
import ClickButton from '../Button/ClickButton';

interface Props {
	title?: string;
	time?: string;
	inputStyle?: any;
	handleValueChange?: (str: string) => void;
}
const PlannerRemind: FC<Props> = (props) => {

	const [value, setValue] = useState('');

	const handleChange = (e) => {
		props.handleValueChange && props.handleValueChange(e.target.value);
		setValue(e.target.value);
	}
	return (
		<div
			style={$style([
				{
					borderBottom: '1px solid rgba(50, 84, 131, 0.5)',
				},
				
			])}>
			<ClickButton
				styleContainer={$style([
					{
						backgroundColor: colors.$transparent,	
					},
				])}
				styleShadow={$style([
					{
						padding: '0px 25px',
						height: 56,						
					},
					$flexRow(),
					$itemCenterH(),
				])}>
				<div
					style={$style([
						{
							
						},
						$flex(),
						$itemCenterH(),
					])}>
					<img 
						style={$style([$size(16, 15.6)])} 
						src={images.planner.plannerRemindBlue4x} alt='' 
					/>
				</div>
				<div
					style={$style([
						{
							flex: 1,
							paddingLeft: 15,
						},
						$flex(),
						$itemCenterH(),
					])}>
					<span style={$style([
						$font(fonts.rubikRegular, colors.$secondaryBlue, 14, 18), 
					])}>{props.title || ''}</span>
				</div>
				<div
					style={$style([
						{
						},
						$flex(),
						$itemCenterH(),
					])}>
					{/* <TextField
						id="datetime-local"
						label="Next appointment"
						type="datetime-local"
						defaultValue="2017-05-24T10:30"
						// className={classes.textField}
						InputLabelProps={{
							shrink: true,
						}}
						inputProps={{
							step: 300, // 5 min
						}}
					/> */}
					<span style={$style([
						$font(fonts.rubikMedium, colors.$secondaryBlue, 14, 15), 
					])}>{props.time || 'Select remind'}</span>
				</div>
			</ClickButton>
		</div>
	);
}

export default PlannerRemind;
