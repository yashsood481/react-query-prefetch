import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useQueryClient } from "@tanstack/react-query";
import { prefetchPost, usePost } from "../hooks/usePost";

const PostPrefetchOnFocus = ({ id, title }) => {
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState(false);
  const { data, isPending } = usePost(id, isOpen);

  const { body } = data ?? {};
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger
          onClick={() => setIsOpen((prev) => !prev)}
          onMouseEnter={() => {
            prefetchPost(queryClient, id);
          }}
          onFocus={() => {
            prefetchPost(queryClient, id);
          }}
        >
          {title}
        </AccordionTrigger>
        <AccordionContent>{isPending ? "loading" : body}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default PostPrefetchOnFocus;
