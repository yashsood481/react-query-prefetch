import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useQueryClient } from "@tanstack/react-query";
import { prefetchPost, usePost } from "../hooks/usePost";

const PostPrefetchOnScroll = ({ id, title, onInView }) => {
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState(false);
  const { data, isPending } = usePost(id, isOpen);
  const postRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onInView(id);
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold as necessary
    );

    const currentRef = postRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [id, onInView]);

  const { body } = data ?? {};
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger
          ref={postRef}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {title}
        </AccordionTrigger>
        <AccordionContent>{isPending ? "loading" : body}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default PostPrefetchOnScroll;
