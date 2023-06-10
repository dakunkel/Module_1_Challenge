# Kickstarter 

## Overview and Origin

Kickstarter was founded on April 28th, 2009 by Charles Adler, Perry Chen, and Yancey Strickler in New York City.  In simplest terms, Kickstarter is a crowdfunding platform.  Their vision was to help give creative artists and thinkers a platform to fund their projects by connecting them with community members interested in defining culture.  The company quickly put their money where their mouth was by reincorporating as a Public Benefit Corporation. This allows Kicksterer to seek the dual goal of boosting societal and shareholder gains. 

The company has undergone seed funding and currently sits in Series D after raising approximately $10 million USD. [(Crunchbase)](https://www.crunchbase.com/organization/kickstarter) Kickstarter currently employs 264 team members and brings in an annual revenue of $61.1 million USD. [(Growjo)](https://growjo.com/company/Indiegogo) Since its inception, Kickstarter has funded over 240,000 projects with ~$7.4 billion USD in total funds raised. [(Kickstarter, Stats)](https://www.kickstarter.com/help/stats?ref=hello)

---

## Business Activities:

### Kickstarter's Goals
Kickstarter's goal is twofold:

1. Give creators, artists, musicians, thought leaders, and entrepreneurs the opportunity to fund their project in a safe and trusted platform

2. Give individuals interested in benefiting society and the arts the opportunity to invest in companies in early stages in exchange for future products, rewards, or good will -- but not equity

With most projects, when an investor funds the project, their money comes with decision and input power.  Kickstarter is trying to build a community marketplace, or a network of family and friends, that support each other's business endeavors without active angel investors or venture capital. By doing so, Kickstarter is aiming to solve a painful problem most start-ups deal with, the active investor.  Kickstarter, by design, removes the active investor from projects, leaving all control in the creator's hands: 

### _"Creators always control how the work comes together — no 100-page grant applications, no donors demanding you modify your message, no last-minute edits from investors..."_ 
[(Kickstarter.com, About)](www.kickstarter.com/about?ref=global-footer)


### Kickstarter's Customer
Kickstarter has to answer the question is it the chicken or the egg? By nature, Kickstarter has two consumers due to the fact it is a project marketplace:
1. Creators and entrepreneurs are able to post their projects in hopes of securing funding.  To give itself a competitive advantage, Kickstarter must maintain low fees, 5% of project funding, compared to competitors in hopes of attracking exciting projects to the platform. 

2. On the flip side, Kickstarter has to attract crowdfunders to seed projects and ensure the creators and entrepreneurs are able to secure funding.  In order to do this, Kickstarter has to continually invest in user-experience, payment processing ease, and machine learning to recommend exciting projects to potential crowdfunders.  

### Kickstarter's Market Opportunity and Competitive Edge

There is a healthy market for crowdfunding, which is expected to surpass $26 billion USD by the year 2027 (IMARC Group, an alternative investment analysis company). The peer-to-peer lending market is continuing to grow 11.6% annually by 2028. [(IMARC Group)](https://www.imarcgroup.com/crowdfunding-market)  

One key differentiator for Kickstarter is that the platform focuses mainly on crowdfunding via rewards, products, non-monetary gains, compared to other equity crowdfunding platforms.  Kickstarter faces fierce competition with a mix of competitors large and small: GoFundMe, Indiegogo, Crowdfunder, Fundrise, and CircleUp.  With large competition, Kickstarter outperforms with global reach, risk-reduction algorithms, and strong brand reputation leading to project generation.  Kickstarter gives its creators resources to easily list projects and transact through partnerships with Stripe, offering promotional tools through marketing integrations with social platforms, and physical goods support via shipping / fulfillment. [(Gitnux Blog)](https://blog.gitnux.com/companies/kickstarter/) By focusing on creativity and innovation, Kickstarter wins in the crowdfunding space. Even though larger companies like GoFundMe bring in ~$114 million USD annually, Kickstarter is growing annually. [(Growjo)](https://growjo.com/company/Indiegogo)

### Kickstarter's Technology

Kickstarter employs many technologies to streamline workflow, including: jQuery, MySQL, NGINX, Zencoder, Rails, Amazon S3, Amazon RDS, Google Analytics, Stripe, Twilio SendGrid, Elasticsearch, Dyn, Embedly, Chartbeat, GitHub, StatusPage.io, Crashlytics, StatsD, Trello, G Suite, and many more. [(Stackshare)](https://stackshare.io/kickstarter/kickstarter)

Kickstarter prides itself in utilizing many open-source software plug-ins and code to enhance its tech stack. Kickstarter invests in open source projects that can benefit its creators and backers.  For example, Kickstarter invested in Babel, which enables ECMAScript 2015+ code to be backwards compatible with JavaScript in all environments.  This allows for Kickstarter to be accissble all over the world by anyone who wants to either post a project or back a project. On top of that Kickstarter lists all of the open-source code it utilizes: Webpack, Advent of Code, Rails Girls Summer of Code, Code Nation, Code Cooperative, helping boost community involvement and accomplish its society improvement goal. [(Kickstarter, Open Source Blog)](https://kickstarter.engineering/supporting-open-source-our-donations-for-2018-d69a6114bf89)  Playing into the community nature of the company, and to keep costs low, Kickstarter opened up its code and hosts conferences (Functional Swift Conference) every year to help bring developers together.  By doing this, Kickstarter is able to build and maintain iOS and Android apps easier with less resources. [(Kickstarter, Open Source Blog: Apps)](https://kickstarter.engineering/open-sourcing-our-android-and-ios-apps-6891be909fcd)  Additionally, in order to maintain scalable, lightweight, and low-cost server computing via AWS Lambda to maintain a serverless infrastructure.  When a problem arises, Slack webhook would assign issues to the appropriate channel.  [(Kickstarter, Functional Programming Blog)](https://kickstarter.engineering/leveraging-functional-programming-aws-lambda-to-drive-chatops-4b269558d3fb#.s56cys71i)  In order to maintain a lightweight environment, Kickstarter engineers utilize the Lambda configuration setup to break up code, test, and imrpove.  Example Kickstarter code that helps format incoming data to allow mapping to Slack environments:

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

## Landscape:

Kickstarter sits within the alternative investing domain within FinTech, specifically in the crowdfunding category.  The peer-to-peer crowdfunding market is currently valued at ~$15 billion USD as of 2022.  The overall crowdfunding market is expected to top $300 billion by 2030. [(Fundera)](https://www.fundera.com/resources/crowdfunding-statistics) With strong tailwinds, the growth of this sector will continue through 2028.  Celebrity and social media influencer endorsements and helping drive the expansive reach and popularity of crowdfunded projects.  COVID-19 aided in the popularity of crowdfunding as well to help those in need and fund new projects when normal paths for capital were not available.  Title III of the JOBS Act (2021), helped put crowdfunding on the mainstage in the US letting retail and nonaccredited investors participate in opportunites .  [(Forbes)](https://www.forbes.com/sites/forbesagencycouncil/2021/12/20/the-meteoric-rise-of-equity-crowdfunding/?sh=684adf224d41) Global expansion and regulation has been one of the major trends of the past 5-10 years, assisting connect communities and international investment opportunity. [(IMARC Group)](https://www.imarcgroup.com/crowdfunding-market)  

New regulation in China and the EU pose risk to both firms and investors, leaving individuals on the hook in the event crowdfunded activities are foudn to be associated with unlawful acts (Hong Kong Securities and Futures Ordinance and the Money Lenders Ordinance).  This type of regulation raises the question of who will regulate international investment and who will have jurisdiction on crowdfunded projects. [(The Diplomat)](https://thediplomat.com/2023/01/hong-kongs-crowdfunding-regulations-could-have-global-ramifications/)

Kickstarter currently operates within Australia, Austria, Belgium, Canada, Denmark, France, Germany, Greece, Hong Kong, Ireland, Italy, Japan, Luxembourg, Mexico, the Netherlands, New Zealand, Norway, Poland, Singapore, Slovenia, Spain, Sweden, Switzerland, the United Kingdom, and the United States.  There is room to continually expand internationally as the crowdfunding market grows.  At the same time, Kickstarter must be cognisant of potential regulation to protect itself and its consumers. 

Major companies in the crowdfunding domain to watch:

* GoFundMe
* Indiegogo
* Patreon
* WeFunder
* Classy.org
* Seek & Spark
* SeedInvest
* Crowdrise

## Results

Kickstarer is widely considered one of the most successful crowdfunding platforms available.  With over 320,000 projects completed, it ranks #1 out of all platforms. [(The Crowd Data Center, Fundera)](https://www.thecrowdfundingcenter.com/data/projects)  Kickstarter has funded over $7.3 billion USD worth of projects enabling the advancement of culture, arts, start-ups, and society.  Kickstarter has solidified itself as a place to discover and get involved in the next stage of culture in society.  The impact of Kickstarter accomplishes the dual goals with cultural advancement and $61.1 million USD in annual revenue.  

* What has been the business impact of this company so far?

* What are some of the core metrics that companies in this domain use to measure success? How is your company performing, based on these metrics?

* How is your company performing relative to competitors in the same domain?


## Recommendations

* If you were to advise the company, what products or services would you suggest they offer? (This could be something that a competitor offers, or use your imagination!)

* Why do you think that offering this product or service would benefit the company?

* What technologies would this additional product or service utilize?

* Why are these technologies appropriate for your solution?

blockchain to reduce 3-5% payment processing fees and allow for easier international funding of projects

---

```
Works Cited

1. Kickstarter Website, About Page: https://www.kickstarter.com/about?ref=global-footer

2. Kickstareter Website, Stats Page: https://www.kickstarter.com/help/stats?ref=hello

3. Crunchbase Company Profile: https://www.crunchbase.com/organization/kickstarter

4. Growjo: https://growjo.com/company/Indiegogo

5. Emerging Europe: https://emerging-europe.com/business/its-time-for-europe-to-build-a-new-palo-alto/

6. IMARC Group: https://www.imarcgroup.com/crowdfunding-market

7. Gitnux Blog: https://blog.gitnux.com/companies/kickstarter/

8. Kickstarter, Open Source Blog: https://kickstarter.engineering/supporting-open-source-our-donations-for-2018-d69a6114bf89

9. Kickstarter, Open Source Blog: Apps: https://kickstarter.engineering/open-sourcing-our-android-and-ios-apps-6891be909fcd

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

20. Mordor Intellignece: https://www.mordorintelligence.com/industry-reports/crowdfunding-market

```
---

---
### Requirements

#### Company Information and Business Activities  (25 points)

##### To receive all points, you must:

* Select a company in the FinTech domain to research. (5 points)
* Provide a detailed description of the company's domain, audience, solution and business metrics. (10 points)
* Present company information in a clear and well-organized manner. (10 points)

#### FinTech Domain Trends (20 points)

##### To receive all points, your code must:

* Communicate a thorough synopsis of trends and landmarks in the chosen FinTech domain. (10 points)
* Identify several major competitors. (10 points)

#### Research Depth (15 points)

##### To receive all points, your code must:

* Use multiple sources to present a thorough and cohesive view of the company's domain, history and results. (5 points)
* Specifically quote sources and reference them clearly and accurately. (10 points)

#### Recommendations (20 points)

##### To receive all points, your code must:

* Thoroughly explain company recommendations. (10 points)
* Base company recommendations in solid research. (10 points)

#### Report Presentation (20 points)

##### To receive all points, your report must include:

* Present the report in a ReadME.md file in a Github repository. (10 points)
* The report style showcases the writer's expertise and builds credibility. (10 points)