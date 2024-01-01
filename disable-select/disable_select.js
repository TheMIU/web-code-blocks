// Create a function to disable text selection
function disableTextSelection() {
    // Function to prevent default action for mouse events
    function preventDefaultAction(event) {
        event.preventDefault();
    }

    // Disable text selection for mouse events
    document.addEventListener('selectstart', preventDefaultAction); // For selection with the mouse
    document.addEventListener('mousedown', preventDefaultAction); // For general mousedown events
}

// Call the function to disable text selection
disableTextSelection();
