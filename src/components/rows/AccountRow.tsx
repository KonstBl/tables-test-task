import { Link } from "react-router-dom"
import { IAccount } from "../../models"

interface AccountProps {
    account: IAccount
}

export function AccountRow({account}: AccountProps) {
    return(
        <div className="rounded-lg border flex items-stretch border-gray-200">
            <table className="min-w-full">
                <tbody className="divide-y divide-gray-200">
                    <tr className="flex items-center">
                        <td className="flex-1 px-4 py-2 text-sm font-medium text-gray-900">
                            {account.accountId}
                        </td>
                        <td className="px-4 py-2 flex-1 text-sm text-gray-700">
                            {account.email}
                        </td>
                        <td className="px-4 py-2 flex-1 text-sm text-gray-700 ">
                            {account.authToken}
                        </td>
                        <td className="px-4 py-2 flex-1 text-sm text-gray-700 flex justify-center">
                            {account.creationDate}
                        </td>
                        <td className="px-4 py-2 flex-1 flex justify-end">
                            <Link
                            to={`/${account.accountId}/profiles`}
                            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                            >
                            View Profiles
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}