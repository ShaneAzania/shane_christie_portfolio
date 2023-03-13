import React from 'react';
import './contact.styles.scss';

// components
import FormInput from '../form-input/form-input';

// data
import { subject_options } from './subject_options';

const Contact = () => {
	const handle_submit = (e) => e.preventDefault();

	return (
		<section id='contact' className='container-fluid'>
			<div className='row'>
				<div className='text-box col-12 col-md-8 col-lg-6'>
					<h1 className='name'>Contact</h1>
					<h2 className='name'>Lets talk about our next project</h2>
				</div>
			</div>
			<div className='row'>
				<form className=' col-md-8 col-lg-6 mx-auto' action='/#' method='post'>
					<FormInput
						type='text'
						name='first_name'
						placeholder=''
						label='First Name'
						required={true}
					/>
					<FormInput
						type='text'
						name='last_name'
						placeholder=''
						label='Last Name'
						required={true}
					/>
					<FormInput type='email' name='email' placeholder='' label='Email' required={true} />
					<FormInput
						type='select'
						name='subject'
						placeholder=''
						label='Subject'
						required={true}
						select_options={subject_options}
					/>
					<FormInput
						type='text-area'
						name='message'
						placeholder='Tell me what I can help you with.'
						label='Message'
						required={true}
					/>
					<input
						className='button-outline-color-3'
						type='submit'
						value='Send'
						onClick={handle_submit}
					/>
				</form>
			</div>
		</section>
	);
};

export default Contact;
