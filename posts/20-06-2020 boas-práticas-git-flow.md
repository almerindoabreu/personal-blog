---
date: 2020-05-10 08:00:00
title: Os princípios do Gitflow
description: Com mais de 10 anos da publicação do Gitflow o modelo ainda é extremamente eficiente como fluxo de trabalho em diversos tipos de projetos de software.
background: "#7AAB13"
category: Artigo
keyWords: Git, Gitflow, Gerenciamento de Código, Workflow
image: "/assets/img/gitflow.png"
---

Opa! Beleza?!

Entender pontualmente os comandos do Git não é um tarefa tão difícil, mas pôr em práticas em cenários usuais pode ser confuso em alguns momentos, principalmente caso não tenha presenciado uma experiência que exigisse a necessidade de utilizar uma metodologia com fluxo de trabalho elaborado para gerenciamento de desenvolvimento através do Git.

Se você for uma pessoa com alguma experiência em programação, seja até em reprodução de aprendizado por vídeo aulas, possivelmente notou que padrões de nomenclatura de variáveis, padrões de classes, funções, arquivos, pastas entre outras padronizações de escrita que fará que com seja legível seu projeto é aspecto muito importante.

Pois bem, um dos pontos mais importantes em um time de projeto é a padronização do trabalho, e no fluxo de desenvolvimento a forma de fazer a gestão de versionamento com o Git não é diferente.

Boas práticas devem ser levado em consideração para a saúde de um projeto. E por esse motivo, iremos refletir sobre boas práticas do Gitflow, que talvez seja o mais utilizados e certamente o mais famoso fluxo de trabalho para desenvolvimento de sotfware para que o projeto seja conciso ao decorrer do tempo.

Boas práticas, como um todo, é extremamente importante para trabalhar em um time ou em um projeto opensource (já que será disponível para possíveis contribuições e análises de outros programadores). Caso esteja trabalhando sozinho em um projeto privado, é mais fácil de manter a linha de raciocíno sem um workflow bem definido, mas de qualquer forma se o projeto privado e pessoal estiver ganhando dimensão vai ser interessante partir para um workflow para possibilitar a inserção de novos membros ou contribuições. Então, por que não utilizar um workflow desde o início? Além de que não é uma tarefa trabalhosa de se implementar!

## O que é Gitflow

O Gitflow é um workflow de boas práticas de gerenciamento de código com o Git que foram consolidadas pelos casos de sucesso em projetos em que inicialmente foram apresentadas e explicadas por [Vincent Driessen](https://nvie.com/posts/a-successful-git-branching-model/).

Antes que seja tarde, segue uma breve definição do Git para podermos ficar todos na mesma página de entendimento.

> [Git](https://git-scm.com/) é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.
> **Fonte: [Wikipedia](https://pt.wikipedia.org/wiki/Git)**

## Benefícios da utilização do Gitflow

De modo geral, a utilização de qualquer workflow em projetos de software traz organização guiada a boas práticas utilizadas pelo fluxo.

O Gitflow fornece um canal exclusivo para hotfix, isso é importante para agir pontualmente e com rápidez em correções de bugs, e consequentemente oferecer compromisso com produto e ao cliente.

Em caso de algum bug no ambiente de produção o hotfix é criado a partir da mesma versão do ambiente de produção (através da ramificação da versão da branch master), o interessante disso, é que o programador que vai atuar na correção poderá parar o seu desenvolvimento  de novas funcionalidades que estará na branch de feature e ir para a branch hotfix com versão identica a de produção, sem nenhuma alteração de novas funcionalidades realizada pela equipe, que neste momento está trabalhando com as branchs de feature e develop, e depois da correção retonar ao seu trabalho que estava desempenhando anteriormente sem nenhum retrabalho.

Além de correções pontuais sem grande perda de produtividade, o GitFlow também oferece através da branch de realese, uma etapa de liberação, que em muitos projetos envolve diretamente o product owner para validação antes da subida para produção. Essa validação conhecemos como homologação, e através da branch de realese pode ser criado um ambiente de homologação para os testes funcionais.

## As Branchs no Gitflow

O princípio do Gitflow defende a existência de 2 tipos de branchs (ou ramificações, em português), as principais e as de suportes.

As principais são, Master e Develop:

**master**: A branch master é a ramificação que estará com o código da versão do ambiente de produção. Uma versão já testada e validada.

**develop**: A branch develop tem objetivo de manter os desenvolvimentos realizados pela equipe. Podemos chamar de branch de integração, pois nela a equipe centralizam os desenvolvimentos.

As branchs de support, são:

**feature**: Cada funcionalidade desenvolvida é uma branch feature criada.

**hotfix**: A ramificação hotfix, é uma branch de emergência para correções de bug diagnosticado do ambiente de produção.

**realese** É a branch antes de levar a versão para o ambiente de produção (ou para a branch master). Em outras palabras, é o ambiente de homologação.

## O fluxo do Gitflow

![Git](/assets/img/gitflow.PNG)

1 - Inicialmente a branch master dever ser criada;

2 - A branch develop deverá ser criada a partir da ramificação da branch master;

3 - A branch feature deverá ser ramificada da branch develop sempre que for desenvolver uma feature;

4 - Quando finalizar uma feature ou um conjunto de feature, deverá ser realizado o merge na branch develop;

5 - A branch realese deverá ser criada a partir da ramificação da branch develop;

6 - Qualquer bug encontrado na versão da branch realese deverá ser corrigida nessa mesma branch;

7 - Consolidada a branch realese então deverá ser realizado o merge para a branch master;

8 - Caso seja reportado algum bug importante no ambiente de produção, deverá ser criado a branch de hotfix de ramificação da branch master;

9 - Quando corrigido o bug deverá realizar o merge com a branch master e a branch develop.

## Boas práticas de escritas

Com a existência momentânea das branchs feature, realese e hotfix, o gitflow propõe um padrão na nomenclatura para criação dessas branchs: feature-*, realese-* e hotfix-*, respectivamente.

Na utilização do framework do gitflow, por sua vez resume tarefas e comandos em menos linhas de comandos fazendo uma sequencia de comando git ser disparada.

fazem tarefas por comandos do git para, tendendo à boa prática estabelecida do fluxo como a deleção das branchs de suportes assim que são realizadas as merges com as principais, e as próprias nomenclaturas citadas anteriormete.

### Tag de versões

