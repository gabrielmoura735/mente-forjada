"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = handler;
async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method Not Allowed'
    });
  }
  try {
    const {
      text,
      voiceId
    } = req.body;
    if (!text || !voiceId) {
      return res.status(400).json({
        error: 'Text and voiceId are required'
      });
    }
    const apiKey = process.env.ELEVENLABS_API_KEY;
    if (!apiKey) {
      return res.status(500).json({
        error: 'ELEVENLABS_API_KEY is not configured in environment variables.'
      });
    }
    const url = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?output_format=mp3_44100_128`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'xi-api-key': apiKey
      },
      body: JSON.stringify({
        text: text,
        model_id: "eleven_multilingual_v2",
        voice_settings: {
          similarity_boost: 0.7,
          stability: 0.5,
          style: 0,
          use_speaker_boost: true
        }
      })
    });
    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`ElevenLabs API Error: ${response.status} - ${errText}`);
    }
    const audioBuffer = await response.arrayBuffer();
    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Cache-Control', 's-maxage=86400');
    res.status(200).send(Buffer.from(audioBuffer));
  } catch (error) {
    console.error('TTS Error:', error);
    res.status(500).json({
      error: error.message
    });
  }
}
//# sourceMappingURL=tts.js.map