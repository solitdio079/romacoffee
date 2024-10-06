import {Link} from 'react-router-dom'
import AnimatedLayout from '../../animation/AnimatedLayout'

export default function AboutPage() {
    return (
      <AnimatedLayout>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: 'url(./wallpaper.png)',
          }}
        >
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="hero-content text-neutral-content">
            <div className="card lg:card-side shadow-xl">
              <figure className="flex ">
                <img
                  className="max-w-sm hidden"
                  src={'./hero.jpeg'}
                  alt="Album"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-3xl text-white">
                  Bizim Hakkımızda!
                </h2>
                <p className="text-white text-lg leading-9 text-wrap">
                  Roma Coffee & Tea olarak, kahve ve çay kültürünü yeniden
                  keşfetmek isteyen herkes için özel bir deneyim sunuyoruz.
                  Roma’nın büyülü sokaklarından esinlenerek kurduğumuz markamız,
                  kaliteli kahve çekirdekleri ve özenle seçilmiş çay
                  çeşitleriyle zengin bir damak zevki arayanlar için ideal bir
                  durak. Kahvelerimiz, dünyanın farklı bölgelerinden titizlikle
                  toplanan en iyi çekirdeklerle hazırlanır. Uzman
                  baristalarımız, her fincanda mükemmel dengeyi yakalamak için
                  taze çekirdekleri özenle öğütüp demliyor. Çay tutkunları için
                  de geniş bir koleksiyon sunuyoruz; geleneksel lezzetlerden
                  egzotik harmanlara kadar uzanan çeşitlerimizle her zevke hitap
                  ediyoruz. Roma Coffee & Tea olarak, sadece içecek sunmakla
                  kalmıyor; aynı zamanda rahat bir atmosfer, güler yüzlü hizmet
                  ve damaklarda unutulmaz bir tat bırakmayı hedefliyoruz.
                  Misafirlerimizin her ziyaretinde kendilerini evlerinde
                  hissetmeleri için sıcak, samimi ve huzur dolu bir ortam
                  yaratıyoruz. Siz de lezzet dolu bu dünyayı keşfetmek için bizi
                  ziyaret edin. Roma’nın ruhunu fincanınızda hissedin!
                </p>
                <div className="card-actions justify-end">
                  <Link to={'/contact'} className="btn bg-[#aaa57b] text-white">
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedLayout>
    )
}