/**
 *
 * Asynchronously loads the component for HomeContainer
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
