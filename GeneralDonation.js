describe('Protractor Demo App', function() {
  var url ='https://ilb-sqa-portal.ci.olivetech.com/home';
  var Give=element(by.buttonText('GIVE'));
  var homepageGive=element(by.xpath('/html/body/app-root/app-giving/section/form/app-giving-amount/section/div[2]/div/div[1]/span[3]/button/span'));
  var continueGuest=element(by.buttonText('CONTINUE AS A GUEST'));
  //var Firstname=element(by.xpath('//*[@id="mat-input-30"]'));
  var Firstname=element(by.id('mat-input-3'));
  var Lirstname=element(by.id('mat-input-4'));
  var Email=element(by.id('mat-input-5'));
  var Address=element(by.id('mat-input-6'));
  var City=element(by.id('mat-input-7'));
  var State=element(by.id('mat-input-8'));
  var Zip=element(by.id('mat-input-9'));
  var Country=element(by.id('mat-input-10'));
  var Phone=element(by.id('mat-input-11'));
  var Next=element(by.xpath('/html/body/app-root/app-giving/section/form/div[3]/app-giving-billing/section/div/button[1]/span'));
  var Nameoncard=element(by.id('mat-input-12'));
  var Cardnumber=element(by.className("card-number-label"));
  var Month=element(by.className("exp-card"));
  var Cvc=element(by.className("stripeCvc"));
  var Wheremostneeded=element(by.className('mat-select-value'));
  var Bible=element(by.className("mat-option ng-star-inserted"));
  var Next=element(by.className("ib-btn"));
  //var Give=element(by.xpath('/html/body/app-root/app-giving/section/form/div[6]/app-giving-confirmation/section/div/button[1]/span'));
  var ConfirmGive=element(by.buttonText('GIVE'));










    //it('should have a title', function() {
      
  //browser.driver.sleep(5000);
      //expect(browser.getTitle()).toEqual('IllumiNations');
      
      //var AmountGive = element(by.xpath('/html/body/app-root/app-giving/section/form/app-giving-amount/section/div[2]/div/div[1]/span[3]/button/span'));

    //});
      beforeAll(function() {
        //browser.ignoreSynchronization = true;
        browser.get(url);
        //browser.waitForAngular(true);
        browser.driver.manage().window().maximize();
      });
        it('General Donation',function(){
          Give.click();
          //console.log('clicked');
          console.log('give button is clicked');
          homepageGive.click();
          continueGuest.click();
          Firstname.click().clear().sendKeys("new user");
          Lirstname.click().clear().sendKeys("account");
          Email.click().clear().sendKeys("firsttest@yopmail.com");
          Address.click().clear().sendKeys("Hyderabad");
          City.click().clear().sendKeys("Medak");
          State.click().clear().sendKeys("TG");
          Zip.click().clear().sendKeys("502110");
          Country.click().clear().sendKeys("US");
          Phone.click().clear().sendKeys("1234567");
          Next.click();
          Nameoncard.click().clear().sendKeys("shravani");
          //Cardnumber.click().clear().sendKeys("4111111111111111");
          Cardnumber.sendKeys("4111111111111111");
          browser.driver.sleep(5000);

         Month.sendKeys("1228");
         browser.driver.sleep(5000);

         //Cvc.sendKeys("345");
         //Cvc.click().sendKeys("123");
         browser.driver.actions().click(Cvc).sendKeys('112').perform();
         Wheremostneeded.click();
         Bible.click();
         Next.click();
         ConfirmGive.click();





      browser.driver.sleep(5000);
         
    });
  
  });

