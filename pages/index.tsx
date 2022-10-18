import Head from 'next/head'

import WeddingDate from 'components/date'
import Footer from 'components/footer'
import Gallery from 'components/gallery'
import Gifts from 'components/gifts'
import Header from 'components/header'
import Intro from 'components/intro'
import OurStory from 'components/our-story'
import Playlist from 'components/playlist'
import Invite from 'components/invite'
import Quote from 'components/quote'

const meta = {
  title: 'Tamy & Mauro ♥ Matrimonio ♥ 18-02-2023',
  description:
    'Matrimonio de Tamy & Mauro, 18-02-2023 en Los Aromos 119, Hospital, Paine.',

  type: 'website'
}

export default function IndexPage() {
  return (
    <div className='w-full relative'>
      <Head>
        <title>{meta.title}</title>
        <meta name='robots' content='follow, index' />
        <meta content={meta.description} name='description' />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Tamy & Mauro' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta
          property='og:image'
          content='https://tamy-y-mauro.vercel.app/images/gallery/2.jpg'
        />
      </Head>
      <Header />

      <Intro />
      <Invite />
      <WeddingDate />
      <OurStory />
      <Gallery />
      <Gifts />
      <Quote />

      <Footer />

      <Playlist />
    </div>
  )
}
