import React, { useState, useRef } from 'react';
import './contact.styles.scss';

// emailJS
import emailjs from '@emailjs/browser';
// import emailjs from 'emailjs-com';

// components
import FormInput from '../../form-input/form-input';

// data
import { subject_options } from './subject_options';

const Contact = () => {
	// state
	const [first_name, set_first_name] = useState(''),
		[last_name, set_last_name] = useState(''),
		[reply_to, set_reply_to] = useState(''),
		[subject, set_subject] = useState(''),
		[message, set_message] = useState('');

	// email js submit email
	const form = useRef(),
		handle_submit = (e) => {
			e.preventDefault();

			emailjs
				.sendForm('service_ozxs41o', 'template_344637m', form.current, '9mFq3Ow4rx_pgQtbm')
				.then(
					(result) => {
						console.log('EMAIL RESULT: ', result.text);
					},
					(error) => {
						console.log('EMAIL ERROR: ', error.text);
					}
				);

			set_first_name('');
			set_last_name('');
			set_reply_to('');
			set_subject('');
			set_message('');
		},
		handleChange = (e) => {
			const { name, value } = e.target;

			switch (name) {
				case 'first_name':
					set_first_name(value);
					break;
				case 'last_name':
					set_last_name(value);
					break;
				case 'reply_to':
					set_reply_to(value);
					break;
				case 'subject':
					set_subject(value);
					break;
				case 'message':
					set_message(value);
					break;

				default:
					break;
			}
		};

	return (
		<section id='contact' className='container-fluid'>
			<div className='row'>
				<div className='text-box col-12 col-md-8 col-lg-6'>
					<h1 className='name'>Contact</h1>
					<h2 className='name'>Lets talk about our next project</h2>
				</div>
			</div>
			<div className='row'>
				<form
					className=' col-md-8 col-lg-6 mx-auto'
					action='/#'
					method='post'
					ref={form}
					onSubmit={handle_submit}
				>
					<FormInput
						onChange={handleChange}
						type='text'
						name='first_name'
						value={first_name}
						placeholder=''
						label='First Name'
						required={true}
					/>
					<FormInput
						onChange={handleChange}
						type='text'
						name='last_name'
						value={last_name}
						placeholder=''
						label='Last Name'
						required={true}
					/>
					<FormInput
						onChange={handleChange}
						type='email'
						name='reply_to'
						value={reply_to}
						placeholder=''
						label='Your Email Address'
						required={true}
					/>
					<FormInput
						onChange={handleChange}
						type='select'
						name='subject'
						value={subject}
						placeholder=''
						label='Subject'
						required={true}
						select_options={subject_options}
					/>
					<FormInput
						onChange={handleChange}
						type='text-area'
						name='message'
						value={message}
						placeholder="Let's talk about how I can help you."
						label='Message'
						required={true}
					/>
					<input className='button-outline-color-3' type='submit' value='Send' />
				</form>
			</div>
		</section>
	);
};

export default Contact;
