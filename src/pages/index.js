import React from 'react'

import Layout from '../components/layout'
import Nav from '../components/nav'
import Section from '../components/section'
import SubSection from '../components/sub-section'
import DayTitle from '../components/day-title'
import Event from '../components/event'
import Button from '../components/button'
import Faq from '../components/faq'

const IndexPage = () => (
  <Layout>
    <Nav />

    <Section title="Our Story" anchor="story">
      <p className='lead'>We met in May, 2012. Our first date was at a Belgian beer bar in Oakland called The Trappist. We were both living in Oakland at the time, and coincidentally, only 4 blocks away from each other! When we first met, we didn’t have a lot in common. Andy worked in tech and liked video games and fashion. Vivian was a professional dancer and liked cooking and the outdoors. But there were two very important things that brought them together: 1. A shared love of exploring and trying new things. 2. Cats.</p>
      
      <p>Over the years, the circles of our venn diagram started to overlap more and more and we shared new experiences and wided each other’s view of the world.</p>

      <p>We've have traveled the globe together and shared many amazing moments, including tramping in New Zealand, hot springs in Iceland, petting tigers in Thailand, and watching the sunrise over Black Rock Desert. Our friends know us as being trendsetters, always up on the latest cool thing. We’ve often been called a <em>Power Couple</em>, with our incredible teamwork, being able to communicate and get things done without anyone even noticing. We're also known for being cute and goofy, showing up to parties in fun outfits and performing our cool new dance moves in front of the crowd.</p>

      <p>But as much as we love adventures, the thing that has really bonded us is out beautiful home life. We live in a super cool apartment in Oakland with our 4 cats. We love cooking delicious dinners together, watching anime, and hosting parties. Our everyday life is harmonious and full of love, and we are each other’s best friend. As we look back over the past 7 years together, we are amazed at how the time has flown by! And as thweey look forward to the future, we share dreams of an amazing life together, full of exciting new experiences, including raising a family...and having more cats!</p>
        
      <p>We are super excited to celebrate our love and commitment this May, and look forward to embarking on their next great adventure together as husband and wife.</p>
    </Section>

    <Section title="Schedule" anchor="schedule">
      <DayTitle/>
      <Event
        start="2:00PM"
        end="4:30PM"
        title="Ceremony"
        location="Aragon Family Cabin"
        address="993 Boulder Mountain Drive, South Lake Tahoe, CA 96150"
        url="https://www.google.com/maps/place/993+Boulder+Mountain+Dr,+South+Lake+Tahoe,+CA+96150/@38.8868968,-120.0356966,17z/data=!3m1!4b1!4m5!3m4!1s0x80998ee56b2ba9b5:0xfd0894069a3cea22!8m2!3d38.8868926!4d-120.0335026"
      >
        <p>Join us for a ceremony at the majestic rocks behind the house<sup>*</sup> followed by a champagne toast and tree planting!</p>
        <p className='note'><sup>*</sup>Please no heeled shoes! There is a short walk to the rocks on uneven terrain.</p>
      </Event>
      <Event
        start="5:00PM"
        end="9:00PM"
        title="Reception"
        location="Beach Retreat &amp; Lodge"
        address="3411 Lake Tahoe Blvd., South Lake Tahoe, CA 96150"
        url="https://www.google.com/maps/place/3411+Lake+Tahoe+Blvd,+South+Lake+Tahoe,+CA+96150/data=!4m2!3m1!1s0x8099900415c54fe9:0x9f122933536e6dc?ved=2ahUKEwjJwo2P4sjfAhVMGTQIHVJBDScQ8gEwAHoECAAQAQ"
      >
        <p></p>
      </Event>
      <Event
        start="9:00PM"
        end="11:00PM"
        title="After Party"
        location="Boathouse on the Pier, Beach Retreat &amp; Lodge"
        address="Walking distance from reception"
        url="https://www.google.com/maps/place/3411+Lake+Tahoe+Blvd,+South+Lake+Tahoe,+CA+96150/data=!4m2!3m1!1s0x8099900415c54fe9:0x9f122933536e6dc?ved=2ahUKEwjJwo2P4sjfAhVMGTQIHVJBDScQ8gEwAHoECAAQAQ"
      >
        <p>Come dance with us in the intimate bar / boathouse on the pier!</p>
      </Event>
    </Section>

    <Section title="Travel" anchor="travel">
      <SubSection
        icon="local_airport"
        title="Getting There"
      >
        <p>The closest airport is Reno-Tahoe International Airport, which is about a 1 hour drive. If you are not renting a car, there is a shuttle service from the airport to South Lake Tahoe. Let us know if you plan to take the shuttle and we can arrange to pick you up when you get into town.</p>
        <Button title="Shuttle Info" href="http://southtahoeairporter.com/"/>
      </SubSection>
      <SubSection
        icon="hotel"
        title="Accomodations"
      >
        <p>We are pleased to offer a block of rooms available at a discounted price at the Beach Retreat & Lodge, the venue where we will be hosting the reception. This offer will be available until 4/24/19, so please make your reservations before then!</p>
        <Button title="Book Online" href="https://reservations.travelclick.com/97034?groupID=2302649"/>
      </SubSection>
    </Section>

    <Section title="Registry" anchor="registry">
      <a href="https://www.zola.com/registry/andyandvivian" target="_blank"><img className='store' src="https://d1tntvpcrzvon2.cloudfront.net/vnassets/static/media/zola-logo-horizontal-black.34453bcb.svg" /></a>
      <a href='https://www.heathceramics.com/apps/giftregistry/registry/58727?shared_url=true' target="_blank"><img className='store' src="https://res.cloudinary.com/andymai/image/upload/v1546222323/wedding/heathceramics.png" /></a>
    </Section>
    
    <Section title="FAQ" anchor="faq">
      <SubSection 
        icon="help_outline"
        title="What should I wear?">
        <p>Something festive! It is an outdoors event and it gets chilly at night in the mountains, so please bring warm layers to keep yourself comfortable.</p>
      </SubSection>
      <SubSection
        icon="help_outline"
        title="What kind of shoes should I wear?">
        <p>The ceremony site is a short walk through the woods behind Sergio and Sophie’s house. The ground is uneven and there is no formal trail. Please wear sturdy shoes for this part of the event. We will provide hiking poles to anyone who wants additional support. The reception site is on a patio by the lake, so feel free to wear any type of shoes for that. </p>
      </SubSection>
      <SubSection 
        icon="help_outline"
        title="What will the weather be like?">
        <p>High of 64&#8457; &#9675; Low of 34&#8457;.</p>
      </SubSection>
      <SubSection
        icon="help_outline"
        title="How long should we stay?">
        <p>We hope you will be able to enjoy the 3-day holiday weekend in Tahoe! We are staying until Monday, so we hope to see you on the beach on Sunday afternoon :)</p>
      </SubSection>
      <SubSection 
        icon="help_outline"
        title="What is there to do in South Lake Tahoe?">
        <p>Hiking, mountain biking, water sports, relaxing on the beach, casinos at Stateline. </p>
      </SubSection>
      <SubSection 
        icon="help_outline"
        title="What are some good hikes?">
        <p>Emerald Bay, Mt. Tallac, Maggie’s Peaks, Angora Lakes, Echo Lakes.	</p>
      </SubSection>
    </Section>
  </Layout>
)

export default IndexPage
