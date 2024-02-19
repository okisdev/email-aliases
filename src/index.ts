import { matchers } from '@/config/domain';

export default {
    async email(message: ForwardableEmailMessage) {
        const domainEndsWithMatch = matchers.find((x) => message.headers?.get('to')?.endsWith(x.domain));

        if (domainEndsWithMatch) {
            console.log(`Domain Matched: ${domainEndsWithMatch.domain}, sending email to ${domainEndsWithMatch.receiver}`);

            await message.forward(domainEndsWithMatch.receiver).then((res) => {
                console.log('Email forwarded', res);
            });
        } else {
            console.log('No domain match');

            message.setReject('Unable to locate the email you requested. Please contact the administrator.');
        }
    },
};
