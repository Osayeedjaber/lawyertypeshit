import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';

// Discord webhook for notifications
const DISCORD_WEBHOOK_URL = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL || '';

// Send notification to Discord
const sendDiscordNotification = async (data: ContactFormData) => {
  try {
    const embed = {
      title: '💼 New Contact Form Message',
      description: `A new message has been received from the website contact form.`,
      color: 0x3b82f6, // blue color
      timestamp: new Date().toISOString(),
      fields: [
        {
          name: '👤 Name',
          value: `${data.firstName} ${data.lastName}`,
          inline: true
        },
        {
          name: '📧 Email',
          value: data.email,
          inline: true
        },
        {
          name: '📞 Phone',
          value: data.phone,
          inline: true
        },
        {
          name: '📝 Legal Matter',
          value: data.legalMatter,
          inline: true
        },
        {
          name: '💬 Message',
          value: data.message.substring(0, 1000) + (data.message.length > 1000 ? '...' : ''),
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
  } catch (error) {
    console.error('Failed to send Discord notification:', error);
  }
};

const contactFormSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  legalMatter: z.string().min(1, 'Please select a legal matter type'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      legalMatter: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Send notification to Discord
      await sendDiscordNotification(data);
      
      // In a real application, you would also send this data to your backend
      console.log('Form submitted:', data);
      
      // Show success message
      toast.success('Thank you for your message! We will get back to you soon.');
      
      // Reset form
      form.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    onSubmit,
    isSubmitting,
  };
};
