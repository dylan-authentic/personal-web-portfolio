---
title: 'Building a data entry automation script'
date: '2021-01-18'
tag: Engineering
---

If you’ve ever written an automated test suite using software like Selenium, then you’re more than familiar with the power of automating web-based tasks in the browser. But, if you’re unfamiliar with browser automation, a simple explanation is the ability to control interactions with a web browser and web page directly with code. In other words, any action you take when regularly using a website or browsing the internet can also be done using code. This can be incredibly useful for automating repetitive, time-consuming tasks that require dedicated attention to complete — such as entering data into an online form.

**The task**
In this case, the client I’ve partnered with to deliver technology services performs a data collection and entry task a few times a year. For this task, data is collected from a number of participants and organized via an excel spreadsheet. Once the excel sheet is properly prepared, the data must be entered into an online form in order to complete the task. Because the number of records to be entered can be anywhere in the thousands, the client typically utilizes a third-party data entry company to perform the routine task of entering and submitting the records. Since this method can still be rather costly and inefficient, I proposed a new method of performing the task utilizing the very useful browser automation mentioned before.

**My Approach**
As I first began to think through a new method, I considered two things:
Any software-based method of entering data must be 100% accurate
I needed to be fast in completing and delivering the new method as anything that took longer than usual would be rather pointless to utilize
I already had some experience with writing software programs that accurately read excel files, so I knew the only other challenge was finding a way to get the data into the web form. After searching continuously, I stumbled upon Puppeteer — an open source software library maintained by Google Chrome’s DevTools engineering team. With that, I knew I had everything I needed to build the program.

**Development & Testing**
After browsing the Puppeteer documentation (no pun intended), I began to write the software script to complete the task. The concept of the script was pretty simple and straightforward — access the form elements from the webpage, read in data from the excel file, set the values of the form to the corresponding data in the excel file, submit the form, and repeat. But, as always, nothing is ever done in the first try. I quickly noticed a group of issues and bugs that were causing errors. The form values weren’t inputting correctly, the buttons on the page were sometimes responding in unintended ways, and the webpage would submit and reload before all values could be accurately set. This definitely caused some pressure on my end as I needed to maintain my priorities mentioned above. From a development standpoint, I knew my issues were primarily being caused by the asynchronous nature of Javascript programming + the fairly slow response time of the client’s webpage, so I pretty much went into rapid development and testing until I was able to get a working solution. Many frustrated hours later, I finally saw the light at the end of the tunnel when I saw my testing efforts completing the task in the way I expected.

**Outcome**
The main reason for writing the script in the first place was to save my client time and money both in the short-term and long-term. Instead of utilizing a third-party data entry company, the client can now use the software script to complete the task when needed. After running and reviewing metrics for this specific data entry task, I was able to create a 51% cost savings for my client and bring the time to complete the task from 48 hours down to 4 hours. This program was not only enjoyable to build, but, as you can see, was also useful and effective from a business standpoint as well.