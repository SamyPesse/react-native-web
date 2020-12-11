/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import * as ReactDOM from 'react-dom';

export default function render(element, container, callback) {
  ReactDOM.createRoot(element).render(container, callback);
}

export function hydrate(element, container, callback) {
  ReactDOM.createRoot(element, { hydrate: true }).render(container, callback);
}
