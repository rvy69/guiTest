document.getElementById('fetchData').addEventListener('click', function() {
    eel.say_hello("penis")(function(data) {
        document.getElementById('dataDisplay').innerText = data;
    });
});

if (document.getElementById('aboutButton')) {
    document.getElementById('aboutButton').addEventListener('click', function() {
        eel.about_function()(function(data) {
            document.getElementById('aboutOutput').innerText = data;
        });
    });
}

if (document.getElementById('contactButton')) {
    document.getElementById('contactButton').addEventListener('click', function() {
        eel.contact_function()(function(data) {
            document.getElementById('contactOutput').innerText = data;
        });
    });
}