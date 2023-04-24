
const butInstall = document.getElementById("buttonInstall");

window.addEventListener('beforeinstallprompt', (event) => {
    console.log('hit')
    console.log("event" + event)
    event.preventDefault();
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});
// Add a click event listener to the install button
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    // Show the custom install prompt
    promptEvent.prompt();
    // Reset the stored event
    window.deferredPrompt = null;
    // Hide the install button by adding the 'hidden' class
    butInstall.classList.toggle('hidden', true);
});
// Listen for the 'appinstalled' event to handle successful installation
window.addEventListener('appinstalled', (event) => {
    console.log('install hit')
    // Reset the stored 'beforeinstallprompt' event
    window.deferredPrompt = null;
});