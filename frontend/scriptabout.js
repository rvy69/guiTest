document.getElementById('aboutButton').addEventListener('click', function() {
    alert("penis");
    eel.about_function()(function(data) {
        document.getElementById('aboutOutput').innerText = data;
    });
});


