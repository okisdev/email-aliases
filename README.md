# Email Aliases

A [Skiff Mail Quick Aliases](https://skiff.com/quick-alias) alternative.

## How it works

This is a simple email aliases service that uses Cloudflare Workers to forward emails to a single email address.

You can use anything@your.domain.com to receive emails, and all the emails will be forwarded to one email address.

As Skiff Mail said, **Protect your inbox and identify**. You can use this service to protect your inbox from spam and identify the source of the emails.

## Example:

-   all the receipts can be sent to `receipts@your.domain.com`
-   all the newsletters can be sent to `newsletters@your.domian.com`
-   all the bookings can be sent to `booking@your.domain.com`

## Requirements

-   `Wrangler` installed
-   `bun` installed
-   Cloudflare Account

## Usage

1. Clone the repository: `git clone https://github.com/okisdev/email-aliases.git`
2. Run `bun install` to install the dependencies.
3. Run `wrangler login` to login to your Cloudflare account.
4. Fill in the domain and matcher in `config/domain.ts`, all the `something@your.domain.com` will be forwarded to the email address you set in `config/matcher.ts`.
5. Run `wrangler deploy` to publish the worker to Cloudflare.
6. Go to your Cloudflare Workers and Pages dashboard: <https://dash.cloudflare.com/account-id/workers/services/view/email-aliases/production/triggers#email>, and add an new email trigger. (See <https://developers.cloudflare.com/email-routing/email-workers/> to learn more about Email Workers.)
7. In Edit catch-all address page, set Action to `Send to a Worker`, and set the Worker to the worker you just deployed.
8. Done!

Now try to send an email to `something@your.domain.com`, and you will receive the email in the email address you set in `config/matcher.ts`.

## LICENSE

[MIT](./LICENSE)
