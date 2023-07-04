const{Builder, By, Key} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

const service = () =>
chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build())

async function run(){
    let navigation = await new Builder().forBrowser('chrome').build();
    await navigation.get('https://api.new.mentorama.com.br/storage/media-files/QA1/M1/pratica_1.html');


    const searchBar = await navigation.findElement(By.xpath('//*[@id="start-screen"]/div/form/input'));
    await searchBar.sendKeys("(79) 92537-3814");
    await searchBar.sendKeys(key.ENTER);
     
   
}
run();