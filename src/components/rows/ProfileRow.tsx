import { Link } from "react-router-dom"
import { IProfile } from "../../models"

interface ProfileProps {
    profile: IProfile
}

export function ProfileRow({profile}: ProfileProps) {
    return(
        <div className="rounded-lg flex-row grid-cols-4 border border-gray-200">
            <table className="min-w-full">
  <tbody className="divide-y divide-gray-200">
    <tr className="flex items-center">
      <td className=" px-4 py-2 flex-1 text-sm font-medium text-gray-900">
        {profile.country}
      </td>
      <td className="px-4 py-2 flex-1 text-sm text-gray-700">
        {profile.marketplace}
      </td>
      <td className="px-4 py-2 flex-1 text-sm text-gray-700 ">
        {profile.profileId}
      </td>
      <td className="px-4 py-2 flex-1 justify-end">
        <Link
        to={`/${profile.profileId}/campaigns`}
          className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
        >
          View Campaigns
        </Link>
      </td>
    </tr>
  </tbody>
  </table>
</div>
    )
}