import Image from "next/image";

// create an array of a few social icons that contain image, link and alt text

const socialIcons = [
  {
    name: "X",
    url: "https://x.com/manishby001",
    image: "/x.svg",
    alt: "X Icon",
  },
  {
    name: "GitHub",
    url: "https://github.com/manishmehta001",
    image: "/github.svg",
    alt: "GitHub Icon",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/contact-manish-mehta-9165a8244/",
    image: "/linkedin.png",
    alt: "Linkedin Icon",
  },
];

export function SocialIcons() {
  return (
    <div className="mb-4 flex justify-between">
      <h2 className="text-lg">Social Media</h2>
      <div className="flex gap-2">
        {socialIcons.map((socialIcon) => (
          <a
            key={socialIcon.name}
            href={socialIcon.url}
            target="_blank"
            rel="noopener noreferrer"
            className="border p-1 rounded-md hover:scale-110 transition duration-3"
          >
            <Image
              src={`/social-icons/${socialIcon.image}`}
              alt={socialIcon.alt}
              width={20}
              height={20}
              loading="eager"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
