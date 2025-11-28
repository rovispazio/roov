Workflow Corretto:

Fai le modifiche ai file sorgente (index.html, componenti React, ecc.)
Commit su main: git add . && git commit -m "messaggio"
Push su main: git push origin main
Deploy: npm run deploy

Il comando npm run deploy fa automaticamente:
Build del progetto (npm run build)
Push della cartella dist/ sul branch gh-pages