# AC SuperCenter — Website Update Cheat Sheet

## How to Make Changes to the Live Website

### Step 1 — Open Claude Code
Open Claude Code from the "Claude Code Test Folder" directory (same as always).
Tell Claude what you want changed in plain English.

### Step 2 — Claude Makes the Edits
Claude will update the files directly. Review the changes if you like.

### Step 3 — Push to GitHub (goes live automatically)
Run this command in the terminal:

```
cd "/Users/tmabry/Claude Code Test Folder/acsupercenter" && git add . && git commit -m "describe your change here" && git push
```

Vercel detects the push and rebuilds the live site in ~60 seconds. That's it.

---

## Common Update Examples

| What you want | What to tell Claude |
|---------------|---------------------|
| Update prices | "Update the pricing section — Value Series is now $X,XXX, Performance is $X,XXX, Comfort is $X,XXX" |
| Change phone number | "Change the phone number to XXX-XXX-XXXX everywhere" |
| Update email | "Change the contact form email to info@acsupercenter.com" |
| New section | "Add a financing section after the pricing section" |
| Edit any text | "Change the hero headline to..." |
| Add a city | "Add Galveston to the service areas" |

---

## Important Links

| What | URL |
|------|-----|
| Live preview site | https://acsupercenter-com.vercel.app |
| Real domain (once pointed) | https://www.acsupercenter.com |
| GitHub repo | https://github.com/mabryac1-cmyk/acsupercenter.com |
| Vercel dashboard | https://vercel.com |
| Resend (email) | https://resend.com |

---

## When You're Ready to Point Your Real Domain

1. Log in to **Vercel** → open the acsupercenter-com project
2. Go to **Settings → Domains**
3. Add `acsupercenter.com`
4. Vercel will give you DNS records to add in GoDaddy
5. Log in to **GoDaddy** → DNS settings for acsupercenter.com
6. Add the records Vercel shows you
7. Done — usually live within 1 hour

---

## Things to Update Later

- [ ] Real system prices in the pricing section
- [ ] Switch contact email to info@acsupercenter.com (once that email is set up)
- [ ] Update RESEND_FROM_EMAIL in Vercel environment variables (once acsupercenter.com email is verified in Resend)
- [ ] Point GoDaddy DNS to Vercel
- [ ] Add real photos (hero background, Trane system images)
