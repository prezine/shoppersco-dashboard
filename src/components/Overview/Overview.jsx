import React from 'react'
import useMobileNav from '../../customHooks/Stores/useMobileNav'
import CardMetricsData from '../../data/Overview/CardMetricsData'
import NumbersCards from '../Cards/NumbersCards'
import Greeting from '../Header/Greeting'
import Header from '../Header/Header'
import NumberCardsSwiper from '../Swipers/NumberCardsSwiper'
import {useDocTitle} from "./../../customHooks/DocumentTitle"
import CountryInsight from './CountryInsight'
import UserInsight from './userInsight/UserInsight'





const Overview = () => {
  useDocTitle('ShoppersBag | Overview')
  const mobileNavState = useMobileNav(state => state.showMobileNav)


  return (
    <div className='pb-7 h-screen overflow-hidden'>
       <div className={`${mobileNavState ? 'overflow-y-hidden' : 'overflow-y-auto'}  h-full px-5 sm:px-10 xl:pl-0 xl:pr-10`}>
        <Header page="Overview"/>
          <div className='pb-10 pt-3.5'>

            <Greeting headBtns={true} />

            <div className='hidden lg:grid xs:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pb-5 gap-2 2xl:gap-5 auto-cols-fr auto-rows-fr'>
              
              {CardMetricsData.map((item, index)=>{
                return <NumbersCards keyprop={`overviewMetric${index+1}`} id={`overviewMetric${index+1}`} header={item.header} metric={item.metric} amount={item.amount} trend={item.trend} percent={item.percent}/>
              }) }

            </div>

            {/* to swipe cards on mobile  */}

            <NumberCardsSwiper cardDataSet={CardMetricsData} cardType={'overviewMetric'} />

            {/* to swipe cards on mobile  */}

            <section className='flex flex-col-reverse lg:grid grid-cols-5 gap-5'>
                <UserInsight />
                <CountryInsight />
            </section>

          </div>
       </div>

    </div>
  )
}

export default Overview