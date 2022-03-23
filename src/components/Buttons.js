function Buttons() {
	return (
		<div className='buttons'>
			<button className='buttons--mail'>
				<img src={require('../assets/mail.png')} alt='email'/>
				Email
			</button>
			<button className='buttons--linkedin'>
				<img src={require('../assets/GitHub-Mark-Light-32px.png')} alt='github-mark'/>
				LinkedIn
			</button>
		</div>
	)
}

export default Buttons;
