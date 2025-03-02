import fs from "fs";
import path from "path";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Cards from "@/components/Cards";
import CardsOne from "@/components/CardsOne";
import LowerBanner from "@/components/LowerBanner";
import Footer from "@/components/Footer";

export default async function Home() {
  const filePath = path.join(process.cwd(), "public", "data.json");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const exploreData = JSON.parse(fileContents);

  const filePathTwo = path.join(process.cwd(), "public", "dataCards.json");
  const fileContentsTwo = fs.readFileSync(filePathTwo, "utf-8");
  const categories = JSON.parse(fileContentsTwo);

  return (
    <div>
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section>
          <h2 className="text-4xl font-semibold py-8">Explore Nearby</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {exploreData?.map((item, index) => (
              <Cards
                key={index}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live anywhere..</h2>

          <div className="flex space-x-3 overflow-auto hide-scrollbar p-3 -ml-3">
            {categories?.map((item, index) => (
              <CardsOne key={index} img={item.img} title={item.title} />
            ))}
          </div>
        </section>

        <LowerBanner
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlist curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
}
