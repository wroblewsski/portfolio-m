import React from 'react';
import Title from './Title';
const Contact = () => {
	return (
		<div className='flex flex-col mb-10 mx-auto'>
			<div className='flex justify-center items-center'>
				<form
					action='https://getform.io/f/58483b1d-5aee-45b4-96ec-b17988a1be5c'
					method='POST'
					className='flex flex-col w-full md:w-7/12'>
					<Title>Contact</Title>
					<input
						type='text'
						name='name'
						placeholder='Name'
						className='p-2 bg-transparent border-2 rounded-md focus:outline-none '
					/>
					<input
						type='text'
						name='email'
						placeholder='Email'
						className='my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none'
					/>
					<textarea
						name='message'
						placeholder='Message'
						rows='10'
						className='p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none'></textarea>
					<button
						type='button'
						className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-400 to-yellow-800 drop-shadow-md hover:stroke-white'>
						Work with me
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
