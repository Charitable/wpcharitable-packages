"use strict";

var _require = require('@wordpress/hooks'),
    createHooks = _require.createHooks;

window.Charitable = window.Charitable || {};
window.Charitable.Hooks = window.Charitable.Hooks || createHooks();
module.exports = {
  CharitableHooks: window.Charitable.Hooks
};
