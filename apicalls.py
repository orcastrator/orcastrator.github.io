import json, requests, logging

if __name__ == "__main__":
	# Need to create own appConfig.json
	with open('appconfig.json') as configFile:
		configData = json.load(configFile)
	apiKey = configData['apiKey']

	try:
		r = requests.get('https://na.api.pvp.net/api/lol/na/v1.2/champion?api_key='+apiKey)
		print(r.text)
	except Exception as e:
		print(e)
