"use strict";

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */


module.exports = {
	name: "greeter",
	/**
	 * Actions
	 */
	actions: {
		hello: {
			tracing: {
				tags: {
					params: true,
					meta: false,
				}
			},
			rest: {
				method: "GET",
				path: "/hello"
			},

			async handler(ctx) {
				await ctx.broker.call("greeter2.hellotwo");
				return "Hello Moleculer";
			}
		},

		/**
		 * Welcome, a username
		 *
		 * @param {String} name - User name
		 */
		welcome: {
			rest: "/welcome",

			/** @param {Context} ctx  */
			async handler(ctx) {
				return `Welcome, ${ctx.params.name}`;
			}
		}
	}
};
