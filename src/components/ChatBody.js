import { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import {Button} from 'react-bootstrap';

function ChatBody() {
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState("");

  const handleClick = async () => {
    setLoading(true);
    try{
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0.5,
        max_tokens: 4000,
      });
      setResult(response.data.choices[0].text);
    }
    catch(error){
      console.error(error);
    }
    setLoading(false);
  };
  return (
    <main className='main'>
      <div className='w-2/4 mx-auto txt'>
        <textarea 
          type="text" 
          value={prompt} 
          onChange={(e) => setPrompt(e.target.value)} 
          placeholder="Write your prompt..." 
          className="textarea"
         ></textarea>

         {/* <button 
            onClick={handleClick} 
            disabled={loading || prompt.length === 0} 
            className="btn"
         >
          {loading ? "Generating...." : "Generate"}
         </button> */}
         
         <Button variant="primary"
         onClick={handleClick} 
         disabled={loading || prompt.length === 0} 
         className="btn">{loading ? "Generating...." : "Generate"}</Button>

         <pre className='result'>{result}</pre>
      </div>
      <img src='https://images.pexels.com/photos/62235/rabbit-animal-cute-gray-62235.jpeg'></img>
    </main>
  );
}

export default ChatBody;
