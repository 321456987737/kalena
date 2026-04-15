import HeroSection from '@/components/herosection'
import React from 'react'
import Location from "@/components/location"
const Page = () => {
  return (
    <div>
  <HeroSection
        title="Contact us at Kalena"
        description="By day we serve amazing healthy breakfasts, lunch and light supper, together with freshly pressed juices."
        image="/backimg/6.jpg"
      />
      < Location />
    </div>
  )
}

export default Page
