import type { Browser } from "webdriverio";

type Direction = "left" | "right" | "up" | "down";

export async function swipe(driver: Browser, direction: Direction) {
  const { width, height } = await driver.getWindowSize();

  const centerX = Math.floor(width / 2);
  const centerY = Math.floor(height / 2);
  const offsetX = Math.floor(width * 0.35);
  const offsetY = Math.floor(height * 0.35);

  let startX = centerX;
  let startY = centerY;
  let endX = centerX;
  let endY = centerY;

  switch (direction) {
    case "left":
      startX = centerX + offsetX;
      endX = centerX - offsetX;
      break;

    case "right":
      startX = centerX - offsetX;
      endX = centerX + offsetX;
      break;

    case "up":
      startY = centerY + offsetY;
      endY = centerY - offsetY;
      break;

    case "down":
      startY = centerY - offsetY;
      endY = centerY + offsetY;
      break;
  }

  await driver
    .action("pointer", {
      parameters: { pointerType: "touch" },
    })
    .move({ x: startX, y: startY })
    .down()
    .pause(200)
    .move({ x: endX, y: endY, duration: 500 })
    .up()
    .perform();
}