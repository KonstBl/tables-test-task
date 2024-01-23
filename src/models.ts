export interface IAccount {
    accountId: number,
    email: string,
    authToken: string,
    creationDate: string
}

export interface IProfile {
    profileId: string,
    country: string,
    marketplace: string,
    accountId: string
}

export interface ICampaign {
    campaignId: string,
    clicks: number,
    cost: number,
    date: string,
    profileId: string
}