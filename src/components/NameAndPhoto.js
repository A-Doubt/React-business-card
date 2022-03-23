function NameAndPhoto() {
	return (
		<div className='name-and-photo'>
			<img src={require('../assets/my_photo.jpg')} alt='my-face'/>
			<h1>Paweł Wiśniewski</h1>
			<h4>Job title</h4>
			<nav>pwisniewski.website</nav>
		</div>
	)
}

export default NameAndPhoto;
