---
date: 2020-05-10 19:00:00
title: Testando e Debugando com Jest no VS Code
description: Se em pleno desenvolvimento a utilização do debug é importante para analisar com está se comportanto o seu código, por que não podemos utilizar o debug para analisar as falhas encontradas em testes?!
background: "#7AAB13"
category: Artigo
keyWords: Teste de Software, VS Code
image: "/assets/img/Página Principal.png"
---

Opa.

Quem nunca se deparou com uma mensagem de erro não muito clara no console, ou um retorno inesperado?! Ou até mesmo, usa uma função na qual não conhece como funciona por dentro? Pois bem, esse meu primeiro post vou trazer uma rápida abordagem para acrescentar ou relembrar sobre como configurar o debugg do Visual Studio Code com o Jest (me incluo nesse público dos que vão utilizar para pescar alguma coisa, já que vou utilizar muitos desses posts para copiar e colar rs).

Sem mais delongas, e partiu para o que interessa!

## I - Ferramentas utilizadas

Além do VS Code e o nodeJS já instalados, deverá ter também o [Jest](https://jestjs.io/), que é o framework de teste mais utilizado na comunidade de nodeJS, além de ser simples, funcional, e na minha opnião atende muito bem o seu propósito.

Não vou entrar em detalhes sobre o Jest, mas se alguém chegou aqui sem conhece-lo, [aqui](https://jestjs.io/docs/en/getting-started) está o link para instalação e sua documentação.

## II - Configurações

No Visual Studio Code existe no menu lateral esquerdo alguns icones de aceso de funcionalidade que são bastante utilizada no dia dia de um desenvolvedor. E um deles é o debug.

Ao clicar no debug (ou através do atalho _Ctrl+Shift+D_), podemos observar na parte superior da área, que existem alguns botões, menu para iniciar um debug. Os que vamos utilizar são:

1 - Start Debugging - Para iniciar o debug.
2 - Lista suspensa com os nomes das configurações de debugs já criados.
3 - Open launch.json - Esse é o arquivo que vamos configurar para rodar o debbug quando for fazer algum teste com o Jest.
4 - Debuggin Console - Essa funçaõ vai mostrar o console do Visual Code já na aba de debug.

[Foto]

Em Open launch.json, vamos abrir o arquivo de configurações do debug do Visual Code.

Basicamente, podemos copiar e colar a seguinte configuração:

Agora, detalhando um pouco sobre os atributos utlizado nesse JSON, vamos começar por:

1 -

## III - Mão na massa

Para debugar uma função é bastante simples, basta chamar a função na qual deseja testar, e criar um breakpoint onde seja que o debug pare a execução, daí em diante é só passar o mouse por cima das variáveis, das funções e operar o debug através da ferramenta de controle.

Bom, acho que por equanto é isso e torço para que eu possa ter ajudado alguém nem que seja somente eu rs.
