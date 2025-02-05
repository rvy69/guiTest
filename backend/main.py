import eel

# Initialize the Eel application
eel.init('frontend')
# Define a sample backend function
@eel.expose
def say_hello(name):
    return f"Hello, {name}!"

@eel.expose
def about_function():
    return f"This is the About page!"

@eel.expose
def contact_function():
    return f"This is the Contact page!"

# Start the Eel application
eel.start('index.html', size=(800, 600))