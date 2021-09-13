# Frontend Mentor - Solução de Aplicativo de Calculadora

Esta é uma solução para a [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Os desafios do Frontend Mentor nos ajudam a melhorar nossas habilidades de codificação ao construir projetos realistas. 

## Índice

- [Frontend Mentor - Solução de Aplicativo de Calculadora](#frontend-mentor---solução-de-aplicativo-de-calculadora)
  - [Índice](#índice)
  - [Visão Geral](#visão-geral)
    - [**O desafio**](#o-desafio)
    - [**Captura de tela**](#captura-de-tela)
    - [**Links**](#links)
  - [Meu processo](#meu-processo)
    - [**Construído com**](#construído-com)
    - [**O que eu aprendi**](#o-que-eu-aprendi)
    - [**Desenvolvimento continuado**](#desenvolvimento-continuado)
    - [**Recursos úteis**](#recursos-úteis)
  - [Autor](#autor)

## Visão Geral

### **O desafio**

Os usuários devem ser capazes de:

- Ver o tamanho dos elementos ajustados com base no tamanho da tela de seus dispositivos
- Realizar operações matemáticas como adição, subtração, multiplicação e divisão
- Ajustar o tema de cores com base em suas preferências **Bônus**. Tenha sua preferência de tema inicial verificada usando 'prefers-color-scheme' e tenha todas as alterações adicionais salvas no navegador.

### **Captura de tela**

![Calculator - Web](./github/calculator.png)
<br><br>

![Home Page - Mobile](./github/calculator-mobile.png)

### **Links**

- URL da solução: [Calculator App](https://www.frontendmentor.io/solutions/calculator-app-using-html-css-and-constructor-function-in-javascript-lTo6hVv-y)
- Site URL: [Calculator App](https://app-calculator-marco.netlify.app)

## Meu processo

### **Construído com**

- HTML5
- CSS3
- Flexbox - CSS3
- Variáveis CSS
- JavaScript
- Função Construtora - JavaScript
- Mobile-first workflow

### **O que eu aprendi**

Neste desafio pude fixar muitos conhecimentos em CSS3 e JavaScript.<br>
Neste projeto pude ter uma primeira experiência com mudanças de temas em minha página, trabalhei com campos de seleção **input radio** e personalizei eles, neste processo pude expandir meus conhecimentos com as possibilidades que temos em CSS. Continuando sobre os temas, eles são alterados assim que o input tem uma mudança(**change**) em seu estado para **checked** e, assim classes são adicionadas no **HTML**.

Essa aplicação optei por utilizar **Funções Construtoras** no JavaScript, assim pude fixar muitos conhecimentos que venho aprendendo ultimamente. Ao construir uma aplicação de calculadora, pude ver o tamanho do desafio que tinha pela frente, e não foi diferente. Apliquei conhecimentos sobre a função [eval()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval), que fica responsável por realizar os cálculos na calculadora, facilitando muito o desenvolvimento da mesma. Utilizei para representar as separações de casas no formato (en-US) o método [toLocaleString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString).

Função **eval()** utilizada para realizar os cálculos:

```JavaScript
let count = eval(this.display.value);
```
Método **toLocaleString()** utilizado para as separações das casas:
```JavaScript
count = count.toLocaleString('en-US');
```

Para mais informações sobre a função **eval()** acesse a [documentação MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval).

### **Desenvolvimento continuado**

Para as próximas soluções, pretendo adicionar mais JavaScript que é o que venho aprendendo e desenvolvendo ultimamente. Assim como também explorar mais técnicas CSS. Posso dizer que este projeto foi um misto de desafio, dificuldade, cansaço mental e diversão, além da sensação de **CONSEGUI** no final.

### **Recursos úteis**

- [Personalização de Input](https://pt.stackoverflow.com/questions/470987/personalizar-input-radio) - Essa solução me ajudou a entender e trabalhar com personalização de input.
- [Como Desativar a cópia de texto](https://www.webtutorial.com.br/como-desativar-a-copia-de-texto-apenas-com-css/) - Esse tutorial me ajudou a remover a seleção de textos na página.
- [Forçando o teclado virtual do Smartphone a ocultar](https://www.ti-enxame.com/pt/javascript/html-mobile-forcando-o-teclado-virtual-ocultar/1066578799/) - Esse tópico me ajudou a ocultar o teclado do android e iphone, assim o usuário pode usar o meu teclado sem que o layout seja quebrado.
- [Identificar uma string com JavaScript](https://pt.stackoverflow.com/questions/3021/como-posso-checar-se-uma-string-cont%C3%A9m-outra-em-javascript) - Esta solução me ajudou a Identificar a string ( **x** ) para que eu pudesse substituir por outro valor.
- [Substituir uma string com JavaScript](https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176) - Esta solução me ajudou a substituir o ( **x** ) por ( * ) para que o método **eval()** funcionasse perfeitamente.

## Autor

- Frontend Mentor - [@300Marco](https://www.frontendmentor.io/profile/300Marco)
