const fs = require('fs');

const appContent = fs.readFileSync('app.js', 'utf8');
// The array is called BASE_PRINCIPLES
const match = appContent.match(/const BASE_PRINCIPLES = (\[[\s\S]*?\]);\s*const CATEGORIES/);

if (match && match[1]) {
    try {
        const principles = eval(match[1]);
        fs.writeFileSync('principles.json', JSON.stringify(principles, null, 2));
        console.log(`Successfully extracted ${principles.length} principles to principles.json`);
    } catch (e) {
        console.error("Error evaluating BASE_PRINCIPLES:", e);
    }
} else {
    // try looser match
    const match2 = appContent.match(/const BASE_PRINCIPLES = (\[[\s\S]*?\]);/);
    if (match2 && match2[1]) {
        try {
            const principles = eval(match2[1]);
            fs.writeFileSync('principles.json', JSON.stringify(principles, null, 2));
            console.log(`Successfully extracted ${principles.length} principles to principles.json`);
        } catch (e) {
            console.error("Error evaluating BASE_PRINCIPLES (loose):", e);
        }
    } else {
        console.error("Could not find BASE_PRINCIPLES array in app.js");
    }
}
