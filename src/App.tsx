import Quotes from "./Quotes";
import { SparklesText } from "@/components/magicui/sparkles-text";

function App() {
  return (
    <>
      <div className="min-h-dvh items-center justify-center flex flex-col bg-custom ">
        <SparklesText className="pb-5">Quote</SparklesText>
        <Quotes></Quotes>
      </div>
    </>
  );
}

export default App;
