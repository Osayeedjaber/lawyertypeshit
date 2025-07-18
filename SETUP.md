# Setup Guide for Discord Webhook & Calendly Integration

## 🚀 Quick Setup

### 1. Discord Webhook Setup

1. **Create a Discord Server** (if you don't have one)
2. **Create a Text Channel** for notifications (e.g., "#legal-notifications")
3. **Create a Webhook:**
   - Right-click on your channel → "Edit Channel"
   - Go to "Integrations" → "Webhooks"
   - Click "Create Webhook"
   - Copy the webhook URL

4. **Update the Code:**
   Replace `YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN` with your actual webhook URL in these files:
   - `src/lib/booking.ts` (line 7)
   - `src/hooks/useContactForm.ts` (line 8)

### 2. Calendly Setup

1. **Create a Calendly Account** at https://calendly.com
2. **Set up your availability** and meeting types
3. **Get your Calendly URL:**
   - Go to your Calendly dashboard
   - Copy your booking page URL (e.g., `https://calendly.com/your-username/consultation`)

4. **Update the Code:**
   Replace the Calendly URL in `src/lib/booking.ts` (line 3):
   ```typescript
   const CALENDLY_URL = 'https://calendly.com/your-username/legal-consultation';
   ```

## 📋 Features Overview

### Contact Methods:
1. **Schedule Consultation** → Opens Calendly booking page
2. **Send Message** → Uses contact form to send Discord notification

### Discord Notifications:
- 📅 **Scheduling notifications** when someone accesses Calendly
- 💼 **Contact form submissions** with full details
- 🎨 **Rich embeds** with organized information

### Form Validation:
- ✅ **Real-time validation** with error messages
- 🔄 **Loading states** during submission
- 🎉 **Success notifications** using toast messages

## 🔧 Testing

1. **Test Contact Form:**
   - Fill out the contact form
   - Check Discord channel for notification

2. **Test Calendly Integration:**
   - Click "Schedule Consultation"
   - Verify Calendly opens in popup
   - Check Discord for access notification

## 🎨 Customization

### Discord Webhook Messages:
- Edit embed colors and content in `src/lib/booking.ts`
- Modify notification messages in `src/hooks/useContactForm.ts`

### Calendly Integration:
- Change popup window size in `openCalendlyWidget()` function
- Customize notification messages for scheduling

## 📱 Features Included:

### ✅ Fully Functional Buttons:
- **Hero Section:** Schedule Consultation + Send Message
- **Services Section:** Send Message (each service card)
- **Services CTA:** Schedule Consultation + Get Free Quote
- **Contact Form:** Full validation + Discord notifications
- **Navigation:** Smooth scrolling to sections
- **Phone Numbers:** Clickable phone dialing

### 🎯 Two Main Contact Paths:
1. **Quick Contact:** Discord notification via contact form
2. **Formal Booking:** Calendly integration for consultations

### 🔔 Discord Notifications Include:
- 👤 **Contact Details:** Name, email, phone
- 📝 **Message Content:** Full message with legal matter type
- ⏰ **Timestamps:** When the contact was made
- 🎨 **Rich Formatting:** Professional Discord embeds

## 🚀 Deployment

The website is ready for deployment. Just make sure to:
1. Update Discord webhook URLs
2. Update Calendly booking URL
3. Test both integrations work correctly

## 🔒 Security Notes

- Discord webhook URLs should be kept secure
- Consider using environment variables for production
- Test thoroughly before going live

---

*Your professional legal website is now ready with Discord notifications and Calendly booking integration!*
