import { ICampaign } from "../../models"

interface CampaignProps {
    campaign: ICampaign
}

export function CampaignRow({campaign}: CampaignProps) {
    return(
        <div className="rounded-lg border border-gray-200">
            <table>
                <tbody className="divide-y divide-gray-200">
                    <tr>
                        <td className="px-4 py-2 text-sm font-medium text-gray-900">
                            {campaign.campaignId}
                        </td>
                        <td className="px-4 py-2 text-sm text-gray-700">
                            {campaign.clicks}
                        </td>
                        <td className="px-4 py-2 text-sm text-gray-700">
                            {campaign.cost}
                        </td>
                        <td className="px-4 py-2 text-sm text-gray-700">
                            {campaign.date}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}