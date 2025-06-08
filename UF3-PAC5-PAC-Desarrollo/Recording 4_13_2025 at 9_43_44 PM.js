const puppeteer = require('puppeteer'); // v23.0.0 or later

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);

    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 1278,
            height: 758
        })
    }
    {
        const targetPage = page;
        await targetPage.goto('http://127.0.0.1:5501/UF3-PAC5-PAC-Desarrollo/piedraPapelTijera.html');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('p:nth-of-type(1) > input'),
            targetPage.locator('::-p-xpath(/html/body/p[1]/input)'),
            targetPage.locator(':scope >>> p:nth-of-type(1) > input')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 32.84375,
                y: 12.125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('p:nth-of-type(1) > input'),
            targetPage.locator('::-p-xpath(/html/body/p[1]/input)'),
            targetPage.locator(':scope >>> p:nth-of-type(1) > input')
        ])
            .setTimeout(timeout)
            .fill('e');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(¡JUGAR!)'),
            targetPage.locator('body > button'),
            targetPage.locator('::-p-xpath(/html/body/button)'),
            targetPage.locator(':scope >>> body > button'),
            targetPage.locator('::-p-text(¡JUGAR!)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 56,
                y: 8.125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('p:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(/html/body/p[2])'),
            targetPage.locator(':scope >>> p:nth-of-type(2)'),
            targetPage.locator('::-p-text(¿Cuántas partidas quieres jugar? 0)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 188,
                y: 5.125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('p:nth-of-type(2) > input'),
            targetPage.locator('::-p-xpath(/html/body/p[2]/input)'),
            targetPage.locator(':scope >>> p:nth-of-type(2) > input')
        ])
            .setTimeout(timeout)
            .fill('');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('w');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('w');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(¡JUGAR!)'),
            targetPage.locator('body > button'),
            targetPage.locator('::-p-xpath(/html/body/button)'),
            targetPage.locator(':scope >>> body > button'),
            targetPage.locator('::-p-text(¡JUGAR!)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 51,
                y: 7.125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('body'),
            targetPage.locator('::-p-xpath(/html/body)'),
            targetPage.locator(':scope >>> body')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 140,
                y: 56.5625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('p:nth-of-type(1) > input'),
            targetPage.locator('::-p-xpath(/html/body/p[1]/input)'),
            targetPage.locator(':scope >>> p:nth-of-type(1) > input')
        ])
            .setTimeout(timeout)
            .fill('juan');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Tab');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Tab');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('p:nth-of-type(2) > input'),
            targetPage.locator('::-p-xpath(/html/body/p[2]/input)'),
            targetPage.locator(':scope >>> p:nth-of-type(2) > input')
        ])
            .setTimeout(timeout)
            .fill('10');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(¡JUGAR!)'),
            targetPage.locator('body > button'),
            targetPage.locator('::-p-xpath(/html/body/button)'),
            targetPage.locator(':scope >>> body > button'),
            targetPage.locator('::-p-text(¡JUGAR!)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 50,
                y: 13.125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(¡YA!)'),
            targetPage.locator('h2 > button'),
            targetPage.locator('::-p-xpath(/html/body/h2/button)'),
            targetPage.locator(':scope >>> h2 > button'),
            targetPage.locator('::-p-text(¡YA!)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 29.046875,
                y: 8.78125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('img:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"jugador\\"]/img[2])'),
            targetPage.locator(':scope >>> img:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 48,
                y: 77.6875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(¡YA!)'),
            targetPage.locator('h2 > button'),
            targetPage.locator('::-p-xpath(/html/body/h2/button)'),
            targetPage.locator(':scope >>> h2 > button'),
            targetPage.locator('::-p-text(¡YA!)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 20.046875,
                y: 8.78125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('img:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"jugador\\"]/img[3])'),
            targetPage.locator(':scope >>> img:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 30,
                y: 65.6875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(¡YA!)'),
            targetPage.locator('h2 > button'),
            targetPage.locator('::-p-xpath(/html/body/h2/button)'),
            targetPage.locator(':scope >>> h2 > button'),
            targetPage.locator('::-p-text(¡YA!)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 15.046875,
                y: 7.78125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('img:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"jugador\\"]/img[2])'),
            targetPage.locator(':scope >>> img:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 63,
                y: 66.6875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(¡YA!)'),
            targetPage.locator('h2 > button'),
            targetPage.locator('::-p-xpath(/html/body/h2/button)'),
            targetPage.locator(':scope >>> h2 > button'),
            targetPage.locator('::-p-text(¡YA!)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 25.046875,
                y: 7.78125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#jugador > img:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"jugador\\"]/img[1])'),
            targetPage.locator(':scope >>> #jugador > img:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 84,
                y: 53.6875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(¡YA!)'),
            targetPage.locator('h2 > button'),
            targetPage.locator('::-p-xpath(/html/body/h2/button)'),
            targetPage.locator(':scope >>> h2 > button'),
            targetPage.locator('::-p-text(¡YA!)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 22.046875,
                y: 13.78125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('img:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"jugador\\"]/img[2])'),
            targetPage.locator(':scope >>> img:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 61,
                y: 57.6875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(¡YA!)'),
            targetPage.locator('h2 > button'),
            targetPage.locator('::-p-xpath(/html/body/h2/button)'),
            targetPage.locator(':scope >>> h2 > button'),
            targetPage.locator('::-p-text(¡YA!)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 24.046875,
                y: 5.78125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('img:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"jugador\\"]/img[3])'),
            targetPage.locator(':scope >>> img:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 45,
                y: 38.6875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(¡YA!)'),
            targetPage.locator('h2 > button'),
            targetPage.locator('::-p-xpath(/html/body/h2/button)'),
            targetPage.locator(':scope >>> h2 > button'),
            targetPage.locator('::-p-text(¡YA!)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 23.046875,
                y: 7.78125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('img:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"jugador\\"]/img[2])'),
            targetPage.locator(':scope >>> img:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 74,
                y: 71.6875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(¡YA!)'),
            targetPage.locator('h2 > button'),
            targetPage.locator('::-p-xpath(/html/body/h2/button)'),
            targetPage.locator(':scope >>> h2 > button'),
            targetPage.locator('::-p-text(¡YA!)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 14.046875,
                y: 9.78125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#jugador > img:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"jugador\\"]/img[1])'),
            targetPage.locator(':scope >>> #jugador > img:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 71,
                y: 65.6875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('img:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"jugador\\"]/img[2])'),
            targetPage.locator(':scope >>> img:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 53,
                y: 56.6875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(¡YA!)'),
            targetPage.locator('h2 > button'),
            targetPage.locator('::-p-xpath(/html/body/h2/button)'),
            targetPage.locator(':scope >>> h2 > button'),
            targetPage.locator('::-p-text(¡YA!)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 18.046875,
                y: 13.78125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('img:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"jugador\\"]/img[3])'),
            targetPage.locator(':scope >>> img:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 47,
                y: 79.6875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(¡YA!)'),
            targetPage.locator('h2 > button'),
            targetPage.locator('::-p-xpath(/html/body/h2/button)'),
            targetPage.locator(':scope >>> h2 > button'),
            targetPage.locator('::-p-text(¡YA!)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 12.046875,
                y: 13.78125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(¡YA!)'),
            targetPage.locator('h2 > button'),
            targetPage.locator('::-p-xpath(/html/body/h2/button)'),
            targetPage.locator(':scope >>> h2 > button'),
            targetPage.locator('::-p-text(¡YA!)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 25.046875,
                y: 12.78125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(RESET)'),
            targetPage.locator('div:nth-of-type(4) > button'),
            targetPage.locator('::-p-xpath(/html/body/div[4]/button)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) > button'),
            targetPage.locator('::-p-text(RESET)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 25,
                y: 3.4375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('p:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(/html/body/p[2])'),
            targetPage.locator(':scope >>> p:nth-of-type(2)'),
            targetPage.locator('::-p-text(¿Cuántas partidas quieres jugar? 10)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 204,
                y: 3.125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('p:nth-of-type(2) > input'),
            targetPage.locator('::-p-xpath(/html/body/p[2]/input)'),
            targetPage.locator(':scope >>> p:nth-of-type(2) > input')
        ])
            .setTimeout(timeout)
            .fill('5');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(¡JUGAR!)'),
            targetPage.locator('body > button'),
            targetPage.locator('::-p-xpath(/html/body/button)'),
            targetPage.locator(':scope >>> body > button'),
            targetPage.locator('::-p-text(¡JUGAR!)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 44,
                y: 4.125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(¡YA!)'),
            targetPage.locator('h2 > button'),
            targetPage.locator('::-p-xpath(/html/body/h2/button)'),
            targetPage.locator(':scope >>> h2 > button'),
            targetPage.locator('::-p-text(¡YA!)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 22.046875,
                y: 9.78125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('img:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"jugador\\"]/img[2])'),
            targetPage.locator(':scope >>> img:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 61,
                y: 77.6875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(¡YA!)'),
            targetPage.locator('h2 > button'),
            targetPage.locator('::-p-xpath(/html/body/h2/button)'),
            targetPage.locator(':scope >>> h2 > button'),
            targetPage.locator('::-p-text(¡YA!)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 18.046875,
                y: 6.78125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(¡YA!)'),
            targetPage.locator('h2 > button'),
            targetPage.locator('::-p-xpath(/html/body/h2/button)'),
            targetPage.locator(':scope >>> h2 > button'),
            targetPage.locator('::-p-text(¡YA!)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 15.046875,
                y: 11.78125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('img.seleccionado'),
            targetPage.locator('::-p-xpath(//*[@id=\\"jugador\\"]/img[2])'),
            targetPage.locator(':scope >>> img.seleccionado')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 93,
                y: 84.6875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(¡YA!)'),
            targetPage.locator('h2 > button'),
            targetPage.locator('::-p-xpath(/html/body/h2/button)'),
            targetPage.locator(':scope >>> h2 > button'),
            targetPage.locator('::-p-text(¡YA!)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 24.046875,
                y: 18.78125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(¡YA!)'),
            targetPage.locator('h2 > button'),
            targetPage.locator('::-p-xpath(/html/body/h2/button)'),
            targetPage.locator(':scope >>> h2 > button'),
            targetPage.locator('::-p-text(¡YA!)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 30.046875,
                y: 7.78125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#jugador > img:nth-of-type(1)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"jugador\\"]/img[1])'),
            targetPage.locator(':scope >>> #jugador > img:nth-of-type(1)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 60,
                y: 64.6875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(RESET)'),
            targetPage.locator('div:nth-of-type(4) > button'),
            targetPage.locator('::-p-xpath(/html/body/div[4]/button)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) > button'),
            targetPage.locator('::-p-text(RESET)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 39,
                y: 12.4375,
              },
            });
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
