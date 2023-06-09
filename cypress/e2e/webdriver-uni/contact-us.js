/// <reference types = "Cypress" />


/* describe의 두번째 인자는 callback  */

describe("WebdriverUniversity.com에서 테스트 코드 제출",()=> {
    /* 개별 테스트는 it */
    it.only("연락처를 테스트 코드로 제출",()=>{
        //cypress code
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
        /* UTF-8 테스트 */
        cy.document().should('have.property','charset').and('eq','UTF-8');
        // cy.get('#contact-us').click({force:true});
        cy.get('[name="first_name"]').type("Kim");
        cy.get('[name="last_name"]').type("Abel");
        cy.get('[name="email"]').type("dn10003@gmail.com");
        cy.get('textarea.feedback-input').type("안녕하세요 필드 전송 테스트입니다");
        cy.get('[type="submit"]').click();
        /* 메시지 포함 여부 */
        cy.get('h1').should('have.text','Thank You for your Message!');
    });
    it("연락처를 테스트 코드로 비정상적인 제출",()=>{
        //cypress code
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
        // cy.get('#contact-us').click({force:true});
        cy.get('[name="first_name"]').type("Kim");
        cy.get('[name="last_name"]').type("Abel");
        cy.get('textarea.feedback-input').type("안녕하세요 필드 전송 테스트입니다");
        cy.get('[type="submit"]').click()
        cy.get('body').contains('Error: all fields are required');
    });

});

describe('', () => {
    it('', () => {
        
    });
})