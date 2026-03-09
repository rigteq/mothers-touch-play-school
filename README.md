This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## FormSubmit.co Setup

This project uses FormSubmit.co - a free third-party form backend service that handles email delivery directly without needing a backend server.

### How It Works:
- Forms submit POST requests to `https://formsubmit.co/yatendra9971@gmail.com`
- Emails are instantly sent to `yatendra9971@gmail.com`
- Includes spam protection with honeypot fields
- Custom email subjects and HTML templates
- **Thank You Popup**: After successful submission, users see a confirmation popup

### Form Configuration:
Each form includes these hidden fields:
- `_honey` - Spam protection (honeypot)
- `_captcha="false"` - Disables captcha
- `_subject` - Custom email subject
- `_template="box"` - HTML email template
- `_next` - Redirects back with success parameters to show thank you popup

### Thank You Popup:
- Automatically appears after form submission
- Shows "Thank You! Your query has been submitted successfully. Our team will contact you soon."
- Can be closed by clicking the X button or outside the popup
- Uses URL parameters to detect successful submissions

### Forms Updated:
1. **Dashboard Popup** (FloatingElements.tsx) - Appears after 5 seconds
2. **Admission Enquiry Form** (Contact.tsx) - Full enquiry form
3. **Footer Enquiry Form** (Footer.tsx) - Quick callback request

### Testing:
After form submission, users are redirected back to the same page with success parameters, triggering the thank you popup.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
