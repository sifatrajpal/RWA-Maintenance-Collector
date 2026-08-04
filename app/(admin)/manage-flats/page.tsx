import { getFlats } from './actions'
import FlatForm from './FlatForm'



export default async function ManageFlatsPage() {

// id, first_name, last_name, flat_number, phone_number'
  type flatsDetailsType = {
    id: string
    first_name: string
    last_name: string
    flat_number: string
    phone_number: string

  }


  const flatsDetails: flatsDetailsType[] = await getFlats();

  

  return (
    <div>
      <FlatForm></FlatForm>
      <div>
        {flatsDetails.map((flatsDetail) => {
          return(
            <div key={flatsDetail.id}>
              <ul>
                <li >{flatsDetail.id}</li>
                <li >{flatsDetail.first_name}</li>
                <li >{flatsDetail.last_name}</li>
                <li >{flatsDetail.flat_number}</li>
                <li>{flatsDetail.phone_number}</li>
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}