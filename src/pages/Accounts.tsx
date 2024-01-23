import { ChangeEvent, useState } from "react";
import { AccountRow } from "../components/rows/AccountRow";
import { accounts } from "../data/Data";
import { BreadCrumbs } from "../components/BreadCrumbs";
import { AccountsTable } from "../components/tables/AccountsTable";
import { IAccount } from "../models";

export function Accounts() {
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState(false)

    const breadcrumbs = [
      { to: '/', label: 'Accounts' }
    ];

    const sortByDate = (a: IAccount, b: IAccount) => {
      return new Date(a.creationDate).getTime() - new Date(b.creationDate).getTime()
    }

    const sortedAccounts = accounts.slice().sort(sortByDate)

    const searchAccount = ()=> {
        const query = search.toLowerCase()
            if(query !== '') {
            return accounts.filter((account) => (account.email.toLowerCase().includes(query)))
        } else if(sort) {
          return sortedAccounts
        }
        return accounts
    }

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const handleSortChange = () => {
        setSort(prev => !prev)
    }

    return(
        <div className="container mx-auto max-w-4xl pt-5">
        <div className="flex items-center justify-between mb-3">
          <input
            onChange={handleSearchChange}
            placeholder="Search..."
            className="p-1 border rounded"
            value={search}
          />
          {sort ?(
            <button onClick={handleSortChange}  className="px-2 p-1 border border-transparent rounded hover:shadow-md">
           <img width="30" height="30" src="https://img.icons8.com/ios/50/numerical-sorting-12.png" alt="numerical-sorting-12"/>
            </button>
          ):(
            <button onClick={handleSortChange}  className="px-2 p-1 border border-transparent rounded hover:shadow-md">
            <img width="30" height="30" src="https://img.icons8.com/ios/50/numerical-sorting-21--v1.png" alt="numerical-sorting-21--v1"/>
            </button>
          )}
          
        </div>
        <BreadCrumbs items={breadcrumbs} />
        <div className="rounded-lg border border-gray-200 flex flex-col">
          <AccountsTable />
          {!sort ? (
          <>
          {searchAccount().map((account) => (
            <div className="p-2 m-1 min-w-full" key={account.accountId}>
              <AccountRow account={account} />
            </div>
          ))}
          </>
            ):(
          <>
          {sortedAccounts.map((account) => (
            <div className="p-2 m-1 min-w-full" key={account.accountId}>
              <AccountRow account={account} />
            </div>
          ))}
          </>)}
        </div>
      </div>
    )
}