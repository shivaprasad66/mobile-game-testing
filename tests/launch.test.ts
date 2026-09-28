import { remote } from "webdriverio";
import { swipe } from "./helpers/gesture";

const APP_PACKAGE = "com.tpcstld.twozerogame";
const APP_ACTIVITY = ".MainActivity";

async function waitForApp(driver: WebdriverIO.Browser) {
  await driver.waitUntil(
    async () => {
      const currentPackage = await driver.getCurrentPackage();
      return currentPackage === APP_PACKAGE;
    },
    {
      timeout: 10000,
      interval: 500,
      timeoutMsg: `App did not come to foreground. Current package: ${await driver.getCurrentPackage()}`,
    }
  );
}

async function main() {
  const driver = await remote({
    hostname: "127.0.0.1",
    port: 4723,
    path: "/",
    logLevel: "info",

    capabilities: {
      platformName: "Android",
      "appium:automationName": "UiAutomator2",
      "appium:deviceName": "I2404",
      "appium:udid": "10BF760C7N004B3",
      "appium:appPackage": APP_PACKAGE,
      "appium:appActivity": APP_ACTIVITY,
      "appium:noReset": true,
    },
  });

  try {
    // 1. Launch verification
    await waitForApp(driver);
    console.log("PASS: App launch");

    // 2. Four game gestures
    await swipe(driver, "left");
    console.log("PASS: Swipe left");

    await swipe(driver, "right");
    console.log("PASS: Swipe right");

    await swipe(driver, "up");
    console.log("PASS: Swipe up");

    await swipe(driver, "down");
    console.log("PASS: Swipe down");

    // 3. Native context
    const contexts = await driver.getContexts();
    console.log("Contexts:", contexts);

    // 4. Background / foreground
    await driver.background(3);
    console.log("PASS: Background");

    await driver.activateApp(APP_PACKAGE);
    await waitForApp(driver);
    console.log("PASS: Foreground");

    // 5. Terminate / restart
    await driver.terminateApp(APP_PACKAGE);
    console.log("PASS: App terminated");

    await driver.startActivity(APP_PACKAGE, APP_ACTIVITY);
    await waitForApp(driver);
    console.log("PASS: App restarted");

    // 6. Final package verification
    const finalPackage = await driver.getCurrentPackage();

    if (finalPackage !== APP_PACKAGE) {
      throw new Error(`Wrong package: ${finalPackage}`);
    }

    console.log("PASS: Package verified after restart");

    // 7. Screenshot evidence
    await driver.saveScreenshot("./test-results/mobile-game-final.png");
    console.log("PASS: Screenshot captured");
  } finally {
    await driver.deleteSession();
  }
}

main().catch(console.error);