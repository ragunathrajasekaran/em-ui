import overrides from './overrides';
import palettes from './palettes';

const themeGenerator = props => ({
  palette: palettes(props),
  overrides: overrides(props),
});

export default themeGenerator;
