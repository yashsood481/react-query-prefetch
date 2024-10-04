import { useState } from "react";
import "./App.css";
import Posts from "./components/Posts.jsx";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

function App() {
  const [selectedCase, setSelectedCase] = useState(1);

  return (
    <>
      <div className="bg-slate-900 h-max text-white w-100 flex flex-col items-center">
        <h1 className="text-5xl w-100">Posts</h1>
        <div className="mt-4 mb-2">
          <ToggleGroup type="single">
            <ToggleGroupItem
              onClick={() => setSelectedCase(1)}
              value="bold"
              aria-label="Toggle bold"
            >
              <div>On Accordion Open</div>
            </ToggleGroupItem>
            <ToggleGroupItem
              onClick={() => setSelectedCase(2)}
              value="italic"
              aria-label="Toggle italic"
            >
              <div>On Title Hover</div>
            </ToggleGroupItem>
            <ToggleGroupItem
              onClick={() => setSelectedCase(3)}
              value="underline"
              aria-label="Toggle underline"
            >
              <div>When In Scroll view</div>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div className="container p-4">
          <Posts selectedCase={selectedCase} />
        </div>
      </div>
    </>
  );
}

export default App;
