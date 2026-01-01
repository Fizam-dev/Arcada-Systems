// Disable right-click and other inspection methods
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    showPopup();
    return false;
});

// Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
document.addEventListener('keydown', function(e) {
    // Disable F12
    if (e.keyCode === 123) {
        e.preventDefault();
        showPopup();
        return false;
    }
    
    // Disable Ctrl+Shift+I
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        e.preventDefault();
        showPopup();
        return false;
    }
    
    // Disable Ctrl+Shift+J
    if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
        e.preventDefault();
        showPopup();
        return false;
    }
    
    // BUT ALLOW Ctrl+U (this is the vulnerability)
    if (e.ctrlKey && e.keyCode === 85) {
        // Let it through - this is how players can view source
        return true;
    }
    
    // Disable Ctrl+Shift+C
    if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
        e.preventDefault();
        showPopup();
        return false;
    }
});

// Disable drag and drop
document.addEventListener('dragstart', function(e) {
    e.preventDefault();
    return false;
});

// Disable text selection on certain elements
document.addEventListener('selectstart', function(e) {
    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        return false;
    }
});

// Show popup function
function showPopup() {
    const popup = document.getElementById('popup');
    const blocker = document.getElementById('blocker');
    
    popup.style.display = 'flex';
    blocker.style.display = 'block';
    
    // Play alert sound if available
    try {
        const audio = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAAAA==');
        audio.volume = 0.3;
        audio.play().catch(() => {});
    } catch (e) {}
}

// Close popup function
function closePopup() {
    const popup = document.getElementById('popup');
    const blocker = document.getElementById('blocker');
    
    popup.style.display = 'none';
    blocker.style.display = 'none';
}

// Login attempt function
function attemptLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginBtn = document.getElementById('loginBtn');
    
    // Save original text
    const originalText = loginBtn.innerHTML;
    
    // Show loading state
    loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Authenticating...';
    loginBtn.disabled = true;
    
    // Simulate authentication process
    setTimeout(() => {
        if (username === 'admin' && password === 'Arcana@2024') {
            loginBtn.innerHTML = '<i class="fas fa-check"></i> Access Granted!';
            loginBtn.style.background = 'linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)';
            
            // Show fake success message
            alert('Authentication successful! Redirecting to admin panel...');
            setTimeout(() => {
                alert('Just kidding! This is a CTF challenge. The real flag is hidden in the source code. Try viewing page source (Ctrl+U)!');
            }, 1000);
        } else {
            loginBtn.innerHTML = '<i class="fas fa-times"></i> Access Denied';
            loginBtn.style.background = 'linear-gradient(135deg, #f44336 0%, #c62828 100%)';
            
            // Reset after 2 seconds
            setTimeout(() => {
                loginBtn.innerHTML = originalText;
                loginBtn.style.background = 'linear-gradient(135deg, #4a9eff 0%, #2962ff 100%)';
                loginBtn.disabled = false;
            }, 2000);
        }
    }, 1500);
}

// Initialize on load
window.addEventListener('load', function() {
    console.log('%c🔒 Arcana Systems - Secure Portal Loaded', 'color: #4a9eff; font-weight: bold; font-size: 14px;');
    console.log('%c⚠️  Debugging tools are monitored. Proceed with caution.', 'color: #ffc107; font-weight: bold;');
    
    // Add a subtle hint in console (optional for CTF)
    console.log('%c💡 Hint: Sometimes the most obvious path is the right one. What can\'t be right-clicked might still be viewed.', 'color: #666; font-style: italic;');
});

// Prevent leaving page with warning
window.addEventListener('beforeunload', function(e) {
    e.preventDefault();
    e.returnValue = 'Are you sure you want to leave? The system is monitoring your activity.';
});
