<p align="center">
  <img align="center" height="150" width="150" src="https://github.com/user-attachments/assets/063a4b33-0d6d-43ad-8b91-36435072034b" alt="logo">
</p>


<h1 align="center"> Go Market</h1>


<a id="Sumário"></a>


<p align="center">
  <b> Front-end  </b></br>
  <sub>Este projeto simula um sistema de compras, permitindo que o usuário se cadastre, faça login, visualize produtos, adicione ao carrinho, remova itens e finalize pedidos.<sub>
</p>

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)


<br/>

## Requisitos do Sistema

- **Cadastro de Usuário**: O usuário pode se cadastrar com Nome completo, Login e Senha.
- **Login de Usuário**: O usuário faz login utilizando o Login e a Senha cadastrados.
- **Visualização de Produtos**: O usuário pode visualizar uma lista de produtos (dados fictícios).
- **Carrinho de Compras**:
  - O usuário pode adicionar um produto ao carrinho de compras.
  - O carrinho é atualizado com a adição de cada produto.
  - O usuário pode visualizar os produtos no carrinho.
  - O usuário pode remover itens do carrinho.
- **Finalização de Pedido**: O usuário pode finalizar o pedido. A finalização é simulada sem a escolha de forma de pagamento (será simulado como "pagar no caixa").
  
## Requisitos de Projeto

- **Estrutura do Usuário**:
  - O usuário possui: Nome completo, CPF (identificador único), Login e Senha.
  
- **Estrutura do Produto**:
  - O produto possui: Nome, Preço atual, Preço em promoção, Tipo, Descrição e Data de validade.

- **Estrutura da Compra**:
  - A compra possui: Nome do produto, Preço e Data da compra.
  
- **Organização e Boas Práticas**:
  - O código deve seguir boas práticas de programação e de organização, incluindo a estruturação de classes e nomenclaturas claras.
  
- **Banco de Dados**:
  - O sistema pode não estar conectado ao servidor, mas os dados (usuários, produtos e compras) são armazenados de maneira local ou simulada.
  
## Instalações

Este projeto utiliza o **React Native** com a biblioteca **Expo**. Para rodar o projeto, execute os seguintes comandos para instalar as dependências necessárias:

```bash
# Instalar bibliotecas de navegação
npm install @react-navigation/native @react-navigation/bottom-tabs react-native-screens react-native-safe-area-context react-navigation-stack

# Instalar expo-linear-gradient
npx expo install expo-linear-gradient

# Instalar dependências do React Native e navegação
npm install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons

# Instalar navegação de pilha
npm install @react-navigation/stack 

# Instalar a navegação base
npm install @react-navigation/native

