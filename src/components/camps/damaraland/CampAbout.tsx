import Image from "next/image";

export default function CampAbout() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="safari-heading text-4xl lg:text-6xl text-stone-900 mb-6">
            About Damaraland Camp
          </h1>
          <p className="safari-accent text-xl text-stone-600 max-w-3xl mx-auto">
            A wilderness retreat in the heart of one of Africa&apos;s most remarkable landscapes
          </p>
        </div>

        {/* Main Overview */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="safari-heading text-3xl text-stone-900 mb-8">
              Ancient Mountain Sanctuary
            </h2>
            <div className="space-y-6 text-stone-700 text-lg leading-relaxed">
              <p>
                Damaraland Camp sits in one of Africa&apos;s most spectacular and remote wilderness areas, 
                where ancient granite mountains rise dramatically from desert plains. This remarkable 
                landscape is home to the world&apos;s largest population of free-roaming desert elephants 
                and serves as a sanctuary for the critically endangered desert black rhino.
              </p>
              <p>
                The camp offers an authentic wilderness experience while providing comfortable 
                accommodations that blend seamlessly with the natural environment. Built using 
                traditional techniques and local materials, our adobe-style accommodations feature 
                modern amenities without compromising the area&apos;s pristine character.
              </p>
              <p>
                Beyond its natural wonders, Damaraland is rich in cultural heritage. The region 
                is home to the Himba, Nama-Damara, and Herero peoples, whose traditional ways of 
                life continue to thrive in harmony with this ancient landscape.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_2.jpg`}
                alt="Damaraland Camp Overview"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Heritage Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative lg:order-2">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src={`${process.env.NEXT_PUBLIC_S3_BASE_URL}/images/damaraland/Wilderness-Damaraland-Camp_6.jpg`}
                alt="Twyfelfontein Rock Art"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:order-1">
            <h2 className="safari-heading text-3xl text-stone-900 mb-8">
              UNESCO World Heritage
            </h2>
            <div className="space-y-6 text-stone-700 text-lg leading-relaxed">
              <p>
                Damaraland is renowned for its ancient rock art sites, particularly Twyfelfontein, 
                which boasts one of the largest concentrations of petroglyphs in Africa. These 
                6,000-year-old engravings provide fascinating insights into the lives and beliefs 
                of ancient San hunter-gatherers.
              </p>
              <p>
                The region&apos;s geological wonders include the famous Burnt Mountain, with its 
                colorful volcanic rock formations, and the remarkable Organ Pipes, where ancient 
                lava flows created dramatic columnar basalt formations that resemble organ pipes.
              </p>
            </div>
          </div>
        </div>

        {/* Conservation Section */}
        <div className="bg-gradient-to-r from-earth-50 to-sand-50 p-12 rounded-2xl">
          <h2 className="safari-heading text-3xl text-stone-900 text-center mb-8">
            Conservation & Community
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="safari-accent text-xl font-medium text-stone-900 mb-4">
                Wildlife Conservation
              </h3>
              <p className="text-stone-700 leading-relaxed">
                Our presence supports vital conservation efforts for desert-adapted elephants 
                and black rhinos through community conservancy programs. Tourism revenue directly 
                benefits local communities and wildlife protection initiatives.
              </p>
            </div>
            <div>
              <h3 className="safari-accent text-xl font-medium text-stone-900 mb-4">
                Cultural Preservation
              </h3>
              <p className="text-stone-700 leading-relaxed">
                We work closely with local communities to ensure cultural traditions are respected 
                and preserved. Our cultural excursions provide authentic encounters while supporting 
                traditional livelihoods and education.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="safari-heading text-2xl text-stone-900 mb-6">
            Experience Ancient Damaraland
          </h3>
          <p className="safari-accent text-stone-600 mb-8 max-w-2xl mx-auto">
            Discover a landscape where ancient mountains tell stories spanning millions of years, 
            where remarkable wildlife has adapted to desert conditions, and where vibrant cultures 
            continue their timeless traditions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact"
              className="safari-accent inline-flex items-center justify-center px-8 py-4 bg-earth-500 text-white hover:bg-earth-600 transition-all duration-300 text-sm tracking-widest hover:scale-105 rounded-lg"
            >
              PLAN YOUR VISIT
            </a>
            <a 
              href="#gallery"
              className="safari-accent inline-flex items-center justify-center px-8 py-4 border-2 border-earth-500 text-earth-500 hover:bg-earth-500 hover:text-white transition-all duration-300 text-sm tracking-widest rounded-lg"
            >
              VIEW GALLERY
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}