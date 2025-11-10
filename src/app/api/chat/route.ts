import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    console.log('Calling OpenRouter API with DeepSeek model, messages:', messages.length);
    console.log('Messages:', JSON.stringify(messages, null, 2));

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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',
        'HTTP-Referer': 'https://adventuresumbawaisland.com',
        'X-Title': 'Adventure Sumbawa Island'
      },
      body: JSON.stringify({
        model: 'deepseek/deepseek-chat',
        messages: messages,
        temperature: 0.7,
        max_tokens: 500
      })
    });

    const responseText = await response.text();
    console.log('OpenRouter raw response:', responseText);

    if (!response.ok) {
      console.error('OpenRouter API error:', response.status, responseText);
      
      // Return fallback response
      return NextResponse.json({
        choices: [{
          message: {
            role: 'assistant',
            content: 'Maaf, sistem AI sedang mengalami gangguan. Untuk informasi lebih lanjut tentang paket tour kami, silakan hubungi kami via WhatsApp atau lihat halaman tour. 🙏'
          }
        }]
      });
    }

    const data = JSON.parse(responseText);
    console.log('OpenRouter parsed response:', data);
    return NextResponse.json(data);

  } catch (error) {
    console.error('Error in chat API route:', error);
    
    // Return fallback response
    return NextResponse.json({
      choices: [{
        message: {
          role: 'assistant',
          content: 'Maaf, sistem AI sedang mengalami gangguan. Untuk informasi lebih lanjut tentang paket tour kami, silakan hubungi kami via WhatsApp atau lihat halaman tour. 🙏'
        }
      }]
    });
  }
}
