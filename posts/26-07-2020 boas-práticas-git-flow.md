---
date: 2020-05-10 08:00:00
title: Os princípios do Gitflow
description: Com mais de 10 anos da publicação do Gitflow o modelo ainda é extremamente eficiente como fluxo de trabalho em diversos tipos de projetos de software.
background: "#7AAB13"
category: Artigo
keyWords: Git, Gitflow, Gerenciamento de Código, Workflow
image: "/assets/img/git-flow-thumbnail-new.png"
---

Opa! Beleza?!

Entender pontualmente os comandos do Git não é um tarefa tão difícil, além que de que, a documentação disponível no site do [Git](https://git-scm.com/doc) é muito bem escrita, e particularmente eu sempre aconselho a ler, mas por em prática em cenários usuais pode gerar questionamentos, principalmente, caso não tenha presenciado uma experiência que exigisse a necessidade de utilizar uma metodologia com fluxo de trabalho elaborado para gerir o desenvolvimento através do Git.

Se você for uma pessoa com alguma experiência em programação, seja até em reprodução de aprendizado por vídeo aulas, possivelmente notou que padrões de nomenclatura de variáveis, padrões de classes, funções, arquivos, pastas entre outras práticas de escrita fará com que seu projeto seja mais legível, e obviamente esse aspecto é muito importante.

Pois bem, um dos pontos mais relevantes em um time de projeto é a padronização do trabalho, e no fluxo de desenvolvimento a forma de fazer a gestão de versionamento com o Git não é diferente.

Boas práticas devem ser levado em consideração para a "saúde" de um projeto. E por esse motivo, iremos refletir sobre boas práticas do Gitflow, que é o mais famoso fluxo de trabalho para desenvolvimento de sotfware (dividindo esse protagonismo com o GithubFlow) para que o projeto seja conciso ao decorrer do tempo.

Boas práticas, como um todo, é extremamente importante para trabalhar em um time ou em um projeto opensource (já que será disponível para possíveis contribuições e análises de outros programadores). Caso esteja trabalhando sozinho em um projeto privado, é mais fácil de manter a linha de raciocíno sem um workflow bem definido, mas de qualquer forma se o projeto privado e pessoal estiver ganhando dimensão vai ser interessante utilizar um workflow para possibilitar a inserção de novos membros ou contribuições. Então, por que não utilizar um workflow desde o início? Além de não ser uma tarefa trabalhosa de se implementar!

## O que é Gitflow

O Gitflow é um workflow de boas práticas de gerenciamento de código com o Git que foram consolidadas pelos casos de sucesso em projetos em que inicialmente foram apresentadas e explicadas por [Vincent Driessen](https://nvie.com/posts/a-successful-git-branching-model/).

Antes que seja tarde, segue uma breve definição do Git para podermos ficar todos na mesma página de entendimento.

> [Git](https://git-scm.com/) é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.
> **Fonte: [Wikipedia](https://pt.wikipedia.org/wiki/Git)**

## Benefícios da utilização do Gitflow

Em toda internet quando se fala de Git, sempre surge algum meme sobre fazer commit na branch master. Aposto que já viu algum! rs

![PushToMasterMeme](/assets/img/cant-run-into-conflicts-if-you-just-commit-to-master.jpg)

Brincadeiras a parte, na verdade, existem diversos motivos para evitar commits, e consequentemente, push na master. Para criarmos um bom alicerce de boas práticas, vamos refletir sobre alguns pontos negativos de fazer push para a branch master. Isso vai ajudar muito à compreender algumas boas práticas do Gitflow.

1 - Se realizar o push de um trabalho incompleto para a branch master remote, isso vai invalidar a versão atual da master, o que pode acarretar em um desenvolvedor que iniciar uma nova feature, ao obter a versão da master, poderá ter dificuldades pelo fato da versão estar inconcistente com um desenvolvimento pela metade. Agora imagina se a equipe tiver umas 5 à 6 desenvolvedores fazendo o uso dessa prática.

2 - Caso for encontrato um bug no sistema, em uma determinada versão, os desenvolvedores teriam muito trabalho para obter a versão em que está em produção para então realizar a correção. Fora que, como é muito comum em projetos sérios, existir uma etapa de validação para uma versão ser lançada em produção, portanto, os desenvolvimentos que foram finalizado depois da subida da última versão para o ambiente de produção, devem ser validados, e esta validação existe uma certa burocracia, que para uma correção de bug não deveria ter. Com isso, o trabalho para isolar o código de produção, depois tratar o problema e manter histórico utilizando apenas uma branch é praticamente impossível, fora que seria muito trabalhoso necessitaria um grande esforço na comunicação com a equipe.

3 - Etapa de code review, por um desenvolvedor mais experiente, tendo somente a branch master não seria possível.

De modo geral, a utilização de qualquer workflow em projetos de software traz organização guiada a boas práticas utilizadas pelo fluxo.

O Gitflow fornece um canal exclusivo para hotfix, isso é importante para agir pontualmente e com rápidez em correções de bugs, e consequentemente oferecer compromisso com produto e ao cliente.

Em caso de algum bug no ambiente de produção o hotfix é criado a partir da mesma versão desse ambiente (através da ramificação da versão da branch master). E o interessante disso, é que o programador que vai atuar na correção poderá parar o seu desenvolvimento de novas funcionalidades que estará na branch de feature e ir para a branch hotfix com versão identica a de produção, sem nenhuma alteração de novas funcionalidades realizada pela equipe, que neste momento estaria trabalhando com as branchs de feature e develop. E então, posteriormente a correção, o desenvolvedor poderá retonar ao desenvolvimento que estava desempenhando anteriormente sem nenhum retrabalho.

Além de correções pontuais sem grandes perdas na produtividade, o GitFlow também oferece através da branch de release, uma etapa de liberação, que em muitos projetos envolve diretamente o Product Owner para validação antes da subida para produção. Essa validação conhecemos como homologação, e através da versão disponível na branch de release pode ser criado um ambiente de homologação para os testes funcionais.

// Acrescentar benefícios da utilização do GitFlow;


## As Branchs no Gitflow

O princípio do Gitflow defende a existência de 2 tipos de branchs (ou ramificações, em português), as principais e as de suportes.

As branchs principais são oficiais, essas nunca são excluídas e devem estar sempre atualizadas de acordo com o fluxo. Já as branchs de suporte são provisórias, portanto são criadas com objetivo de realizar alguma modificação específica no código fonte, e posteriormente à conclusão, deverá ser realizado o merge para as branchs principais e depois ser excluídas para manter coerente a quantidade de branchs ativas no projeto.

Detalhando um pouco melhor, as branchs principais são, Master e Develop:

**master**: A branch master é a ramificação que estará com o código da versão do ambiente de produção. Uma versão já testada e validada.

**develop**: A branch develop tem objetivo de manter os desenvolvimentos realizados pela equipe. Podemos chamar de branch de integração, pois nela a equipe centralizam os desenvolvimentos.

As branchs de support, são:

**feature**: Cada funcionalidade desenvolvida é uma branch feature criada.

**hotfix**: A ramificação hotfix, é uma branch de emergência para correções de bug diagnosticado do ambiente de produção.

**release** É a branch antes de levar a versão para o ambiente de produção (ou para a branch master). Em outras palabras, podemos considerar como a versão do ambiente de homologação.

## O fluxo do Gitlow

![Git](/assets/img/fluxo_git_flow.png)

As duas primeiras etapas do framework Gitflow descrito a cima, são etapas obrigatórias, iniciais e únicas, não são repetidas, diferentes das demais que podem ocontecer ao decorrer do projeto. Lembrando que as branches master e develop são branches principais e fíxas no projeto, não são finalizadas.

As etapas de desenvolvimento são as tarefas definidas e priorizadas na sprint, e que podem ocorrer em paralelo às etapas de homolação e validação, como a equipe é composta por diversos membros, podemos até fazer um paralelo com as threads do processador, enquanto alguns membros estão focados em tarefas com foco em homologação, outros podem estar focados em desenvolvimentos de novas features e outros em correções do hotfix.

Já entrando no assunto de hotfix... As etapas do hotfix, são etapas urgentes, que devem ser sempre priorizadas, pois são tarefas que os usuários ou clientes estão "vendo" no ambiente de produção, e que faz parte do fluxo justamente para garantir essa proximidade e atenção na correção de problemas.

Descrevendo cada etapa do processo do Gitflow, podemos obervar:

1 - Inicialmente a branch master dever ser criada (a partir do git init);

2 - A branch develop deverá ser criada a partir da ramificação da branch master;

3 - A branch feature deverá ser ramificada da branch develop sempre que for desenvolver uma feature;

4 - Quando finalizar uma feature ou um conjunto de features, deverá ser realizado o merge na branch develop;

5 - Toda feature finalizada deverá ser "deletada", posteriormente ao merge;

6 - A branch release deverá ser criada a partir da ramificação da branch develop;

7 - Consolidada a branch release, deverá então, ser realizado o merge para a branch master e branch develop (para garantir que a master e a develop estão iguais neste momento);

8 - Todo release finalizado deverá ser "deletada", posteriormente ao merge;

9 - Qualquer bug encontrado na versão da branch release deverá ser corrigida nessa mesma branch;

10 - Quando corrigido o bug, deverá então, realizar o merge com a branch master e a branch develop.

11 - Caso seja reportado algum bug importante no ambiente de produção, deverá ser criado a branch de hotfix de ramificação da branch master;

12 - Todo hotfix finalizado deverá ser "deletada", posteriormente ao merge;


## Boas práticas aderidas pelo Gitflow

Qualquer padrão de nomenclatura é considerada como boas práticas para organizar o trabalho, porém se caso a equipe não estiver sincronizada no entendimento da organização do projeto e não estiver usando nenhuma ferramenta que molde o padrão de trabalho, existirá ponto fraco com grandes chances de não ser cumprido a idéia.

Com a existência momentânea das branchs feature, release e hotfix, o GitFlow propõe um padrão na nomenclatura para criação dessas branchs: feature-\*, release-\* e hotfix-\* (ou feature/\*, release/\* e hotfix/\*, ou derivados desse padrão), respectivamente.

Em projetos open source por exemplo, manter essa boa prática pode ser um desafio inviável, pelo fato de talvez uma mínima organização de manter duas branches fíxas e as demais provisórias já serem suficiente para a organização do projeto. Então, o que eu quero dizer é que a prática não é o ponto principal deste framework, mas sim o fluxo de branches. Mas particulamente, eu sou muito detalhista na questão de padrões de escrita, e adépto a esta boa prática.

Uma ótima ferramenta para se moldar Gitflow no projeto, é ... essa ferramenta faz com que seja resumido os comandos tradicionais do git em apenas poucos comandos, o que gera produtividade para equipe.

//Adicinar um parágrafo falando que existe um framework para simplificar alguns comandos sequenciais do Git em um único comando;

// reafazer os próximos dois parágrafos, esplicando com mais detalhes sobre os benefícios do framework Girflow;

Na utilização do framework do GitFlow, por sua vez resume tarefas e comandos em menos linhas de comandos fazendo uma sequencia de comando git ser disparada.

fazem tarefas por comandos do git para, tendendo à boa prática estabelecida do fluxo como a deleção das branchs de suportes assim que são realizadas as merges com as principais, e as próprias nomenclaturas citadas anteriormete.

### Tag de versões

Quando criamos a branch release, definimos também a versão em que o produto está preste a ser lançado, essa mesma versão de release, depois de validado pelo Product Owner se tornará a versão do software em produção.

// esplicar se existe alguma boa prática para definir o tag de versões;

### Conclusão

O GitFlow foi abraçado pela comunicadade de desenvolvimento, e de fato não é um mimo, mas sim um ótima sacada que traz uma enorme eficiência para diversos projetos grandes.

E assim como o Vincent Driessen deixou um esquema visual para ser rapidamente consultado o fluxo, estou deixando como produto desse post um [CheatSheet](http://almerindoabreu.netlify.app/git-flow-cheatsheet/) com uma proposta de clarear o entendimento através dos comandos do Git e do framework GitFLow, fazendo um paralelo entre os comandos e o esquema gráfico do Driessen.