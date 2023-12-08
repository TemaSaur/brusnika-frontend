import Locations from '@/components/Locations'
import FancyFont from '@/components/FancyFont'

export default function Home() {
  return (
    <main>
      <div className="container mx-auto">
        <div className="pt-16 mb-16 text-center">
          <FancyFont>
            <div className="mb-8">
              <span>company by</span><br />
              <span className="text-5xl">BRUSNIKA</span>
            </div>
            <p className="max-w-[80ch] mx-auto">Российская девелоперская компания. Специализируется на строительстве жилых многоэтажных домов. Основана в 2004 году. Штаб-квартира находится в Екатеринбурге. Сегодня Брусника строит современное демократичное жильё в крупных городах Урала и Сибири, в Москве и Московской области. Ежегодно это 7 000 новых квартир для российских семей</p>
          </FancyFont>
        </div>

        <Locations />
        
      </div>
    </main>
  )
}
