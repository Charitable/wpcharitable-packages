const { createHooks } = require( '@wordpress/hooks' );

window.Charitable = window.Charitable || {};
window.Charitable.Hooks = window.Charitable.Hooks || createHooks();

module.exports = {
	CharitableHooks: window.Charitable.Hooks
};