import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { usePost } from "../hooks/usePost";

const Post = ({ id, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isPending } = usePost(id, isOpen);

  const { body } = data ?? {};
  return (
    <div className=" px-1">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger onClick={() => setIsOpen((prev) => !prev)}>
            {title}
          </AccordionTrigger>
          <AccordionContent>{isPending ? "loading" : body}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Post;
