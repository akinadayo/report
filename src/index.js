export default {
    async fetch(req, env) {
      const body = await req.json();
      const res  = await fetch("https://api.openai.com/v1/chat/completions", {
        method : "POST",
        headers: {
          "Authorization": `Bearer ${env.OPENAI_KEY}`,
          "Content-Type" : "application/json"
        },
        body   : JSON.stringify(body)
      });
      return new Response(res.body, {
        status : res.status,
        headers: { "Content-Type": "application/json",
                   "Access-Control-Allow-Origin": "*" }
      });
    }
  };
