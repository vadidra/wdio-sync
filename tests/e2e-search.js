import App from '../page-object-model/App';
import Navbar from '../page-object-model/components/Navbar'; 


describe('E2E Tests - Search', () => {
	it('Should load homepage', () => {
		App.openHomePage();
	})

	it('Should submit searchbox', () => {
		Navbar.search('bank');
		const resultsTitle = $('h2')
		resultsTitle.waitForExist()
		expect(resultsTitle).toHaveText('Search Results:')
	})
})