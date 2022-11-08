class SearchPrueba {
    //Este archivo Prueba.spec.js no aplica en este ejemplo de proyecto,
    // es solo para mostrar que en esta ubicacion se pueden crear las
    // funciones y se llaman en el Prueba.spec.js
    SearchPrueba(searchProductName) {
    cy.get("#top-nav > .page-item-5 > a > span").click({ force: true });
    cy.get("[id=’wp-block-search__input-2']")
    .click({ force: true })
    .type(searchProductName);
    cy.get("[id=’search-icon’]").click({ force: true });
    }
    verifyProduct(searchProductName) {
    cy.get("[id=’main’]").contains(searchProductName);
    }
    }
    const searchProduct = new SearchPrueba();
    export default searchProduct;
