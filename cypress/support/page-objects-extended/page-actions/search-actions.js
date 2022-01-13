import { firstListItem, searchInputId } from "../../page-objects/search";


class Search {
    searchAndClickFirstItem(keyword){
        cy.get(searchInputId)
            .clear()
            .type(keyword)
            .type('{enter}')
        cy.get(firstListItem).click()
    }
}

export const onSearch = new Search();