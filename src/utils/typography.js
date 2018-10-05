import Typography from 'typography'
import sutroTheme from 'typography-theme-sutro'

sutroTheme.overrideThemeStyles = () => ({
  a: {
    color: '#7B6EDD',
    textDecoration: 'none',
  },
  'a:hover,a:active': {
    textDecoration: 'none',
  },
})

const typography = new Typography(sutroTheme);

export default typography;
