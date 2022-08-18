module.exports = {
	content: ['./**/*.{html,md,css}'],
    theme: {
		screens: {
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1000px',
			'2xl': '1200px'
		},
		container: {
			center: true,
			padding: '1rem',
			screens: {
				sm: '576px',
				md: '768px',
				lg: '992px',
				xl: '1000px',
				'2xl': '1200px'
			}
		},
		fontFamily: {
			'sans': ['Rubik'],
		},
        extend: {
			keyframes: {
				'appear-from-left': {
					'0%': { opacity: '0', left: '-50px' },
					'100%': { opacity: '1', left: '0' }
				},
				'appear-from-right': {
					'0%': { opacity: '0', right: '-50px' },
					'100%': { opacity: '1', right: '0' }
				}
			},
			animation: {
				'appear-from-left': 'appear-from-left .5s ease-out',
				'appear-from-right': 'appear-from-right .5s ease-out'
			}
		}
    }
};
