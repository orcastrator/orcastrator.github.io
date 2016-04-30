var xhr = new XMLHttpRequest();
xhr.open('GET', "https://na.api.pvp.net/api/lol/na/v1.2/champion?api_key=d7b98589-cc8a-4d25-8a6d-889023f8851d", true);
xhr.send();

xhr.addEventListener("readystatechange", processRequest, true);

//xhr.onreadystatechange = processRequest;

function processRequest(e){
	if (xhr.readyState == 4 && xhr.status == 200) {
		var response = JSON.parse(xhr.responseText);
		for(var i in response.champions[0]) document.write(i + "<br>");
		document.write(xhr.responseText);
		document.write(response.champions[0].id);
	}
}
