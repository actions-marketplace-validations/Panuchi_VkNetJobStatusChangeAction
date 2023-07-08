const core = require('@actions/core');
const github = require('@actions/github');

try {
    const inputStr = core.getInput('string');
    console.log(`Manipulating string: ${inputStr}`);
    if(inputStr == "success"){
        const result = '✅ ' + inputStr.charAt(0).toUpperCase() + inputStr.slice(1).toLowerCase();
        console.log(`result: ${result}`);
        core.setOutput("result", result);
    }

    if(inputStr == "failure"){
        const result = '❌ ' + inputStr.charAt(0).toUpperCase() + inputStr.slice(1).toLowerCase();
        console.log(`result: ${result}`);
        core.setOutput("result", result);
    }
} catch (error) {
    core.setFailed(error.message);
}
