function getAdmins (map) {
    let admins = [];
    for([key, value] of map) {
        if (value == 'admin') {
            admins.push(key);

        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz','admin');
usuarios.set('Jorge','user');
usuarios.set('Natalia','admin');

console.log(getAdmins(usuarios));