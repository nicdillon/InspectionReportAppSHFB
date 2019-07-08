storage = window.localStorage;
function updateArea(area) {
    var currentArea = "Area" + area;
    storage.setItem(currentArea, "Yes");
}

function clearStorage() {
    localStorage.clear();
}
