export function ProfilesTable() {
    return(
        <table className=" min-w-80">
        <tbody className="divide-y divide-gray-200">
            <tr className="flex items-center">
                <td className="flex-1 pr-14 pl-4 py-2 font-medium text-gray-900">country</td>
                <td className="flex-1 px-12 py-2 font-medium text-gray-900">marketplace</td>
                <td className="flex-1 px-12 py-2 font-medium text-gray-900">id</td>
            </tr>
        </tbody>
        </table>
    )
}