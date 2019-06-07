var NewPlayGroundClient;
document.addEventListener("deviceready", function () {
    NewPlayGroundClient = new WindowsAzure.MobileServiceClient(
                    "https://newplayground.azurewebsites.net");
});