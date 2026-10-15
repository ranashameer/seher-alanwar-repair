import { BUSINESS_INFO } from '../data/business';

export interface WhatsAppInquiryParams {
  appliance?: string;
  symptom?: string;
  area?: string;
  customMessage?: string;
  urgency?: 'Immediate (30-60 Min)' | 'Today' | 'General Inquiry';
}

export function generateWhatsAppLink(params: WhatsAppInquiryParams = {}): string {
  const {
    appliance,
    symptom,
    area,
    customMessage,
    urgency = 'Immediate (30-60 Min)',
  } = params;

  let text = `Hello Seher Alanwar Repair Team! 🛠️\nI need emergency doorstep appliance repair service in Dubai.\n\n`;

  if (appliance) {
    text += `• *Appliance:* ${appliance}\n`;
  }
  if (symptom) {
    text += `• *Problem / Symptom:* ${symptom}\n`;
  }
  if (area) {
    text += `• *Location / Area:* ${area}, Dubai\n`;
  }
  text += `• *Urgency:* ${urgency}\n`;

  if (customMessage) {
    text += `• *Details:* ${customMessage}\n`;
  }

  text += `\nPlease confirm technician availability and estimated arrival time. Thank you!`;

  return `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(text)}`;
}

export function generateCallLink(): string {
  return BUSINESS_INFO.telLink;
}
