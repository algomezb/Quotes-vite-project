import { useEffect, useState } from "react";
import { z } from "zod";

const quoteSchema = z.object({
  q: z.string(),
  a: z.string(),
});

const quotesSchema = z.array(quoteSchema);

function Quotes() {
  const [quotes, setquotes] = useState<z.infer<typeof quotesSchema>>([]);
  const fetchData = async () => {
    const response = await fetch(
      "https://api.allorigins.win/get?url=https://zenquotes.io/api/quotes/?mode=random"
    );
    const data = await response.json();
    setquotes(quotesSchema.parse(JSON.parse(data.contents)));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const randomQuote =
    quotes.length > 0 && quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <>
      <div className="flex flex-col m-2">
        <div className="bg-gradient-to-br from-violet-600 to-pink-500 font-lexendDeca font-light text-4xl overflow-hidden rounded-md p-0.5 ">
          <div className="bg-[#fdfaf2] rounded-md p-9">
            {randomQuote && (
              <blockquote className="flex flex-col">
                {randomQuote.q}
                <span className="font-lexendDeca font-light text-xl text-center pt-0-5">
                  -- {randomQuote.a}
                </span>
              </blockquote>
            )}
          </div>
        </div>
        <div className="flex justify-center pt-4">
          <button
            className=" bg-violet-500 hover:bg-violet-600 text-white rounded-lg p-3"
            onClick={fetchData}
          >
            Get Another Quote
          </button>
        </div>
      </div>
    </>
  );
}

export default Quotes;
