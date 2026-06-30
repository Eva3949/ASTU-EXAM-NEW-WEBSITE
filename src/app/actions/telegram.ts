'use server';

/**
 * @fileOverview Server action to send contact form messages to a Telegram Bot.
 * Requires TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID environment variables.
 */

export async function sendTelegramMessage(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error('Telegram configuration missing. Please set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID.');
    return { success: false, error: 'Server configuration error.' };
  }

  // Create an attractive HTML-formatted message
  const text = `
<b>🚀 New Message from ASTU EXAM Landing Page</b>

<b>👤 From:</b> ${data.name}
<b>📧 Email:</b> ${data.email}
<b>📌 Subject:</b> ${data.subject}

<b>💬 Message:</b>
<i>${data.message}</i>

---
📅 Sent at: ${new Date().toLocaleString()}
  `;

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'HTML',
      }),
    });

    const result = await response.json();

    if (result.ok) {
      return { success: true };
    } else {
      console.error('Telegram API error:', result);
      return { success: false, error: result.description || 'Failed to send message.' };
    }
  } catch (error) {
    console.error('Network error sending to Telegram:', error);
    return { success: false, error: 'Connection failed. Please try again later.' };
  }
}
