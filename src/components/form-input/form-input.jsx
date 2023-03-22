import React from 'react';
import './form-input.styles.scss';

const FormInput = ({
	type,
	name,
	placeholder,
	label,
	required,
	select_options = [{ name: '', value: '' }],
	value,
	onChange,
}) => {
	return (
		<div className='form-input'>
			{label ? (
				<label htmlFor={name} className='form-label'>
					{type === 'select' ? label + ' (select one)' : label}
				</label>
			) : null}
			{type === 'text-area' ? (
				<textarea
					className='form-control rounded-0'
					name={name}
					value={value}
					onChange={onChange}
					required={required}
					placeholder={placeholder}
				/>
			) : type === 'select' ? (
				<select
					className='form-control rounded-0'
					placeholder={placeholder}
					name={name}
					value={value}
					onChange={onChange}
					required={required}
				>
					{select_options.map(({ name, value }) => (
						<option key={'option: ' + name} value={value}>
							{name}
						</option>
					))}
				</select>
			) : (
				<input
					type={type}
					className='form-control rounded-0'
					name={name}
					value={value}
					placeholder={placeholder}
					onChange={onChange}
					required={required}
				/>
			)}
		</div>
	);
};

export default FormInput;
