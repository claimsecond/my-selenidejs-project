import 'chromedriver'
import { browser, have } from 'selenidejs';

await browser.open('https://google.com/ncr') 
await browser.element('[name=q]').type('selenidejs')
await browser.element('[name=q]').pressEnter()

await browser.all('#rso>div').should(have.sizeGreaterThanOrEqual(6))
await browser.all('#rso>div').first.should(have.text('selenidejs - npm'))

await browser.all('#rso>div').first.element('h3').click()
await browser.should(have.titleContaining('selenidejs - npm'))

await browser.quit()