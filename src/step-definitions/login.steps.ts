import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../world/CustomWorld';
import { LoginPage } from '../pages/LoginPage';

export class LoginSteps {
  private loginPage: LoginPage;

  constructor(private world: CustomWorld) {
    this.loginPage = this.world.pageFactory.getPage(LoginPage);
  }

  registerSteps() {
    Given('I navigate to the login page', async () => {
      await this.loginPage.navigate();
    });

    When('I login with {string} and {string}', async (username: string, password: string) => {
      await this.loginPage.login(username, password);
    });
  }
}