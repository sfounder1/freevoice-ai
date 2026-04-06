import { NextRequest, NextResponse } from "next/server";

// Map UI voice names to ElevenLabs voice IDs
const voiceMap: Record<string, string> = {
  "Aria - Female, US English": "9BWtsMINqrJLrRacOk9x",     // Aria
  "Marcus - Male, US English": "CwhRBWXzGAHq8TQ4Fs17",     // Roger
  "Sofia - Female, Spanish": "XB0fDUnXU5powFXDhCwa",       // Charlotte
  "Liam - Male, British English": "bIHbv24MWmeRgasZH58o",  // Will
  "Yuki - Female, Japanese": "FGY2WhTYpPnrIDTdsKH5",       // Laura
  "Omar - Male, Arabic": "TX3LPaxmHKxFdv7VOQHJ",          // Liam
  "Emma - Female, Australian English": "pFZP5JQG7iQjIQuC4Bku", // Lily
  "James - Male, US English": "nPczCjzI2devNBz1zQrb",      // Brian
};

export async function POST(req: NextRequest) {
  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey || apiKey === "your_elevenlabs_api_key_here") {
    return NextResponse.json(
      { error: "ElevenLabs API key not configured" },
      { status: 500 }
    );
  }

  try {
    const { text, voice, speed } = await req.json();

    if (!text || !text.trim()) {
      return NextResponse.json({ error: "Text is required" }, { status: 400 });
    }

    const voiceId = voiceMap[voice] || voiceMap["Aria - Female, US English"];

    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
      {
        method: "POST",
        headers: {
          "xi-api-key": apiKey,
          "Content-Type": "application/json",
          Accept: "audio/mpeg",
        },
        body: JSON.stringify({
          text: text.slice(0, 5000),
          model_id: "eleven_flash_v2_5",
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75,
            speed: speed || 1.0,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: `ElevenLabs API error: ${response.status} ${errorText}` },
        { status: response.status }
      );
    }

    const audioBuffer = await response.arrayBuffer();
    return new NextResponse(audioBuffer, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Disposition": 'attachment; filename="speech.mp3"',
      },
    });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Unknown error" },
      { status: 500 }
    );
  }
}
