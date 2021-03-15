import App from '../page-object-model/App'
import LoginPage from '../page-object-model/pages/FeedbackPage'
import Navbar from '../page-object-model/components/Navbar'
import FeedbackPage from '../page-object-model/pages/FeedbackPage'

describe('E2E - Feedback', () => {
	it('Should load feedback form', () => {
		App.openFeedbackPage();
		FeedbackPage.formIsVisible();
	})

	it('Should submit feedback form', () => {
		FeedbackPage.fillForm('Name', 'test@test.com', 'Subject', 'Message');
		FeedbackPage.submitForm();
		expect(browser).toHaveUrl(
			'http://zero.webappsecurity.com/sendFeedback.html'
		)
	})
})