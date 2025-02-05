
document.getElementById('fetchData')?.addEventListener('click', function() {
    eel.say_hello("penis")(function(data) {
        document.getElementById('dataDisplay').innerText = data;
    });
});

document.getElementById('aboutButton')?.addEventListener('click', function() {
    eel.about_function()(function(data) {
        document.getElementById('aboutOutput').innerText = data;
    });
});

document.getElementById('contactButton')?.addEventListener('click', function() {
    eel.contact_function()(function(data) {
        document.getElementById('contactOutput').innerText = data;
    });
});
