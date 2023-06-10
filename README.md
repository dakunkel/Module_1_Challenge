# **Kickstarter** 

## **Kickstarter's Overview and Origin**

Kickstarter was founded on April 28th, 2009, by Charles Adler, Perry Chen, and Yancey Strickler in New York City.  In simplest terms, Kickstarter is a crowdfunding platform.  Their vision was to help give creative artists and thinkers a platform to fund their projects by connecting them with community members interested in defining culture.  The company quickly put their money where their mouth was by reincorporating as a Public Benefit Corporation. This allows Kickstarter to seek the dual goal of boosting societal and shareholder gains. 

The company has undergone seed funding and currently sits in Series D after raising approximately $10 million USD. [(Crunchbase)](https://www.crunchbase.com/organization/kickstarter) Kickstarter currently employs 264 team members and brings in an annual revenue of $61.1 million USD. [(Growjo)](https://growjo.com/company/Indiegogo) Since its inception, Kickstarter has funded over 240,000 projects with ~$7.4 billion USD in total funds raised. [(Kickstarter, Stats)](https://www.kickstarter.com/help/stats?ref=hello)

---

## **Kickstarter's Business Activities:**

### Kickstarter's Goals
Kickstarter's goal is twofold:

1. Give creators, artists, musicians, thought leaders, and entrepreneurs the opportunity to fund their project in a safe and trusted platform

2. Give individuals interested in benefiting society and the arts the opportunity to invest in companies in early stages in exchange for future products, rewards, or good will -- but not equity

With most projects, when an investor funds the project, their money comes with decision and input power.  Kickstarter is trying to build a community marketplace, or a network of family and friends, that support each other's business endeavors without active angel investors or venture capital. By doing so, Kickstarter is aiming to solve a painful problem most start-ups deal with, the active investor.  Kickstarter, by design, removes the active investor from projects, leaving all control in the creator's hands: 

>### _"Creators always control how the work comes together — no 100-page grant applications, no donors demanding you modify your message, no last-minute edits from investors..."_ 
>
>[(Kickstarter.com, About)](www.kickstarter.com/about?ref=global-footer)

### Kickstarter's Customer
Kickstarter has to answer the question is it the chicken or the egg? By nature, Kickstarter has two consumers due to the fact it is a project marketplace:
1. Creators and entrepreneurs are able to post their projects in hopes of securing funding.  To give itself a competitive advantage, Kickstarter must maintain low fees, 5% of project funding, compared to competitors in hopes of attracting exciting projects to the platform. 

2. On the flip side, Kickstarter has to attract crowdfunders to seed projects and ensure the creators and entrepreneurs are able to secure funding.  In order to do this, Kickstarter has to continually invest in user-experience, payment processing ease, and machine learning to recommend exciting projects to potential crowdfunders.  

### Kickstarter's Market Opportunity and Competitive Edge

There is a healthy market for crowdfunding, which is expected to surpass $26 billion USD by the year 2027 (IMARC Group, an alternative investment analysis company). The peer-to-peer lending market is continuing to grow 11.6% annually by 2028. [(IMARC Group)](https://www.imarcgroup.com/crowdfunding-market)  

One key differentiator for Kickstarter is that the platform focuses mainly on crowdfunding via rewards, products, non-monetary gains, compared to other equity crowdfunding platforms.  Kickstarter faces fierce competition with a mix of competitors large and small: GoFundMe, Indiegogo, Crowdfunder, Fundrise, and CircleUp.  With large competition, Kickstarter outperforms with global reach, risk-reduction algorithms, and strong brand reputation leading to project generation.  Kickstarter gives its creators resources to easily list projects and transact through partnerships with Stripe, offering promotional tools through marketing integrations with social platforms, and physical goods support via shipping / fulfillment. [(Gitnux Blog)](https://blog.gitnux.com/companies/kickstarter/) By focusing on creativity and innovation, Kickstarter wins in the crowdfunding space. Even though larger companies like GoFundMe bring in ~$114 million USD annually, Kickstarter is growing annually. [(Growjo)](https://growjo.com/company/Indiegogo)

### Kickstarter's Technology

Kickstarter employs many technologies to streamline workflow, including: jQuery, MySQL, NGINX, Zencoder, Rails, Amazon S3, Amazon RDS, Google Analytics, Stripe, Twilio SendGrid, Elasticsearch, Dyn, Embedly, Chartbeat, GitHub, StatusPage.io, Crashlytics, StatsD, Trello, G Suite, and many more. [(Stackshare)](https://stackshare.io/kickstarter/kickstarter)

Kickstarter prides itself in utilizing many open-source software plug-ins and code to enhance its tech stack. Kickstarter invests in open-source projects that can benefit its creators and backers.  For example, Kickstarter invested in Babel, which enables ECMAScript 2015+ code to be backwards compatible with JavaScript in all environments.  This allows for Kickstarter to be accessible all over the world by anyone who wants to either post a project or back a project. On top of that Kickstarter lists all of the open-source code it utilizes: Webpack, Advent of Code, Rails Girls Summer of Code, Code Nation, Code Cooperative, helping boost community involvement and accomplish its society improvement goal. [(Kickstarter, Open-source Blog)](https://kickstarter.engineering/supporting-open-source-our-donations-for-2018-d69a6114bf89)  Playing into the community nature of the company, and to keep costs low, Kickstarter opened up its code and hosts conferences (Functional Swift Conference) every year to help bring developers together.  By doing this, Kickstarter is able to build and maintain iOS and Android apps easier with less resources. [(Kickstarter, Open-source Blog: Apps)](https://kickstarter.engineering/open-sourcing-our-android-and-ios-apps-6891be909fcd)  Additionally, in order to maintain scalable, lightweight, and low-cost server computing via AWS Lambda to maintain a serverless infrastructure.  When a problem arises, Slack webhook would assign issues to the appropriate channel.  [(Kickstarter, Functional Programming Blog)](https://kickstarter.engineering/leveraging-functional-programming-aws-lambda-to-drive-chatops-4b269558d3fb#.s56cys71i)  In order to maintain a lightweight environment, Kickstarter engineers utilize the Lambda configuration setup to break up code, test, and improve.  Example Kickstarter code that helps format incoming data to allow mapping to Slack environments:

``` 
module.exports = (event) => {
  return [event]
  .filter(slowLogMessageFilter)
  .flatMap(mapEventToWebHooks)
  .map( (event) => {
    return { 
      hostname : 'hooks.slack.com',
      path : event.webhook,
      method : ‘POST’,
      body : subjectParsers[event.subject](event)
    };
  });
};
```
[(Kickstarter, Functional Programming Blog)](https://kickstarter.engineering/leveraging-functional-programming-aws-lambda-to-drive-chatops-4b269558d3fb#.s56cys71i)

---

## **The Crowdfunding Landscape:**

Kickstarter sits within the alternative investing domain within FinTech, specifically in the crowdfunding category.  The peer-to-peer crowdfunding market is currently valued at ~$15 billion USD as of 2022.  The overall crowdfunding market is expected to top $300 billion by 2030. [(Fundera)](https://www.fundera.com/resources/crowdfunding-statistics) With strong tailwinds, the growth of this sector will continue through 2028.  Celebrity and social media influencer endorsements and helping drive the expansive reach and popularity of crowdfunded projects.  COVID-19 aided in the popularity of crowdfunding as well to help those in need and fund new projects when normal paths for capital were not available.  Title III of the JOBS Act (2021) helped put crowdfunding on the mainstage in the US by letting retail and nonaccredited investors participate in opportunities.  [(Forbes)](https://www.forbes.com/sites/forbesagencycouncil/2021/12/20/the-meteoric-rise-of-equity-crowdfunding/?sh=684adf224d41) Global expansion and regulation has been one of the major trends of the past 5-10 years, assisting connect communities and international investment opportunity. [(IMARC Group)](https://www.imarcgroup.com/crowdfunding-market)  

![Peer to Peer Lending Market Size 2021 to 2023](https://github.com/dakunkel/Module_1_Challenge/blob/9b474e007c98823f08142dd98889f946bf8cfd6e/Images/Peer-to-Peer-(P2P)-Lending-Market-Size-2021-to-2030.jpg)

[(Mordor Intellignece)](https://www.mordorintelligence.com/industry-reports/crowdfunding-market)

New regulation in China and the EU pose risk to both firms and investors, leaving individuals on the hook in the event crowdfunded activities are found to be associated with unlawful acts (Hong Kong Securities and Futures Ordinance and the Money Lenders Ordinance).  This type of regulation raises the question of who will regulate international investment and who will have jurisdiction on crowdfunded projects. [(The Diplomat)](https://thediplomat.com/2023/01/hong-kongs-crowdfunding-regulations-could-have-global-ramifications/)

Kickstarter currently operates within Australia, Austria, Belgium, Canada, Denmark, France, Germany, Greece, Hong Kong, Ireland, Italy, Japan, Luxembourg, Mexico, the Netherlands, New Zealand, Norway, Poland, Singapore, Slovenia, Spain, Sweden, Switzerland, the United Kingdom, and the United States.  There is room to continually expand internationally as the crowdfunding market grows.  At the same time, Kickstarter must be cognizant of potential regulation to protect itself and its consumers. 

![Crowdfunding Market Growth Rate](https://github.com/dakunkel/Module_1_Challenge/blob/30e59792d2f8a201aba098f953dd65f620822232/Images/1667893780186_crowdfunding-market_Crowdfunding_Market_-_Growth_Rate_by_Region.png)

[(Mordor Intellignece)](https://www.mordorintelligence.com/industry-reports/crowdfunding-market)

Major companies in the crowdfunding domain to watch:

* GoFundMe
* Indiegogo
* Patreon
* WeFunder
* Classy.org
* Seek & Spark
* SeedInvest
* Crowdrise

![Crowdfunding Marketplace](https://github.com/dakunkel/Module_1_Challenge/blob/9b474e007c98823f08142dd98889f946bf8cfd6e/Images/crowdfunding-market_1667906889460_Crowdfunding_Market_-_Market_Concentration.webp)

[(Mordor Intellignece)](https://www.mordorintelligence.com/industry-reports/crowdfunding-market)

## **Kickstarter's Results**

Kickstarter is widely considered one of the most successful crowdfunding platforms available.  With over 320,000 projects completed, it ranks #1 out of all platforms. [(The Crowd Data Center, Fundera)](https://www.thecrowdfundingcenter.com/data/projects)  Kickstarter has funded over $7.3 billion USD worth of projects enabling the advancement of culture, arts, start-ups, and society.  Kickstarter has solidified itself as a place to discover and get involved in the next stage of culture in society.  The impact of Kickstarter accomplishes the dual goals with cultural advancement and $61.1 million USD in annual revenue.  

The core metrics that companies within the crowdfunding domain use to measure success are number of completed projects, project funding rate, and average funding per project.  Kickstarter leads this category with number of fully funded projects topping 240,000.  Compared to Kickstarter's two main U.S. competitors, GoFundMe and Indiegogo, Kickstarter may fall short in amount of funds raised per project but exceeds in success rate and beats crowdfunding marketplace averages (22.4% success rate and $28,656 average funds raised respectively). [(Fundera)](https://www.fundera.com/resources/crowdfunding-statistics) Indiegogo leads the charge in top funding per project at $41,634 (compared to Kickstarter's $30,625).  Kickstarter boats a 40.62% success rate for fully funding a project, making Kickstarter a leader in the space, partly due to strong technology, advertising support, and an expansive marketplace.  [(Statista)](https://www.statista.com/statistics/235405/kickstarter-project-funding-success-rate/) This performance is likely due to the fact that Kickstarter advocates for and utilizes and all-or-nothing strategy -- the project must reach its goal or funds are returned to potential backers.  GoFundMe generates in around $114 million USD in revenue per year compared to Indiegogo's $24.5 million USD and Kickstarter's $61.1 million USD. [(Growjo)](https://growjo.com/company/Indiegogo)

### Kickstarter's Project Success Rate by Category

![Crowdfunding Marketplace](https://github.com/dakunkel/Module_1_Challenge/blob/eb6d46ba626e23f99b3102b3a4b3bdc93dfa27b7/Images/1_eW003rfPwZn0FuJJydKukg.webp)

[(Medium)](https://medium.com/@daniel.kupka/we-analyzed-331-000-kickstarter-projects-here-s-what-we-learned-about-crowdfunding-success-63b341b025ac)

## **Recommendations for Kickstarter's Continued Success**

As a FinTech consultant, I would recommend Kickstarter continue to prioritize emerging markets in Europe to capitalize on integrating additional communities to the marketplace. In terms of technology, in an effort to reduce fees compared to competitors and enable global project funding, investment in blockchain solutions with cryptocurrency payment processing will push prepare Kickstarter for the digital payment revolution.  Kickstarter will need to form partnerships with FinTech companies like Coinbase to offer cryptocurrency payment processing.  This could enable cross-country project backing and faster and cheaper payment processing (removing the 3-5% credit card processing fees), accelerating global expansion. 

Kickstarter has already invested in and acquired video-streaming platform Huzza in 2017. [(VentureBeat)](https://venturebeat.com/business/kickstarter-acquires-video-streaming-community-platform-huzza-opens-first-office-outside-the-u-s/) Additional investment in mobile video creation, live-streaming, AI content creation can enhance project founders' ability to create, post, and update backers more easily.  Investing in content creation services that can be scaled via AI and live streaming will allow Kickstarter to differentiate against competitors and add value to project creators (reducing project creators costs).  The technologies required to implement advancements in this area would require AI & machine learning models, web-optimized video compressing and processing, and scalable website server solutions (currently employed via AWS).

To assist in creating a functioning marketplace and positive user experience, investment in machine learning technologies will allow Kickstarter to recommend similar, unique, and exciting projects to perspective backers via historical data and trends.  Investment in machine learning, data processing, and data manipulation technologies will be crucial for success.  This will empower the Kickstarter backer to be move involved in developing the next step in culture and society via more frequent and higher-value investments.  

In summary, Kickstarter should invest in blockchain/cryptocurrency payment processing, AI/live streaming content creation capabilities, and machine learning.  These solutions will empower global growth and enhance both the experience of the project creator and project backer.

---

```
Sources

1. Kickstarter Website, About Page: https://www.kickstarter.com/about?ref=global-footer

2. Kickstarter Website, Stats Page: https://www.kickstarter.com/help/stats?ref=hello

3. Crunchbase Company Profile: https://www.crunchbase.com/organization/kickstarter

4. Growjo: https://growjo.com/company/Indiegogo

5. Emerging Europe: https://emerging-europe.com/business/its-time-for-europe-to-build-a-new-palo-alto/

6. IMARC Group: https://www.imarcgroup.com/crowdfunding-market

7. Gitnux Blog: https://blog.gitnux.com/companies/kickstarter/

8. Kickstarter, Open-source Blog: https://kickstarter.engineering/supporting-open-source-our-donations-for-2018-d69a6114bf89

9. Kickstarter, Open-source Blog: Apps: https://kickstarter.engineering/open-sourcing-our-android-and-ios-apps-6891be909fcd

10. Kickstarter, Functional Programming Blog: https://kickstarter.engineering/leveraging-functional-programming-aws-lambda-to-drive-chatops-4b269558d3fb#.s56cys71i

11. Stackshare: https://stackshare.io/kickstarter/kickstarter

12. Fundera: https://www.fundera.com/resources/crowdfunding-statistics

13. The Crowd Data Center: https://www.thecrowdfundingcenter.com/data/projects

14. Forbes: https://www.forbes.com/sites/forbesagencycouncil/2021/12/20/the-meteoric-rise-of-equity-crowdfunding/?sh=684adf224d41

15. Oregon Business: https://oregonbusiness.com/19709-tool-kit-regulation-crowdfunding/

16. The Diplomat: https://thediplomat.com/2023/01/hong-kongs-crowdfunding-regulations-could-have-global-ramifications/

17. Growjo, Kickstarter: https://growjo.com/company/kickstarter

18. WikiSME: https://www.wikisme.com/kickstarter-business-model-and-swot-analysis/

19. Emerging Europe: https://emerging-europe.com/business/its-time-for-europe-to-build-a-new-palo-alto/

20. Mordor Intelligence: https://www.mordorintelligence.com/industry-reports/crowdfunding-market

21. Statista: https://www.statista.com/statistics/235405/kickstarter-project-funding-success-rate/

22. Medium: https://medium.com/@daniel.kupka/we-analyzed-331-000-kickstarter-projects-here-s-what-we-learned-about-crowdfunding-success-63b341b025ac

23. VentureBeat: https://venturebeat.com/business/kickstarter-acquires-video-streaming-community-platform-huzza-opens-first-office-outside-the-u-s/

```
---