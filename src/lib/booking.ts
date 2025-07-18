// Calendly integration for scheduling
const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/osayeedjaber18';

// Discord webhook for notifications
const DISCORD_WEBHOOK_URL = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL || '';

// Send notification to Discord
const sendDiscordNotification = async (message: string, isScheduling = false) => {
  try {
    const embed = {
      title: isScheduling ? '📅 New Consultation Scheduled' : '💼 New Contact Form Message',
      description: message,
      color: isScheduling ? 0xf59e0b : 0x3b82f6, // amber for scheduling, blue for messages
      timestamp: new Date().toISOString(),
      footer: {
        text: 'Advocate Md. Shahadat Hossain - Legal Services'
      }
    };

    await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        embeds: [embed]
      })
    });
  } catch (error) {
    console.error('Failed to send Discord notification:', error);
  }
};

export const openCalendlyWidget = () => {
  // Open Calendly in a new tab
  window.open(CALENDLY_URL, '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');
  
  // Send notification that someone accessed the scheduling page
  sendDiscordNotification(
    `🔔 Someone opened Calendly for scheduling.\n\n**Time:** ${new Date().toLocaleString()}\n**URL:** ${CALENDLY_URL}`,
    true
  );
};

export const openCalendlyInline = () => {
  // Create and show inline Calendly widget
  const existingWidget = document.getElementById('calendly-inline-widget');
  if (existingWidget) {
    existingWidget.remove();
  }
  
  const widget = document.createElement('div');
  widget.id = 'calendly-inline-widget';
  widget.className = 'calendly-inline-widget';
  widget.innerHTML = `
    <iframe 
      src="${CALENDLY_URL}?hide_event_type_details=1&hide_gdpr_banner=1" 
      width="100%" 
      height="600" 
      frameborder="0"
      style="border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); min-height: 600px;"
    ></iframe>
  `;
  
  const widgetContainer = document.getElementById('calendly-widget-container');
  if (widgetContainer) {
    widgetContainer.appendChild(widget);
    widget.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  
  // Send notification
  sendDiscordNotification(
    `🔔 Someone opened the inline Calendly widget.\n\n**Time:** ${new Date().toLocaleString()}\n**Page:** Legal Consultation Booking`,
    true
  );
};

// Alternative: Use a simple mailto for getting legal advice
export const openEmailClient = () => {
  const email = 'advshahadathossain16@gmail.com';
  const subject = 'Legal Consultation Request';
  const body = 'Dear Advocate Md. Shahadat Hossain,\n\nI would like to schedule a consultation regarding my legal matter.\n\nBest regards,';
  
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoUrl;
};

// Phone call function
export const initiatePhoneCall = (phoneNumber: string) => {
  window.location.href = `tel:${phoneNumber}`;
};

// WhatsApp function
export const openWhatsApp = (phoneNumber: string, message: string) => {
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
  
  // Send notification to Discord
  sendDiscordNotification(
    `📱 Someone contacted via WhatsApp!\n\n**Time:** ${new Date().toLocaleString()}\n**Phone:** ${phoneNumber}\n**Message:** ${message}`,
    false
  );
};

// Send message via Discord (contact form)
export const sendContactMessage = async (name: string, email: string, message: string) => {
  try {
    const embed = {
      title: '📩 New Contact Message',
      description: `Someone wants to get in touch!`,
      color: 0x3b82f6, // blue color
      timestamp: new Date().toISOString(),
      fields: [
        {
          name: '👤 Name',
          value: name,
          inline: true
        },
        {
          name: '📧 Email',
          value: email,
          inline: true
        },
        {
          name: '💬 Message',
          value: message.substring(0, 1000) + (message.length > 1000 ? '...' : ''),
          inline: false
        }
      ],
      footer: {
        text: 'Advocate Md. Shahadat Hossain - Legal Services'
      }
    };

    await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        embeds: [embed]
      })
    });
    
    return true;
  } catch (error) {
    console.error('Failed to send Discord notification:', error);
    return false;
  }
};

// Schedule consultation with Calendly
export const scheduleConsultation = () => {
  // Send notification to Discord that someone is about to schedule
  sendDiscordNotification(
    `🚀 Someone is about to schedule a consultation!\n\n**Time:** ${new Date().toLocaleString()}\n**Action:** Opening Calendly booking section\n**IP:** ${window.location.origin}`,
    true
  );
  
  // Open inline Calendly widget
  openCalendlyInline();
};

// Get free quote function
export const requestQuote = () => {
  // Send Discord notification about quote request
  sendDiscordNotification(
    `💰 Someone requested a free legal quote!\n\n**Time:** ${new Date().toLocaleString()}\n**Action:** Free Quote Request\n**Page:** ${window.location.href}\n\n**Next Steps:** Client will be contacted for quote details.`,
    false
  );
  
  // Open WhatsApp for direct quote request
  const whatsappMessage = `Hello! I would like to request a free legal quote for my case. Please let me know what information you need to provide an accurate estimate.`;
  openWhatsApp('+8801682181118', whatsappMessage);
};

// Alternative email-based quote request
export const requestQuoteViaEmail = () => {
  const email = 'advshahadathossain16@gmail.com';
  const subject = 'Free Legal Quote Request';
  const body = 'Dear Advocate Md. Shahadat Hossain,\n\nI would like to request a free quote for my legal matter.\n\nPlease find the details below:\n\nType of Legal Matter: \nBrief Description: \nUrgency Level: \nPreferred Contact Method: \nBudget Range: \nTimeline: \n\nThank you for your time.\n\nBest regards,';
  
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoUrl;
  
  // Send notification
  sendDiscordNotification(
    `📧 Someone requested a quote via email!\n\n**Time:** ${new Date().toLocaleString()}\n**Method:** Email\n**Subject:** ${subject}`,
    false
  );
};
