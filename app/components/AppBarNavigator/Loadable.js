/**
 *
 * Asynchronously loads the component for AppBarNavigator
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
