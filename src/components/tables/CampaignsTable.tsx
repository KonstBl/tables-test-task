export function CampaignsTable() {
    return(
        <div className="ml-4">
        <table>
        <tbody className="divide-y divide-gray-200">
            <tr>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">id</td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">clicks</td>
                <td className="whitespace-nowrap px-3 py-2 font-medium text-gray-900">cost</td>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">date</td>
            </tr>
        </tbody>
        </table>
        </div>
    )
}