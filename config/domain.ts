interface DomainMatch {
    domain: string;
    receiver: string;
}

export const matchers: DomainMatch[] = [
    {
        domain: 'your.domain.com',
        receiver: 'someone@my.domain.com',
    },
];
