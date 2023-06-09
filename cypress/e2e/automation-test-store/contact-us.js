/// <reference types = "Cypress" />


/* describe의 두번째 인자는 callback  */

describe("Test Store에서 테스팅 자동화",()=> {
    /* 개별 테스트는 it */
    it("연락처를 테스트 코드로 제출",()=>{
        //cypress code
        cy.visit('https://automationteststore.com/');
        cy.get("a[href$='contact']").click();
        // cy.get('.info_links_footer > :nth-child(5) > a').click();
        cy.get('#ContactUsFrm_first_name').type('Abel');
        cy.get('#ContactUsFrm_email').type('dn10003@gmail.com');
        cy.get('#ContactUsFrm_email').should('have.attr','name','email');
        cy.get('#ContactUsFrm_enquiry').type('대량 주문 시 추가 할인을 제공합니까?');
        cy.get("button[title='Submit']").click();
        cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!');
        cy.log('테스트가 완료되었습니다.')

    });
});