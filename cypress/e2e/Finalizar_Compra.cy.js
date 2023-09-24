import Finalizar_Compra from "../support/Cenarios_Testes/Finalizar_Compra";

describe('Finalizar compras', () => {
    beforeEach('Acessar sistema', () => {
      cy.visit('https://magento2-demo.magebit.com/')
    })
  it('Finalizar compra com sucesso', () => {
    //cadastrar usuário 
    //selecioanr produtos 
    //finalizar compra
    Finalizar_Compra.Finalizacao_de_Compra()
  });
  

  
  })