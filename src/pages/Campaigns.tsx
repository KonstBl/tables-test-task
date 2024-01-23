import { useParams } from "react-router";
import { CampaignRow } from "../components/rows/CampaignRow";
import { campaigns } from "../data/Data";
import { BreadCrumbs } from "../components/BreadCrumbs";
import { CampaignsTable } from "../components/tables/CampaignsTable";

export function Campaigns() {
    const id = useParams()
    const profilesCampaigns = campaigns.filter(campaigns => campaigns.profileId === id.profileId)

    const accountId = localStorage.getItem('accountId')

    const breadcrumbs = [
        { to: '/', label: 'Accounts' },
        {to: `/${accountId}/profiles`, label: 'Profiles'},
        {to: `/${id.profileId}`, label: 'Campaigns'}
      ];

    return(
        <div className="container mx-auto max-w-80 pt-5">
            <BreadCrumbs items={breadcrumbs} />
    <div className="rounded-lg border border-gray-200">
        <CampaignsTable />
  {profilesCampaigns.map((campaign) => (
      <div className="p-2 m-1" key={campaign.campaignId}>
        <CampaignRow campaign={campaign}/>
        </div>
   ))}
</div>
  </div>
    )
}