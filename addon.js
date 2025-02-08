const { addonBuilder } = require("stremio-addon-sdk")

// Docs: https://github.com/Stremio/stremio-addon-sdk/blob/master/docs/api/responses/manifest.md
const manifest = {
	"id": "community.ltbxdlists",
	"version": "0.0.1",
	"catalogs": [],
	"resources": [],
	"types": [
		"movie",
		"series",
	],
	"name": "ltbxd-lists",
	"description": "Add any public ltboxd film list to your stremio homepage :)"
}
const builder = new addonBuilder(manifest)

module.exports = builder.getInterface()