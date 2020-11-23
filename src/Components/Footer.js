import React from 'react'
import emailjs from 'emailjs-com';
import ToggleContent from './Modal/ToggleContent'
import Modal from './Modal/Modal'
import { Input, Textarea } from '@chakra-ui/react';
import { FaGithub, FaLinkedinIn, FaTwitter, FaWindowClose } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import "./Style/Footer.css"

const Footer = () => {

	const sendEmail = e => {
		e.preventDefault();

		emailjs
			.sendForm(
				'gmail',
				'jeremytemplate',
				e.target,
				`${process.env.REACT_APP_EMAIL_KEY}`
			)
			.then(
				result => {
					console.log(result.text);
				},
				error => {
					console.log(error.text);
				}
			);
			;
	};

	return (
		<div id="contact">
		
			<a href='https://github.com/J2Macwilliams' className="icons" rel="noreferrer noopener" target='_blank'>
				<FaGithub />
			</a>
			<a href='https://www.linkedin.com/in/jeremyjmcwilliams/' className="icons" rel="noreferrer noopener" target='_blank'>
				<FaLinkedinIn />
			</a>
			<a href='https://twitter.com/McWilliamJJ1' className="icons" rel="noreferrer noopener" target='_blank'>
				<FaTwitter />
			</a>

			<ToggleContent
				toggle={ toggleSwitch => <GrMail className="icons" onClick={ toggleSwitch } /> }
				content={ toggleSwitch => (

					<Modal overlay={ toggleSwitch }>
						<div className="exitBox">
						<FaWindowClose className="closeModal" onClick={ toggleSwitch } />
						</div>

						<form className="emailForm" onSubmit={ sendEmail }>
							<Input
								required
								variant='outline'
								type='text'
								placeholder='Name'
								name='name'
							/>
							<Input
								required
								variant='outline'
								type='text'
								placeholder='Subject'
								name='subject'
							/>
							<Input
								required
								variant='outline'
								type='email'
								placeholder='Email'
								name='email'
							/>
							<Textarea

								required
								type='text'
								variant='outline'
								name='message'
								placeholder='Message'
							/>

							<button
								className="sendButton"
								type='submit'
								value='Send'
								
							>
								Send
										</button>
						</form>
					</Modal>
				) }
			/>
		</div>
	);
};

export default Footer;
