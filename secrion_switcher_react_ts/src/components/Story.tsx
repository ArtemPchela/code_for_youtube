import { createRef, RefObject, useEffect, useRef, useState } from "react";
import ButtonsSwitcher from "./ButtonsSwitcher.tsx";
import { useScrollPosition } from "./useScrollPosition.tsx";

export type Story = {
  id: number;
  title: string;
  body: string;
};

const Story = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const storyRef = useRef<Array<RefObject<HTMLElement>>>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const data: Story[] = await response.json();

      setStories(data);

      storyRef.current = data.map(() => createRef<HTMLElement>());
    };

    fetchData();
  }, []);

  useScrollPosition(storyRef, setCurrentIndex);

  const scrollToStory = (index: number) => {
    storyRef.current[index].current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div>
      <ButtonsSwitcher
        scrollToStory={scrollToStory}
        currentIndex={currentIndex}
        stories={stories}
      />
      {stories.map((story, index) => (
        <section key={story.id} ref={storyRef.current[index]}>
          <div className={"section_wrapper"}>
            <img
              src="https://images.pexels.com/photos/2208967/pexels-photo-2208967.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="image"
              className={"section_image"}
            />
            <div>
              <h2>{story.title}</h2>
              <p>{story.body}</p>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Story;
