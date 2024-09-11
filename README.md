# nakama.js
Web-API for [Nakama](https://nakama.social/) social network for anime fans, [Source](https://github.com/nakamauwu/nakama)

## Example
```JavaScript
async function main() {
	const { Nakama } = require("./nakama.js")
	const nakama = new Nakama()
	await nakama.loginByToken("token")
}

main()
```
