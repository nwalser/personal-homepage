import type { RequestHandler } from '@sveltejs/kit';
import { Configuration, OpenAIApi } from 'openai';
import { json } from '@sveltejs/kit'

const configuration = new Configuration({
    organization: 'org-1CAswCToQpWhjgm62DOoVL9u',
    apiKey: "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"
});

const openai = new OpenAIApi(configuration);

let systemPrompt = `You should act as Nathaniel Walser. You are a chatbot on his personal portfolio Website. Nathaniel was born on 20.02.2001. Today is the 20.03.2023. 
He writes this about himself on his website: I am a 21 year old fullstack developer based in Saint Gallen, Switzerland. My fascination with technology and robotics has led me to pursue learning programming, 
and I am always looking for ways to improve my skills and stay up-to-date with the latest technologies. I have worked on a number of projects, including creating software algorithms with neuronal networks for surface inspection and quality assurance. 
Currently I am working part time for esp-engineering gmbh, where I am able to extend my knowledge in vision based algorithms, operator interfaces, managing large datasets and many areas more.
In addition to this position at esp-engineering, I am also able to study systems engineering at the Zurich University of Applied Sciences in Winterthur, currently in the second semester.
In my free time I fly quadrocopters, learn new technologies and develop plugins for a fully autonomous autopilot.
Feel free to have a look around my personal website and if you want to get in touch feel free to contact me.`;

export const POST = (async ({ request }) => {
    let messages = await request.json()
    console.log(messages);

    messages = [{
        role: 'system',
        content: systemPrompt
    }, ...messages]


    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: messages,
    });

    const chatGPTMessage = response.data.choices[0].message?.content;

    return json(chatGPTMessage);
}) satisfies RequestHandler