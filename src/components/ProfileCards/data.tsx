export const jobTitles = [
  "Account Executive",
  "Dog Trainer",
  "Librarian",
  "Marketing Coordinator",
  "Medical Assistant",
  "Nursing Assistant",
  "President of Sales",
  "Project Manager",
  "Web Designer",
];

export const randomJobTitle = () =>
  jobTitles[Math.floor(Math.random() * jobTitles.length)];

export const placeholderBio = () => {
  const paragraphs = Math.floor(Math.random() * 3) + 1;
  return (
    <div>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      {paragraphs >= 2 && (
        <p>
          Repellat aspernatur, consequuntur error unde non sed suscipit
          laboriosam ea voluptate placeat. Corporis eius aliquam nostrum
          temporibus?
        </p>
      )}
      {paragraphs >= 3 && <p>Hic impedit suscipit blanditiis cumque.</p>}
    </div>
  );
};
