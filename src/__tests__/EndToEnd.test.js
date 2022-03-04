import { getJestCucumberConfiguration } from "jest-cucumber/dist/src/configuration";
import puppeteer from "puppeteer";

describe("show/hide an event details", () => {
  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(50000);
    browser = await puppeteer.launch();
    page = await browser.newPage();

    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event");
  });

  test("An event element is collapsed by default", async () => {
    const eventDetails = await page.$(".event .details-button");
    expect(eventDetails).toBeNull();
  });

  test("User can expand an event to see its details", async () => {
    await page.click(".details-button");
    const eventDetails = await page.$(".event .extra-details");
    expect(eventDetails).toBeDefined();
  });

  test("User can collapse an event to hide its details", async () => {
    await page.click(".details-button");
    const eventDetails = await page.$(".event .extra-details");
    expect(eventDetails).toBeNull();
  });

  afterAll(() => {
    browser.close();
  });
});
