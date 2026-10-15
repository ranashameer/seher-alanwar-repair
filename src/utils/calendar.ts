import { BUSINESS_INFO } from '../data/business';

export function downloadCalendarEvent(params: {
  title: string;
  description: string;
  location?: string;
  startTime?: Date;
  durationMinutes?: number;
}) {
  const {
    title = 'Seher Alanwar Appliance Repair Technician Appointment',
    description = 'Technician arriving for doorstep diagnostic and repair.',
    location = BUSINESS_INFO.address,
    startTime = new Date(Date.now() + 45 * 60 * 1000), // Default 45 mins from now
    durationMinutes = 60,
  } = params;

  const endTime = new Date(startTime.getTime() + durationMinutes * 60 * 1000);

  const formatDate = (date: Date) => {
    return date.toISOString().replace(/-|:|\.\d+/g, '');
  };

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Seher Alanwar Trading//Appliance Repair Dubai//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `DTSTART:${formatDate(startTime)}`,
    `DTEND:${formatDate(endTime)}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${description} - Phone: ${BUSINESS_INFO.phoneDisplay}`,
    `LOCATION:${location}`,
    'STATUS:CONFIRMED',
    'BEGIN:VALARM',
    'TRIGGER:-PT15M',
    'ACTION:DISPLAY',
    'DESCRIPTION:Technician arrival reminder',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'seher-alanwar-appointment.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function generateGoogleCalendarUrl(params: {
  title: string;
  description: string;
  location?: string;
}) {
  const startTime = new Date(Date.now() + 45 * 60 * 1000);
  const endTime = new Date(startTime.getTime() + 60 * 60 * 1000);
  
  const formatDate = (date: Date) => {
    return date.toISOString().replace(/-|:|\.\d+/g, '');
  };

  const startIso = formatDate(startTime);
  const endIso = formatDate(endTime);

  const baseUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
  const text = encodeURIComponent(params.title);
  const details = encodeURIComponent(`${params.description}\nHotline: ${BUSINESS_INFO.phoneDisplay}`);
  const location = encodeURIComponent(params.location || BUSINESS_INFO.address);

  return `${baseUrl}&text=${text}&dates=${startIso}/${endIso}&details=${details}&location=${location}`;
}
