import { useParams } from "react-router";
import { ProfileRow } from "../components/rows/ProfileRow";
import { profiles } from "../data/Data";
import { BreadCrumbs } from "../components/BreadCrumbs";
import { ChangeEvent, useState } from "react";
import { ProfilesTable } from "../components/tables/ProfilesTable";

export function Profiles() {
    const [search, setSearch] = useState('')
    const id = useParams()
    const {accountId} = useParams()
    const accountProfiles = profiles.filter(profiles => profiles.accountId === id.accountId)

    localStorage.setItem('accountId', accountId!)

    const breadcrumbs = [
        { to: '/', label: 'Accounts' },
        {to: `/${id.accountId}/profiles`, label: 'Profiles'}
      ];

      const searchProfile = ()=> {
        const query = search.toLowerCase()
        if(query !== ''){
            return accountProfiles.filter((profile)=> (profile.country.toLowerCase().includes(query) || profile.marketplace.toLowerCase().includes(query)))
        }
        return accountProfiles
      }

      const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    return(
        <div className="container mx-auto max-w-2xl pt-5">
            <div className="flex items-center justify-between mb-3">
            <input
            onChange={handleSearchChange}
            placeholder="Search..."
            className="p-1 border rounded"
            value={search}
          />
            </div>
        <BreadCrumbs items={breadcrumbs} />
   <div className="rounded-lg border border-gray-200">
        <ProfilesTable />
  {searchProfile().map((profile) => (
      <div className="p-2 m-1" key={profile.profileId}>
        <ProfileRow profile={profile}/>
        </div>
   ))}
</div>
  </div>
    )
}