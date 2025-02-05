
document.getElementById('contactButton').addEventListener('click', function() {
    eel.contact_function()(function(data) {
        document.getElementById('contactOutput').innerText = data;
    });
});
