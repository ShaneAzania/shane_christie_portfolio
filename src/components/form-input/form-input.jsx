import React from 'react';
import './form-input.styles.scss';

const FormInput = ({
	type,
	name,
	placeholder,
	label,
	required,
	select_options = [{ name: '', value: '' }],
}) => {
	return (
		<div className='form-input'>
			{label ? (
				<label for={name} className='form-label'>
					{type === 'select' ? label + ' (select one)' : label}
				</label>
			) : null}
			{type === 'text-area' ? (
				<textarea
					className='form-control rounded-0'
					name={name}
					required={required}
					placeholder={placeholder}
				/>
			) : type === 'select' ? (
				<select
					className='form-control rounded-0'
					name={name}
					placeholder={placeholder}
					required={required}
				>
					{select_options.map(({ name, value }) => (
						<option value={value}>{name}</option>
					))}
				</select>
			) : (
				<input
					type={type}
					className='form-control rounded-0'
					name={name}
					placeholder={placeholder}
					required={required}
				/>
			)}
		</div>
	);
};

export default FormInput;
