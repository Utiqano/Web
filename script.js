// Gestion des connexions utilisateurs
function login() {
    // Clear error message before each attempt
    document.getElementById('error-message').classList.add('hidden');
    
    const validCredentials = {
        'A.Amin': 'Plastipart$1',
        'H.Sami': 'Plastipart$1',
        'A.Khamesi': 'Plastipart$1',
        'M.Jérémie': 'Plastipart$1',
        'G.walid': 'Plastipart$1',
        'A.yahyaoui': 'Plastipart$1',
        'J.tarek': 'Plastipart$1',
        'H.trabelsi': 'Plastipart$1',
        'G.amine': 'Plastipart$1',
        'M.chamsi': 'Plastipart$1',
        'K.Abdelkader': 'Plastipart$1'
    };

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (validCredentials[username] === password) {
        document.getElementById('login-page').classList.add('hidden');
        document.getElementById('audit-links-page').classList.remove('hidden');
    } else {
        document.getElementById('error-message').classList.remove('hidden');
    }
}

function logout() {
    document.getElementById('audit-links-page').classList.add('hidden');
    document.getElementById('login-page').classList.remove('hidden');
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}
