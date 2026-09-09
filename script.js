function getFormvalue() {
    //Write your code here
	event.preventDefault()
	let firstname =  document.querySelector('[name="fname"]').value
	let secondname =  document.querySelector('[name="lname"]').value

	alert(firstname + " " + secondname)
	

}
