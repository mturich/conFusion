import { browser } from "protractor";
import { baseURL } from "src/app/shared/baseurl";
import { AppPage } from "./app.po";

describe("workspace-project App", () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it("should display message saying Ristorante Con Fusion", () => {
    page.navigateTo("/");
    expect(page.getParagraphText("app-root h1")).toEqual(
      "Ristorante Con Fusion"
    );
  });
  it("should navigate to about us by clicking on the link", () => {
    page.navigateTo("/");
    let navlink = page.getAllElements("a").get(1);
    navlink.click();
    expect(page.getParagraphText("h3")).toBe("About Us");
  });

  it("insert dish comment", () => {
    
        page.navigateTo("/");
    let navlink = page.getAllElements("a").get(2);
    navlink.click();

    let dishlink = page.getAllElements('mat-grid-tile').get(0);
    dishlink.click();
  
   
    // page.navigateTo("/dishdetail/0")

 

    const newAuthor = page.getElement('input[type=text]');
    newAuthor.sendKeys("Test Author");

    const newComment = page.getElement('textarea');
    newComment.sendKeys("test comment");

    let btn = page.getAllElements('button[type=submit]');
    btn.click();

    browser.pause();

  })
   
});
