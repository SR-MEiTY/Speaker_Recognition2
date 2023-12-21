/*
*   This script has been generated for the project titled
*   "SPEECH TO SPEECH TRANSLATION SYSTEM FOR TRIBAL LANGUAGES"
*   The original author of the script is
*   Swapnil S Sontakke, Project Associate, IIIT, Dharwad
*   Year: February, 2022
*   Version: 2
*/
/*
	This javascript file will hide/unhide the audio recording
	window based on the input received from the user (from the
	dropdown selection)
*/
function langSelect()
{
	var option = document.getElementById('reg-lang');	//Get user option

	//get div elements to record the audio
	var bengaliText = document.getElementById('bengali-lang');
	var englishText = document.getElementById('convertedText');
	var hindiText = document.getElementById('hindi-lang');
	var kannadaText = document.getElementById('kannada-lang');
	var marathiText = document.getElementById('marathi-lang');
	var teluguText = document.getElementById('telugu-lang');

	if(option.value == 'Bengali')
	{
		console.log('Bengali Selected');
		bengaliText.style.display = 'inline';
		englishText.style.display = 'none';
		hindiText.style.display = 'none';
		kannadaText.style.display = 'none';
		marathiText.style.display = 'none';
		teluguText.style.display = 'none';
	}
	else if(option.value == 'English')
	{
		console.log('English Selected');
		bengaliText.style.display = 'none';
		englishText.style.display = 'inline';
		hindiText.style.display = 'none';
		kannadaText.style.display = 'none';
		marathiText.style.display = 'none';
		teluguText.style.display = 'none';
	}
	else if(option.value == 'Hindi')
	{
		console.log('Hindi Selected');
		bengaliText.style.display = 'none';
		englishText.style.display = 'none';
		hindiText.style.display = 'inline';
		kannadaText.style.display = 'none';
		marathiText.style.display = 'none';
		teluguText.style.display = 'none';
	}
	else if(option.value == 'Kannada')
	{
		console.log('Kannada Selected');
		bengaliText.style.display = 'none';
		englishText.style.display = 'none';
		hindiText.style.display = 'none';
		kannadaText.style.display = 'inline';
		marathiText.style.display = 'none';
		teluguText.style.display = 'none';
	}
	else if(option.value == 'Marathi')
	{
		console.log('Marathi Selected');
		bengaliText.style.display = 'none';
		englishText.style.display = 'none';
		hindiText.style.display = 'none';
		kannadaText.style.display = 'none';
		marathiText.style.display = 'inline';
		teluguText.style.display = 'none';
	}
	else if(option.value == 'Telugu')
	{
		console.log('Telugu Selected');
		bengaliText.style.display = 'none';
		englishText.style.display = 'none';
		hindiText.style.display = 'none';
		kannadaText.style.display = 'none';
		marathiText.style.display = 'none';
		teluguText.style.display = 'inline';
	}
	else
	{
		console.log('No option selected');
	}
}