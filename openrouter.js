
// This is a serverless function.
// You would typically place this in a /functions or /api directory
// depending on your hosting provider (e.g., Netlify, Vercel).

exports.handler = async function(event) {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const { messages } = JSON.parse(event.body);
    const API_KEY = process.env.OPENROUTER_API_KEY;

    if (!API_KEY) {
        return { statusCode: 500, body: 'API key is not configured.' };
    }
    
    const body = {
        model: "openrouter/horizon-alpha",
        temperature: 0.9,
        max_tokens: 2500,
        messages
    };

    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        const text = data?.choices?.[0]?.message?.content ?? "";

        return {
            statusCode: 200,
            body: JSON.stringify({ reply: text })
        };

    } catch (error) {
        console.error("Error calling OpenRouter API:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};
