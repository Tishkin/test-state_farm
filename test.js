const wdio = require("webdriverio");

const opts = {
    path: '/wd/hub',
    port: 4723,
    capabilities: {
        platformName: "Android",
        platformVersion: "11",
        deviceName: "Android Emulator",
        udid: 'emulator-5554',
        appPackage: "com.statefarm.pocketagent",
        appActivity: "com.statefarm.pocketagent.ui.login.activity.SplashScreenActivity",
        automationName: "UiAutomator2"
    }
};

async function main() {
    const client = await wdio.remote(opts)


    await client.pause(3000);
    await confirmation(client)

    const yes = await client.$('//android.widget.Button[@resource-id="com.statefarm.pocketagent:id/yes_btn"]')
    await yes.click()

    await client.pause(2000);
    await sendAuthForm(client)

    await client.deleteSession();
}

const sendAuthForm = async (client) => {
    const dismiss = await client.$('//android.widget.TextView[@resource-id="com.statefarm.pocketagent.login:id/alert_dismiss"]')
    const userID = await client.$('//android.widget.EditText[@resource-id="com.statefarm.pocketagent.login:id/user_id_input"]')
    const password = await client.$('//android.widget.EditText[@resource-id="com.statefarm.pocketagent.login:id/user_password_input"]')
    const logIn = await client.$('//android.widget.Button[@resource-id="com.statefarm.pocketagent.login:id/login_button"]')

    await dismiss.click()
    await userID.addValue('user123')
    await password.addValue('user123')
    await logIn.click()
    await client.pause(10000);
}

const confirmation = async (client) => {
    const accept = await client.$('//android.widget.Button[@resource-id="com.statefarm.pocketagent:id/accept_btn"]')
    await accept.click();
    await accept.click();
}

main();