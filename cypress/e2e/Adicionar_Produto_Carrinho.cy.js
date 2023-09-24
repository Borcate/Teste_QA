import ad_produtos_carrinho from '../support/Cenarios_Testes/ad_produtos'

context('Adicionar produtos no carrinho', () => {

  beforeEach(() => {
    cy.visit('https://magento2-demo.magebit.com/')
  });

  it('Deve selecionar produtos', () => {
    ad_produtos_carrinho.ad_produtos()
  });

  it('Selecionar produtos - Página de produtos', () => {
    ad_produtos_carrinho.pagina_de_produtos()
  });

  it.only('Selecionar produtos - Página de produtos', () => {
    ad_produtos_carrinho.busca()
  });

})