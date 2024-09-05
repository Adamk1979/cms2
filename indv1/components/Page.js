import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Page = ({ blok }) => {
  if (!blok || !Array.isArray(blok.body)) {
    // Fallback UI or return null if blok or blok.body is undefined or not an array
    return <div>No content available</div>;
  }

  return (
    <main className="text-center mt-4" {...storyblokEditable(blok)}>
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};

export default Page;
