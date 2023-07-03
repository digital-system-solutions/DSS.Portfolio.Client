// Styles
import "@mdi/font/css/materialdesignicons.css"
import "vuetify/styles"
import colors from "vuetify/lib/util/colors"

// Composables
import { createVuetify } from "vuetify"

export default createVuetify({
	theme: {
		themes: {
			light: {
				colors: {
					primary: colors.blue.base,
					secondary: colors.lightBlue.base,
				},
			},
		},
	},
})
