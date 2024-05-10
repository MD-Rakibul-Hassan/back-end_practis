const School = require('./school')

const school = new School;

school.on("ballRing", ({ preiod, text }) => {
	console.log(`We need to run because ${preiod} ${text}`);
});

school.sartPriod('ballRing')




