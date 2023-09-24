import Usuarios from '../support/Cenarios_Testes/cadastro_usuario'

describe('Cadastro de usuário', () => {
  beforeEach('Acessar sistema', () => {
    cy.visit('https://magento2-demo.magebit.com/')
  })
it.only('Cadastrar novo usuário com sucesso', () => {
  Usuarios.novo_usuario()
});

it('Cenário negativo', () => {
  //Não preencher campos obrigatórios e salvar, deve exibir mensagem de erro
  Usuarios.campos_obrigatorios()
});

})