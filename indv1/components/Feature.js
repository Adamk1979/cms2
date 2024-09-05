import { storyblokEditable } from "@storyblok/react";

const Feature = ({ blok }) => {
  return (
    <div className="feature p-6">
      {blok.image && (
        <img
          className="w-full h-auto sm:h-48 md:h-56 lg:h-64 object-cover rounded-xl mb-4"
          src={blok.image.filename}
          alt={blok.name || "feature image"}
        />
      )}
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center text-neutral-600 mb-4">
        {blok.name}
      </h2>
      <div className="text-center">
        <a
          href="#"
          className="text-blue-600 hover:text-neutral-600"
          title="read more"
          aria-label={`Read more about ${blok.name}`}
        >
          Read More »
        </a>
      </div>
    </div>
  );
};

export default Feature;
