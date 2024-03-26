module.exports = {
    branches: ['main', 'Semantic-Release', 'develop'], // Ajoutez la branche de fonctionnalité à surveiller pour les nouvelles versions
    plugins: [
      '@semantic-release/commit-analyzer', // Analyse les messages de commit pour déterminer le type de version
      '@semantic-release/release-notes-generator', // Génère automatiquement les notes de publication
      '@semantic-release/changelog', // Génère automatiquement le journal des modifications
      ['@semantic-release/git', {
        assets: ['package.json', 'CHANGELOG.md'], // Fichiers à inclure dans les commits de version
      }],
    ],
    // Définir une plage de versions autorisées
    preset: 'conventionalcommits',
    release: {
      branches: [
        { name: 'main', prerelease: false }, // Modifier prerelease en false
        { name: 'Semantic-Release', prerelease: false }, // Modifier prerelease en false
        { name: 'develop', prerelease: false }, // Modifier prerelease en false
      ],
    },
  }  