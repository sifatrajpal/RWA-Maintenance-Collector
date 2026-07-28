import { getFlats } from './actions'
import FlatForm from './FlatForm'

export default async function ManageFlatsPage() {
  const flats = await getFlats()

  return (
    <div>
      <FlatForm />
      <ul>
        {flats.map((flat) => (
          <li key={flat.id}>
            {flat.first_name} {flat.last_name} — {flat.flat_number}
          </li>
        ))}
      </ul>
    </div>
  )
}