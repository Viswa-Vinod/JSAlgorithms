// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
	constructor() {
		this.events = {};
	}
	// Register an event handler
	on(eventName, callback) {
		if (Object.keys(this.events).includes(eventName)) {
			this.events[eventName].push(callback);
			console.log("on method:", this.events);
			return;
		}
		let callbackArr = [];
		callbackArr.push(callback);
		this.events[eventName] = callbackArr;
		// console.log("callbackArr is: ", callbackArr);
		console.log("on method: ", this.events);
	}

	// Trigger all callbacks associated
	// with a given eventName
	trigger(eventName) {
		if (Object.keys(this.events).includes(eventName)) {
			console.log("triggering all click events");
			this.events[eventName].forEach(handler => handler());
		}
	}

	// Remove all event handlers associated
	// with the given eventName
	off(eventName) {
		delete this.events[eventName];
		console.log("off method: ", this.events);
	}
}

module.exports = Events;
