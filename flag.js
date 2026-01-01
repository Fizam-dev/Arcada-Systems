// Encrypted flag using simple ROT13 + Base64 combination
// This is the "hidden" file that contains the flag

(function() {
    'use strict';
    
    // Encrypted flag data
    const encryptedData = {
        part1: 'U0RHOTBaWE4wSUV4dlkyRnNZWGtn',
        part2: 'VUhWaGRHVnlJR0Z1WkNnZ1',
        part3: 'VtVm1jbTl0SUdGdVpDZ2c=',
        part4: 'VUhKbFlXUnZjbVVnYj'
    };
    
    // Decryption function (not directly called)
    function decryptFlag(data) {
        // Combine all parts
        const combined = Object.values(data).join('');
        
        // First, decode from Base64
        let decoded;
        try {
            decoded = atob(combined);
        } catch (e) {
            console.error('Decryption error:', e);
            return null;
        }
        
        // Apply ROT13 decryption
        let result = '';
        for (let i = 0; i < decoded.length; i++) {
            let char = decoded.charCodeAt(i);
            
            // Handle uppercase letters
            if (char >= 65 && char <= 90) {
                char = ((char - 65 + 13) % 26) + 65;
            }
            // Handle lowercase letters
            else if (char >= 97 && char <= 122) {
                char = ((char - 97 + 13) % 26) + 97;
            }
            // Handle numbers (ROT5)
            else if (char >= 48 && char <= 57) {
                char = ((char - 48 + 5) % 10) + 48;
            }
            
            result += String.fromCharCode(char);
        }
        
        return result;
    }
    
    // The flag is actually in a comment below, disguised as code
    // U0VDUkVUX0ZMQUc6IEhEQ1RGQkUzaDFuZF9UaDNfM2VtRW43XyFeIX0=
    // After decryption: SECRET_FLAG: HDCTF{B3h1nd_Th3_3lemEn7_!^!}
    
    // This function looks suspicious but doesn't actually reveal the flag
    function securityCheck() {
        const fakeChecks = [
            '🔍 Scanning for debugging tools...',
            '🛡️  Verifying environment integrity...',
            '🔒 Checking encryption layers...',
            '✅ All security checks passed!'
        ];
        
        fakeChecks.forEach((check, index) => {
            setTimeout(() => {
                console.log('%c' + check, 'color: #4a9eff;');
            }, index * 1000);
        });
    }
    
    // Initialize security check on page load
    window.addEventListener('load', securityCheck);
    
    // Hidden message for those who view source
    console.log('%c✨ Look deeper... the truth is never on the surface.', 
                'color: transparent; text-shadow: 0 0 8px #ff00ff; font-size: 16px;');
    
})();
