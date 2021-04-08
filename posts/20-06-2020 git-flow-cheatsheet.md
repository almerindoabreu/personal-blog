---
date: 2020-05-10 08:00:00
title: Cheat Sheet git-flow
description: Consulte rapidamente os comandos do git e git-flow para utilização do workflow git-flow.
background: "#7AAB13"
category: Cheat Sheet
keyWords: Git, Gitflow, Gerenciamento de Código, Workflow
image: "/assets/img/git-flow-white.png"
---

![Git Flow](/assets/img/git-flow-black.PNG)

1 - Inicialmente a branch **master** dever ser criada, juntamente com o versionamento do projeto.

Comando Git tradicional
```git
    git init
```

2 - A branch **develop** deverá ser criada a partir da ramificação da branch **master**.

Comando Git tradicional
```git
    git branch develop
```

3 - A branch **feature** deverá ser ramificada da branch **develop** sempre que for desenvolver uma nova funcionalidade.

Comando Git tradicional
```git
    git checkout develop
    git checkout -b feature_branch
```

Comando Git-flow
```
    git flow feature start feature_branch
```

4 - Quando finalizar uma **feature**, deverá ser realizado o merge na branch **develop**.

Comando Git tradicional
```git
    git checkout develop
    git merge feature_branch
```

Comando Git-flow
```
    git flow feature finish feature_branch
```

5 - A branch **release** deverá ser criada a partir da ramificação da branch **develop**.

Comando Git tradicional
```git
    git checkout develop
    git checkout -b release/0.1.0
```

Comando Git-flow
```
    git flow release start 0.1.0
```

6 - Qualquer bug encontrado na versão da branch **release** deverá ser corrigida nessa mesma branch.

Comando Git tradicional
```git
    git checkout develop
    git merge release/0.1.0
```

7 - Assim que consolidada a branch **release**, então deverá ser realizado o merge para a branch **master**.

Comando Git tradicional
```git
    git commit -m 'fix texto do commit'
```

Comando Git-flow
```
    git flow release finish '0.1.0'
```

8 - Caso seja reportado algum bug importante no ambiente de produção, deverá ser criado a branch de **hotfix** de ramificação **master**.

Comando Git tradicional
```git
    git checkout master
    git checkout -b hotfix_branch
```

Comando Git-flow
```
    git flow hotfix start hotfix_branch
```

9 - Quando corrigido o bug deverá realizar o merge com a branch **master** e a branch **develop**.

Comando Git tradicional
```git
    git checkout master
    git merge hotfix_branch
    git checkout develop
    git merge hotfix_branch
    git branch -D hotfix_branch
```

Comando Git-flow
```
    git flow hotfix finish hotfix_branch
```

### Download do workflow

[Imagem do fluxo do workflow com template preto](/assets/img/git-flow-black.PNG)

[Imagem do fluxo do workflow com template branco](/assets/img/git-flow-white.PNG)