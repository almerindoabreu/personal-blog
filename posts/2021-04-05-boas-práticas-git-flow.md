---
date: 2021-04-10 08:00:00
title: "Gitflow: O modelo de trabalho orientado à branches"
description: Com mais de 10 anos da publicação do Gitflow o modelo ainda é extremamente eficiente como fluxo de trabalho em diversos tipos de projetos de software.
background: "#7AAB13"
category: Artigo
keyWords: Git, Gitflow, Gerenciamento de Código, Workflow
image: "/assets/img/git-flow-thumbnail-new.png"
---

Opa! Beleza?!

Entender pontualmente os comandos do Git não é um tarefa complexa, além de que, a documentação disponível no site do [Git](https://git-scm.com/doc) é muito bem escrita, então vale muito apena fazer o uso da documentação como primeiro contato com o assunto, mas por em prática em cenários usuais pode gerar questionamentos, principalmente, caso não tenha presenciado uma experiência que exigisse a necessidade de utilizar uma metodologia com fluxo de trabalho elaborado para gerir o desenvolvimento do projeto.

Se você for uma pessoa com alguma experiência em programação, seja até em reprodução de aprendizado por vídeo aulas, possivelmente notou que padrões de nomenclatura de variáveis, padrões de classes, funções, atributos, arquivos, pastas entre outras práticas de escrita fará com que seu projeto seja mais legível, e obviamente esse aspecto é muito importante.

Pois bem, um dos pontos mais relevantes em um time de projeto é a padronização do trabalho, e no fluxo de desenvolvimento a forma de fazer a gestão de versionamento com o Git não é diferente.

Boas práticas devem ser levado em consideração para a "saúde" de um projeto. E por esse motivo, iremos refletir sobre boas práticas do git flow, que é o mais famoso fluxo de trabalho para desenvolvimento de software (dividindo esse protagonismo com o github flow) para que o projeto seja conciso ao decorrer do tempo.

Boas práticas, como um todo, é extremamente importante para trabalhar em um time ou em um projeto open source (já que será disponível para possíveis contribuições e análises de outros programadores). Caso esteja trabalhando sozinho em um projeto privado, é mais fácil de manter a linha de raciocino sem um workflow bem definido, mas de qualquer forma se o projeto privado e pessoal estiver ganhando dimensão vai ser interessante utilizar um workflow para possibilitar a inserção de novos membros ou contribuições. Então, por que não utilizar um workflow desde o início? Além de não ser uma tarefa trabalhosa de se implementar!

## O que é Git, e quais foram as dores que esse gerenciador de código veio para solucionar?

O Git é um sistema de controle de versão distribuído smuito eficiente desde os pequenos até os grandes projetos, e tudo isso com muita eficiência e performance.

A capacidade de ser distribuído traz a possibilidade dos usuários possuírem uma cópia completa localmente do repositório, podendo trabalhar offline, porém é óbvio que para compartilhar alterações haverá a necessidade da internet.

![Distributed-Centralized](/assets/img/centralized-vs-distributed.png)
Fonte: Centralized vs Distributed Version Control Systems,
Mateusz Lubański, [FAUN](https://faun.pub/centralized-vs-distributed-version-control-systems-a135091299f0)

O criador do Git foi nada mais nada menos que o Linus Torvalds, o mesmo criador do Kernel do Linux. Na época, o Kernel do Linux tinha o seu versionamento mantido pelo controle de versão BitKeeper, o primeiro controle de versão distribuído e bem desenvolvido, era uma ferramenta fechada que deixavam projetos open source usarem.

Um belo dia, empresa BitMoover, proprietária do BitKeeper, mudou a estratégia tornando-o um software totalmente comercial, e obviamente o Kernel do Linux, ficou sem o BitKeeper. O que restou eram software muito mal vistos, como CVS e Subversion. Então, o objetivo de Torvalds era resolver de fato o problema de versionamento desenvolvendo algo melhor, e assim, em 2005 surgiu o gerenciador de código fonte mais popular do mundo, o Git.

Existiam alguns pilares que Torvalds seguia como objetivo para que realmente valesse a pena o gerenciador de versão, eram:

- O controle de versão tinha que ser distribuído;
- Tinha que ser performático;
- Robustez para garantir que o código enviado para o repositório saem exatamente iguais (Não era tão incomum os controles de versão não garantir este requisito, corrupção de memória ou de disco podia resultar em problemas, e só saberia que teve problema se realmente notar.)

## O que é Gitflow?

O Gitflow é um workflow de boas práticas de gerenciamento de código com o Git, e tem como foco principal projetos grandes que oferecem suportes em diversas versões do produto. Foi apresentado e explicado por Vincent Driessen, no artigo ["A successful git branching model"](https://nvie.com/posts/a-successful-git-branching-model/), em 2010.

O próprio Driessen, editou o artigo depois de 10 anos, em 2020, acrescentando uma observação enfatizando que não deve ser seguido como um proposta que encaixa em todos os projetos, por exemplo em aplicações web em que a entrega é incremental, modelos mais simples como o Github flow acaba sendo mais adequado.

## Benefícios da utilização do Gitflow

Em toda internet quando se fala de Git, sempre surge algum meme sobre fazer commit na branch master. Aposto que já viu algum, né! rs

![PushToMasterMeme](/assets/img/cant-run-into-conflicts-if-you-just-commit-to-master.jpg)

Brincadeiras a parte, na verdade, existem diversos motivos para evitar commits, e consequentemente, pushes na master. Para criarmos uma idéia das boas práticas, vamos refletir sobre alguns pontos negativos de fazer push para a branch master. Isso vai ajudar muito à compreender o motivo das branches do Gitflow.

Primeiro motivo, se realizar o push de um trabalho incompleto para a branch master remota, isso vai invalidar a versão atual da master, o que pode acarretar em um desenvolvedor que iniciar uma nova feature, ao obter a versão da master, poderá ter dificuldades pelo fato da versão estar inconsistente com o desenvolvimento realizado pela metade. Agora imagina se a equipe tiver umas 5 à 6 desenvolvedores fazendo o uso dessa prática, esse tipo de prática seria inviável.

Caso for encontrado um bug no sistema, em uma determinada versão, os desenvolvedores teriam muito trabalho para obter a versão em que está em produção para então realizar a correção. Fora que, como é muito comum em projetos sérios, existir uma etapa de validação para uma versão ser lançada em produção, portanto, os desenvolvimentos que foram finalizado depois da subida da última versão para o ambiente de produção, devem ser validados, e esta validação existe uma certa burocracia, que para uma correção de bug não deveria ter. Com isso, o trabalho para isolar o código de produção, depois tratar o problema e manter histórico utilizando apenas uma branch é praticamente impossível, fora que seria muito trabalhoso necessitaria um grande esforço na comunicação com a equipe.

Outro motivo, é a inviabilidade do uso do code review, por um desenvolvedor mais experiente, tendo somente a branch master essa prática seria muito complicada.

Esses problemas poderiam ser contornados através de uma boa comunicação entre os desenvolvedores da equipe? Talvez sim, mas ao meu ver o entrosamento é a possibilidade de se comunicar, e prever possíveis ações com pouquíssimo esforço de comunicação. E adquirir entrosamento, neste contexto, tem uma enorme contribuição de um workflow.

De modo geral, a utilização de qualquer workflow em projetos de software traz organização guiada a boas práticas utilizadas pelo fluxo.

De forma geral o Gitflow é um workflow que reflete muito os status do projeto em branches, respeitando assim todas etapas de forma organizada.

O Gitflow fornece um canal exclusivo para hotfix, isso é importante para agir pontualmente e com rapidez em correções de bugs, sem precisar de uma validação do Product Owner que seriam os desenvolvimentos que passam pela  branch  realese, e consequentemente oferecer compromisso com produto e ao cliente.

Em caso de algum bug no ambiente de produção o hotfix é criado a partir da mesma versão desse ambiente (através da ramificação da versão da branch master). E o interessante disso, é que o programador que vai atuar na correção poderá parar o seu desenvolvimento de novas funcionalidades que estará na branch de feature e ir para a branch hotfix com versão idêntica a de produção, sem nenhuma alteração de novas funcionalidades realizada pela equipe, que neste momento estaria trabalhando com as branches de feature e develop. E então, posteriormente a correção, o desenvolvedor poderá retornar ao desenvolvimento que estava desempenhando anteriormente sem nenhum retrabalho.

Além de correções pontuais sem grandes perdas na produtividade, o Gitflow também oferece através da branch de release, uma etapa de liberação, que em muitos projetos envolve diretamente o Product Owner para validação antes da subida para produção. Essa validação conhecemos como homologação, e através da versão disponível na branch de release pode ser criado um ambiente de homologação para os testes funcionais.

## As Branches no Gitflow

O princípio do Gitflow defende a existência de 2 tipos de branches (ou ramificações, em português), as principais e as de suportes.

As branches principais são oficiais, essas nunca são excluídas e devem estar sempre atualizadas de acordo com o fluxo. Já as branches de suporte são provisórias, portanto são criadas com objetivo de realizar alguma modificação específica no código fonte, e posteriormente à conclusão, deverá ser realizado o merge para as branches principais e depois ser excluídas para manter coerente a quantidade de branches ativas no projeto.

![SchemaGitFlowCommands](/assets/img/git-flow-commands.png)

Detalhando um pouco melhor, as branches principais são, Master e Develop:

**master**: A branch master é a ramificação que estará com o código da versão do ambiente de produção. Uma versão já testada e validada.

**develop**: A branch develop tem objetivo de manter os desenvolvimentos realizados pela equipe. Podemos chamar de branch de integração, pois nela a equipe centralizam os desenvolvimentos.

As branches de suporte, são:

**feature**: Cada funcionalidade desenvolvida é uma branch feature criada.

**hotfix**: A ramificação hotfix, é uma branch de emergência para correções de bug diagnosticado do ambiente de produção.

**release**: É a branch antes de levar a versão para o ambiente de produção (ou para a branch master). Em outras palavras, podemos considerar como a versão do ambiente de homologação.

## O fluxo do Gitflow

![Git](/assets/img/fluxo-git-flow.png)

As duas primeiras etapas do framework Gitflow descrito a cima, são etapas obrigatórias, iniciais e únicas, não são repetidas, diferentes das demais que podem acontecer ao decorrer do projeto. Lembrando que as branches master e develop são branches principais e fixas no projeto, não são finalizadas.

As etapas de desenvolvimento são as tarefas definidas e priorizadas na sprint, e que podem ocorrer em paralelo às etapas de homologação e validação, como a equipe é composta por diversos membros, podemos até fazer um paralelo com as threads do processador, enquanto alguns membros estão focados em tarefas com foco em homologação, outros podem estar focados em desenvolvimentos de novas features e outros em correções do hotfix.

As etapas do hotfix normalmente são correções urgentes, que devem ser sempre priorizadas, pois são tarefas que os usuários ou clientes estão "vendo" no ambiente de produção, e que faz parte do fluxo justamente para garantir essa proximidade e atenção na correção de problemas.

Descrevendo cada etapa do processo do Gitflow, podemos observar:

1 - Inicialmente a branch master dever ser criada (a partir do git init);

2 - A branch develop deverá ser criada a partir da ramificação da branch master;

3 - A branch feature deverá ser ramificada da branch develop sempre que for desenvolver uma feature;

4 - Quando finalizar uma feature ou um conjunto de features, deverá ser realizado o merge na branch develop;

5 - Toda feature finalizada deverá ser finalizada, passará à não existir, posteriormente ao merge;

6 - A branch release deverá ser criada a partir da ramificação da branch develop;

7 - Qualquer bug encontrado na versão da branch release deverá ser corrigida nessa mesma branch;

8 - Consolidada a branch release, deverá então, ser realizado o merge para a branch master e branch develop (para garantir que a master e a develop estão iguais neste momento);

9 - Todo release finalizado deverá ser finalizando, passará à não existir, posteriormente ao merge;

10 - Caso seja reportado algum bug importante no ambiente de produção, deverá ser criado a branch de hotfix de ramificação da branch master;

11 - Quando corrigido o bug, deverá então, realizar o merge com a branch master e a branch develop.

12 - Todo hotfix finalizado deverá ser finalizado, passará à não existir, posteriormente ao merge;

## Nomenclatura de branches do Gitflow

Qualquer padrão de nomenclatura é considerada como boas práticas para organizar o trabalho, porém se caso a equipe não estiver sincronizada no entendimento da organização do projeto e não estiver usando nenhuma ferramenta que molde o padrão de trabalho, existirá ponto fraco com grandes chances de não ser cumprido a ideia.

Com a existência momentânea das branches feature, release e hotfix, o Gitflow propõe um padrão na nomenclatura para criação dessas branches: feature-\*, release-\* e hotfix-\* (ou feature/\*, release/\* e hotfix/\*, ou derivados desse padrão), respectivamente.

Em projetos open source por exemplo, manter essa boa prática pode ser um desafio inviável, pelo fato de talvez uma mínima organização de manter duas branches fixas e as demais provisórias já serem suficiente para a organização do projeto. Então, o que eu quero dizer é que a prática não é o ponto principal deste workflow, mas sim o fluxo de branches. Mas particularmente, eu sou muito detalhista na questão de padrões de escrita, e adepto a esta boa prática.

Uma ótima ferramenta para se moldar Gitflow no projeto, é a [biblioteca de subcomandos do Git flow](https://github.com/nvie/gitflow), essa ferramenta faz com que seja resumido os comandos tradicionais do Git em comandos customizados, o que gera produtividade para equipe e conformidade com os princípios do Gitflow, como a deleção das branches de suportes assim que são realizadas as merges com as principais, e as próprias nomenclaturas citadas anteriormente.

### Conclusão

O Gitflow foi abraçado pela comunidade de desenvolvimento de software, como um dos principais workflow de git em projetos, mas infelizmente alguns projetos usam esse workflow sem tanta necessidade, podendo optar por workflow mais simples.

De certa forma, entender os motivos de cada branch, de cada princípio por trás do Gitflow, faz compreender as necessidades do projeto, para argumentar e discutir com a equipe a melhor forma de se trabalhar com o git, e talvez buscar alternativas.

E assim como o Vincent Driessen deixou um esquema visual para ser rapidamente consultado o fluxo, estou deixando como produto desse post um [CheatSheet](http://almerindoabreu.netlify.app/git-flow-cheatsheet/) com uma proposta de clarear o entendimento através dos comandos do Git e do framework GitFLow, fazendo um "merge" entre os comandos e o esquema gráfico do Driessen.
