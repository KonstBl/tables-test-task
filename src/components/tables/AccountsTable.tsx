export function AccountsTable() {
    return(
        <table className="min-w-max flex items-center">
            <tbody>
              <tr>
                <td className="px-14 py-2 flex-1 font-medium text-gray-900">id</td>
                <td className="px-24 py-2 flex-1 font-medium text-gray-900">email</td>
                <td className="px-14 py-2 flex-1 font-medium text-gray-900">authToken</td>
                <td className="px-12 py-2 flex-1 font-medium text-gray-900">creationDate</td>
              </tr>
            </tbody>
          </table>
    )
}