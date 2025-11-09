import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    console.log('Calling DeepSeek API with messages:', messages.length);

    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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'
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: messages,
        temperature: 0.7,
        max_tokens: 500,
        stream: false
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('DeepSeek API error:', response.status, errorData);
      throw new Error(`DeepSeek API error: ${response.status} - ${errorData}`);
    }

    const data = await response.json();
    console.log('DeepSeek response:', data);
    return NextResponse.json(data);

  } catch (error) {
    console.error('Error in chat API route:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Failed to process chat request', details: errorMessage },
      { status: 500 }
    );
  }
}
