export function capitalizeFirstLetter(string){
// https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
	return string.charAt(0).toUpperCase() + string.slice(1)
}


export function capitalizeWordsInList(array){
	return array.map((word) => (capitalizeFirstLetter(word)))
}


export function handleGoHome(setValue, navigate){
		setValue(1)
		navigate(`${process.env.PUBLIC_URL}/`)
}
