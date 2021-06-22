function DoExampleLoginWithCustomID(){
    PlayFab.settings.titleId = document.getElementById("titleId").value;
    var loginRequest = {
        // Currently, you need to look up the correct format for this object in the API-docs:
        // https://api.playfab.com/Documentation/Client/method/LoginWithCustomID
        TitleId: PlayFab.settings.titleId,
        CustomId: document.getElementById("customId").value,
        CreateAccount: true
    };

    PlayFabClientSDK.LoginWithCustomID(loginRequest, LoginCallback);
}

var LoginCallback = function (result, error) {
    if (result !== null) {
        document.getElementById("resultOutput").innerHTML = "Congratulations, you made your first successful API call!";
    } else if (error !== null) {
        document.getElementById("resultOutput").innerHTML =
            "Something went wrong with your first API call.\n" +
            "Here's some debug information:\n" +
            CompileErrorReport(error);
    }
}

// This is a utility function we haven't put into the core SDK yet.  Feel free to use it.
function CompileErrorReport(error) {
    if (error === null)
        return "";
    var fullErrors = error.errorMessage;
    for (var paramName in error.errorDetails)
        for (var msgIdx in error.errorDetails[paramName])
            fullErrors += "\n" + paramName + ": " + error.errorDetails[paramName][msgIdx];
    return fullErrors;
}
