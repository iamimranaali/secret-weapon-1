
import NeedAssistant from '@/components/shared/need-assistant'
import ProjectCard from '@/components/shared/ProjectCard'
import Products from '@/pages/Products'
import React from 'react'

export default function page() {
  return (
    <div className='p-4 w-full h-full z-20'>
       <section className="h-full w-full min-h-[60vh] relative flex  flex-col items-center justify-center  bg-black rounded-[40px]">
        <span className="h-40 w-40 lg:h-[360px] lg:w-[360px] bg-transparent pointer-events-none border-[12px] rounded-[40px] top-80 lg:top-40 z-20 right-5 lg:right-20 border-yellow-300 absolute rotate-45" />
        <div className="max-w-3xl flex flex-col items-center z-10">
          <h2 className="text-white text-center text-3xl sm:text-4xl ld:text-6xl font-extrabold">
            Explore Projects
          </h2>
          <p className="text-neutral-300 text-center mt-4 text-xs md:text-base px-4 max-w-lg">
            Begin your journey with us - reach out and let&apos;s create something
            extraordinary together!.
          </p>
        </div>
      </section>

      <ProjectCard
      id={'aD'}
        content="right"
        title={"AFL Development"}
        imageDesc={'lorem ipsum blah blah blahok ok ok ok ok ok o ko ko k o ko'}
        descriptions={["We use AFL (AmiBroker Formula Language) to create custom indicators and trading systems. Our team of experts are well equipped to write an AFL code for your trading strategy that generates signals for buy, sell, and short and cover conditions based on your specific requirements."]}
        listItems={[
          "Creating custom Indicators and strategies on AFL platform",
          "Automated trading system.",
          "Establish alerts to decrease the amount of time spent looking at screen.",
          "Offering robust back testing capabilities, allowing traders to evaluate the performance of their trading strategies over historical data."
        ]}
        image={"/product/amibroker-3.png"}
        button={"Read More"}
      />

<ProjectCard 
id={'pineD'}
        content="left"
        title={"Pinescript Development"}
        descriptions={["Pine Script development empowers traders to customize their trading experience and potentially gain an edge in the market. Our skilled team is fully prepared to craft a PINESCRIPT code tailored to your trading strategy, generating signals for buying, selling, shorting, and covering positions according to your precise specifications."]}
        listItems={[
          "Creating custom Indicators and strategies on Pinescript platform",
          "Automated trading system.",
          "Establish alerts to decrease the amount of time spent looking at screens.",
        ]}
        image={"/product/trading-view.png"}
        button={"Read More"}
      />

<ProjectCard 
id={'pyD'}
        content="right"
        title={"Python Development"}
        descriptions={["Our team specializes in developing custom indicators and trading systems using Python. We have experts proficient in Python who can create code tailored to your specific trading strategy requirements."]}
        listItems={[
          "Developing custom indicators and strategies on the Python platform.",
          "Implementing automated trading systems to execute buy, sell, short,and cover actions based on your strategy.",
          "Setting up alerts to reduce screen time.",
          "Providing robust backtesting capabilities, allowing you to assess the performance of your strategies using historical data."
        ]}
        image={"/product/python-3.png"}
        button={"Read More"}
      />


<ProjectCard 
id={'mD'}
        content="left"
        title={"Metatrader Development"}
        descriptions={["Our team specializes in leveraging MetaTrader 4 or 5 to develop custom indicators and trading systems tailored to your needs. With expertise in MQL4 or MQL5 programming languages, we can create code that generates signals for buy, sell, short, and cover conditions according to your specifications."]}
        listItems={[
          "Designing custom indicators and strategies within the MetaTrader environment.",
          "Developing automated trading systems to execute trades automatically based on your strategy.",
        ]}
        image={"/product/metatrader-2.png"}
        button={"Read More"}
      />


<ProjectCard 
id={'-'}
        content="right"
        title={"AFL to Pinescript Conversion"}
        descriptions={["Essentially, it’s a migration from one platform to another. Our team can aid you in transferring your current AFL code to Pine Script, guaranteeing that your strategy from AmiBroker seamlessly functions on Trading View. Our team has Comprehensive knowledge of both AFL (AmiBroker Formula Language) and Pine Script"]}
        listItems={[
          "Understanding the fundamental logic of your current AFL strategy.",
          "Seamless and dependable conversion.",
        ]}
        image={"/product/afl-to-pine-3.png"}
        button={"Read More"}
      />


<ProjectCard id={'-'}
        content="left"
        title={"Pinescript to AFL Conversion"}
        descriptions={["It involves transferring from one platform to another. With the support of our skilled team, we can seamlessly transition your strategy from Trading View to AmiBroker by converting your current Pine code to AFL Script."]}
        listItems={[
          "We convert your Pine Script code into AFL code to incorporate features not available in TradingView, ensuring your strategy logic remains intact.",
          "We guarantee a smooth transition from TradingView to AmiBroker.",
        ]}
        image={"/product/pine-to-afl.png"}
        button={"Read More"}
      />


<ProjectCard id={'opt'}
        content="right"
        title={"Optimization"}
        descriptions={["Optimization refers to the process of fine-tuning trading strategies to improve their performance based on historical data. This is done through the built-in optimization module, where users can specify ranges for various parameters and let the software test different combinations to identify the optimal values"]}
        listItems={[
          "We optimize different combinations of parameters within a trading strategy to find the most effective settings.",
          "Traders can still iterate through different parameter values, observe the impact on strategy performance, and manually select the settings that yield the best results.",
        ]}
        image={"/product/optimisation.png"}
        button={"Read More"}
      />

<ProjectCard id={'auto'}
        content="left"
        title={"Automation"}
        descriptions={["Automation refers to the ability to execute trading strategies without manual intervention. It allows users to automatically execute buy and sell orders based on predefined trading rules."]}
        listItems={[
          "Our team is skilled in automating strategies using third party service providers.",
          "Whether you have an existing code in AFL or Pinescript or need a new one from scratch, we handle all the necessary steps to automate it for you.",
        ]}
        image={"/product/automation.png"}
        button={"Read More"}
      />

<ProjectCard id={'-'}
        content="right"
        title={"AFL to DLL Conversion"}
        descriptions={["We transform AmiBroker’s AFL code into DLL files, ensuring that the original code remains hidden and inaccessible. This allows our clients to sell the DLL files to their own customers, safeguarding the proprietary nature of the code. As a result, our clients can generate revenue while protecting their intellectual property and maintaining control over distribution."]}
        listItems={[
          "We specialize in converting AmiBroker's AFL code into DLL files, ensuring its confidentiality.",
          "This service empowers our clients to offer the DLL files to their customers, shielding their proprietary trading strategies and enhancing their market competitiveness.",
        ]}
        image={"/product/dll-conversion-3.png"}
        button={"Read More"}
      />

<ProjectCard id={'-'}
        content="left"
        title={"Licensing"}
        descriptions={["We turn AmiBroker’s AFL codes into DLL files and give our clients permission to use them. They can then sell these DLL files to their own customers and earn money. This way, their customers can’t see or share the original AFL and they get access to resell the AFL by charging monthly fees."]}
        listItems={[
          "WOur clients get legal rights to use and distribute the DLL file according to their needs.",
          "Clients can resell the licensed DLL files to their own customers or clients, opening up revenue opportunities.",
        ]}
        image={"/product/licensing.png"}
        button={"Read More"}
      />



      <Products />
      <NeedAssistant />
    </div>
  )
}