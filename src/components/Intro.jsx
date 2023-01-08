import React from 'react';

const Intro = () => {
	return (
		<div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
			<h1 className='text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold'>
				Wojciech Wróblewski
			</h1>
			<p className='text-base md:text-xl mb-3 font-medium'>
				Frontend Developer
			</p>
			<p className='text-sm max-w-xl mb-6 font-bold'>
			I am a novice frontend developer. I am improving my skills all the time. I would like to gain experience in this industry. I would also like to develop skills related to design and development. 
			</p>
		</div>
	);
};

export default Intro;
