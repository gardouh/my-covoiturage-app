const sails = require('sails');

sails.lift({
  hooks: { grunt: false },
  log: { level: 'error' },
}, async (err) => {
  if (err) {
    console.error('Error occurred starting Sails:', err);
    process.exit(1);
  }

  // Ici, vous pouvez ajouter des appels pour créer des enregistrements par défaut, si nécessaire
  // Exemple : await User.create({ email: 'admin@example.com', password: 'password' });

  sails.lower();
});