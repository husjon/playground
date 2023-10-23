import { ReactNode } from "react";
import "./profile-card.scss";
import { placeholderBio, randomJobTitle } from "./data";

export default function ProfileCards() {
  const profiles = [
    {
      name: "Nomen Nescio",
      image: "https://i.pravatar.cc/150?img=32",
      title: randomJobTitle(),
    },
    {
      name: "Nomen Nescio",
      image: "https://i.pravatar.cc/150?img=7",
      title: randomJobTitle(),
    },
  ];

  return (
    <div className="profiles">
      <ProfileCard
        name="Jon Erling"
        image="https://github.com/husjon.png"
        title="Software developer"
      >
        Playing around with Typescript, React and CSS.
      </ProfileCard>
      {profiles.map(({ name, image, title }, i) => (
        <ProfileCard name={name} image={image} title={title} key={i} />
      ))}
    </div>
  );
}

interface ProfileCardProps {
  name: string;
  title: string;
  image: string;
  children?: ReactNode;
}
function ProfileCard({ name, title, image, children }: ProfileCardProps) {
  if (!name) name = "Nomen Nescio";
  if (!title) title = randomJobTitle();
  if (!children) children = placeholderBio();

  return (
    <div className="profile-card">
      <div className="inner">
        <div className="image-border">
          <img
            src={image ?? "https://i.pravatar.cc/480"}
            alt="profile"
            className="profile-image"
          />
        </div>
        <div className="info">
          <div className="name">{name}</div>
          <div className="job-title">{title}</div>
        </div>
        <div className="bio">{children}</div>
      </div>
    </div>
  );
}
