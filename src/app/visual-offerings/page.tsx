import visualOfferingsData from "./visualOfferingsData";
import ImageGridWithModal from "../components/ImageGridWithModal";

export default function About() {
  return (
    <div className="py-8">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-jhcteal-100">
          Visual Offerings
        </h1>
        <p>
          Whether you present at conferences or webinars or facilitate group
          process, you can add value by including a graphic visual or ‘map’ to
          your message or event. A visual ‘map’ or sketchnote will enhance the
          experience either ‘in the moment’ during the Zoom call or after an
          event.
        </p>
        <p>
          Let’s explore how others have used visual offerings to increase their
          impact. Click on the buttons below to see some examples.
        </p>
      </div>
      <div className="py-6">
        <ul className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
          {visualOfferingsData.map((offering) => (
            <li className="py-3 " key={offering.id}>
              <h3 className="pb-4 font-semibold">{offering.title}</h3>
              <a
                href={`#${offering.id}`}
                className="bg-transparent hover:bg-jhcteal-100 text-jhcteal-100 font-semibold hover:text-white py-2 px-4 border border-jhcteal-100 hover:border-transparent rounded"
              >
                Explore Visual Offerings
              </a>
            </li>
          ))}
        </ul>
      </div>
      {visualOfferingsData.map((offering) => (
        <div id={offering.id} className="py-8" key={offering.id}>
          <h3 className="text-xl font-bold mb-4">{offering.title}</h3>
          <p className="mb-4">{offering.description}</p>
          <ImageGridWithModal images={offering.images} />
        </div>
      ))}
    </div>
  );
}
