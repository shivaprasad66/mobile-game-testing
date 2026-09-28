import { expect } from "chai";
import { browser } from "@wdio/globals";
import { swipe } from "./helpers/gesture";

const APP_PACKAGE = "com.tpcstld.twozerogame";

async function waitForApp() {
  await browser.waitUntil(
    async () => {
      return (await browser.getCurrentPackage()) === APP_PACKAGE;
    },
    {
      timeout: 10000,
      interval: 500,
      timeoutMsg: "2048 did not come to foreground",
    }
  );
}

describe("2048 Mobile Game - E2E", () => {
  it("should launch the correct application", async () => {
    await waitForApp();

    const currentPackage = await browser.getCurrentPackage();

    expect(currentPackage).to.equal(APP_PACKAGE);

    console.log("PASS: App launch + package verification");
  });

  it("should support all four gameplay swipe gestures", async () => {
    await swipe(browser, "left");
    await swipe(browser, "right");
    await swipe(browser, "up");
    await swipe(browser, "down");

    console.log("PASS: Left / Right / Up / Down gestures");
  });

  it("should remain stable after background and foreground", async () => {
    await browser.background(3);

    await browser.activateApp(APP_PACKAGE);
    await waitForApp();

    expect(await browser.getCurrentPackage()).to.equal(APP_PACKAGE);

    console.log("PASS: Background / Foreground");
  });

  it("should restart correctly after termination", async () => {
    await browser.terminateApp(APP_PACKAGE);

    await browser.activateApp(APP_PACKAGE);
    await waitForApp();

    expect(await browser.getCurrentPackage()).to.equal(APP_PACKAGE);

    console.log("PASS: Terminate / Restart");
  });
});