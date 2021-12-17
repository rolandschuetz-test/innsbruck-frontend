import Vue from 'vue'
import VuePlyr from 'vue-plyr/dist/vue-plyr.ssr.js'
import 'vue-plyr/dist/vue-plyr.css'

// The second argument is optional and sets the default config values for every player.
Vue.use(VuePlyr, {
	plyr: {
		controls: [
			'play-large',
			'play',
			'progress',
			'current-time',
			'duration',
			'mute',
			'fullscreen',
		],
		fullscreen: {
			enabled: true,
			fallback: true,
			iosNative: 'force' // Use the native fullscreen in iOS (disables custom controls)
		},
		// previewThumbnails: {
		// 	enabled: true
		// }
	}
})