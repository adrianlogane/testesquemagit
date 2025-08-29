# 🚀 Training Kit Express – Cultura de Desarrollo

Bienvenido 👋, este equipo trabaja con **Serverless 3**.  
Para mantener calidad y velocidad, seguimos un **golden path** que asegura que todas las apps se construyen, prueban y despliegan de la misma forma.

---

## 1. Flujo de trabajo (Golden Path)

1. **Crea tu rama**  
   ```bash
   git checkout -b feat/nueva-funcionalidad
   ```
2.Haz tus cambios.

3.Commit (validado por husky + commitlint):

```bash
git commit -m "feat(auth): implementar refresh token"
```
4.Push y abre PR a la rama correspondiente (qa, rel, main).

Pipeline automático revisa:
- Linter y formato ✅
- Unit tests con cobertura ≥80% ✅
- Análisis de seguridad (SAST, dependencias, IaC) ✅
- Build y empaquetado con Serverless ✅

6.Revisión de CODEOWNERS → Merge solo si todo pasa.

## 2. Commits (Conventional Commits)
Formato:

txt
```bash
<tipo>(<scope>): <descripción>
```
✅ Correctos
```bash
feat(ui): agregar botón de login
fix(auth): corregir error en refresh token
docs(readme): agregar instrucciones de despliegue
test: añadir pruebas unitarias para payments
```
❌ Incorrectos
```bash
Copiar código
update login
cambios finales
arreglo cosas
```
👉 Usa estos tipos principales:
- <code>feat</code>: nueva funcionalidad
- <code>fix</code>: corrección de bug
- <code>docs</code>: documentación
- <code>style</code>: formato/código sin lógica
- <code>refactor</code>: cambio de código sin feature/bug
- <code>perf</code>: mejora de rendimiento
- <code>test</code>: agregar o corregir tests
- <code>chore</code>: mantenimiento, build, dependencias

## 3. Pull Requests
Cada PR debe usar la plantilla automática con:

- Qué cambia
- Cómo se probó
- Checklist de calidad
- Riesgos y rollback

Ejemplo de título PR:
 ```bach
feat(payments): integrar Apple Pay en checkout
```
## 4. Hooks locales (automáticos)
 - Antes de cada commit (husky):
    - Linter + formateo
    - Tests unitarios rápidos

 - Al escribir mensaje de commit:
    - Validación de convención (commitlint)

👉 Si el commit falla → corrige antes de pushear.

## 5. Pipelines (CI/CD)
  1. Al abrir un PR:
  2. Lint y formato
  3. Tests unitarios con cobertura ≥80%
  4. Análisis de seguridad (SAST, deps, IaC)
  5. Empaquetado de artefacto único ( Serverless zip)
  6. Solo si todo pasa ➝ PR puede ser aprobado y mergeado.

## 6. Cultura de calidad
 - Pequeños commits, pequeños PRs → más fáciles de revisar.
 - Todo cambio debe tener tests.
 - Nada de push directo a main/release.
 - Si falla el pipeline → arreglar antes de merge.
 - Si dudas, documenta en el PR o crea un ADR.

## 7. Primer día en el equipo (Checklist)
1. Clona el repo.
2. Ejecuta <code>npm install</code>.
3. Activa husky:
```bash
npm run prepare
```
4. Crea tu primera rama:

```bash
git checkout -b feat/hello-world
```
5. Crea un commit de prueba (ej: docs: agregar mi nombre en contributors.md).

6. Haz push y abre tu primer PR 🎉.