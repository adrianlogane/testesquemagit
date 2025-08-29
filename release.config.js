module.exports = {
  branches: ["main"], // ramas donde se liberan versiones
  repositoryUrl: "https://github.com/tuusuario/turepo",
  plugins: [
    "@semantic-release/commit-analyzer", // Detecta tipo (feat, fix, BREAKING CHANGE)
    "@semantic-release/release-notes-generator", // Genera changelog de cada release
    "@semantic-release/changelog", // Escribe en CHANGELOG.md
    "@semantic-release/git", // Commit del changelog y package.json actualizado
    "@semantic-release/github", // Publica release en GitHub
    "@semantic-release/npm" // Publica en npm (si corresponde)
  ]
};