const puppeteer = require("puppeteer");

const screenshot = async (image_title, url) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url);
    await page.screenshot({
      path: `project_images/${image_title}.png`,
    });

    await browser.close();
  } catch (error) {
    console.log("Error in scrapping website: ", error);
  }
};

export default screenshot;
