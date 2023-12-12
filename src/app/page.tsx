import Featured from '@/components/Featured'
import Offer from '@/components/Offer'
import Slider from '@/components/Slider'
import useStore from '../app/store';

export default function Home() {

  return (
    <main>
      <Slider/>
      <Featured/>
      <Offer/>
    </main>
  )
}
