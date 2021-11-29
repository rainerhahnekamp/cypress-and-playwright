import { chromium } from "playwright";

export interface LoginResponse {
  localStorage: { [key: string]: string };
}

export interface LoginParameters {
  url: string;
  username: string;
  password: string;
  headless: boolean;
}

export const login = async ({
  url,
  username,
  password,
  headless,
}: LoginParameters): Promise<LoginResponse> => {
  const browser = await chromium.launch({ headless });
  const page = await browser.newPage();

  await page.goto(url);
  await page.click("text=Sign In");
  await page.type("#logonIdentifier", username);
  await page.type("#password", password);
  await page.click("button#next");
  await page.waitForSelector("text=Welcome");

  return {
    localStorage: await page.evaluate(() => {
      const returner: { [key: string]: string } = {};
      for (let i = 0; i < window.localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key) {
          returner[key] = localStorage.getItem(key) || "";
        }
      }

      return returner;
    }),
  };
};
