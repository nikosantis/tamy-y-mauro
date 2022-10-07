import WeddingDate from 'components/date'
import Footer from 'components/footer'
import Header from 'components/header'
import Intro from 'components/intro'
import OurStory from 'components/our-story'
import Playlist from 'components/playlist'

export default function IndexPage() {
  return (
    <div className='w-full relative'>
      <Header />
      <Intro />
      <WeddingDate />
      <OurStory />
      <Footer />
      <Playlist />
    </div>
  )
}
