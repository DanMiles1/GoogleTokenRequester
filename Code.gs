function getToken(scopes) {
  // Join scopes for the query parameter
  var scopeParam = scopes.join(' ');
  
  // Here, you'd typically use the scopes to request a new token with these permissions.
  // For demonstration, we'll just return the existing token with the scopes information.
  var token = ScriptApp.getOAuthToken();
  return {token: token, scopes: scopes};
}

function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('Index');
}
