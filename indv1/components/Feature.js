import { storyblokEditable } from "@storyblok/react";

const Feature = ({ blok }) => {
  return (
    <div className="feature p-6">
      {blok.image && (
        <img
          className="w-full h-auto object-contain mb-8 rounded-xl"
          src={blok.image.filename}
          alt={blok.name || "feature image"}
        />
      )}
      <h2 className="text-2xl font-semibold text-center text-neutral-600 lg:text-3xl mb-8">
        {blok.name}
      </h2>
      <div className="mt-4 text-center">
        <a
          href="#"
          className="inline-flex items-center font-semibold text-blue-600 hover:text-neutral-600"
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
