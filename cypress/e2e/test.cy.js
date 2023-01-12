describe('Products', () => {
    it('Get all products', () => {
       cy.request('https://dummyjson.com/products')
       .then((response) => {
        expect(response).to.have.property('status', 200)
        expect(response.body).to.not.be.null
        })
     })
 })